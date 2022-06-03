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
export default function Card13() {
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

  // console.log("Card13 config", config);
  // console.log("Card13 readyDatasrc", readyDatasrc);
  // console.log("Card13 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card13 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center py-8 px-4">
        <div className="md:w-96 rounded shadow-lg p-5 bg-indigo-700">
          <p className="text-2xl font-bold leading-none text-white pt-7">
            Startup Culture
          </p>
          <p className="pt-4 text-sm leading-5 text-white">
            How technology catapulted innovation in two decades
          </p>
          <p className="pt-7 text-xs leading-3 text-indigo-200">
            San Diego, California
          </p>
          <p className="text-xs leading-3 text-white pt-2">
            11:30 PM, 12th February 2021
          </p>
          <div className="flex items-center w-full justify-end relative">
            <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full opacity-50" />
            <div className="w-12 h-12 mr-2 flex items-center cursor-pointer justify-center bg-white rounded-full absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-arrow-narrow-right"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#4338CA"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={5} y1={12} x2={19} y2={12} />
                <line x1={15} y1={16} x2={19} y2={12} />
                <line x1={15} y1={8} x2={19} y2={12} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
