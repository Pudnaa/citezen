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
export default function Faq5() {
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

  // console.log("Faq5 config", config);
  // console.log("Faq5 readyDatasrc", readyDatasrc);
  // console.log("Faq5 widgetnemgooReady", widgetnemgooReady);
  // console.log("Faq5 positionConfig", positionConfig);
  return (
    <>
      <div className="2xl:mx-auto 2xl:container xl:px-20 sm:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-base leading-6 mt-4 2xl:w-2/5 md:w-1/2 text-center text-gray-600">
            If you're looking for random paragraphs, you've come to the right
            place. When a random word or a random sentence isn't quite enough
          </p>
        </div>
        <div className="md:flex hidden items-center xl:justify-start justify-between mt-12">
          <button className="text-xl border-b-2 border-indigo-700 pb-2  font-semibold leading-5 focus:outline-none xl:mr-20 text-indigo-700">
            Account Setting
          </button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">
            Pricing Plan
          </button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">
            Delivery Methods
          </button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">
            Usage Guidelines
          </button>
          <button className="text-xl border-b-2 border-transparent pb-2 focus:border-indigo-700 hover:border-indigo-700 font-semibold leading-5 xl:mr-20 focus:outline-none text-gray-600 focus:text-indigo-700 hover:text-indigo-700">
            Other Plans
          </button>
        </div>
        <div className="md:hidden relative w-full mx-auto bg-white rounded mt-12">
          <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-selector"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A0AEC0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="8 9 12 5 16 9" />
              <polyline points="16 15 12 19 8 15" />
            </svg>
          </div>
          <select
            aria-label="Selected tab"
            className="form-select block w-full p-3  border rounded border-gray-200 text-gray-600 appearance-none bg-transparent relative z-10"
          >
            <option selected className="text-base text-indigo-700">
              Account Setting
            </option>
            <option className="text-base leading-none text-gray-600">
              Pricing Plan
            </option>
            <option className="text-base leading-none text-gray-600">
              Delivery Methods
            </option>
            <option className="text-base leading-none text-gray-600">
              Usage Guidelines
            </option>
          </select>
        </div>
        <div className="flex flex-col mt-12">
          <div className="w-full lg:flex items-stretch ">
            <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
              <h2 className="text-base font-semibold leading-4 text-gray-800">
                Are random sentences computer generated?
              </h2>
              <p className="text-base leading-6 text-gray-600 mt-4">
                No, the random sentences in our generator are not computer
                generated. We considered using computer generated sentences when
                building this tool, but found the results to be disappointing.
                Even though it took a lot of time, all the sentences in this
                generator were created by us.
              </p>
            </div>
            <div className="lg:w-1/2 mr-4">
              <h2 className="text-base font-semibold leading-4 text-gray-800">
                Can i write random sentences?
              </h2>
              <p className="text-base leading-6 text-gray-600 mt-4">
                No, the random sentences in our generator are not computer
                generated. We considered using computer generated sentences when
                building this tool, but found the results to be disappointing.
                Even though it took a lot of time, all the sentences in this
                generator were created by us.
              </p>
            </div>
          </div>
          <div className="w-full lg:flex items-stretch mt-10">
            <div className="lg:w-1/2 lg:mr-4 lg:mb-0 mb-10">
              <h2 className="text-base font-semibold leading-4 text-gray-800">
                Are random sentences computer generated?
              </h2>
              <p className="text-base leading-6 text-gray-600 mt-4">
                No, the random sentences in our generator are not computer
                generated. We considered using computer generated sentences when
                building this tool, but found the results to be disappointing.
                Even though it took a lot of time, all the sentences in this
                generator were created by us.
              </p>
            </div>
            <div className="lg:w-1/2 mr-4">
              <h2 className="text-base font-semibold leading-4 text-gray-800">
                Can i write random sentences?
              </h2>
              <p className="text-base leading-6 text-gray-600 mt-4">
                No, the random sentences in our generator are not computer
                generated. We considered using computer generated sentences when
                building this tool, but found the results to be disappointing.
                Even though it took a lot of time, all the sentences in this
                generator were created by us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
