import { FC } from "react";
import _ from "lodash";
import { jsonParse } from "util/helper";
import WidgetStandart from "../WidgetStandart/WidgetStandart";
import WidgetNoMeta from "../WidgetStandart/WidgetNoMeta";
import RenderWidgetProcess from "../WidgetForm/RenderWidgetProcess";
import RenderWidgetProcessField from "../WidgetForm/RenderWidgetProcessField";
import * as Constants from "@constants/metaConstants";
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

  return (
    <section
      {...dataAttrs}
      // className={`w-full h-full ${item?.className || ""}`}
      className={`${!item?.className.includes("mb-") ? "mb-6" : ""} ${
        item?.className || "w-full h-full"
      }`}
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
          // {[].map((sectionItem: any, index: number) => {
          const widgetOtherAttr = jsonParse(sectionItem.otherattr, true);
          // console.log("DDDDDDDDDD", sectionItem);

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

          switch (sectionItem.metatypeid) {
            case Constants.METATYPE_METAGROUP: //MetaGroup гэсэн төрөлтэй
              return <WidgetStandart key={index} listConfig={sectionItem} />;
            case Constants.METATYPE_BUSINESSPROCESS: //BusinessProcess гэсэн төрөлтэй
              return (
                <div
                  key={index}
                  className={`w-full h-full ${
                    widgetOtherAttr?.className || ""
                  }`}
                >
                  <RenderWidgetProcess key={index} listConfig={sectionItem} />
                </div>
              );
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
