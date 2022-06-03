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
  AtomLink,
} from "@components/common/Atom";
const CtaIV = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Cta4 config", config);
  // console.log("Cta4 readyDatasrc", readyDatasrc);
  // console.log("Cta4 widgetnemgooReady", widgetnemgooReady);
  // console.log("Cta4 positionConfig", positionConfig);
  return (
    <div className="mx-auto container py-12 px-4 md:px-6 2xl:px-0 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-6 lg:space-y-0">
        {readyDatasrc &&
          readyDatasrc.map((item: any, index: number) => {
            return (
              <div className="relative">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
                <div className="absolute bottom-4 sm:bottom-10 inset-x-4 sm:inset-x-10 p-6 bg-white flex flex-col justify-start items-start">
                  <div>
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-2xl font-semibold leading-6 text-gray-800"
                    />
                  </div>
                  <div className="mt-2">
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-6 sm:leading-4 text-gray-600"
                    />
                  </div>
                  <div className="mt-6">
                    <div className="flex justify-between items-center space-x-2">
                      <AtomLink
                        children={renderPositionType(
                          item,
                          "position45",
                          positionConfig
                        )}
                        item="/"
                        customClassName="text-base font-medium leading-none hover:underline text-gray-800"
                      />
                      <svg
                        className="fill-current"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.33337 8H12.6667"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 10.6667L12.6667 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 5.33333L12.6667 8"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default CtaIV;
