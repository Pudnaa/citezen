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

const WeeklyLandingCtaIII = () => {
  const {
    config,
    readyDatasrc,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(readyDatasrc)) return null;
  // console.log("WeeklyLandingCtaIII config", config);
  console.log("WeeklyLandingCtaIII readyDatasrc", readyDatasrc);
  // console.log("WeeklyLandingCtaIII otherattr", otherattr);
  // console.log("WeeklyLandingCtaIII positionConfig", positionConfig);
  const item = readyDatasrc[0]; //eswel datasrc[0]
  return (
    <div className="m-16">
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
      <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
        <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
          <div>
          <RenderAtom
                 item={item?.position1}
                  defaultAtom="title"
                  customClassName="text-3xl xl:text-4xl font-semibold uppercase leading-9 text-gray-800"
                   />
          </div>
          <div className="mt-4 ">
          <RenderAtom
                 item={item?.position3}
                  defaultAtom="text"
                  customClassName="text-lg font-mono  text-gray-500"
                   />
          </div>
          <div className="mt-16 w-full">
            <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-full h-14 text-white hover:bg-gray-700">
                  <RenderAtom
                 item={item?.position45}
                  defaultAtom="text"
                  customClassName="text-xl font-medium leading-5"
                   />
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10.6667L25.3333 16"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          
        </div>

        <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
          <div>
          <RenderAtom
                 item={item?.position2}
                  defaultAtom="image"
                  customClassName=""
                   />
          </div>
          
        </div>
      </div>
    </div>
    <div className="flex justify-center space-x-10">
    {item?.position31?.value.map((item1:any,index1:number)=>{
                      return(
                        <img src= {item1?.wallpaper} alt="" /> 
                      )
                  })}
    </div>
    <div className="flex flex-wrap justify-center  p-10">
    <RenderAtom
                 item={item?.position40}
                  defaultAtom="title"
                  customClassName="text-3xl xl:text-4xl font-semibold  leading-9 text-gray-800"
                   />
       <RenderAtom
                 item={item?.position4}
                  defaultAtom="text"
                  customClassName=" text-base  text-center font-mono text-gray-700 mt-5"
                   />

    </div>
    </div>
  );
};

export default WeeklyLandingCtaIII;
