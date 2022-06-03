import { FC, createContext, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import _ from "lodash";
import {
  positionToPath,
  renderPositionType,
  toBoolean,
  preparePositions,
  runWidgetDebug,
  prepareDefaults,
} from "util/helper";
import { useCloud } from "hooks/use-cloud";
import WidgetTitle from "@cloud/Custom/Wrapper/WidgetTitle";
import WidgetButton from "@cloud/Custom/Wrapper/WidgetButton";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsContextType = {
  config?: any;
  readyDatasrc?: any;
  paging?: any;
  aggregatecolumns?: string;
  defaultValue?: any;
  dataMutate?: any;
  widgetnemgooReady?: any;
  setVirtualWidgetnemgooReady?: any;
  positionConfig?: any;
  metaConfig?: any;
  gridJsonConfig?: any;
  pathConfig?: any;
  renderPositionType?: any;
  Title?: any;
  widgetAllaround?: any;
};

const WidgetWrapperContext = createContext<PropsContextType>({});

type PropsType = {
  config?: any;
  datasrc?: any;
  widgetnemgooReady?: any;
  setVirtualWidgetnemgooReady?: any;
  dataMutate?: any;
  fillItem?: any;
  paging?: any;
  aggregatecolumns?: string;
};

export const WidgetWrapperStore: FC<PropsType> = ({
  config,
  datasrc,
  widgetnemgooReady,
  setVirtualWidgetnemgooReady,
  dataMutate,
  paging,
  aggregatecolumns,
  ...props
}) => {
  const cloudContext = useCloud();
  const router = useRouter();
  const { widgetAllaround } = cloudContext.globalConfig;
  const positionConfig = positionToPath(config.bpsectiondtl);
  const { metaConfig } = config;
  const { gridJsonConfig, pathConfig } = metaConfig;

  /* ------------------------------------------------------ */
  /*              PREPARE WIDGET DATA POSITION              */
  /* ------------------------------------------------------ */
  /* ------------ also filernemgoo, valuenemgoo ----------- */
  const readyDatasrc = datasrc.map((item: any) => {
    return preparePositions(item, positionConfig);
  });

  /* ------------------------------------------------------ */
  /*                DEBUG-ТАЙ ХОЛБООТОЙ ХЭСЭГ               */
  /* ------------------------------------------------------ */

  runWidgetDebug(widgetnemgooReady, config, readyDatasrc);

  /* ------------------------------------------------------ */
  /*            DEFAULT VALUE-ТАЙ ХОЛБООТОЙ ХЭСЭГ           */
  /* ------------------------------------------------------ */
  const defaultValue = prepareDefaults(widgetnemgooReady, router);

  /* ------------------------------------------------------ */
  /*           WIDGET CLASS-УУД БОЛОВСРУУЛАХ ХЭСЭГ          */
  /* ------------------------------------------------------ */
  const divouterblockClassName = `${
    toBoolean(widgetnemgooReady?.raw == true)
      ? ""
      : widgetAllaround?.divouterblock?.className
      ? widgetAllaround?.divouterblock?.className
      : "w-full h-full overflow-hidden rounded-md"
  } ${widgetnemgooReady?.className || ""}`;

  const divouterblockStyle = {
    ...widgetnemgooReady?.style,
    ...widgetAllaround?.divouterblock?.style,
  };

  const divinsideblockClassName = `${
    toBoolean(widgetnemgooReady?.raw == true)
      ? ""
      : widgetAllaround?.divinsideblock?.className
      ? widgetAllaround?.divinsideblock?.className
      : "w-full h-full bg-white p-4 shadow-md overflow-hidden rounded-md"
  }`;

  const divinsideblockStyle = {
    ...widgetnemgooReady?.style,
    ...widgetAllaround?.divinsideblock?.style,
  };

  const RenderComponent = useMemo(
    () =>
      dynamic(
        () =>
          import(
            `@components/cloud/${config.componentpath}/${config.widgetcode}`
          ),
        {
          // ssr: false,
          // suspense: true,
          // loading: () => <Skeleton type="loading" />,
        }
      ),
    [
      config,
      datasrc,
      widgetnemgooReady,
      dataMutate,
      paging,
      aggregatecolumns,
      props,
    ]
  );

  return (
    <WidgetWrapperContext.Provider
      value={{
        config,
        readyDatasrc,
        paging,
        aggregatecolumns,
        defaultValue,
        dataMutate,
        widgetnemgooReady,
        setVirtualWidgetnemgooReady,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        renderPositionType,
        widgetAllaround,
      }}
    >
      <BlockDiv
        customClassName={divouterblockClassName || ""}
        customStyle={divouterblockStyle || {}}
        divNumber="divouterblock"
      >
        <BlockDiv
          customClassName=""
          customStyle={divinsideblockStyle}
          divNumber="divinsideblock"
        >
          <WidgetTitle
            titleObject={widgetnemgooReady?.title}
            metaConfig={metaConfig}
            gridJsonConfig={gridJsonConfig}
            AllaroundTitle={widgetAllaround?.title}
            customDivNumber="WidgetTitle"
          />
          <WidgetTitle
            titleObject={widgetnemgooReady?.subtitle}
            metaConfig={metaConfig}
            gridJsonConfig={gridJsonConfig}
            AllaroundTitle={widgetAllaround?.subtitle}
            customDivNumber="WidgetSubTitle"
          />
          <WidgetTitle
            titleObject={widgetnemgooReady?.description}
            AllaroundTitle={widgetAllaround?.description}
            customDivNumber="WidgetDescription"
          />
          <WidgetButton
            buttonObject={widgetnemgooReady?.button}
            AllaroundButton={widgetAllaround?.button}
          />

          <RenderComponent />

          {props.children}
        </BlockDiv>
      </BlockDiv>
    </WidgetWrapperContext.Provider>
  );
};

export default WidgetWrapperContext;
