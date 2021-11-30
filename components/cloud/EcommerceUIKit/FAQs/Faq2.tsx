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

const Faq2 = () => {
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
  const [open, setOpen] = useState("");

  if (isEmpty(datasrc)) return null;
  // console.log("Faq2 config", config);
  // console.log("Faq2 datasrc", datasrc);
  // console.log("Faq2 otherattr", otherattr);
  // console.log("Faq2 positionConfig", positionConfig);

  function click(e: any) {
    setOpen(e.currentTarget.id);
    if (open === e.currentTarget.id) {
      setOpen("");
    }
  }
  var inc = 1;

  return (
    <div className="2xl:container 2xl:mx-auto py-12 lg:px-20 md:px-6 px-4 flex justify-center items-center flex-col space-y-20">
      <div className="flex justify-center items-center flex-col text-center space-y-4">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="w-full md:w-5/6 2xl:w-9/12 text-base leading-6 text-center text-gray-600">
          Here are few of the most frequently asked questions by our valueable
          customers
        </p>
      </div>

      <div className="flex flex-col md:flex-row w-full  justify-start items-start md:space-x-8 lg:space-x-0">
        <div className="hidden w-2/5  sm:pr-10 lg:pr-0 2xl:w-5/12 text-left  md:flex flex-col justify-start items-start space-y-8">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <AtomButton
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName="text-lg font-medium text-left  leading-6 lg:leading-4 hover:underline focus:text-gray-500 focus:outline-none text-gray-800"
                  color=""
                />
              );
            })}
        </div>

        <div className="mt-16 md:mt-0 flex w-full 2xl:w-5/12 justify-start items-start flex-col space-y-20">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className="w-full flex justfiy-start items-start flex-col">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="text-xl font-medium leading-5 text-gray-600 uppercase"
                  />
                  <div className="mt-8 w-full flex flex-col justfiy-start items-start space-y-7">
                    {renderPositionType(item, "position31", positionConfig).map(
                      (item1: any, index1: number) => {
                        inc++;
                        return (
                          <div className="w-full ">
                            <div className="flex justify-between items-center w-full">
                              <div>
                                <AtomTitle
                                  item={renderPositionType(
                                    item1,
                                    "position1",
                                    positionConfig
                                  )}
                                  customClassName="text-xl font-medium leading-7 md:leading-5 text-gray-800"
                                />
                              </div>
                              <button id={"menu" + inc} onClick={click}>
                                <svg
                                  className={
                                    "transform " +
                                    (open === "menu" + inc
                                      ? "rotate-180"
                                      : "rotate-0")
                                  }
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M4 10L8 6L12 10"
                                    stroke="#1F2937"
                                    strokeWidth="1.25"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </button>
                            </div>
                            <div
                              className={
                                open === "menu" + inc ? "mt-6 w-full" : "hidden"
                              }
                            >
                              <AtomText
                                item={renderPositionType(
                                  item1,
                                  "position3",
                                  positionConfig
                                )}
                                customClassName="text-base leading-6 text-gray-600"
                              />
                              <br />
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Faq2;
