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
const HeroVI = () => {
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
      // console.log("HeroVI config", config);
      // console.log("HeroVI datasrc", datasrc);
      // console.log("HeroVI otherattr", otherattr);
      // console.log("HeroVI positionConfig", positionConfig);
    return (
        <div className="dark:bg-gray-800">
            <div className="flex items-center justify-center overflow-y-hidden">
                <div className="2xl:mx-auto 2xl:container xl:py-24 lg:py-12 py-8 xl:px-20 px-6 flex lg:flex-row flex-col-reverse items-strech justify-center">
                    <div className="lg:w-5/12 flex items-center lg:items-start justify-center flex-col">
                        <h1 className="dark:text-white xl:text-5xl lg:text-4xl md:text-5xl lg:mt-0 mt-8 text-4xl  font-bold text-gray-800 lg:text-left text-center">
                            Winter x fall <br />
                            collection 2020-2021
                        </h1>
                        <p className="text-sm leading-5 mt-5 text-gray-700 md:w-8/12 lg:w-11/12 lg:text-left text-center dark:text-gray-300">Start off the new year by hitting the ground running with this purpose built workman’s bag. A culmination of productivity and luxury</p>
                        <div className="mt-8 w-full flex justify-center lg:justify-start lg:w-auto">
                            <button className="dark:bg-white dark:hover:bg-gray-300 dark:text-gray-800 md:w-auto w-full px-8 py-4  focus:outline-none border border-gray-800 hover:bg-gray-700 bg-gray-800 text-base focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 leading-none text-gray-50">Explore collection</button>
                        </div>
                    </div>
                    <div className="lg:w-5/12 lg:ml-10 h-full w-full">
                        <img src="https://i.ibb.co/CQBrpPB/Rectangle-2.png" className="w-full block h-80 lg:h-full object-cover object-center" alt="hero-pic" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroVI;
