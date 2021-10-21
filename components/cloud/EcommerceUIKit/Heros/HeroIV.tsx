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
const HeroIV = () => {
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
      // console.log("HeroIV config", config);
      // console.log("HeroIV datasrc", datasrc);
      // console.log("HeroIV otherattr", otherattr);
      // console.log("HeroIV positionConfig", positionConfig);

    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto pt-9  lg:pt-24 pb-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-strech justify-center mx-4">
                    <div className="lg:w-1/2 flex flex-col justify-center">
                        <h1 className="dark:text-white text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-800 lg:w-7/12">Luxiwood Interiors</h1>
                        <p className="dark:text-gray-300 text-base leading-normal text-gray-600 mt-5 sm:w-10/12 lg:w-7/12">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy.</p>
                        <p className="dark:text-gray-300 text-sm leading-tight text-gray-500 mt-6 sm:w-7/12 lg:w-6/12">‘Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood’</p>
                        <div className="mt-8 hidden lg:flex">
                            <button className="dark:bg-white dark:text-gray-800 dark:hover:bg-gray-500 dark:hover:text-white bg-gray-800 px-8 py-4 text-base font-medium text-center text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex items-center lg:items-strech sm:justify-center sm:space-x-6 lg:space-x-8">
                        <div className="w-full sm:w-auto h-full flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
                            <img src="https://i.ibb.co/TKRJbQH/juan-burgos-FIy-XGZ1q0mc-unsplash-1-1.png" alt="Sofas in a carpeted room" className="w-full h-full hidden sm:block" />
                            <img src="https://i.ibb.co/2KgpWSt/jan-antonin-kolar-KXED2-PLneek-unsplash-1-1.png" alt="A sitting room with corridor" className="w-full h-full hidden sm:block" />

                            <img src="https://i.ibb.co/59GCKcY/juan-burgos-FIy-XGZ1q0mc-unsplash-1-1.png" alt="Sofas in a carpeted room" className="w-full h-full sm:hidden" />
                            <img src="https://i.ibb.co/Ltdjvrb/image-1-1.png" alt="a window with some house plants" className="w-full h-full sm:hidden" />
                            <img src="https://i.ibb.co/3Nhdq7M/Group-175-1.png" alt="A sitting room with corridor" className="w-full h-full sm:hidden" />
                        </div>
                        <div>
                            <img src="https://i.ibb.co/BtJ0qQ8/image-1-1.png" alt="a window with some house plants" className="w-full h-full hidden lg:block" />
                            <img src="https://i.ibb.co/Ltdjvrb/image-1-1.png" alt="a window with some house plants" className="w-full h-full hidden sm:block lg:hidden" />
                        </div>
                    </div>
                    <div className="mt-6 lg:hidden w-full">
                        <button className="dark:bg-white dark:text-gray-800 dark:hover:bg-gray-500 dark:hover:text-white bg-gray-800 w-full md:w-6/12 py-4 text-center text-base font-medium  text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroIV;
