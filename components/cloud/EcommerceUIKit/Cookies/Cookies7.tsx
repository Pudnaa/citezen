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
export default function Cookies7() {
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
  // console.log("Cookies7 config", config);
  // console.log("Cookies7 datasrc", datasrc);
  // console.log("Cookies7 otherattr", otherattr);
  // console.log("Cookies7 positionConfig", positionConfig);
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
          className=" w-full h-full bg-black bg-opacity-20 top-0  fixed sticky-0"
        >
          <div className=" absolute px-4 md:px-0 bottom-6 xl:bottom-20 sm:right-6 xl:right-20 flex justify-end items-end ">
            <div className="blur   sm:w-96 md:w-6/12 lg:w-4/12 xl:w-4/12  relative flex flex-col justify-start items-start bg-white px-4 md:px-8 py-12">
              <div role="banner">
                icon
                <h1
                  role="main"
                  className="text-2xl font-semibold leading-normal text-center text-gray-800 mt-8"
                >
                  Allow Cookies
                </h1>
              </div>
              <div className="mt">
                <div>
                  <p className="mt-3  text-base leading-7  text-gray-600">
                    We use cookies, including thrid-party cookies, for
                    functional reasons, for satistical analysis, to personalise
                    your experience.
                  </p>
                </div>

                <div className="flex justify-center lg:flex-row  flex-col-reverse items-center w-full lg:space-x-4 mt-9  ">
                  <button
                    // onclick="showMenu(true)"
                    className="w-60  sm:w-full mt-4 lg:mt-0  text-base border border-gray-800 leading-4 text-center text-gray-800 py-4 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  hover:bg-gray-300 "
                  >
                    Exit
                  </button>
                  <button className="w-60  sm:w-full   text-base leading-4 border border-gray-800 text-center text-white py-4 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">
                    Accept
                  </button>
                </div>
              </div>
              <button
                // onclick="showMenu(true)"
                className=" absolute top-5 md:top-8 right-5 md:right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                aria-label="close"
              >
   
              </button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
}
