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

export default function Card120() {
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

  // console.log("Card120 config", config);
  // console.log("Card120 readyDatasrc", readyDatasrc);
  // console.log("Card120 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card120 positionConfig", positionConfig);
  return (
    <>
      <div className="flex items-center justify-center py-6 px-4 w-full">
        <div className="max-w-sm w-full bg-white border border-gray-200 py-6 px-4">
          <h1 className="text-base font-semibold leading-4 text-gray-800">
            New Interns
          </h1>
          <div className="mt-6 pb-5 border-gray-200 border-b flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://i.ibb.co/xLtZCRT/Mask-Group.png"
                  alt="profile picture"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Anita Jane
                </p>
                <p className="text-sm leading-none mt-1 text-gray-600">
                  @anitajane
                </p>
              </div>
            </div>
            <div>
              <button
                role="button"
                aria-label="view"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-indigo-700"
              >
                View
              </button>
            </div>
          </div>
          <div className="mt-5 pb-5 border-gray-200 border-b flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://i.ibb.co/JcHtJrV/Mask-Group-3.png"
                  alt="profile picture"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Charles Jason
                </p>
                <p className="text-sm leading-none mt-1 text-gray-600">
                  @Charlesjason
                </p>
              </div>
            </div>
            <div>
              <button
                role="button"
                aria-label="view"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-indigo-700"
              >
                View
              </button>
            </div>
          </div>
          <div className="mt-5 pb-5 border-gray-200 border-b flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://i.ibb.co/zRb0ZB2/Mask-Group-1.png"
                  alt="profile picture"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Ruby Rose
                </p>
                <p className="text-sm leading-none mt-1 text-gray-600">
                  @rubyrose
                </p>
              </div>
            </div>
            <div>
              <button
                role="button"
                aria-label="view"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-indigo-700"
              >
                View
              </button>
            </div>
          </div>
          <div className="mt-5 pb-5 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full">
                <img
                  src="https://i.ibb.co/GVjsX9h/Mask-Group-2.png"
                  alt="profile picture"
                />
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium leading-none text-gray-800">
                  Janet Jackson
                </p>
                <p className="text-sm leading-none mt-1 text-gray-600">
                  @janetjackson
                </p>
              </div>
            </div>
            <div>
              <button
                role="button"
                aria-label="view"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-indigo-700"
              >
                View
              </button>
            </div>
          </div>
          <div className="mt-3">
            <button className="w-full text-sm font-medium leading-none text-gray-600 py-2 bg-white border border-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
