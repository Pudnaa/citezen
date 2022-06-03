import { FC } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

import { toBoolean } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { prepareRawUrlQueryToCriteria } from "lib/urlFunctions";
import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  listConfig: any;
};

const WidgetNoMeta: FC<PropsType> = ({ listConfig }) => {
  if (_.isEmpty(listConfig)) return null;

  const widgetnemgooReady = listConfig.widgetnemgooReady;
  const ghost = toBoolean(widgetnemgooReady?.ghost || "0");
  const isLoading = widgetnemgooReady?.isLoading || null;
  const router = useRouter();

  let rawCriteria = "";
  if (!toBoolean(widgetnemgooReady?.ignorecriteria || false)) {
    rawCriteria = prepareRawUrlQueryToCriteria(router.query);
  }

  const data = widgetnemgooReady?.data || [];

  const metaConfig = {
    gridJsonConfig: {},
    pathConfig: [],
  };

  const configReady = {
    ...listConfig,
    metaConfig,
    widgetnemgooReady: widgetnemgooReady,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };
  // console.log("🚀 ~ configReady", configReady);

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DebugWidget
        listConfig={listConfig}
        config={configReady}
        widgetnemgooReady={widgetnemgooReady}
        datasrc={data}
      />
    );
  }

  // console.log("dddd", data);
  // return (
  //   <>
  //     WidgetNoMeta
  //     <Jaak />
  //     ddd
  //   </>
  // );

  return (
    <WidgetWrapperStore
      config={configReady}
      widgetnemgooReady={widgetnemgooReady}
      datasrc={data}
    />
  );
};

export default WidgetNoMeta;
