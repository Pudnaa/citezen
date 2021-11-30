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

const WidgetStandart: FC<PropsType> = ({ listConfig, dataProcess }) => {
  const cloudContext = useCloud();

  if (_.isEmpty(listConfig)) return null;
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName;
  const widgetnemgoo = jsonParse(listConfig.widgetnemgoo);
  const ghost = toBoolean(widgetnemgoo?.ghost || "1");
  const isLoading = widgetnemgoo?.isLoading || null;

  const { metadataid } = listConfig;
  const router = useRouter();

  let rawCriteria = "";
  let metaConfig = {};

  const { criteria } = widgetnemgoo;

  //  #####    ##   #####   ##    ####  #####   ####
  //  #    #  #  #    #    #  #  #      #    # #    #
  //  #    # #    #   #   #    #  ####  #    # #
  //  #    # ######   #   ######      # #####  #
  //  #    # #    #   #   #    # #    # #   #  #    #
  //  #####  #    #   #   #    #  ####  #    #  ####
  if (!toBoolean(criteria?.ignoreUrlQuery || false)) {
    // rawCriteria = prepareRawUrlQueryToCriteria(router.query);
    const queryFromUrl = { ..._.omit(router.query, ["detect"]) }; //detect гэсэн буруу parameter орж ирээд metaData-г ERP-аас алдаа буцааж байна.

    rawCriteria = prepareRawUrlQueryToCriteria({
      ...(criteria?.defaultQuery || {}),
      ...queryFromUrl,
    });
    // console.log("🚀 ~ queryFromUrl", queryFromUrl);
  }
  // console.log("🚀 ~ rawCriteria", rawCriteria);

  let { data: datasrc, error } = useSWR(
    `/api/get-data?metaid=${metadataid}${rawCriteria}&metaName=${metaName}`
  );

  if (dataProcess) {
    datasrc = dataProcess;
  } else {
    //  #    # ###### #####   ##    ####   ####  #    # ###### #  ####
    //  ##  ## #        #    #  #  #    # #    # ##   # #      # #    #
    //  # ## # #####    #   #    # #      #    # # #  # #####  # #
    //  #    # #        #   ###### #      #    # #  # # #      # #  ###
    //  #    # #        #   #    # #    # #    # #   ## #      # #    #
    //  #    # ######   #   #    #  ####   ####  #    # #      #  ####
    const parameters = `&parameters=${JSON.stringify({
      id: metadataid,
    })}`;
    const { data: metaConfigAll, error: metaConfigError } = useSWR(
      `/api/get-process?processcode=META_DATA_MOBILE_004${parameters}&metaName=${metaName}`
    );

    //datasrc
    if (error) return <div>Meta дата дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!datasrc)
      return (
        // <>{!ghost && isLoading !== null && <Skeleton type={isLoading} />}</>
        <>
          <Skeleton type={isLoading} />
        </>
      );

    //meta config
    if (metaConfigError)
      return <div>Meta тохиргоо дуудаж чадсангүй. Алдаа өгч байна.</div>;
    if (!metaConfigAll) return <div>Meta тохиргоо дуудаж байна...</div>;

    delete datasrc?.aggregatecolumns;
    delete datasrc?.paging;
    datasrc = _.values(datasrc);

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
        datasrc={datasrc}
      />
    );
  }

  const RenderComponent = dynamic(
    () =>
      import(
        `@components/cloud/${listConfig.componentpath}/${listConfig.widgetcode}`
      ),
    {
      // loading: () => <Skeleton type="loading" />,
    }
  );
  return (
    <WidgetWrapperStore
      config={killerObj}
      widgetnemgoo={killerObj.widgetnemgoo}
      datasrc={datasrc}
    >
      <RenderComponent />
    </WidgetWrapperStore>
  );
};

export default WidgetStandart;
