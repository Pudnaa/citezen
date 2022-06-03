import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import CozyFilter from "@components/common/Molecule/MoleculeFilter";
import UniversalFilter from "./UniversalFilter";

export default function UniversalSidebar() {
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

  // console.log("🚀 ~ UniversalSidebar ~ readyDatasrc", readyDatasrc);

  return (
    <BlockDiv customClassName="w-full" divNumber="UniversalSidebarOuter">
      <BlockDiv customClassName="" divNumber="UniversalSidebarInner">
        <UniversalFilter />
      </BlockDiv>
    </BlockDiv>
  );
}
