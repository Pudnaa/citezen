import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import CTA3 from "@cloud/MarketingUIKit/CTA/CTA3";
import {
  AtomTitle,
  AtomText,
  AtomImage,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomFade,
  AtomSlider4,
} from "@components/common/Atom";

export default function Carousel4() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("Carousel4 config", config);
  //console.log("Carousel4 readyDatasrc", readyDatasrc);
  // console.log("Carousel4 widgetnemgooReady", widgetnemgooReady);
  //https://dev.veritech.mn/storage/uploads/process/202111/file_1636690538811738_160870170544911.png moto land 200
  //https://dev.veritech.mn/storage/uploads/process/202111/file_1636690689452470_160870170544911.jpg jpg 1900px covers
  // https://dev.veritech.mn/storage/uploads/process/202111/file_1636946380156510_160870170544911.png 1300 px cover
  return (
    <div className="relative h-full">
      <AtomSlider4 arrowClass="hover:bg-moto" customClassName="w-full h-full">
        {readyDatasrc &&
          readyDatasrc.map((item: any, index: number) => (
            <div key={item?.id || index} className="h-full">
              <div
                className="relative w-screen text-black"
                style={{ height: "533px" }}
              >
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="w-full h-full object-center object-fill absolute block"
                />
                <div className="max-w-screen-xl h-full mx-auto text-xl relative px-5 flex flex-col justify-center rounded-md">
                  <div className="font-bold">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      link=""
                      customStyle={{}}
                      customClassName="text-7xl leading-9 text-white mb-6"
                      truncateRow={0}
                    />
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-6 text-white w-1/3 my-6"
                    />
                    {renderPositionType(item, "position45", positionConfig) && (
                      <AtomButton
                        item={renderPositionType(
                          item,
                          "position45",
                          positionConfig
                        )}
                        type="primary-white"
                        color=""
                        customClassName="text-sm bg-moto font-bold text-black rounded-2xl px-10 py-2 focus:outline-none hover:bg-white hover:text-moto"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </AtomSlider4>
      {widgetnemgooReady.type === "home" && (
        <div className="absolute w-full -bottom-12">
          <div className="mx-auto py-6 bg-black text-white max-w-screen-xl grid grid-cols-4 rounded-lg">
            <div className="border-r border-gray-600 flex justify-center">
              <div className="font-semibold">
                <p className="text-moto text-2xl flex justify-center">
                  100.000
                </p>
                <p className="text-lg">МОТО ГИШҮҮД</p>
              </div>
            </div>
            <div className="border-r border-gray-600 flex justify-center">
              <div className="font-semibold">
                <p className="text-moto text-2xl  flex justify-center">
                  300.000
                </p>

                <p className="text-lg mx-auto">НИЙТ АВТО ЗАР</p>
              </div>
            </div>
            <div className="border-r border-gray-600 flex justify-center">
              <div className="font-semibold">
                <p className="text-moto text-2xl flex justify-center">298</p>
                <p className="text-lg">СЭЛБЭГ ХЭРЭГСЭЛ</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="font-semibold">
                <p className="text-moto text-2xl flex justify-center">35.000</p>
                <p className="text-lg">ӨДРИЙН ХАНДАЛТ</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
/**
 <div className={`relative ${myWidth} ${myHeight}`}>
              <AtomImage
                item={renderPositionType(item, "position2", positionConfig)}
                customClassName={`object-center object-cover w-full h-full`}
                alt={renderPositionType(item, "position1", positionConfig)}
              />
              {fade && <AtomFade color="black" />}

              <div className="absolute w-full flex flex-col justify-center h-full inset-0 px-4 md:px-10 lg:px-24">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName={`text-xl md:text-3xl lg:text-4xl leading-5 md:leading-7 lg:leading-9 font-semibold text-white`}
                />

                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="mt-5 w-11/12 text-base md:text-xl lg:text-2xl leading-6 md:leading-5 font-normal lg:leading-6 text-white mt-2"
                />
              </div>
            </div>
 */
