import { useContext, useState } from "react";
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
  AtomImage,
} from "@components/common/Atom";

export default function Faq6() {
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
    const [show, setShow] = useState(0);

    if (isEmpty(datasrc)) return null;
    // console.log("Faq6 config", config);
    // console.log("Faq6 datasrc", datasrc);
    // console.log("Faq6 otherattr", otherattr);
    // console.log("Faq6 positionConfig", positionConfig);
    return (
        <div>
            <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
                <div className="lg:w-8/12 w-full mx-auto ">
                    <h1 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ_s</h1>
                    <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 lg:mt-12 md:mt-10 mt-8 flex bg-white border border-gray-600 justify-between items-center px-4 py-3 w-full">
                        <input className="focus:outline-none font-normal text-xl leading-5 text-gray-600 bg-white placeholder-gray-600" type="text" placeholder="Search" />
                        <svg className="cursor-pointer" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            <path  d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className="lg:w-8/12 w-full mx-auto lg:mt-10 md:mt-12 md:mb-8 my-8">
                    {/* Question 1 */}
                    <div className="w-full md:px-6  ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button aria-label="toggler" onClick={() => setShow(1)} className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 1 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div className=" ">
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">Where is my order?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 1 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal lg:pl-20 md:pl-14 pl-0">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    {/* Question 2 */}
                    <hr className=" w-full lg:mt-10 my-8" />
                    <div className="w-full md:px-6 ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button aria-label="toggler" onClick={() => setShow(2)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 2 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div >
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">How can I exchange or return an item purchased online?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 2 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    {/* Question 3 */}
                    <hr className=" w-full lg:mt-10 my-8" />
                    <div className="w-full md:px-6 ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button aria-label="toggler" onClick={() => setShow(3)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 3 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div >
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">Can I cancel or change my Order?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 3 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    {/* Question 4 */}
                    <hr className=" w-full lg:mt-10 my-8" />
                    <div className="w-full md:px-6  ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button aria-label="toggler" onClick={() => setShow(4)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 4 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div >
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">I had a Promotion Code or Coupon that I wanted to use?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 4 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    {/* Question 5 */}
                    <hr className=" w-full lg:mt-10 my-8" />
                    <div className="w-full md:px-6 ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button aria-label="toggler" onClick={() => setShow(5)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 5 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div >
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">Can I still get my product during Covid-19?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 5 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    {/* Question 6 */}
                    <hr className=" w-full lg:mt-10 my-8" />
                    <div className="w-full md:px-6 ">
                        <div id="mainHeading" className="flex items-center w-full">
                            <button onClick={() => setShow(6)} aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:mr-6 mr-4" data-menu>
                                <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className={` ${show === 6 ? "hidden" : ""}`} d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div >
                                <p className="flex justify-center items-center font-medium text-base leading-7 md:leading-5 xl:leading-4 text-gray-800">How many collections come out every year?</p>
                            </div>
                        </div>
                        <div id="menu" className={` ${show === 6 ? "" : "hidden"} md:mt-9 mt-8 md:w-11/12 w-full`}>
                            <p className="text-base leading-6 text-gray-600 font-normal ">Remember you can query the status of your orders any time in My orders in that My account section. if you are not registered at Mango.com, you can access directly in the Orders section.</p>
                        </div>
                    </div>
                    <hr className=" w-full lg:mt-10 my-8" />
                </div>
            </div>
        </div>
    );
}
