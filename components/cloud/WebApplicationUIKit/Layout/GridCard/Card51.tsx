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
export default function Card51() {
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

  // console.log("Card51 config", config);
  // console.log("Card51 readyDatasrc", readyDatasrc);
  // console.log("Card51 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card51 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-8 px-4">
        <div className="flex items-center justify-center w-full h-full py-8 px-4">
          <div className="w-80 bg-white dark:bg-gray-800 rounded-lg">
            <img
              className="w-full"
              src="https://i.ibb.co/ZGJXsg4/image.png"
              alt="sunset"
            />
            <div className="px-5 pt-4 pb-6">
              <p className="text-xl font-semibold leading-tight dark:text-gray-100 text-gray-600">
                Take Action
              </p>
              <p className="text-sm leading-4 pt-3 dark:text-gray-400 text-gray-500">
                Join the Movement to fight for Freedom, Liberation and Justice.
              </p>
              <button className="text-xs font-semibold leading-3 text-white bg-indigo-700 rounded hover:bg-indigo-600 py-3 w-full mt-7">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
