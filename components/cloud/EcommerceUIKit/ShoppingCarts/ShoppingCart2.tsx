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

export default function ShoppingCart2() {
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
  const list = [counter1, counter2, counter3, counter4, counter5, counter6];
  const setlist = [
    setCounter1,
    setCounter2,
    setCounter3,
    setCounter4,
    setCounter5,
    setCounter6,
  ];
  const findTotal = () => {
    var total = 0;
    datasrc &&
      datasrc.map((item: any, index: number) => {
        total +=
          parseInt(renderPositionType(item, "position4", positionConfig)) *
          list[index];
      });
    return total;
  };
  if (isEmpty(datasrc)) return null;
  // console.log("ShoppingCart2 config", config);
  // console.log("ShoppingCart2 datasrc", datasrc);
  // console.log("ShoppingCart2 otherattr", otherattr);
  // console.log("ShoppingCart2 positionConfig", positionConfig);

  return (
    <div className="mx-auto" style={{ maxWidth: "1132px" }}>
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div key={index} className="flex justify-between w-full border-b">
                <div className="flex flex-col md:flex-row items-strech py-5 w-full">
                  <div>
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-full h-full md:w-32 md:h-28 rounded-lg"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                  </div>
                  <div className="md:flex  w-full flex-col justify-between sm:ml-5 w-full">
                    <div className="flex justify-between">
                      <div>
                        <AtomTitle
                          item={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                          customClassName="text-xl font-bold text-gray-800"
                        />
                        <AtomText
                          item={renderPositionType(
                            item,
                            "position40",
                            positionConfig
                          )}
                          customClassName="mt-1 text-sm text-gray-800 font-light"
                        />
                      </div>
                      <div className="py-3 px-5 w-32 max-h-12 border-2 border-skyresort rounded-lg flex items-center justify-between">
                        <button
                          onClick={() =>
                            setlist[index](
                              list[index] - 1 < 0 ? 0 : list[index] - 1
                            )
                          }
                          aria-label="decrease quantity"
                          className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                        >
                          <i className="fas fa-minus text-lg text-gray-500"></i>
                        </button>
                        <p className="quantity1 text-bold text-xl">
                          {list[index]}
                        </p>
                        <button
                          onClick={() => setlist[index](list[index] + 1)}
                          aria-label="increase quantity"
                          className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                        >
                          <i className="fas fa-plus text-lg text-gray-500"></i>
                        </button>
                      </div>

                      {/*
                    <br />
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12"
                    /> 
                    <br /> */}
                    </div>
                    <div>
                      <div className="mt-2 sm:flex justify-between sm:space-x-5">
                        <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center my-2 sm:my-0">
                          <i className="fas fa-minus text-gray-500"></i>
                          <p className="leading-6">Гутлын размер</p>
                        </div>
                        <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center my-2 sm:my-0">
                          <i className="fas fa-minus text-gray-500"></i>
                          <p className="leading-6">Өмд түрээслэх эсэх</p>
                        </div>
                        <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center my-2 sm:my-0">
                          <i className="fas fa-minus text-gray-500"></i>
                          <p className="leading-6">Куртка түрээслэх эсэх</p>
                        </div>
                      </div>
                      <div className="sm:hidden">
                        <AtomCurrency
                          type="mnt"
                          item={renderPositionType(
                            item,
                            "position4",
                            positionConfig
                          )}
                          customClassName="lg:mt-0 text-xl font-bold text-green-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm:ml-28">
                  <div className="flex md:flex-col h-full lg:flex-row lg:space-x-32">
                    <div className="hidden md:block flex flex-col justify-center pt-12">
                      <div>
                        <AtomCurrency
                          type="mnt"
                          item={renderPositionType(
                            item,
                            "position4",
                            positionConfig
                          )}
                          customClassName="lg:mt-0 text-xl font-bold text-green-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col md:hidden mt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        customClassName="mt-1 text-xl font-bold leading-tight"
                      />
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position40",
                          positionConfig
                        )}
                        customClassName="text-sm text-gray-800 font-light"
                      />
                    </div>
                    <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                      <button
                        onClick={() =>
                          setlist[index](
                            list[index] - 1 < 0 ? 0 : list[index] - 1
                          )
                        }
                        aria-label="decrease quantity"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                      >
                        <i className="fas fa-minus text-lg text-gray-500"></i>
                      </button>
                      <p className="quantity1 text-base text-gray-800">
                        {list[index]}
                      </p>
                      <button
                        onClick={() => setlist[index](list[index] + 1)}
                        aria-label="increase quantity"
                        className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                      >
                        <i className="fas fa-plus text-lg text-gray-500"></i>
                      </button>
                    </div>
                  </div>
                  {/* <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="mt-4 w-11/12text-sm leading-tight text-gray-600"
                  /> *
                  <div className="mt-2 flex justify-between flex-wrap space-x-5">
                    <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center">
                      <i className="fas fa-minus text-gray-500"></i>
                      <p className="leading-6">Гутлын размер</p>
                    </div>
                    <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center">
                      <i className="fas fa-minus text-gray-500"></i>
                      <p className="leading-6">Өмд түрээслэх эсэх</p>
                    </div>
                    <div className="flex w-full rounded-lg border-2 space-x-4 py-3 pl-4 items-center">
                      <i className="fas fa-minus text-gray-500"></i>
                      <p className="leading-6">Куртка түрээслэх эсэх</p>
                    </div>
                  </div>
                  <AtomCurrency
                    type="mnt"
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="mt-10 text-xl font-medium text-gray-800"
                  />
                </div> */}
              </div>
            );
          })}
        <div className="flex py-5 space-x-5">
          <label className="flex space-x-2 items-center">
            <input type="checkbox" className="checkbox rounded-lg w-7 h-7" />
            <p className="font-medium text-sm">Багц санал болгох</p>
          </label>
          <label className="flex space-x-2 items-center">
            <input type="checkbox" className="checkbox rounded-lg w-7 h-7" />
            <p className="font-medium text-sm">Өөр бүтээгдэхүүн нэмэх</p>
          </label>
        </div>
        <div className="border rounded-lg px-5 py-4 flex justify-end">
          <div className="w-72">
            <div className="flex justify-between text-lg">
              <p>Багц</p>
              <p>20000₮</p>
            </div>
            <div className="flex justify-between mt-1 text-lg font-bold">
              <p className="">Нийт дүн</p>
              <p>90000₮</p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end mt-5">
          <button className="bg-skyresort px-14 py-4 font-bold text-sm uppercase rounded-lg">
            Төлбөр төлөх
          </button>
        </div>
      </div>
      <style>
        {`
        input[type="checkbox"]:checked::before {
          background-color: #FFCC00;
        }
        `}
      </style>
    </div>
  );
}

// [{
//   "id": "0",
//   "mainimage": "https://i.ibb.co/JxRLmgC/pexels-melvin-buezo-2529148-1-1.png",
//   "title": "Running shoes",
//   "mainnumber": "280000",
//   "description": "If you are going to use a passage of Lorem Ipsum,you need to be sure there isn't anything.",
//       "subtitle":"#1090"
// },{
//       "id": "1",
//   "mainimage": "https://i.ibb.co/JxRLmgC/pexels-melvin-buezo-2529148-1-1.png",
//   "title": "Running shoes",
//   "mainnumber": "280000",
//   "description": "If you are going to use a passage of Lorem Ipsum,you need to be sure there isn't anything.",
//       "subtitle":"#1090"
//   }]
