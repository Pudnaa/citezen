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

const Checkouts4 = () => {
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
  const countries = ["China", "Russia", "UK"];
  const [menu, setMenu] = useState(false);
  const [country, setCountry] = useState("United States");

  if (isEmpty(datasrc)) return null;
  // console.log("Checkouts4 config", config);
  console.log("Checkouts4 datasrc", datasrc);
  // console.log("Checkouts4 otherattr", otherattr);
  console.log("Checkouts4 positionConfig", positionConfig);

  const changeText = (e: any) => {
    setMenu(false);
    setCountry(e.target.textContent);
  };
  return (
    <div className="">
      <div className="hidden absolute w-full h-full bg-black bg-opacity-60"></div>
      <div className="relative left-0 right-0 lg:h-auto h-auto flex md:justify-end lg:flex-row flex-col md:w-11/12 lg:w-full md:ml-auto">
        <div className="lg:w-7/12 lg:h-full md:h-auto h-auto">
          <div className="bg-white h-auto  lg:px-10 p-6 lg:py-12">
            <p>
              <svg
                className="inline"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 1L1 5L5 9"
                  stroke="#4B5563"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="cursor-pointer text-gray-500 font-normal text-base leading-4 ml-2.5">
                Back
              </span>
            </p>
            <h3 className="font-semibold text-gray-800 lg:text-4xl text-3xl leading-7 lg:leading-9 mt-2">
              Checkout
            </h3>

            <div className="mt-7 lg:mt-20">
              <p className="font-normal text-sm leading-3 text-gray-600 mb-3">
                Your details {">"} shipping address
              </p>
              <h3 className="md:text-2xl md:leading-6 text-xl leading-5 text-gray-800 font-medium">
                Shipping address
              </h3>

              <form className="mt-8" action="" autoComplete="off">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  <input
                    aria-label="country"
                    required
                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                    type="text"
                    name="Country"
                    id="Country"
                    placeholder="Country*"
                  />
                  <input
                    aria-label="address"
                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                  />
                  <input
                    aria-label="city"
                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                  />
                  <input
                    aria-label="ZipCode"
                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                    type="text"
                    name="ZipCode"
                    id="ZipCode"
                    placeholder="Zip Code"
                  />
                  <input
                    aria-label="State"
                    className="border-b-2 border-gray-300 pb-3 text-base text-gray-600 font-normal placeholder-gray-600 focus:outline-none"
                    type="text"
                    name="State"
                    id="State"
                    placeholder="State/Province"
                  />

                  <div className="relative">
                    <button
                      id="changetext"
                      className="text-left border-b-2 border-gray-300 py-3 w-full text-base font-normal placeholder-gray-600 text-gray-600 bg-white"
                    >
                      {country}
                    </button>

                    <svg
                      onClick={() => setMenu(!menu)}
                      className={
                        "transform  cursor-pointer absolute top-4 right-4 " +
                        (menu ? "rotate-180" : "")
                      }
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#6B7280"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <div
                      className={
                        "mt-1 absolute z-10 w-full flex bg-white justify-start flex-col text-gray-600 " +
                        (menu ? "block" : "hidden")
                      }
                    >
                      {countries.map((country) => (
                        <div
                          key={country}
                          className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2"
                          onClick={changeText}
                        >
                          {country}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </form>
              <div className="lg:mt-14 mt-10 w-full flex flex-col justify-start items-start">
                <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                  Delivery options
                </p>
                <div className="flex md:w-full lg:w-auto justify-start items-start flex-col md:mt-8 mt-6 md:space-y-4 space-y-8">
                  <div className="w-full flex md:flex-row flex-col lg:gap-x-16 md:justify-between">
                    <div className="flex md:items-center items-start space-x-4">
                      <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative md:mt-0 mt-1">
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
                        className="text-base leading-normal md:leading-4 text-gray-800 md:w-full w-3/5"
                      >
                        Standard shipping - 3 to 5 business days{" "}
                      </label>
                    </div>
                    <p className="font-semibold md:font-medium text-base leading-4 md:mt-0 mt-2 ml-8">
                      $0.00
                    </p>
                  </div>

                  <div className="w-full flex md:flex-row flex-col lg:gap-x-16 md:justify-between">
                    <div className="flex md:items-center items-start space-x-4">
                      <div className="bg-white dark:bg-gray-100 rounded-full w-4 h-4 flex flex-shrink-0 justify-center items-center relative md:mt-0 mt-1">
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
                        className="text-base leading-normal md:leading-4 text-gray-800 md:w-full w-3/5"
                      >
                        Express shipping - 1to 2 business days
                      </label>
                    </div>
                    <p className="font-semibold md:font-medium text-base leading-4 md:m-0 mt-2 ml-8">
                      $30.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button className="focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 text-base leading-4 my-3 mt-10 w-full md:w-auto">
              Proceed to payment
            </button>
          </div>
        </div>
        <div className="lg:w-3/12 lg:h-full md:h-3/5 h-3/5 px-4 md:px-0 mb-8 md:mb-0">
          <div className="flex flex-col justify-between h-full lg:h-screen p-4 md:p-6 xl:px-14 xl:py-20 bg-gray-100">
            <div className="">
              <div className="flex flex-1">
                <h3 className="text-gray-800 font-semibold md:text-2xl text-xl md:leading-6 leading-5">
                  Items
                </h3>
                <div className="flex-auto"></div>
                <h5 className="text-gray-600 hover:text-gray-800 cursor-pointer text-base font-normal underline">
                  Edit Cart
                </h5>
              </div>

              <div className="mt-2">
                {datasrc &&
                  datasrc.map((item: any, index: number) => {
                    return (
                      <div className="mt-5 flex flex-1 text-gray-800 text-lg font-normal">
                        <AtomTitle
                          item={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                          customClassName="leading-4"
                        />
                        <p className="flex-auto leading-4 text-right pr-4 md:pr-5 lg:pr-4">
                          1x
                        </p>
                        <AtomText
                          item={
                            "$" +
                            renderPositionType(
                              item,
                              "position4",
                              positionConfig
                            )
                          }
                          customClassName="leading-4"
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="bg-gray-100 w-full text-lg font-medium text-gray-800 mt-20 md:mt-0">
              <span
                aria-label="Total"
                className="float-left md:text-2xl text-xl md:leading-6 leading-5 text-gray-800 font-normal"
              >
                Total
              </span>
              <span
                aria-label="Total Price"
                className="float-right font-semibold text-gray-800 md:text-2xl text-xl md:leading-6 leading-5"
              >
                $9,000
              </span>
              <div className="clear-both"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkouts4;
