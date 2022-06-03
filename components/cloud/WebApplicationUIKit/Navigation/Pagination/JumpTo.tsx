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
const JumpTo = () => {
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

  // console.log("JumpTo config", config);
  // console.log("JumpTo readyDatasrc", readyDatasrc);
  // console.log("JumpTo widgetnemgooReady", widgetnemgooReady);
  // console.log("JumpTo positionConfig", positionConfig);
  return (
    <div>
      <div className="max-w-8xl mx-auto container py-8">
        <div className="flex justify-center items-center">
          <label
            htmlFor="jump"
            className="text-base font-normal text-gray-800 leading-normal mr-4"
          >
            Jump To Page
          </label>
          <input
            type="text"
            id="jump"
            className="shadow rounded text-base bg-gray-100 font-bold text-gray-800 leading-normal py-1 px-1 w-16 text-center outline-none"
          />
        </div>
      </div>
      ;
    </div>
  );
};
export default JumpTo;
