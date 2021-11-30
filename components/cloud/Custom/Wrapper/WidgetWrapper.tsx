import { FC, createContext } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import _ from "lodash";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
  toBoolean,
} from "util/helper";
import { AtomTitle, AtomText, AtomSwitch } from "@components/common/Atom";
import { useCloud } from "hooks/use-cloud";
import template from "@b4dnewz/string-template";

type PropsContextType = {
  config?: any;
  datasrc?: any;
  readyDatasrc?: any;
  otherattr?: any;
  widgetnemgoo?: any;
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
  widgetnemgoo?: any;
};

export const WidgetWrapperStore: FC<PropsType> = ({
  config,
  datasrc,
  widgetnemgoo,
  ...props
}) => {
  // console.log("🚀 ~ config", config);
  const otherattr = { ...widgetnemgoo }; //? цаашдаа энийг устгах хэрэгтэй. widgetnemgoo болж хувирсан.

  const cloudContext = useCloud();
  const { widgetAllaround } = cloudContext.globalConfig;
  const AllaroundTitle = widgetAllaround?.title;
  const AllaroundSubtitle = widgetAllaround?.subtitle;
  // console.log("🚀 ~ widgetAllaround", widgetAllaround);
  const positionConfig = positionToPath(config.bpsectiondtl);
  // console.log("🚀 ~ positionConfig", positionConfig);
  const { metaConfig } = config;
  const { gridJsonConfig, pathConfig } = metaConfig;

  //datasrc дээр position-уудыг нь шууд нэмж өгье.
  const preparePositions = (item: any, positionConfig: any) => {
    let newItem = { ...item };
    _.values(positionConfig).map((itemPosition: any, index: number) => {
      if (item[_.toLower(itemPosition.fieldpath)]) {
        // console.log("GGGG", itemPosition);
        let positionnemgoo = jsonParse(itemPosition.positionnemgoo);
        // https://github.com/b4dnewz/string-template гэсэн сан байгаа.
        // string дотор {str} байвал уг str-ийг объект дахь утгаар солино.
        // url.path зам дээр "/devcloud/16342674214531?id={itemid}" гэсэн string ирнэ.
        const readyPositionNemgoo = template(
          JSON.stringify(positionnemgoo),
          {
            ...item,
          },
          {
            pattern: "{%s}",
            ignoreErrors: true,
          }
        );
        positionnemgoo = JSON.parse(readyPositionNemgoo);

        newItem[itemPosition.positionname] = {
          value: item[_.toLower(itemPosition.fieldpath)],
          positionnemgoo,
          rawConfig: {
            ...itemPosition,
          },
        };
      }
    });

    // const ddd = template(
    //   item.path,
    //   {
    //     adjective: "different",
    //     dfdf: "dfdsfsd",
    //     dsfdsfds: "dfdsfsdf",
    //     metaid: "15963",
    //     itemid: "7777",
    //   },
    //   {
    //     pattern: "{%s}",
    //     ignoreErrors: true,
    //   }
    // );
    // console.log("TTTTT ddd", ddd);

    return newItem;
  };

  const readyDatasrc = datasrc.map((item: any, index: number) => {
    return preparePositions(item, positionConfig);
  });

  type TitlePropsType = {
    customClassName?: string;
    truncateRow?: number;
  };

  const Title: FC<TitlePropsType> = ({ customClassName, truncateRow }) => {
    const titleObject = widgetnemgoo?.title || {};
    if (_.isEmpty(titleObject?.title) && titleObject?.title !== "1")
      return null;
    titleObject.title =
      titleObject.title === "1" ? metaConfig.name : titleObject.title;

    return (
      <AtomTitle
        item={titleObject?.title}
        // customClassName={
        //   (titleObject?.className ||
        //     gridJsonConfig?.title?.className ||
        //     AllaroundTitle?.className) +
        //     " " +
        //     customClassName || ""
        // }
        customClassName={overrideTailwindClasses(
          `${gridJsonConfig?.title?.className || ""} ${
            AllaroundTitle?.className || ""
          } ${titleObject?.className || ""} ${customClassName || ""}`
        )}
        customStyle={
          titleObject?.style ||
          gridJsonConfig?.title?.style ||
          AllaroundTitle?.style
        }
        truncateRow={truncateRow || 2}
      />
    );
  };

  const SubTitle: FC<TitlePropsType> = ({ customClassName, truncateRow }) => {
    const subtitleObject = widgetnemgoo?.subtitle || {};
    if (_.isEmpty(subtitleObject?.title)) return null;
    return (
      <AtomText
        item={subtitleObject?.title || metaConfig.name}
        // customClassName={
        //   (subtitleObject?.className ||
        //     gridJsonConfig?.title?.className ||
        //     AllaroundSubtitle?.className) +
        //     " " +
        //     customClassName || ""
        // }
        customClassName={overrideTailwindClasses(
          `${gridJsonConfig?.title?.className || ""} ${
            AllaroundSubtitle?.className || ""
          } ${subtitleObject?.className || ""}`
        )}
        customStyle={
          subtitleObject?.style ||
          gridJsonConfig?.subtitle?.style ||
          AllaroundSubtitle?.style
        }
        truncateRow={truncateRow || 10}
      />
    );
  };

  return (
    <WidgetWrapperContext.Provider
      value={{
        config,
        datasrc,
        readyDatasrc,
        otherattr,
        widgetnemgoo,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        renderPositionType,
        Title,
        widgetAllaround,
      }}
    >
      <div
        className={`${
          toBoolean(widgetnemgoo?.raw == true)
            ? ""
            : widgetAllaround?.className
            ? widgetAllaround?.className
            : "w-full h-full bg-white p-4 shadow-md overflow-hidden rounded-md"
        } ${widgetnemgoo?.className || ""}`}
        style={{ ...widgetnemgoo?.style, ...widgetAllaround?.style }}
      >
        <Title />
        <SubTitle />
        {props.children}
      </div>
    </WidgetWrapperContext.Provider>
  );
};

export default WidgetWrapperContext;
