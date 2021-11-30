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
export default function BlogVI() {
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
  // console.log("BlogVI config", config);
  // console.log("BlogVI datasrc", datasrc);
  // console.log("BlogVI otherattr", otherattr);
  // console.log("BlogVI positionConfig", positionConfig);
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4  sm:block flex justify-center items-center flex-col sm:w-full xs:w-96 w-auto mx-auto">
        <div className=" text-center">
          <h2 className=" md:w-full w-10/12 mx-auto font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Weekly Fashion Journal
          </h2>
          <p className=" md:w-full w-10/12 mx-auto font-normal text-base md:leading-4 leading-6 text-gray-600 mt-4">
            Dive deep into the world of fashion with our latest blogs
          </p>
        </div>
        <div className=" mt-10 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
          {datasrc &&
            datasrc.map((item: any, index: number) => {
              return (
                <div className="w-full h-full">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    customClassName="w-full"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <div className=" bg-gray-800 text-white lg:p-8 py-8 px-4 text-center">
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position5",
                        positionConfig
                      )}
                      customClassName="font-noraml text-sm leading-3 text-white"
                    />
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="font-semibold lg:text-2xl text-xl lg:leading-8 leading-7 text-white mt-2 mx-auto w-full sm:w-64 lg:w-auto"
                    />
                    <button className=" focus:outline-none focus:ring-2 focus:ring-offset-2  border-2 border-white text-white bg-none hover:bg-white hover:text-gray-800 duration-150 text-base font-medium leading-4 mt-6 lg:w-auto w-full py-3 px-4">
                      Read Story
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
