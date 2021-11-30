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
export default function Social2() {
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
  // console.log("Social2 config", config);
  // console.log("Social2 datasrc", datasrc);
  // console.log("Social2 otherattr", otherattr);
  // console.log("Social2 positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  return (
    <div className="2xl:mx-auto 2xl:container flex justify-center items-center   md:py-12 py-9 xl:px-20 sm:px-6 px-4 ">
      <div className=" xl:w-auto md:flex hidden flex-col space-y-6 xl:space-y-0 xl:flex-row justify-center items-center">
        <div className="flex  justify-between w-full   items-center space-x-6 xl:space-x-8 ">
          <div className="flex justify-center items-center">
            <AtomImage
              item={renderPositionType(images[0], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position45", positionConfig)}
            />
          </div>
          <div className="flex flex-col justify-between  xl:mt-0  items-center space-y-6  xl:space-y-8">
            <div className="flex flex-col xl:flex-row justify-between h-full xl:justify-center items-center space-y-8 xl:space-y-0 xl:space-x-8">
              <div className="md:w-72 mx-1 md:h-64 lg:mt-4 xl:mt-0  flex flex-col justify-center items-center text-center">
                <p className=" text-3xl xl:text-4xl font-semibold  leading-7 xl:leading-9 text-center text-gray-800">
                  Our Instagram
                </p>
                <p className=" text-base leading-6 mt-3 text-center text-gray-600">
                  Follow us on instagram and tag us to get featured on our
                  timeline
                </p>
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
                >
                  @{renderPositionType(item, "position45", positionConfig)}
                </a>
              </div>
              <div className=" ">
                <AtomImage
                  item={renderPositionType(
                    images[1],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position45", positionConfig)}
                />
              </div>
            </div>
            <div className="hidden xl:flex flex-row justify-center  items-center space-x-6 xl:space-x-8">
              <div>
                <AtomImage
                  item={renderPositionType(
                    images[2],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position45", positionConfig)}
                />
              </div>
              <div>
                <AtomImage
                  item={renderPositionType(
                    images[3],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position45", positionConfig)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" xl:hidden flex flex-row justify-between   space-x-6 xl:space-x-8">
          <div>
            <AtomImage
              item={renderPositionType(images[2], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position45", positionConfig)}
            />
          </div>
          <div>
            <AtomImage
              item={renderPositionType(images[3], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position45", positionConfig)}
            />
          </div>
        </div>
      </div>
      {/* mobile responsive */}
      <div className="md:hidden flex justify-center items-center flex-col">
        <div className="w-80  flex flex-col justify-center items-center text-center">
          <p className=" text-3xl lg:text-4xl font-semibold  leading-7 lg:leading-9 text-center text-gray-800">
            Our Instagram
          </p>
          <p className=" text-base leading-6 mt-3 text-center text-gray-600">
            Follow us on instagram and tag us to get featured on our timeline
          </p>
          <a
            href="javascript:void(0)"
            className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800"
          >
            @ {renderPositionType(item, "position45", positionConfig)}
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center space-y-4">
          {images &&
            images.map((item1: any, index1: number) => {
              return (
                <AtomImage
                  key={index1}
                  item={renderPositionType(item1, "position2", positionConfig)}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position45", positionConfig)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
