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
const Filter2 = () => {
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
  const [sort, setSort] = useState("Recommended");
  const [size, setSize] = useState("L");
  const [color, setColor] = useState("Black");
  const [bg, setBg] = useState("");
  const [sorted, setSorted] = useState("");
  const [colors, setColors] = useState({
    black: "black",
    blue: "blue",
    green: "green",
    pink: "pink",
    yellow: "yellow",
  });
  const { black, blue, green, pink, yellow } = colors;

  if (isEmpty(datasrc)) return null;
  // console.log("Filter2 config", config);
  // console.log("Filter2 datasrc", datasrc);
  // console.log("Filter2 otherattr", otherattr);
  // console.log("Filter2 positionConfig", positionConfig);

  const inputChangleHandler = (e: any) => {
    setColors({ ...colors, [e.target.name]: e.target.value });
  };

  const clearAll = () => {
    setColor("");
    setBg("");
    setSize("L");
    setSorted("");
    setSort("recommended");
  };

  const getSort = (e: any) => {
    setSort(e.target.name);
    console.log(sort);
    setSorted(e.target.value);
  };

  const getSize = (e: any) => {
    setBg(e.target.textContent);
    setSize(e.target.textContent);
  };

  const getColor = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <div className=" flex">
      <div className="lg:w-6/12 xl:w-7/12 md:w-3/12 w-0"></div>
      <div className=" lg:w-6/12 xl:w-5/12 md:w-9/12 w-full bg-gray-50 h-auto py-10 pb-96 ">
        <div className=" flex justify-between lg:pl-10 lg:pr-20 md:p-6 p-4">
          <h2 className=" text-xl leading-5 font-semibold text-gray-900 cursor-pointer">
            3 Filters Selected
          </h2>
          <div className=" flex justify-center items-center cursor-pointer">
            <p
              onClick={clearAll}
              className=" text-base font-medium leading-4 text-gray-600 underline mr-6 "
            >
              Clear all
            </p>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1L1 13"
                stroke="#1F2937"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 1L13 13"
                stroke="#1F2937"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <hr className=" bg-gray-200 w-full my-10" />

        {datasrc &&
          datasrc.map((item: any, index: number) => {
            const t = renderPositionType(item, "position1", positionConfig);
            const list = renderPositionType(item, "position31", positionConfig);
            if (t === "Sort") {
              return (
                <div key={index}>
                  <div className=" lg:pl-10 lg:pr-20 md:p-6 p-4">
                    <div className=" flex justify-between">
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        customClassName="text-xl leading-5 font-medium text-gray-800"
                      />
                      <div className=" flex justify-center items-center">
                        <p
                          id="sortText"
                          className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        >
                          {sort}
                        </p>
                        <svg
                          className=" cursor-pointer"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 7.5L10 12.5L5 7.5"
                            stroke="#4B5563"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-col mt-6 space-y-6 md:space-y-6">
                      {list &&
                        list.map((item1: any, index1: number) => {
                          return (
                            <div
                              key={index1}
                              className="flex items-center space-x-4 "
                            >
                              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                                <input
                                  aria-labelledby={renderPositionType(
                                    item1,
                                    "position1",
                                    positionConfig
                                  )}
                                  type="radio"
                                  onClick={getSort}
                                  name={renderPositionType(
                                    item1,
                                    "position1",
                                    positionConfig
                                  )}
                                  value={renderPositionType(
                                    item,
                                    "position1",
                                    positionConfig
                                  )}
                                  onChange={(e) => e.target.value}
                                  checked={
                                    sorted ===
                                    renderPositionType(
                                      item1,
                                      "position1",
                                      positionConfig
                                    )
                                      ? true
                                      : false
                                  }
                                  className="checkbox appearance-none focus:opacity-100  focus:border-gray-400  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                                />
                                <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
                              </div>
                              <label
                                id={renderPositionType(
                                  item1,
                                  "position1",
                                  positionConfig
                                )}
                                className="text-base leading-4 text-gray-600"
                              >
                                {renderPositionType(
                                  item1,
                                  "position1",
                                  positionConfig
                                )}
                              </label>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <hr className="bg-gray-200 w-full my-10" />
                </div>
              );
            }
            if (t === "Size" || t === "Хэмжээ") {
              return (
                <>
                  <div className=" lg:pl-10 lg:pr-20 md:p-6 p-4">
                    <div className=" flex justify-between">
                      <p className=" text-xl leading-5 font-medium text-gray-800">
                        Size
                      </p>
                      <div className=" flex justify-center items-center">
                        <p
                          id="sizetxt"
                          className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        >
                          {size}
                        </p>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 7.5L10 12.5L5 7.5"
                            stroke="#4B5563"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div
                      id="sizes"
                      className=" grid lg:grid-cols-8 md:grid-cols-7 sm:grid-cols-5 grid-cols-4  mt-6 gap-4"
                    >
                      <div
                        id="S"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "S"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        S
                      </div>
                      <div
                        id="M"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "M"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        M
                      </div>
                      <div
                        id="L"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "L"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        L
                      </div>
                      <div
                        id="01"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "01"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        01
                      </div>
                      <div
                        id="02"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "02"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        02
                      </div>
                      <div
                        id="04"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "04"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        04
                      </div>
                      <div
                        id="08"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "08"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        08
                      </div>
                      <div
                        id="14"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "14"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        14
                      </div>
                      <div
                        id="10"
                        onClick={getSize}
                        className={
                          "cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "10"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        10
                      </div>
                      <div
                        id="12"
                        onClick={getSize}
                        className={
                          " cursor-pointer w-12 h-12 rounded-full  border-2 border-gray-600 flex justify-center items-center text-lg leading-5 font-normal " +
                          (bg === "12"
                            ? "bg-gray-800 text-white"
                            : "bg-white text-gray-600")
                        }
                      >
                        12
                      </div>
                    </div>
                  </div>

                  <hr className="bg-gray-200 w-full my-10" />
                </>
              );
            }
            if (t === "Color" || t === "Өнгө") {
              return (
                <>
                  <div className=" lg:pl-10 lg:pr-20 md:p-6 p-4">
                    <div className=" flex justify-between">
                      <p className=" text-xl leading-5 font-medium text-gray-800">
                        Color
                      </p>
                      <div className=" flex justify-center items-center">
                        <p
                          id="colortxt"
                          className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                        >
                          {color}
                        </p>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 7.5L10 12.5L5 7.5"
                            stroke="#4B5563"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div>
                      <div className=" mt-6">
                        <input
                          onClick={getColor}
                          className="w-6 h-6 mr-6"
                          type="checkbox"
                          id="Black"
                          name="black"
                          value={black}
                          checked={color === "black" ? true : false}
                          onChange={inputChangleHandler}
                        />
                        <div className=" inline-block">
                          <div className=" flex space-x-6 justify-center items-center">
                            <svg
                              width="49"
                              height="24"
                              viewBox="0 0 49 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="12" fill="#E5E7EB" />
                              <circle cx="24" cy="12" r="12" fill="#4B5563" />
                              <circle cx="37" cy="12" r="12" fill="black" />
                            </svg>
                            <label
                              className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                              htmlFor="Black"
                            >
                              Black
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                        <input
                          onClick={getColor}
                          className="w-6 h-6 mr-6"
                          type="checkbox"
                          id="Blue"
                          name="blue"
                          value={blue}
                          checked={color === "blue" ? true : false}
                          onChange={inputChangleHandler}
                        />
                        <div className=" inline-block">
                          <div className=" flex space-x-6 justify-center items-center">
                            <svg
                              width="49"
                              height="24"
                              viewBox="0 0 49 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="12" fill="#A7F3D0" />
                              <circle cx="24" cy="12" r="12" fill="#059669" />
                              <circle cx="37" cy="12" r="12" fill="#064E3B" />
                            </svg>
                            <label
                              className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                              htmlFor="Blue"
                            >
                              Blue
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                        <input
                          onClick={getColor}
                          className="w-6 h-6 mr-6"
                          type="checkbox"
                          id="Green"
                          name="green"
                          value={green}
                          checked={color === "green" ? true : false}
                          onChange={inputChangleHandler}
                        />
                        <div className=" inline-block">
                          <div className=" flex space-x-6 justify-center items-center">
                            <svg
                              width="49"
                              height="24"
                              viewBox="0 0 49 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="12" fill="#A7F3D0" />
                              <circle cx="24" cy="12" r="12" fill="#059669" />
                              <circle cx="37" cy="12" r="12" fill="#064E3B" />
                            </svg>
                            <label
                              className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                              htmlFor="Green"
                            >
                              Green
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                        <input
                          onClick={getColor}
                          className="w-6 h-6 mr-6"
                          type="checkbox"
                          id="Pink"
                          name="pink"
                          value={pink}
                          checked={color === "pink" ? true : false}
                          onChange={inputChangleHandler}
                        />
                        <div className="inline-block">
                          <div className=" flex space-x-6 justify-center items-center">
                            <svg
                              width="49"
                              height="24"
                              viewBox="0 0 49 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="12" fill="#FBCFE8" />
                              <circle cx="24" cy="12" r="12" fill="#DB2777" />
                              <circle cx="37" cy="12" r="12" fill="#831843" />
                            </svg>
                            <label
                              className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                              htmlFor="Pink"
                            >
                              Pink
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className=" mt-6">
                        <input
                          onClick={getColor}
                          className="w-6 h-6 mr-6"
                          type="checkbox"
                          id="Yellow"
                          name="yellow"
                          value={yellow}
                          checked={color === "yellow" ? true : false}
                          onChange={inputChangleHandler}
                        />
                        <div className=" inline-block">
                          <div className=" flex space-x-6 justify-center items-center">
                            <svg
                              width="49"
                              height="24"
                              viewBox="0 0 49 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle cx="12" cy="12" r="12" fill="#FDE68A" />
                              <circle cx="24" cy="12" r="12" fill="#D97706" />
                              <circle cx="37" cy="12" r="12" fill="#78350F" />
                            </svg>
                            <label
                              className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                              htmlFor="Yellow"
                            >
                              Yellow
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
            return (
              <>
                <hr className="bg-gray-200 w-full my-10" />
              </>
            );
          })}
      </div>
      <style>
        {`.checkbox:checked + .check-icon {
                display: flex;
			}`}
      </style>
    </div>
  );
};

export default Filter2;
