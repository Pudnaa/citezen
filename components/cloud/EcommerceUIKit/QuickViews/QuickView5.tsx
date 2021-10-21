import { useContext , useState} from "react";
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

const QuickView5 = () => {
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
    const [color, setColor] = useState("White");

    
    if (isEmpty(datasrc)) return null;
    // console.log("QuickView5 config", config);
    // console.log("QuickView5 datasrc", datasrc);
    // console.log("QuickView5 otherattr", otherattr);
    // console.log("QuickView5 positionConfig", positionConfig);

    const getColor = (value:any) => {
        setColor(value);
    };

    return (
        <div className="  flex justify-center items-center">
            <button onClick={() => setShowModal(true)} className="hover:bg-black top-20 absolute z-0 w-40 py-4 bg-gray-800 text-white rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
                Show Modal
            </button>
            <div id="menu" className={"md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-gray-800 " + (showModal ? "block" : "hidden")}>
                <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
                    <div className="w-full">
                        <img className="w-full hidden md:block" src="https://i.ibb.co/qBsqZWP/pexels-ge-yonk-1152077-1.png" alt="bag" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/4SSNG6s/Group-2350.png" alt="bag" />
                    </div>
                    <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
                        <div className="flex justify-between items-start w-full">
                            <div>
                                <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Minimal Essential Bag</p>
                                <div className="flex justify-start mt-4 items-center flex-row space-x-2">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.33203 8.00033L6.66536 11.3337L13.332 4.66699" stroke="#059669" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="text-sm leading-4 text-gray-500">The product is in stock</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-xl font-medium leading-5 text-gray-600">$230</p>
                            </div>
                        </div>
                        <div className="cursor-pointer">
                            <svg width="142" height="22" viewBox="0 0 142 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M16.0972 19.2495C15.9506 19.2501 15.806 19.2156 15.6755 19.1487L11.0005 16.7012L6.32551 19.1487C6.17371 19.2285 6.00255 19.2642 5.8315 19.2516C5.66045 19.239 5.49637 19.1786 5.35791 19.0774C5.21945 18.9762 5.11216 18.8381 5.04824 18.679C4.98433 18.5198 4.96635 18.3459 4.99635 18.177L5.91301 13.0162L2.13635 9.34954C2.01852 9.23195 1.93493 9.0845 1.89456 8.92301C1.85418 8.76151 1.85855 8.59207 1.90718 8.43287C1.96031 8.26996 2.05804 8.1252 2.18929 8.01502C2.32053 7.90484 2.48003 7.83365 2.64968 7.80954L7.87468 7.0487L10.1755 2.3462C10.2506 2.19122 10.3678 2.06052 10.5137 1.96906C10.6596 1.87761 10.8283 1.8291 11.0005 1.8291C11.1727 1.8291 11.3414 1.87761 11.4873 1.96906C11.6333 2.06052 11.7505 2.19122 11.8255 2.3462L14.1538 7.03954L19.3788 7.80037C19.5485 7.82448 19.708 7.89567 19.8392 8.00585C19.9705 8.11603 20.0682 8.26079 20.1213 8.4237C20.17 8.58291 20.1743 8.75235 20.134 8.91384C20.0936 9.07533 20.01 9.22279 19.8922 9.34037L16.1155 13.007L17.0322 18.1679C17.0649 18.3397 17.0478 18.5174 16.9828 18.6798C16.9178 18.8422 16.8077 18.9827 16.6655 19.0845C16.4995 19.2009 16.2997 19.2589 16.0972 19.2495Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clipPath="url(#clip1)">
                                    <path
                                        d="M46.0972 19.2495C45.9506 19.2501 45.806 19.2155 45.6755 19.1487L41.0005 16.7012L36.3255 19.1487C36.1737 19.2285 36.0026 19.2642 35.8315 19.2516C35.6605 19.2389 35.4964 19.1786 35.3579 19.0774C35.2194 18.9762 35.1122 18.8381 35.0482 18.679C34.9843 18.5198 34.9663 18.3459 34.9963 18.177L35.913 13.0162L32.1363 9.34954C32.0185 9.23195 31.9349 9.0845 31.8946 8.92301C31.8542 8.76151 31.8585 8.59207 31.9072 8.43287C31.9603 8.26995 32.058 8.12519 32.1893 8.01501C32.3205 7.90484 32.48 7.83365 32.6497 7.80954L37.8747 7.0487L40.1755 2.3462C40.2506 2.19122 40.3678 2.06052 40.5137 1.96906C40.6596 1.87761 40.8283 1.8291 41.0005 1.8291C41.1727 1.8291 41.3414 1.87761 41.4873 1.96906C41.6333 2.06052 41.7505 2.19122 41.8255 2.3462L44.1538 7.03954L49.3788 7.80037C49.5485 7.82448 49.708 7.89567 49.8392 8.00585C49.9705 8.11603 50.0682 8.26079 50.1213 8.4237C50.17 8.5829 50.1743 8.75234 50.134 8.91384C50.0936 9.07533 50.01 9.22278 49.8922 9.34037L46.1155 13.007L47.0322 18.1679C47.0649 18.3397 47.0478 18.5174 46.9828 18.6798C46.9178 18.8422 46.8077 18.9827 46.6655 19.0845C46.4995 19.2009 46.2997 19.2589 46.0972 19.2495Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clipPath="url(#clip2)">
                                    <path
                                        d="M76.0972 20.2495C75.9506 20.2501 75.806 20.2156 75.6755 20.1487L71.0005 17.7012L66.3255 20.1487C66.1737 20.2285 66.0026 20.2642 65.8315 20.2516C65.6605 20.239 65.4964 20.1786 65.3579 20.0774C65.2194 19.9762 65.1122 19.8381 65.0482 19.679C64.9843 19.5198 64.9663 19.3459 64.9963 19.177L65.913 14.0162L62.1363 10.3495C62.0185 10.232 61.9349 10.0845 61.8946 9.92301C61.8542 9.76151 61.8585 9.59207 61.9072 9.43287C61.9603 9.26996 62.058 9.1252 62.1893 9.01502C62.3205 8.90484 62.48 8.83365 62.6497 8.80954L67.8747 8.0487L70.1755 3.3462C70.2506 3.19122 70.3678 3.06052 70.5137 2.96906C70.6596 2.87761 70.8283 2.8291 71.0005 2.8291C71.1727 2.8291 71.3414 2.87761 71.4873 2.96906C71.6333 3.06052 71.7505 3.19122 71.8255 3.3462L74.1538 8.03954L79.3788 8.80037C79.5485 8.82448 79.708 8.89567 79.8392 9.00585C79.9705 9.11603 80.0682 9.26079 80.1213 9.4237C80.17 9.58291 80.1743 9.75235 80.134 9.91384C80.0936 10.0753 80.01 10.2228 79.8922 10.3404L76.1155 14.007L77.0322 19.1679C77.0649 19.3397 77.0478 19.5174 76.9828 19.6798C76.9178 19.8422 76.8077 19.9827 76.6655 20.0845C76.4995 20.2009 76.2997 20.2589 76.0972 20.2495Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clipPath="url(#clip3)">
                                    <path
                                        d="M106.097 20.2495C105.951 20.2501 105.806 20.2156 105.676 20.1487L101.001 17.7012L96.3255 20.1487C96.1737 20.2285 96.0026 20.2642 95.8315 20.2516C95.6605 20.239 95.4964 20.1786 95.3579 20.0774C95.2194 19.9762 95.1122 19.8381 95.0482 19.679C94.9843 19.5198 94.9663 19.3459 94.9963 19.177L95.913 14.0162L92.1363 10.3495C92.0185 10.232 91.9349 10.0845 91.8946 9.92301C91.8542 9.76151 91.8585 9.59207 91.9072 9.43287C91.9603 9.26996 92.058 9.1252 92.1893 9.01502C92.3205 8.90484 92.48 8.83365 92.6497 8.80954L97.8747 8.0487L100.176 3.3462C100.251 3.19122 100.368 3.06052 100.514 2.96906C100.66 2.87761 100.828 2.8291 101.001 2.8291C101.173 2.8291 101.341 2.87761 101.487 2.96906C101.633 3.06052 101.75 3.19122 101.826 3.3462L104.154 8.03954L109.379 8.80037C109.549 8.82448 109.708 8.89567 109.839 9.00585C109.97 9.11603 110.068 9.26079 110.121 9.4237C110.17 9.58291 110.174 9.75235 110.134 9.91384C110.094 10.0753 110.01 10.2228 109.892 10.3404L106.116 14.007L107.032 19.1679C107.065 19.3397 107.048 19.5174 106.983 19.6798C106.918 19.8422 106.808 19.9827 106.666 20.0845C106.5 20.2009 106.3 20.2589 106.097 20.2495Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clipPath="url(#clip4)">
                                    <path
                                        d="M121.766 8.70145L121.761 8.70648L121.757 8.71008L121.752 8.70853L120.907 8.43287L121.758 8.6929M121.766 8.70145L121.758 8.6929M121.766 8.70145L121.77 8.69655L121.766 8.70145ZM121.766 8.70145L121.758 8.6929M134.193 13.1709L135.106 18.3125L135.099 18.3125L130.435 15.8711L130.001 15.6436L129.566 15.8711L124.926 18.3001L125.836 13.1801L125.923 12.6904L125.566 12.3439L121.842 8.72845L127.01 7.97593L127.499 7.90467L127.716 7.46051L130.001 2.79184L132.314 7.45595L132.533 7.89598L133.019 7.96676L138.187 8.71928L134.463 12.3348L134.106 12.6812L134.193 13.1709Z"
                                        stroke="#1F2937"
                                        strokeWidth="1.874"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="22" height="22" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1">
                                        <rect width="22" height="22" fill="white" transform="translate(30)" />
                                    </clipPath>
                                    <clipPath id="clip2">
                                        <rect width="22" height="22" fill="white" transform="translate(60)" />
                                    </clipPath>
                                    <clipPath id="clip3">
                                        <rect width="21.3636" height="22" fill="white" transform="translate(90)" />
                                    </clipPath>
                                    <clipPath id="clip4">
                                        <rect width="22" height="22" fill="white" transform="translate(119.363)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div>
                            <p className="text-base leading-6  text-gray-600">The bag is best suitable for people who prefer comfort and fashion together. It is most fitted for proffessional lifestyle. It also comes with a one year warranty</p>
                        </div>
                        <div className="flex flex-col justify-start items-start space-y-4">
                            <div>
                                <p id="colorText" className="text-base font-medium leading-4 text-gray-800">
                                    {color}
                                </p>
                            </div>
                            <div className="flex flex-row justify-start items-start space-x-6">
                                <button aria-label="white" onClick={() => getColor("White")} className="focus:outline-none ring-1 ring-offset-2 ring-black p-3 bg-white rounded-full"></button>
                                <button aria-label="red" onClick={() => getColor("Red")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black p-3 bg-red-700 rounded-full"></button>
                                <button aria-label="yellow" onClick={() => getColor("Yellow")} className="focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-black p-3 bg-yellow-300 rounded-full"></button>
                            </div>
                        </div>

                        <div className="flex flex-col w-full space-y-4">
                            <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full md:w-96 lg:w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white">Add to Bag</button>
                            <button className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full md:w-96 lg:w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white">Add to Wishlist</button>
                        </div>
                    </div>
                    <button onClick={() => setShowModal(false)} aria-label="close" className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337" stroke="#1F2937" strokeLinecap="square" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickView5;
