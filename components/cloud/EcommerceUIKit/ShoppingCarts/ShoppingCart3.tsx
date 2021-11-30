import { useContext, useState, useEffect } from "react";
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

export default function ShoppingCart3() {
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
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);
  const [counter5, setCounter5] = useState(1);
  const [counter6, setCounter6] = useState(1);
  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);
  const [total3, setTotal3] = useState(0);
  const [total4, setTotal4] = useState(0);
  const [total5, setTotal5] = useState(0);
  const [total6, setTotal6] = useState(0);
  const [grandTotal, setGrandTotal] = useState(
    total1 + total2 + total3 + total4 + total6
  );
  const list = [counter1, counter2, counter3, counter4, counter5, counter6];
  const setlist = [
    setCounter1,
    setCounter2,
    setCounter3,
    setCounter4,
    setCounter5,
    setCounter6,
  ];
  const list1 = [total1, total2, total3, total4, total5, total6];
  const setlist1 = [
    setTotal1,
    setTotal2,
    setTotal3,
    setTotal4,
    setTotal5,
    setTotal6,
  ];

  useEffect(() => {
    var total = 0;
    list1.map((item: any, index: number) => {
      total += item;
    });
    setGrandTotal(total);
  }, [list1]);

  if (isEmpty(datasrc)) return null;
  // console.log("ShoppingCart3 config", config);
  // console.log("ShoppingCart3 datasrc", datasrc);
  // console.log("ShoppingCart3 otherattr", otherattr);
  // console.log("ShoppingCart3 positionConfig", positionConfig);
  return (
    <div className="container mx-auto">
      <div className="py-9 px-4 md:px-6  w-full">
        <div>
          <p className="text-base leading-4 lg:leading-none text-gray-600">
            Home / Products /Shopping bag
          </p>
          <h1 className="text-3xl lg:text-4xl leading-4 lg:leading-9 font-semibold text-gray-800 mt-2">
            Таны сагс
          </h1>
        </div>
        <div className="flex lg:flex-row flex-col space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="md:w-full">
            {datasrc &&
              datasrc.map((item: any, index: number) => {
                const price = renderPositionType(
                  item,
                  "position4",
                  positionConfig
                );

                return (
                  <div
                    key={index}
                    className="w-full flex flex-col md:flex-row items-strech mt-10 md:mt-14 lg:mt-16 pb-12 border-gray-200 border-b"
                  >
                    <div className="flex justify-end md:hidden">
                      <button className="mt-2">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                            fill="#1F2937"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="flex justify-center md:w-2/5">
                      <AtomImage
                        item={renderPositionType(
                          item,
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto object-center object-cover"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                    <div className="md:flex hidden w-full justify-between md:ml-6">
                      <div className="w-full">
                        <div className="flex flex-row justify-between">
                          <div className="flex justify start">
                            <AtomTitle
                              item={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-2xl font-semibold leading-normal text-gray-800"
                            />
                          </div>
                          <div className="flex justify-end">
                            <button
                              aria-label="Cancel product"
                              className="mt-2 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                            >
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M13.41 12L17.71 7.71C17.8983 7.5217 18.0041 7.2663 18.0041 7C18.0041 6.7337 17.8983 6.47831 17.71 6.29C17.5217 6.1017 17.2663 5.99591 17 5.99591C16.7337 5.99591 16.4783 6.1017 16.29 6.29L12 10.59L7.71 6.29C7.5217 6.1017 7.2663 5.99591 7 5.99591C6.7337 5.99591 6.4783 6.1017 6.29 6.29C6.1017 6.47831 5.99591 6.7337 5.99591 7C5.99591 7.2663 6.1017 7.5217 6.29 7.71L10.59 12L6.29 16.29C6.19627 16.383 6.12188 16.4936 6.07111 16.6154C6.02034 16.7373 5.9942 16.868 5.9942 17C5.9942 17.132 6.02034 17.2627 6.07111 17.3846C6.12188 17.5064 6.19627 17.617 6.29 17.71C6.38296 17.8037 6.49356 17.8781 6.61542 17.9289C6.73728 17.9797 6.86799 18.0058 7 18.0058C7.13201 18.0058 7.26272 17.9797 7.38458 17.9289C7.50644 17.8781 7.61704 17.8037 7.71 17.71L12 13.41L16.29 17.71C16.383 17.8037 16.4936 17.8781 16.6154 17.9289C16.7373 17.9797 16.868 18.0058 17 18.0058C17.132 18.0058 17.2627 17.9797 17.3846 17.9289C17.5064 17.8781 17.617 17.8037 17.71 17.71C17.8037 17.617 17.8781 17.5064 17.9289 17.3846C17.9797 17.2627 18.0058 17.132 18.0058 17C18.0058 16.868 17.9797 16.7373 17.9289 16.6154C17.8781 16.4936 17.8037 16.383 17.71 16.29L13.41 12Z"
                                  fill="#1F2937"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <AtomCurrency
                          type="mnt"
                          item={price}
                          customClassName="text-base leading-none text-gray-800 mt-4"
                        />
                        <div className="mt-20 flex w-full items-center justify-between">
                          <div className="w-full flex flex-col h-full md:flex-row justify-between">
                            <div className="flex justify-start">
                              <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                                <button
                                  onClick={() => {
                                    setlist[index](
                                      list[index] - 1 < 0 ? 0 : list[index] - 1
                                    );
                                    //unit price * count
                                    setlist1[index](
                                      parseInt(price) *
                                        (list[index] - 1 < 0
                                          ? 0
                                          : list[index] - 1)
                                    );
                                  }}
                                  aria-label="decrease quantity"
                                  className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                                >
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10 4L6 8L10 12"
                                      stroke="#1F2937"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                                <p className="quantity1 text-base text-gray-800">
                                  {list[index]}
                                </p>
                                <button
                                  onClick={() => {
                                    setlist[index](list[index] + 1);
                                    // unit price * count
                                    setlist1[index](
                                      (list[index] + 1) * parseInt(price)
                                    );
                                  }}
                                  aria-label="increase quantity"
                                  className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                                >
                                  <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M6 4L10 8L6 12"
                                      stroke="#1F2937"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="hidden md:block flex justify-end">
                              <p className="md:mt-3 text-gray-800 text-right">
                                <span className="text-xl leading-tight text-gray-800">
                                  Total:{" "}
                                </span>
                                <AtomCurrency
                                  type="mnt"
                                  item={list1[index].toString()}
                                  customClassName="text-xl font-medium"
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div />
                    </div>
                    <div className="flex flex-col md:hidden">
                      <div className="flex items-center justify-between">
                        <div>
                          <AtomTitle
                            item={renderPositionType(
                              item,
                              "position1",
                              positionConfig
                            )}
                            customClassName="mt-1 text-2xl font-semibold leading-6 text-gray-800"
                          />
                        </div>
                      </div>
                      <AtomCurrency
                        type="mnt"
                        item={price}
                        customClassName="mt-4 w-11/12 text-base leading-4 text-gray-600"
                      />
                      <div className="flex items-center justify-between mt-6">
                        <div>
                          <p className="mt:mt-3 text-gray-800 text-right">
                            <span className="text-xl leading-5 text-gray-800">
                              Total:{" "}
                            </span>
                            <AtomCurrency
                              type="mnt"
                              item={list1[index].toString()}
                              customClassName="text-xl leading-5 font-medium"
                            />
                          </p>
                        </div>
                        <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                          <button
                            onClick={() => {
                              setlist[index](
                                list[index] - 1 < 0 ? 0 : list[index] - 1
                              );
                              setlist1[index](
                                parseInt(price) *
                                  (list[index] - 1 < 0 ? 0 : list[index] - 1)
                              );
                            }}
                            className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10 4L6 8L10 12"
                                stroke="#1F2937"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <p className="quantity1 text-base text-gray-800">
                            {list[index]}
                          </p>
                          <button
                            onClick={() => {
                              setlist[index](list[index] + 1);
                              setlist1[index](
                                parseInt(price) * (list[index] + 1)
                              );
                            }}
                            className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                          >
                            <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6 4L10 8L6 12"
                                stroke="#1F2937"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="flex justify-center items-center flex-col-reverse md:flex-row md:mt-28 mt-20 w-full">
            <div className="w-full md:w-9/12 lg:w-9/12 p-4 md:p-10 bg-gray-50">
              <p className="text-2xl font-semibold leading-normal text-gray-800">
                Order Summary
              </p>
              <div className="flex items-center justify-between mt-14">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Subtotal
                </h3>
                <AtomCurrency
                  type="mnt"
                  item={grandTotal.toString()}
                  customClassName="text-base font-medium leading-none text-gray-800"
                />
              </div>
              <div className="flex items-center justify-between mt-10">
                <h3 className="text-base font-medium leading-none text-gray-800">
                  Shipping Charges
                </h3>
                <p className="text-base font-medium leading-none text-gray-800">
                  ₮0
                </p>
              </div>
              <div className="flex items-center justify-between mt-32">
                <h3 className="text-xl font-semibold leading-tight text-gray-800">
                  Total Price
                </h3>
                <AtomCurrency
                  type="mnt"
                  item={grandTotal.toString()}
                  customClassName="text-2xl font-semibold text-gray-800"
                />
              </div>
              <button className="focus:outline-none hover: focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full mt-4 bg-gray-800 text-base font-medium leading-none text-gray-50 hover:bg-gray-700 py-5">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
