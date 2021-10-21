import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper/core";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";

// SwiperCore.use([Navigation]);

const BestSellers11 = () => {
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
  const [show, setShow] = useState("");
  if (isEmpty(datasrc)) return null;
  // console.log("BestSellers11 config", config);
  // console.log("BestSellers11 datasrc", datasrc);
  // console.log("BestSellers11 otherattr", otherattr);
  // console.log("BestSellers11 positionConfig", positionConfig);
  const showText = (slide: any) => {
    setShow(slide);
  };

  const hideText = () => {
    setShow("");
  };

  return (
    <div className="container mx-auto py-12 w-full md:pl-6 md:px-6 px-4">
      <div className="flex items-center flex-col lg:flex-row lg:space-x-12 2xl:space-x-0">
        <div className="lg:w-2/5 2xl:w-3/12">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-10 text-gray-800">
            Shop Our Best Sellers
          </p>
          <p className="text-base font-normal leading-5 xl:leading-6 mt-4 text-gray-600">
            Fashion can also simply mean our lifestyle: the clothing and
            accessories that we wear and the cosmetics that we apply.
          </p>

          <button className="flex flex-row focus:outline-none focus:underline hover:underline justify-center items-center text-gray-800 hover:text-gray-600 mt-10 space-x-2">
            <p className="text-base font-semibold leading-none">
              Explore collection
            </p>
            <svg
              className="mt-0.5 fill-stroke"
              width="28"
              height="8"
              viewBox="0 0 28 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3536 4.35355C27.5488 4.15829 27.5488 3.84171 27.3536 3.64645L24.1716 0.464466C23.9763 0.269204 23.6597 0.269204 23.4645 0.464466C23.2692 0.659728 23.2692 0.976311 23.4645 1.17157L26.2929 4L23.4645 6.82843C23.2692 7.02369 23.2692 7.34027 23.4645 7.53553C23.6597 7.7308 23.9763 7.7308 24.1716 7.53553L27.3536 4.35355ZM0 4.5H27V3.5H0V4.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="w-full lg:w-9/12 lg:pl-0">
          <div className="mt-8 lg:mt-16">
            {/* <Swiper
              slidesPerView={3}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                },
                600: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              navigation={true}
              className="mySwiper"
              speed={500}
            >
              <SwiperSlide>
                <div className="carousel-cell">
                  <div
                    className="md:w-full h-full relative"
                    onMouseOver={() => showText("slide1")}
                    onMouseOut={hideText}
                  >
                    <img
                      src="https://i.ibb.co/hsQWR3P/pesce-huang-mq73c-Wf9-ZAQ-unsplash-1.png"
                      alt="bag"
                      className="w-full h-full object-fit object-cover"
                    />
                    <div
                      className={
                        "items-end mb-6 ml-6 absolute bottom-0 left-0 "
                      }
                    >
                      <div
                        className={
                          "p-3 bg-white " +
                          (show === "slide1" ? "opacity-100" : "opacity-0")
                        }
                      >
                        <p className="text-sm leading-none text-gray-600">
                          Yves Saint Laurent
                        </p>
                        <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                          $1900
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div
                    className="md:w-full h-full relative"
                    onMouseOver={() => showText("slide2")}
                    onMouseOut={hideText}
                  >
                    <img
                      src="https://i.ibb.co/h9Yx6C5/fernando-andrade-pot-CPE-Cw8-A-unsplash-1.png"
                      alt="shoes"
                      className="w-full h-full object-fit object-cover"
                    />
                    <div className="mb-6 ml-6 absolute bottom-0 left-0">
                      <div
                        className={
                          "p-3 bg-white " +
                          (show === "slide2" ? "opacity-100" : "opacity-0")
                        }
                      >
                        <p className="text-sm leading-none text-gray-600">
                          Yves Saint Laurent
                        </p>
                        <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                          $1900
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell">
                  <div
                    className="md:w-full h-full relative"
                    onMouseOver={() => showText("slide3")}
                    onMouseOut={hideText}
                  >
                    <img
                      src="https://i.ibb.co/BqYC2nT/austin-wilcox-iik-Gw-Bbx-Qhs-unsplash-1.png"
                      alt="wallet"
                      className="w-full h-full object-fit object-cover"
                    />
                    <div className="mb-6 ml-6 absolute bottom-0 left-0">
                      <div
                        className={
                          "p-3 bg-white " +
                          (show === "slide3" ? "opacity-100" : "opacity-0")
                        }
                      >
                        <p className="text-sm leading-none text-gray-600">
                          Yves Saint Laurent
                        </p>
                        <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                          $1900
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="carousel-cell"></div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
        <style>
          {`
            .carousel-cell {
                width: 100% !important;
                height: 600px !important;
                margin-right: 0px;
            }
			.swiper-slide {
				height: 600px !important;
				width: 100% !important;
			}

			.swiper-button-prev, .swiper-button-next {
				width: 50px;
				height: 50px;
				background-color: white;
				border-radius: 100%;
				top: 50% !important;
                left: 80% !important;
			}
			.swiper-button-prev {
				display: none !important;
			}
			:root {
				--swiper-theme-color: #27272a !important;
				--swiper-navigation-size: 25px;
				font-weight: 900;
			}
			.swiper-button-next:hover {
                background-color: #27272a !important;
                color: white !important;
            }

			.swiper-button-next.swiper-button-disabled, .swiper-button-prev.swiper-button-disabled {
				opacity:1
			}

            @media (min-width: 600px) {
				.carousel-cell {
					width: 404px !important;
					height: 582px !important;
					margin-right: 30px !important;				
            	}
				.swiper-slide {
					margin-right: 30px !important;
					height: 582px !important;
					width: 404px !important;
				}
            }

			@media (min-width: 1024px) {
				.carousel-cell {
					width: 404px !important;
					height: 582px !important;
					margin-right: 30px !important;	
				}
				.swiper-slide {
					margin-right: 30px !important;
					height: 582px !important;
					width: 404px !important;
				}
            }
			
			`}
        </style>
      </div>
    </div>
  );
};

export default BestSellers11;
