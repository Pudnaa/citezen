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
const PageHeading4 = () => {
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
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("PageHeading4 config", config);
  // console.log("PageHeading4 datasrc", datasrc);
  // console.log("PageHeading4 otherattr", otherattr);
  // console.log("PageHeading4 positionConfig", positionConfig);

  return (
    <div className=" 2xl:container 2xl:mx-auto lg:px-20 py-12 md:px-6  px-4">
      <h1 className="lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-gray-800 font-semibold">
        Men_s Autumn-Winter Collection
      </h1>
      <p className=" font-normal text-base leading-6 text-gray-600 mt-4 ">
        We offer a huge colletion of premium clothing that are crafted with
        excellence for our adored customers
      </p>

      <div className=" flex justify-between mt-12">
        <div className=" ">
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex space-x-3 justify-start items-center"
          >
            <p className=" font-medium text-base leading-4 text-gray-800">
              Sort
            </p>
            <svg
              id="down"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={"transform " + (open ? "rotate-180" : "rotate-0")}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="block md:hidden relative w-32 shadow rounded mt-1  h-auto ">
            <ul
              className={
                "rounded absolute shadow w-32 mb-5 " +
                (open ? "block" : "hidden")
              }
            >
              <li
                tabIndex={0}
                className=" focus:outline-none focus:text-white focus:bg-gray-700 px-2 cursor-pointer py-1 hover:text-white hover:bg-gray-700 duration-100 text-sm"
              >
                Color
              </li>
              <li
                tabIndex={1}
                className=" focus:outline-none focus:text-white focus:bg-gray-700 px-2 cursor-pointer py-1 hover:text-white hover:bg-gray-700 duration-100 text-sm"
              >
                Size
              </li>
              <li
                tabIndex={2}
                className="focus:outline-none focus:text-white focus:bg-gray-700  px-2 cursor-pointer py-1 hover:text-white hover:bg-gray-700 duration-100 text-sm"
              >
                Category
              </li>
            </ul>
          </div>
        </div>

        <div className="md:flex space-x-16 hidden">
          <button
            onClick={() => setOpen2(!open2)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex space-x-3 justify-center items-center"
          >
            <p className=" font-medium text-base leading-4 text-gray-800">
              Color
            </p>
            <svg
              id="down1"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={"transform " + (open2 ? "rotate-180" : "rotate-0")}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => setOpen3(!open3)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex space-x-3 justify-center items-center"
          >
            <p className=" font-medium text-base leading-4 text-gray-800">
              Size
            </p>
            <svg
              id="down2"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={"transform " + (open3 ? "rotate-180" : "rotate-0")}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => setOpen4(!open4)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex space-x-3 justify-center items-center"
          >
            <p className=" font-medium text-base leading-4 text-gray-800">
              Category
            </p>
            <svg
              id="down3"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={"transform " + (open4 ? "rotate-180" : "rotate-0")}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="#4B5563"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 block md:hidden">
          <p className=" font-medium text-base leading-4 text-gray-800">
            Filter
          </p>
        </button>
      </div>
    </div>
  );
};

export default PageHeading4;
