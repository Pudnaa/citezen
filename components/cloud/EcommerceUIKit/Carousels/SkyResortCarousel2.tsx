import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { AtomSlider5 } from "@components/common/Atom";

export default function SkyResortCarousel2() {
  const { readyDatasrc, widgetnemgooReady, widgetAllaround } =
    useContext(WidgetWrapperContext);
  // console.log("SkyResortCarousel2 readyDatasrc", readyDatasrc);
  // console.log("SkyResortCarousel2 widgetnemgooReady", widgetnemgooReady);

  return (
    <AtomSlider5 customClassName="container mx-auto">
      {readyDatasrc.map((item: any, index: number) => (
        <div key={item?.id || index}>
          <div className="flex flex-col items-center justify-center mr-5">
            <div className="w-32 h-32 rounded-full border border-gray-100 overflow-hidden shadow-md flex items-center justify-center bg-white">
              <i
                className={`fal fa-${item.icon} text-5xl text-${widgetAllaround.color}`}
              />
            </div>
            <div className="flex items-center justify-center text-center mt-4 uppercase font-semibold  text-gray-900">
              {item.title}
            </div>
          </div>
        </div>
      ))}
    </AtomSlider5>
  );
}
