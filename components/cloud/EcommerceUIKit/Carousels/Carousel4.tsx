import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import CloudBanner1 from "@cloud/Custom/Banner/CloudBanner1";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
  AtomSlider4,
} from "@components/common/Atom";

export default function Carousel4() {
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
  // console.log("Carousel4 config", config);
  // console.log("Carousel4 datasrc", datasrc);
  // console.log("Carousel4 otherattr", otherattr);

  return (
    <AtomSlider4>
      {datasrc.map((item: any, index: number) => (
        <div key={index}>
          <div className="bg-yellow-200 w-screen h-96">
            <CloudBanner1 item={item} fade={true} />
          </div>
        </div>
      ))}
    </AtomSlider4>
  );
}
