import { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import _ from "lodash";

import { jsonParse } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DefaultWidget from "@components/cloud/Custom/Default/DefaultWidget";
import WidgetRaw from "@components/cloud/Custom/Default/WidgetRaw";
import Skeleton from "@components/common/Skeleton/Skeleton";

type WidgetDVPropsType = {
  listConfig: any;
};

const WidgetDV: FC<WidgetDVPropsType> = ({ listConfig }) => {
  const router = useRouter();

  // if (_.isEmpty(listConfig)) return null;

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  const layoutRaw = router?.query?.layout || "";

  let { data, error } = useSWR(`/api/get-data?metaid=${listConfig.metadataid}`);
  const parameters = `&parameters=${JSON.stringify({
    id: listConfig.metadataid,
  })}`;
  const metaConfigAll = useSWR(
    `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}`
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <Skeleton type="loading" />;
  delete data.aggregatecolumns;
  delete data.paging;
  data = _.values(data);
  // let MetaConfig = MetaConfigAll.data;

  const metaConfig = {
    ...metaConfigAll.data,
    gridJsonConfig: jsonParse(
      metaConfigAll.data?.meta_group_grid_options_mobile?.jsonconfig,
      true
    ),
    pathConfig: _.values(
      metaConfigAll.data?.meta_group_grid_options_mobile
        ?.meta_group_config_mobile
    ),
  };

  const killerObj = {
    ...listConfig,
    metaConfig,
    otherattr: jsonParse(listConfig.otherattr),
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };

  // const RenderComponent: FC<PropsType> = dynamic(
  const RenderComponent = dynamic(
    () =>
      import(
        `@components/cloud/${listConfig.componentpath}/${listConfig.widgetcode}`
      ),
    {
      loading: () => <Skeleton type="loading" />,
    }
  );

  if (layoutRaw === "raw") {
    return (
      <WidgetRaw
        listConfig={listConfig}
        config={killerObj}
        otherattr={killerObj.otherattr}
        datasrc={data}
      />
    );
  } else {
    return (
      <WidgetWrapperStore
        config={killerObj}
        widgetnemgoo={killerObj.otherattr}
        datasrc={data}
      >
        <RenderComponent />
      </WidgetWrapperStore>
    );
  }
};

export default WidgetDV;
