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
export default function Cookies3() {
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
  // console.log("Cookies3 config", config);
  // console.log("Cookies3 datasrc", datasrc);
  // console.log("Cookies3 otherattr", otherattr);
  // console.log("Cookies3 positionConfig", positionConfig);
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
          <div className=" 2xl:container 2xl:mx-auto py-48 px-4 md:px-6 flex justify-center items-center  ">
            <div className="w-96 md:w-full lg:w-10/12 relative flex flex-col justify-center items-center bg-white py-10 md:pt-8 lg:pt-12 pb-10 px-6 md:px-10">
              <div className="flex justify-start flex-col items-start w-full">
                <h1
                  role="main"
                  className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-left text-gray-800"
                >
                  Cookies &amp; Privacy
                </h1>
                <p className="mt-6 text-base leading-6 text-gray-600">
                  We use cookies to understand how you use our site and to
                  improve your experience. This includes personalizing content
                  and advertising. To manage or opt out of the use of cookies
                  click here. By continuing to sue webiste or closing this
                  banner, you accept our use of first and third-party cookies.
                </p>
                <div className="flex  flex-col-reverse md:flex-row justify-center  md:justify-end items-center w-full md:space-x-10 mt-8">
                  <a
                    href="javascript:void(0)"
                    className="mt-6 md:mt-0 text-center text-base leading-4 focus:border-gray-800 border-b border-transparent focus:outline-none hover:border-gray-800  text-gray-800"
                  >
                    Cookie Settings
                  </a>
                  <button className="w-full md:w-auto   text-base leading-4 text-center text-white py-5 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                    Ok, understood
                  </button>
                </div>
              </div>
              <button
                // onclick="showMenu(true)"
                className=" absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
