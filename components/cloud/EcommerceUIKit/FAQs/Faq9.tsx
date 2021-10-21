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

const Faq9 = () => {
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
    const [open, setOpen] = useState(true);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    if (isEmpty(datasrc)) return null;
    // console.log("Faq9 config", config);
    // console.log("Faq9 datasrc", datasrc);
    // console.log("Faq9 otherattr", otherattr);
    // console.log("Faq9 positionConfig", positionConfig);

    return (
        <div className=" 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ_s</h1>

            <div className=" lg:pt-12 md:pt-10 pt-8 flex md:flex-row flex-col lg:gap-8 md:gap-4 gap-12">
                <div className="lg:w-3/12 md:w-5/12 w-full flex gap-6 flex-col">
                    <h3 className=" uppercase text-base leading-4 font-medium text-gray-600">categories</h3>
                    <hr className=" w-full lg:my-2 my-1" />
                    <div className="w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className={"text-base leading-4 text-gray-800 uppercase cursor-pointer " + (open ? "font-semibold" : "font-normal")}>our online store (1)</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                                <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer">Where is my order?</p>
                        </div>
                    </div>

                    {/* <!-- Your Account Section --> */}

                    <div className="w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className={"text-base leading-4 text-gray-800 uppercase cursor-pointer " + (open2 ? "font-semibold" : "font-normal")}>your account (10)</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                                <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer">I don_t remember my Password, how to restore it?</p>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 mt-4 hover:underline cursor-pointer">How we can get our account status approved?</p>
                        </div>
                    </div>

                    {/* <!-- Our products Section --> */}

                    <div className="w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className={"text-base leading-4 text-gray-800 uppercase cursor-pointer " + (open3 ? "font-semibold" : "font-normal")}>our products (6)</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                                <svg className={"transform " + (open3 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open3 ? " block" : "hidden")}>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer">Where is my order?</p>
                        </div>
                    </div>

                    {/* <!-- Customer Service Section --> */}

                    <div className="w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className={"text-base leading-4 text-gray-800 uppercase cursor-pointer " + (open4 ? "font-semibold" : "font-normal")}>Customer Service (3)</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                                <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer">Where is my order?</p>
                        </div>
                    </div>

                    {/* <!-- Referal program section --> */}

                    <div className="w-full ">
                        <div className="flex justify-between items-center w-full">
                            <div>
                                <p className={"text-base leading-4 text-gray-800 uppercase cursor-pointer " + (open5 ? "font-semibold" : "font-normal")}>referral program (8)</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                                <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                            <p className="text-sm leading-3 text-gray-600 font-normal pl-8 hover:underline cursor-pointer">Where is my order?</p>
                        </div>
                    </div>

                    <hr className=" w-full lg:my-2 my-1" />
                </div>
                <div className="lg:w-9/12 md:w-7/12 w-full">
                    <div>
                        <h2 className=" uppercase lg:text-2xl text-xl lg:leading-6 leading-5 font-normal text-gray-900">our online store</h2>
                        <hr className=" w-full mt-6" />

                        <div className=" mt-6">
                            <h3 className=" font-medium text-base leading-4 text-gray-800">Where is my order?</h3>
                            <div className=" py-4 lg:w-10/12 w-full">
                                <p className="font-normal text-sm leading-5 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                                <br />
                                <p className="font-normal text-sm leading-5 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                            </div>
                        </div>
                    </div>

                    <div className=" mt-8">
                        <h2 className=" uppercase lg:text-2xl text-xl lg:leading-6 leading-5 font-normal text-gray-900">your account (10)</h2>
                        <hr className=" w-full mt-6" />

                        <div className=" mt-6">
                            <h3 className=" font-medium text-base leading-4 text-gray-800">I don_t remember my Password, how to restore it?</h3>
                            <div className=" py-4 lg:w-10/12 w-full">
                                <p className="  font-normal text-sm leading-5 text-gray-600">For sterling silver items, your order will be delivered within 7 to 10 business days, including production and delivery, after you place an order.</p>
                                <br />
                                <p className="   font-normal text-sm leading-5 text-gray-600">For sold gold items, your order will be delivered within 10 to 15 business days, including production and delivery, after you place an order</p>
                            </div>
                        </div>

                        <div className=" mt-10">
                            <h3 className=" font-medium text-base leading-4 text-gray-800">How we can get our account status approved?</h3>
                            <div className=" py-4 lg:w-10/12 w-full">
                                <p className="  font-normal text-sm leading-5 text-gray-600">Yes, you can change or cancel your order within the first 10 days of your order placement.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq9;
