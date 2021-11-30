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
const BestSeller3 = () => {
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
  // console.log("BestSeller3 config", config);
  // console.log("BestSeller3 datasrc", datasrc);
  // console.log("BestSeller3 otherattr", otherattr);
  // console.log("BestSeller3 positionConfig", positionConfig);
  return (
    <div className="container mx-auto">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="py-12 mx-4 md:mx-6 flex flex-col-reverse lg:flex-row justify-center items-strech lg:space-x-20 2xl:space-x-36">
              <div className="w-full lg:w-1/2 mt-6 md:mt-8 lg:mt-0">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="object-center object-cover w-full h-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
              </div>
              <div className="flex flex-col justify-center lg:w-1/2">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName="text-4xl font-semibold text-gray-800"
                />
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-base leading-normal text-gray-600 mt-6 md:w-11/12 lg:w-full xl:w-8/12"
                />
                <div
                  role="list"
                  aria-label="benefits"
                  className="mt-8 md:mt-14 lg:mt-7 xl:mt-14 flex flex-col justify-center space-y-10 md:space-y-12"
                >
                  {item.items.map((item1: any, index: number) => {
                    return (
                      <div role="listitem">
                        <div className="flex items-center space-x-2">
                          <div>
                            <svg
                              width="18"
                              height="12"
                              viewBox="0 0 18 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                x="2.25"
                                y="2.25"
                                width="15.5"
                                height="9.5"
                                stroke="#1F2937"
                                strokeWidth="0.5"
                              />
                              <rect width="16" height="10" fill="#4B5563" />
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
                          customClassName="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 xl:w-6/12"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSeller3;
