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
const FeatureIV  = () => {
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
      // console.log("FeatureIV config", config);
      // console.log("FeatureIV datasrc", datasrc);
      // console.log("FeatureIV otherattr", otherattr);
      // console.log("FeatureIV positionConfig", positionConfig);
    return (
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
            <div className="flex lg:flex-row flex-col-reverse items-center relative">
                <div className="lg:w-1/2 w-full lg:mt-0 mt-6 flex flex-shrink-0">
                    <img src="https://i.ibb.co/WHVTnL4/pexels-max-vakhtbovych-6436755-1-1.png" alt="chairs and dinning table" className="w-full h-full" />
                </div>
                <div className="xl:-ml-64 lg:-ml-48 lg:w-7/12 relative table lg:h-96 lg:py-10 lg:px-8 md:px-8 px-3 py-6 border">
                    <div className="relative z-30">
                        <h1 className="lg:text-4xl text-3xl font-semibold text-gray-900">Dining Chairs</h1>
                        <p className="text-base leading-6 text-gray-700 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                        <div className="md:flex items-center justify-between lg:mt-10 md:mt-8 mt-6">
                            <div className="md:w-2/5">
                                <div className="flex items-center">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="9.5" stroke="#0F172A" strokeWidth="0.5" />
                                        <rect width="16" height="10" fill="#64748B" />
                                    </svg>
                                    <p className="text-xl font-semibold leading-5 ml-2 text-gray-900">Plush Cushions</p>
                                </div>
                                <p className="xl:w-72 lg:w-48 text-base leading-6 mt-4 text-gray-700">It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>
                            <div className="md:w-2/5 md:mt-0 mt-4">
                                <div className="flex items-center">
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="9.5" stroke="#0F172A" strokeWidth="0.5" />
                                        <rect width="16" height="10" fill="#64748B" />
                                    </svg>
                                    <p className="text-xl font-semibold leading-5 ml-2 text-gray-900">Stain Resistant</p>
                                </div>
                                <p className="xl:w-72 lg:w-48 text-base leading-6 mt-4 text-gray-700">It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blur absolute inset-0 h-full w-full lg:block hidden"></div>
                </div>
            </div>

            <style>
                {`.bg-blur {
                    background: linear-gradient(102.53deg, rgba(255, 255, 255, 0.4) 16.26%, rgba(255, 255, 255, 0.1) 78.34%);
                box-shadow: 0px 4px 6px -2px rgb(226 232 240 / 6%);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
            }`}
            </style>
        </div>
    );
};

export default FeatureIV;
