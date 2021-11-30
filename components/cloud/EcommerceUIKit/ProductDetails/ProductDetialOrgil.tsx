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

const ProductDetialOrgil = () => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  // console.log("ProductDetail5 config", config);
  // console.log("ProductDetail5 datasrc", datasrc);
  // console.log("ProductDetail5 otherattr", otherattr);
  // console.log("ProductDetail5 positionConfig", positionConfig);

  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  const colors = renderPositionType(item, "position32", positionConfig);

  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <div className="md:w-10/12 lg:w-8/12 xl:w-full flex justify-start flex-col items-start py-16 px-4 md:px-6 xl:px-10 2xl:container 2xl:mx-auto " >
          <div className="flex jusitfy-start items-start flex-col space-y-3 mb-5    ">
            {/* <p className="text-4xl font-semibold leading-9 text-gray-800">
              Product details
            </p> */}
            <p className="text-base leading-6 md:leading-4 text-gray-400">
              Нүүр хуудас {"/"}{" "}
              {renderPositionType(item, "position41", positionConfig)} {"/"}{" "}
              {renderPositionType(item, "position1", positionConfig)}
            </p>
            
          </div>
          <hr className=" w-full mt-1" />
          
          <div className="mt-5 flex jusitfy-start  items-start xl:items-start flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8  ">
            <div className="w-full mt-5 flex jusitfy-start items-stretch flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 xl:space-x-8  ">
              <div className="flex justify-start items-start flex-row  ">
                <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-3 xl:grid-cols-1 justify-items-start gap-x-2 xl:gap-x-0 xl:gap-y-4 ">
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
            <div className="w-full flex justify-start items-start flex-col  gap-y-5 ">
            <AtomText
                item={renderPositionType(item, "position41", positionConfig)}
                customClassName="text-sm font-semibold leading-normal text-gray-700  mt-4"
              />
                <AtomText
                item={renderPositionType(item, "position20", positionConfig)}
                customClassName="text-sm leading-6 text-gray-700 "
              />
             
                <hr className=" w-full mt-3" />
              <AtomTitle
                item={renderPositionType(item, "position1", positionConfig)}
                customClassName="text-xl lg:text-2xl font-bold leading-5 xl:leading-6 text-gray-900 "
              />
                 <AtomCurrency
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName="text-2xl font-bold leading-normal"
                  customStyle={{ color: "#00A793" }}
                  type="mnt"
                />
               <hr className=" w-full mt-3" />
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
              <div className="mb-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-4 ">
              <AtomButton
                item="Сагс"
                type="primary"
                icon="fal fa-shopping-bag"
                color={widgetAllaround.color}
                customClassName="rounded-full"
              />
              <AtomButton
                item="Хүслийн жагсаалтад нэмэх"
                type="text"
                icon="far fa-heart"
                color={widgetAllaround.color}
                customClassName=""
              />
              </div>
              <hr className=" w-full mt-1" />
              <div className="mt-1">
                {datasrc &&
                  datasrc.map((item: any, index: number) => {
                    return (
                      <div className="mt-5 flex flex-1 ">
                        <AtomTitle
                          item={renderPositionType(
                            item,
                            "position10",
                            positionConfig
                          )
                        }
                          
                          customClassName="leading-4 text-base tracking-tighter"
                        />
                        <AtomText
                          item={
                            renderPositionType(
                              item,
                              "position9",
                              positionConfig
                            )
                          }
                          customClassName="ml-2 leading-4 text-base tracking-tighter "
                        />
                          {/* <AtomImage
                    item={renderPositionType(item, "position11", positionConfig)}
                  /> */}
                      </div>
                    );
                  })}
              </div>
              <hr className=" w-full mt-1" />
            </div>
            
          </div>
            <div className="mb-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-2 ">
            <AtomButton
                  item="Барааны дэлгэрэнгүй"
                  type="text"
                  icon=""
                  color={widgetAllaround.color}
                  customClassName="text-base uppercase font-semibold tracking-tighter focus:text-red-500"
                />
                <AtomButton
                  item="Хэрэглэх заавар"
                  type="text"
                  icon=""
                  color={widgetAllaround.color}
                  customClassName="text-base uppercase font-semibold tracking-tighter focus:text-red-500"
                />
                </div>
                <hr className=" w-full " />
                
        </div>
      </div>
    </>
  );
};

export default ProductDetialOrgil;
