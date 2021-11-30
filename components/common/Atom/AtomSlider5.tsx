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

const AtomSlider5: FC<PropsType> = ({
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

  const arrowClass = `cursor-pointer absolute my-auto inset-y-1/2 z-5 flex items-center justify-center rounded-full bg-white border border-gray-50 shadow-md hover:bg-gray-100 w-10 h-10 text-black ${customArrowClass}`;

  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${arrowClass} left-10 prev-button`}
        onClick={onClick}
        style={{ ...customArrowStyle }}
      >
        <i className='far fa-chevron-left text-xl'></i>
      </div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${arrowClass} right-10 next-button`}
        onClick={onClick}
        style={{ ...customArrowStyle }}
      >
        <i className='far fa-chevron-right text-xl'></i>
      </div>
    );
  };

  var settings = {
    dots: false,
    infinite: false,
    centerMode: false,
    centerPadding: "2px",
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    // variableWidth: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
  };

  return (
    <Slider {...settings} className={`relative  h-auto  ${customClassName}`}>
      {children}
    </Slider>
  );
};

export default AtomSlider5;
