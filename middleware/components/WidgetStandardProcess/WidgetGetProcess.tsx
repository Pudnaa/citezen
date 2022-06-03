import { FC } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import _ from "lodash";
import { jsonParse, toBoolean } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
import Skeleton from "@components/common/Skeleton/Skeleton";
import { useCloud } from "hooks/use-cloud";
import { replaceTemplate, prepareC009GetProcessData } from "util/helper";

type PropsType = {
  listConfig: any;
};

const WidgetGetProcess: FC<PropsType> = ({ listConfig }) => {
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
  const criteria = widgetnemgooReady?.criteria;

  let queryFromUrl = {};
  if (!toBoolean(criteria?.ignoreUrlQuery || false)) {
    // rawCriteria = prepareRawUrlQueryToCriteria(router.query);
    queryFromUrl = { ...cloudContext.cloudURL.query };
  }

  if (criteria?.fromurl) {
    queryFromUrl = {
      ...queryFromUrl,
      ...replaceTemplate(criteria?.fromurl || {}, cloudContext.cloudURL.query),
    };
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

  let {
    data,
    error,
    mutate: dataMutate,
  } = useSWR(
    `/api/get-process?processcode=${metadatacode}${rawCriteria}&metaName=${metaName}`
  );

  const parameters = `&parameters=${JSON.stringify({
    id: metadataid,
  })}`;
  const { data: metaConfigAll, error: metaConfigError } = useSWR(
    `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}&metaName=${metaName}`
  );

  // console.log("listConfig", listConfig);

  if (error) return <div>Meta дата дуудаж чадсангүй. Алдаа өгч байна.</div>;
  if (!data)
    return (
      <>
        {!ghost && (
          <>
            <Skeleton type="loading" />
            {listConfig.widgetcode}
            <br />
            {listConfig.metadatacode}
          </>
        )}
      </>
    );
  if (metaConfigError)
    return (
      <div>Get процессийн Meta тохиргоо дуудаж чадсангүй. Алдаа өгч байна.</div>
    );
  if (!metaConfigAll)
    return <div>Get процессийн Meta тохиргоо дуудаж байна...</div>;

  data = [data]; //array болгох хэрэгтэй. Бүх widget-үүд Array авах бүтэцтэй.

  data = prepareC009GetProcessData(metadatacode, data);

  metaConfig = {
    ...metaConfigAll,
    gridJsonConfig: jsonParse(
      metaConfigAll?.meta_group_grid_options_mobile?.jsonconfig,
      true
    ),
    pathConfig: _.values(
      metaConfigAll?.meta_group_grid_options_mobile?.meta_group_config_mobile
    ),
    // pathConfig: _.values(metaConfigAll?.meta_group_config_mobile),
  };

  const killerObj = {
    ...listConfig,
    metaConfig,
    widgetnemgooReady: widgetnemgooReady,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };

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
      dataMutate={dataMutate}
    />
  );
};

export default WidgetGetProcess;
