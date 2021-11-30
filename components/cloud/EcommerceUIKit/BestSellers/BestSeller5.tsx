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
const BestSeller5 = () => {
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
  // console.log("BestSeller5 config", config);
  // console.log("BestSeller5 datasrc", datasrc);
  // console.log("BestSeller5 otherattr", otherattr);
  // console.log("BestSeller5 positionConfig", positionConfig);
  return (
    <div className="container mx-auto">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="mx-4 md:mx-6 py-9 md:py-12 flex flex-col lg:flex-row justify-center items-strech lg:space-x-8">
              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <div className="py-2 md:py-24">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="w-60 lg:w-72 text-3xl lg:text-4xl font-semibold leading-10 text-gray-800"
                  />
                </div>
                {item.items.map((item1: any, index: number) => {
                  return (
                    <div className="bg-white shadow flex justify-center">
                      <AtomImage
                        item={renderPositionType(
                          item1,
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-64 md:h-auto lg:w-1/2 bg-white shadow flex justify-center mt-6 lg:mt-0">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="object-cover object-center h-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSeller5;
