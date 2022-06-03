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
function SimpleWithWhiteFooter() {
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

  // console.log("SimpleWithWhiteFooter config", config);
  // console.log("SimpleWithWhiteFooter readyDatasrc", readyDatasrc);
  // console.log("SimpleWithWhiteFooter widgetnemgooReady", widgetnemgooReady);
  // console.log("SimpleWithWhiteFooter positionConfig", positionConfig);
  return (
    <div className="flex items-center justify-between w-full">
      <div className="w-full shadow">
        <div className="w-full h-64 border-b dark:bg-gray-800 bg-gray-100 dark:border-gray-700 border-gray-400 rounded-t" />
        <div className="w-full h-24 rounded-b dark:bg-gray-800 bg-white" />
      </div>
    </div>
  );
}
export default SimpleWithWhiteFooter;
