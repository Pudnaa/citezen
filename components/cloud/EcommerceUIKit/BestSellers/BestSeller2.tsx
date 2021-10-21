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


const BestSeller2 = () => {
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
      // console.log("BestSeller2 config", config);
      // console.log("BestSeller2 datasrc", datasrc);
      // console.log("BestSeller2 otherattr", otherattr);
      // console.log("BestSeller2 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Comfiest Sofa Seats</h1>
                    <p className="text-base leading-normal text-center text-gray-600 md:w-8/12 lg:w-5/12 mt-4 lg:mt-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="flex justify-center lg:space-x-8">
                    <div className="lg:w-3/12 mt-24 hidden lg:block">
                        <div>
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="16" fill="#1F2937" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Plush Cushions</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className="mt-24">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="16" fill="#1F2937" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Stain Resistant</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className="mt-24">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="16" fill="#1F2937" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Plugin Charger</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 flex lg:items-center justify-center h-full mt-2 lg:mt-14">
                        <img className="object-center object-cover w-full h-full" src="https://i.ibb.co/qyym1wc/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1-1.png" alt="A two seater sofa with wooden legs" />
                    </div>

                    <div className="lg:w-3/12 mt-24 hidden lg:block">
                        <div>
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="16" fill="#1F2937" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Modular System</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                        </div>
                        <div className="mt-24">
                            <div className="flex items-center space-x-2">
                                <div>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                        <rect width="16" height="16" fill="#1F2937" />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800">Strong Hardware</h2>
                            </div>
                            <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>

                {/* <!--Content info For medium screens  --> */}

                <div aria-label="benefits" className="lg:hidden mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-10 md:gap-y-8">
                    <div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                    <rect width="16" height="16" fill="#1F2937" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Plush Cushions</h2>
                        </div>
                        <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                    <rect width="16" height="16" fill="#1F2937" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Stain Resistant</h2>
                        </div>
                        <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                    <rect width="16" height="16" fill="#1F2937" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Plugin Charger</h2>
                        </div>
                        <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                    <rect width="16" height="16" fill="#1F2937" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Modular System</h2>
                        </div>
                        <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content.</p>
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2.25" y="2.25" width="15.5" height="15.5" stroke="#1F2937" strokeWidth="0.5" />
                                    <rect width="16" height="16" fill="#1F2937" />
                                </svg>
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800">Strong Hardware</h2>
                        </div>
                        <p className="text-base leading-normal text-gray-600 mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller2;
