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
const OrderSummary2 = () => {
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
      // console.log("OrderSummary2 config", config);
      // console.log("OrderSummary2 datasrc", datasrc);
      // console.log("OrderSummary2 otherattr", otherattr);
      // console.log("OrderSummary2 positionConfig", positionConfig);
    return (
        <div className="py-14 lg:px-20 md:px-6 px-4  px 2xl:container 2xl:mx-auto ">
            <div className="flex justify-center md:jusitfy-start items-center md:items-start w-full flex-col space-y-4">
                <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center text-gray-800">Payment Successful</h1>
                <p className="text-sm md:text-base text-center md:text-left leading-5 md:leading-6 text-gray-800">Thanks for making a purchase you can check our order summary from below</p>
            </div>
            <div className="border border-gray-200 mt-9">
                <div className="flex md:justify-between md:flex-row flex-col items-center py-6 md:py-9 px-4 md:px-8 border-gray-200 border-b">
                    <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2 md:space-y-4 ">
                        <p className="text-base leading-4">
                            Order: <span className="font-medium">#10234987 </span>
                        </p>
                        <p className="text-base leading-4">
                            Order Palcement: <span className="font-medium">18th March 2021</span>
                        </p>
                    </div>
                    <button className="hover:bg-black   mt-4 md:mt-0 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 leading-4 px-8 py-4 text-white bg-gray-800">Track Your Order</button>
                </div>

                <div className="flex justify-start md:justify-between items-start md:items-center md:flex-row flex-col xl:py-9 px-4 py-6 md:p-6 xl:px-8 md:space-x-6 xl:space-x-8 border-b border-gray-200">
                    <div className="w-full md:w-52">
                        <img className="w-full hidden md:block" src="https://i.ibb.co/rMJHxHD/Rectangle-10.png" alt="watch-1" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/JFk1h2F/Rectangle-10.png" alt="watch-1" />
                    </div>
                    <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 justify-items-between items-center w-full gap-x-20 xl:gap-x-8">
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-xl xl:text-2xl font-semibold leading-7 xl:leading-6 text-gray-800">Premium Quaility Dust Watch</p>
                            <p className="text-base leading-4 text-gray-600 mt-2 xl:mt-4">By: Dust Studios</p>
                            <div className="flex justify-start space-x-4 xl:space-x-8 items-center mt-10">
                                <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">Size: S</p>
                                <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">Qty: 1</p>
                                <p className="text-xl flex flex-shrink-0  font-semibold leading-5 text-gray-800">Price $80.00</p>
                            </div>
                        </div>
                        <div className="flex  space-y-10 xl:space-y-0 xl:space-x-10 2xl:space-x-36 xl:flex-row flex-col justify-between h-full 2xl:justify-start items-start xl:items-center">
                            <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                                <p className="text-base leading-4 text-gray-600">Status</p>
                                <p className="text-xl font-semibold leading-5 text-gray-600">Ready for Delivery</p>
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                                <p className="text-base leading-4 text-gray-600">Delivery Expected by</p>
                                <p className="text-xl font-semibold leading-5 text-gray-600">23rd March 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="
                flex justify-start md:justify-between items-start md:items-center md:flex-row flex-col xl:py-9 px-4 py-6 md:p-6 xl:px-8 md:space-x-6 xl:space-x-8 border-b border-gray-200"
                >
                    <div className="w-full md:w-52 ">
                        <img className="w-full hidden md:block" src="https://i.ibb.co/sPXPDZm/Rectangle-13.png" alt="watch-2" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/znqfzYw/Rectangle-10.png" alt="watch-2" />
                    </div>
                    <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-y-0 justify-items-between items-center w-full gap-x-20 xl:gap-x-8">
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-xl xl:text-2xl font-semibold leading-7 xl:leading-6 text-gray-800">Premium Quaility Hand Watch</p>
                            <p className="text-base leading-4 text-gray-600 mt-2 xl:mt-4">By: Dust Studios</p>
                            <div className="flex justify-start space-x-4 xl:space-x-8 items-center mt-10">
                                <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">Size: S</p>
                                <p className="text-base  flex flex-shrink-0 leading-4 text-gray-600">Qty: 1</p>
                                <p className="text-xl flex flex-shrink-0  font-semibold leading-5 text-gray-800">Price $120.00</p>
                            </div>
                        </div>
                        <div className="flex  space-y-10 xl:space-y-0 xl:space-x-10 2xl:space-x-36 xl:flex-row flex-col justify-between h-full 2xl:justify-start items-start xl:items-center">
                            <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                                <p className="text-base leading-4 text-gray-600">Status</p>
                                <p className="text-xl font-semibold leading-5 text-gray-600">Ready for Delivery</p>
                            </div>
                            <div className="flex flex-col justify-start items-start space-y-2 md:space-y-4">
                                <p className="text-base leading-4 text-gray-600">Delivery Expected by</p>
                                <p className="text-xl font-semibold leading-5 text-gray-600">23rd March 2021</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex md:flex-row flex-col-reverse justify-start items-center">
                    <button className="flex flex-shrink-0 hover:underline focus:underline  focus:outline-none justify-center items-center space-x-2 py-8 px-4 xl:px-12 border-t md:border-t-0 w-full md:w-auto md:border-r border-gray-200">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L4 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 4L12 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-base leading-4 text-gray-800">Cancel Order</p>
                    </button>
                    <div className="flex justify-between md:flex-row flex-col items-center w-full px-6 xl:px-8 py-8 ">
                        <p className="text-base leading-none">
                            Paid using credit card ending with <span className="font-semibold"> 8822</span>
                        </p>
                        <p className="text-lg leading-none mt-6 md:mt-0 text-gray-800">
                            Total Price: <span className="font-semibold">$200.00</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary2;
