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
import { useCloud } from "hooks/use-cloud";

type PropsType = {
  listConfig: any;
};

const WidgetGetProcess: FC<PropsType> = ({ listConfig }) => {
  const cloudContext = useCloud();

  if (_.isEmpty(listConfig)) return null;
  // console.log("🚀 ~ listConfig", listConfig);
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;
  const widgetnemgoo = jsonParse(listConfig.widgetnemgoo);
  const ghost = toBoolean(widgetnemgoo?.ghost || "0");
  // console.log("🚀 ~ ghost", ghost);
  // console.log("🚀 ~ widgetnemgoo", widgetnemgoo);

  const { metadataid, metadatacode } = listConfig;
  const router = useRouter();
  // const cloudContext = useCloud();
  // console.log("cloudContext.cloudURL", cloudContext.cloudURL);
  let rawCriteria = "";
  let metaConfig = {};

  const { criteria } = widgetnemgoo;

  // console.log("XXXXXXXX", router.query);
  const queryFromUrl = { ..._.omit(router.query, ["detect"]) }; //detect гэсэн буруу parameter орж ирээд metaData-г ERP-аас алдаа буцааж байна.

  if (!toBoolean(criteria?.ignoreUrlQuery || false)) {
    rawCriteria = `&parameters=${JSON.stringify({
      ...queryFromUrl,
    })}`;
  }

  let { data, error } = useSWR(
    `/api/get-process?processcode=${metadatacode}${rawCriteria}&metaName=${metaName}`
  );

  const parameters = `&parameters=${JSON.stringify({
    id: metadataid,
  })}`;
  const { data: metaConfigAll, error: metaConfigError } = useSWR(
    `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}&metaName=${metaName}`
  );

  if (error) return <div>Meta дата дуудаж чадсангүй. Алдаа өгч байна.</div>;
  if (!data) return <>{!ghost && <Skeleton type="loading" />}</>;
  if (metaConfigError)
    return (
      <div>Get процессийн Meta тохиргоо дуудаж чадсангүй. Алдаа өгч байна.</div>
    );
  if (!metaConfigAll)
    return <div>Get процессийн Meta тохиргоо дуудаж байна...</div>;

  data = [data]; //array болгох хэрэгтэй. Бүх widget-үүд Array авах бүтэцтэй.

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
    widgetnemgoo: widgetnemgoo,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DefaultWidget
        listConfig={listConfig}
        config={killerObj}
        widgetnemgoo={killerObj.widgetnemgoo}
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
      widgetnemgoo={killerObj.widgetnemgoo}
      datasrc={data}
    >
      <RenderComponent />
    </WidgetWrapperStore>
  );
};

export default WidgetGetProcess;
