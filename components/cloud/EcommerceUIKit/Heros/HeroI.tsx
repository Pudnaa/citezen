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
const HeroI = () => {
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
      // console.log("HeroI config", config);
      // console.log("HeroI datasrc", datasrc);
      // console.log("HeroI otherattr", otherattr);
      // console.log("HeroI positionConfig", positionConfig);
    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto py-9 md:py-12 lg:py-24">
                <div className="flex flex-col lg:flex-row lg:items-strech justify-center mx-4">
                    <div className="lg:w-9/12 flex flex-col lg:flex-row lg:items-center lg:justify-center">
                        <div className="relative lg:z-10 lg:w-3/12 lg:mr-10 xl:mr-24 2xl:mr-12">
                            <div className="w-1/2 lg:w-full">
                                <h1 className="text-4xl dark:text-white sm:text-5xl xl:text-6xl font-semibold text-gray-800">Simply comfortable</h1>
                            </div>
                            <p className="md:w-6/12 lg:w-full mt-4 sm:mt-5 text-base leading-normal dark:text-gray-300 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div className="relative h-full lg:mt-0 mt-7">
                            <img src="https://i.ibb.co/R0xzPp6/pexels-maksim-goncharenok-4352247-1-1-1.png" alt="A lounge sofa" className="w-full h-full hidden lg:block" />
                            <img src="https://i.ibb.co/3dYtS94/pexels-maksim-goncharenok-4352247-1-1-2-1.png" alt="a lounge sofa" className="w-full h-full lg:hidden" />
                        </div>
                    </div>
                    <div className="lg:w-4/12 mt-6 xl:ml-4 lg:mt-0 flex items-strech ml:0 lg:ml-8 ">
                        <div className="flex flex-col justify-end w-full">
                            <h2 className="dark:text-white text-xl lg:text-2xl font-semibold leading-normal text-gray-800">Boho Style Sofa</h2>
                            <p className="dark:text-gray-300 mt-3 lg:mt-4 md:text-xl lg:text-2xl text-gray-600">$2700</p>
                            <button className="dark:text-gray-800 mt-6 lg:mt-7 dark:bg-white bg-gray-800 text-base xl:text-xl font-medium leading-tight text-white text-left py-4 md:py-5 px-5 w-full md:w-5/12 lg:w-full flex justify-between items-center  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                                Showroom
                                <div className="">
                                    <svg className="fill-stroke dark:text-gray-800 text-white" width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M0.453735 12H14.4537" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.4539 16L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10.4539 8L14.4539 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="21.7269" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroI;
