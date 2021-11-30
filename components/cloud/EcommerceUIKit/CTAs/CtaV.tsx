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
} from "@components/common/Atom";

const CtaV = () => {
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
  // console.log("Cta5 config", config);
  // console.log("Cta5 datasrc", datasrc);
  // console.log("Cta5 otherattr", otherattr);
  // console.log("Cta5 positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-44 md:px-6 py-9 px-4 w-full flex justify-center items-center">
      <div
        style={{
          background:
            "linear-gradient(32.44deg, #ddd6fe 23.95%, rgba(147, 197, 253, 0.72) 113.45%)",
        }}
        className="lg:p-8 lg:pr-20 lg:pb-10 md:px-10 md:py-12 py-6 px-4 w-full flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="flex flex-col justify-start items-start lg:pl-5 lg:py-8">
          <div>
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="text-3xl lg:text-4xl font-medium leading-8 lg:leading-9 text-gray-800"
            />
          </div>
          <div className="mt-2">
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-base leading-6 lg:leading-4 text-gray-600"
            />
          </div>
          <div className="mt-10 w-full">
            <AtomButton
              item={renderPositionType(item, "position45", positionConfig)}
              customClassName="focus:ring-2 focus:ring-gray-500 rounded-sm focus:outline-none transition duration-150 w-full sm:w-2/5 lg:w-1/4 py-3 bg-white text-base font-medium leading-4 text-center text-gray-800"
              color=""
            />
          </div>
        </div>

        <div className="flex lg:justify-center justify-center md:justify-end items-center lg:p-0 mt-8 md:mt-0">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="md:w-9/12 lg:w-full"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
      </div>
    </div>
  );
};

export default CtaV;
