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
function LeftAlignedLinksWithGradient() {
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

  // console.log("LeftAlignedLinksWithGradient config", config);
  // console.log("LeftAlignedLinksWithGradient readyDatasrc", readyDatasrc);
  // console.log("LeftAlignedLinksWithGradient widgetnemgooReady", widgetnemgooReady);
  // console.log("LeftAlignedLinksWithGradient positionConfig", positionConfig);
  return (
    <>
      <div className="mx-auto container">
        <div className="px-6 lg:px-12 py-6 lg:py-12 relative rounded-3xl overflow-hidden">
          <img
            src="https://i.ibb.co/99JQ8Nf/prodify-bg.png"
            alt="gradient-color"
            className="absolute inset-0 object-cover object-center w-full h-full"
          />
          <div className="relative z-10">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold f-f-l pb-4 md:pb-8  xl:pb-12">
              Not what you were looking for?
            </h1>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white pb-2  md:pb-4 lg:pb-7 underline">
              1. How to setup your workspace in less than 10 minutes
            </h2>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white pb-2  md:pb-4 lg:pb-7 underline">
              2. Bringing your team upto speed with real-time collaboration
            </h2>
            <h2 className="text-base md:text-lg lg:text-xl font-semibold f-f-r cursor-pointer text-white pb-2  md:pb-4 lg:pb-7 underline">
              2. Bringing your team upto speed with real-time collaboration
            </h2>
            <h2 className="text-base md:text-lg lg:text-xl f-f-r cursor-pointer text-white underline">
              1. How to setup your workspace in less than 10 minutes
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftAlignedLinksWithGradient;
