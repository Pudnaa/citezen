import React, { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function UniversalMenu() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("🚀 ~ UniversalMenu ~ readyDatasrc", readyDatasrc);

  return (
    <BlockDiv customClassName="w-full" divNumber="UniversalMenuOuter">
      <BlockDiv
        customClassName="flex flex-row items-center"
        divNumber="UniversalMenuInner"
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <React.Fragment key={item?.id || index}>
              <RenderAtom item={{ value: item.title }} defaultAtom="title" />
              <RenderAtom
                item={{ value: "&nbsp;/&nbsp;" }}
                defaultAtom="text"
              />
            </React.Fragment>
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
}
