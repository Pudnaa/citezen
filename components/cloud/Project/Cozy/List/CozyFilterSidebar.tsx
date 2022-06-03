import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyListFilter from "./CozyListFilter";
import _ from "lodash";

export default function CozyFilterSidebar() {
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

  // console.log("🚀 ~ CozyFilterSidebar ~ readyDatasrc", readyDatasrc);
  if (_.isEmpty(readyDatasrc)) return null;

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyFilterSidebarOuter">
      <BlockDiv customClassName="" divNumber="CozyFilterSidebarInner">
        <CozyListFilter />
      </BlockDiv>
    </BlockDiv>
  );
}
