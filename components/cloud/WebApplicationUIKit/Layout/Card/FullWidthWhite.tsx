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
function FullWidthWhite() {
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

  // console.log("FullWidthWhite config", config);
  // console.log("FullWidthWhite readyDatasrc", readyDatasrc);
  // console.log("FullWidthWhite widgetnemgooReady", widgetnemgooReady);
  // console.log("FullWidthWhite positionConfig", positionConfig);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-full h-64 rounded shadow bg-white dark:bg-gray-800" />
    </div>
  );
}
export default FullWidthWhite;
