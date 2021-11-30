import { useContext } from "react";
import React, { useState } from "react";
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
export default function ProductCategory6() {
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
  // console.log("ProductCategory6 config", config);
  // console.log("ProductCategory6 datasrc", datasrc);
  // console.log("ProductCategory6 otherattr", otherattr);
  // console.log("ProductCategory6 positionConfig", positionConfig);
  const item = datasrc[0];

  const [show, setShow] = useState(false);
  const [slide, setSlide] = useState(true);
  const [num, setNum] = useState(1);
  const [color, setColor] = useState("");
  const [select, setSelect] = useState(1000);

  const handleNum = (flag: any) => {
    if (num < 30 && flag === "add") {
      setNum(num + 1);
    } else if (num > 1 && flag === "sub") {
      setNum(num - 1);
    }
  };
  const slideToggle = () => setSlide(!slide);
  return (
    <div className="dark:bg-gray-900 ">
      <div className="flex justify-center items-center">
        <button
          onClick={() => setShow(!show)}
          className="hover:bg-black top-20 z-0 w-40 py-4 bg-gray-800 text-white rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
        >
          Show Model
        </button>
        <div
          id="menu"
          className={` ${
            show ? "hidden" : ""
          } md:px-6 px-4 py-12 w-full h-full flex justify-center bg-gray-800`}
        >
          <div className="2xl:container 2xl:mx-auto relative flex justify-start w-96 md:w-full lg:w-10/12 xl:w-8/12 2xl:w-6/12 item-start flex-col md:flex-row md:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className="w-full">
              <div className="relative">
                <div className="slider">
                  <div className="slide-ana flex flex-shrink-0">
                    {/*Одоогоор 2-с дээш зураг байрлах боломжгүй байгаа. Хэрэгтэй бол доорх хэсэгт шинэчлэл хийнэ үү.*/}
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-0" : "-translate-x-full")
                      }
                    >
                      <AtomImage
                        item={renderPositionType(
                          renderPositionType(
                            renderPositionType(
                              item,
                              "position31",
                              positionConfig
                            )[0],
                            "position31",
                            positionConfig
                          )[0],
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-full h-full object-center object-cover"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-full" : "translate-x-0")
                      }
                    >
                      <AtomImage
                        item={renderPositionType(
                          renderPositionType(
                            renderPositionType(
                              item,
                              "position31",
                              positionConfig
                            )[0],
                            "position31",
                            positionConfig
                          )[1],
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto h-auto object-center object-cover"
                        alt={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                  <button
                    onClick={slideToggle}
                    aria-label="previous"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width={52}
                      height={52}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={26} cy={26} r={26} fill="white" />
                      <path
                        d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
                        stroke="#4B5563"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={slideToggle}
                    aria-label="Next"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width={52}
                      height={52}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx={26} cy={26} r={26} fill="white" />
                      <path
                        d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
                        stroke="#4B5563"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
              <div className="flex flex-col justify-start items-start space-y-2">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  customClassName="text-xl md:text-2xl font-semibold leading-6 text-gray-800"
                />
                <p className="text-sm leading-none text-gray-800">
                  SKU:
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="text-gray-500"
                  />
                </p>
              </div>
              <div className="flex justify-start flex-col space-y-4 items-start mt-8">
                <AtomCurrency
                  type="mnt"
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName="text-2xl font-semibold leading-normal text-gray-800"
                />

                <div className="flex justify-center items-center">
                  <div className="cursor-pointer flex space-x-2 mr-3">
                    <svg
                      width={112}
                      height={16}
                      viewBox="0 0 112 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.3127 15.0002C12.2074 15.0006 12.1047 14.9678 12.0192 14.9065L8.00015 11.9927L3.98109 14.9065C3.89522 14.9688 3.79178 15.0021 3.68571 15.0017C3.57964 15.0013 3.47643 14.9672 3.39103 14.9043C3.30562 14.8414 3.24242 14.753 3.21058 14.6518C3.17874 14.5506 3.1799 14.442 3.2139 14.3415L4.7814 9.69867L0.718901 6.91273C0.630904 6.85246 0.56449 6.76562 0.529361 6.66491C0.494232 6.56419 0.492229 6.45489 0.523646 6.35296C0.555063 6.25103 0.618253 6.16182 0.703982 6.09836C0.789712 6.0349 0.893489 6.00051 1.00015 6.00023H6.01203L7.52453 1.34555C7.55711 1.24505 7.62068 1.15746 7.70613 1.09534C7.79158 1.03322 7.89451 0.999756 8.00015 0.999756C8.10579 0.999756 8.20872 1.03322 8.29417 1.09534C8.37962 1.15746 8.44319 1.24505 8.47578 1.34555L9.98828 6.0018H15.0002C15.1069 6.00174 15.211 6.03589 15.2969 6.09922C15.3829 6.16256 15.4464 6.25177 15.478 6.35378C15.5096 6.45578 15.5077 6.56524 15.4726 6.6661C15.4375 6.76696 15.3711 6.85394 15.283 6.9143L11.2189 9.69867L12.7855 14.3402C12.8108 14.4154 12.818 14.4955 12.8063 14.5739C12.7946 14.6524 12.7644 14.7269 12.7182 14.7914C12.672 14.8559 12.6112 14.9085 12.5406 14.9448C12.4701 14.9811 12.392 15.0001 12.3127 15.0002Z"
                        fill={
                          renderPositionType(
                            item,
                            "position51",
                            positionConfig
                          ) >= "1"
                            ? "#1F2937"
                            : "#D1D5DB"
                        }
                      />
                      <path
                        d="M36.3127 15.0002C36.2074 15.0006 36.1047 14.9678 36.0192 14.9065L32.0002 11.9927L27.9811 14.9065C27.8952 14.9688 27.7918 15.0021 27.6857 15.0017C27.5796 15.0013 27.4764 14.9672 27.391 14.9043C27.3056 14.8414 27.2424 14.753 27.2106 14.6518C27.1787 14.5506 27.1799 14.442 27.2139 14.3415L28.7814 9.69867L24.7189 6.91273C24.6309 6.85246 24.5645 6.76562 24.5294 6.66491C24.4942 6.56419 24.4922 6.45489 24.5236 6.35296C24.5551 6.25103 24.6183 6.16182 24.704 6.09836C24.7897 6.0349 24.8935 6.00051 25.0002 6.00023H30.012L31.5245 1.34555C31.5571 1.24505 31.6207 1.15746 31.7061 1.09534C31.7916 1.03322 31.8945 0.999756 32.0002 0.999756C32.1058 0.999756 32.2087 1.03322 32.2942 1.09534C32.3796 1.15746 32.4432 1.24505 32.4758 1.34555L33.9883 6.0018H39.0002C39.1069 6.00174 39.211 6.03589 39.2969 6.09922C39.3829 6.16256 39.4464 6.25177 39.478 6.35378C39.5096 6.45578 39.5077 6.56524 39.4726 6.6661C39.4375 6.76696 39.3711 6.85394 39.283 6.9143L35.2189 9.69867L36.7855 14.3402C36.8108 14.4154 36.818 14.4955 36.8063 14.5739C36.7946 14.6524 36.7644 14.7269 36.7182 14.7914C36.672 14.8559 36.6112 14.9085 36.5406 14.9448C36.4701 14.9811 36.392 15.0001 36.3127 15.0002Z"
                        fill={
                          renderPositionType(
                            item,
                            "position51",
                            positionConfig
                          ) >= "2"
                            ? "#1F2937"
                            : "#D1D5DB"
                        }
                      />
                      <path
                        d="M60.3127 15.0002C60.2074 15.0006 60.1047 14.9678 60.0192 14.9065L56.0002 11.9927L51.9811 14.9065C51.8952 14.9688 51.7918 15.0021 51.6857 15.0017C51.5796 15.0013 51.4764 14.9672 51.391 14.9043C51.3056 14.8414 51.2424 14.753 51.2106 14.6518C51.1787 14.5506 51.1799 14.442 51.2139 14.3415L52.7814 9.69867L48.7189 6.91273C48.6309 6.85246 48.5645 6.76562 48.5294 6.66491C48.4942 6.56419 48.4922 6.45489 48.5236 6.35296C48.5551 6.25103 48.6183 6.16182 48.704 6.09836C48.7897 6.0349 48.8935 6.00051 49.0002 6.00023H54.012L55.5245 1.34555C55.5571 1.24505 55.6207 1.15746 55.7061 1.09534C55.7916 1.03322 55.8945 0.999756 56.0002 0.999756C56.1058 0.999756 56.2087 1.03322 56.2942 1.09534C56.3796 1.15746 56.4432 1.24505 56.4758 1.34555L57.9883 6.0018H63.0002C63.1069 6.00174 63.211 6.03589 63.2969 6.09922C63.3829 6.16256 63.4464 6.25177 63.478 6.35378C63.5096 6.45578 63.5077 6.56524 63.4726 6.6661C63.4375 6.76696 63.3711 6.85394 63.283 6.9143L59.2189 9.69867L60.7855 14.3402C60.8108 14.4154 60.818 14.4955 60.8063 14.5739C60.7946 14.6524 60.7644 14.7269 60.7182 14.7914C60.672 14.8559 60.6112 14.9085 60.5406 14.9448C60.4701 14.9811 60.392 15.0001 60.3127 15.0002Z"
                        fill={
                          renderPositionType(
                            item,
                            "position51",
                            positionConfig
                          ) >= "3"
                            ? "#1F2937"
                            : "#D1D5DB"
                        }
                      />
                      <path
                        d="M84.3127 15.0002C84.2074 15.0006 84.1047 14.9678 84.0192 14.9065L80.0002 11.9927L75.9811 14.9065C75.8952 14.9688 75.7918 15.0021 75.6857 15.0017C75.5796 15.0013 75.4764 14.9672 75.391 14.9043C75.3056 14.8414 75.2424 14.753 75.2106 14.6518C75.1787 14.5506 75.1799 14.442 75.2139 14.3415L76.7814 9.69867L72.7189 6.91273C72.6309 6.85246 72.5645 6.76562 72.5294 6.66491C72.4942 6.56419 72.4922 6.45489 72.5236 6.35296C72.5551 6.25103 72.6183 6.16182 72.704 6.09836C72.7897 6.0349 72.8935 6.00051 73.0002 6.00023H78.012L79.5245 1.34555C79.5571 1.24505 79.6207 1.15746 79.7061 1.09534C79.7916 1.03322 79.8945 0.999756 80.0002 0.999756C80.1058 0.999756 80.2087 1.03322 80.2942 1.09534C80.3796 1.15746 80.4432 1.24505 80.4758 1.34555L81.9883 6.0018H87.0002C87.1069 6.00174 87.211 6.03589 87.2969 6.09922C87.3829 6.16256 87.4464 6.25177 87.478 6.35378C87.5096 6.45578 87.5077 6.56524 87.4726 6.6661C87.4375 6.76696 87.3711 6.85394 87.283 6.9143L83.2189 9.69867L84.7855 14.3402C84.8108 14.4154 84.818 14.4955 84.8063 14.5739C84.7946 14.6524 84.7644 14.7269 84.7182 14.7914C84.672 14.8559 84.6112 14.9085 84.5406 14.9448C84.4701 14.9811 84.392 15.0001 84.3127 15.0002Z"
                        fill={
                          renderPositionType(
                            item,
                            "position51",
                            positionConfig
                          ) >= "4"
                            ? "#1F2937"
                            : "#D1D5DB"
                        }
                      />
                      <path
                        d="M108.313 15.0002C108.207 15.0006 108.105 14.9678 108.019 14.9065L104 11.9927L99.9811 14.9065C99.8952 14.9688 99.7918 15.0021 99.6857 15.0017C99.5796 15.0013 99.4764 14.9672 99.391 14.9043C99.3056 14.8414 99.2424 14.753 99.2106 14.6518C99.1787 14.5506 99.1799 14.442 99.2139 14.3415L100.781 9.69867L96.7189 6.91273C96.6309 6.85246 96.5645 6.76562 96.5294 6.66491C96.4942 6.56419 96.4922 6.45489 96.5236 6.35296C96.5551 6.25103 96.6183 6.16182 96.704 6.09836C96.7897 6.0349 96.8935 6.00051 97.0002 6.00023H102.012L103.525 1.34555C103.557 1.24505 103.621 1.15746 103.706 1.09534C103.792 1.03322 103.895 0.999756 104 0.999756C104.106 0.999756 104.209 1.03322 104.294 1.09534C104.38 1.15746 104.443 1.24505 104.476 1.34555L105.988 6.0018H111C111.107 6.00174 111.211 6.03589 111.297 6.09922C111.383 6.16256 111.446 6.25177 111.478 6.35378C111.51 6.45578 111.508 6.56524 111.473 6.6661C111.438 6.76696 111.371 6.85394 111.283 6.9143L107.219 9.69867L108.785 14.3402C108.811 14.4154 108.818 14.4955 108.806 14.5739C108.795 14.6524 108.764 14.7269 108.718 14.7914C108.672 14.8559 108.611 14.9085 108.541 14.9448C108.47 14.9811 108.392 15.0001 108.313 15.0002Z"
                        fill={
                          renderPositionType(
                            item,
                            "position51",
                            positionConfig
                          ) === "5"
                            ? "#1F2937"
                            : "#D1D5DB"
                        }
                      />
                    </svg>
                  </div>
                  <AtomText
                    item={
                      renderPositionType(item, "position47", positionConfig) +
                      " reviews"
                    }
                    customClassName="text-sm leading-none cursor-pointer hover:underline text-gray-500"
                  />
                </div>
              </div>
              <div className="mt-8">
                <p className="text-base font-medium leading-6 text-gray-600">
                  Color : <span id="text">{color} </span>
                </p>
                <div className="flex space-x-2 mt-4">
                  {renderPositionType(
                    renderPositionType(item, "position31", positionConfig)[1],
                    "position31",
                    positionConfig
                  ).map((item1: any, index1: number) => {
                    return (
                      <div
                        tabIndex={0}
                        onClick={() =>
                          setColor(
                            renderPositionType(
                              item1,
                              "position1",
                              positionConfig
                            )
                          )
                        }
                        className={`focus:outline-none ring-1 ring-transparent ring-offset-2 focus:ring-gray-600 rounded-full cursor-pointer w-5 h-5 bg-${renderPositionType(
                          item1,
                          "position1",
                          positionConfig
                        )}-300`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="mt-8 ">
                <div className="flex justify-start">
                  <p className="text-base font-medium leading-6 text-gray-600">
                    Size:
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-2 sm:justify-between lg:justify-start mt-4">
                  {renderPositionType(
                    renderPositionType(item, "position31", positionConfig)[2],
                    "position31",
                    positionConfig
                  ).map((item1: any, index1: number) => {
                    return (
                      <div
                        onClick={() => setSelect(index1)}
                        className={`font-medium text-base rounded-full leading-4 text-gray-800 border border-transparent flex justify-center items-center w-8 h-8 ${
                          select === index1 ? "border-gray-600" : ""
                        }   text-center cursor-pointer hover:border-gray-800 focus:border-gray-600`}
                      >
                        {renderPositionType(item1, "position1", positionConfig)}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-8 ">
                <div className="flex justify-start">
                  <p className="text-base font-medium leading-6 text-gray-600">
                    Quantity
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-10 sm:flex sm:flex-wrap md:gap-2 sm:justify-between lg:justify-start mt-4">
                  <div
                    onClick={() => handleNum("sub")}
                    className="font-medium text-base  leading-4 text-gray-800 border border-gray-300 flex justify-center items-center p-2   text-center cursor-pointer hover:border-gray-500 focus:border-gray-800"
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.96967 5.21967C3.26256 4.92678 3.73744 4.92678 4.03033 5.21967L8 9.18934L11.9697 5.21967C12.2626 4.92678 12.7374 4.92678 13.0303 5.21967C13.3232 5.51256 13.3232 5.98744 13.0303 6.28033L8.53033 10.7803C8.23744 11.0732 7.76256 11.0732 7.46967 10.7803L2.96967 6.28033C2.67678 5.98744 2.67678 5.51256 2.96967 5.21967Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    className="text-base font-semibold leading-none text-gray-800 flex justify-center items-center w-11 h-8   text-center "
                    id="inc"
                    value={num}
                  />
                  <div
                    onClick={() => handleNum("add")}
                    className="font-medium text-base  leading-4 text-gray-800 border border-gray-300 flex justify-center items-center p-2   text-center cursor-pointer hover:border-gray-500 focus:border-gray-800"
                  >
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.46967 5.21967C7.76256 4.92678 8.23744 4.92678 8.53033 5.21967L13.0303 9.71967C13.3232 10.0126 13.3232 10.4874 13.0303 10.7803C12.7374 11.0732 12.2626 11.0732 11.9697 10.7803L8 6.81066L4.03033 10.7803C3.73744 11.0732 3.26256 11.0732 2.96967 10.7803C2.67678 10.4874 2.67678 10.0126 2.96967 9.71967L7.46967 5.21967Z"
                        fill="#4B5563"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row flex w-full space-y-4 md:space-y-0 md:space-x-4  mt-10">
                <button className=" flex justify-center item-center space-x-2 border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full hover:bg-gray-900 text-base font-medium leading-4 text-white bg-gray-800 py-4 text-white">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.99984 13.9999C4.73622 13.9999 5.33317 13.403 5.33317 12.6666C5.33317 11.9302 4.73622 11.3333 3.99984 11.3333C3.26346 11.3333 2.6665 11.9302 2.6665 12.6666C2.6665 13.403 3.26346 13.9999 3.99984 13.9999Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3333 13.9999C12.0697 13.9999 12.6667 13.403 12.6667 12.6666C12.6667 11.9302 12.0697 11.3333 11.3333 11.3333C10.597 11.3333 10 11.9302 10 12.6666C10 13.403 10.597 13.9999 11.3333 13.9999Z"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3332 11.3333H3.99984V2H2.6665"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 3.33325L10.3333 3.99992L9.66667 8.66659H1"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p>Add to cart</p>
                </button>
                <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  w-full hover:bg-gray-300 text-base font-medium leading-none text-gray-600 py-4 bg-white">
                  Personalize
                </button>
              </div>
            </div>
            <button
              onClick={() => setShow(!show)}
              aria-label="show Menu"
              className="absolute top-4 right-4 md:top-6 md:right-6 focus:outline-none focus:ring-2 focus:ring-gray-800"
            >
              <svg
                width={25}
                height={24}
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.0986 6L6.09863 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.09863 6L18.0986 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
    
            .slide-ana {
                height: 539px;
            }
    
            .slide-ana > div {
                width: 100%;
                height: 100%;
                position: absolute;
                transition: all 1s;
            }
            `}
      </style>
    </div>
  );
}
