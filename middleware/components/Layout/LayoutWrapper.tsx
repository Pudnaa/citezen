import { FC } from "react";
import { jsonParse } from "util/helper";
import _ from "lodash";
import SectionWidget from "./SectionWidget";

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
  const otherattr = jsonParse(readyMergedLayoutConfig["otherattr"]);

  // console.log("🚀 ~ readyMergedLayoutConfig,", readyMergedLayoutConfig);
  // console.log("🚀 ~ meta_bp_layout_section,", meta_bp_layout_section);
  // console.log("🚀 ~ mergedLayout,", mergedLayout);

  return (
    <main
      className={`h-full w-full ${otherattr?.className || ""}`}
      style={{ ...otherattr?.style }}
    >
      <LayoutSection
        mergedLayout={mergedLayout}
        meta_bp_layout_section={meta_bp_layout_section}
      />
    </main>
  );
};

export default LayoutWrapper;
