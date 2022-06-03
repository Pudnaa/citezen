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
function Card85() {
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

  // console.log("Card85 config", config);
  // console.log("Card85 readyDatasrc", readyDatasrc);
  // console.log("Card85 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card85 positionConfig", positionConfig);
  return (
    <div>
      <div className="max-w-sm rounded bg-white dark:bg-gray-800 shadow p-4 sm:p-5">
        <img
          src="https://i.ibb.co/6RsnQT1/Rectangle-14.png"
          alt="public-photo"
          className="w-full"
        />
        <p className="text-base leading-5 pt-6 dark:text-gray-100">
          The vaccine is ready, but are we ready to try it on humans as well?
        </p>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-heart"
              width={18}
              height={16}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#EF4444"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
            </svg>
            <p className="text-xs leading-3 dark:text-gray-400 text-gray-500 pl-3">
              141
            </p>
          </div>
          <div>
            <p className="text-base font-semibold leading-none text-right text-indigo-700">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card85;
