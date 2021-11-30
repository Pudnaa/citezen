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
  dataProcess?: any;
};

const WidgetViewProcess: FC<PropsType> = ({ listConfig, dataProcess }) => {
  const cloudContext = useCloud();

  if (_.isEmpty(listConfig)) return null;
  // console.log("🚀 ~ listConfig", listConfig);
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;
  const widgetNemgoo = jsonParse(listConfig.widgetnemgoo);
  const ghost = toBoolean(widgetNemgoo?.ghost || "0");
  // console.log("🚀 ~ ghost", ghost);
  // console.log("🚀 ~ widgetNemgoo", widgetNemgoo);

  const otherattr = jsonParse(listConfig.otherattr);
  const { metadataid } = listConfig;
  const router = useRouter();
  // const cloudContext = useCloud();
  // console.log("cloudContext.cloudURL", cloudContext.cloudURL);
  let rawCriteria = "";
  let metaConfig = {};
  if (!toBoolean(otherattr?.ignorecriteria || false)) {
    rawCriteria = prepareRawUrlQueryToCriteria(router.query);
  }

  if (dataProcess) {
    let data = dataProcess;
  }

  let { data, error } = useSWR(
    `/api/get-data?metaid=${metadataid}${rawCriteria}&metaName=${metaName}`
  );

  if (dataProcess) {
    data = dataProcess;
  } else {
    const parameters = `&parameters=${JSON.stringify({
      id: metadataid,
    })}`;
    const { data: metaConfigAll, error: metaConfigError } = useSWR(
      `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}&metaName=${metaName}`
    );

    if (error) return <div>Meta дата дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!data) return <>{!ghost && <Skeleton type="loading" />}</>;
    if (metaConfigError)
      return <div>Meta тохиргоо дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!metaConfigAll) return <div>Meta тохиргоо дуудаж байна...</div>;

    delete data?.aggregatecolumns;
    delete data?.paging;
    data = _.values(data);

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
  }

  const killerObj = {
    ...listConfig,
    metaConfig,
    otherattr: otherattr,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DefaultWidget
        listConfig={listConfig}
        config={killerObj}
        widgetnemgoo={killerObj.otherattr}
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
      widgetnemgoo={killerObj.otherattr}
      datasrc={data}
    >
      <RenderComponent />
    </WidgetWrapperStore>
  );
};

export default WidgetViewProcess;
