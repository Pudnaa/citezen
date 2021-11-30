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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

export default function ShoppingCart4() {
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
  const [show, setShow] = useState(true);
  const [search, setSearch] = useState(false);
  const [total, setTotal] = useState(0);

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);
  const [count6, setCount6] = useState(1);
  const list = [count1, count2, count3, count4, count5, count6];
  const setlist = [
    setCount1,
    setCount2,
    setCount3,
    setCount4,
    setCount5,
    setCount6,
  ];

  if (isEmpty(datasrc)) return null;
  // console.log("ShoppingCart4 config", config);
  // console.log("ShoppingCart4 datasrc", datasrc);
  // console.log("ShoppingCart4 otherattr", otherattr);
  // console.log("ShoppingCart4 positionConfig", positionConfig);

  return (
    <>
      <div className="bg-gray-800 w-full h-full">
        <div className="flex justify-center items-center px-4 py-12">
          <button
            onClick={() => setShow(true)}
            className={
              show
                ? "hidden"
                : "bg-white text-gray-800 border rounded-md hover:bg-gray-200 focus:bg-gray-200 px-8 py-4"
            }
          >
            Open Modal
          </button>
          {show && (
            <div className="relative flex justify-center items-center bg-white">
              <div
                onClick={() => setShow(false)}
                className="cursor-pointer absolute top-5 right-5"
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1F2937"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center py-12 px-8">
                <p className="text-xl md:text-2xl lg:text-4xl font-semibold leading-9 text-gray-800">
                  Your Shopping Bag
                </p>
                {datasrc &&
                  datasrc.map((item: any, index: number) => {
                    return (
                      <div className="pt-10 flex py-20 border-b border-gray-300">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <AtomImage
                            item={renderPositionType(
                              item,
                              "position2",
                              positionConfig
                            )}
                            customClassName="w-auto"
                            alt={renderPositionType(
                              item,
                              "position1",
                              positionConfig
                            )}
                          />
                          <div>
                            <div className="flex flex-row gap-2 items-center justify-between">
                              <AtomTitle
                                item={renderPositionType(
                                  item,
                                  "position1",
                                  positionConfig
                                )}
                                customClassName="text-base font-semibold leading-none text-gray-800 cursor-pointer"
                              />
                              <AtomCurrency
                                type="mnt"
                                item={renderPositionType(
                                  item,
                                  "position4",
                                  positionConfig
                                )}
                                customClassName="hidden md:block text-base font-semibold leading-none text-gray-800"
                              />
                              <div className="md:hidden w-20 border border-gray-300  flex justify-center flex-row gap-2 p-2 items-center">
                                <p
                                  onClick={() =>
                                    setlist[index](list[index] - 1)
                                  }
                                  className="text-gray-800 cursor-pointer"
                                >
                                  -
                                </p>
                                <p className="text-gray-800 cursor-pointer text-sm leading-none">
                                  {list[index]}
                                </p>
                                <p
                                  onClick={() =>
                                    setlist[index](list[index] + 1)
                                  }
                                  className="text-gray-800 cursor-pointer"
                                >
                                  +
                                </p>
                              </div>
                            </div>

                            <AtomText
                              item={renderPositionType(
                                item,
                                "position3",
                                positionConfig
                              )}
                              customClassName="md:hidden pt-6 pb-12 text-sm leading-tight text-gray-600"
                            />
                            <AtomText
                              item={renderPositionType(
                                item,
                                "position3",
                                positionConfig
                              )}
                              customClassName="hidden md:block pt-6 pb-6 md:pb-12 text-sm leading-tight text-gray-600"
                              customStyle={{ width: 406 }}
                            />
                            <div className="flex flex-col md:flex-row justify-between">
                              <div className="flex flex-row gap-6">
                                <p className="text-sm leading-none cursor-pointer text-gray-800 hover:underline">
                                  Edit
                                </p>
                                <p className="text-sm leading-none cursor-pointer text-gray-800 hover:underline">
                                  Add to favorites
                                </p>
                                <p className="text-sm leading-none cursor-pointer text-red-500 hover:underline">
                                  Remove
                                </p>
                              </div>
                              <div className="w-20 border border-gray-300 hidden md:flex justify-center flex-row gap-2 p-2 items-center">
                                <p
                                  onClick={() =>
                                    setlist[index](list[index] - 1)
                                  }
                                  className="text-gray-800 cursor-pointer"
                                >
                                  -
                                </p>
                                <p
                                  id="count"
                                  className="text-gray-800 cursor-pointer text-sm leading-none"
                                >
                                  {" "}
                                  {list[index]}
                                </p>
                                <p
                                  onClick={() =>
                                    setlist[index](list[index] + 1)
                                  }
                                  className="text-gray-800 cursor-pointer"
                                >
                                  +
                                </p>
                              </div>
                              <AtomCurrency
                                type="mnt"
                                item={renderPositionType(
                                  item,
                                  "position4",
                                  positionConfig
                                )}
                                customClassName="pt-4 md:hidden text-base font-semibold leading-none text-gray-800"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                <div className="py-10" />
                <div className="bg-gray-100 p-8 w-full">
                  <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-row justify-between w-full">
                      <p className="w-16 h-4 text-base leading-none text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $200
                      </p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <p className="w-16 h-4 text-base leading-none text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $50
                      </p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <p className="w-16 h-4 text-base leading-none text-gray-800">
                        Tax
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        $10
                      </p>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-base font-semibold leading-none text-gray-800">
                        Grand Total
                      </p>
                      <p className="text-base font-semibold leading-none text-right text-gray-800">
                        $260
                      </p>
                    </div>
                    <button className="bg-gray-800 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 focus:ring-2 focus:ring-gray-900 w-full py-5 text-center text-white text-base font-medium">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
