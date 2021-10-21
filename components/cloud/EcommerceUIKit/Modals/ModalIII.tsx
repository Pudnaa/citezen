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

export default function ModalIII() {
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
    const [show, setshow] = useState(true);
    if (isEmpty(datasrc)) return null;
    // console.log("ModalIII config", config);
    // console.log("ModalIII datasrc", datasrc);
    // console.log("ModalIII otherattr", otherattr);
    // console.log("ModalIII positionConfig", positionConfig);

    return (
        <div className="bg-gray-800">
            <div id="button" className={`${show ? "hidden" : "flex"} container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <button onClick={() => setshow(true)} className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded">
                    Open Modal
                </button>
            </div>
            <div id="modal" className={`${show ? "flex" : "hidden"} container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <div className="flex justify-center items-center flex-col bg-white p-4 md:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row items-strech justify-center lg:space-x-10">
                        <div className="w-full lg:w-1/2 bg-red-200 relative">
                            <img className="hidden lg:block w-full h-full object-cover object-center" src="https://i.ibb.co/LpVs37p/image-2.png" alt="kitchen" role="img" />
                            <img className="hidden md:block lg:hidden w-full h-full object-cover object-center" src="https://i.ibb.co/whBtgFL/image-2-1.png" alt="kitchen" role="img" />
                            <img className="md:hidden w-full h-full object-cover object-center" src="https://i.ibb.co/mJP41sG/image-2.png" alt="kitchen" role="img" />
                            <div className="absolute z-20 top-3 right-3 flex w-full justify-end lg:hidden">
                                <button onClick={() => setshow(false)} aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-4 lg:mt-0 lg:w-1/2">
                            <div className="lg:flex w-full justify-end hidden">
                                <button onClick={() => setshow(false)} aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="lg:mt-1.5 w-64 md:w-full">
                                <p className="text-base text-gray-500">Amoire</p>
                                <h1 className="md:mt-3 text-3xl md:text-3xl xl:text-4xl md:w-8/12 font-semibold text-gray-900">Enter email to get 20% off</h1>
                                <p className="mt-3 lg:mt-2 text-base text-gray-600 md:w-7/12 lg:w-9/12">It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>
                            <input type="email" placeholder="Your Email" className="mt-5 lg:mt-4 w-full bg-gray-100 text-base text-gray-600 placeholder-gray-600 p-4 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                            <button className="bg-gray-900 hover:bg-gray-800 text-base font-medium py-4 text-white text-center w-full mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
