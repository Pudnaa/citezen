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
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Social4() {
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
  const [show, setShow] = useState(false);

  if (isEmpty(datasrc)) return null;
  // console.log("Social4 config", config);
  // console.log("Social4 datasrc", datasrc);
  // console.log("Social4 otherattr", otherattr);
  // console.log("Social4 positionConfig", positionConfig);

  return (
    <div>
      <div className="py-12 2xl:container 2xl:mx-auto ">
        <div className="xl:px-20 md:px-6 px-4 flex flex-col justify-center items-start space-y-4  ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 xl:leading-9 text-center text-gray-800">
            Shop Instagram
          </h1>
          <p className="text-base leading-6 lg:leading-4 text-gray-600">
            Follow us on instagram{" "}
            <a
              href=""
              className="cursor-pointer hover:text-gray-800 text-gray-600"
            >
              @followusoninsta{" "}
            </a>{" "}
            and tag us to get featured on our timeline
          </p>
        </div>
      </div>
      <div className="w-full pb-12 ">
        {/* Desktop Size Start */}

        {/* <CarouselProvider className="hidden xl:block carousel cursor-none w-full " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={3} step={1} infinite={true}>
                    <Slider className="">
                        <Slide index={0}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/5vXTcym/riyan-ong-j1-Px-Aa2-U-T4-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">153</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/BTDCMLH/tessa-wilson-ECr-8nu-Xp-BA-unsplash.png" alt="jewelry" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/7Q4bTX5/pexels-the-lazy-artist-gallery-1271403-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">220</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">110</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="carousel-cell ">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/vzY5kpt/brooke-cagle-k9-XZPp-PHDho-unsplash-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/2gNcGVS/pexels-asa-dugger-1897590-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">400</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">126</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={5}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/5vXTcym/riyan-ong-j1-Px-Aa2-U-T4-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">153</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={6}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/BTDCMLH/tessa-wilson-ECr-8nu-Xp-BA-unsplash.png" alt="jewelry" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={7}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-96 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/7Q4bTX5/pexels-the-lazy-artist-gallery-1271403-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">220</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">110</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider> */}
        {/* Desktop Size End */}
        {/* Ipad Size Start */}
        {/* <CarouselProvider className="hidden md:block xl:hidden  carousel cursor-none w-full " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={3} step={1} infinite={true}>
                    <Slider className="">
                        <Slide index={0}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-72 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/5vXTcym/riyan-ong-j1-Px-Aa2-U-T4-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">153</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-72 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/BTDCMLH/tessa-wilson-ECr-8nu-Xp-BA-unsplash.png" alt="jewelry" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-72 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/7Q4bTX5/pexels-the-lazy-artist-gallery-1271403-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">220</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">110</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="carousel-cell ">
                                <div className="group md:w-full h-72 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/vzY5kpt/brooke-cagle-k9-XZPp-PHDho-unsplash-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-72 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/2gNcGVS/pexels-asa-dugger-1897590-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">400</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">126</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider> */}
        {/* Ipad Size End */}

        {/* Mobile Size Start */}
        {/* <CarouselProvider className="md:hidden carousel cursor-none w-full " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={5} visibleSlides={2} step={1} infinite={true}>
                    <Slider className="">
                        <Slide index={0}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-52 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/5vXTcym/riyan-ong-j1-Px-Aa2-U-T4-unsplash-1.png" alt="shoes" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">153</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-52 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/BTDCMLH/tessa-wilson-ECr-8nu-Xp-BA-unsplash.png" alt="jewelry" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">157</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-52 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/7Q4bTX5/pexels-the-lazy-artist-gallery-1271403-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">220</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">110</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={3}>
                            <div className="carousel-cell ">
                                <div className="group md:w-full h-52 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/vzY5kpt/brooke-cagle-k9-XZPp-PHDho-unsplash-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M13.8931 3.07357C13.5526 2.73291 13.1483 2.46267 12.7033 2.2783C12.2584 2.09392 11.7814 1.99902 11.2998 1.99902C10.8181 1.99902 10.3412 2.09392 9.89618 2.2783C9.45121 2.46267 9.04692 2.73291 8.70642 3.07357L7.99975 3.78024L7.29309 3.07357C6.60529 2.38578 5.67244 1.99938 4.69975 1.99938C3.72706 1.99938 2.79422 2.38578 2.10642 3.07357C1.41863 3.76137 1.03223 4.69422 1.03223 5.66691C1.03223 6.6396 1.41863 7.57245 2.10642 8.26024L2.81309 8.96691L7.99975 14.1536L13.1864 8.96691L13.8931 8.26024C14.2337 7.91974 14.504 7.51545 14.6884 7.07048C14.8727 6.6255 14.9676 6.14857 14.9676 5.66691C14.9676 5.18525 14.8727 4.70831 14.6884 4.26334C14.504 3.81836 14.2337 3.41408 13.8931 3.07357V3.07357Z"
                                                    stroke="white"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">367</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={4}>
                            <div className="carousel-cell">
                                <div className="group md:w-full h-52 relative flex justify-center items-center">
                                    <img src="https://i.ibb.co/2gNcGVS/pexels-asa-dugger-1897590-1.png" alt="girl" className="w-full h-full object-fit object-cover" />
                                    <div className="transition duration-200 opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50  absolute bottom-0 h-full w-full"></div>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-200 flex justify-center items-center flex-row space-x-4 ">
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">400</p>
                                        </div>
                                        <div className="flex flex-row justify-center items-center space-x-1">
                                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <p className="text-sm leading-3 text-white">126</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                </CarouselProvider> */}
        {/* Mobile Size End */}
      </div>
    </div>
  );
}
