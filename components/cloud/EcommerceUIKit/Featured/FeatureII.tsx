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
const FeatureII = () => {
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
  // console.log("FeatureII config", config);
  // console.log("FeatureII datasrc", datasrc);
  // console.log("FeatureII otherattr", otherattr);
  // console.log("FeatureII positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
        {renderPositionType(item, "position31", positionConfig).map(
          (item1: any, index1: number) => {
            return (
              <div key={index1} className="flex justify-center">
                <AtomImage
                  item={renderPositionType(item1, "position2", positionConfig)}
                  customClassName="w-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
              </div>
            );
          }
        )}
      </div>
      <div className="flex flex-col md:pt-16 pt-10 items-center justify-center">
        <div className="w-full">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="lg:text-4xl text-2xl font-black text-center lg:leading-9 text-gray-800 lg:pb-7 pb-2"
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-sm leading-5 text-gray-800 pb-7 text-center md:w-6/12 w-10/12 mx-auto"
          />
          <div className="flex items-center justify-center">
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              color=""
              customClassName="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800 font-medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureII;
