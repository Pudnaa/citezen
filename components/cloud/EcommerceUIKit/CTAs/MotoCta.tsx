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
  AtomImage,
  AtomLink,
} from "@components/common/Atom";

const MotoCta = () => {
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
  // console.log("MotoCta config", config);
  // console.log("MotoCta datasrc", datasrc);
  // console.log("MotoCta otherattr", otherattr);
  // console.log("MotoCta positionConfig", positionConfig);

  return (
    <div className="px-20">
      {datasrc &&
        datasrc.map((item: any, index: number) => {
          return index % 2 === 0 ? (
            <div key={index} className="flex">
              <div className="w-1/2">
                <div className="w-full">
                  <img
                    src={item.mainimage}
                    alt=""
                    width="530px"
                    height="302px"
                    className="rounded-xl"
                  />
                  <div className="flex mt-2 text-gray-500">
                    <div className="flex mr-7">
                      <i className="fas fa-calendar mr-2 text-moto"></i>
                      <p className="">3 өдрийн өмнө </p>
                    </div>
                    <div className="flex mr-5">
                      <i className="fas fa-share mr-2 text-moto"></i>
                      <p>970 shares</p>
                    </div>
                    <div className="flex">
                      <i className="fas fa-eye mr-2 text-gray-600"></i>
                      <p>1000</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 text-center py-10 px-14">
                <AtomLink
                  item="/page/1636710737778832"
                  children={
                    <p className="font-bold text-2xl">
                      "Land Cruiser 300" машины анхны зургууд ил болжээ
                    </p>
                  }
                />

                <p className="mt-6 text-xs font-normal">
                  Ойрын хугацаанд олон улсын мэдээллийн вэбсайтууд дээр Toyota
                  Land Cruiser 300-ийн анхны зургууд тарж эхэлсэн билээ. Төмөр
                  хүлэг сонирхо
                </p>
                <button className="px-20 py-3 font-bold text-sm bg-moto rounded-2xl mt-6">
                  Унших
                </button>
              </div>
            </div>
          ) : (
            <div key={index} className="flex">
              <div className="w-1/2 text-center py-10 px-14">
                <AtomLink
                  item="/page/1636710737778832"
                  children={
                    <p className="font-bold text-2xl">
                      "Land Cruiser 300" машины анхны зургууд ил болжээ
                    </p>
                  }
                />
                <p className="mt-6 text-xs font-normal">
                  Ойрын хугацаанд олон улсын мэдээллийн вэбсайтууд дээр Toyota
                  Land Cruiser 300-ийн анхны зургууд тарж эхэлсэн билээ. Төмөр
                  хүлэг сонирхо
                </p>
                <button className="px-20 py-3 font-bold text-sm bg-moto rounded-2xl mt-6">
                  Унших
                </button>
              </div>
              <div className="w-1/2">
                <div className="w-full">
                  <img
                    src={item.mainimage}
                    alt=""
                    width="530px"
                    height="302px"
                    className="rounded-xl"
                  />
                  <div className="flex mt-2 text-gray-500">
                    <div className="flex mr-7">
                      <i className="fas fa-calendar mr-2 text-moto"></i>
                      <p className="">3 өдрийн өмнө </p>
                    </div>
                    <div className="flex mr-5">
                      <i className="fas fa-share mr-2 text-moto"></i>
                      <p>970 shares</p>
                    </div>
                    <div className="flex">
                      <i className="fas fa-eye mr-2 text-gray-600"></i>
                      <p>1000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MotoCta;
