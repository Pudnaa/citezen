import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { AtomSlider6 } from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";

export default function Carousel5() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);
  // console.log("Carousel5 config", config);
  // console.log("Carousel5 readyDatasrc", readyDatasrc);
  // console.log("Carousel5 widgetnemgooReady", widgetnemgooReady);

  return (
    <>
      <AtomSlider6>
        {readyDatasrc.map((item: any, index: number) => (
          <div key={item?.id || index}>
            <div
              className={`h-32 w-full md:h-44 lg:h-64 pl-${
                index === 0 ? "0" : "7"
              } shadow-xl rounded`}
            >
              <RenderAtom
                item={item?.position2}
                defaultAtom="image"
                customClassName="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </AtomSlider6>

      {/* <div className="flex justify-center items-center w-full mt-10 pb-20">
    <button className="bg-white text-red-500 font-semibold uppercase py-2 px-4 border-2 border-red-500 rounded-full center">
      Бүх эрхүүдийг харах
    </button>
    </div> */}
    </>
  );
}
