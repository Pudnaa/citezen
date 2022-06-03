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
const Newsletter7 = () => {
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

  // console.log("Newsletter7 config", config);
  // console.log("Newsletter7 readyDatasrc", readyDatasrc);
  // console.log("Newsletter7 widgetnemgooReady", widgetnemgooReady);
  // console.log("Newsletter7 positionConfig", positionConfig);

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
          className="bg-white text-gray-800 border rounded-md py-5 px-10 focus:outline-none hover:bg-gray-200 font-semibold"
        >
          Show Modal
        </button>
      </div>
      <div id="modal" className="mx-auto container w-full">
        <div className="grid place-items-center py-12 px-4 md:p-12">
          <div
            className={
              "sm:px-24 relative justify-between flex-col-reverse lg:flex-row bg-white border rounded-md text-gray-800 px-4 p-16 gap-8 " +
              (show ? "flex" : "hidden")
            }
          >
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
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-800 pb-8 lg:pb-12">
                Get new products every months on your inbox!
              </h1>
              <p className=" text-base text-gray-600">
                Sign Up for our weekly newsletter to get to know about exciting
                offers, our latest products ,the latest industry updates. and
                amazing offers delivered directly in your inbox.
              </p>
              <div className=" flex md:justify-start md:flex-row justify-center flex-col gap-4 pt-8 lg:pt-12">
                <input
                  type="email"
                  placeholder="Enter your email to join"
                  className="w-full md:w-3/4 p-4 border border-gray-300 focus:outline-none rounded-md placeholder-gray-600"
                />
                <button className=" md:w-48 bg-indigo-700 hover:bg-indigo-800 text-white text-base font-medium py-4 px-8 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                  Subscribe
                </button>
              </div>
            </div>
            <div className=" grid place-items-center  ">
              <img src="https://i.ibb.co/sV7CGnY/undraw-Envelope-re-f5j4-1.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter7;
