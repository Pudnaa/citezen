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
const TabView = () => {
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
  const [activeStatus, setActiveStatus] = useState(1);

  // console.log("TabView config", config);
  // console.log("TabView readyDatasrc", readyDatasrc);
  // console.log("TabView widgetnemgooReady", widgetnemgooReady);
  // console.log("TabView positionConfig", positionConfig);
  return (
    <div className="container mx-auto">
      <div className="w-11/12 xl:w-full mx-auto pt-16">
        <div className="pt-4 pb-6 md:pb-8 lg:pb-10 xl:pb-12">
          <p className="text-gray-500 text-lg uppercase leading-tight mb-4">
            star with the basics
          </p>
          <h1 className="xl:text-5xl text-3xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h1>
        </div>
        <div>
          <div className="sm:hidden mb-8 relative">
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
            <select
              defaultValue="Services"
              aria-label="Selected tab"
              className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10"
            >
              <option className="text-sm text-gray-600">Products</option>
              <option className="text-sm text-gray-600">Billing</option>
              <option className="text-sm text-gray-600">Services</option>
              <option className="text-sm text-gray-600">Portal</option>
              <option className="text-sm text-gray-600">
                Customer Services
              </option>
            </select>
          </div>
          <div className="w-full xl:w-6/12 hidden sm:block">
            <ul className="flex justify-between mb-2">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus == 1
                    ? "text-indigo-700 xl:text-base text-sm cursor-pointer"
                    : "text-gray-500 xl:text-base text-sm cursor-pointer"
                }
              >
                Services
              </li>
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus == 2
                    ? "text-indigo-700 xl:text-base text-sm cursor-pointer"
                    : "text-gray-500 xl:text-base text-sm cursor-pointer"
                }
              >
                Products
              </li>
              <li
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus == 3
                    ? "text-indigo-700 xl:text-base text-sm cursor-pointer"
                    : "text-gray-500 xl:text-base text-sm cursor-pointer"
                }
              >
                Billing
              </li>
              <li
                onClick={() => setActiveStatus(4)}
                className={
                  activeStatus == 4
                    ? "text-indigo-700 xl:text-base text-sm cursor-pointer"
                    : "text-gray-500 xl:text-base text-sm cursor-pointer"
                }
              >
                Portal
              </li>
              <li
                onClick={() => setActiveStatus(5)}
                className={
                  activeStatus == 5
                    ? "text-indigo-700 xl:text-base text-sm cursor-pointer"
                    : "text-gray-500 xl:text-base text-sm cursor-pointer"
                }
              >
                Customer Services
              </li>
            </ul>
          </div>
          <div className="relative h-2 bg-gray-200 rounded-lg mb-8 hidden sm:block">
            <div
              style={{
                left:
                  activeStatus == 1
                    ? "0%"
                    : activeStatus == 2
                    ? "10%"
                    : activeStatus == 3
                    ? "20%"
                    : activeStatus == 4
                    ? "30%"
                    : activeStatus == 5
                    ? "40%"
                    : "0%",
              }}
              className={
                activeStatus == 5
                  ? "transition ease-in-out duration-150 absolute h-2 bg-indigo-700 rounded-lg w-32"
                  : "transition ease-in-out duration-150 absolute h-2 bg-indigo-700 rounded-lg w-16"
              }
            />
          </div>
          <div className="mx-auto">
            <ul className="bg-gray-100 rounded">
              <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4 rounded">
                <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">
                  What does lorem ipsum actually mean?
                </p>
                <p className="xl:w-10/12 w-full text-gray-600 text-base leading-8">
                  Yes. AIBI certifications include the required material with
                  your enrollment. It can be accessed across any and all devices
                  and is available to you immediately after signup. Membership
                  does not expire.
                </p>
              </li>
              <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4">
                <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">
                  What does lorem ipsum actually mean?
                </p>
                <p className="xl:w-10/12 w-full text-gray-600 text-base leading-8">
                  ou will earn an Americas International Business Institute
                  (AIBI) certificate for resume &amp; employment purposes upon
                  completion of the course modules &amp; the final exam.
                </p>
              </li>
              <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4">
                <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">
                  What does lorem ipsum actually mean?
                </p>
                <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base leading-8">
                  According to Harvard University, open book exams better help
                  students apply, analyze, synthesize, compare/contrast or
                  evaluate information.
                </p>
              </li>
              <li className="border-gray-200 border-solid border-b xl:p-8 lg:p-8 md:p-8 sm:p-8 p-4 rounded">
                <p className="text-gray-800 text-2xl xl:w-10/12 w-full mb-4">
                  What does lorem ipsum actually mean?
                </p>
                <p className="xl:w-10/12 lg:w-10/12 w-full text-gray-600 text-base leading-8">
                  You will earn an Americas International Business Institute
                  (AIBI) certificate for resume &amp; employment purposes upon
                  completion of the course modules &amp; the final exam.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TabView;
