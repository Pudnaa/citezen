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
export default function ProductCategory6() {
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
  // console.log("ProductCategory6 config", config);
  // console.log("ProductCategory6 datasrc", datasrc);
  // console.log("ProductCategory6 otherattr", otherattr);
  // console.log("ProductCategory6 positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className=" 2xl:container flex justify-center items-center w-full 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="w-80 md:w-auto grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
        <div className="relative group">
          <AtomImage
            item={renderPositionType(
              renderPositionType(item, "position31", positionConfig)[0],
              "position2",
              positionConfig
            )}
            customClassName="w-full"
            alt={renderPositionType(
              renderPositionType(item, "position31", positionConfig)[0],
              "position1",
              positionConfig
            )}
          />
          <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
          <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
            <AtomTitle
              item={renderPositionType(
                renderPositionType(item, "position31", positionConfig)[0],
                "position1",
                positionConfig
              )}
              customClassName="font-semibold text-2xl leading-6 text-white"
            />
          </div>
        </div>
        <div className=" lg:px-6 lg:py-0 md:py-16 md:px-24 py-16 px-6 flex flex-col justify-center items-center text-center bg-gray-100">
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="font-semibold lg:text-4xl text-3xl lg:leading-10 leading-9 text-gray-800 lg:w-full md:w-7/12 w-full"
          />
          <AtomText
            item={renderPositionType(item, "position3", positionConfig)}
            customClassName=" font-medium text-base leading-6 text-gray-600 mt-4 lg:w-full md:w-7/12 w-full"
          />
          <AtomButton
            item={renderPositionType(item, "position45", positionConfig)}
            color=""
            customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 text-white text-base leading-4 bg-gray-800 lg:px-10 py-4 lg:w-auto w-72 mt-16"
          />
        </div>
        <div className="relative group">
          <AtomImage
            item={renderPositionType(
              renderPositionType(item, "position31", positionConfig)[1],
              "position2",
              positionConfig
            )}
            customClassName="w-full"
            alt={renderPositionType(
              renderPositionType(item, "position31", positionConfig)[1],
              "position1",
              positionConfig
            )}
          />
          <div className="opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full" />
          <div className=" absolute top-0 left-0 w-full h-full flex justify-start items-end opacity-0 hover:opacity-100 p-8">
            <AtomTitle
              item={renderPositionType(
                renderPositionType(item, "position31", positionConfig)[1],
                "position1",
                positionConfig
              )}
              customClassName="font-semibold text-2xl leading-6 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
