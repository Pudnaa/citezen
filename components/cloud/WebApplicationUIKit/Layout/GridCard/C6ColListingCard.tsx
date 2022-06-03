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
function C6ColListingCard() {
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

  // console.log("C6ColListingCard config", config);
  // console.log("C6ColListingCard readyDatasrc", readyDatasrc);
  // console.log("C6ColListingCard widgetnemgooReady", widgetnemgooReady);
  // console.log("C6ColListingCard positionConfig", positionConfig);
  return (
    <>
      {/* Card is full width. Use in 6 col grid for best view. */}
      {/* Card code block start */}
      <div className="mx-auto bg-white dark:bg-gray-800 shadow p-8 rounded w-full">
        <div className="flex items-center pb-5">
          <div className="h-12 w-12">
            <img
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_7.png"
              className="rounded shadow h-full w-full object-cover"
            />
          </div>
          <div className="pl-3">
            <p className="text-lg font-bold text-gray-800 dark:text-gray-100">
              The Economist
            </p>
            <p className="text-yellow-400 text-sm">
              ★★★★<span className="text-gray-200">★</span>
            </p>
          </div>
        </div>
        <p className="pb-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Between social media and content marketing and ad campaigns and brand
          reputation management, marketing can feel chaotic. Sometimes, though,
          all we need to see is a quick quote that cuts right to the point of
          what we’re trying to accomplish.
        </p>
        <p className="pb-3 text-sm text-gray-800 dark:text-gray-100 font-medium">
          Contributions In
        </p>
        <div className="flex xl:w-2/3 lg:w-2/3 md:w-2/3 w-full">
          <p className="text-sm text-indigo-700 dark:text-indigo-600 font-medium flex">
            <span className="pr-2 cursor-pointer">Home</span> <span>|</span>
            <span className="px-2 cursor-pointer">Work</span> <span>|</span>{" "}
            <span className="px-2 cursor-pointer">Family</span> <span>|</span>
            <span className="px-2 cursor-pointer">Living</span>
          </p>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default C6ColListingCard;
