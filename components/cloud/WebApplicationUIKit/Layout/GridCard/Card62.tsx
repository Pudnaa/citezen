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
export default function Card62() {
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

  // console.log("Card62 config", config);
  // console.log("Card62 readyDatasrc", readyDatasrc);
  // console.log("Card62 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card62 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full py-12 px-4">
        <div className="max-w-xs">
          <div className="p-4 bg-gray-100 shadow rounded-tl rounded-tr dark:bg-gray-700">
            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
              Latest email
            </p>
            <div className="flex items-start pt-3">
              <div className="w-1 h-14 bg-indigo-700 rounded-sm" />
              <div className="flex flex-col pl-3">
                <p className="text-sm font-semibold leading-none text-gray-800 dark:text-gray-100">
                  example@mail.com
                </p>
                <p className="pr-9 pt-2 text-xs leading-4 dark:text-gray-400 text-gray-500">
                  Ever wondered how some graphic designers always manage to
                  produce
                </p>
                <div className="pt-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={13}
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M4.9082 0.220703L0.408203 4.7207L0.0214844 5.125L0.408203 5.5293L4.9082 10.0293L5.7168 9.2207L2.18359 5.6875H9.8125C10.3281 5.6875 10.7969 5.81641 11.2188 6.07422C11.6523 6.32031 11.9922 6.66016 12.2383 7.09375C12.4961 7.51562 12.625 7.98438 12.625 8.5C12.625 9.01562 12.4961 9.49023 12.2383 9.92383C11.9922 10.3457 11.6523 10.6855 11.2188 10.9434C10.7969 11.1895 10.3281 11.3125 9.8125 11.3125V12.4375C10.5273 12.4375 11.1836 12.2617 11.7812 11.9102C12.3906 11.5586 12.8711 11.084 13.2227 10.4863C13.5742 9.87695 13.75 9.21484 13.75 8.5C13.75 7.78516 13.5742 7.12891 13.2227 6.53125C12.8711 5.92188 12.3906 5.44141 11.7812 5.08984C11.1836 4.73828 10.5273 4.5625 9.8125 4.5625H2.18359L5.7168 1.0293L4.9082 0.220703Z"
                        fill="#4338CA"
                      />
                    </svg>
                    <p className="text-xs pl-1 font-medium leading-3 text-gray-800 dark:text-gray-100">
                      Reply
                    </p>
                  </div>
                  <div className="w-7 h-7">
                    <img src="https://i.ibb.co/nwn7G12/2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow dark:bg-gray-800 p-4 rounded-b">
            <p className="text-xs leading-3 text-gray-500 dark:text-gray-400">
              Don’t miss
            </p>
            <div className="flex items-start py-3 border-gray-200 border-b">
              <div className="w-1 h-7 bg-indigo-700 rounded-sm" />
              <div className="flex flex-col pl-3">
                <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                  alpha@mail.com
                </p>
                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">
                  How to write better advertising article
                </p>
              </div>
            </div>
            <div className="flex items-start py-3 border-gray-200 border-b">
              <div className="w-1 h-7 bg-indigo-700 rounded-sm" />
              <div className="flex flex-col pl-3">
                <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                  squad@mail.com
                </p>
                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">
                  Addiction when gambling becomes a problem
                </p>
              </div>
            </div>
            <div className="flex items-start py-3">
              <div className="w-1 h-7 bg-indigo-700 rounded-sm" />
              <div className="flex flex-col pl-3">
                <p className="text-xs font-semibold leading-3 text-gray-800 dark:text-gray-100">
                  aqneo@mail.com
                </p>
                <p className="text-xs leading-3 text-gray-500 dark:text-gray-400 pt-1">
                  Baby monitor technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
