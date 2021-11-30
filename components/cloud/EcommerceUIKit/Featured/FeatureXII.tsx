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
const FeatureXII = () => {
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
  // console.log("FeatureXII config", config);
  // console.log("FeatureXII datasrc", datasrc);
  // console.log("FeatureXII otherattr", otherattr);
  // console.log("FeatureXII positionConfig", positionConfig);
  return (
    <div className="xl:container xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div className="hidden lg:flex justify-center items-center space-x-8">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div key={index} className="relative">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-auto h-96 object-center object-cover"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <div className="absolute z-10 bottom-0 ml-12 mb-12">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-4xl font-semibold text-white"
                    />
                    <AtomButton
                      item={renderPositionType(
                        item,
                        "position45",
                        positionConfig
                      )}
                      color=""
                      customClassName="border border-white py-4 px-9 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-black transition duration-150 text-base font-medium text-white mt-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50"
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col lg:hidden justify-center items-center space-y-6">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div key={index} className="relative">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-auto object-center object-cover h-96 md:h-auto"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <div className="absolute bottom-0 px-3 md:px-10 pb-6 md:pb-10 w-full">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl font-semibold text-white"
                    />
                    <AtomButton
                      item={renderPositionType(
                        item,
                        "position45",
                        positionConfig
                      )}
                      color=""
                      customClassName="border border-white py-4 px-8 bg-white bg-opacity-0 hover:bg-opacity-100 hover:text-black transition duration-150 text-center w-full lg:w-5/12 text-base font-medium text-white mt-4 md:mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:bg-gray-50"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FeatureXII;
