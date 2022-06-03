import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import useSwiperRef from "../useSwiperRef";
import { overrideTailwindClasses } from "tailwind-override";
import BlockDiv from "../../Block/BlockDiv";
import { toBoolean } from "util/helper";

// SwiperCore.use([Navigation]);

// Demo
// https://swiperjs.com/demos
// API
// https://swiperjs.com/swiper-api
// React Usage
// https://swiperjs.com/react#usage

type PropsType = {
  type?: "1" | "2" | "3" | "4";
  color?: string;
  customStyle?: any;
  customClassName?: string;
  arrow?: any;
};

const AtomSliderV2: FC<PropsType> = ({
  type = "primary",
  color = "sso",
  customClassName = "",
  customStyle = {},
  arrow = {
    className: "",
    left: {
      className: "left-10",
    },
    right: {
      className: "right-10",
    },
    arrowWrapper: {
      className: "",
    },
  },
  ...props
}) => {
  const { widgetnemgooReady } = useContext(WidgetWrapperContext);

  const myProps: any = { ...props };

  const arrowClass = overrideTailwindClasses(
    `cursor-pointer absolute my-auto inset-y-1/2 z-30 flex items-center justify-center rounded-full hover:bg-opacity-50 hover:bg-gray-400 text-white text-xl w-10 h-10 ${arrow?.className}`
  );
  const arrowStyle = { ...arrow?.style };

  const pagination: any = {
    clickable: true,
    type: "bullets",
    renderBullet: (index: number, className: any) => {
      return `<span index-number="${index}" class="${className} cursor-pointer text-gray-700 mx-3"><i class="fas fa-circle"></i></span>`;
    },
  };

  const [nextEl, nextElRef]: any = useSwiperRef();
  const [prevEl, prevElRef]: any = useSwiperRef();

  return (
    <>
      <BlockDiv
        customClassName={`relative ${customClassName}`}
        divNumber="Swiper-Wrapper"
      >
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Scrollbar, A11y]}
          loop={true}
          pagination={pagination}
          navigation={{
            prevEl,
            nextEl,
          }}
          scrollbar={{ draggable: true }}
          spaceBetween={10}
          centeredSlides={false}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          className={overrideTailwindClasses(
            `${myProps?.className || ""} ${
              widgetnemgooReady?.["AtomSliderV2-Swiper"]?.className || ""
            }`
          )}
          style={myProps?.style}
          div-name="AtomSliderV2-Swiper"
          {...props}
          {...myProps?.props}
        >
          {props.children}
        </Swiper>
        {toBoolean(
          myProps?.navigation === undefined ? true : myProps?.navigation
        ) && (
          <BlockDiv
            customClassName={`absolute inset-y-1/2 container mx-auto`}
            divNumber="Arrow-Wrapper-Outside"
          >
            <BlockDiv
              customClassName={`relative w-full ${
                arrow?.arrowWrapper?.className || ""
              }`}
              customStyle={{ ...arrow?.arrowWrapper?.style }}
              divNumber="Arrow-Wrapper"
            >
              <div
                ref={prevElRef}
                className={`${arrowClass} ${
                  arrow?.left?.className || "left-10"
                }`}
                style={{ ...arrowStyle, ...arrow?.left?.style }}
              >
                <i className="far fa-chevron-left"></i>
              </div>
              <div
                ref={nextElRef}
                className={`${arrowClass} ${
                  arrow?.right?.className || "right-10"
                }`}
                style={{ ...arrowStyle, ...arrow?.right?.style }}
              >
                <i className="far fa-chevron-right"></i>
              </div>
            </BlockDiv>
          </BlockDiv>
        )}
      </BlockDiv>

      {/* <style>
        {`
          .swiper-pagination-bullet-active {
            opacity:1 !important;
          }
          .swiper-pagination-bullet {
            opacity:0.4;
          }
          .swiper-pagination {
            position: absolute;
            bottom: 20px;
            z-index: 5000;
            margin: 0 auto;
            transform: translate(-50%, 0);
            left: 50%;
          }
		  .swiper-slide {
			width: unset;
		}
        `}
      </style> */}
    </>
  );
};

export default AtomSliderV2;
