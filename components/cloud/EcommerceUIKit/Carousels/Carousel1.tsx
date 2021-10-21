import { useContext } from "react";
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
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Carousel1() {
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
  if (isEmpty(datasrc)) return null;
  // console.log("Carousel1 config", config);
  // console.log("Carousel1 datasrc", datasrc);
  // console.log("Carousel1 otherattr", otherattr);
  // console.log("Carousel1 positionConfig", positionConfig);
  return (
    <div className="container mx-auto py-12 bg-gray-800 w-full md:pl-6 md:px-6 px-4">
      <div className="lg:flex items-center">
        <div className="lg:w-1/3">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-10 text-white">
            Hand crafted products that delight
          </p>
          <p className="text-sm leading-5 mt-4 text-white">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="w-full lg:w-auto mt-7 text-sm leading-normal py-4 px-10 border border-white focus:outline-none hover:text-gray-800 hover:bg-white text-white">
            Explore more
          </button>
        </div>
        <div className="lg:w-9/12 lg:pl-10">
          {/* Carousel for medium and Large Screen Devices */}
          {/* <CarouselProvider className="md:flex hidden items-center justify-center relative" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={2} step={1} infinite={true}>
                        <div className="carousel pt-8 cursor-none ">
                            <Slider className="">
                                <Slide className="mr-5" index={0}>
                                    <div className="carousel-cell ">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-1.png" alt="bag" class="w-full h-full object-fit object-cover" />
                                            <div className="hidden items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub1">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="carousel-cell ">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-2.png" alt="shoes" class="w-full h-full object-fit object-cover" />
                                            <div className="hidden items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub2">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="carousel-cell">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-3.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                            <div className="hidden items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub3">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="carousel-cell"></div>
                                </Slide>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </CarouselProvider> */}

          {/* Carousel for small Screen Devices */}
          {/* <CarouselProvider className="flex md:hidden items-center justify-center relative" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={4} visibleSlides={1} step={1} infinite={true}>
                        <div className="carousel pt-8 cursor-none ">
                            <Slider className="">
                                <Slide index={0}>
                                    <div className="carousel-cell w-full group ">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-1.png" alt="bag" class="w-full h-full object-fit object-cover" />
                                            <div className="opacity-0 group-hover:opacity-100 duration-100 items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub1">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="carousel-cell w-full group ">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-2.png" alt="shoes" class="w-full h-full object-fit object-cover" />
                                            <div className="opacity-0 group-hover:opacity-100 duration-100 items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub2">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="carousel-cell w-full group">
                                        <div className="md:w-full h-full relative">
                                            <img src="https://cdn.tuk.dev/assets/components/misc/slider-img-3.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                            <div className="opacity-0 group-hover:opacity-100 duration-100 items-end mb-6 ml-6 absolute bottom-0 left-0" id="sub3">
                                                <div className="p-8 bg-white">
                                                    <p className="text-sm font-extrabold leading-3 text-gray-700">NY collection</p>
                                                    <p className="text-2xl leading-6 mt-2 text-gray-700">Leather Bag</p>
                                                </div>
                                                <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21 12H3M21 12L15 6M21 12L15 18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="carousel-cell w-full"></div>
                                </Slide>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className=" w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white hover:bg-gray-400  absolute z-30 right-0 mr-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </CarouselProvider> */}
        </div>
      </div>

      <style>
        {`
                    .carousel-cell{
                        height: 582px;
                        margin-right:16px;
                    }

                    
                `}
      </style>
    </div>
  );
}
