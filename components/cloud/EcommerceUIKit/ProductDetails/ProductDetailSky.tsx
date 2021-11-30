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
import RenderAtom from "@components/common/Atom/RenderAtom";

const ProductDetailSky = () => {
  const {
    config,
    readyDatasrc,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;

  // console.log("ProductDetailWeekly config", config);
  //console.log("sky resort product detail datasrc", datasrc);
  // console.log("ProductDetailWeekly otherattr", otherattr);
  // console.log("ProductDetailWeekly positionConfig", positionConfig);
  const [show, setShow] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [slide, setSlide] = useState(true);

  const dropDown = () => setShow(!show);

  const slideToggle = () => setSlide(!slide);

  return (
    <div
      className="mx-auto  flex justify-center items-center"
      style={{ maxWidth: "1336px" }}
    >
      <div id="menu" className="w-full px-8 py-12 h-full flex justify-center ">
        <div className=" relative flex justify-start w-full items-start flex-col md:flex-row  md:space-x-8  bg-white">
          <div className="w-full p-3 rounded-lg border">
            <div className="relative">
              <div className="slider">
                <div className="slide-ana h-96 xl:h-auto flex flex-shrink-0">
                  <div
                    className={
                      "flex flex-shrink-0 transform " +
                      (slide ? "translate-x-0" : "-translate-x-full")
                    }
                  >
                    <img
                      className=" lg:block hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoes"
                    />
                    <img
                      className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoe"
                    />
                    <img
                      className=" block md:hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoe"
                    />
                  </div>
                  <div
                    className={
                      "flex flex-shrink-0 transform " +
                      (slide ? "translate-x-full" : "translate-x-0")
                    }
                  >
                    <img
                      className=" lg:block hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoe"
                    />
                    <img
                      className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoe"
                    />
                    <img
                      className=" block md:hidden w-full h-full object-center object-cover"
                      src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
                      alt="shoe"
                    />
                  </div>
                </div>
              </div>
              <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                <button
                  onClick={slideToggle}
                  aria-label="previous"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                >
                  <svg
                    className=""
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="26" fill="white" />
                    <path
                      d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  onClick={slideToggle}
                  aria-label="Next"
                  className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                >
                  <svg
                    className=""
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="26" cy="26" r="26" fill="white" />
                    <path
                      d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
                      stroke="#4B5563"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-0 flex justify-start items-start w-full flex-col ">
            <div className="bg-gray-100 rounded w-full flex justify-between py-4 px-5">
              <p className="font-medium text-sm">Хямдрал дуусахад</p>
              <div className="flex justify-between font-medium text-sm space-x-2">
                <p className="font-bold">
                  01{" "}
                  <span className="font-normal text-gray-500 font-light">
                    {" "}
                    Өдөр
                  </span>
                </p>
                <p className="font-bold">
                  08{" "}
                  <span className="font-normal text-gray-500 font-light">
                    {" "}
                    Цаг
                  </span>
                </p>
                <p className="font-bold">
                  40{" "}
                  <span className="font-normal text-gray-500 font-light">
                    {" "}
                    Минут
                  </span>
                </p>
                <p className="font-bold">
                  16{" "}
                  <span className="font-normal text-gray-500 font-light">
                    {" "}
                    Секунд
                  </span>
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-7 w-full">
              <div className="text-3xl font-bold leading-normal">
                <p className=" text-gray-800">Уулын цана</p>
                <span className="text-green-500 mr-2">20.000₮</span>
                <span className="line-through font-normal text-2xl">
                  40.000₮
                </span>
              </div>
              <div className="text-2xl font-bold h-full pt-5">
                <div>
                  <p className=" text-gray-800 font-normal float-right">
                    Хэмнэлт
                  </p>
                </div>

                <p className="text-green-500 float-right">20.000₮</p>
              </div>
            </div>
            <div className=" flex justify-start items-center mt-4 w-full">
              <div className="py-10 cursor-pointer flex items-center w-full border-t border-b border-gray-200 space-x-7">
                <p className="text-base leading-none text-gray-800 font-medium">
                  Размер
                </p>
                <div className="flex flex-wrap space-x-5 space-y-2 font-medium text-gray-800">
                  <span
                    className={`px-5 py-2 rounded-3xl border mt-2 ${
                      sizeSelected === 36 ? "bg-skyresort" : ""
                    }`}
                    onClick={() => {
                      setSizeSelected(36);
                    }}
                  >
                    36
                  </span>
                  <span
                    className={`px-5 py-2 rounded-3xl border ${
                      sizeSelected === 38 ? "bg-skyresort" : ""
                    }`}
                    onClick={() => {
                      setSizeSelected(38);
                    }}
                  >
                    38
                  </span>
                  <span
                    className={`px-5 py-2 rounded-3xl border ${
                      sizeSelected === 40 ? "bg-skyresort" : ""
                    }`}
                    onClick={() => {
                      setSizeSelected(40);
                    }}
                  >
                    40
                  </span>
                  <span
                    className={`px-5 py-2 rounded-3xl border ${
                      sizeSelected === 42 ? "bg-skyresort" : ""
                    }`}
                    onClick={() => {
                      setSizeSelected(42);
                    }}
                  >
                    42
                  </span>
                  <span
                    className={`px-5 py-2 rounded-3xl border ${
                      sizeSelected === 44 ? "bg-skyresort" : ""
                    }`}
                    onClick={() => {
                      setSizeSelected(44);
                    }}
                  >
                    44
                  </span>
                </div>
              </div>
            </div>
            <div className=" flex justify-start items-center  w-full">
              <div className="py-7  flex justify-between items-center w-full  border-b border-gray-200">
                <div
                  className="text-gray-800 font-bold text-xl flex space-x-6 py-3 px-5 rounded-3xl 
                border-2 border-skyresort"
                >
                  <i className="fas fa-minus cursor-pointer"></i>
                  <p>2</p>
                  <i className="fas fa-plus cursor-pointer"></i>
                </div>
                <div className="uppercase font-bold text-lg px-6 py-3 bg-skyresort text-gray-800 rounded-3xl">
                  Сагсанд нэмэх
                </div>
                <div className="flex cursor-pointer text-sm text-gray-800 items-center space-x-2">
                  <i className="far fa-heart text-3xl "></i>
                  <p>Хүслийн жагсаалтанд нэмэх</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-start items-center w-full flex-col space-y-3.5">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  py-5 w-full text-base leading-4 border border-gray-800 text-white bg-gray-800 hover:bg-black">
                Add to cart
              </button>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  py-5 w-full flex justify-center items-center space-x-1 hover:bg-gray-300 border border-gray-800 text-base leading-4  text-gray-800 ">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p>Find in store </p>
              </button>
            </div>
            <div className="mt-8 flex justify-start items-start flex-col w-full">
              <button
                onClick={dropDown}
                className="flex justify-between w-full items-start "
              >
                <h3 className="text-lg font-medium leading-4 text-gray-800">
                  Product information
                </h3>
                <svg
                  id="icon"
                  className={
                    "xl:hidden transform " + (show ? "rotate-180" : "rotate-0")
                  }
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6L8 10L4 6"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                id="dropdown"
                className={
                  "xl:block mt-6 space-y-4 flex-col justify-start item-start text-base text-gray-600 " +
                  (show ? "flex" : "hidden")
                }
              >
                <p className=" text-base leading-4 text-gray-600">
                  Product Code: 8BN321AF2IF0NYA
                </p>
                <p className=" text-base leading-4 text-gray-600">
                  Length: 13.2 inches
                </p>
                <p className=" text-base leading-4 text-gray-600">
                  Height: 10 inches
                </p>
                <p className=" text-base leading-4 text-gray-600">
                  Depth: 5.1 inches
                </p>
                <p className=" text-base leading-6 lg:leading-4 text-gray-600">
                  Composition: 100% calf leather, inside: 100% lamb leather
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                @media (min-width: 1280px) {  
                    .slide-ana {
                    height: 539px;
                } }
                

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }`}
      </style>
    </div>
  );
};

export default ProductDetailSky;
