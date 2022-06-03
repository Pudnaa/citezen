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
function C7X5ColGrid() {
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

  // console.log("C7X5ColGrid config", config);
  // console.log("C7X5ColGrid readyDatasrc", readyDatasrc);
  // console.log("C7X5ColGrid widgetnemgooReady", widgetnemgooReady);
  // console.log("C7X5ColGrid positionConfig", positionConfig);
  return (
    <>
      <div className="container pt-6 mx-auto">
        <div className="flex flex-wrap">
          <div className="md:w-3/5 w-full pb-6 md:pb-0 md:pr-6">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
          </div>
          <div className="md:w-2/5 w-full">
            {/* Remove class [ h-24 ] when adding a card block */}
            {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
            <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
          </div>
        </div>
      </div>
    </>
  );
}
export default C7X5ColGrid;
