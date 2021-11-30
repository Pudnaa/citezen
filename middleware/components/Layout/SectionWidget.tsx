import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import { jsonParse, toBoolean } from "util/helper";
import WidgetStandart from "../WidgetStandart/WidgetStandart";
import WidgetNoMeta from "../WidgetStandart/WidgetNoMeta";
import WidgetViewProcess from "../WidgetStandardProcess/WidgetViewProcess";
import WidgetGetProcess from "../WidgetStandardProcess/WidgetGetProcess";
import RenderWidgetProcess from "../WidgetForm/RenderWidgetProcess";
import RenderWidgetProcessField from "../WidgetForm/RenderWidgetProcessField";
// import * as Constants from "@constants/metaConstants";
import { metaConfig } from "config/metaConfig";
import LayoutWrapper from "./LayoutWrapper";

type PropsType = {
  item: any;
  sectionCode?: string;
  sectionList?: any;
  processSection?: any;
};

const SectionWidget: FC<PropsType> = ({
  item,
  sectionCode,
  sectionList = [],
  processSection,
}) => {
  // console.log("SectionWidget item", item);
  // console.log("SectionWidget sectionCode", sectionCode);
  // console.log("SectionWidget sectionList ----------------", sectionList);

  const dataAttrs = {
    "data-sectioncode": sectionCode,
    // "widgetName": sectionList[0]['widgetcode'] || ""
  };

  const temp = sectionList.length > 1 && { gridGap: "2%" };

  const itemClassName = item?.className || "";

  return (
    <section
      {...dataAttrs}
      // className={`w-full h-full ${item?.className || ""}`}
      // className={`${!itemClassName.includes("mb-") ? "mb-6" : ""} ${
      //   _.isEmpty(itemClassName) ? "w-full h-full" : itemClassName
      // }`}
      className={overrideTailwindClasses(
        `mb-6 ${_.isEmpty(itemClassName) ? "w-full h-full" : itemClassName}`
      )}
      style={{ ...item?.style }}
    >
      <div
        className={`w-full h-full ${
          sectionList.length > 1 ? "grid grid-cols-12" : ""
        }`}
        style={{
          // gridColumnGap: "3%",
          // gridRowGap: "3%",
          // gridGap: "2%",
          ...temp,
        }}
      >
        {sectionList.map((sectionItem: any, index: number) => {
          if (sectionItem?.thisislayout) {
            const readyMergedLayoutConfig = sectionItem.children;
            const otherattr = jsonParse(readyMergedLayoutConfig["otherattr"]);
            const layout = otherattr?.layout;
            return (
              <LayoutWrapper
                readyMergedLayoutConfig={readyMergedLayoutConfig}
                meta_bp_layout_section={
                  readyMergedLayoutConfig.meta_bp_layout_section
                }
                mergedLayout={layout}
                key={index}
              />
            );
          }

          if (processSection) {
            return (
              <RenderWidgetProcessField
                key={index}
                listConfig={sectionItem}
                processSection={processSection}
              />
            );
          }

          const widgetnemgoo = jsonParse(sectionItem.widgetnemgoo, true);

          if (toBoolean(widgetnemgoo.isHide)) return null; //widgetNemgoo дотор isHide → true байвал уг Widget-ийг харуулахгүй
          // console.log("🚀 ~  sectionItem", sectionItem);

          switch (sectionItem.metatypeid) {
            case metaConfig.METATYPE_METAGROUP: //MetaGroup гэсэн төрөлтэй
              return <WidgetStandart key={index} listConfig={sectionItem} />;
            case metaConfig.METATYPE_BUSINESSPROCESS: //BusinessProcess гэсэн төрөлтэй
              switch (sectionItem.actiontype) {
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
                  return (
                    <WidgetGetProcess key={index} listConfig={sectionItem} />
                  );
                // case "consolidate":
                //   return null;
                // case "view":
                //   return (
                //     <WidgetViewProcess key={index} listConfig={sectionItem} />
                //   );
                // case "list":
                //   return null;
                // case "delete":
                //   return null;

                default:
                  return (
                    <div
                      key={index}
                      className={`w-full h-full ${
                        widgetnemgoo?.className || ""
                      }`}
                    >
                      <RenderWidgetProcess
                        key={index}
                        listConfig={sectionItem}
                      />
                    </div>
                  );
              }

            default:
              //metatypeid байхгүй буюу Meta холбоогүй үед..
              return <WidgetNoMeta key={index} listConfig={sectionItem} />;
          }
        })}
      </div>
    </section>
  );
};

export default SectionWidget;
