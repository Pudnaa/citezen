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

const FeatureX = () => {
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
  // console.log("FeatureX config", config);
  // console.log("FeatureX datasrc", datasrc);
  // console.log("FeatureX otherattr", otherattr);
  // console.log("FeatureX positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="xl:mx-auto xl:container">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 md:py-9 py-6">
            <AtomImage
              item={renderPositionType(item, "position2", positionConfig)}
              customClassName="h-full object-cover object-center w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12 lg:pr-24">
            <AtomText
              item={renderPositionType(item, "position40", positionConfig)}
              customClassName="text-sm leading-none text-gray-600 pb-2"
            />
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="md:text-3xl lg:text-4xl text-2xl font-semibold lg:leading-9 text-gray-800 lg:pb-6 md:pb-4 pb-2"
            />
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="text-sm leading-5 text-gray-600 md:pb-10 pb-8"
            />
            <div className="md:block flex items-center justify-center">
              <AtomButton
                item={renderPositionType(item, "position45", positionConfig)}
                color=""
                customClassName="lg:w-auto w-full border border-gray-800 hover:text-gray-50 hover:bg-gray-800 focus:outline-none lg:px-10 px-7 lg:py-4 py-3 text-sm leading-none text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureX;
