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
const StandardArrows = () => {
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

  // console.log("StandardArrows config", config);
  // console.log("StandardArrows readyDatasrc", readyDatasrc);
  // console.log("StandardArrows widgetnemgooReady", widgetnemgooReady);
  // console.log("StandardArrows positionConfig", positionConfig);
  return (
    <div>
      <div className="max-w-8xl mx-auto container py-8">
        <div className="flex justify-center">
          <div className="w-8 h-8 shadow rounded-full mr-5 cursor-pointer text-gray-500 hover:text-indigo-700 transition duration-150 ease-in-out flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </div>
          <div className="w-8 h-8 shadow rounded-full text-gray-500 hover:text-indigo-700 cursor-pointer flex justify-center items-center transition duration-150 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};
export default StandardArrows;
