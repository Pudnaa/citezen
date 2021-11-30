import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import CloudBanner1 from "@cloud/Custom/Banner/CloudBanner1";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomSlider5,
} from "@components/common/Atom";

export default function Carousel2() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("Carousel2 config", config);
  // console.log("Carousel2 datasrc", datasrc);
  // console.log("Carousel2 otherattr", otherattr);

  return (
    <AtomSlider5 customClassName="container mx-auto">
      {datasrc.map((item: any, index: number) => (
        <div key={index}>
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
