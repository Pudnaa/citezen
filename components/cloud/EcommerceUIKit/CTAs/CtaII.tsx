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
  AtomImage,
  AtomButtonV2,
} from "@components/common/Atom";
const CtaII = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Cta2 config", config);
  // console.log("Cta2 readyDatasrc", readyDatasrc);
  // console.log("Cta2 widgetnemgooReady", widgetnemgooReady);
  // console.log("Cta2 positionConfig", positionConfig);
  const isMoto = widgetnemgooReady.type === "moto";
  const item = readyDatasrc[0];
  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8 flex justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full relative">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-full h-full"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
          <div
            className={`absolute inset-0 flex flex-col justify-center items-center text-center ${
              isMoto ? "hidden" : ""
            }`}
          >
            <div className="px-2 sm:px-4 md:px-0">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-3xl lg:text-4xl font-semibold lg:leading-9 md:leading-7 leading-9 text-white"
              />
            </div>
            <div className="px-2 sm:px-4 md:px-0 lg:mt-6 mt-4 md:w-3/4 lg:w-2/5">
              <AtomText
                item={renderPositionType(item, "position3", positionConfig)}
                customClassName="text-base leading-6 text-center text-white font-normal"
              />
            </div>
            <div className="px-4 sm:px-8 md:px-0 mt-16 lg:mt-20  lg:px-0 w-full flex justify-center items-center">
              <AtomButton
                item={renderPositionType(item, "position45", positionConfig)}
                customClassName="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 w-full md:w-3/4 lg:w-32 py-4 bg-white flex justify-center items-center text-base font-medium leading-4 text-center text-gray-800"
                color=""
              />
            </div>
          </div>
          {isMoto && (
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              color=""
              customClassName="absolute bottom-7 right-7 text-base font-bold text-black bg-moto sm:w-auto w-full rounded-2xl
              py-3 px-11 focus:outline-none hover:bg-white hover:text-moto
              hover:border border-moto focus:ring-2 focus:ring-offset-2 focus:ring-moto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CtaII;
