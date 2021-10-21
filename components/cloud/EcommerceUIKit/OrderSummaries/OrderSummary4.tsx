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

const OrderSummary4 = () => {
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
      // console.log("OrderSummary4 config", config);
      // console.log("OrderSummary4 datasrc", datasrc);
      // console.log("OrderSummary4 otherattr", otherattr);
      // console.log("OrderSummary4 positionConfig", positionConfig);
    return (
        <div className="py-14 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex flex-col xl:flex-row justify-center items-center w-full xl:space-x-8 space-y-8 md:space-y-10 xl:space-y-0">
                <div className="flex justify-center items-center w-full xl:w-8/12 flex-col space-y-4 md:space-y-8">
                    <div className="flex md:flex-row flex-col justify-start items-start md:items-center  border border-gray-200 w-full">
                        <div className="w-full md:w-52">
                            <img className="hidden md:block" src="https://i.ibb.co/wWp4m6W/Rectangle-8.png" alt="girl-in-red-dress" />
                            <img className="md:hidden w-full" src="https://i.ibb.co/CBjGYGJ/Rectangle-8.png" alt="girl-in-red-dress" />
                        </div>
                        <div className="flex justify-start items-start flex-col w-full p-4 md:px-8">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Premium Quaility Red Dress</h3>
                            <div className="flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-6 items-start mt-4 ">
                                <p className="text-sm leading-none text-gray-600">
                                    Style: <span className="text-gray-800"> Italic Minimal Design</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Size: <span className="text-gray-800"> Small</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Color: <span className="text-gray-800"> Red</span>
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-full mt-8">
                                <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 py-4 px-6 bg-gray-50 text-sm leading-none text-gray-600">
                                    Quantity: <span className="font-semibold text-gray-800">01</span>
                                </button>
                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start items-start md:items-center  border border-gray-200 w-full">
                        <div className="w-full md:w-52">
                            <img className="hidden md:block" src="https://i.ibb.co/3ftbsMT/Rectangle-8-1.png" alt="girl-in-yellow-dress" />
                            <img className="md:hidden w-full" src="https://i.ibb.co/Zxx0Zrq/Rectangle-8.png" alt="girl-in-yellow-dress" />
                        </div>
                        <div className="flex justify-start items-start flex-col w-full p-4 md:px-8">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Premium Quaility Yellow Dress</h3>
                            <div className="flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-6 items-start mt-4 ">
                                <p className="text-sm leading-none text-gray-600">
                                    Style: <span className="text-gray-800"> Italic Minimal Design</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Size: <span className="text-gray-800"> Small</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Color: <span className="text-gray-800"> Yellow</span>
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-full mt-8">
                                <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 py-4 px-6 bg-gray-50 text-sm leading-none text-gray-600">
                                    Quantity: <span className="font-semibold text-gray-800">01</span>
                                </button>
                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-row flex-col justify-start items-start md:items-center  border border-gray-200 w-full">
                        <div className="w-full md:w-52">
                            <img className="hidden md:block" src="https://i.ibb.co/C7M7Mvx/Rectangle-8-2.png" alt="girl-in-white-dress" />
                            <img className="md:hidden w-full" src="https://i.ibb.co/jh018zk/Rectangle-8.png" alt="girl-in-white-dress" />
                        </div>
                        <div className="flex justify-start items-start flex-col w-full p-4 md:px-8">
                            <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Premium Quaility White Dress</h3>
                            <div className="flex flex-col md:flex-row justify-start space-y-2 md:space-y-0 md:space-x-6 items-start mt-4 ">
                                <p className="text-sm leading-none text-gray-600">
                                    Style: <span className="text-gray-800"> Italic Minimal Design</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Size: <span className="text-gray-800"> Small</span>
                                </p>
                                <p className="text-sm leading-none text-gray-600">
                                    Color: <span className="text-gray-800"> White</span>
                                </p>
                            </div>
                            <div className="flex justify-between items-center w-full mt-8">
                                <button className="focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 py-4 px-6 bg-gray-50 text-sm leading-none text-gray-600">
                                    Quantity: <span className="font-semibold text-gray-800">01</span>
                                </button>
                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">$28.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-start flex-col items-start w-full xl:w-4/12 ">
                    <h3 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 w-full text-center md:text-left text-gray-800">Order Summary</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-start mt-8 xl:mt-10 xl:space-y-10 w-full space-y-8 md:space-y-0 md:space-x-24 xl:space-x-0 ">
                        <div className="flex justify-start items-start flex-col space-y-8 w-full md:w-auto lg:w-full">
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Billing Address</p>
                                <p className="text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                            </div>
                            <div className="flex jusitfy-start items-start flex-col space-y-2">
                                <p className="text-base font-semibold leading-4  text-gray-800">Shipping Address</p>
                                <p className="text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 w-full">
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">
                                        Discount <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">STUDENT</span>
                                    </p>
                                    <p className="text-base leading-4 text-gray-600">-$28.00 (50%)</p>
                                </div>
                                <div className="flex justify-between  w-full">
                                    <p className="text-base leading-4 text-gray-800">Shipping</p>
                                    <p className="text-base leading-4 text-gray-600">$8.00</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base font-semibold leading-4 text-gray-600">$36.00</p>
                            </div>
                            <div className="flex w-full md:w-8/12 lg:w-full justify-center items-center pt-1 md:pt-4  xl:pt-8 space-y-6 md:space-y-8 flex-col">
                                <button className="py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full text-base font-medium leading-4 text-white bg-gray-800 hover:bg-black">Track Your Order</button>
                                <p className="text-base leading-none text-gray-800">
                                    Paid using credit card ending with <span className="font-semibold">8822</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary4;
