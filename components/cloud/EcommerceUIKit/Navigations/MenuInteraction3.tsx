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

export default function MenuInteraction3() {
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
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("MenuInteraction3 config", config);
  // console.log("MenuInteraction3 datasrc", datasrc);
  // console.log("MenuInteraction3 otherattr", otherattr);
  // console.log("MenuInteraction3 positionConfig", positionConfig);

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <nav
          id="Navigation"
          className={` ${
            show ? "hidden" : ""
          } flex justify-between items-center md:py-8 lg:px-20 md:px-6 p-4`}
        >
          <ul className="hidden lg:flex justify-center items-center space-x-10 cursor-pointer text-gray-800 text-base leading-4">
            <li>
              <button aria-label="show" onClick={() => setShow(!show)}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L15 15"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a>Men</a>
            </li>
            <li>
              <a>Women</a>
            </li>
            <li>
              <a>Kids</a>
            </li>
          </ul>
          <div className=" cursor-pointer">
            <svg
              width={36}
              height={25}
              viewBox="0 0 36 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.18 24.33C1.92 24.33 1.68 24.23 1.46 24.03C1.26 23.85 1.16 23.63 1.16 23.37C1.16 23.19 1.2 22.97 1.28 22.71C1.34 22.43 1.37 22.22 1.37 22.08C1.37 20.3 1.27 16.88 1.07 11.82C0.87 7.5 0.77 4.09 0.77 1.59C0.77 1.41 0.84 1.27 0.98 1.17C1.12 1.05 1.29 0.989999 1.49 0.989999C1.73 0.989999 1.94 1.08 2.12 1.26C2.3 1.42 2.39 1.62 2.39 1.86C2.39 3.06 2.45 4.86 2.57 7.26C2.67 9.92 2.72 11.72 2.72 12.66L2.75 13.02V13.38V13.59V13.74C2.81 15.48 2.84 18.08 2.84 21.54V22.32H5.15C5.57 22.62 5.78 22.92 5.78 23.22C5.78 23.44 5.7 23.64 5.54 23.82C5.4 23.98 5.23 24.06 5.03 24.06C4.97 24.06 4.86 24.04 4.7 24L4.58 23.97C4.46 23.99 4.27 24 4.01 24H3.5C3.36 23.98 3.2 23.97 3.02 23.97C2.82 24.21 2.54 24.33 2.18 24.33ZM13.52 24.54C12.28 24.54 11.3 24 10.58 22.92C9.8 21.82 9.25 20.47 8.93 18.87C8.57 17.17 8.34 15.35 8.24 13.41C8.14 11.65 8.09 9.74 8.09 7.68V5.19C8.11 4.49 8.12 3.75 8.12 2.97C7.96 2.81 7.88 2.61 7.88 2.37C7.88 2.13 7.97 1.92 8.15 1.74C8.33 1.54 8.53 1.44 8.75 1.44C9.47 1.44 9.83 2.15 9.83 3.57C9.83 4.49 9.88 6.23 9.98 8.79C10.08 11.35 10.13 13.09 10.13 14.01C10.23 14.27 10.32 14.79 10.4 15.57C10.5 16.35 10.55 16.99 10.55 17.49C10.55 17.93 10.62 18.48 10.76 19.14C10.9 19.78 11.1 20.43 11.36 21.09C11.62 21.79 11.96 22.37 12.38 22.83C12.8 23.27 13.24 23.49 13.7 23.49C13.98 23.49 14.21 23.4 14.39 23.22C14.59 23.04 14.72 22.78 14.78 22.44C14.9 21.88 14.96 21.33 14.96 20.79V14.94C14.96 14.2 14.89 13.26 14.75 12.12C14.63 10.86 14.57 9.91 14.57 9.27V9.06C14.57 8.74 14.56 8.45 14.54 8.19L14.51 7.32C14.51 6.76 14.48 5.91 14.42 4.77C14.34 3.75 14.3 2.89 14.3 2.19C14.3 1.97 14.41 1.78 14.63 1.62C14.87 1.46 15.13 1.38 15.41 1.38L16.16 2.07V2.58C16.16 2.82 16.12 3.11 16.04 3.45C15.96 4.01 15.92 4.33 15.92 4.41C15.92 6.23 16.02 8.74 16.22 11.94C16.4 15.3 16.49 17.91 16.49 19.77C16.49 20.77 16.39 21.65 16.19 22.41C16.07 22.87 15.9 23.24 15.68 23.52C15.48 23.8 15.2 24.04 14.84 24.24C14.5 24.44 14.06 24.54 13.52 24.54ZM21.931 24.03C21.351 24.03 21.061 23.39 21.061 22.11C21.061 19.79 20.951 16.08 20.731 10.98C20.531 5.88 20.341 3.19 20.161 2.91C20.161 2.35 20.381 1.92 20.821 1.62C20.981 1.52 21.201 1.44 21.481 1.38C21.781 1.3 22.051 1.26 22.291 1.26C22.411 1.24 22.661 1.23 23.041 1.23C23.501 1.23 23.831 1.31 24.031 1.47C24.231 1.61 24.331 1.87 24.331 2.25C24.331 2.47 24.251 2.64 24.091 2.76C23.931 2.86 23.731 2.91 23.491 2.91L23.191 2.88H22.771C22.211 2.88 21.931 2.99 21.931 3.21C21.931 4.25 22.001 5.61 22.141 7.29C22.261 8.69 22.341 10.02 22.381 11.28C22.521 11.24 22.781 11.18 23.161 11.1C23.561 11 23.861 10.95 24.061 10.95C24.281 10.95 24.471 11.05 24.631 11.25C24.791 11.43 24.871 11.64 24.871 11.88C24.871 12.16 24.741 12.36 24.481 12.48C24.441 12.5 24.341 12.55 24.181 12.63C24.041 12.69 23.851 12.73 23.611 12.75C23.431 12.77 23.131 12.8 22.711 12.84H22.381C22.381 14.04 22.481 15.67 22.681 17.73C22.861 19.89 22.951 21.52 22.951 22.62L22.921 22.74L22.891 22.8C22.911 22.88 22.921 23.01 22.921 23.19C22.921 23.45 22.831 23.66 22.651 23.82C22.471 23.96 22.231 24.03 21.931 24.03ZM31.5205 24.45C31.0405 24.45 30.6105 24.34 30.2305 24.12C29.8505 23.92 29.5405 23.62 29.3005 23.22C28.8205 22.38 28.5105 21.43 28.3705 20.37C28.2305 19.45 28.1605 18.35 28.1605 17.07C28.1005 14.91 28.0705 12.27 28.0705 9.15L28.0405 6.84C28.0205 6.72 28.0105 6.52 28.0105 6.24C27.9705 5.48 27.9505 5.02 27.9505 4.86C28.1305 4.44 28.3405 4.23 28.5805 4.23C28.8205 4.23 29.0305 4.41 29.2105 4.77C29.4105 5.13 29.5105 5.52 29.5105 5.94V14.1C29.5105 14.9 29.5805 15.96 29.7205 17.28C29.8605 18.92 29.9305 19.98 29.9305 20.46C29.9305 21.94 30.5605 22.68 31.8205 22.68C33.2605 22.68 33.9805 17.3 33.9805 6.54V4.86V4.59C33.9605 4.53 33.9505 4.45 33.9505 4.35C33.9505 4.11 34.0005 3.94 34.1005 3.84C34.2205 3.72 34.4405 3.66 34.7605 3.66C35.0205 3.66 35.2205 3.74 35.3605 3.9C35.5205 4.04 35.6205 4.21 35.6605 4.41C35.6805 4.53 35.6905 4.76 35.6905 5.1C35.6905 5.42 35.6605 5.93 35.6005 6.63C35.5205 7.21 35.4805 7.71 35.4805 8.13C35.4805 8.59 35.4605 9 35.4205 9.36L35.3605 10.62V10.86C35.3805 10.94 35.3905 11.03 35.3905 11.13C35.3905 20.01 34.1005 24.45 31.5205 24.45Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div className=" lg:hidden block">
            <button onClick={() => setShow(true)} className=" mr-6">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#1F2937"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => setShow2(!show2)}>
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12L20 12"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L20 6"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex space-x-10 justify-center items-center cursor-pointer text-gray-800 text-base leading-4">
            <li>
              <a>Community</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </nav>
        <ul
          id="DropMenu"
          className={` flex-col space-y-5 items-start text-gray-800  text-base leading-4 md:px-6 p-4 ${
            show2 ? "flex" : "hidden"
          } `}
        >
          <li className=" cursor-pointer hover:text-gray-600">
            <a>Community</a>
          </li>
          <li className=" cursor-pointer hover:text-gray-600">
            <a>Login</a>
          </li>
          <li className=" cursor-pointer hover:text-gray-600">
            <a>About</a>
          </li>
        </ul>
        <div
          id="Search"
          className={` md:py-8 md:px-6 lg:p-0 px-4 py-9 ${
            show == true ? "" : "hidden"
          }`}
        >
          <div className="relative py-20 lg:px-40 lg:py-48 md:px-12 md:py-28 px-6 bg-gray-50 ">
            <div
              onClick={() => setShow(!show)}
              className=" absolute right-0 top-0 lg:py-20 lg:px-28 p-6 cursor-pointer flex justify-end items-center"
            >
              <p className=" text-base leading-4 text-gray-800 mr-2">Close</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93996 7.9998L11.8066 5.1398C11.9322 5.01426 12.0027 4.844 12.0027 4.66646C12.0027 4.48893 11.9322 4.31867 11.8066 4.19313C11.6811 4.0676 11.5108 3.99707 11.3333 3.99707C11.1558 3.99707 10.9855 4.0676 10.86 4.19313L7.99996 7.0598L5.13996 4.19313C5.01442 4.0676 4.84416 3.99707 4.66663 3.99707C4.48909 3.99707 4.31883 4.0676 4.19329 4.19313C4.06776 4.31867 3.99723 4.48893 3.99723 4.66646C3.99723 4.844 4.06776 5.01426 4.19329 5.1398L7.05996 7.9998L4.19329 10.8598C4.13081 10.9218 4.08121 10.9955 4.04737 11.0767C4.01352 11.158 3.99609 11.2451 3.99609 11.3331C3.99609 11.4211 4.01352 11.5083 4.04737 11.5895C4.08121 11.6708 4.13081 11.7445 4.19329 11.8065C4.25527 11.869 4.329 11.9185 4.41024 11.9524C4.49148 11.9862 4.57862 12.0037 4.66663 12.0037C4.75463 12.0037 4.84177 11.9862 4.92301 11.9524C5.00425 11.9185 5.07798 11.869 5.13996 11.8065L7.99996 8.9398L10.86 11.8065C10.9219 11.869 10.9957 11.9185 11.0769 11.9524C11.1581 11.9862 11.2453 12.0037 11.3333 12.0037C11.4213 12.0037 11.5084 11.9862 11.5897 11.9524C11.6709 11.9185 11.7447 11.869 11.8066 11.8065C11.8691 11.7445 11.9187 11.6708 11.9526 11.5895C11.9864 11.5083 12.0038 11.4211 12.0038 11.3331C12.0038 11.2451 11.9864 11.158 11.9526 11.0767C11.9187 10.9955 11.8691 10.9218 11.8066 10.8598L8.93996 7.9998Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div className=" flex justify-center flex-col items-center lg:px-40 px-0">
              <div className=" relative focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border-b-2 border-gray-800 flex justify-between w-full">
                <input
                  type="text"
                  className=" appearance-none focus:none bg-gray-50 p-2 text-gray-800 text-base leading-4 placeholder-gray-800 w-full"
                  placeholder="What are you looking for ?"
                />
                <svg
                  //   onclick="searchResults()"
                  className=" absolute top-0 right-0 cursor-pointer"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66797 16H25.3346"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6665L25.3333 15.9998"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex  justify-between w-full mt-6">
                <div className=" flex space-x-6">
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Men</a>
                  </p>
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Women</a>
                  </p>
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Kids</a>
                  </p>
                </div>
                <div />
              </div>
            </div>
          </div>
        </div>
        <div
          id="searchResults"
          className="md:py-8 lg:px-20 md:px-6 px-4 py-9 hidden"
        >
          <div className="relative py-20 xl:px-40 md:px-24 px-6 bg-gray-50 ">
            <div
              //   onclick="closeShow()"
              className=" absolute right-0 top-0 lg:p-8 p-6 cursor-pointer flex justify-end items-center"
            >
              <p className=" text-base leading-4 text-gray-800 mr-2">Close</p>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93996 7.9998L11.8066 5.1398C11.9322 5.01426 12.0027 4.844 12.0027 4.66646C12.0027 4.48893 11.9322 4.31867 11.8066 4.19313C11.6811 4.0676 11.5108 3.99707 11.3333 3.99707C11.1558 3.99707 10.9855 4.0676 10.86 4.19313L7.99996 7.0598L5.13996 4.19313C5.01442 4.0676 4.84416 3.99707 4.66663 3.99707C4.48909 3.99707 4.31883 4.0676 4.19329 4.19313C4.06776 4.31867 3.99723 4.48893 3.99723 4.66646C3.99723 4.844 4.06776 5.01426 4.19329 5.1398L7.05996 7.9998L4.19329 10.8598C4.13081 10.9218 4.08121 10.9955 4.04737 11.0767C4.01352 11.158 3.99609 11.2451 3.99609 11.3331C3.99609 11.4211 4.01352 11.5083 4.04737 11.5895C4.08121 11.6708 4.13081 11.7445 4.19329 11.8065C4.25527 11.869 4.329 11.9185 4.41024 11.9524C4.49148 11.9862 4.57862 12.0037 4.66663 12.0037C4.75463 12.0037 4.84177 11.9862 4.92301 11.9524C5.00425 11.9185 5.07798 11.869 5.13996 11.8065L7.99996 8.9398L10.86 11.8065C10.9219 11.869 10.9957 11.9185 11.0769 11.9524C11.1581 11.9862 11.2453 12.0037 11.3333 12.0037C11.4213 12.0037 11.5084 11.9862 11.5897 11.9524C11.6709 11.9185 11.7447 11.869 11.8066 11.8065C11.8691 11.7445 11.9187 11.6708 11.9526 11.5895C11.9864 11.5083 12.0038 11.4211 12.0038 11.3331C12.0038 11.2451 11.9864 11.158 11.9526 11.0767C11.9187 10.9955 11.8691 10.9218 11.8066 10.8598L8.93996 7.9998Z"
                  fill="#1F2937"
                />
              </svg>
            </div>
            <div className=" flex justify-center flex-col items-center lg:px-40 px-0">
              <div className="border-b-2 border-gray-800 flex justify-between w-full">
                <input
                  type="text"
                  className="  pb-2 bg-gray-50 text-gray-800 text-base leading-4 placeholder-gray-800 w-full"
                  placeholder="Typing..."
                />
                <svg
                  className=" cursor-pointer"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.66797 16H25.3346"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 21.3333L25.3333 16"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 10.6665L25.3333 15.9998"
                    stroke="#1F2937"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className=" flex  justify-between w-full mt-6">
                <div className=" flex space-x-6">
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Men</a>
                  </p>
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Women</a>
                  </p>
                  <p className=" text-gray-600 text-base leading-4">
                    <a>Kids</a>
                  </p>
                </div>
                <div />
              </div>
            </div>
            <div className=" lg:pt-20 md:pt-14 pt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 md:gap-y-14 gap-y-10">
              <div>
                <div className=" bg-gray-100 flex justify-center items-center w-full h-72 ">
                  <img
                    src="https://i.ibb.co/dkQhCMq/pexels-melvin-buezo-2529148-2-removebg-preview-1.png"
                    alt="A Pair of Shoes"
                  />
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 mt-4">
                  Running Shoes
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-600 mt-2">
                  $730
                </p>
              </div>
              <div>
                <div className=" bg-gray-100 flex justify-center items-center w-full h-72">
                  <img
                    src="https://i.ibb.co/hZpVdd9/arno-senoner-HFE2-Ry-C76tw-unsplash-removebg-preview-1.png"
                    alt="A Pink handbag"
                  />
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 mt-4">
                  Floral Bag
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-600 mt-2">
                  $730
                </p>
              </div>
              <div>
                <div className=" bg-gray-100 flex justify-center items-center w-full h-72">
                  <img
                    src="https://i.ibb.co/0VVms28/pexels-anastasiya-lobanovskaya-4110341-removebg-preview-1.png"
                    alt="Perfume Bottle"
                  />
                </div>
                <p className=" font-normal text-xl leading-5 text-gray-800 mt-4">
                  Perfume
                </p>
                <p className=" font-semibold text-xl leading-5 text-gray-600 mt-2">
                  $730
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
