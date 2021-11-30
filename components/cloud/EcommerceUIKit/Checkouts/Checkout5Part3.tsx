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
export default function Checkout5Part3() {
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
  const [dropdown1, setDropdown1] = useState(false);
  const [changeText1, setChangeText1] = useState("Expiry Date");
  if (isEmpty(datasrc)) return null;
  // console.log("Checkout5Part3 config", config);
  // console.log("Checkout5Part3 datasrc", datasrc);
  // console.log("Checkout5Part3 otherattr", otherattr);
  // console.log("Checkout5Part3 positionConfig", positionConfig);

  const HandleText1 = (e: any) => {
    setChangeText1(e);
    setDropdown1(false);
  };
  const item = datasrc[0];
  return (
    <div>
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div>
              <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                Check out
              </p>
            </div>
            <div className="mt-2">
              <a
                href="javascript:void(0)"
                className="focus:outline-none  focus:text-gray-500 text-base leading-4 underline  hover:text-gray-800 text-gray-600"
              >
                Back to my bag
              </a>
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Payment Method
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <div className="flex justify-start items-center flex-row space-x-8">
                <div className="flex items-center space-x-2 ">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      aria-labelledby="label2"
                      type="radio"
                      name="radio"
                      className=" focus:outline-none focus:ring-2 focus:ring-gray-500 checkbox appearance-none focus:opacity-100  focus:border-gray-400  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                    />
                    <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1" />
                  </div>
                  <label
                    id="label2"
                    className="text-base leading-normal md:leading-4 text-gray-600"
                  >
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2 ">
                  <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative">
                    <input
                      aria-labelledby="label2"
                      type="radio"
                      name="radio"
                      className=" focus:outline-none focus:ring-2 focus:ring-gray-500 checkbox appearance-none focus:opacity-100  focus:border-gray-400  border rounded-full border-gray-400 absolute cursor-pointer w-full h-full checked:border-none"
                    />
                    <div className="check-icon hidden border-4 border-gray-100 bg-gray-800 rounded-full w-full h-full z-1" />
                  </div>
                  <label
                    id="label2"
                    className="text-base leading-normal md:leading-4 text-gray-600"
                  >
                    Paypal
                  </label>
                </div>
              </div>
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500  border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Name of Card"
              />
              <input
                className="px-2  focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Card Number"
              />
              <div className="relative w-full">
                <p
                  id="button1"
                  className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                >
                  {changeText1}
                </p>
                <button
                  onClick={() => setDropdown1(!dropdown1)}
                  className="focus:outline-none  focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-3 right-0"
                >
                  <svg
                    id="close"
                    className={` transform ${dropdown1 ? "rotate-180" : ""} `}
                    width={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6L8 10L4 6"
                      stroke="#4B5563"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute z-10 bg-white top-10  w-full mt-3 ${
                    dropdown1 ? "" : "hidden"
                  } `}
                >
                  <div className="flex flex-col  w-full">
                    <p
                      tabIndex={0}
                      onClick={() => HandleText1(" 30-Dec-2021")}
                      className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                    >
                      30-Dec-2021
                    </p>
                    <p
                      tabIndex={0}
                      onClick={() => HandleText1("01-Jan-2022")}
                      className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                    >
                      01-Jan-2022
                    </p>
                    <p
                      tabIndex={0}
                      onClick={() => HandleText1("02-March-2022")}
                      className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                    >
                      02-March-2022
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="CVC"
              />
            </div>
            <button className="mt-8 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 leading-4 py-4 w-full md:w-4/12 lg:w-full hover:bg-black text-white bg-gray-800">
              Complete Purchase
            </button>
          </div>
          <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
            <div>
              <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                Order Summary
              </h1>
            </div>
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total items</p>
                <AtomText
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName="text-lg font-semibold leading-4 text-gray-600"
                />
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-lg font-semibold leading-4 text-gray-600"
                />
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">
                  Shipping charges
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $90
                </p>
              </div>
              <div className="flex justify-between w-full items-center">
                <p className="text-lg leading-4 text-gray-600">Sub total </p>
                <p className="text-lg font-semibold leading-4 text-gray-600">
                  $3520
                </p>
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-32">
              <p className="text-xl font-semibold leading-4 text-gray-800">
                Estimated Total{" "}
              </p>
              <p className="text-lg font-semibold leading-4 text-gray-800">
                $2900
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }
        
        `}
      </style>
    </div>
  );
}
