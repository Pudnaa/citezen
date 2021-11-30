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

const FeatureXVI = () => {
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
  // console.log("FeatureXVI config", config);
  // console.log("FeatureXVI datasrc", datasrc);
  // console.log("FeatureXVI otherattr", otherattr);
  // console.log("FeatureXVI positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-center relative">
        <div className="xl:w-5/12 lg:w-1/2 relative z-1 lg:py-16 md:p-6 lg:px-10 p-4 border border-gray-200 lg:-mr-20">
          <div className="lg:w-10/12">
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800"
            />
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="mt-4 text-base leading-6 text-gray-600"
            />
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              color=""
              customClassName="w-full lg:w-auto mt-8 px-8 py-4 bg-gray-800 text-base font-medium leading-none text-center text-white focus:outline-none hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
            />
          </div>
        </div>
        <div className="lg:w-1/2 lg:mt-0 mt-7">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-auto"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureXVI;
