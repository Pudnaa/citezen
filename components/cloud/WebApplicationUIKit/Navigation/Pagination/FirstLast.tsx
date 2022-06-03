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
const FirstLast = () => {
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

  // console.log("FirstLast config", config);
  // console.log("FirstLast readyDatasrc", readyDatasrc);
  // console.log("FirstLast widgetnemgooReady", widgetnemgooReady);
  // console.log("FirstLast positionConfig", positionConfig);
  return (
    <div>
      <div className="max-w-8xl mx-auto container py-8">
        <ul className="flex justify-center items-center">
          <li>
            <span className="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none mr-3">
              First
            </span>
          </li>
          <li>
            <span className="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none">
              1
            </span>
          </li>
          <li>
            <span className="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none">
              2
            </span>
          </li>
          <li>
            <span className="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none">
              ...
            </span>
          </li>
          <li>
            <span className="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none">
              6
            </span>
          </li>
          <li>
            <span className="flex text-gray-600 hover:text-indigo-700 text-base leading-tight font-bold cursor-pointer transition duration-150 ease-in-out mx-4 rounded-full focus:outline-none">
              7
            </span>
          </li>
          <li>
            <span className="cursor-pointer flex rounded transition duration-150 ease-in-out text-gray-600 text-base leading-tight font-bold hover:text-indigo-700 p-1 focus:outline-none ml-3">
              Last
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default FirstLast;
