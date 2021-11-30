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

export default function ProductCategory2() {
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
  // console.log("ProductCategory2 config", config);
  // console.log("ProductCategory2 datasrc", datasrc);
  // console.log("ProductCategory2 otherattr", otherattr);
  // console.log("ProductCategory2 positionConfig", positionConfig);
  return (
    <div className="mx-auto container px-4 md:px-6 py-8 flex flex-col items-center justify-center">
      <p className="text-4xl font-semibold leading-9 text-gray-800 text-center pt-16">
        Filter by designers
      </p>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 lg:gap-x-8 mt-16 pb-24 2xl:w-5/6 w-11/12">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div className="hover:bg-white cursor-pointer hover:shadow w-full flex items-center border border-gray-600 sm:mt-6 mt-6 mr-0 border-opacity-20 mt-6">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="w-20 h-20"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
                <div className="pl-6">
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName="text-base font-semibold leading-4 text-gray-800"
                  />
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="text-sm leading-4 mt-2 text-gray-600"
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
