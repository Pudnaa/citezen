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
export default function Card41() {
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

  // console.log("Card41 config", config);
  // console.log("Card41 readyDatasrc", readyDatasrc);
  // console.log("Card41 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card41 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="w-40 bg-white dark:bg-gray-800 rounded py-4">
          <p className="text-sm font-semibold leading-4 text-gray-800 dark:text-gray-100 text-center">
            Select Language
          </p>
          <hr className="w-full bg-gray-200 mt-3" />
          <div className="flex  pl-8 mt-5">
            <img
              alt="USA"
              src="https://i.ibb.co/YycnHbn/usa.png"
              className="w-5 h-5"
            />
            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4 pr-2">
              English
            </p>
            <svg
              className="text-gray-800 dark:text-gray-100"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l5 5l10 -10" />
            </svg>
          </div>
          <div className="flex  px-8 mt-5">
            <img
              alt="chine"
              src="https://i.ibb.co/MMQtT0G/china.png"
              className="w-5 h-5"
            />
            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4">
              Chinese
            </p>
          </div>
          <div className="flex  px-8 mt-5">
            <img
              alt="greman"
              src="https://i.ibb.co/27c98hX/germa.png"
              className="w-5 h-5"
            />
            <p className="text-sm leading-none text-gray-800 dark:text-gray-100 pl-4">
              German
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
