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
  AtomImage,
} from "@components/common/Atom";
import WeeklyCard from "@cloud/Custom/Card/WeeklyCard";

export default function WeeklyGrid() {
  const {
    config,
    readyDatasrc,
    datasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;
  // console.log("ProductGrid4 config", config);
  // console.log("ProductGrid4 datasrc", datasrc);
  // console.log("ProductGrid4 widgetnemgoo,", widgetnemgoo,);
  //console.log("ProductGrid4 positionConfig", positionConfig);

  return (
    <>
      <div className="flex justify-center items-center w-full mt-5 p-10">
        <button className="bg-red-500 text-white uppercase font-normal py-2 px-4  rounded-full center">
          онцлох
        </button>
        <button className=" text-gray-800 uppercase font-normal py-2 px-4  rounded-full center">
          Эрэлттэй
        </button>
        <button className=" text-gray-800 uppercase font-normal py-2 px-4  rounded-full center">
          нэмэгдсэн
        </button>
        <button className=" text-gray-800 uppercase font-normal py-2 px-4  rounded-full center">
          хямдралтай
        </button>
        </div>
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-8 w-full`}
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between flex-col bg-white rounded-sm  relative animate-fade-in-down w-full"
            >
              <WeeklyCard item={item} />
            </div>
          );
        })}
        
      </div>
      <div className="flex justify-center items-center w-full mt-10 pb-20">
        <button className="bg-white text-red-500 font-semibold uppercase py-2 px-4 border-2 border-red-500 rounded-full center">
          Бүгдийг харах
        </button>
        </div>
    </>
  );
}
