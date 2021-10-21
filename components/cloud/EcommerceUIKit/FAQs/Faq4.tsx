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

export default function Faq4() {
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
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);

    if (isEmpty(datasrc)) return null;
    // console.log("Faq4 config", config);
    // console.log("Faq4 datasrc", datasrc);
    // console.log("Faq4 otherattr", otherattr);
    // console.log("Faq4 positionConfig", positionConfig);

    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 px-4 py-16 flex justify-center items-center w-full flex-col space-y-12">
                <div className="w-full flex justify-start items-start text-left">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Frequently Asked Questions</h1>
                </div>
                <div className="flex xl:flex-row flex-col justify-center items-start w-full xl:space-x-8 space-y-14 xl:space-y-0">
                    <div className="flex justify-start item-center w-full xl:w-8/12 flex-col space-y-6 md:space-y-8">
                        <div id="change1" className={`flex justify-start flex-col item-start p-6 md:p-8 w-full space-y-7  border border-gray-200 ${show1 ? "bg-gray-50" : ""} `}>
                            <div className="flex justify-between items-center w-full">
                                <div>
                                    <h2 className="text-xl font-medium leading-5 text-gray-800">Where is my order?</h2>
                                </div>
                                <button onClick={() => setShow1(!show1)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " data-menu aria-label="open and close">
                                    <svg id="open1" className={` ${show1 ? "hidden" : ""} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 5L15 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg id="close1" className={` ${show1 ? "" : "hidden"} `} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu1" className={`text-base leading-6 text-gray-600 ${show1 ? "hidden" : ""} `}>
                                <p>Remeber you can query the staus of your oders any time in My orders in the My aacount section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
                                <br />
                                <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                        <div id="change2" className={`flex justify-start flex-col item-start p-6 md:p-8 w-full space-y-7  border border-gray-200 ${show2 ? "" : "bg-gray-50"}`}>
                            <div className="flex justify-between items-center w-full space-x-7">
                                <div>
                                    <h2 className="text-xl font-medium leading-7 md:leading-5 text-gray-800">How can I exchange or return an item purchased online?</h2>
                                </div>
                                <button onClick={() => setShow2(!show2)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " data-menu aria-label="open and close">
                                    <svg id="open2" className={` ${show2 ? "" : "hidden"} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 5L15 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg id="close2" className={` ${show2 ? "hidden" : ""} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu2" className={`text-base leading-6 text-gray-600 ${show2 ? "" : "hidden"} `}>
                                <p>Remeber you can query the staus of your oders any time in My orders in the My aacount section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
                                <br />
                                <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                        <div id="change3" className={`flex justify-start flex-col item-start p-6 md:p-8 w-full space-y-7  border border-gray-200 ${show3 ? "" : "bg-gray-50"}`}>
                            <div className="flex justify-between items-center w-full space-x-7">
                                <div>
                                    <h2 className="text-xl font-medium leading-7 md:leading-5 text-gray-800">Can I cancel or change my Order?</h2>
                                </div>
                                <button onClick={() => setShow3(!show3)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " data-menu aria-label="open and close">
                                    <svg id="open2" className={` ${show3 ? "" : "hidden"} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 5L15 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg id="close2" className={` ${show3 ? "hidden" : ""} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu3" className={`text-base leading-6 text-gray-600 ${show3 ? "" : "hidden"} `}>
                                <p>Remeber you can query the staus of your oders any time in My orders in the My aacount section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
                                <br />
                                <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                        <div id="change4" className={`flex justify-start flex-col item-start p-6 md:p-8 w-full space-y-7  border border-gray-200 ${show4 ? "" : "bg-gray-50"}`}>
                            <div className="flex justify-between items-center w-full space-x-7">
                                <div>
                                    <h2 className="text-xl font-medium leading-7 md:leading-5 text-gray-800">I had a Promotiona Code or Coupon that I wanted to use</h2>
                                </div>
                                <button onClick={() => setShow4(!show4)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " data-menu aria-label="open and close">
                                    <svg id="open2" className={` ${show4 ? "" : "hidden"} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 5L15 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg id="close2" className={` ${show4 ? "hidden" : ""} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu4" className={`text-base leading-6 text-gray-600 ${show4 ? "" : "hidden"} `}>
                                <p>Remeber you can query the staus of your oders any time in My orders in the My aacount section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
                                <br />
                                <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                        <div id="change5" className={`flex justify-start flex-col item-start p-6 md:p-8 w-full space-y-7  border border-gray-200 ${show5 ? "" : "bg-gray-50"}`}>
                            <div className="flex justify-between items-center w-full space-x-7">
                                <div>
                                    <h2 className="text-xl font-medium leading-7 md:leading-5 text-gray-800">Can I still get my product during Covid-19?</h2>
                                </div>
                                <button onClick={() => setShow5(!show5)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 " data-menu aria-label="open and close">
                                    <svg id="open2" className={` ${show5 ? "" : "hidden"} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 5L5 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5 5L15 15" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <svg id="close2" className={` ${show5 ? "hidden" : ""} `} width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div id="menu5" className={`text-base leading-6 text-gray-600 ${show5 ? "" : "hidden"} `}>
                                <p>Remeber you can query the staus of your oders any time in My orders in the My aacount section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your em-mail address and order number.</p>
                                <br />
                                <p>What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full xl:w-4/12 flex-col justify-start items-start space-y-12">
                        <div className="flex justify-start items-start flex-col">
                            <p className="text-lg md:text-2xl font-semibold leading-7 md:leading-6 text-gray-800">Note:</p>
                            <p className="mt-4 text-base leading-6 text-gray-600">During the Covid-19 the delivery time may vary from country to country &amp; can be delayed by a few days.</p>
                        </div>
                        <div className="flex justify-start items-start flex-col">
                            <p className="text-lg md:text-2xl font-semibold leading-7 md:leading-6 text-gray-800">Contact Us</p>
                            <div className="mt-4 flex justify-center items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <p className="cursor-pointer text-base leading-6 text-gray-600">+44 20 8038 1898</p>
                            </div>
                            <p className="mt-4 text-base leading-6 text-gray-600">Will Open from Monday to Friday From 09:00 AM to 05:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
