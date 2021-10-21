import { useContext,useState } from "react";
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
const HeroIX = () => {
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
      // console.log("HeroIX config", config);
      // console.log("HeroIX datasrc", datasrc);
      // console.log("HeroIX otherattr", otherattr);
      // console.log("HeroIX positionConfig", positionConfig);
    return (
        <div className="dark:bg-gray-900">
            <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div className="lg:flex items-center justify-between">
                    <div className="lg:w-80">
                        <p className="dark:text-gray-200 text-base text-gray-500 leading-4">Limited edition</p>
                        <h1 className="dark:text-white lg:text-6xl md:text-5xl text-4xl font-semibold text-gray-800 mt-2">Minimal floor lamp</h1>
                        <p className="dark:text-gray-300 w-full lg:w-11/12 text-base mt-4 leading-6 text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <button aria-label="Shop now button" className="dark:text-white dark:hover:text-gray-200 hover:text-gray-600 text-xl font-bold mt-8 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none underline text-gray-800">
                            Shop Now
                        </button>
                    </div>
                    <div className="lg:w-7/12 relative 2xl:ml-24 lg:mt-0 mt-8">
                        <img src="https://i.ibb.co/TmbTMX9/sincerely-media-VDPauw-J-s-Ho-unsplash-1.png" alt="img with lamp and background" className="w-full h-full" />
                        <div className="sm:absolute right-0 bottom-0 flex items-streach">
                            <div className="sm:w-48 w-1/2 flex flex-shrink-0">
                                <img src="https://i.ibb.co/CnprTMy/cgair.png" alt="white chair" className="w-full flex flex-shrink-0 h-full" />
                            </div>
                            <div className="sm:w-52 w-1/2 dark:bg-white bg-gray-800 md:p-5 p-4">
                                <h2 className="dark:text-gray-800 w-32 text-lg font-medium leading-relaxed text-white leading-6">Minimalist white chair</h2>
                                <div className="flex mt-4 items-center justify-between">
                                    <p className="dark:text-gray-800 text-base leading-none text-white">02</p>
                                    <button className="dark:text-gray-800 text-white dark:hover:text-gray-500 focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-white-700 dark:focus:ring-gray-700" aria-label="go to the prodcut">
                                        <svg className="fill-stroke" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroIX;
