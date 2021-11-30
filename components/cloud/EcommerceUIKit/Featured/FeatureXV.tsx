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
  AtomLink,
} from "@components/common/Atom";

const FeatureXV = () => {
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
  // console.log("FeatureXV config", config);
  // console.log("FeatureXV datasrc", datasrc);
  // console.log("FeatureXV otherattr", otherattr);
  // console.log("FeatureXV positionConfig", positionConfig);
  const item = datasrc[0];
  const list = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          customClassName="lg:text-4xl text-3xl font-semibold text-gray-800 text-center"
        />
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 lg:mt-16 md:mt-12 mt-8 items-center">
            {list &&
              list.map((item1: any, index1: number) => {
                return (
                  <div key={index1} className="relative flex flex-col">
                    <AtomImage
                      item={renderPositionType(
                        item1,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                      alt={renderPositionType(
                        item1,
                        "position1",
                        positionConfig
                      )}
                    />
                    <img
                      src="https://i.ibb.co/Tb5CKHn/Rectangle-49.png"
                      alt="opacity bg"
                      className="absolute w-full top-0"
                    />
                    <div className="absolute m-6 bottom-0 z-1">
                      <AtomText
                        item={renderPositionType(
                          item1,
                          "position3",
                          positionConfig
                        )}
                        customClassName="text-sm leading-none text-white"
                      />
                      <AtomTitle
                        item={renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}
                        customClassName="w-64 text-2xl font-semibold leading-8 mt-2 text-white"
                      />
                      <AtomLink
                        item="https://www.youtube.com/watch?v=aam9VvzFuI0"
                        color=""
                        children={renderPositionType(
                          item1,
                          "position45",
                          positionConfig
                        )}
                        customClassName="mt-4 text-base font-medium cursor-pointer leading-4 underline text-white"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureXV;
