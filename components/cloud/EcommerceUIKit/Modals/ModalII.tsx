import { useContext,useState } from "react";
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

export default function ModalII() {
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
    const [show, setshow] = useState(true);
    if (isEmpty(datasrc)) return null;
    // console.log("ModalII config", config);
    // console.log("ModalII datasrc", datasrc);
    // console.log("ModalII otherattr", otherattr);
    // console.log("ModalII positionConfig", positionConfig);

    return (
        <div className="py-80">
            <div className="py-12">
                <div className="w-full flex items-center  justify-center" id="button">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={() => setshow(true)}>
                        Open Modal
                    </button>
                </div>
                <div className={`${show ? "flex" : "hidden"} h-full w-full absolute items-center justify-center top-0 md:px-6 md:py-10 py-9 px-4`} id="modal">
                    <div className="bg-black bg-opacity-95 w-full h-full absolute" onClick={() => setshow(false)} />
                    <div className="2xl:w-1/2 bg-white sm:w-auto w-full relative z-30 lg:py-8 lg:px-14 md:py-8 md:px-10 py-5 px-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <svg width={125} height={28} viewBox="0 0 125 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.764 27.396C6.796 27.396 4.312 24.984 4.312 20.16V13.392H0.964V9.324H4.312V4.14H9.748V9.324H14.968V13.392H9.748V19.944C9.748 20.952 9.976 21.708 10.432 22.212C10.912 22.716 11.668 22.968 12.7 22.968C13.012 22.968 13.336 22.932 13.672 22.86C14.032 22.788 14.416 22.692 14.824 22.572L15.616 26.532C15.112 26.796 14.512 27 13.816 27.144C13.12 27.312 12.436 27.396 11.764 27.396ZM17.2827 27V1.62H22.7187V11.736C23.3427 10.824 24.1467 10.14 25.1307 9.684C26.1147 9.204 27.2067 8.964 28.4067 8.964C32.5587 8.964 34.6347 11.436 34.6347 16.38V27H29.1987V16.632C29.1987 15.408 28.9707 14.532 28.5147 14.004C28.0587 13.452 27.3867 13.176 26.4987 13.176C25.3467 13.176 24.4227 13.536 23.7267 14.256C23.0547 14.976 22.7187 15.936 22.7187 17.136V27H17.2827ZM47.5128 27.396C45.4248 27.396 43.6248 27.024 42.1128 26.28C40.6248 25.512 39.4728 24.444 38.6568 23.076C37.8648 21.684 37.4688 20.052 37.4688 18.18C37.4688 16.356 37.8528 14.76 38.6208 13.392C39.4128 12 40.4808 10.92 41.8248 10.152C43.1928 9.36 44.7648 8.964 46.5408 8.964C49.1088 8.964 51.1488 9.78 52.6608 11.412C54.1728 13.02 54.9288 15.204 54.9288 17.964V19.332H42.6528C42.8448 20.724 43.3488 21.744 44.1648 22.392C45.0048 23.016 46.1568 23.328 47.6208 23.328C48.5808 23.328 49.5528 23.184 50.5368 22.896C51.5208 22.608 52.4088 22.164 53.2008 21.564L54.6408 25.2C53.7528 25.872 52.6608 26.412 51.3648 26.82C50.0928 27.204 48.8088 27.396 47.5128 27.396ZM46.7568 12.564C45.6048 12.564 44.6688 12.912 43.9488 13.608C43.2528 14.304 42.8208 15.276 42.6528 16.524H50.4288C50.2848 13.884 49.0608 12.564 46.7568 12.564Z"
                                        fill="#A3A3A3"
                                    />
                                    <path
                                        d="M66.3347 27.396C64.4147 27.396 62.7347 27.024 61.2947 26.28C59.8787 25.512 58.7867 24.432 58.0187 23.04C57.2507 21.648 56.8667 20.004 56.8667 18.108C56.8667 16.212 57.2507 14.58 58.0187 13.212C58.7867 11.844 59.8787 10.8 61.2947 10.08C62.7347 9.336 64.4147 8.964 66.3347 8.964C67.4627 8.964 68.6027 9.132 69.7547 9.468C70.9067 9.804 71.8427 10.284 72.5627 10.908L71.0507 14.652C70.4507 14.172 69.7787 13.8 69.0347 13.536C68.2907 13.248 67.5707 13.104 66.8747 13.104C65.4587 13.104 64.3547 13.548 63.5627 14.436C62.7947 15.3 62.4107 16.536 62.4107 18.144C62.4107 19.728 62.7947 20.976 63.5627 21.888C64.3547 22.776 65.4587 23.22 66.8747 23.22C67.5467 23.22 68.2547 23.088 68.9987 22.824C69.7667 22.56 70.4507 22.176 71.0507 21.672L72.5627 25.416C71.8427 26.04 70.9067 26.532 69.7547 26.892C68.6027 27.228 67.4627 27.396 66.3347 27.396ZM74.5621 27V9.324H79.8901V12.384C80.7301 10.32 82.5301 9.18 85.2901 8.964L86.8741 8.856L87.1981 13.428L84.1381 13.752C81.4501 14.016 80.1061 15.384 80.1061 17.856V27H74.5621ZM88.822 5.904V0.827998H94.69V5.904H88.822ZM89.038 27V9.324H94.474V27H89.038ZM109.219 27.396C107.971 27.396 106.843 27.12 105.835 26.568C104.851 26.016 104.119 25.284 103.639 24.372V27H98.3108V1.62H103.747V11.7C104.275 10.86 105.019 10.2 105.979 9.72C106.963 9.216 108.043 8.964 109.219 8.964C110.755 8.964 112.099 9.336 113.251 10.08C114.427 10.824 115.339 11.88 115.987 13.248C116.635 14.616 116.959 16.248 116.959 18.144C116.959 20.04 116.635 21.684 115.987 23.076C115.339 24.444 114.427 25.512 113.251 26.28C112.099 27.024 110.755 27.396 109.219 27.396ZM107.599 23.328C108.751 23.328 109.687 22.908 110.407 22.068C111.127 21.228 111.487 19.92 111.487 18.144C111.487 16.392 111.127 15.108 110.407 14.292C109.687 13.452 108.751 13.032 107.599 13.032C106.423 13.032 105.475 13.452 104.755 14.292C104.035 15.108 103.675 16.392 103.675 18.144C103.675 19.92 104.035 21.228 104.755 22.068C105.475 22.908 106.423 23.328 107.599 23.328ZM119.072 27V21.24H124.904V27H119.072Z"
                                        fill="#111827"
                                    />
                                </svg>
                            </div>
                            <button aria-label="close Modal" onClick={() => setshow(false)} className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.4119 12.0002L17.7119 7.71019C17.9002 7.52188 18.006 7.26649 18.006 7.00019C18.006 6.73388 17.9002 6.47849 17.7119 6.29019C17.5236 6.10188 17.2682 5.99609 17.0019 5.99609C16.7356 5.99609 16.4802 6.10188 16.2919 6.29019L12.0019 10.5902L7.71189 6.29019C7.52359 6.10188 7.26819 5.99609 7.00189 5.99609C6.73559 5.99609 6.4802 6.10188 6.29189 6.29019C6.10359 6.47849 5.9978 6.73388 5.9978 7.00019C5.9978 7.26649 6.10359 7.52188 6.29189 7.71019L10.5919 12.0002L6.29189 16.2902C6.19816 16.3831 6.12377 16.4937 6.073 16.6156C6.02223 16.7375 5.99609 16.8682 5.99609 17.0002C5.99609 17.1322 6.02223 17.2629 6.073 17.3848C6.12377 17.5066 6.19816 17.6172 6.29189 17.7102C6.38486 17.8039 6.49546 17.8783 6.61732 17.9291C6.73917 17.9798 6.86988 18.006 7.00189 18.006C7.1339 18.006 7.26461 17.9798 7.38647 17.9291C7.50833 17.8783 7.61893 17.8039 7.71189 17.7102L12.0019 13.4102L16.2919 17.7102C16.3849 17.8039 16.4955 17.8783 16.6173 17.9291C16.7392 17.9798 16.8699 18.006 17.0019 18.006C17.1339 18.006 17.2646 17.9798 17.3865 17.9291C17.5083 17.8783 17.6189 17.8039 17.7119 17.7102C17.8056 17.6172 17.88 17.5066 17.9308 17.3848C17.9816 17.2629 18.0077 17.1322 18.0077 17.0002C18.0077 16.8682 17.9816 16.7375 17.9308 16.6156C17.88 16.4937 17.8056 16.3831 17.7119 16.2902L13.4119 12.0002Z"
                                        fill="#111827"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-7 relative flex items-center justify-center">
                            <img src="https://i.ibb.co/b1ZrzXK/Group-925.png" alt="image potrait" className="w-full sm:block hidden" />
                            <img src="https://i.ibb.co/Lnjkqz8/Group-925-mobil.png" alt="image potrait" className="w-full sm:hidden" />
                            <div className="absolute bottom-0 mb-6 flex flex-col items-center justify-center">
                                <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-white">ENJOY 10% OFF</h1>
                                <p className="md:w-auto w-48 text-center text-base leading-4 mt-3 text-white">Enter your email to get 10% of discount</p>
                            </div>
                        </div>
                        <div className="border border-gray-400 w-full mt-4 flex items-center">
                            <input className="w-full text-base font-medium leading-none text-gray-800 p-4 focus:outline-none placeholder-gray-800" placeholder="Email address" />
                            <button className="sm:flex hidden flex-shrink-0 text-base font-medium leading-6 p-4 bg-gray-900 text-white uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-800">Get 10% OFF</button>
                        </div>
                        <button className="sm:hidden mt-2 w-full text-base font-medium leading-6 p-4 bg-gray-900 text-white uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-800">Get 10% OFF</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
