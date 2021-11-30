import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import CloudBanner1 from "@cloud/Custom/Banner/CloudBanner1";
import { AtomSlider4 } from "@components/common/Atom";

export default function Carousel4() {
  const { readyDatasrc, widgetnemgoo } = useContext(WidgetWrapperContext);
  // console.log("Carousel4 readyDatasrc", readyDatasrc);
  // console.log("Carousel4 widgetnemgoo", widgetnemgoo);

  return (
    <AtomSlider4>
      {readyDatasrc.map((item: any, index: number) => (
        <div key={index}>
          <CloudBanner1
            item={item}
            fade={true}
            {...widgetnemgoo?.CloudBanner1}
          />
        </div>
      ))}
    </AtomSlider4>
  );
}
