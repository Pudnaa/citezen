import { useState, useContext } from "react";
import axios from "axios";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
  AtomLink,
} from "@components/common/Atom";
import CloudHeader1 from "@cloud/Custom/Header/Header1";

export default function WeeklyHeader() {
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
  const { asPath, pathname } = useRouter();
  const pageId = asPath.replace(/^\D+/g, "");
  return (
    <>
      <div className="w-full bg-moto h-2"></div>
      <div className="bg-black h-16">
        <div className="h-full flex justify-between max-w-screen-xl mx-auto px-5">
          <div className="h-full flex items-center">
            <AtomLink
              item="/page/1636611994257118"
              children={
                <img
                  src="https://dev.veritech.mn/storage/uploads/process/202111/file_1636614166587852_160870170544911.png"
                  alt="moto logo"
                />
              }
            />
          </div>
          <div className="flex text-white items-center">
            <div
              className={`${
                pageId === "1636611994257118" ? "border-b-4" : ""
              } border-moto h-full flex items-center px-4 font-semibold cursor-pointer`}
            >
              Бараа
            </div>
            <div
              className={`${
                pageId === "1636710669336311" ? "border-b-4" : ""
              } border-moto h-full flex items-center px-4 font-semibold cursor-pointer`}
            >
              <AtomLink item="/page/1636710669336311" children={"Нийтлэл"} />
            </div>
            <div
              className={`${
                pageId === "1636961914742568" ? "border-b-4" : ""
              } border-moto h-full flex items-center px-4 font-semibold cursor-pointer`}
            >
              <AtomLink item="/page/1639716777130484" children={"Каталог"} />
            </div>
            <div
              className={`${
                pageId === "1636710372338611" ? "border-b-4" : ""
              } border-moto h-full flex items-center px-4 font-semibold cursor-pointer`}
            >
              <AtomLink item="/page/1636710372338611" children={"Автозар"} />
            </div>
          </div>
          <div className="flex text-white items-center">
            <div>
              <div className="flex items-center">
                <i className="fas fa-cloud-sun text-lg w-8 text-moto"></i>
                <span className="font-bold text-xs">-8</span>
              </div>
              <div className="font-normal text-xs">Цаг агаар</div>
            </div>
            <div className="ml-8 mr-10">
              <div className="flex items-center">
                <i className="far fa-globe-africa text-lg w-8 text-moto"></i>
                <span className="font-bold text-xs">2850 | $</span>
              </div>
              <div className="font-normal text-xs">Вальютийн ханш</div>
            </div>
            <div className="rounded-3xl border border-moto text-moto px-5 py-2 cursor-pointer hover:bg-white ">
              Нэвтрэх
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
