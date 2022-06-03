import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import { jsonParse, toBoolean } from "util/helper";
import { useCloud } from "hooks/use-cloud";
import RenderWidgetProcessField from "../WidgetForm/RenderWidgetProcessField";
// import * as Constants from "@constants/metaConstants";
import PageWrapper from "./PageWrapper";
import SectionWidgetChoose from "./SectionWidgetChoose";
import WidgetTitle from "@cloud/Custom/Wrapper/WidgetTitle";
import BlockDiv from "@components/common/Block/BlockDiv";
// import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  sectionnemgoo: any;
  sectionCode?: string;
  sectionList?: any;
  processSection?: any;
};

const SectionWidget: FC<PropsType> = ({
  sectionnemgoo,
  sectionCode,
  sectionList = [],
  processSection,
}) => {
  if (_.isEmpty(sectionList)) return null;

  const cloudContext = useCloud();
  const { widgetAllaround } = cloudContext.globalConfig;

  const dataAttrs = {
    "data-sectioncode": sectionCode,
    sectioncode: sectionCode,
    widgetname: _.isEmpty(sectionList)
      ? "Process render section"
      : sectionList[0]["widgetcode"],
  };

  const insideDiv = sectionnemgoo?.insideDiv || {};
  const temp = sectionList.length > 1 && { gridGap: "2%" };

  const itemClassName = sectionnemgoo?.className || "";

  return (
    <section
      {...dataAttrs}
      className={overrideTailwindClasses(
        `mb-6 ${_.isEmpty(itemClassName) ? "w-full h-full" : itemClassName}`
      )}
      style={{ ...sectionnemgoo?.style }}
    >
      <WidgetTitle
        titleObject={sectionnemgoo?.title}
        metaConfig={null}
        gridJsonConfig={null}
        AllaroundTitle={widgetAllaround?.title}
      />
      <WidgetTitle
        titleObject={sectionnemgoo?.subtitle}
        metaConfig={null}
        gridJsonConfig={null}
        AllaroundTitle={widgetAllaround?.subtitle}
      />
      <BlockDiv
        customClassName={overrideTailwindClasses(
          `w-full ${sectionList.length > 1 ? "grid grid-cols-12" : ""} ${
            sectionnemgoo?.SectionInside?.className
          }`
        )}
        customStyle={{
          ...temp,
          ...sectionnemgoo?.SectionInside?.style,
        }}
        divNumber="SectionInside"
      >
        {sectionList.map((sectionItem: any, index: number) => {
          if (sectionItem?.thisislayout) {
            const readyMergedLayoutConfig = sectionItem.children;
            const otherattr = jsonParse(readyMergedLayoutConfig["otherattr"]);
            const layout = otherattr?.layout;
            return (
              <PageWrapper
                readyMergedPageConfig={readyMergedLayoutConfig}
                rawWidgetList={readyMergedLayoutConfig.meta_bp_layout_section}
                mergedLayout={layout}
                key={sectionItem?.id || index}
              />
            );
          }

          if (processSection) {
            return (
              <RenderWidgetProcessField
                key={sectionItem?.id || index}
                listConfig={sectionItem}
                processSection={processSection}
              />
            );
          }

          return (
            <SectionWidgetChoose
              listConfig={sectionItem}
              key={sectionItem?.id || index}
            />
          );
        })}
      </BlockDiv>
    </section>
  );
};

export default SectionWidget;
