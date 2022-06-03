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
function C6ColSimpleListingCard() {
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

  // console.log("C6ColSimpleListingCard config", config);
  // console.log("C6ColSimpleListingCard readyDatasrc", readyDatasrc);
  // console.log("C6ColSimpleListingCard widgetnemgooReady", widgetnemgooReady);
  // console.log("C6ColSimpleListingCard positionConfig", positionConfig);
  return (
    <>
      {/* Card is full width. Use in 6 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto bg-white dark:bg-gray-800 shadow rounded w-full">
        <div className="py-6 pl-8 border-b border-gray-300 dark:border-gray-200">
          <p className="font-bold text-lg text-gray-800 dark:text-gray-100">
            Job Postings
          </p>
        </div>
        <div className="xl:flex lg:flex md:flex py-6 px-8 border-b border-gray-300 dark:border-gray-200">
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
            <p className="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">
              Backend Developer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              In: Engineering&nbsp;&nbsp;Location: Remote
            </p>
          </div>
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
            <div className="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
              <span className="text-xs text-green-500 font-normal">
                Part Time
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Closing on 28 March, 2020
            </p>
          </div>
        </div>
        <div className="xl:flex lg:flex md:flex py-6 px-8 border-b border-gray-300 dark:border-gray-200">
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
            <p className="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">
              Video Animator
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              In: Engineering&nbsp;&nbsp;Location: Remote
            </p>
          </div>
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
            <div className="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
              <span className="text-xs text-green-500 font-normal">
                Part Time
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Closing on 28 March, 2020
            </p>
          </div>
        </div>
        <div className="xl:flex lg:flex md:flex py-6 px-8">
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 mb-4 xl:mb-0 lg:mb-0 md:mb-0">
            <p className="text-lg text-gray-800 dark:text-gray-100 mb-2 font-normal">
              Frontend Engineer
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              In: Engineering&nbsp;&nbsp;Location: Remote
            </p>
          </div>
          <div className="xl:w-3/6 lg:w-3/6 md:w-3/6 flex justify-end flex-col xl:items-end lg:items-end md:items-end items-start">
            <div className="bg-green-200 h-6 w-20 mb-2 rounded-md flex items-center justify-center">
              <span className="text-xs text-green-500 font-normal">
                Part Time
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-normal">
              Closing on 28 March, 2020
            </p>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default C6ColSimpleListingCard;
