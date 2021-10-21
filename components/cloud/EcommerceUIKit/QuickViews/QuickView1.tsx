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
  AtomImage,
} from "@components/common/Atom";

export default function QuickView1() {
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
  const [show, setshow] = useState(true);
  if (isEmpty(datasrc)) return null;
    // console.log("QuickView1 config", config);
  // console.log("QuickView1 datasrc", datasrc);
  // console.log("QuickView1 otherattr", otherattr);
  // console.log("QuickView1 positionConfig", positionConfig);

  return (
    <div className="bg-gray-800">
      <div
        id="button"
        className={`xl:container xl:mx-auto justify-center items-center md:py-12 md:px-6 px-4 py-9 ${
          show ? "hidden" : "flex"
        }`}
      >
        <button
          onClick={() => setshow(true)}
          className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
        >
          Open Modal
        </button>
      </div>
      <div
        id="modal"
        className={`xl:container xl:mx-auto justify-center items-center md:py-12 md:px-6 px-4 py-9 ${
          show ? "flex" : "hidden"
        }`}
      >
        <div className="relative flex justify-center items-center flex-col bg-white p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row items-strech justify-center md:space-x-10 lg:py-10 lg:px-20">
            <div className="w-full relative flex flex-col">
              <div className="md:hidden my-4 flex w-full justify-end">
                <button
                  onClick={() => setshow(false)}
                  aria-label="close modal"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                >
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="#1F2937"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <img
                className="w-full h-full object-cover object-center"
                src="https://i.ibb.co/LYMXRz2/pexels-ray-piedra-1464625-3.png"
                alt="shoes"
                role="img"
              />
            </div>
            <div className="lg:mt-0 w-full lg:w-1/2 mt-4 md:mt-0">
              <div className="w-64 md:w-full">
                <p className="text-sm text-gray-500 leading-3">
                  WTC402078-10267084
                </p>
                <h1 className="text-2xl font-semibold text-gray-800 mt-2 leading-6">
                  White running shoes
                </h1>
                <p className="mt-6 md:mt-4 text-xl md:text-2xl leading-5 md:leading-6 text-gray-800">
                  $170
                </p>
                <p className="mt-10 text-base leading-none text-gray-500">
                  Colour
                </p>
                <div className="flex flex-row justify-start space-x-2 mt-2">
                  <button
                    aria-label="light gray"
                    role="button"
                    className="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-gray-300 rounded-full"
                  />
                  <button
                    aria-label="dark gray"
                    role="button"
                    className="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-gray-800 rounded-full"
                  />
                  <button
                    aria-label="Yellow"
                    role="button"
                    className="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-yellow-500 rounded-full"
                  />
                  <button
                    aria-label="Blue"
                    role="button"
                    className="focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500 w-4 h-4 bg-blue-500 rounded-full"
                  />
                </div>
                <p className="mt-6 text-base leading-none text-gray-500">
                  Select a size
                </p>
                <div className="flex justify-start items-start flex-row space-x-2 mt-2">
                  <button className="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">
                    40
                  </button>
                  <button className="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">
                    41
                  </button>
                  <button className="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">
                    42
                  </button>
                  <button className="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">
                    43
                  </button>
                  <button className="w-7 h-7 focus:outline-none focus:ring-2 focus:ring-gray-500 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white border-gray-300 border rounded-full text-xs">
                    44
                  </button>
                </div>
              </div>
              <div className="flex flex-row justify-center items-center mt-6 space-x-2">
                <div className="w-full">
                  <button className="bg-gray-900 hover:bg-gray-800 text-base font-medium text-white text-center h-12 w-60 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                    Add to cart
                  </button>
                </div>
                <div className="w-full">
                  <button
                    className="bg-gray-900 hover:bg-gray-800 w-12 h-12 flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                    aria-label="bookmark"
                  >
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2916 14.7989L6.05348 17.142L6.86307 12.1792L3.42969 8.66491L8.16775 7.94284L10.2868 3.42773L12.4059 7.94284L17.144 8.66491L13.7106 12.1792L14.5202 17.142L10.2916 14.7989Z"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-6 right-6 le md:flex w-full justify-end hidden">
            <button
              onClick={() => setshow(false)}
              aria-label="close modal"
              className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
