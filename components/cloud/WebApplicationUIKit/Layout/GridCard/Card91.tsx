import { useContext, useState } from "react";
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
export default function Card91() {
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

  // console.log("Card91 config", config);
  // console.log("Card91 readyDatasrc", readyDatasrc);
  // console.log("Card91 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card91 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center w-full justify-center py-8">
        <div className="max-w-sm rounded shadow bg-white dark:bg-gray-800">
          <div className="flex">
            <div className="px-6 py-5">
              <p className="text-base font-medium leading-none text-gray-800 dark:text-gray-100">
                Congratulations 🎉 Bruce!
              </p>
              <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-2">
                You have won gold medal
              </p>
              <p className="text-xl font-semibold leading-tight text-indigo-700 dark:text-gray-100 pt-6 ">
                $48.9k
              </p>
              <div className="pt-4">
                <button className="py-2 px-4 text-xs font-semibold leading-3 bg-indigo-700 rounded hover:bg-indigo-600 focus:outline-none text-white">
                  View Sales
                </button>
              </div>
            </div>
            <div className="px-3">
              <img src="https://i.ibb.co/34gPtCT/bg.png" alt="medal" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
