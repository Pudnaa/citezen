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

export default function Faq5() {
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
      // console.log("Faq5 config", config);
      // console.log("Faq5 datasrc", datasrc);
      // console.log("Faq5 otherattr", otherattr);
      // console.log("Faq5 positionConfig", positionConfig);
    return (
        <div>
            <div className=" 2xl:container 2xl:mx-auto relative">
                <div className=" w-full h-full bg-black bg-opacity-30 absolute top-0 left-0 text-center">
                    <div className=" w-full h-full flex justify-center items-center flex-col">
                        <h1 className="lg:text-4xl text-3xl lg:leading-9 leading-7 text-white font-semibold">FAQs</h1>
                        <p className=" font-medium md:text-xl md:leading-5 text-lg leading-7 text-white mt-8 sm:w-full w-9/12 ">Find Answers to Frequently Asked Questions</p>
                    </div>
                </div>
                <img className=" lg:block hidden w-full" src="https://i.ibb.co/vzV3ZG5/Rectangle-6-8.png" alt="Image with ladies bag and accessories" />
                <img className=" lg:hidden sm:block hidden w-full" src="https://i.ibb.co/TmrtnBV/Rectangle-6-7.png" alt="Image with ladies bag and accessories" />
                <img className=" block sm:hidden w-full" src="https://i.ibb.co/dmTNcWD/img.png" alt="Image with ladies bag and accessories" />
            </div>
            <div className=" 2xl:w-5/12 lg:mx-auto lg:w-7/12 w-full md:py-12 md:px-6 py-12 px-4">
                <div>
                    <h2 className=" font-medium md:text-2xl md:leading-6 text-xl leading-7 text-gray-800">How long does it take for my package to arrive?</h2>
                    <div className=" md:mt-6 mt-4">
                        <p className=" font-normal text-base leading-6 text-gray-600">For sterling silver items, your order will be delivered within 7 to 10 business days, including production and delivery, after you place an order.</p>
                        <br />
                        <p className=" font-normal text-base leading-6 text-gray-600">For sold gold items, your order will be delivered within 10 to 15 business days, including production andelivery, after you plance an order</p>
                    </div>
                </div>
                {/* Question 2 */}
                <hr className=" w-full my-8" />
                <div>
                    <h2 className=" font-medium md:text-2xl md:leading-6 text-xl leading-7 text-gray-800">Where is my order?</h2>
                    <div className=" md:mt-6 mt-4">
                        <p className=" font-normal text-base leading-6 text-gray-600">Remember you can query the status of your orders anytime in My orders in the My account section. if you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your email address and order number.</p>
                        <br />
                        <p className=" font-normal text-base leading-6 text-gray-600">What is more, when your order leaves our wharehouses, we will send you an e-mail.</p>
                    </div>
                </div>
                {/* Question 3 */}
                <hr className=" w-full my-8" />
                <div>
                    <h2 className=" font-medium md:text-2xl md:leading-6 text-xl leading-7 text-gray-800">Can i cancel or change my Order?</h2>
                    <div className=" md:mt-6 mt-4">
                        <p className=" font-normal text-base leading-6 text-gray-600">Yes, you can change or cancel your order within the first 10 days of your order placement</p>
                    </div>
                </div>
                <hr className=" w-full my-8" />
            </div>
        </div>
    );
}
