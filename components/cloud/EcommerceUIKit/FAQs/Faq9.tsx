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

const Faq9 = () => {
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
  //category-н тоогоор үүсгэнэ үү.Хэрэв 5 бол доорх шиг 5 state үүсгэнэ
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const list = [open, open2, open3, open4, open5];
  const setlist = [setOpen, setOpen2, setOpen3, setOpen4, setOpen5];

  if (isEmpty(datasrc)) return null;
  // console.log("Faq9 config", config);
  //console.log("Faq9 datasrc", datasrc);
  // console.log("Faq9 otherattr", otherattr);
  // console.log("Faq9 positionConfig", positionConfig);

  return (
    <div className=" 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ_s
      </h1>

      <div className=" lg:pt-12 md:pt-10 pt-8 flex md:flex-row flex-col lg:gap-8 md:gap-4 gap-12">
        <div className="lg:w-3/12 md:w-5/12 w-full flex gap-6 flex-col">
          <h3 className=" uppercase text-base leading-4 font-medium text-gray-600">
            categories
          </h3>
          <hr className=" w-full lg:my-2 my-1" />
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className="w-full ">
                  <div className="flex justify-between items-center w-full">
                    <div>
                      <AtomTitle
                        item={
                          renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          ) +
                          `(${
                            renderPositionType(
                              item,
                              "position31",
                              positionConfig
                            ).length
                          })`
                        }
                        customClassName={
                          "text-base leading-4 text-gray-800 uppercase cursor-pointer " +
                          (list[index] ? "font-semibold" : "font-normal")
                        }
                      />
                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => setlist[index](!list[index])}
                    >
                      <svg
                        className={
                          "transform " + (open ? "rotate-180" : "rotate-0")
                        }
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="menu"
                    className={
                      "mt-6 w-full " + (list[index] ? "block" : "hidden")
                    }
                  >
                    {renderPositionType(item, "position31", positionConfig).map(
                      (item1: any, index1: number) => {
                        return (
                          <AtomTitle
                            item={renderPositionType(
                              item1,
                              "position1",
                              positionConfig
                            )}
                            customClassName="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer"
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
          <hr className=" w-full lg:my-2 my-1" />
        </div>
        <div className="lg:w-9/12 md:w-7/12 w-full">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className={index !== 0 ? "mt-8" : ""}>
                  <AtomTitle
                    item={
                      renderPositionType(item, "position1", positionConfig) +
                      `(${
                        renderPositionType(item, "position31", positionConfig)
                          .length
                      })`
                    }
                    customClassName="uppercase lg:text-2xl text-xl lg:leading-6 leading-5 font-normal text-gray-900"
                  />
                  <hr className=" w-full mt-6" />
                  {renderPositionType(item, "position31", positionConfig).map(
                    (item1: any, index1: number) => {
                      return (
                        <div className={index === 0 ? "mt-6" : "mt-10"}>
                          <AtomTitle
                            item={renderPositionType(
                              item1,
                              "position1",
                              positionConfig
                            )}
                            customClassName="font-medium text-base leading-4 text-gray-800"
                          />
                          <div className=" py-4 lg:w-10/12 w-full">
                            {renderPositionType(
                              item1,
                              "position31",
                              positionConfig
                            ).map((item2: any, index2: number) => {
                              return index2 + 1 ===
                                renderPositionType(
                                  item,
                                  "position31",
                                  positionConfig
                                ).length ? (
                                <>
                                  <AtomText
                                    item={renderPositionType(
                                      item2,
                                      "position3",
                                      positionConfig
                                    )}
                                    customClassName="font-normal text-sm leading-5 text-gray-600"
                                  />
                                  <br />
                                  <br />
                                </>
                              ) : (
                                <>
                                  <AtomText
                                    item={renderPositionType(
                                      item2,
                                      "position3",
                                      positionConfig
                                    )}
                                    customClassName="font-normal text-sm leading-5 text-gray-600"
                                  />
                                </>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Faq9;
