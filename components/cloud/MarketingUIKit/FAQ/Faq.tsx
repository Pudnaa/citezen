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

function Faq() {
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

  // console.log("Faq config", config);
  // console.log("Faq readyDatasrc", readyDatasrc);
  // console.log("Faq widgetnemgooReady", widgetnemgooReady);
  // console.log("Faq positionConfig", positionConfig);
  return (
    <div className="container mx-auto flex flex-col items-center justify-center py-24">
      <div className="px-4 sm:px-0 ">
        <h1 className="text-2xl sm:text-3xl font-bold md:leading-loose text-gray-800 px-8">
          Hello, how can we help?
        </h1>
        <div className="flex items-center mt-8 border rounded border-gray-600 p-2 justify-between">
          <input
            type="text"
            className="md:ml-5 md:w-auto w-full text-base leading-none text-gray-600 focus:outline-none"
            placeholder="Ask a question"
          />
          <button className="py-3 px-5 bg-indigo-700 rounded text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 hover:bg-indigo-500">
            Search
          </button>
        </div>
      </div>
      <div
        role="list"
        className="mt-16 flex flex-wrap items-center justify-center gap-6"
      >
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center justify-center space-y-6 shadow-lg border rounded border-indigo-700 px-16 py-10"
        >
          <div>
            <svg
              role="img"
              aria-label="Settings Icons"
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-settings"
              width={48}
              height={48}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#4338CA"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
          </div>
          <a
            href="javascript:void(0)"
            className="text-xl font-medium leading-tight text-indigo-700"
          >
            Account Settings
          </a>
        </div>
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700  "
        >
          <div>
            <img
              src="https://i.ibb.co/PzbHxb1/Frame.png"
              role="img"
              alt="Planner Icon"
            />
          </div>
          <a
            href="javascript:void(0)"
            className="text-xl font-medium leading-tight text-gray-800 "
          >
            Pricing and Plan
          </a>
        </div>
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700 "
        >
          <div>
            <img
              src="https://i.ibb.co/7SPS2Zz/Frame-1.png"
              alt="Delivery car Icon"
              role="img"
            />
          </div>
          <a
            href="javascript:void(0)"
            className="text-xl font-medium leading-tight text-gray-800"
          >
            Delivery Methods
          </a>
        </div>
        <div
          role="listitem"
          tabIndex={0}
          className="flex flex-col items-center justify-center space-y-6 shadow-lg rounded px-16 py-10 cursor-pointer border border-transparent hover:border-indigo-700 focus:border-indigo-700 "
        >
          <div>
            <img
              src="https://i.ibb.co/zPj0yXG/Frame-2.png"
              alt="Resgister Icon"
              role="img"
            />
          </div>
          <a
            href="javascript:void(0)"
            className="text-xl font-medium leading-tight text-gray-800"
          >
            Usage guidelines
          </a>
        </div>
      </div>
    </div>
  );
}

export default Faq;
