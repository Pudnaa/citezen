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

const BestSeller1 = () => {
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
  // console.log("BestSeller1 config", config);
  console.log("BestSeller1 datasrc", datasrc);
  // console.log("BestSeller1 otherattr", otherattr);
  // console.log("BestSeller1 positionConfig", positionConfig);
  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <div>
          <AtomTitle
            item={Title.title}
            customClassName="text-3xl lg:text-4xl font-semibold text-gray-800 text-center"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className="bg-gray-50 p-8">
                  <div className="">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl text-gray-600"
                    />
                    <AtomText
                      item={
                        "$" +
                        renderPositionType(item, "position4", positionConfig)
                      }
                      customClassName="text-xl font-semibold text-gray-800 mt-2"
                    />
                  </div>
                  <div className="flex justify-center items-center mt-8 md:mt-24">
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                    />
                  </div>
                  <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                    {item.colors.map((item2: any, index: number) => {
                      return (
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="5"
                              cy="5"
                              r="4.75"
                              fill={item2}
                              stroke="#6B7280"
                              strokeWidth="0.5"
                            />
                          </svg>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BestSeller1;
