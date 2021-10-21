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
const BestSeller3 = () => {
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
      // console.log("BestSeller3 config", config);
      // console.log("BestSeller3 datasrc", datasrc);
      // console.log("BestSeller3 otherattr", otherattr);
      // console.log("BestSeller3 positionConfig", positionConfig);
    return (
        <div className="container mx-auto">
            <div className="py-12 mx-4 md:mx-6 flex flex-col-reverse lg:flex-row justify-center items-strech lg:space-x-20 2xl:space-x-36">
                <div className="w-full lg:w-1/2 mt-6 md:mt-8 lg:mt-0">
                    <img className="object-center object-cover w-full h-full" src="https://i.ibb.co/gmkJFDj/pexels-max-vakhtbovych-6436755-1-1-1.png" alt="A dining table with three chairs" />
                </div>
                <div className="flex flex-col justify-center lg:w-1/2">
                    <h1 className="text-4xl font-semibold text-gray-800">Dining Chairs</h1>
                    <p className="text-base leading-normal text-gray-600 mt-6 md:w-11/12 lg:w-full xl:w-8/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                    <div role="list" aria-label="benefits" className="mt-8 md:mt-14 lg:mt-7 xl:mt-14 flex flex-col justify-center space-y-10 md:space-y-12">
                        <div role="listitem">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="9.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="10" fill="#4B5563" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Plush Cushions</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 xl:w-6/12">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div role="listitem">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="9.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="10" fill="#4B5563" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Stain Resistant</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 xl:w-6/12">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div role="listitem">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="9.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="10" fill="#4B5563" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Modular System</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4 md:w-8/12 lg:w-11/12 xl:w-6/12">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller3;
