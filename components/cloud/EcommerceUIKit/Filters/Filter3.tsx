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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
export default function Filter3() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [show, setShow] = useState(false);

  // console.log("Filter3 config", config);
  // console.log("Filter3 readyDatasrc", readyDatasrc);
  // console.log("Filter3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Filter3 positionConfig", positionConfig);

  return (
    <div className="">
      <div className="2xl:container 2xl:mx-auto">
        <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
          <p className=" text-sm leading-3 text-gray-600 font-normal mb-2">
            Home - Men - Products - Filters
          </p>
          <div className=" flex justify-between items-center mb-4">
            <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
              Watches
            </h2>
            {/* filters Button (md and plus Screen) */}
            <button
              onClick={() => setShow(!show)}
              className=" cursor-pointer sm:flex hidden hover:bg-gray-700  focus:ring focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800  text-base leading-4 font-normal text-white justify-center items-center "
            >
              <svg
                className=" mr-2"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V8"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 12V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 4V14"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 4V5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 9V20"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Filters
            </button>
          </div>
          <p className=" text-xl leading-5 text-gray-600 font-medium">
            09 Products
          </p>
          {/* Filters Button (Small Screen) */}
          <button
            onClick={() => setShow(!show)}
            className=" cursor-pointer mt-6  sm:hidden hover:bg-gray-700  focus:ring focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
          >
            <svg
              className=" mr-2"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 4V8"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 12V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 4V14"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9C19.1046 9 20 8.10457 20 7C20 5.89543 19.1046 5 18 5C16.8954 5 16 5.89543 16 7C16 8.10457 16.8954 9 18 9Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 4V5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 9V20"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Filters
          </button>
        </div>
        <div
          className={`relative ${
            show ? "hidden" : ""
          }  lg:px-20 md:px-6 py-10 px-8 bg-gray-50 w-full lg:pb-48`}
        >
          <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 lg:gap-y-0 md:gap-y-24 gap-y-14 ">
            {/* Cross button Code */}
            <div
              onClick={() => setShow(!show)}
              className="cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4"
            >
              <svg
                className=" lg:w-6 lg:h-6 w-4 h-4"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 1L1 25"
                  stroke="#1F2937"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L25 25"
                  stroke="#27272A"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Colors Section */}
            <div className=" flex flex-col space-y-8 justify-start items-start">
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Colors
              </p>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-white shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  White
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-blue-600 shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Blue
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-red-600 shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Red
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center ">
                <div className=" w-4 h-4 rounded-full bg-indigo-600 shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Indigo
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-black shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Black
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-purple-600 shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Purple
                </p>
              </div>
              <div className=" flex space-x-2 justify-center items-center">
                <div className=" w-4 h-4 rounded-full bg-gray-600 shadow" />
                <p className=" text-base leading-4 text-gray-600 font-normal">
                  Grey
                </p>
              </div>
            </div>
            {/* Material Section */}
            <div className=" flex flex-col space-y-8 lg:justify-start lg:items-start md:justify-start md:items-center">
              <div className=" flex flex-col space-y-8 justify-start items-start ">
                <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                  Material
                </p>
                <div className=" flex justify-center items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Leather"
                    name="Leather"
                    defaultValue="Leather"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Leather"
                      >
                        Leather
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Cotton"
                    name="Cotton"
                    defaultValue="Cotton"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Cotton"
                      >
                        Cotton
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Fabric"
                    name="Fabric"
                    defaultValue="Fabric"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Fabric"
                      >
                        Fabric
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Crocodile"
                    name="Crocodile"
                    defaultValue="Crocodile"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Crocodile"
                      >
                        Crocodile
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Wool"
                    name="Wool"
                    defaultValue="Wool"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Wool"
                      >
                        Wool
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Size Section */}
            <div className=" flex flex-col space-y-8  lg:justify-start lg:items-start md:justify-start md:items-end">
              <div className=" flex flex-col space-y-8 justify-start items-start">
                <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                  Size
                </p>
                <div className=" flex justify-center items-center ">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Large"
                    name="Large"
                    defaultValue="Large"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Large"
                      >
                        Large
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center ">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Medium"
                    name="Medium"
                    defaultValue="Medium"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Medium"
                      >
                        Medium
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center ">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Small"
                    name="Small"
                    defaultValue="Small"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Small"
                      >
                        Small
                      </label>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center items-center ">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="Mini"
                    name="Mini"
                    defaultValue="Mini"
                  />
                  <div className=" inline-block">
                    <div className=" flex space-x-6 justify-center items-center">
                      <label
                        className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        htmlFor="Mini"
                      >
                        Mini
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Collection Section */}
            <div className=" flex flex-col space-y-8 justify-start items-start">
              <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
                Collection
              </p>
              <div className=" flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="LS"
                  name="LS"
                  defaultValue="LS"
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="LS"
                    >
                      Luxe signature
                    </label>
                  </div>
                </div>
              </div>
              <div className=" flex justify-center items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="LxL"
                  name="LxL"
                  defaultValue="LxL"
                />
                <div className=" inline-block">
                  <div className=" flex space-x-6 justify-center items-center">
                    <label
                      className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                      htmlFor="LxL"
                    >
                      Luxe x London
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Apply Filter Button (Large Screen) */}
          <div className=" hidden md:block absolute right-0 bottom-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
            <button
              //   onclick="applyFilters()"
              className="hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
          {/* Apply Filter Button (Table or lower Screen) */}
          <div className="block md:hidden w-full mt-16 ">
            <button
              //   onclick="applyFilters()"
              className=" w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
             display: flex;
            }
            `}
      </style>
    </div>
  );
}
