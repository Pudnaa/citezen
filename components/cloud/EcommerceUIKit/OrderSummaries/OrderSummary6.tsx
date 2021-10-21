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

const OrderSummary6 = () => {
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
      // console.log("OrderSummary6 config", config);
      // console.log("OrderSummary6 datasrc", datasrc);
      // console.log("OrderSummary6 otherattr", otherattr);
      // console.log("OrderSummary6 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-4 py-14">
            <div className="flex flex-col justify-start items-start w-full">
                <p className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-center text-gray-800">Your Orders</p>
                <p className="mt-4 text-base leading-6 md:leading-4 text-gray-800">Check the status of recent orders, manage returns, and discover similar products.</p>
                <div className="mt-8 md:mt-10 flex flex-col md:flex-row jusitfy-between space-y-4 md:space-y-0 items-start w-full">
                    <p className="text-lg leading-4 text-gray-800  w-4/12">
                        Order: <span className="font-semibold"> #8564</span>
                    </p>
                    <div className="flex justify-between md:flex-row flex-col space-y-4 md:space-y-0 md:items-center w-full xl:w-8/12">
                        <p className="text-lg leading-4  flex flex-shrink-0  text-gray-800">
                            Ordered on <span className="ml-1 font-semibold"> Sunday 21 March, 2021</span>
                        </p>
                        <p className="text-lg leading-4 flex flex-shrink-0   text-gray-800">
                            Total Amount: <span className="ml-1 font-semibold"> $160.00</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full  border border-gray-200 mt-6">
                <div className="flex flex-col md:flex-row jusitfy-center items-start p-4 md:p-6 xl:p-8 md:space-x-6 xl:space-x-8 border-b border-gray-200">
                    <div className="w-full md:w-80 xl:w-52">
                        <img className="hidden md:block" src="https://i.ibb.co/28KSn6j/Rectangle-259.png" alt="watch-1" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/gWYzcXR/Rectangle-259.png" alt="watch-1" />
                    </div>
                    <div className="flex justify-start items-center w-full">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 ">
                            <p className="text-xl mt-4 md:mt-0 xl:text-2xl font-semibold leading-7 text-gray-800">Premium Leather Wrist Watch</p>
                            <div className="flex justify-between xl:flex-row flex-col items-start w-full">
                                <div className="flex flex-col jusitfy-start items-start space-y-4">
                                    <p className="text-lg leading-4 text-gray-800">
                                        Color: <span className="font-semibold">Black</span>
                                    </p>
                                    <p className="text-xl font-semibold leading-5 text-gray-800">$80.00</p>
                                </div>
                                <div className="flex justify-end items-end flex-col space-y-4 md:space-y-0 md:flex-row xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4 w-full md:w-96 mt-4 md:mt-12 xl:mt-0 xl:w-60 ">
                                    <button className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base py-5 w-full border border-gray-800 font-medium leading-4 text-gray-800 hover:bg-gray-300 ">View Details</button>
                                    <button className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base py-5 w-full border border-gray-800 font-medium leading-4 bg-gray-800 text-white hover:bg-black ">Track Your Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row jusitfy-center items-start p-4 md:p-6 xl:p-8 md:space-x-6 xl:space-x-8 border-b border-gray-200">
                    <div className="w-full md:w-80 xl:w-52">
                        <img className="md:block hidden" src="https://i.ibb.co/sWDK4xw/Rectangle-260.png" alt="watch-2" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/LC3mGmp/Rectangle-260.png" alt="watch-2" />
                    </div>
                    <div className="flex justify-start items-center w-full">
                        <div className="flex flex-col justify-start items-start w-full space-y-4 ">
                            <p className="text-xl mt-4 md:mt-0 xl:text-2xl font-semibold leading-7 text-gray-800">Premium Leather Wrist Watch</p>
                            <div className="flex justify-between xl:flex-row flex-col items-start w-full">
                                <div className="flex flex-col jusitfy-start items-start space-y-4">
                                    <p className="text-lg leading-4 text-gray-800">
                                        Color: <span className="font-semibold">Black</span>
                                    </p>
                                    <p className="text-xl font-semibold leading-5 text-gray-800">$80.00</p>
                                </div>
                                <div className="flex justify-end items-end flex-col space-y-4 md:space-y-0 md:flex-row xl:flex-col space-x-4 xl:space-x-0 xl:space-y-4 w-full md:w-96 mt-4 md:mt-12 xl:mt-0 xl:w-60 ">
                                    <button className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base py-5 w-full border border-gray-800 font-medium leading-4 text-gray-800 hover:bg-gray-300 ">View Details</button>
                                    <button className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base py-5 w-full border border-gray-800 font-medium leading-4 bg-gray-800 text-white hover:bg-black ">Track Your Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between flex-col w-full items-center bg-gray-50 border border-gray-100 p-4 md:p-6 xl:p-8">
                <div className="mb-8 w-full flex justify-between items-end space-x-20 xl:space-x-52">
                    <div className="flex w-38 flex-shrink-0 flex-row justify-start items-center space-x-4">
                        <p className="text-xl font-medium leading-5 text-gray-600">Order Placed</p>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 19.9937C15.5228 19.9937 20 15.5195 20 10.0003C20 4.48105 15.5228 0.00683594 10 0.00683594C4.47715 0.00683594 0 4.48105 0 10.0003C0 15.5195 4.47715 19.9937 10 19.9937Z" fill="#34D399" />
                            <path d="M9.19834 15.3155L4.47021 11.632L5.81459 9.90672L8.71803 12.1686L13.5099 5.25391L15.308 6.49953L9.19834 15.3155Z" fill="white" />
                        </svg>
                    </div>
                    <div className="hidden md:flex w-full flex-row justify-start items-center space-x-4">
                        <p className="text-xl font-medium leading-5 text-gray-600">Dispatched</p>
                    </div>
                    <div className="hidden w-full md:flex flex-row justify-start items-center space-x-4">
                        <p className="text-xl font-medium leading-5 text-gray-600">Shipped</p>
                    </div>
                    <div className="hidden md:flex w-full flex-row justify-start items-center space-x-4">
                        <p className="text-xl font-medium leading-5 text-gray-600">Delivered</p>
                    </div>
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-52 xl:w-72 rounded-full h-2 bg-gray-800"></div>
                    <div className="w-full  rounded-full h-2 bg-gray-200"></div>
                </div>
                <div className="mt-8 flex justify-start w-full">
                    <p className="text-base leading-6 md:leading-4">
                        Preparing to ship on <span className="font-semibold">Monday 24 March 2021</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary6;
