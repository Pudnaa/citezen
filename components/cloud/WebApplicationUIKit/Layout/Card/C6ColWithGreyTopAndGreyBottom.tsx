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
function C6ColWithGreyTopAndGreyBottom() {
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

  // console.log("C6ColWithGreyTopAndGreyBottom config", config);
  // console.log("C6ColWithGreyTopAndGreyBottom readyDatasrc", readyDatasrc);
  // console.log("C6ColWithGreyTopAndGreyBottom widgetnemgooReady", widgetnemgooReady);
  // console.log("C6ColWithGreyTopAndGreyBottom positionConfig", positionConfig);
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
      {/* Code block starts */}
      <div className="w-full sm:w-1/2 mb-8 sm:mb-0 mr-0 sm:mr-8 rounded bg-white dark:bg-gray-800 shadow">
        <div className="w-full h-64 border-b border-gray-400 dark:border-gray-600 rounded-t" />
        <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-b" />
      </div>
      {/* Code block ends */}
      {/* Code block starts */}
      <div className="w-full sm:w-1/2 rounded bg-white dark:bg-gray-800 shadow">
        <div className="w-full h-24 bg-gray-100 dark:bg-gray-700 rounded-t" />
        <div className="w-full h-64 border-t border-gray-400 dark:border-gray-600 rounded-b" />
      </div>
      {/* Code block ends */}
    </div>
  );
}
export default C6ColWithGreyTopAndGreyBottom;
