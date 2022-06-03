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
function FullWidthWithLeftGrey() {
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

  // console.log("FullWidthWithLeftGrey config", config);
  // console.log("FullWidthWithLeftGrey readyDatasrc", readyDatasrc);
  // console.log("FullWidthWithLeftGrey widgetnemgooReady", widgetnemgooReady);
  // console.log("FullWidthWithLeftGrey positionConfig", positionConfig);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white  shadow">
        <div className="w-full lg:w-1/3 h-24 lg:h-64 dark:border-gray-700 border-b lg:border-b-0 lg:border-r lg:border-l lg:rounded-l bg-gray-100 dark:bg-gray-700" />
        <div className="w-full lg:w-2/3 h-64 dark:bg-gray-800" />
      </div>
    </div>
  );
}
export default FullWidthWithLeftGrey;
