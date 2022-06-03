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
const Newsletter8 = () => {
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

  // console.log("Newsletter8 config", config);
  // console.log("Newsletter8 readyDatasrc", readyDatasrc);
  // console.log("Newsletter8 widgetnemgooReady", widgetnemgooReady);
  // console.log("Newsletter8 positionConfig", positionConfig);

  return (
    <div className="bg-gray-800 h-screen">
      <div
        id="button"
        className={
          "justify-center items-center py-20 " + (show ? "hidden" : "flex")
        }
      >
        <button
          onClick={() => setShow(true)}
          className="text-gray-800 font-semibold border rounded-md bg-white py-5 px-10 focus:outline-none hover:bg-gray-200"
        >
          Show Modal
        </button>
      </div>
      <div id="modal" className="flex items-center justify-center py-12">
        <div
          className={
            "bg-white border rounded-md mx-4 md:w-10/12 items-center justify-center relative " +
            (show ? "flex" : "hidden")
          }
        >
          <div className="relative z-10 w-full">
            <div className="flex flex-col justify-center pt-10 pb-12 px-4 md:px-10">
              <div className="absolute top-5 right-5">
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
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-sm leading-none text-center md:pt-0 pt-3">
                Try free for 30 days -{" "}
                <u className="no-underline text-indigo-700">
                  No credit card required
                </u>{" "}
              </p>
              <h1 className="pt-4 pb-10 text-2xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800">
                Get new products every months in your inbox!{" "}
              </h1>
              <div className="flex justify-center flex-col md:flex-row gap-4 md:gap-7">
                <input
                  type="email"
                  placeholder="Enter you email to join"
                  className="bg-white border rounded-md placeholder-gray-300 border-gray-300 p-4 w-full lg:w-1/2 focus:outline-none"
                />
                <button className="px-8 py-4 bg-indigo-700 rounded-md text-white font-medium text-base focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-opacity-50 hover:bg-indigo-800 w-full md:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter8;
