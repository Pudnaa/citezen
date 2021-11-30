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

export default function Faq3() {
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
  if (isEmpty(datasrc)) return null;
  // console.log("Faq3 config", config);
  // console.log("Faq3 datasrc", datasrc);
  // console.log("Faq3 otherattr", otherattr);
  // console.log("Faq3 positionConfig", positionConfig);
  const [open, setOpen] = useState("");
  function click(e: any) {
    setOpen(e.currentTarget.id);
    if (open === e.currentTarget.id) {
      setOpen("");
    }
  }
  return (
    <div>
      <div className="2xl:mx-auto 2xl:container py-12 lg:px-20 md:px-6 px-4 ">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-9 md:leading-7 lg:leading-9 text-gray-800">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-6 text-center text-gray-600 w-full md:w-10/12">
              Here are few of the most frequently asked questions by our
              valueable customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:grid-cols-3 xl:grid-cols-6 justify-items-around gap-x-6 gap-y-6 xl:gap-y-0 xl:gap-x-8 mt-10">
            {datasrc &&
              datasrc.map((item: any, index: number) => {
                return (
                  <button
                    className="w-full focus:outline-none border focus:border-gray-800 border-transparent bg-gray-50 flex justify-center items-center flex-col text-center py-10 px-12 space-y-6"
                    id={"menu" + index}
                    onClick={click}
                  >
                    {/* position49-с утгыг үүсгэн өөрт тохирсон icon-г бүтээнэ үү.*/}
                    {/* жишээ icon*/}
                    <svg
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.3333 50.6667C16.2789 50.6667 18.6667 48.2789 18.6667 45.3333C18.6667 42.3878 16.2789 40 13.3333 40C10.3878 40 8 42.3878 8 45.3333C8 48.2789 10.3878 50.6667 13.3333 50.6667Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M45.3333 50.6667C48.2789 50.6667 50.6667 48.2789 50.6667 45.3333C50.6667 42.3878 48.2789 40 45.3333 40C42.3878 40 40 42.3878 40 45.3333C40 48.2789 42.3878 50.6667 45.3333 50.6667Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M50.668 47.9997H56.0013V31.9997C56.0013 27.049 54.5965 22.301 52.0961 18.8003C49.5956 15.2997 46.2042 13.333 42.668 13.333H40.0013L44.0013 31.9997H56.0013M18.668 47.9997H40.0013H18.668Z"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32 47.9997V13.333H40"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 45.3333V32H32"
                        stroke="#4B5563"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-medium leading-5 text-gray-800"
                    />
                  </button>
                );
              })}
          </div>
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div
                  className={
                    open === "menu" + index
                      ? "mt-16 flex justify-start flex-col items-start w-full text-left space-y-8"
                      : "hidden"
                  }
                >
                  {renderPositionType(item, "position31", positionConfig).map(
                    (item1: any, index1: number) => {
                      return (
                        <Fragment>
                          <div className="flex justify-start items-start flex-col text-left w-full xl:w-8/12 ">
                            <AtomTitle
                              item={renderPositionType(
                                item1,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-xl font-medium leading-7 md:leading-5 text-left text-gray-800"
                            />
                            {renderPositionType(
                              item1,
                              "position31",
                              positionConfig
                            ).map((item2: any, index2: number) => {
                              return (
                                <>
                                  <AtomText
                                    item={renderPositionType(
                                      item2,
                                      "position3",
                                      positionConfig
                                    )}
                                    customClassName="text-base leading-6 text-gray-600"
                                  />
                                  <br />
                                  <br />
                                </>
                              );
                            })}
                          </div>
                          <hr className="border border-gray-100 w-full" />
                        </Fragment>
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
}
