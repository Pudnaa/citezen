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
const FeatureV = () => {
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
  // console.log("FeatureV config", config);
  // console.log("FeatureV datasrc", datasrc);
  // console.log("FeatureV otherattr", otherattr);
  // console.log("FeatureV positionConfig", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="text-4xl font-semibold leading-9 text-center text-gray-900">
          Featured
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 gap-x-6 gap-y-36 mt-40">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="lg:w-72 h-56 bg-white relative shadow rounded flex flex-col items-center"
                >
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-36 h-56 absolute -mt-28"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <AtomCurrency
                    type="mnt"
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="text-3xl font-bold text-gray-900 mt-36"
                  />
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="text-xl leading-5 mt-2 text-gray-700"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureV;
