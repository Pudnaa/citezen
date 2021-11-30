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
import RenderAtom from "@components/common/Atom/RenderAtom";


const ProductDetailWeekly = () => {
  const {
    config,
    readyDatasrc,
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

  // console.log("ProductDetailWeekly config", config);
  // console.log("ProductDetailWeekly datasrc", datasrc);
  // console.log("ProductDetailWeekly otherattr", otherattr);
  // console.log("ProductDetailWeekly positionConfig", positionConfig);

  const item = readyDatasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  const colors = renderPositionType(item, "position32", positionConfig);

  return (
    <>
      <div className="flex justify-center items-center w-full ">
        <div className="md:w-10/12 lg:w-8/12 xl:w-full flex justify-start flex-col items-start py-16 px-4 md:px-6 xl:px-10 2xl:container 2xl:mx-auto " >
          <div className="flex jusitfy-start items-start flex-col  mb-5    ">
            {/* <p className="text-4xl font-semibold leading-9 text-gray-800">
              Product details
            </p> */}
            <p className="text-base leading-6 md:leading-4 text-gray-400">
              Нүүр  {"/"}{" "}
              {renderPositionType(item, "position41", positionConfig)} {"/"}{" "}
              {renderPositionType(item, "position1", positionConfig)}
            </p>
            
          </div>
          <hr className=" w-full mt-1" />
          
          <div className="mt-5 flex jusitfy-start  items-start xl:items-start flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8  ">
            <div className="w-full mt-5 flex jusitfy-start items-stretch flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 xl:space-x-8  ">
              <div className="flex justify-start items-start flex-row  ">
                <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-3 xl:grid-cols-1 justify-items-start gap-x-2 xl:gap-x-0 xl:gap-y-2 p-10">
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
            <div className="w-full flex justify-start items-start flex-col  gap-y-2 bg-white rounded-lg p-10 ">
            <RenderAtom
                 item={item?.position41}
                 defaultAtom="text"
                 customClassName="text-sm font-semibold leading-normal text-gray-700 "
              />
                <RenderAtom
                 item={item?.position20}
                 defaultAtom="text"
                customClassName="text-sm leading-6 text-gray-700 "
              />
             
                <hr className=" w-full mt-3" />
              <div className="flex w-full p-3 m-1 bg-gray-300 rounded ">
                    <p>Хямдрал дуусахад</p>
              </div>
              <RenderAtom
               item={item?.position1}
               defaultAtom="title"
                customClassName="text-xl lg:text-2xl font-bold leading-5 xl:leading-6 text-gray-900 "
              />
                 <RenderAtom
                  item={item?.position4} 
                  defaultAtom="currency" 
                  customClassName="text-2xl font-bold leading-normal"
                  customStyle={{ color: "#00A793" }}
                  
                />
               <hr className=" w-full mt-3" />
               <div className="flex justify-start space-x-5"> 
               <RenderAtom
                 item={item?.position5}
                 defaultAtom="text"
                 customClassName="text-sm leading-normal text-gray-700 "
              />
              {readyDatasrc &&
                  readyDatasrc.map((item: any, index: number) => {
                    return (
                      <div className="">
                        <RenderAtom
                           item={item?.position6 }
                           defaultAtom="text"
                           customClassName="text-sm leading-normal text-gray-700 border border-gray-500 rounded-full pl-3 pr-3"
                        />
                      </div>
                    );
                  })}
               </div>
               <hr className=" w-full mt-3" />
              <div className="mb-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-4 ">
              <AtomButton
                item="Сагсанд нэмэх"
                type="text"
                customClassName="rounded-full  "
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
                {readyDatasrc &&
                  readyDatasrc.map((item: any, index: number) => {
                    return (
                      <div className="mt-5 flex flex-1 ">
                        <RenderAtom
                           item={item?.position10 }
                           defaultAtom="text"
                           customClassName="leading-4 text-base tracking-tighter"
                        />
                         <RenderAtom
                           item={item?.position9}
                           defaultAtom="text"
                           customClassName="ml-5 leading-4 text-base tracking-tighter "
                        />
                          {/* <AtomImage
                    item={renderPositionType(item, "position11", positionConfig)}
                  /> */}
                      </div>
                    );
                  })}
              </div>
            </div>
            
          </div>
            <div className="mb-10 mt-5 w-full xl:w-5/6 flex jusitfy-start items-start  space-x-2  bg-white rounded-lg">
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
                 <AtomButton
                  item="Сэтгэгдэл"
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

export default ProductDetailWeekly;
