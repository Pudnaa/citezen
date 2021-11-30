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
const FeatureI = () => {
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
  // console.log("FeatureI config", config);
  // console.log("FeatureI datasrc", datasrc);
  // console.log("FeatureI otherattr", otherattr);
  // console.log("FeatureI positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-5/12">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="lg:text-4xl text-3xl font-semibold leading-10 md:leading-9 text-gray-800"
          />
        </div>
        <div className="lg:w-1/2 lg:ml-8 md:mt-10 mt-4">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-full"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureI;
