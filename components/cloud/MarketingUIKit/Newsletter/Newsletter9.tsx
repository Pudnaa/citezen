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

const Newsletter9 = () => {
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
  const [show, setShow] = useState(true);

  // console.log("Newsletter9 config", config);
  // console.log("Newsletter9 readyDatasrc", readyDatasrc);
  // console.log("Newsletter9 widgetnemgooReady", widgetnemgooReady);
  // console.log("Newsletter9 positionConfig", positionConfig);

  return (
    <div className="bg-gray-800 h-screen">
      <div
        id="button"
        className={
          "container mx-auto justify-center items-center px-4 md:px-10 py-20 " +
          (show ? "hidden" : "flex")
        }
      >
        <button
          onClick={() => setShow(true)}
          className="text-gray-800 font-semibold border rounded-md bg-white py-5 px-10 focus:outline-none hover:bg-gray-200"
        >
          Show Modal
        </button>
      </div>
      <div
        id="modal"
        className="flex items-center justify-center py-10 md:py-12"
      >
        <div
          className={
            "mx-4 bg-white border rounded-md md:w-2/3 sm:w-auto items-center justify-center relative " +
            (show ? "flex" : "hidden")
          }
        >
          <div className="relative z-10 w-full">
            <div className="flex flex-col justify-center pt-10 pb-12 px-4 md:px-6">
              <div className="absolute top-8 right-5">
                <button onClick={() => setShow(false)}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3346 1.66602L1.66797 12.3327M12.3346 12.3327L1.66797 1.66602L12.3346 12.3327Z"
                      stroke="#1F2937"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="absolute top-5 left-5">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 33.0002H9.16667C8.19421 33.0002 7.26158 32.6139 6.57394 31.9262C5.88631 31.2386 5.5 30.306 5.5 29.3335V11.0002C5.5 10.0277 5.88631 9.09507 6.57394 8.40744C7.26158 7.7198 8.19421 7.3335 9.16667 7.3335H34.8333C35.8058 7.3335 36.7384 7.7198 37.4261 8.40744C38.1137 9.09507 38.5 10.0277 38.5 11.0002V24.7502"
                    stroke="#4338CA"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 11L22 22L38.5 11"
                    stroke="#4338CA"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.5 33H38.5"
                    stroke="#4338CA"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33 27.5L38.5 33L33 38.5"
                    stroke="#4338CA"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="pt-10">
                <h1 className="text-xl font-bold leading-7 text-gray-800">
                  Get new products every months in your inbox!{" "}
                </h1>
                <p className="pt-3 pb-8 text-base text-gray-600">
                  Subscribe to our newsletter for daily news
                </p>
                <div className="flex justify-start flex-row gap-0 ">
                  <input
                    type="email"
                    placeholder="Enter you email to join"
                    className="bg-white border border-gray-300 rounded-l-md placeholder-gray-300 p-4 w-4/6 focus:outline-none"
                  />
                  <button className="p-4 bg-indigo-700 rounded-r-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50 hover:bg-indigo-800 w-auto">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter9;
