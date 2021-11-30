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

const FeatureVI = () => {
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
  // console.log("FeatureVI config", config);
  // console.log("FeatureVI datasrc", datasrc);
  // console.log("FeatureVI otherattr", otherattr);
  // console.log("FeatureVI positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
      <div className="lg:flex items-center justify-between">
        <div className="lg:w-1/3">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-4xl font-semibold leading-9 text-gray-800"
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-base leading-6 mt-4 text-gray-600"
          />
          <button
            aria-label="view catalogue"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none text-gray-800 flex items-center hover:underline"
          >
            {renderPositionType(item, "position45", positionConfig)}
            <svg
              className="ml-2 mt-1"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33325 4H10.6666"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 6.66667L10.6667 4"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 1.33398L10.6667 4.00065"
                stroke="#1F2937"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="lg:w-7/12 lg:mt-0 mt-8">
          <div className="w-full h-full bg-red-200">
            <AtomImage
              item={renderPositionType(images[0], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
            <AtomImage
              item={renderPositionType(images[1], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(images[2], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureVI;
