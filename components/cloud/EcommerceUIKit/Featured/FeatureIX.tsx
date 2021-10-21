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

const FeatureIX = () => {
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
      // console.log("FeatureIX config", config);
      // console.log("FeatureIX datasrc", datasrc);
      // console.log("FeatureIX otherattr", otherattr);
      // console.log("FeatureIX positionConfig", positionConfig);
    return (
        <div className="xl:container xl:mx-auto lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="flex flex-col lg:flex-row justify-center items-stretch">
                <div className="lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-10 text-gray-900 lg:w-11/12">Build your dream kitchen with us.</h1>
                    <p className="mt-4 lg:mt-6 lg:w-10/12 2xl:w-9/12 text-base leading-normal text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry_s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div className="mt-8 lg:mt-10">
                        <button className="flex items-center justify-center py-4 px-10 border-2 border-gray-800 text-base font-medium leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-800 hover:text-white w-full lg:w-auto">Explore more</button>
                    </div>
                </div>
                <div className="lg:w-7/12 mt-10 md:mt-12 lg:mt-0">
                    <div className="relative">
                        <img src="https://i.ibb.co/SQnmvxn/naomi-hebert-MP0bga-S-d1c-unsplash-1-1-1.png" alt="A kitchen with a counter, seat and lamps" className="object-center object-cover w-full h-96 sm:h-full" />
                        <div className="absolute mx-auto bottom-0 flex justify-center w-full -mb-36">
                            <img src="https://i.ibb.co/sPHPqQt/jason-briscoe-KTrov7eujms-unsplash-1-1.png" alt="A girl cooking food" className="w-72 sm:w-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureIX;
