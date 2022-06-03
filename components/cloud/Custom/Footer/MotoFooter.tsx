import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
} from "@components/common/Atom";
import Footer1 from "@cloud/Custom/Footer/Footer1";

export default function WeeklyFooter() {
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

  return (
    <>
      <div className="relative h-52 w-full">
        <div className="w-full h-full absolute bg-moto"></div>
        <img
          src="https://dev.veritech.mn/storage/uploads/process/202111/file_1636619706415724_160870170544911.png"
          alt=" car bg"
          className="absolute block h-full w-full object-center object-fill"
        />
        <div className="w-full h-full z-20 absolute px-5">
          <div className="max-w-screen-xl mx-auto h-full flex flex-col justify-evenly">
            <div className="font-bold text-2xl text-black">
              Та шинэ зарыг бүү алдаарай
            </div>
            <div className="flex justify-between pb-3">
              <div className="flex">
                <input
                  className="px-5 py-2 w-80 border-black border rounded-3xl bg-transparent placeholder-white text-xs"
                  type="text"
                  placeholder="Имейл..."
                />
                <button
                  className="ml-5 cursor-pointer px-10 py-2 font-bold text-sm rounded-2xl bg-black text-white
                hover:bg-white hover:text-moto"
                >
                  Илгээх
                </button>
              </div>
              <div className="flex items-center text-4xl">
                <i className="fab fa-facebook text-black cursor-pointer" />
                <i className="fab fa-google text-black ml-7 cursor-pointer" />
                <i className="fab fa-youtube text-black ml-7 cursor-pointer" />
                <i className="fab fa-twitter text-black ml-7 cursor-pointer" />
                <i className="fab fa-skype text-black ml-7 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-24 bg-black text-xs font-bold">
        <div className="max-w-screen-xl h-full mx-auto flex justify-between text-white px-5">
          <span className="my-auto">
            MOTO.MN <i className="far fa-copyright font-normal"></i> 2021
          </span>
          <div className="flex my-auto">
            <span className="cursor-pointer">Бидний тухай</span>
            <span className="mx-4 select-none">|</span>
            <span className="cursor-pointer">Үйлчилгээний нөхцөл</span>
            <span className="mx-4 select-none">|</span>
            <span className="cursor-pointer">Сурталчилгаа байршуулах</span>
          </div>
        </div>
      </div>
    </>
  );
}
