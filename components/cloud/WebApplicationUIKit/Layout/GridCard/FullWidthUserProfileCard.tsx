import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";

export default function FullWidthUserProfileCard() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  // console.log("FullWidthUserProfileCard config", config);
  // console.log("FullWidthUserProfileCard datasrc", datasrc);
  // console.log("FullWidthUserProfileCard otherattr", otherattr);

  const readyData = datasrc[0];

  return (
    <>
      <div className="flex items-center justify-center w-full">
        {/* Card code block start */}
        <div className="bg-white rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              //   src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              src={renderPositionType(readyData, "position52", positionConfig)}
            />
            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                // src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                src={renderPositionType(readyData, "position2", positionConfig)}
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="pt-16 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/3">
                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <AtomTitle
                    item={renderPositionType(
                      readyData,
                      "position1",
                      positionConfig
                    )}
                    customClassName="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal"
                  />
                  {/* <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">
                    Pro
                  </div> */}
                </div>
                <AtomText
                  item={renderPositionType(
                    readyData,
                    "position3",
                    positionConfig
                  )}
                  customClassName="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5"
                />
              </div>
              <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    82
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Reviews
                  </p>
                </div>
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    28
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Projects
                  </p>
                </div>
                <div>
                  <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    42
                  </h2>
                  <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">
                    Approved
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                  <div className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">
                    Remote
                  </div>
                  <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">
                    Available
                  </div>
                </div>
                <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>
    </>
  );
}
