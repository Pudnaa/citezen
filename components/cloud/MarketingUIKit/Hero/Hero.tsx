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

export default function Hero() {
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
  const [show, setShow] = useState(false);

  // console.log("Hero config", config);
  // console.log("Hero readyDatasrc", readyDatasrc);
  // console.log("Hero widgetnemgooReady", widgetnemgooReady);
  // console.log("Hero positionConfig", positionConfig);

  return (
    <div>
      <div className="pt-12 flex flex-row items-center justify-between container mx-auto px-5 lg:px-10">
        <div>
          <h1 className="text-xl font-black leading-tight text-gray-900">
            Strayhome
          </h1>
        </div>
        <div className="flex flex-row md:items-center md:space-x-20">
          <div className="hidden md:block">
            <ul className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16 md:items-center">
              <li>
                <a
                  className="text-base font-medium leading-none text-center text-gray-900 hover:underline"
                  href="javascript:void(0)"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium leading-none text-center text-gray-900 hover:underline"
                  href="javascript:void(0)"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-base font-medium leading-none text-center text-gray-900 hover:underline"
                  href="javascript:void(0)"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <a
              href="javascript:void(0)"
              className="text-base font-bold leading-none underline text-center text-gray-900 hover:text-indigo-700"
            >
              {" "}
              Let's work together{" "}
            </a>
          </div>

          <div className="flex items-center md:hidden relative">
            <button
              onClick={() => {
                setShow(!show);
              }}
              id="menu"
              className="text-gray-800 text-2xl focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
            >
              <svg
                aria-label="open menu"
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-menu-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            </button>
            {show && (
              <ul className="p-2 w-40 border-r bg-white absolute rounded z-20 top-10 right-0 shadow">
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-400 focus:text-indigo-700 focus:outline-none">
                  <div className="flex items-center">
                    <a href="javascript:void(0)" className="ml-2">
                      Home
                    </a>
                  </div>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                  <a href="javascript:void(0)" className="ml-2">
                    About
                  </a>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none bg-white">
                  <a href="javascript:void(0)" className="ml-2">
                    Projects
                  </a>
                </li>
                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 ml-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none bg-white">
                  <a
                    href="javascript:void(0)"
                    className="font-bold leading-none underline text-gray-900 hover:text-indigo-700"
                  >
                    {" "}
                    Let's work together{" "}
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="flex md:justify-center container mx-auto md:w-9/12 mt-16 md:mt-24 px-5 md:px-0">
        <p
          role="contentinfo"
          className="md:text-xl text-lg md:leading-loose leading-7 md:text-center text-gray-700"
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. It has a
          more-or-less normal distribution of letters, as opposed.
        </p>
      </div>
      <div className="sm:relative mt-16 sm:mt-14 md:mt-0">
        <div className="container sm:w-11/12 md:w-full lg:w-4/5 px-5 sm:px-0 mx-auto flex sm:justify-center sm:absolute sm:inset-0 sm:top-2 md:top-24 lg:top-20 xl:top-12 z-10">
          <h1
            role="heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-20 xl:leading-24 sm:text-center text-gray-900 sm:absolute"
          >
            It is hard to be hungry and homeless.
          </h1>
        </div>
        <img
          src="https://i.ibb.co/Sx644pm/pexels-eddie-galaxy-3628100-1-1.png"
          loading="lazy"
          className="sm:block hidden absolute inset-0 w-full mt-4 md:h-auto h-96 object-center  object-fit object-cover sm:mt-20 md:mt-48"
          alt="Four stray puppies"
          role="img"
        />
        <img
          src="https://i.ibb.co/Ld4TdrG/pexels-eddie-galaxy-3628100-2.png"
          alt="Four stray puppies"
          role="img"
          className="w-full h-full sm:hidden block mt-4"
        />
      </div>
    </div>
  );
}
