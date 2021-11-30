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

const FeatureVII = () => {
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
  // console.log("FeatureVII config", config);
  // console.log("FeatureVII datasrc", datasrc);
  // console.log("FeatureVII otherattr", otherattr);
  // console.log("FeatureVII positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="container mx-auto pt-9 pb-20 md:py-12 px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-strech justify-center">
        <div className="lg:w-1/2 flex flex-col md:flex-row items-strech justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col justify-center space-y-4 md:space-y-8">
            <AtomImage
              item={renderPositionType(images[0], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(images[1], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 md:space-y-8">
            <AtomImage
              item={renderPositionType(images[2], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
            <AtomImage
              item={renderPositionType(images[3], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position1", positionConfig)}
            />
          </div>
        </div>
        <div className="mt-5 sm:mt-8 lg:mt-0 lg:w-1/2 flex flex-col justify-center items-center">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800 text-center"
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName="text-base md:text-xl leading-7 text-center text-gray-600 mt-7 md:mt-4 lg:mt-5 xl:w-10/12 2xl:w-8/12"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureVII;
