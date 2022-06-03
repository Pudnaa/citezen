import { FC } from "react";
import { jsonParse } from "util/helper";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import PageSection from "./PageSection";
// import Jaak from "@components//cloud/Project/Cozy/jaak";

type PropsType = {
  readyMergedPageConfig: any;
  rawWidgetList?: any;
  mergedLayout?: any;
  layoutConfig?: any;
};

const PageWrapper: FC<PropsType> = ({
  readyMergedPageConfig,
  rawWidgetList,
  mergedLayout,
}) => {
  // console.log("🚀 ~ layoutnemgoo", layoutnemgoo);
  // console.log("🚀 ~ readyMergedLayoutConfig,", readyMergedLayoutConfig);
  // console.log("🚀 ~ rawWidgetList,", rawWidgetList);
  // console.log("🚀 ~ mergedLayout,", mergedLayout);

  if (_.isEmpty(readyMergedPageConfig)) {
    return <>Layout тохиргоо олдсонгүй</>;
  }
  const layoutnemgoo = jsonParse(readyMergedPageConfig?.layoutnemgoo);
  // console.log("readyMergedPageConfig", readyMergedPageConfig);
  // console.log("layoutnemgoo", layoutnemgoo);

  return (
    <main
      className={overrideTailwindClasses(
        `h-full w-full  ${layoutnemgoo?.className || ""}`
      )}
      style={{ ...layoutnemgoo?.style }}
    >
      <PageSection
        mergedLayout={mergedLayout}
        rawWidgetList={rawWidgetList}
        customClassName="mb-0"
      />
    </main>
  );
};

export default PageWrapper;
