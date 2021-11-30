import { FC } from "react";
import { jsonParse } from "util/helper";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import LayoutSection from "./LayoutSection";

type PropsType = {
  readyMergedLayoutConfig: any;
  meta_bp_layout_section?: any;
  mergedLayout?: any;
  layoutConfig?: any;
};

const LayoutWrapper: FC<PropsType> = ({
  readyMergedLayoutConfig,
  meta_bp_layout_section,
  mergedLayout,
}) => {
  if (_.isEmpty(readyMergedLayoutConfig)) {
    return <>Layout тохиргоо олдсонгүй</>;
  }
  const layoutnemgoo = jsonParse(readyMergedLayoutConfig["layoutnemgoo"]);
  // console.log("🚀 ~ layoutnemgoo", layoutnemgoo);
  // console.log("🚀 ~ readyMergedLayoutConfig,", readyMergedLayoutConfig);
  // console.log("🚀 ~ meta_bp_layout_section,", meta_bp_layout_section);
  // console.log("🚀 ~ mergedLayout,", mergedLayout);

  return (
    <main
      // className={`h-full w-full ${layoutnemgoo?.className || ""}`}
      className={overrideTailwindClasses(
        `h-full w-full ${layoutnemgoo?.className || ""}`
      )}
      style={{ ...layoutnemgoo?.style }}
    >
      <LayoutSection
        mergedLayout={mergedLayout}
        meta_bp_layout_section={meta_bp_layout_section}
        customClassName="mb-0"
      />
    </main>
  );
};

export default LayoutWrapper;
