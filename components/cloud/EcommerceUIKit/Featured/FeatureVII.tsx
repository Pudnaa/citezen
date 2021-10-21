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

const FeatureVII = () => {
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
      // console.log("FeatureVII config", config);
      // console.log("FeatureVII datasrc", datasrc);
      // console.log("FeatureVII otherattr", otherattr);
      // console.log("FeatureVII positionConfig", positionConfig);
    return (
        <div className="container mx-auto pt-9 pb-20 md:py-12 px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-strech justify-center">
                <div className="lg:w-1/2 flex flex-col md:flex-row items-strech justify-center space-y-4 md:space-y-0 md:space-x-8">
                    <div className="flex flex-col justify-center space-y-4 md:space-y-8">
                        <img src="https://i.ibb.co/hdZvcn3/Rectangle-20.png" alt="A model posing" className="w-full md:h-full" />
                        <img src="https://i.ibb.co/KLj9mkb/Rectangle-22-1.png" alt="A girl with a bag and shades" className="w-full h-full" />
                    </div>
                    <div className="flex flex-col justify-center space-y-4 md:space-y-8">
                        <img src="https://i.ibb.co/J5MDVDn/Rectangle-23.png" alt="A Brown bag" className="w-full h-full" />
                        <img src="https://i.ibb.co/PY1yhj4/Rectangle-21.png" alt="A model in white dress" className="w-full h-full" />
                    </div>
                </div>
                <div className="mt-5 sm:mt-8 lg:mt-0 lg:w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-gray-800 text-center">Luxe Summer Collection’21</h1>
                    <p className="text-base md:text-xl leading-7 text-center text-gray-600 mt-7 md:mt-4 lg:mt-5 xl:w-10/12 2xl:w-8/12">Light , breezy and effortless beach style collection is live. Shop now for an amazing experience</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureVII;
