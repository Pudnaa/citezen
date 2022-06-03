import { FC } from "react";
import _ from "lodash";
import { toBoolean } from "util/helper";
import WidgetStandart from "../WidgetStandart/WidgetStandart";
import WidgetNoMeta from "../WidgetStandart/WidgetNoMeta";
import WidgetViewProcess from "../WidgetStandardProcess/WidgetViewProcess";
import WidgetGetProcess from "../WidgetStandardProcess/WidgetGetProcess";
import RenderWidgetProcess from "../WidgetForm/RenderWidgetProcess";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
// import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  listConfig: any;
};

const SectionWidgetChoose: FC<PropsType> = ({ listConfig }) => {
  const widgetnemgooReady = listConfig.widgetnemgooReady;

  if (toBoolean(widgetnemgooReady.isHide || "0")) return null;
  if (toBoolean(widgetnemgooReady?.death || "0")) return null;

  //widgetNemgoo дотор widget гэсэн nemgoo тавьж өгнө.
  //Cozy.mn - 05 - CheckoutNew V.4 → 16515414945859 id-тай widget дотор жишээ бий.
  const widgetConfig = widgetnemgooReady?.widget;
  const myMetaTypeId = widgetConfig?.metatypeid || listConfig.metatypeid;

  if (listConfig.id === "16515414945859") {
    console.log("DEEEEEE", listConfig);
  }

  switch (myMetaTypeId) {
    case metaConfig.METATYPE_METAGROUP: //MetaGroup гэсэн төрөлтэй
      if (listConfig.id === "16515414945859") {
        console.log("ddddddddddwwwwwww", listConfig);
      }
      return <WidgetStandart listConfig={listConfig} />;
    case metaConfig.METATYPE_BUSINESSPROCESS: //BusinessProcess гэсэн төрөлтэй
      switch (listConfig.actiontype) {
        // case "insert":
        //   return null;
        // case "create":
        //   return null;
        // case "exist":
        //   return null;
        // case "console":
        //   return null;
        // case "update":
        //   return null;
        case "get":
          return <WidgetGetProcess listConfig={listConfig} />;
        // case "consolidate":
        //   return null;
        // case "view":
        //   return (
        //     <WidgetViewProcess key={item?.id || index} listConfig={sectionItem} />
        //   );
        // case "list":
        //   return null;
        // case "delete":
        //   return null;

        default:
          return (
            <div
              className={`w-full h-full ${widgetnemgooReady?.className || ""}`}
            >
              <RenderWidgetProcess listConfig={listConfig} />
            </div>
          );
      }

    default:
      //metatypeid байхгүй буюу Meta холбоогүй үед..
      return <WidgetNoMeta listConfig={listConfig} />;
  }
};

export default SectionWidgetChoose;
