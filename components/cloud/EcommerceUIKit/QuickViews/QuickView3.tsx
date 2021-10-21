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

const QuickView3 = () => {
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
  const [showModal, setShowModal] = useState(true);
  const [size, setSize] = useState("");

  if (isEmpty(datasrc)) return null;
  // console.log("QuickView3 config", config);
  // console.log("QuickView3 datasrc", datasrc);
  // console.log("QuickView3 otherattr", otherattr);
  // console.log("QuickView3 positionConfig", positionConfig);

  const Selected = (value: any) => {
    setSize(value);
  };

  return (
    <div>
      <div
        id="btn"
        className={
          "w-screen h-full justify-center items-center py-12 " +
          (showModal ? "hidden" : "flex")
        }
      >
        <button
          onClick={() => setShowModal(true)}
          className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 duration-100 bg-gray-800 text-white px-5 py-2 "
        >
          Quick View
        </button>
      </div>

      <div
        id="Modal"
        className={
          "bg-gray-800 bg-opacity-40 w-screen lg:h-full flex justify-center items-center " +
          (showModal ? "block" : "hidden")
        }
      >
        <div className=" flex justify-center items-center 2xl:container 2xl:mx-auto md:py-12 xl:px-40 md:px-6 px-4 py-9 ">
          <div className="bg-white">
            <div className="relative lg:flex lg:justify-center  lg:items-center w-80 sm:w-full lg:space-x-8 xl:py-12 xl:px-24 md:py-16 md:px-8 py-10 px-3">
              {/*  Close Button  */}
              <div className=" absolute md:top-6 md:right-6 top-3 right-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:text-gray-600 text-gray-800 flex items-center space-x-2 cursor-pointer"
                >
                  <p className=" font-normal text-base leading-4 ">Close</p>
                  <svg
                    className="fill-stroke"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.3346 12.3332L1.66797 1.6665M12.3346 1.6665L1.66797 12.3332"
                      stroke="currentColor"
                      strokeLinecap="square"
                    />
                  </svg>
                </button>
              </div>
              <div className=" lg:w-7/12 w-full">
                <img
                  className="lg:block hidden w-full h-full"
                  src="https://i.ibb.co/zfMkGyY/creative-headline-APNny-M36pu-U-unsplash-1.png"
                  alt="Light Pink purse"
                />
                <img
                  className="lg:hidden sm:block hidden w-full h-full"
                  src="https://i.ibb.co/GWzWd9W/pexels-dominika-roseclay-5462562-1.png"
                  alt="Light Pink purse"
                />
                <img
                  className="sm:hidden block w-full h-full"
                  src="https://i.ibb.co/xXpPcss/pexels-dominika-roseclay-5462562-1.png"
                  alt="Light Pink purse"
                />

                <div className=" grid grid-cols-3 lg:mt-4 sm:mt-6 mt-4 lg:gap-7 md:gap-6 gap-4">
                  <div>
                    <img
                      className="lg:block hidden w-full h-full"
                      src="https://i.ibb.co/4TJ9xQ2/creative-headline-Ui-M5-WNm-E-Qw-unsplash-2.png"
                      alt="Dark Pink Purse"
                    />
                    <img
                      className="block lg:hidden w-full h-full"
                      src="https://i.ibb.co/Fb3gqpX/pexels-dominika-roseclay-5462565-1.png"
                      alt="Dark Pink Purse"
                    />
                  </div>
                  <div>
                    <img
                      className="lg:block hidden w-full h-full"
                      src="https://i.ibb.co/brSNbpK/creative-headline-x2l1-CSCb-TSQ-unsplash-1.png"
                      alt="Yellow Purse"
                    />
                    <img
                      className="block lg:hidden w-full h-full"
                      src="https://i.ibb.co/gR8bJpw/pexels-dominika-roseclay-5462562-2.png"
                      alt="Yellow Purse"
                    />
                  </div>
                  <div>
                    <img
                      className="lg:block hidden w-full h-full"
                      src="https://i.ibb.co/YXdtk7Q/creative-headline-se3-GNr-Xjtd-Q-unsplash-1.png"
                      alt="brown Purse"
                    />
                    <img
                      className="block lg:hidden w-full h-full"
                      src="https://i.ibb.co/qWQ7qGw/pexels-dominika-roseclay-5462565-3.png"
                      alt="brown Purse"
                    />
                  </div>
                </div>
              </div>
              <div className=" lg:w-6/12 w-full lg:mt-0 mt-8">
                <p className=" font-normal text-base leading-4 text-gray-500 ">
                  RMX-900
                </p>
                <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold mt-2">
                  Cross Body Bag
                </h2>
                <p className=" font-medium text-xl leading-5 text-gray-600 mt-4">
                  $190
                </p>
                <div className=" flex justify-start items-center mt-8">
                  <p className="font-normal text-lg leading-6 text-gray-600 mr-2">
                    4.5/5
                  </p>
                  <div className="cursor-pointer flex space-x-2 mr-4">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                          fill="#1F2937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                          fill="#1F2937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                          fill="#1F2937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path
                          d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                          fill="#1F2937"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="22" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <svg
                      width="23"
                      height="22"
                      viewBox="0 0 23 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M2.76556 8.70194L2.76068 8.70696L2.75719 8.71056L2.75246 8.70902L1.90718 8.43336L2.75837 8.69339M2.76556 8.70194L2.75837 8.69339M2.76556 8.70194L2.77032 8.69704L2.76556 8.70194ZM2.76556 8.70194L2.75837 8.69339M15.1929 13.1714L16.1062 18.313L16.0985 18.313L11.4351 15.8716L11.0005 15.6441L10.5659 15.8716L5.92615 18.3006L6.83558 13.1806L6.92255 12.6909L6.56571 12.3444L2.84177 8.72894L8.0097 7.97641L8.49902 7.90516L8.71634 7.461L11.0006 2.79232L13.3145 7.45644L13.5328 7.89647L14.0188 7.96725L19.1868 8.71977L15.4628 12.3352L15.106 12.6817L15.1929 13.1714Z"
                          stroke="#1F2937"
                          strokeWidth="1.874"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect
                            width="22"
                            height="22"
                            fill="white"
                            transform="translate(0.363281)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">
                    See all 18 reviews
                  </p>
                </div>
                <div className="  mt-8">
                  <p className=" font-semibold text-base leading-4 text-gray-800">
                    Color
                  </p>
                  <div className=" flex space-x-2 mt-4">
                    <div
                      tabIndex={0}
                      className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-5 h-5 bg-red-300"
                    ></div>
                    <div
                      tabIndex={1}
                      className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-5 h-5 bg-red-700"
                    ></div>
                    <div
                      tabIndex={2}
                      className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-5 h-5 bg-yellow-300"
                    ></div>
                    <div
                      tabIndex={3}
                      className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer w-5 h-5 bg-purple-500"
                    ></div>
                  </div>
                </div>
                <div className=" mt-8">
                  <p className="font-semibold text-base leading-4 text-gray-800">
                    Size
                  </p>
                  <div className=" flex space-x-8 mt-3">
                    <div
                      tabIndex={5}
                      onClick={() => Selected("small")}
                      id="small"
                      className={
                        "border p-4 flex-1 cursor-pointer " +
                        (size === "small"
                          ? "border-gray-500"
                          : "border-gray-200")
                      }
                    >
                      <p className=" font-medium text-base leading-4 text-gray-800">
                        Small
                      </p>
                      <p className=" font-normal text-xs leading-3 text-gray-600 mt-2">
                        120 by 18 inches
                      </p>
                    </div>
                    <div
                      tabIndex={6}
                      onClick={() => Selected("large")}
                      id="large"
                      className={
                        "border p-4 flex-1 cursor-pointer " +
                        (size === "large"
                          ? "border-gray-500"
                          : "border-gray-200")
                      }
                    >
                      <p className=" font-medium text-base leading-4 text-gray-800">
                        Large
                      </p>
                      <p className=" font-normal text-xs leading-3 text-gray-600 mt-2">
                        200 by 30 inches
                      </p>
                    </div>
                  </div>
                </div>
                <p className=" mt-4 font-normal text-sm leading-3 text-gray-500 hover:text-gray-600 duration-100 underline cursor-pointer">
                  Find the perfect size?
                </p>
                <div className=" mt-10">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700 duration-100 border border-gray-800 bg-gray-800 py-4 text-center text-white w-full sm:w-96 lg:w-full">
                    Add to bag
                  </button>
                  <button className="focus:outline-none  hover:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 mt-4 border border-gray-800 py-4 w-full sm:w-96 lg:w-full text-center">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView3;
