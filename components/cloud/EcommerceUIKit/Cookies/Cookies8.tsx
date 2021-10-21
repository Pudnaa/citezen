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
export default function Cookies8() {
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
  // console.log("Cookies8 config", config);
  // console.log("Cookies8 datasrc", datasrc);
  // console.log("Cookies8 otherattr", otherattr);
  // console.log("Cookies8 positionConfig", positionConfig);
  return (
    <div>
      <div className="relative flex justify-center items-center ">
        <button
          //   onclick="showMenu(true)"
          className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black"
        >
          Open
        </button>
        <div
          id="menu"
          className="w-full h-full bg-white bg-opacity-80 top-0 fixed sticky-0"
        >
          <div className="2xl:container 2xl:mx-auto py-40 px-4 md:px-28  flex justify-center items-center  ">
            <div className="w-96 md:w-auto relative flex flex-col justify-center items-center  py-16 ">
              <div className="mt-12">
                <h1
                  role="main"
                  className="text-4xl font-extrabold leading-9 text-center text-gray-800"
                >
                  Cookie Settings
                </h1>
              </div>
              <div className=" w-full xl:w-6/12">
                <p className="mt-6  text-base leading-6 text-center text-gray-600">
                  We use cookies and similar thechologies to better know you
                  laughers and improve your laughing experience on our site. You
                  can change your cookie consent preferences at any time by
                  clicking on “Settings”
                </p>
              </div>
              <button className=" w-full md:w-4/12 xl:w-3/12 mt-8 text-base leading-4 border-gray-800 border text-center text-white py-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                Accept Cookies
              </button>
              <button
                // onclick="showMenu(true)"
                className=" w-full md:w-4/12 xl:w-3/12 border-gray-800 border  mt-4 text-base leading-4 text-center text-gray-800 py-4  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  hover:bg-gray-300 "
              >
                Decline Cookies
              </button>
            </div>
          </div>
          <button
            // onclick="showMenu(true)"
            className=" absolute top-8 xl:top-14 right-8 xl:right-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
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
  );
}
