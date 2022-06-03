import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
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
} from "@components/common/Atom";
const CtaI = () => {
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

  // console.log("Cta1 config", config);
  // console.log("Cta1 readyDatasrc", readyDatasrc);
  // console.log("Cta1 widgetnemgooReady", widgetnemgooReady);
  // console.log("Cta1 positionConfig", positionConfig);
  //const item = readyDatasrc[0];
  const isSkyResortHome = widgetnemgooReady.type === "skyresort_home";

  const item = readyDatasrc[0];
  // console.log(item);
  return isSkyResortHome ? (
    <div className="w-full relative h-60">
      <RenderAtom
        item={item?.position2}
        defaultAtom="image"
        customClassName="left-0 top-0 w-full h-full object-cover"
      />
      <div className="absolute left-0 top-0 w-full h-full">
        <div
          className="h-full mx-auto py-14 px-5"
          style={{ maxWidth: "1316px" }}
        >
          <div className="flex justify-between flex-col h-full">
            <div className="">
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customStyle={{ textShadow: "2px 2px 2px #454545" }}
                customClassName="font-medium text-2xl lg:text-4xl uppercase text-white"
              />
            </div>
            <div>
              <RenderAtom
                item={item?.position45}
                defaultAtom="button"
                customStyle={{ backgroundColor: "#FFCC00" }}
                customClassName="px-5 py-3 rounded-3xl font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-44 md:px-6 py-9 px-4 flex justify-center">
      <div className="relative flex flex-row justify-between items-center bg-gray-800 sm:rounded-r-full">
        <div className="-mt-12 sm:-mt-0 w-8/12 sm:w-6/12 ml-6 md:ml-12 flex-col flex justify-start items-start">
          <div>
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="text-3xl lg:text-4xl font-semibold leading-9 lg:leading-10 text-white"
            />
          </div>
          <div className="mt-12 md:mt-20 lg:mt-16">
            <AtomButton
              color=""
              item={renderPositionType(item, "position45", positionConfig)}
              customClassName="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 absolute bottom-6 sm:static w-72 text-base lg:text-xl font-medium leading-4 lg:leading-5 text-center text-gray-900 sm:w-44 h-12 bg-white flex justify-center items-center pb-1"
            />
          </div>
        </div>

        <div>
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-auto"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
      </div>
    </div>
  );
};

export default CtaI;
