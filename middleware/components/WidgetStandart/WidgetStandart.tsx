import { FC, useState } from "react";
import { useRouter } from "next/router";
import { useCloud } from "hooks/use-cloud";
import _ from "lodash";
import useWidgetDataSWR from "middleware/components/dataHook/useWidgetDataSWR";
import useWidgetConfigSWR from "middleware/components/dataHook/useWidgetConfigSWR";

import { toBoolean } from "util/helper";
import { WidgetWrapperStore } from "@cloud/Custom/Wrapper/WidgetWrapper";
import DebugWidget from "@components/cloud/Custom/Default/DebugWidget";
import Skeleton from "@components/common/Skeleton/Skeleton";
// import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  listConfig: any;
  dataProcess?: any;
};

const WidgetStandart: FC<PropsType> = ({ listConfig, dataProcess }) => {
  if (_.isEmpty(listConfig)) return null;

  const router = useRouter();
  const cloudContext = useCloud();

  const widgetnemgooReady = listConfig.widgetnemgooReady;
  const ghost =
    toBoolean(widgetnemgooReady?.ghost || "0") ||
    toBoolean(cloudContext?.cloudURL?.query?.silent || "0");
  const isLoading = widgetnemgooReady?.isLoading || null;
  const [virtualWidgetnemgooReady, setVirtualWidgetnemgooReady] =
    useState(widgetnemgooReady);

  let [dataSrc, dataError, dataMutate, paging, aggregatecolumns] =
    // useWidgetDataSWR(listConfig, widgetnemgooReady);
    useWidgetDataSWR(listConfig, virtualWidgetnemgooReady);

  // let metaConfigReady = {};
  let metaConfigAll: any,
    metaConfigError: any,
    metaConfigMutate = {};

  if (dataProcess) {
    dataSrc = dataProcess;
  } else {
    [metaConfigAll, metaConfigError, metaConfigMutate] =
      useWidgetConfigSWR(listConfig);

    //datasrc
    if (dataError)
      return <div>Meta дата дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!dataSrc) {
      return (
        // <>{!ghost && isLoading !== null && <Skeleton type={isLoading} />}</>
        <>{!ghost && <Skeleton type={isLoading} />}</>
        // <>{!ghost && <Skeleton type="bigred" />}</>
        // <>
        //   {console.log(
        //     "DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD"
        //   )}
        //   <Skeleton type="bigred" />
        // </>
      );
    }

    //meta config
    if (metaConfigError)
      return <div>Meta тохиргоо дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!metaConfigAll) return <div>Meta тохиргоо дуудаж байна...</div>;
  }

  const configReady = {
    ...listConfig,
    metaConfig: metaConfigAll,
    widgetnemgooReady: widgetnemgooReady,
    bpsectiondtl: _.values(listConfig.bpsectiondtl),
  };

  //jagaa - url-д layout=raw гэсэн байвал бүх widget-ийг хэвлэхгүй
  if (router?.query?.layout === "raw") {
    return (
      <DebugWidget
        listConfig={listConfig}
        config={configReady}
        widgetnemgooReady={widgetnemgooReady}
        datasrc={dataSrc}
      />
    );
  }

  return (
    <WidgetWrapperStore
      config={configReady}
      widgetnemgooReady={virtualWidgetnemgooReady}
      setVirtualWidgetnemgooReady={setVirtualWidgetnemgooReady}
      datasrc={dataSrc}
      dataMutate={dataMutate}
      paging={paging}
      aggregatecolumns={aggregatecolumns}
    />
  );
};

export default WidgetStandart;
