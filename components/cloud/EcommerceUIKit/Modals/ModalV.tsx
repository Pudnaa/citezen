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
export default function ModalV() {
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
    // console.log("ModalV config", config);
    // console.log("ModalV datasrc", datasrc);
    // console.log("ModalV otherattr", otherattr);
    // console.log("ModalV positionConfig", positionConfig);

    return (
        <div className="bg-gray-800">
            <div id="button" className={`container mx-auto justify-center items-center px-4 md:px-10 py-20 ${show ? "hidden" : "flex"}`}>
                <button onClick={() => setshow(true)} className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded">
                    Open Modal
                </button>
            </div>
            <div id="modal" className={`container w-full justify-center items-center md:py-12 mx-auto md:px-6 py-9 px-4 ${show ? "flex" : "hidden"}`}>
                <div className="w-full justify-center items-center flex-col bg-white lg:pt-6 lg:pr-6 lg:pl-10 lg:pb-16 md:py-10 md:px-6 p-4">
                    <div className="lg:flex w-full justify-end hidden lg:mb-4">
                        <button onClick={() => setshow(false)} aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col lg:flex-row items-strech justify-center lg:space-x-10">
                        <div className="lg:w-1/2 md:border-2 md:border-gray-800 md:pb-5 md:pt-5 md:px-5 lg:pt-0 lg:px-0 lg:pb-0 lg:py-8 flex flex-col justify-center items-center">
                            <div className="flex w-full justify-end lg:hidden">
                                <button onClick={() => setshow(false)} aria-label="close modal" className="focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 6L18 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="w-full">
                                <img className="w-full h-full" src="https://i.ibb.co/f4NBpD2/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1-removebg-preview-1-1.png" alt="A green two seater sofa with wooden legs" role="img" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 mt-5 lg:mt-0">
                            <p className="text-base text-gray-600 leading-4">Amoire</p>
                            <h1 className="mt-4 text-3xl lg:text-4xl lg:leading-9 leading-7 font-semibold text-gray-800">20% off on vintage sofa</h1>
                            <p className="mt-4 text-base text-gray-600 w-11/12 md:w-8/12 leading-6">It is a long established fact that a reader will be distracted by the readable content.</p>
                            <input type="email" placeholder="Your Email" className="mt-6 md:mt-8 w-full bg-gray-100 text-base text-gray-600 placeholder-gray-600 p-4 focus:outline-none focus:ring-2 focus:ring-gray-400" />
                            <button className="bg-gray-900 text-base font-medium py-4 text-white text-center w-full mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
