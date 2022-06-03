import { FC } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import useSWR from "swr";
import _ from "lodash";

import { jsonParse, toBoolean } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { useCloud } from "hooks/use-cloud";
import { replaceTemplate } from "util/helper";

type PropsType = {
  listConfig: any;
  processData?: any;
  formDataInit?: any;
  formConfig?: any;
};

const WidgetCustomRenderProcess: FC<PropsType> = ({
  listConfig,
  processData,
  formDataInit,
  formConfig,
}) => {
  const cloudContext = useCloud();

  if (_.isEmpty(listConfig)) return null;

  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;
  const widgetnemgooReady = listConfig.widgetnemgooReady;
  const ghost = toBoolean(widgetnemgooReady?.ghost || "0");
  // const death = toBoolean(widgetnemgooReady?.death || "0");

  const { metadataid, metadatacode } = listConfig;
  const router = useRouter();

  let rawCriteria = "";
  let metaConfig = {};

  const { criteria } = widgetnemgooReady;

  // if (death) return null; //death гэсэн widget-ийг дүрслэхгүй.

  // console.log("XXXXXXXX", router.query);
  let queryFromUrl = {};
  if (!toBoolean(criteria?.ignoreUrlQuery || false)) {
    // rawCriteria = prepareRawUrlQueryToCriteria(router.query);
    queryFromUrl = { ...cloudContext.cloudURL.query };
  }

  rawCriteria = `&parameters=${JSON.stringify(
    replaceTemplate(
      {
        ...(criteria?.defaultQuery || {}),
        ...queryFromUrl,
      },
      cloudContext.cloudURL.query
    )
  )}`;

  const data: any = []; //array болгох хэрэгтэй. Бүх widget-үүд Array авах бүтэцтэй.

  metaConfig = {
    ...processData,
    gridJsonConfig: jsonParse(
      processData?.meta_group_grid_options_mobile?.jsonconfig,
      true
    ),
    pathConfig: _.values(
      processData?.meta_group_grid_options_mobile?.meta_group_config_mobile
    ),
    // pathConfig: _.values(metaConfigAll?.meta_group_config_mobile),
  };
  //   console.log("metaConfigdata", metaConfig);
  const killerObj = {
    ...listConfig,
    metaConfig,
    formDataInit,
    formConfig,
    widgetnemgooReady: widgetnemgooReady,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };
  //   console.log("killerObj", killerObj);
  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DebugWidget
        listConfig={listConfig}
        config={killerObj}
        widgetnemgooReady={killerObj.widgetnemgooReady}
        datasrc={data}
      />
    );
  }

  return (
    <WidgetWrapperStore
      config={killerObj}
      widgetnemgooReady={killerObj.widgetnemgooReady}
      datasrc={data}
      dataMutate=""
    />
  );
};

export default WidgetCustomRenderProcess;
