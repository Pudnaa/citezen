import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyProductCard from "@components/cloud/Project/Cozy/List/CozyProductCard";

export default function UniversalDataview() {
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

  // console.log("🚀 ~ UniversalDataview ~ readyDatasrc", readyDatasrc);

  return (
    <BlockDiv customClassName="w-full" divNumber="UniversalDataviewOuter">
      <BlockDiv
        customClassName="w-full grid grid-cols-4 gap-5"
        divNumber="UniversalDataviewInner"
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <CozyProductCard
              key={item?.id || index}
              item={item}
              customClassName="col-span-1"
              divNamePrefix="dv"
            />
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
}
