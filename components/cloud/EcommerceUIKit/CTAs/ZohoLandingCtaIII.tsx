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
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";

const ZohoLandingCtaIII = () => {
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

  // console.log("ZohoLandingCtaIII config", config);
  //console.log(" ZohoLandingCtaIII readyDatasrc", readyDatasrc);
  // console.log("ZohoLandingCtaIII widgetnemgooReady", widgetnemgooReady);
  // console.log("ZohoLandingCtaIII positionConfig", positionConfig);
  const item = readyDatasrc[0]; //eswel readyDatasrc[0]
  return (
    <div className="">
      <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0 bg-gradient-to-r from-indigo-800 via-purple-600 to-red-700">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-5/6 flex flex-col justify-start items-start p-10">
            <div>
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName=" xl:text-6xl font-bold  leading-9 text-white"
              />
            </div>
            <div className="mt-4 ">
              <RenderAtom
                item={item?.position3}
                defaultAtom="text"
                customClassName="text-xl text-white"
              />
            </div>
            <div className="mt-16 w-full">
              <button className="px-4 bg-red-500 flex justify-center items-center w-full lg:w-36 h-12 text-white ">
                <RenderAtom
                  item={item?.position45}
                  defaultAtom="text"
                  customClassName="text-xl font-medium leading-5"
                />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0 w-1/2 mr-20">
            <div>
              <RenderAtom
                item={item?.position2}
                defaultAtom="image"
                customClassName="mt-5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 w-2/3 ml-48 -mt-8 h-44 rounded-lg bg-white ">
        {item?.position31?.value.map((item1: any, index1: number) => {
          return (
            <img src={item1?.wallpaper} alt="" key={item1?.id || index1} />
          );
        })}
      </div>
      {/* <div className="flex flex-wrap justify-center  p-10">
    <RenderAtom
                 item={item?.position40}
                  defaultAtom="title"
                  customClassName="text-3xl xl:text-4xl font-semibold  leading-9 text-red-800"
                   />
       <RenderAtom
                 item={item?.position4}
                  defaultAtom="text"
                  customClassName=" text-base  text-center font-mono text-gray-700 mt-5"
                   />

    </div> */}
    </div>
  );
};

export default ZohoLandingCtaIII;
