import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import SectionWidget from "./SectionWidget";
import BlockDiv from "@components/common/Block/BlockDiv";
// import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  mergedLayout: [];
  rawWidgetList?: any;
  customClassName?: string;
  customStyle?: any;
  processSection?: any;
  sectionNemgoo?: any;
};

const PageSection: FC<PropsType> = ({
  mergedLayout = [],
  rawWidgetList,
  customClassName = "",
  customStyle,
  processSection,
  sectionNemgoo,
}) => {
  // console.log("PageSection mergedLayout", mergedLayout);
  // console.log("PageSection rawWidgetList", rawWidgetList);
  // console.log("PageSection customClassName", customClassName);
  // console.log("PageSection customStyle", customStyle);

  // console.log("sectionNemgoo :>> ", sectionNemgoo);

  return (
    <section
      // className={`${!customClassName.includes("mb-") ? "mb-6" : ""} ${
      //   _.isEmpty(customClassName)
      //     ? "grid grid-cols-12 w-full h-full gap-x-6"
      //     : customClassName
      // }`}
      className={overrideTailwindClasses(
        `mb-6 ${
          _.isEmpty(customClassName)
            ? "grid grid-cols-12 w-full h-full gap-x-6"
            : customClassName
        }`
      )}
      style={{ ...customStyle }}
    >
      {sectionNemgoo?.SectionInside ? (
        <BlockDiv
          customClassName={overrideTailwindClasses(
            `w-full ${sectionNemgoo?.SectionInside?.className}`
          )}
          customStyle={{
            ...sectionNemgoo?.SectionInside?.style,
          }}
          divNumber="SectionInside"
        >
          <SectionBody
            mergedLayout={mergedLayout}
            rawWidgetList={rawWidgetList}
            processSection={processSection}
          />
        </BlockDiv>
      ) : (
        <SectionBody
          mergedLayout={mergedLayout}
          rawWidgetList={rawWidgetList}
          processSection={processSection}
        />
      )}
    </section>
  );
};

export default PageSection;

/* ------------------------------------------------------ */
/*                       SECTIONBODY                      */
/* ------------------------------------------------------ */

const SectionBody = ({ mergedLayout, rawWidgetList, processSection }) => {
  return (
    <>
      {mergedLayout.map((item: any, index: number) => {
        const sectionCode = _.split(item.sectionCode, "section")[1];
        const sectionList = _.filter(rawWidgetList, {
          code: sectionCode,
        });

        if (item.children) {
          // console.log("item", item);
          // console.log("item.className", item.className);

          return (
            <PageSection
              key={item?.id || index}
              mergedLayout={item?.children}
              customClassName={item?.className}
              customStyle={item?.style}
              rawWidgetList={rawWidgetList}
              processSection={processSection}
              sectionNemgoo={item}
            />
          );
        } else {
          return (
            <SectionWidget
              key={item?.id || index}
              sectionnemgoo={item}
              sectionCode={sectionCode}
              // sectionData={_.values(sectionData?.bpsectiondtl || {})}
              sectionList={sectionList}
              processSection={processSection}
            />
            // <div key={item?.id || index} className="bg-yellow-200 w-28 h-28 m-10">
            //   Энд гарлаа sectionCode{sectionCode}
            // </div>
          );
        }
      })}
    </>
  );
};
