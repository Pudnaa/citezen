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
export default function NavigationV() {
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
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuSm, setShowMenuSm] = useState(false);
    const [search, setSearch] = useState(false);
    if (isEmpty(datasrc)) return null;
    // console.log("NavigationV config", config);
    // console.log("NavigationV datasrc", datasrc);
    // console.log("NavigationV otherattr", otherattr);
    // console.log("NavigationV positionConfig", positionConfig);

    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto relative">
                <div className="py-4 md:py-5 lg:py-9 mx-4 md:mx-6">
                    <div className="flex items-center justify-between">
                        <div className="lg:w-3/12 cursor-pointer" role="img" aria-label="Luxiwood. Logo.">
                            <svg className="fill-stroke text-gray-800 dark:text-white" width={146} height={24} viewBox="0 0 146 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M37.376 17.336H45.728V20H34.064V4.16H37.376V17.336ZM52.154 20.24C51.354 20.24 50.634 20.096 49.994 19.808C49.354 19.52 48.842 19.064 48.458 18.44C48.09 17.816 47.906 16.992 47.906 15.968V8H51.194V15.176C51.194 16.104 51.386 16.752 51.77 17.12C52.154 17.472 52.706 17.648 53.426 17.648C54.114 17.648 54.722 17.4 55.25 16.904C55.794 16.392 56.066 15.576 56.066 14.456V8H59.354V20H56.426L56.306 17.912C55.906 18.696 55.354 19.28 54.65 19.664C53.946 20.048 53.114 20.24 52.154 20.24ZM65.4779 8L67.9979 12.176L70.5419 8H74.2619L70.0139 13.928L74.3339 20H70.5179L67.8539 15.656L65.1419 20H61.4219L65.8379 13.928L61.6379 8H65.4779ZM78.134 6.272C76.774 6.272 76.094 5.688 76.094 4.52C76.094 3.336 76.774 2.744 78.134 2.744C79.494 2.744 80.174 3.336 80.174 4.52C80.174 5.688 79.494 6.272 78.134 6.272ZM79.766 8V20H76.478V8H79.766ZM98.7314 8H102.235L98.3954 20H94.6034L91.9874 11.84L89.4674 20H85.6754L81.8354 8H85.3394L87.7394 17.192L90.4034 8H93.6674L96.3554 17.192L98.7314 8ZM109.419 7.76C110.619 7.76 111.683 8.008 112.611 8.504C113.539 9 114.259 9.712 114.771 10.64C115.299 11.568 115.563 12.688 115.563 14C115.563 15.312 115.299 16.432 114.771 17.36C114.259 18.288 113.539 19 112.611 19.496C111.683 19.992 110.619 20.24 109.419 20.24C108.203 20.24 107.131 19.992 106.203 19.496C105.291 19 104.571 18.288 104.043 17.36C103.531 16.432 103.275 15.312 103.275 14C103.275 12.688 103.531 11.568 104.043 10.64C104.571 9.712 105.291 9 106.203 8.504C107.131 8.008 108.203 7.76 109.419 7.76ZM109.419 10.208C108.523 10.208 107.819 10.528 107.307 11.168C106.811 11.792 106.563 12.736 106.563 14C106.563 15.264 106.811 16.216 107.307 16.856C107.819 17.48 108.523 17.792 109.419 17.792C110.299 17.792 110.987 17.48 111.483 16.856C111.995 16.216 112.251 15.264 112.251 14C112.251 12.736 111.995 11.792 111.483 11.168C110.987 10.528 110.299 10.208 109.419 10.208ZM123.786 7.76C124.986 7.76 126.05 8.008 126.978 8.504C127.906 9 128.626 9.712 129.138 10.64C129.666 11.568 129.93 12.688 129.93 14C129.93 15.312 129.666 16.432 129.138 17.36C128.626 18.288 127.906 19 126.978 19.496C126.05 19.992 124.986 20.24 123.786 20.24C122.57 20.24 121.498 19.992 120.57 19.496C119.658 19 118.938 18.288 118.41 17.36C117.898 16.432 117.642 15.312 117.642 14C117.642 12.688 117.898 11.568 118.41 10.64C118.938 9.712 119.658 9 120.57 8.504C121.498 8.008 122.57 7.76 123.786 7.76ZM123.786 10.208C122.89 10.208 122.186 10.528 121.674 11.168C121.178 11.792 120.93 12.736 120.93 14C120.93 15.264 121.178 16.216 121.674 16.856C122.186 17.48 122.89 17.792 123.786 17.792C124.666 17.792 125.354 17.48 125.85 16.856C126.362 16.216 126.618 15.264 126.618 14C126.618 12.736 126.362 11.792 125.85 11.168C125.354 10.528 124.666 10.208 123.786 10.208ZM137.217 20.24C136.225 20.24 135.337 19.992 134.553 19.496C133.785 19 133.177 18.296 132.729 17.384C132.297 16.456 132.081 15.336 132.081 14.024C132.081 12.696 132.313 11.568 132.777 10.64C133.241 9.696 133.865 8.984 134.649 8.504C135.449 8.008 136.345 7.76 137.337 7.76C138.201 7.76 138.945 7.968 139.569 8.384C140.193 8.8 140.665 9.352 140.985 10.04V2.744H144.273V20H141.321L141.177 17.672C140.841 18.472 140.321 19.104 139.617 19.568C138.913 20.016 138.113 20.24 137.217 20.24ZM138.177 17.72C139.025 17.72 139.705 17.392 140.217 16.736C140.729 16.064 140.985 15.12 140.985 13.904C140.985 12.752 140.729 11.864 140.217 11.24C139.721 10.6 139.057 10.28 138.225 10.28C137.329 10.28 136.625 10.6 136.113 11.24C135.617 11.864 135.369 12.784 135.369 14C135.369 15.216 135.617 16.144 136.113 16.784C136.609 17.408 137.297 17.72 138.177 17.72Z"
                                    fill="currentColor"
                                />
                                <path d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                <path
                                    d="M12 11.25V10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5H2.25ZM5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5V11.25H5.25Z"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="hidden w-6/12 lg:flex justify-center">
                            <ul className="flex items-center space-x-14">
                                <li className="flex items-center space-x-2">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </a>
                                    <button aria-label="view options" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Catalog
                                    </a>
                                    <button aria-label="view options" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Blog
                                    </a>
                                    <button aria-label="view options" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Contact us
                                    </a>
                                    <button aria-label="view options" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 flex items-center lg:justify-end space-x-6 lg:space-x-4 xl:space-x-6">
                            <div className="hidden md:flex items-center space-x-2">
                                <button aria-label="Search" onClick={() => setSearch(!search)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                    <div>
                                        <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 21L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </button>
                                <input id="search-bar" type="text" placeholder="Search products" className={`bg-transparent px-2 text-sm text-gray-600 focus:outline-none ${search ? "" : "hidden"}`} />
                            </div>
                            <a aria-label="Go to Cart" href="javascript:void(0)" className="text-gray-800 dark:text-white hidden md:block focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 8.25V6.75C7.5 5.55653 7.97411 4.41193 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25V2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C16.0259 4.41193 16.5 5.55653 16.5 6.75V8.25M3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9V19.125C3 20.5425 4.2075 21.75 5.625 21.75H18.375C19.7925 21.75 21 20.6011 21 19.1836V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M7.5 10.5V11.25C7.5 12.4435 7.97411 13.5881 8.81802 14.432C9.66193 15.2759 10.8065 15.75 12 15.75C13.1935 15.75 14.3381 15.2759 15.182 14.432C16.0259 13.5881 16.5 12.4435 16.5 11.25V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <button aria-label="open Menu" onClick={() => setShowMenu(true)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hidden md:block lg:hidden">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button aria-label="open Menu" onClick={() => setShowMenuSm(true)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded md:hidden">
                                <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="md-menu" className={`${showMenu ? "md:block" : "hidden"} lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 dark:bg-opacity-70 bg-white bg-opacity-70`}>
                    <div className="relative w-full h-screen">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-white dark:bg-gray-900 p-6 justify-center">
                            <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                                <div className="flex items-center space-x-3 mx-2">
                                    <div>
                                        <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <input type="text" placeholder="Search for products" className="text-sm text-gray-600 focus:outline-none bg-transparent" />
                                </div>
                                <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-8">
                                <ul className="flex flex-col space-y-8">
                                    <li className="flex items-center justify-between">
                                        <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Home
                                        </a>
                                        <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Catalog
                                        </a>
                                        <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Blog
                                        </a>
                                        <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                            Contact us
                                        </a>
                                        <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                            <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu" className={`${showMenuSm ? "flex" : "hidden"} md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white dark:bg-gray-900 pt-6`}>
                    <div className="bg-white p-6 justify-center dark:bg-gray-900">
                        <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                            <div className="flex items-center space-x-3">
                                <div>
                                    <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <input type="text" placeholder="Search for products" className="text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent" />
                            </div>
                            <button onClick={() => setShowMenuSm(false)} aria-label="close menu" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="mt-6">
                            <ul className="flex flex-col space-y-8">
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Home
                                    </a>
                                    <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Catalog
                                    </a>
                                    <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Blog
                                    </a>
                                    <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="flex items-center justify-between">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Contact us
                                    </a>
                                    <button aria-label="add" className="text-gray-800 dark:text-white focus:outline-none dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-800 hover:bg-gray-100">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 3.33301V12.6663" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.33203 8H12.6654" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
