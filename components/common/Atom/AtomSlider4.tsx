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

const AtomSlider4: FC<PropsType> = ({
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
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  const arrowClass = `cursor-pointer absolute my-auto inset-y-1/2 z-30 flex items-center justify-center rounded-full hover:bg-opacity-50 hover:bg-gray-400 text-white text-xl md:text-3xl lg:text-4xl w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 ${customArrowClass}`;

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${arrowClass} left-10`}
        onClick={onClick}
        style={{ ...customArrowStyle }}
      >
        <i className="far fa-chevron-left"></i>
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${arrowClass} right-10`}
        onClick={onClick}
        style={{ ...customArrowStyle }}
      >
        <i className="far fa-chevron-right"></i>
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    centerPadding: "2px",
    swipeToSlide: true,
    variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    appendDots: (dots: any) => (
      <div
        style={{
          position: "absolute",
          bottom: "15px",
          color: "#44C889",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider
      {...settings}
      className={`relative w-full h-auto ${customClassName}`}
    >
      {children}
    </Slider>
  );
};

export default AtomSlider4;
