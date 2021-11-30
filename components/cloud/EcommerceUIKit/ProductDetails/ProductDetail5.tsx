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

const ProductDetail5 = () => {
  const {
    config,
    datasrc,
    readyDatasrc,
    otherattr,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  //console.log("ProductDetail5 config", config);
  // console.log("ProductDetail5 readyDatasrc", readyDatasrc);
  // console.log("ProductDetail5 widgetnemgoo", widgetnemgoo);

  const item = readyDatasrc[0];
  // console.log("ProductDetail5 ~ item", item);
  const images = renderPositionType(item, "position31", positionConfig);
  const colors = renderPositionType(item, "position32", positionConfig);

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="md:w-10/12 lg:w-8/12 xl:w-full flex justify-start flex-col items-start py-16 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex jusitfy-start items-start flex-col space-y-3">
            <p className="text-4xl font-semibold leading-9 text-gray-800">
              Product details
            </p>
            <p className="text-base leading-6 md:leading-4 text-gray-600">
              Home {">"}{" "}
              {renderPositionType(item, "position41", positionConfig)} {">"}{" "}
              {renderPositionType(item, "position40", positionConfig)} {">"}{" "}
              {renderPositionType(item, "position1", positionConfig)}
            </p>
          </div>
          <div className="mt-5 flex jusitfy-start  items-start xl:items-center flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8">
            <div className="w-full mt-5 flex jusitfy-start items-stretch flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 xl:space-x-8">
              <div className="flex justify-start items-start flex-row ">
                <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-3 xl:grid-cols-1 justify-items-start gap-x-2 xl:gap-x-0 xl:gap-y-4">
                  <AtomImage
                    item={renderPositionType(item, "position2", positionConfig)}
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />

                  {images &&
                    images.map((itemImage: any, indexImage: number) => {
                      return indexImage >= 3 ? (
                        ""
                      ) : (
                        <AtomImage
                          key={indexImage}
                          item={renderPositionType(
                            itemImage,
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
                      );
                    })}
                </div>
              </div>
              <div>
                {/* <AtomImage
                  item={renderPositionType(
                    images[3],
                    "position2",
                    positionConfig
                  )}
                  customClassName="w-auto"
                  alt={renderPositionType(item, "position1", positionConfig)}
                /> */}
              </div>
            </div>
            <div className="w-full xl:w-7/12 flex justify-start items-start flex-col">
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-xl lg:text-2xl font-semibold leading-5 xl:leading-6 text-gray-800"
              />
              <AtomCurrency
                type="mnt"
                item={renderPositionType(item, "position4", positionConfig)}
                customClassName="text-lg md:text-xl font-medium leading-5 text-gray-600 mt-3"
              />
              <AtomText
                item={renderPositionType(item, "position3", positionConfig)}
                customClassName="text-base leading-normal text-gray-600 mt-5"
              />
              <p className="text-base font-medium leading-4 text-gray-600 mt-6">
                Colors
              </p>
              <div className="flex justify-start items-start space-x-3 mt-4 ">
                {colors &&
                  colors.map((item1: any, index1: number) => {
                    return (
                      <button
                        key={index1}
                        aria-label={renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}
                        className={`focus:ring-1 focus:ring-offset-2 focus;ring-gray-800 p-3  bg-${renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}-600`}
                      ></button>
                    );
                  })}
              </div>
              <div className="mt-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-4 ">
                <button className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-4 md:px-8 bg-gray-800 text-center text-white border border-gray-800 ">
                  Add to cart
                </button>
                <button className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-300 text-base font-medium leading-4 bg-white border border-gray-800  md:px-8 text-center text-gray-800">
                  Add to wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail5;
