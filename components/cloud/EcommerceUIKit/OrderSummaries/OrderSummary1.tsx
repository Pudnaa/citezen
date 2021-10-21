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

const OrderSummary1 = () => {
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
      // console.log("OrderSummary1 config", config);
      // console.log("OrderSummary1 datasrc", datasrc);
      // console.log("OrderSummary1 otherattr", otherattr);
      // console.log("OrderSummary1 positionConfig", positionConfig);
    return (
        <div className="lg:px-20 md:px-6 px-4 2xl:mx-auto 2xl:container py-14 flex justify-center items-center w-full flex-col">
            <div className="flex md:justify-start justify-center items-center sm:items-start w-full flex-col space-y-2 md:space-y-4 pb-6 md:pb-12 border-b border-gray-200">
                <p className="text-base font-medium leading-4 text-center text-gray-800">Thank You!</p>
                <h1 className="text-4xl font-semibold leading-9 text-center md:text-left text-gray-800">It’s on the way!</h1>
                <p className="text-sm leading-6 md:leading-4 text-center">
                    Your order with <span className="font-semibold">Tracking Number</span> #10234987 has shipped and will be with you soon.
                </p>
            </div>

            <div className="flex justify-between items-center w-full flex-col xl:space-y-4 py-8 border-b border-gray-200">
                <div className="flex  justify-start md:flex-row flex-col xl:justify-between md:space-x-6 xl:space-x-8 items-start  xl:items-center w-full">
                    <div className="w-full md:w-auto ">
                        <img className="hidden md:block" src="https://i.ibb.co/ZWB86H6/Rectangle-3.png" alt="girl with bear" />
                        <img className="md:hidden w-full" src="https://i.ibb.co/kGGBYby/Rectangle-3.png" alt="girl with bear" />
                    </div>
                    <div className="grid grid-cols-1 mt-6 md:mt-0 xl:grid-cols-2 justify-items-around xl:gap-x-8 w-full">
                        <div className="flex justify-start items-start flex-col space-y-4 ">
                            <p className="text-xl font-semibold leading-5 text-left text-gray-800">Sling Shot Bottle</p>
                            <p className="text-base leading-6 text-gray-600">This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. </p>
                            <div className="flex justify-center items-center ">
                                <div className="pr-4 border-r border-gray-200">
                                    <p className="text-sm leading-4 text-center">
                                        <span className="font-medium">Quantity </span> 01
                                    </p>
                                </div>
                                <div className="pl-4">
                                    <p className="text-sm leading-4 text-center">
                                        <span className="font-medium">Price </span> $32.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center flex-col md:flex-row w-full space-y-8 md:space-y-0 md:space-x-8 mt-6 xl:mt-0">
                            <div className="flex justify-start items-start flex-col space-y-4 w-full ">
                                <p className="text-base font-semibold leading-5 xl:leading-4 text-center text-gray-800">Shipping Address</p>
                                <p className=" text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                            </div>
                            <div className="flex justify-start items-start flex-col space-y-4 w-full ">
                                <p className="text-base font-semibold leading-5 xl:leading-4 text-center text-gray-800">Billing Address</p>
                                <p className=" text-sm leading-5 text-gray-600 w-full">180 North King Street, Northhampton MA 1060</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center w-full flex-col xl:space-y-4 py-8 border-b border-gray-200">
                <div className="flex  justify-start md:flex-row flex-col xl:justify-between md:space-x-6 xl:space-x-8 items-start  xl:items-center w-full">
                    <div className="w-full md:w-auto ">
                        <img className="md:block hidden" src="https://i.ibb.co/Y05W2yg/Rectangle-6.png" alt="bottle" />
                        <img className="md:hidden w-full" src="https://i.ibb.co/wRFxz3n/Rectangle-3.png" alt="bottle" />
                    </div>
                    <div className="grid grid-cols-1 mt-6 md:mt-0 xl:grid-cols-2 justify-items-around xl:gap-x-8 w-full">
                        <div className="flex justify-start items-start flex-col space-y-4 ">
                            <p className="text-xl font-semibold leading-5 text-left text-gray-800">Sling Shot Bottle</p>
                            <p className="text-base leading-6 text-gray-600">This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. </p>
                            <div className="flex justify-center items-center ">
                                <div className="pr-4 border-r border-gray-200">
                                    <p className="text-sm leading-4 text-center">
                                        <span className="font-medium">Quantity </span> 01
                                    </p>
                                </div>
                                <div className="pl-4">
                                    <p className="text-sm leading-4 text-center">
                                        <span className="font-medium">Price </span> $20.00
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-start items-center flex-col md:flex-row w-full space-y-8 md:space-y-0 md:space-x-8 mt-6 xl:mt-0">
                            <div className="flex justify-start items-start flex-col space-y-4 w-full ">
                                <p className="text-base font-semibold leading-5 xl:leading-4 text-center text-gray-800">Shipping Address</p>
                                <p className=" text-sm leading-5 text-gray-600">180 North King Street, Northhampton MA 1060</p>
                            </div>
                            <div className="flex justify-start items-start flex-col space-y-4 w-full ">
                                <p className="text-base font-semibold leading-5 xl:leading-4 text-center text-gray-800">Billing Address</p>
                                <p className=" text-sm leading-5 text-gray-600 w-full">180 North King Street, Northhampton MA 1060</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-gray-50 w-full py-8 md:py-16 xl:py-12 md:px-24 px-4  xl:px-28 flex flex-col xl:flex-row justify-center items-center space-y-8 md:space-y-16 xl:space-y-0 xl:space-x-36 mt-8">
                <div className="flex justify-between space-y-6 md:space-y-0 md:flex-row flex-col xl:justify-center w-full xl:w-auto items-center md:space-x-36">
                    <div className="w-full md:w-40 flex justify-start items-start flex-col space-y-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.33341 25.3333C10.8062 25.3333 12.0001 24.1394 12.0001 22.6667C12.0001 21.1939 10.8062 20 9.33341 20C7.86066 20 6.66675 21.1939 6.66675 22.6667C6.66675 24.1394 7.86066 25.3333 9.33341 25.3333Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.6667 25.3333C24.1394 25.3333 25.3333 24.1394 25.3333 22.6667C25.3333 21.1939 24.1394 20 22.6667 20C21.1939 20 20 21.1939 20 22.6667C20 24.1394 21.1939 25.3333 22.6667 25.3333Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66675 22.6666H4.00008V17.3333M2.66675 6.66663H17.3334V22.6666M12.0001 22.6666H20.0001M25.3334 22.6666H28.0001V14.6666M28.0001 14.6666H17.3334M28.0001 14.6666L24.0001 7.99996H17.3334" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12H9.33333" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-lg font-semibold leading-4 text-center text-gray-800">Shipping Method</h3>
                        <p className=" text-base leading-6 text-gray-600">DHL - Takes up to 3 working days</p>
                    </div>
                    <div className="w-full md:w-40 flex justify-start items-start flex-col space-y-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 6.66663H8C5.79086 6.66663 4 8.45749 4 10.6666V21.3333C4 23.5424 5.79086 25.3333 8 25.3333H24C26.2091 25.3333 28 23.5424 28 21.3333V10.6666C28 8.45749 26.2091 6.66663 24 6.66663Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 13.3334H28" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33325 20H9.34659" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14.6667 20H17.3334" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3 className="text-lg font-semibold leading-4 text-center text-gray-800">Payment Method</h3>
                        <p className=" text-base leading-6 text-gray-600">Apply Pay Mastercard ****1433</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full xl:w-96 flex-col">
                    <div className="pb-4 border-b border-gray-200 flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-center text-gray-800">Subtotal</p>
                        <p className="text-base leading-4 text-center text-gray-600">$56.00</p>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-center text-gray-800">Discount</p>
                        <p className="text-base leading-4 text-center text-gray-600">-$28.00(50%)</p>
                    </div>
                    <div className="py-4 border-b border-gray-200 flex justify-between items-center w-full">
                        <p className="text-base leading-4 text-center text-gray-800">Shipping</p>
                        <p className="text-base leading-4 text-center text-gray-600">$8.00</p>
                    </div>
                    <div className="pt-4  flex justify-between items-center w-full">
                        <p className="text-base font-semibold leading-4 text-center text-gray-800">Total</p>
                        <p className="text-base font-semibold leading-4 text-center text-gray-600">$36.00</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 flex md:justify-end items-center justify-center md:items-end">
                <a href="/" className="text-base leading-6  border-b border-transparent focus:border-gray-800 hover:border-gray-800 focus:outline-none text-gray-800">
                    Continue Shopping
                </a>
            </div>
        </div>
    );
};

export default OrderSummary1;
