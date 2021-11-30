import { Fragment, useContext, useState } from "react";
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

const Faq7 = () => {
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
  const [bgColor, setBgColor] = useState(
    renderPositionType(datasrc[0], "position1", positionConfig)
  );
  const [dropDown, setDropDown] = useState(false);
  //speclist array-n тоогоор зарлана уу 5 бол доорх шиг 5
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const list = [open, open2, open3, open4, open5];
  const setlist = [setOpen, setOpen2, setOpen3, setOpen4, setOpen5];

  if (isEmpty(datasrc)) return null;
  // console.log("Faq7 config", config);
  console.log("Faq7 datasrc", datasrc);
  // console.log("Faq7 otherattr", otherattr);
  // console.log("Faq7 positionConfig", positionConfig);

  const navColor = (value: any) => {
    setBgColor(value);
  };

  const dropDownMenu = () => setDropDown(!dropDown);

  return (
    <div className=" 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-12 px-4">
      <h1 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Have a Question?
      </h1>

      <div className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full h-14 border border-gray-300 md:mt-10 mt-8 flex justify-between items-center md:py-5 md:px-6 py-5 px-4">
        <input
          className="focus:outline-none outline-none border-none w-full bg-transparent font-normal text-lg leading-4 text-gray-600 placeholder-gray-600"
          type="text"
          placeholder="Search"
        />
        <svg
          className="cursor-pointer"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21L15 15"
            stroke="#4B5563"
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="block sm:hidden w-full mt-8">
        <div
          onClick={dropDownMenu}
          className="py-4 px-6 text-white bg-gray-800 flex justify-between items-center w-full"
        >
          <p
            id="textClicked"
            className="focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
          >
            {bgColor}
          </p>
          <svg
            id="ArrowSVG"
            className={"transform " + (dropDown ? "rotate-180" : "rotate-0")}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <ul
          id="list"
          className={
            "font-normal text-base leading-4 " + (dropDown ? "block" : "hidden")
          }
        >
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <li
                  onClick={() =>
                    navColor(
                      renderPositionType(item, "position1", positionConfig)
                    )
                  }
                  className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
                >
                  <AtomText
                    item={renderPositionType(item, "position1", positionConfig)}
                  />
                </li>
              );
            })}
        </ul>
      </div>

      <ul className="sm:flex flex-row lg:flex-wrap font-normal text-base leading-4 mt-8 ">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <li
                onClick={() =>
                  navColor(
                    renderPositionType(item, "position1", positionConfig)
                  )
                }
                className={
                  "py-5 lg:px-12 text-center sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " +
                  (bgColor ===
                  renderPositionType(item, "position1", positionConfig)
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600")
                }
              >
                <AtomText
                  item={renderPositionType(item, "position1", positionConfig)}
                />
              </li>
            );
          })}
      </ul>
      <div className=" xl:w-8/12 w-full mt-8">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div
                className={
                  bgColor ===
                  renderPositionType(item, "position1", positionConfig)
                    ? "lg:mt-12 md:mt-10 mt-8 block"
                    : "lg:mt-12 md:mt-10 mt-8 hidden"
                }
              >
                {renderPositionType(item, "position31", positionConfig).map(
                  (item1: any, index1: number) => {
                    return (
                      <>
                        <div className="w-full lg:px-4 ">
                          <div
                            id="mainHeading"
                            className="flex justify-between items-center w-full"
                          >
                            <div className="pr-4">
                              <AtomTitle
                                item={renderPositionType(
                                  item1,
                                  "position1",
                                  positionConfig
                                )}
                                customClassName="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800"
                              />
                            </div>
                            <button
                              aria-label="toggler"
                              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                              onClick={() => setlist[index1](!list[index1])}
                            >
                              <svg
                                className={
                                  "transform duration-100 " +
                                  (open ? "rotate-45" : "rotate-0")
                                }
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.0008 2.92893V17.0711"
                                  stroke="#1F2937"
                                  strokeWidth="1.66667"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M2.92969 10H17.0718"
                                  stroke="#1F2937"
                                  strokeWidth="1.66667"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                          <div
                            id="menu"
                            className={
                              list[index1]
                                ? "mt-6 w-full block"
                                : "mt-6 w-full hidden"
                            }
                          >
                            {renderPositionType(
                              item1,
                              "position31",
                              positionConfig
                            ).map((item2: any, index2: number) => {
                              return index1 + 1 !==
                                renderPositionType(
                                  item1,
                                  "position31",
                                  positionConfig
                                ).length ? (
                                <Fragment>
                                  <AtomText
                                    item={renderPositionType(
                                      item2,
                                      "position3",
                                      positionConfig
                                    )}
                                    customClassName="font-normal text-base leading-6 text-gray-600"
                                  />
                                  <br />
                                </Fragment>
                              ) : (
                                <AtomText
                                  item={renderPositionType(
                                    item2,
                                    "position3",
                                    positionConfig
                                  )}
                                  customClassName="font-normal text-base leading-6 text-gray-600"
                                />
                              );
                            })}
                          </div>
                        </div>

                        <hr className=" w-full my-8" />
                      </>
                    );
                  }
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Faq7;
