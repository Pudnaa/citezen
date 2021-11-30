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
const FeatureVIII = () => {
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
  // console.log("FeatureVIII config", config);
  // console.log("FeatureVIII datasrc", datasrc);
  // console.log("FeatureVIII otherattr", otherattr);
  // console.log("FeatureVIII positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="py-12 lg:px-20 px-6">
      <div className="flex flex-col items-center">
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          customClassName="w-auto"
          alt={renderPositionType(item, "position1", positionConfig)}
        />
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          customClassName="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800 mt-24"
        />
        <AtomText
          item={renderPositionType(item, "position3", positionConfig)}
          customClassName="text-base leading-6 text-center mt-6 text-gray-600 xl:w-1/3 md:w-1/2"
        />
        <AtomButton
          item={renderPositionType(item, "position45", positionConfig)}
          color=""
          customClassName="sm:w-auto w-full mt-10 px-6 py-4 bg-gray-800 focus:outline-none text-base font-medium leading-4 text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default FeatureVIII;
