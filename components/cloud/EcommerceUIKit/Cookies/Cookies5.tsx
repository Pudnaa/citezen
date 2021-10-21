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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
export default function Cookies5() {
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
  // console.log("Cookies5 config", config);
  // console.log("Cookies5 datasrc", datasrc);
  // console.log("Cookies5 otherattr", otherattr);
  // console.log("Cookies5 positionConfig", positionConfig);
  return (
    <div>
      <div className="relative flex justify-center items-center ">
        <button
          // onclick="showMenu(true)"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black"
        >
          Open
        </button>
        <div
          id="menu"
          className=" w-full h-full bg-gray-900 bg-opacity-80 top-0  fixed sticky-0"
        >
          <div className=" absolute bottom-0 w-full  flex justify-center items-center  ">
            <div className=" w-full relative flex flex-col justify-center items-center bg-white py-7 px-4 md:px-6 lg:px-20">
              <div className="flex justify-start flex-col items-start w-full">
                <h1
                  role="main"
                  className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-left text-gray-800"
                >
                  Disclosure
                </h1>
                <p className="w-full sm:w-10/12 mt-2 text-base leading-6 text-gray-600">
                  We and selected thrid parties use cookies or similar
                  technologies as specified in the cookie policy
                </p>
                <div className="flex flex-col  md:flex-row justify-center  md:justify-between items-center w-full  mt-4">
                  <button className="w-72 md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-300 bg-gray-100 p-4 text-base leading-4 text-center text-gray-800">
                    Learn more and customize
                  </button>
                  <div className="md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto mt-4 md:mt-0 flex justify-center flex-col md:flex-row items-center">
                    <button
                      //   onclick="showMenu(true)"
                      className="w-72 md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-7 border border-gray-800  text-center text-base leading-4   hover:bg-gray-300 text-gray-800"
                    >
                      Refuse
                    </button>
                    <button className="w-72 md:w-auto  py-4 px-7 text-base leading-4 text-center border border-gray-800 text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                      Accept
                    </button>
                  </div>
                </div>
              </div>
              <button
                // onclick="showMenu(true)"
                className=" absolute top-4 md:top-8 right-4 md:right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                aria-label="close"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
