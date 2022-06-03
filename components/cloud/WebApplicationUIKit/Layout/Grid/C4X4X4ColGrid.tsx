import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from "@components/common/Atom";
function C4X4X4ColGrid() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("C4X4X4ColGrid config", config);
  // console.log("C4X4X4ColGrid readyDatasrc", readyDatasrc);
  // console.log("C4X4X4ColGrid widgetnemgooReady", widgetnemgooReady);
  // console.log("C4X4X4ColGrid positionConfig", positionConfig);
  return (
    <>
      <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
        {/* Remove class [ h-24 ] when adding a card block */}
        {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
        <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
      </div>
    </>
  );
}
export default C4X4X4ColGrid;
