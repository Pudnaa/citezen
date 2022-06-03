import { FC, useContext } from "react";
//import дээр typescript улайгаад байвал
//https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam
//yarn add @types/module-name
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

type PropsType = {
  type?: "1" | "2" | "3" | "4";
  color?: string;
  customStyle?: any;
  customClassName?: string;
  arrowClass?: string;
  arrowStyle?: any;
  children?: any;
};

const AtomSlider7: FC<PropsType> = ({
  type = "primary",
  color = "sso",
  customStyle = {},
  customClassName = "",
  arrowClass: customArrowClass,
  arrowStyle: customArrowStyle,
  children,
}) => {
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

  var settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // arrows: true,
    slidesToScroll: 1,
    // className: "slides",
    // initialSlide: 0, //2-р слайдаас эхэлнэ.
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings} className={`relative h-screen ${customClassName}`}>
      {children}
    </Slider>
  );
};

export default AtomSlider7;
