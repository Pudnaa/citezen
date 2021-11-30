import { useContext } from "react";
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

const BestSeller2 = () => {
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
  // console.log("BestSeller2 config", config);
  console.log("BestSeller2 datasrc", datasrc);
  // console.log("BestSeller2 otherattr", otherattr);
  // console.log("BestSeller2 positionConfig", positionConfig);
  return (
    <div className="2xl:container 2xl:mx-auto">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
              <div className="flex flex-col justify-center items-center">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName="text-3xl lg:text-4xl font-semibold text-gray-800"
                />
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-base leading-normal text-center text-gray-600 md:w-8/12 lg:w-5/12 mt-4 lg:mt-7"
                />
              </div>
              <div className="flex justify-center lg:space-x-8">
                <div className="lg:w-3/12 mt-24 hidden lg:block">
                  {item.items.map((item1: any, index: number) => {
                    //console.log(item1.description);
                    //console.log(
                    //  renderPositionType(item1, "position1", positionConfig)
                    //);
                    //console.log(
                    //  renderPositionType(item1, "position3", positionConfig)
                    //);
                    let length = item.items.length + 1;
                    if (Math.floor(length / 2) == index) {
                      return "";
                    }
                    return (
                      <div className="mt-24">
                        <div className="flex items-center space-x-2">
                          <div>
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2.25"
                                y="2.25"
                                width="15.5"
                                height="15.5"
                                stroke="#1F2937"
                                strokeWidth="0.5"
                              />
                              <rect width="16" height="16" fill="#1F2937" />
                            </svg>
                          </div>
                          <AtomTitle
                            item={renderPositionType(
                              item1,
                              "position1",
                              positionConfig
                            )}
                            customClassName="text-xl font-semibold text-gray-800"
                          />
                        </div>
                        <AtomText
                          item={renderPositionType(
                            item1,
                            "position3",
                            positionConfig
                          )}
                          customClassName="text-base leading-normal text-gray-600 mt-4"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="w-full lg:w-6/12 flex lg:items-center justify-center h-full mt-2 lg:mt-14">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="object-center object-cover w-full h-full"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                </div>
              </div>
              {/* <!--Content info For medium screens  --> */}

              <div
                aria-label="benefits"
                className="lg:hidden mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-10 md:gap-y-8"
              >
                {item.items.map((item1: any, index: number) => {
                  return (
                    <div>
                      <div className="flex items-center space-x-2">
                        <div>
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2.25"
                              y="2.25"
                              width="15.5"
                              height="15.5"
                              stroke="#1F2937"
                              strokeWidth="0.5"
                            />
                            <rect width="16" height="16" fill="#1F2937" />
                          </svg>
                        </div>
                        <AtomTitle
                          item={renderPositionType(
                            item1,
                            "position2",
                            positionConfig
                          )}
                          customClassName="text-xl font-semibold text-gray-800"
                        />
                      </div>
                      <AtomText
                        item={renderPositionType(
                          item1,
                          "position3",
                          positionConfig
                        )}
                        customClassName="text-base leading-normal text-gray-600 mt-4"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSeller2;
