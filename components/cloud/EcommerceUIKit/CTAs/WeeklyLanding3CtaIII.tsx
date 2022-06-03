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

const WeeklyLanding3CtaIII = () => {
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
    <div className=" m-16">
      <div className="mx-auto container flex justify-center items-center  px-4 sm:px-6 2xl:px-0">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
          <div className="w-80  sm:w-auto flex flex-col justify-start items-start">
            <div>
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName="text-5xl font-bold  leading-9 text-gray-800"
              />
            </div>
            <div className="mt-4 w-2/3  ">
              <RenderAtom
                item={item?.position3}
                defaultAtom="text"
                customClassName="text-lg font-mono text-gray-500"
              />
            </div>
            <div className="mt-20 w-2/3 ">
              <RenderAtom
                item={item?.position4}
                defaultAtom="text"
                customClassName="text-lg font-semibold text-gray-900"
              />
              <p className="mt-5 text-sm font-medium text-gray-900">
                {" "}
                MARK HOPKINSCHIEF INFORMATION OFFICER, SKULLCANDY
              </p>
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
      <div className="flex justify-around">
        {item?.position31?.value.map((item1: any, index1: number) => {
          return (
            <div className="grid-col" key={item1?.id || index1}>
              <img src={item1?.wallpaper} className="mt-10 w-44 h-10 " />
              <div className="mt-5 w-60 ">
                <p className="text-lg font-medium text-gray-800">
                  {" "}
                  {item1?.title}
                </p>
                <p className="mt-2 text-lg text-gray-500"> {item1?.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap justify-end">
        <button className=" px-6 flex justify-between items-center w-full lg:w-60 h-10 text-gray-700 hover:text-blue-500">
          <RenderAtom
            item={item?.position45}
            defaultAtom="text"
            customClassName="text-base font-medium leading-5"
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
              stroke="blue"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 21.3333L25.3333 16"
              stroke="blue"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 10.6667L25.3333 16"
              stroke="blue"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default WeeklyLanding3CtaIII;
