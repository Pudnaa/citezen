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
import { render } from "nprogress";

const FeatureXI = () => {
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
  // console.log("FeatureXI config", config);
  // console.log("FeatureXI datasrc", datasrc);
  // console.log("FeatureXI otherattr", otherattr);
  // console.log("FeatureXI positionConfig", positionConfig);
  const item = datasrc[0];
  const list = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="container mx-auto py-9 md:py-12">
      <div className="mx-4">
        <div>
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-3xl lg:text-4xl font-semibold text-gray-800 text-center"
          />
        </div>
        <div className="flex flex-col space-y-8 md:space-y-10 lg:flex-row lg:space-y-0 lg:space-x-8 justify-center items-center mt-6 md:mt-8 lg:mt-10">
          {list &&
            list.map((item1: any, index1: number) => {
              return (
                <div key={index1}>
                  <AtomImage
                    item={renderPositionType(
                      item1,
                      "position2",
                      positionConfig
                    )}
                    customClassName="w-auto"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <AtomTitle
                    item={renderPositionType(
                      item1,
                      "position1",
                      positionConfig
                    )}
                    customClassName="text-xl font-medium text-gray-800 mt-4 md:mt-6"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureXI;
