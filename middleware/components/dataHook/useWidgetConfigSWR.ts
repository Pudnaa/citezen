import useSWR from "swr";
import _ from "lodash";

import { jsonParse, toBoolean } from "util/helper";
// import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
// import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
// import Skeleton from "@components/common/Skeleton/Skeleton";
import { prepareRawUrlQueryToCriteria } from "lib/urlFunctions";
import { useCloud } from "hooks/use-cloud";

// type PropsType = {
//   listConfig?: any;
//   dataProcess?: any;
// };

const useWidgetConfigSWR = (listConfig?: any) => {
  const cloudContext = useCloud();

  const { metadataid } = listConfig;
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;

  const parameters = `&parameters=${JSON.stringify({
    id: metadataid,
  })}`;
  const { data, error, mutate } = useSWR(
    `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}&metaName=${metaName}`
  );

  let dataReady = data;
  if (data) {
    dataReady = {
      ...data,
      gridJsonConfig: jsonParse(
        data?.meta_group_grid_options_mobile?.jsonconfig,
        true
      ),
      pathConfig: _.values(data?.meta_group_config_mobile),
    };
  }

  return [dataReady, error, mutate];
};

export default useWidgetConfigSWR;
