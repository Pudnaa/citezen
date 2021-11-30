import { useContext, useState } from "react";
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

function ProductCategory1() {
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
  const [show, setShow] = useState(false);

  if (isEmpty(datasrc)) return null;
  // console.log("ProductCategory1 config", config);
  // console.log("ProductCategory1 datasrc", datasrc);
  // console.log("ProductCategory1 otherattr", otherattr);
  // console.log("ProductCategory1 positionConfig", positionConfig);
  return (
    <>
      <div className="bg-gray-50 py-8">
        <div className="mx-auto container 2xl:px-32">
          <p className="lg:text-5xl text-4xl  border-t border-l border-r border-gray-100 mb-14 text-center font-black leading-10 text-gray-800 pt-14">
            Shop by category
          </p>
          <div className="w-full flex md:flex-row flex-col items-center">
            {datasrc &&
              datasrc.map((item: any, index: number) => {
                return (
                  <div className="w-1/2 sm:px-0 px-4 border border-gray-100 md:py-14 py-8 flex items-center justify-center">
                    <AtomButton
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      color=""
                      customClassName="focus:outline-none text-3xl lg:text-4xl font-bold leading-9 cursor-pointer hover:underline focus:underline text-gray-800"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCategory1;
