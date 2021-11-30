import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import SectionWidget from "./SectionWidget";

type PropsType = {
  mergedLayout: [];
  meta_bp_layout_section?: any;
  customClassName?: string;
  customStyle?: any;
  processSection?: any;
};

const LayoutSection: FC<PropsType> = ({
  mergedLayout = [],
  meta_bp_layout_section,
  customClassName = "",
  customStyle,
  processSection,
}) => {
  // console.log("LayoutSection mergedLayout", mergedLayout);
  // console.log("LayoutSection meta_bp_layout_section", meta_bp_layout_section);
  // console.log("LayoutSection customClassName", customClassName);
  // console.log("LayoutSection customStyle", customStyle);

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
      {mergedLayout.map((item: any, index: number) => {
        const sectionCode = _.split(item.sectionCode, "section")[1];
        const sectionList = _.filter(meta_bp_layout_section, {
          code: sectionCode,
        });

        if (item.children) {
          // console.log("CCCCCCC", sectionList);
          return (
            <LayoutSection
              key={index}
              mergedLayout={item?.children}
              customClassName={item?.className}
              customStyle={item?.style}
              meta_bp_layout_section={meta_bp_layout_section}
              processSection={processSection}
            />
          );
        } else {
          return (
            <SectionWidget
              key={index}
              item={item}
              sectionCode={sectionCode}
              // sectionData={_.values(sectionData?.bpsectiondtl || {})}
              sectionList={sectionList}
              processSection={processSection}
            />
            // <div key={index} className="bg-yellow-200 w-28 h-28 m-10">
            //   Энд гарлаа sectionCode{sectionCode}
            // </div>
          );
        }
      })}
    </section>
  );
};

export default LayoutSection;
