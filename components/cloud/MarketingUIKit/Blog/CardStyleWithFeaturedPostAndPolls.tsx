import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import NewsCardCitizen from "@components/cloud/Custom/Card/NewsCardCitizen";
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
function CardStyleWithFeaturedPostAndPolls() {
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

  // console.log("CardStyleWithFeaturedPostAndPolls config", config);
  //console.log("CardStyleWithFeaturedPostAndPolls readyDatasrc", readyDatasrc);
  // console.log("CardStyleWithFeaturedPostAndPolls widgetnemgooReady", widgetnemgooReady);
  // console.log("CardStyleWithFeaturedPostAndPolls positionConfig", positionConfig);

  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 gap-5 lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 p-5">
      {readyDatasrc &&
        readyDatasrc.map((item: any, index: any) => (
          <div key={item?.id || index} className="">
            <NewsCardCitizen
              key={item?.id || index}
              item={item}
              position={positionConfig}
              type={4}
            />
          </div>
        ))}
    </div>
  );
}

export default CardStyleWithFeaturedPostAndPolls;
/*
original code
<div className="py-12 md:px-8">
        <div className="px-6 xl:px-0">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
            <div className="bg-gray-100">
              <div className="relative h-96 w-full">
                <img
                  className="absolute inset-0 object-center object-cover h-full w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(1).png"
                  alt="americanflag"
                />
              </div>
              <div className="py-6 px-4">
                <button className="hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">
                  Culture
                </button>
                <h1 className="text-2xl text-indigo-900 font-bold">
                  Policy Level Decisions
                </h1>
                <p className="py-3 text-sm text-gray-700 leading-8">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event.
                </p>
                <div className="pt-6">
                  <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <circle
                            cx={9}
                            cy={9}
                            r="7.5"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 4.8335V9.00016L11.5 11.5002"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="pl-1">5 minute read</p>
                    </div>
                    <div className=" sm:pt-0 pt-3 flex items-center">
                      <p className="font-medium">12th August, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="relative h-96 w-full">
                <img
                  className="absolute inset-0 object-center object-cover h-full w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(2).png"
                  alt="mills"
                />
              </div>
              <div className="py-6 px-4">
                <button className="hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">
                  Culture
                </button>
                <h1 className="text-2xl text-indigo-900 font-bold">
                  Policy Level Decisions
                </h1>
                <p className="py-3 text-sm text-gray-700 leading-8">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event.
                </p>
                <div className="pt-6">
                  <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <circle
                            cx={9}
                            cy={9}
                            r="7.5"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 4.8335V9.00016L11.5 11.5002"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="pl-1">5 minute read</p>
                    </div>
                    <div className=" sm:pt-0 pt-3 flex items-center">
                      <p className="font-medium">12th August, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-10 md:py-56 lg:py-0 px-4 bg-gradient-to-br from-indigo-700 to-indigo-800">
              <div className="flex flex-col justify-center h-full">
                <p className="text-sm text-white">Economy</p>
                <p className="text-xl text-white tracking-wide font-bold leading-9 pt-1">
                  Economic reform: To do or not to do. An in-depth analysis of
                  how socialism is making a comeback in the USA
                </p>
              </div>
            </div>
            <div className="py-10 lg:py-0 px-4 bg-gradient-to-br from-red-700 to-red-800">
              <div className="flex flex-col justify-center h-full">
                <p className="text-sm text-white">Poll</p>
                <p className="text-xl text-white tracking-wide font-bold leading-9 pt-1">
                  Will the prelimenary debate determine the likelyhood of the
                  next presedential candidate
                </p>
                <p className="text-white italic underline text-sm font-semibold pt-7 cursor-pointer">
                  Take the poll
                </p>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="relative h-96 w-full">
                <img
                  className="absolute inset-0 object-center object-cover h-full w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(3).png"
                  alt="americanflag"
                />
              </div>
              <div className="py-6 px-4">
                <button className="hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">
                  Culture
                </button>
                <h1 className="text-2xl text-indigo-900 font-bold">
                  Policy Level Decisions
                </h1>
                <p className="py-3 text-sm text-gray-700 leading-8">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event.
                </p>
                <div className="pt-6">
                  <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <circle
                            cx={9}
                            cy={9}
                            r="7.5"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 4.8335V9.00016L11.5 11.5002"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="pl-1">5 minute read</p>
                    </div>
                    <div className=" sm:pt-0 pt-3 flex items-center">
                      <p className="font-medium">12th August, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100">
              <div className="relative h-96 w-full">
                <img
                  className="absolute inset-0 object-center object-cover h-full w-full"
                  src="https://cdn.tuk.dev/assets/components/111220/Blg-12/blog_alt(1).png"
                  alt="mills"
                />
              </div>
              <div className="py-6 px-4">
                <button className="hover:opacity-90 py-1.5 px-3 bg-red-600 uppercase text-white text-sm font-medium mb-5">
                  Culture
                </button>
                <h1 className="text-2xl text-indigo-900 font-bold">
                  Policy Level Decisions
                </h1>
                <p className="py-3 text-sm text-gray-700 leading-8">
                  Find the latest events updates or create events, concerts,
                  conferences, workshops, exhibitions, and cultural events in
                  all cities of the US. The aim of Eventistan is to promote
                  healthy and entertaining event.
                </p>
                <div className="pt-6">
                  <div className="sm:flex justify-between w-full items-center text-gray-600 text-sm">
                    <div className="flex items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <circle
                            cx={9}
                            cy={9}
                            r="7.5"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9 4.8335V9.00016L11.5 11.5002"
                            stroke="#718096"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="pl-1">5 minute read</p>
                    </div>
                    <div className=" sm:pt-0 pt-3 flex items-center">
                      <p className="font-medium">12th August, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
