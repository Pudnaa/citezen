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

export default function ProductCategory4() {
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
  // console.log("ProductCategory4 config", config);
  // console.log("ProductCategory4 datasrc", datasrc);
  // console.log("ProductCategory4 otherattr", otherattr);
  // console.log("ProductCategory4 positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="mx-auto container">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 md:px-16 lg:px-44 xl:px-4 space-y-6 xl:space-y-0 py-12 justify-center items-center">
        <div className="flex justify-start xl:items-start items-center flex-col xl:w-72">
          <div className="flex justify-start items-start">
            <AtomTitle
              item={renderPositionType(item, "position1", positionConfig)}
              customClassName="w-72 text-4xl font-semibold leading-10 text-gray-800"
            />
          </div>
          <div className="flex justify-start items-start mt-4">
            <AtomText
              item={renderPositionType(item, "position3", positionConfig)}
              customClassName="w-72 text-base leading-normal text-gray-600"
            />
          </div>
        </div>
        {renderPositionType(item, "position31", positionConfig).map(
          (item1: any, index1: number) => {
            return (
              <div className="group flex justify-start xl:items-start items-center flex-col">
                <div className="h-full relative">
                  <AtomImage
                    item={renderPositionType(
                      item1,
                      "position2",
                      positionConfig
                    )}
                    customClassName="w-auto"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <div className="absolute bottom-6 left-6 w-36 h-12">
                    <div className="w-36 h-12 border-transparent tranform duration-500 group-hover:border-white border">
                      <button className="-mt-1.5 -ml-1.5 w-36 h-12 bg-white">
                        <p className="text-base font-medium leading-none text-gray-800">
                          Ангилалыг харах
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-12 flex justify-start item-start h-12 tranform duration-500 group-hover:bg-white">
                    <AtomText
                      item={"0" + (index1 + 1)}
                      customClassName="ml-2 -mt-2 text-3xl leading-loose group-hover:text-gray-800 text-white tranform duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
