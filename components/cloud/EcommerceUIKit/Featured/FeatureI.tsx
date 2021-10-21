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
const FeatureI = () => {
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
      // console.log("FeatureI config", config);
      // console.log("FeatureI datasrc", datasrc);
      // console.log("FeatureI otherattr", otherattr);
      // console.log("FeatureI positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-5/12">
                    <h1 className="lg:text-4xl text-3xl font-semibold leading-10 md:leading-9 text-gray-800">“A very fancy line that will make you click on the discover more as soon as you read it”</h1>
                </div>
                <div className="lg:w-1/2 lg:ml-8 md:mt-10 mt-4">
                    <img src="https://i.ibb.co/Mk5Zyt1/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1.png" alt="green sofa" className="w-full" />
                </div>
            </div>
        </div>
    );
};

export default FeatureI;
