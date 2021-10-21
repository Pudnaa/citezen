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


const Faq7 = () => {
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
    const [bgColor, setBgColor] = useState("General");
    const [dropDown, setDropDown] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    if (isEmpty(datasrc)) return null;
    // console.log("Faq7 config", config);
    // console.log("Faq7 datasrc", datasrc);
    // console.log("Faq7 otherattr", otherattr);
    // console.log("Faq7 positionConfig", positionConfig);


    const navColor = (value:any) => {
        setBgColor(value);
    };

    const dropDownMenu = () => setDropDown(!dropDown);

    return (
        <div className=" 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-12 px-4">
            <h1 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">Have a Question?</h1>

            <div className="focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 lg:w-96 w-full h-14 border border-gray-300 md:mt-10 mt-8 flex justify-between items-center md:py-5 md:px-6 py-5 px-4">
                <input className="focus:outline-none w-full font-normal text-lg leading-4 text-gray-600 placeholder-gray-600" type="text" placeholder="Search" />
                <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <div className="block sm:hidden w-full mt-8">
                <div onClick={dropDownMenu} className="py-4 px-6 text-white bg-gray-800 flex justify-between items-center w-full">
                    <p id="textClicked" className="focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        {bgColor}
                    </p>
                    <svg id="ArrowSVG" className={"transform " + (dropDown ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <ul id="list" className={"font-normal text-base leading-4 " + (dropDown ? "block" : "hidden")}>
                    <li onClick={() => navColor("General")} className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        General
                    </li>
                    <li onClick={() => navColor("Payments")} className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        Payments
                    </li>
                    <li onClick={() => navColor("Returns")} className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        Returns
                    </li>
                    <li onClick={() => navColor("Transaction")} className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        Transaction
                    </li>
                    <li onClick={() => navColor("Careers")} className="py-5 px-6 text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer ">
                        Careers
                    </li>
                </ul>
            </div>

            <ul className="hidden sm:flex flex-row lg:flex-wrap font-normal text-base leading-4 mt-8 ">
                <li onClick={() => navColor("General")} className={"py-5 lg:px-12 text-center sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " + (bgColor === "General" ? "bg-gray-800 text-white" : "bg-white text-gray-600")}>
                    General
                </li>
                <li onClick={() => navColor("Payments")} className={"py-5 lg:px-12 text-center sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " + (bgColor === "Payments" ? "bg-gray-800 text-white" : "bg-white text-gray-600")}>
                    Payments
                </li>
                <li onClick={() => navColor("Returns")} className={"py-5 lg:px-12 text-center sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " + (bgColor === "Returns" ? "bg-gray-800 text-white" : "bg-white text-gray-600")}>
                    Returns
                </li>
                <li onClick={() => navColor("Transaction")} className={"py-5 lg:px-12 text-center sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " + (bgColor === "Transaction" ? "bg-gray-800 text-white" : "bg-white text-gray-600")}>
                    Transaction
                </li>
                <li onClick={() => navColor("Careers")} className={"py-5 text-center lg:px-12 sm:w-full lg:w-auto border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer " + (bgColor === "Careers" ? "bg-gray-800 text-white" : "bg-white text-gray-600")}>
                    Careers
                </li>
            </ul>

            <div className=" xl:w-8/12 w-full mt-8">
                {/* <ul className=" lg:hidden sm:flex hidden flex-row text-center font-normal text-base leading-4 ">
					<li
						onclick="selected()"
						className="py-5   w-full text-white bg-gray-800 border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
					>
						General
					</li>
					<li
						onclick="selected()"
						className="py-5  w-full  text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
					>
						Payments
					</li>
					<li
						onclick="selected()"
						className="py-5  w-full  text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
					>
						Returns
					</li>
					<li
						onclick="selected()"
						className="py-5  w-full  text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
					>
						Transaction
					</li>
					<li
						onclick="selected()"
						className="py-5  w-full  text-gray-600 bg-white border border-gray-300 focus:outline-none hover:bg-gray-800 hover:text-white duration-100 cursor-pointer "
					>
						Careers
					</li>
				</ul> */}

                <div className="  lg:mt-12 md:mt-10 mt-8">
                    {/* <!-- Question 1 --> */}

                    <div className="w-full lg:px-4 ">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="pr-4">
                                <p className="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800">Where is my order?</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                                <svg className={"transform duration-100 " + (open ? "rotate-45" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                            <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            <br />
                            <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                        </div>
                    </div>

                    <hr className=" w-full my-8" />

                    {/* <!-- Question 2 --> */}

                    <div className="w-full lg:px-4 ">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="pr-4">
                                <p className="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800">How can I exchange or return an item purchased online?</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                                <svg className={" transform duration-100 " + (open2 ? "rotate-45" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                            <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            <br />
                            <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                        </div>
                    </div>

                    <hr className=" w-full my-8" />

                    {/* <!-- Question 3 --> */}

                    <div className="w-full lg:px-4 ">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="pr-4">
                                <p className="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800">Can I cancel or change my Order?</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                                <svg className={" transform duration-100 " + (open3 ? "rotate-45" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                            <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            <br />
                            <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                        </div>
                    </div>

                    <hr className=" w-full my-8" />

                    {/* <!-- Question 4 --> */}

                    <div className="w-full lg:px-4 ">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="pr-4">
                                <p className="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800">I had a Promotion Code or Coupon that I wanted to use</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                                <svg className={" transform duration-100 " + (open4 ? "rotate-45" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                            <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            <br />
                            <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                        </div>
                    </div>

                    <hr className=" w-full my-8" />

                    {/* <!-- Question 5 --> */}

                    <div className="w-full lg:px-4 ">
                        <div id="mainHeading" className="flex justify-between items-center w-full">
                            <div className="pr-4">
                                <p className="md:text-xl text-lg  font-medium leading-7 md:leading-5 text-gray-800">Can I still get my product during Covid-19?</p>
                            </div>
                            <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                                <svg className={" transform duration-100 " + (open5 ? "rotate-45" : "rotate-0")} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0008 2.92893V17.0711" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.92969 10H17.0718" stroke="#1F2937" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                            <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                            <br />
                            <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                        </div>
                    </div>

                    <hr className=" w-full my-8" />
                </div>
            </div>
        </div>
    );
};

export default Faq7;
