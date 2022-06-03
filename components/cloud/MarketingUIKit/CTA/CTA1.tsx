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

export default function CTA1() {
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

  // console.log("CTA1 config", config);
  // console.log("CTA1 readyDatasrc", readyDatasrc);
  // console.log("CTA1 widgetnemgooReady", widgetnemgooReady);
  // console.log("CTA1 positionConfig", positionConfig);
  return (
    <div>
      <div className="py-12 2xl:px-20 px-6 xl:mx-auto xl:container overflow-y-hidden">
        <div className="flex  sm:flex-row flex-col items-center justify-between">
          <div className="lg:w-1/3 sm:w-2/5">
            <h1 className="lg:text-5xl text-3xl font-bold text-gray-800">
              Don’t Miss Out!
            </h1>
            <p className="text-base leading-6 text-gray-600 mt-4 ">
              A good idiom for kids is "It's raining cats and dogs." Kids know
              what both cats and dogs are from an early age.
            </p>
            <button className="mt-12 text-base font-medium leading-none text-white bg-indigo-700 rounded sm:p-4 p-6 sm:w-auto w-full focus:outline-none hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              Explore More
            </button>
          </div>
          <div className="sm:w-1/2 w-11/12 py-10 sm:mt-0 mt-14 sm:ml-0 ml-7  bg-indigo-700 rounded-md">
            <img
              src="https://i.ibb.co/4KBbDH6/dog.png"
              alt="white dog"
              className="w-full md:-ml-10 -ml-7"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
