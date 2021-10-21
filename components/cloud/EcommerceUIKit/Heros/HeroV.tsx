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
const HeroV = () => {
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
      // console.log("HeroV config", config);
      // console.log("HeroV datasrc", datasrc);
      // console.log("HeroV otherattr", otherattr);
      // console.log("HeroV positionConfig", positionConfig);
    return (
        <div className="dark:bg-gray-800">
            <div className="flex items-center justify-center">
                <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-12 px-4 xl:py-24 lg:py-12 py-8">
                    <img src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/luxe.png" className="w-full block h-48 object-cover object-center lg:h-full mt-6" alt="hero-pic" />
                    <p className="lg:text-6xl  dark:text-white text-4xl text-center font-black leading-10 pt-12 pb-7">Winter x fall collection 2020-2021</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="dark:bg-white dark:text-gray-800 dark:hover:bg-gray-200 sm:w-auto w-full px-8 py-4 focus:outline-none border border-gray-800 hover:bg-gray-700 bg-gray-800 text-base focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 leading-none text-gray-50">Explore collection</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroV;
