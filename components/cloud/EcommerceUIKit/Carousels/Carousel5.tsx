import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import CloudBanner1 from "@cloud/Custom/Banner/CloudBanner1";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomSlider6,
} from "@components/common/Atom";

export default function Carousel5() {
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
  // console.log("Carousel5 config", config);
  // console.log("Carousel5 datasrc", datasrc);
  // console.log("Carousel5 otherattr", otherattr);

  return (
    <AtomSlider6>
      {datasrc.map((item: any, index: number) => (
        <div key={index}>
          <div className="w-52 h-32 md:w-72 md:h-44 lg:w-96 lg:h-52 mr-5">
            <img
              src={item.mainimage}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      ))}
    </AtomSlider6>
  );
}
