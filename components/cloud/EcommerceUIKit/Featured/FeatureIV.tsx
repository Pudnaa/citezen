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
const FeatureIV = () => {
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
  // console.log("FeatureIV config", config);
  // console.log("FeatureIV datasrc", datasrc);
  // console.log("FeatureIV otherattr", otherattr);
  // console.log("FeatureIV positionConfig", positionConfig);
  const item = datasrc[0];
  const list = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="flex lg:flex-row flex-col-reverse items-center relative">
        <div className="lg:w-1/2 w-full lg:mt-0 mt-6 flex flex-shrink-0">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-auto"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
        <div className="xl:-ml-64 lg:-ml-48 lg:w-7/12 relative table lg:h-96 lg:py-10 lg:px-8 md:px-8 px-3 py-6 border">
          <div className="relative z-10">
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="lg:text-4xl text-3xl font-semibold text-gray-900"
            />
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-base leading-6 text-gray-700 mt-4"
            />
            <div className="md:flex items-center justify-between lg:mt-10 md:mt-8 mt-6">
              {list &&
                list.map((item1: any, index1: number) => {
                  return (
                    <div
                      key={index1}
                      className={`md:w-2/5 ${
                        index1 !== 0 ? "md:mt-0 mt-4" : ""
                      }`}
                    >
                      <div className="flex items-center">
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
                            stroke="#0F172A"
                            strokeWidth="0.5"
                          />
                          <rect width="16" height="10" fill="#64748B" />
                        </svg>

                        <AtomTitle
                          item={renderPositionType(
                            item1,
                            "position1",
                            positionConfig
                          )}
                          customClassName="text-xl font-semibold leading-5 ml-2 text-gray-900"
                        />
                      </div>
                      <AtomText
                        item={renderPositionType(
                          item1,
                          "position3",
                          positionConfig
                        )}
                        customClassName="xl:w-72 lg:w-48 text-base leading-6 mt-4 text-gray-700"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="bg-blur absolute inset-0 h-full w-full lg:block hidden"></div>
        </div>
      </div>

      <style>
        {`.bg-blur {
                    background: linear-gradient(102.53deg, rgba(255, 255, 255, 0.4) 16.26%, rgba(255, 255, 255, 0.1) 78.34%);
                box-shadow: 0px 4px 6px -2px rgb(226 232 240 / 6%);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
            }`}
      </style>
    </div>
  );
};

export default FeatureIV;
