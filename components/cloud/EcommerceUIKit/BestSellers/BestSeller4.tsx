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
const BestSeller4 = () => {
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
  // console.log("BestSeller4 config", config);
  // console.log("BestSeller4 datasrc", datasrc);
  // console.log("BestSeller4 otherattr", otherattr);
  // console.log("BestSeller4 positionConfig", positionConfig);
  return (
    <div className="2xl:container 2xl:mx-auto overflow-y-hidden">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return (
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-center text-3xl lg:text-4xl font-semibold text-gray-800"
              />
              <div
                role="list"
                aria-label="Best sellers"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-8 lg:mt-10 md:gap-x-6 gap-y-12 lg:gap-y-0 lg:gap-x-8"
              >
                {item.items.map((item1: any, index: number) => {
                  return (
                    <div role="listitem">
                      <div className="">
                        <AtomImage
                          item={renderPositionType(
                            item1,
                            "position2",
                            positionConfig
                          )}
                          customClassName="w-full h-full"
                          alt={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                        />
                        <AtomTitle
                          item={renderPositionType(
                            item1,
                            "position1",
                            positionConfig
                          )}
                          customClassName="text-xl font-medium text-gray-600 mt-4 md:mt-6 leading-6"
                        />
                        <AtomText
                          item={
                            "$" +
                            renderPositionType(
                              item1,
                              "position4",
                              positionConfig
                            )
                          }
                          customClassName="text-xl font-bold text-gray-800 mt-2 md:mt-4 leading-6"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BestSeller4;
