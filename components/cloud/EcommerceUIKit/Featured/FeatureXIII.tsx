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

const FeatureXIII = () => {
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
      // console.log("FeatureXIII config", config);
      // console.log("FeatureXIII datasrc", datasrc);
      // console.log("FeatureXIII otherattr", otherattr);
      // console.log("FeatureXIII positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="flex flex-col lg:flex-row justify-center items-stretch lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div className="lg:w-4/12 flex flex-col justify-center mr-6">
                    <h1 className="text-3xl xl:text-4xl leading-9 text-gray-800">
                        <span className="font-bold">Denim</span> Collection’21
                    </h1>
                    <p className="mt-4 w-11/12 md:w-7/12 lg:w-10/12 text-base leading-normal text-gray-600">Start off the new year by hitting the ground, looking fabulous in denim.</p>
                    <div className="mt-8">
                        <a href="/" className="text-base hover:underline leading-4 font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-black hover:text-gray-800">
                            Explore collection
                        </a>
                    </div>
                </div>
                <div className="lg:w-4/6 mt-8 lg:mt-0">
                    <img src="https://i.ibb.co/mqyRm6b/pexels-anna-shvets-5325586-1-1.png" alt="A group of 5 people posing" className="w-full h-full object-center object-cover" />
                </div>
            </div>
        </div>
    );
};

export default FeatureXIII;
