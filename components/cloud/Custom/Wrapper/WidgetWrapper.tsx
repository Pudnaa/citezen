import { FC, createContext } from "react";
import _ from "lodash";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
  toBoolean,
} from "util/helper";
import { AtomTitle, AtomSwitch } from "@components/common/Atom";
import { useCloud } from "hooks/use-cloud";

type PropsContextType = {
  config?: any;
  datasrc?: any;
  otherattr?: any;
  positionConfig?: any;
  metaConfig?: any;
  gridJsonConfig?: any;
  pathConfig?: any;
  renderPositionType?: any;
  Title?: any;
  widgetDefault?: any;
};

const WidgetWrapperContext = createContext<PropsContextType>({});

type PropsType = {
  config?: any;
  datasrc?: any;
  otherattr?: any;
};

export const WidgetWrapperStore: FC<PropsType> = ({
  config,
  datasrc,
  otherattr,
  ...props
}) => {
  // console.log("🚀 ~ config", config);
  const cloudContext = useCloud();
  const { widgetDefault } = cloudContext.globalConfig;
  const title = widgetDefault?.title;
  // console.log("🚀 ~ widgetDefault", widgetDefault);
  const positionConfig = positionToPath(config.bpsectiondtl);
  // console.log("🚀 ~ positionConfig", positionConfig);
  const { metaConfig } = config;
  const { gridJsonConfig, pathConfig } = metaConfig;

  type TitlePropsType = {
    customClassName?: string;
    truncateRow?: number;
  };

  const Title: FC<TitlePropsType> = ({ customClassName, truncateRow }) => {
    const titleObject = otherattr?.title || {};
    if (_.isEmpty(titleObject?.title) && titleObject?.title !== "1")
      return null;
    titleObject.title =
      titleObject.title === "1" ? metaConfig.name : titleObject.title;

    return (
      <AtomTitle
        item={titleObject?.title}
        customClassName={
          (titleObject?.className ||
            gridJsonConfig?.title?.className ||
            title?.className) +
            " " +
            customClassName || ""
        }
        customStyle={
          titleObject?.style || gridJsonConfig?.title?.style || title?.style
        }
        truncateRow={truncateRow || 2}
      />
    );
  };

  const SubTitle: FC<TitlePropsType> = ({ customClassName, truncateRow }) => {
    const subtitleObject = otherattr?.subtitle || {};
    if (_.isEmpty(subtitleObject?.title)) return null;
    return (
      <AtomTitle
        item={subtitleObject?.title || metaConfig.name}
        customClassName={
          (subtitleObject?.className || gridJsonConfig?.title?.className) +
            " " +
            customClassName || ""
        }
        customStyle={subtitleObject?.style || gridJsonConfig?.subtitle?.style}
        truncateRow={truncateRow || 4}
      />
    );
  };

  return (
    <WidgetWrapperContext.Provider
      value={{
        config,
        datasrc,
        otherattr,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        renderPositionType,
        Title,
        widgetDefault,
      }}
    >
      <div
        className={`${
          toBoolean(otherattr?.raw == true)
            ? ""
            : widgetDefault?.className
            ? widgetDefault?.className
            : "w-full h-full bg-white p-4 shadow-md overflow-hidden rounded-md"
        } ${otherattr?.className || ""}`}
        style={{ ...otherattr?.style, ...widgetDefault?.style }}
      >
        <Title />
        <SubTitle />
        {props.children}
      </div>
    </WidgetWrapperContext.Provider>
  );
};

export default WidgetWrapperContext;
