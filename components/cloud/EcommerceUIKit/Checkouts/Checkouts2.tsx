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

const Checkouts2 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Checkouts2 config", config);
  // console.log("Checkouts2 readyDatasrc", readyDatasrc);
  // console.log("Checkouts2 widgetnemgooReady", widgetnemgooReady);
  // console.log("Checkouts2 positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="py-16 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex flex-col justify-start items-start space-y-3">
          <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">
            Shipping Information
          </p>
          <p className="text-base leading-4 text-gray-600">
            Home {">"} {renderPositionType(item, "position45", positionConfig)}{" "}
            {">"}
            {renderPositionType(item, "position46", positionConfig)} {">"} Cart{" "}
            {">"} Checkout
          </p>
        </div>

        <div className="p-4 md:p-6 xl:p-10 bg-gray-100 w-full flex flex-col justify-start items-start">
          <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
            Personal Details
          </p>
          <div className="w-full md:w-11/12 xl:w-6/12 flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-10">
              <div className="flex flex-col justify-start items-start w-full">
                <p className="text-base leading-4 text-gray-800">First Name</p>
                <input
                  className="mt-2 bg-white border rounded border-gray-300 w-full p-4 placeholder-gray-600 text-base leading-4 text-gray-600"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full">
                <p className="text-base leading-4 text-gray-800">Last Name</p>
                <input
                  className="mt-2 bg-white border rounded border-gray-300 w-full p-4 placeholder-gray-600 text-base leading-4 text-gray-600"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-10">
              <div className="flex flex-col justify-start items-start w-full">
                <p className="text-base leading-4 text-gray-800">Phone</p>
                <input
                  className="mt-2 bg-white border rounded border-gray-300 w-full p-4 placeholder-gray-600 text-base leading-4 text-gray-600"
                  type="text"
                  placeholder="Phone"
                />
              </div>
              <div className="flex flex-col justify-start items-start w-full">
                <p className="text-base leading-4 text-gray-800">Email</p>
                <input
                  className="mt-2 bg-white border rounded border-gray-300 w-full p-4 placeholder-gray-600 text-base leading-4 text-gray-600"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full space-y-6 md:space-y-0 md:space-x-10">
              <div className="flex flex-col justify-start items-start w-full">
                <p className="text-base leading-4 text-gray-800">Address</p>
                <input
                  className="mt-2 bg-white border rounded border-gray-300 w-full p-4 placeholder-gray-600 text-base leading-4 text-gray-600"
                  type="text"
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 xl:p-10 bg-gray-100 w-full flex flex-col justify-start items-start">
          <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
            Shipping Method
          </p>
          <div className="flex justify-start items-start flex-col mt-9 space-y-4 md:space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="text-base leading-normal md:leading-4 text-gray-800"
              >
                Regular Delivery(Free - 5 business days)
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="text-base leading-normal md:leading-4 text-gray-800"
              >
                Express Delivery( $10 - 3 business days)
              </label>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex shrink-0 justify-center items-center relative">
                <input
                  aria-labelledby="label2"
                  type="radio"
                  name="radio"
                  className="checkbox appearance-none focus:opacity-100 focus:border-gray-400 border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                />
                <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1"></div>
              </div>
              <label
                id="label2"
                className="text-base leading-normal md:leading-4 text-gray-800"
              >
                Express Delivery( $50 - 1 business days)
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center lg:justify-end lg:items-end w-full">
          <div className="flex flex-col-reverse  md:flex-row space-y-4 lg:space-y-0 md:space-x-6 w-full md:w-auto">
            <button className="mt-4 lg:mt-0 w-full lg:w-auto py-4 px-8 border border-gray-800 text-lg font-medium leading-5 text-gray-800 hover:text-gray-600">
              Go back
            </button>
            <button className="w-full lg:w-auto py-4 px-8 border border-gray-800 text-lg font-medium leading-5 bg-gray-800 text-white hover:bg-gray-900">
              Continue
            </button>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};

export default Checkouts2;
