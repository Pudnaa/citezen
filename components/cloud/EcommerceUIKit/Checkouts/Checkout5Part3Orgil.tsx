import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";

export default function Checkout5Part3Orgil() {
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

  const item = readyDatasrc[0];
  console.log("item", item);
  console.log("item.position1", item.position1);

  return (
    <div className="flex justify-center items-center bg-white shadow-xl">
      <div className="flex flex-col justify-start items-start w-full p-6 ">
        <RenderAtom
          item={item.position1}
          defaultAtom="title"
          customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
        />

        <hr className=" w-full mt-1" />
        <div className="flex mt-7 flex-col items-end w-full space-y-6">
          <div className="flex justify-between w-full items-center">
            <RenderAtom
              item={item.position90}
              defaultAtom="text"
              customClassName="text-base font-medium leading-4 text-gray-600"
            />
            <RenderAtom
              item={item.position4}
              defaultAtom="currency"
              customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
            />
          </div>
          <div className="flex justify-between w-full items-center ">
            <RenderAtom
              item={item.position91}
              defaultAtom="text"
              customClassName="text-base font-medium leading-4 text-gray-600"
            />
            <RenderAtom
              item={item.position3}
              defaultAtom="currency"
              customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
            />
          </div>
          <hr className=" w-full mt-1" />
          <div className="flex justify-between w-full items-center">
            <RenderAtom
              item={item.position93}
              defaultAtom="text"
              customClassName="text-base font-semibold uppercase leading-4 text-gray-700"
            />
            <RenderAtom
              item={item.position92}
              defaultAtom="currency"
              customClassName="text-base md:text-base font-semibold leading-5 text-gray-600 mt-3"
            />
          </div>
          <div className=" mt-5 p-3 bg-yellow-100 rounded">
            <RenderAtom
              item={item.position94}
              defaultAtom="text"
              customClassName="text-xs text-gray-500"
            />
            <div className="flex items-center m-1 gap-1 ">
              <input
                className="bg-yellow-100 border-gray-300"
                type="checkbox"
              />
              <p className="text-sm text-gray-600">Зөвшөөрч байна</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full items-center mt-10">
          <button className="bg-red-500 text-white uppercase font-normal w-full p-3 border border-red-500 hover:bg-white hover:text-red-500 rounded-full center  ">
            Худалдаж авах
          </button>
        </div>
      </div>
    </div>
  );
}
