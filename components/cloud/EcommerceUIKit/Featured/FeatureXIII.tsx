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
  AtomLink,
} from "@components/common/Atom";

const FeatureXIII = () => {
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
  // console.log("FeatureXIII config", config);
  // console.log("FeatureXIII datasrc", datasrc);
  // console.log("FeatureXIII otherattr", otherattr);
  // console.log("FeatureXIII positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-stretch lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="lg:w-4/12 flex flex-col justify-center mr-6">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-3xl xl:text-4xl leading-9 text-gray-800"
          />
          <p className="mt-4 w-11/12 md:w-7/12 lg:w-10/12 text-base leading-normal text-gray-600">
            Start off the new year by hitting the ground, looking fabulous in
            denim.
          </p>
          <div className="mt-8">
            <AtomLink
              item="https://www.youtube.com/watch?v=aam9VvzFuI0"
              color=""
              children={renderPositionType(item, "position45", positionConfig)}
              customClassName="text-base hover:underline leading-4 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-black hover:text-gray-800"
            />
          </div>
        </div>
        <div className="lg:w-4/6 mt-8 lg:mt-0">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="w-auto object-center object-cover"
            alt={renderPositionType(item, "position1", positionConfig)}
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureXIII;
