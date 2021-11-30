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

const FeatureIX = () => {
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
  // console.log("FeatureIX config", config);
  // console.log("FeatureIX datasrc", datasrc);
  // console.log("FeatureIX otherattr", otherattr);
  // console.log("FeatureIX positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="xl:container xl:mx-auto lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="flex flex-col lg:flex-row justify-center items-stretch">
        <div className="lg:w-5/12 flex flex-col justify-center">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-3xl lg:text-4xl font-semibold leading-10 text-gray-900 lg:w-11/12"
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="mt-4 lg:mt-6 lg:w-10/12 2xl:w-9/12 text-base leading-normal text-gray-600"
          />
          <div className="mt-8 lg:mt-10">
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              color=""
              customClassName="flex items-center justify-center py-4 px-10 border-2 border-gray-800 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white w-full lg:w-auto"
            />
          </div>
        </div>
        <div className="lg:w-7/12 mt-10 md:mt-12 lg:mt-0">
          <div className="relative">
            <AtomImage
              item={renderPositionType(images[0], "position2", positionConfig)}
              customClassName="object-center object-cover w-auto h-96 sm:h-full"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <div className="absolute mx-auto bottom-0 flex justify-center w-full -mb-36">
              <AtomImage
                item={renderPositionType(
                  images[1],
                  "position2",
                  positionConfig
                )}
                customClassName="w-72 sm:w-auto"
                alt={renderPositionType(item, "position1", positionConfig)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureIX;
