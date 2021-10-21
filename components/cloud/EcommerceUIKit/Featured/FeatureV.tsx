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
const FeatureV = () => {
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
      // console.log("FeatureV config", config);
      // console.log("FeatureV datasrc", datasrc);
      // console.log("FeatureV otherattr", otherattr);
      // console.log("FeatureV positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <h1 className="text-4xl font-semibold leading-9 text-center text-gray-900">Featured</h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-8 gap-x-6 gap-y-36 mt-40">
                    <div className="lg:w-72 h-56 bg-white shadow rounded flex flex-col items-center relative">
                        <img src="https://i.ibb.co/3NftkQm/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2.png" alt="desk chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">$400</p>
                        <p className="text-xl leading-5 mt-2 text-gray-700">Desk Chair</p>
                    </div>
                    <div className="lg:w-72 h-56 bg-white relative shadow rounded flex flex-col items-center">
                        <img src="https://i.ibb.co/GxH0Rwm/sofa-chair.png" alt="sofa chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">$7200</p>
                        <p className="text-xl leading-5 mt-2 text-gray-700">Sofa Chair</p>
                    </div>
                    <div className="lg:w-72 h-56 bg-white relative shadow rounded flex flex-col items-center">
                        <img src="https://i.ibb.co/z2GjdYn/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png" alt="bedroom chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">$3200</p>
                        <p className="text-xl leading-5 mt-2 text-gray-700">Bedroom Chair</p>
                    </div>
                    <div className="lg:w-72 h-56 bg-white relative shadow rounded flex flex-col items-center">
                        <img src="https://i.ibb.co/m9gJqYc/pexels-hormel-2762247-removebg-preview-1.png" alt="lounge chair" className="w-36 h-56 absolute -mt-28" />
                        <p className="text-3xl font-bold text-gray-900 mt-36">$1200</p>
                        <p className="text-xl leading-5 mt-2 text-gray-700">Lounge Chair</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureV;
