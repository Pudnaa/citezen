import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function UniversalPagination() {
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

  const item = readyDatasrc[0];

  return (
    <BlockDiv customClassName="w-full bg-yellow-200" divNumber="div10">
      Энд Pagination гарах ёстой.
    </BlockDiv>
  );
}
