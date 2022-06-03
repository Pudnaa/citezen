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
export default function Newsletter4() {
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

  // console.log("Newsletter4 config", config);
  // console.log("Newsletter4 readyDatasrc", readyDatasrc);
  // console.log("Newsletter4 widgetnemgooReady", widgetnemgooReady);
  // console.log("Newsletter4 positionConfig", positionConfig);
  return (
    <div>
      <div className="grid place-content-center">
        <div className="relative bg-indigo-700 border rounded-md my-12 mx-4 overflow-hidden">
          <div className="z-0 absolute bottom-0 right-0">
            <img src="https://i.ibb.co/pzpth1G/Vector-1-1.png" />
          </div>
          <div className="z-0 absolute bottom-0 left-0">
            <img src="https://i.ibb.co/W3HTXFv/Vector-1.png" />
          </div>
          <div className="relative z-20 text-white mx-8 md:mx-12 py-12 text-center">
            <h1 className="font-bold text-2xl md:text-4xl lg:text-5xl">
              Get Notified by Signing Up
            </h1>
            <p className="pt-8">
              Sign up for our newsletter and get weekly updates. We only send
              emails about our latest products on the market once a week every
              Friday.
            </p>
            <div className="mt-8 place-items-center flex flex-col justify-center lg:flex-row lg:gap-8">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full md:w-3/4 lg:w-auto bg-transparent placeholder-white p-4 grid place-items-center border rounded-md focus:outline-none"
              />
              <button className="mt-4 lg:mt-0 w-full md:w-3/4 lg:w-auto bg-white text-gray-900 py-4 px-8 border rounded-md hover:bg-gray-200 grid place-items-center  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 font-semibold">
                Subscribe
              </button>
            </div>
            <div className="grid place-items-center mt-8 md:flex justify-center md:gap-8">
              <div className="flex justify-start gap-2">
                <div className="grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-check"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
                <p>End to end encrypted</p>
              </div>
              <div className="lg:mt-0 flex justify-start gap-2">
                <div className="grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-check"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ffffff"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </div>
                <p>10% Signin Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
