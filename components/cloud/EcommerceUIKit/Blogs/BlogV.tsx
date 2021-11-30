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
const BlogV = () => {
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
  // console.log("BlogV config", config);
  // console.log("BlogV datasrc", datasrc);
  // console.log("BlogV otherattr", otherattr);
  // console.log("BlogV positionConfig", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 px-4 py-9 flex justify-center items-center flex-col space-y-2 sm:space-y-10 lg:space-y-16">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center lg:text-4xl font-semibold leading-10 sm:leading-7 lg:leading-9 text-gray-800">
          Read About Hottest Fashion Trends
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:px-20 md:px-0 md:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-x-8 gap-x-6 gap-y-10 xl:gap-y-0">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div className="flex justify-center items-start flex-col space-y-6">
                <div className="w-full">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-full"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                </div>
                <div>
                  <div className="flex justify-start items-start text-left">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="text-xl md:text-2xl font-semibold leading-6 text-gray-800"
                    />
                  </div>
                  <div className="flex justify-start items-start text-left flex-col space-y-3 mt-4">
                    <AtomText
                      item={
                        "By: " +
                        renderPositionType(item, "position40", positionConfig)
                      }
                      customClassName="text-sm leading-none text-gray-800"
                    />
                    <AtomText
                      item={
                        "Date: " +
                        renderPositionType(item, "position5", positionConfig)
                      }
                      customClassName=""
                    />
                  </div>
                  <div className="flex justify-start items-start text-left mt-6">
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-6 text-gray-600"
                    />
                  </div>
                  <div className="mt-8">
                    <a
                      href="/"
                      className="text-base font-semibold leading-none hover:underline text-gray-800"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BlogV;
