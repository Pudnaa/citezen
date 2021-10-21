import { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import _ from "lodash";

import { jsonParse, toBoolean } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DefaultWidget from "@components/cloud/Custom/Default/DefaultWidget";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { prepareRawUrlQueryToCriteria } from "lib/urlFunctions";

type PropsType = {
  listConfig: any;
};

const WidgetNoMeta: FC<PropsType> = ({ listConfig }) => {
  if (_.isEmpty(listConfig)) return null;

  const otherattr = jsonParse(listConfig.otherattr);
  // console.log("🚀 ~ listConfig", listConfig);
  // console.log("🚀 ~ otherattr", otherattr);
  const { metadataid } = listConfig;
  // console.log("🚀 ~ metadataid", metadataid);
  const router = useRouter();

  let rawCriteria = "";
  if (!toBoolean(otherattr?.ignorecriteria || false)) {
    rawCriteria = prepareRawUrlQueryToCriteria(router.query);
  }

  const data = otherattr?.data || [];

  const metaConfig = {
    gridJsonConfig: {},
    pathConfig: [],
  };

  const killerObj = {
    ...listConfig,
    metaConfig,
    otherattr: otherattr,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };
  // console.log("🚀 ~ killerObj", killerObj);

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DefaultWidget
        listConfig={listConfig}
        config={killerObj}
        otherattr={killerObj.otherattr}
        datasrc={data}
      />
    );
  }

  const RenderComponent = dynamic(
    () =>
      import(
        `@components/cloud/${listConfig.componentpath}/${listConfig.widgetcode}`
      ),
    {
      loading: () => <Skeleton type="loading" />,
    }
  );
  return (
    <WidgetWrapperStore
      config={killerObj}
      otherattr={killerObj.otherattr}
      datasrc={data}
    >
      <RenderComponent />
    </WidgetWrapperStore>
  );
};

export default WidgetNoMeta;
