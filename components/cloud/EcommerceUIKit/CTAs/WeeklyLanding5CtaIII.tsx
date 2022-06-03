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

const WeeklyLanding5CtaIII = () => {
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

  // console.log("WeeklyLandingCtaIII config", config);
  // console.log("WeeklyLandingCtaIII readyDatasrc", readyDatasrc);
  // console.log("WeeklyLandingCtaIII widgetnemgooReady", widgetnemgooReady);
  // console.log("WeeklyLandingCtaIII positionConfig", positionConfig);
  const item = readyDatasrc[0]; //eswel readyDatasrc[0]
  return (
    <div className="bg-black  mt-16">
      <div className="mx-auto container flex justify-center items-center  px-4 sm:px-6 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-80  sm:w-auto flex flex-col justify-center items-center">
            <div className="mt-16 ">
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName="text-4xl font-bold  leading-9 text-white"
              />
            </div>
            <div className="mt-4 w-1/2  ">
              <RenderAtom
                item={item?.position3}
                defaultAtom="text"
                customClassName="text-lg font-mono text-white text-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 p-10  ">
        {item?.position31?.value.map((item1: any, index1: number) => {
          return (
            <div className="" key={item1?.id || index1}>
              <img src={item1?.wallpaper} className="mt-10 w-50 h-10 " />
              <div className="mt-5 w-60 ">
                <p className="text-lg font-medium text-white">
                  {" "}
                  {item1?.title}
                </p>
                <p className="mt-2 text-lg text-white"> {item1?.subtitle}</p>
              </div>
            </div>
          );
        })}
        {/* <button className="flex justify-center items-center w-40 h-10 mt-10 rounded-lg  bg-white text-gray-700 hover:bg-blue-500 hover:text-white">
                  <RenderAtom
                 item={item?.position45}
                  defaultAtom="text"
                  customClassName="text-sm font-medium uppercase leading-5"
                   />
            </button> */}
      </div>
      <div className="flex flex-wrap justify-center">
        <button className="flex justify-center items-center w-40 h-10 mb-20 rounded-lg  bg-white text-gray-700 hover:bg-blue-500 hover:text-white">
          <RenderAtom
            item={item?.position45}
            defaultAtom="text"
            customClassName="text-sm font-medium uppercase leading-5"
          />
        </button>
      </div>
    </div>
  );
};

export default WeeklyLanding5CtaIII;
