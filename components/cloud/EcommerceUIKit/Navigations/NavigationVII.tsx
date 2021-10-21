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

export default function NavigationVII() {
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
  const [desktopInput, setDesktopInput] = useState(false);
  const [tabView, setTabView] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [list, setList] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("NavigationVII config", config);
  // console.log("NavigationVII datasrc", datasrc);
  // console.log("NavigationVII otherattr", otherattr);
  // console.log("NavigationVII positionConfig", positionConfig);

  const changeText = (t: any) => {
    let text = document.getElementById("text");
    // text.innerHTML = t;
  };

  const changeText2 = (t: any) => {
    let text2 = document.getElementById("text2");
    // text2.innerHTML = t;
  };

  return (
    <div className="dark:bg-gray-900 ">
      <div className="lg:mx-auto lg:container lg:py-16 py-5 px-6">
        <div className="lg:flex hidden items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="cursor-pointer dark:text-gray-200 text-gray-500">
              <svg
                className="fill-stroke"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cursor-pointer dark:text-gray-200 text-gray-500">
              <svg
                className="fill-stroke"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7957 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="cursor-pointer dark:text-gray-200 text-gray-500">
              <svg
                className="fill-stroke"
                width={22}
                height={18}
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.1623 2.65593C20.3989 2.99362 19.5893 3.2154 18.7603 3.31393C19.6341 2.79136 20.288 1.96894 20.6003 0.999927C19.7803 1.48793 18.8813 1.82993 17.9443 2.01493C17.3149 1.34151 16.4807 0.89489 15.5713 0.744511C14.6618 0.594133 13.7282 0.748418 12.9156 1.18338C12.1029 1.61834 11.4567 2.30961 11.0774 3.14972C10.6981 3.98983 10.607 4.93171 10.8183 5.82893C9.15541 5.74558 7.52863 5.31345 6.04358 4.56059C4.55854 3.80773 3.24843 2.75097 2.1983 1.45893C1.82659 2.09738 1.63125 2.82315 1.6323 3.56193C1.6323 5.01193 2.3703 6.29293 3.4923 7.04293C2.82831 7.02202 2.17893 6.84271 1.5983 6.51993V6.57193C1.5985 7.53763 1.93267 8.47354 2.54414 9.22099C3.15562 9.96843 4.00678 10.4814 4.9533 10.6729C4.33691 10.84 3.6906 10.8646 3.0633 10.7449C3.33016 11.5762 3.8503 12.3031 4.55089 12.824C5.25147 13.3449 6.09743 13.6337 6.9703 13.6499C6.10278 14.3313 5.10947 14.8349 4.04718 15.1321C2.98488 15.4293 1.87442 15.5142 0.779297 15.3819C2.69099 16.6114 4.91639 17.2641 7.1893 17.2619C14.8823 17.2619 19.0893 10.8889 19.0893 5.36193C19.0893 5.18193 19.0843 4.99993 19.0763 4.82193C19.8952 4.23009 20.6019 3.49695 21.1633 2.65693L21.1623 2.65593Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="space-x-5 flex items-center">
            <p className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-base leading-4 cursor-pointer text-center text-gray-800">
              Track Order
            </p>
            <p className="hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-base leading-4 cursor-pointer text-center text-gray-800">
              Support
            </p>
            <button
              onClick={() => setList(!list)}
              className="w-38 flex-shrink-0 relative flex items-center cursor-pointer"
            >
              <p
                id="text"
                className="pl-2 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-base leading-4 text-center text-gray-800 pr-3"
              >
                English (US)
              </p>
              <svg
                className={`${list ? "hidden" : "block"} dark:text-white`}
                id="iconClose"
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                id="iconOpen"
                className={`${
                  list ? "block" : "hidden"
                } dark:text-white text-gray-800 transform rotate-180`}
                width={10}
                height={6}
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                id="dropdownlist"
                className={` ${
                  list ? "flex" : "hidden"
                } w-28 top-6 absolute z-10 bg-white dark:bg-gray-800 list-none justify-start items-start flex-col`}
              >
                <li
                  onClick={() => changeText("Russian")}
                  className="pl-2 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-gray-800"
                >
                  Russian
                </li>
                <li
                  onClick={() => changeText("Hindi")}
                  className="pl-2 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-gray-800"
                >
                  Hindi
                </li>
                <li
                  onClick={() => changeText("Chinease")}
                  className="pl-2 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-gray-800"
                >
                  Chinease
                </li>
                <li
                  onClick={() => changeText("English (US)")}
                  className="pl-2 hover:text-gray-500 dark:text-white dark:hover:text-gray-300 text-gray-800"
                >
                  English (US)
                </li>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`${
            tabView ? "hidden" : "flex"
          } items-center justify-between lg:mt-10`}
          id="mobileNav"
        >
          <div className="flex items-center">
            <div>
              <svg
                className="fill-current dark:text-white text-gray-800"
                width={118}
                height={28}
                viewBox="0 0 118 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.9858 10.5653H56.5227C56.4716 7.45454 53.9148 5.30682 50.0284 5.30682C46.2017 5.30682 43.3977 7.42045 43.4148 10.5909C43.4062 13.1648 45.2216 14.6392 48.1705 15.3466L50.071 15.8239C51.9716 16.2841 53.0284 16.8295 53.0369 18.0057C53.0284 19.2841 51.8182 20.1534 49.9432 20.1534C48.0256 20.1534 46.6449 19.267 46.5256 17.5199H42.9545C43.0483 21.2955 45.75 23.2472 49.9858 23.2472C54.2472 23.2472 56.7528 21.2102 56.7614 18.0142C56.7528 15.108 54.5625 13.5653 51.5284 12.8835L49.9602 12.5085C48.4432 12.1591 47.1733 11.5966 47.1989 10.3438C47.1989 9.21875 48.196 8.39204 50.0028 8.39204C51.767 8.39204 52.8494 9.19318 52.9858 10.5653ZM62.8061 15.4318C62.8146 13.7443 63.8459 12.7557 65.3288 12.7557C66.8033 12.7557 67.6726 13.7017 67.6641 15.3125V23H71.2947V14.6648C71.3033 11.5966 69.4964 9.73864 66.7692 9.73864C64.7834 9.73864 63.4538 10.6761 62.8572 12.2188H62.7038V5.54545H59.1754V23H62.8061V15.4318ZM80.0668 23.2557C84.0384 23.2557 86.5099 20.5369 86.5099 16.5057C86.5099 12.4489 84.0384 9.73864 80.0668 9.73864C76.0952 9.73864 73.6236 12.4489 73.6236 16.5057C73.6236 20.5369 76.0952 23.2557 80.0668 23.2557ZM80.0838 20.4432C78.2514 20.4432 77.3139 18.7642 77.3139 16.4801C77.3139 14.196 78.2514 12.5085 80.0838 12.5085C81.8821 12.5085 82.8196 14.196 82.8196 16.4801C82.8196 18.7642 81.8821 20.4432 80.0838 20.4432ZM88.8707 27.9091H92.5014V20.9034H92.6122C93.1151 21.9943 94.2145 23.2131 96.3281 23.2131C99.3111 23.2131 101.638 20.8523 101.638 16.4716C101.638 11.9716 99.2088 9.73864 96.3366 9.73864C94.1463 9.73864 93.098 11.0426 92.6122 12.108H92.4503V9.90909H88.8707V27.9091ZM92.4247 16.4545C92.4247 14.1193 93.4134 12.6278 95.1776 12.6278C96.9759 12.6278 97.9304 14.1875 97.9304 16.4545C97.9304 18.7386 96.9588 20.3239 95.1776 20.3239C93.4304 20.3239 92.4247 18.7898 92.4247 16.4545ZM109.973 23.2557C113.945 23.2557 116.416 20.5369 116.416 16.5057C116.416 12.4489 113.945 9.73864 109.973 9.73864C106.001 9.73864 103.53 12.4489 103.53 16.5057C103.53 20.5369 106.001 23.2557 109.973 23.2557ZM109.99 20.4432C108.158 20.4432 107.22 18.7642 107.22 16.4801C107.22 14.196 108.158 12.5085 109.99 12.5085C111.788 12.5085 112.726 14.196 112.726 16.4801C112.726 18.7642 111.788 20.4432 109.99 20.4432Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1 1H4.34646L6.39072 7.12219H26L25.2126 10.7501H7.6021L8.28348 12.7907H24.6221L22.2599 20.5H8.28348L7.10237 17.5523H20.0945L20.6851 15.5116H6.51182L1 1Z"
                  fill="currentColor"
                />
                <path
                  d="M4.34646 1L4.82072 0.841641L4.70665 0.5H4.34646V1ZM1 1V0.5H0.275238L0.53258 1.17754L1 1ZM6.39072 7.12219L5.91646 7.28055L6.03053 7.62219H6.39072V7.12219ZM26 7.12219L26.4887 7.22824L26.6202 6.62219H26V7.12219ZM25.2126 10.7501V11.2501H25.6158L25.7013 10.8562L25.2126 10.7501ZM7.6021 10.7501V10.2501H6.90801L7.12784 10.9085L7.6021 10.7501ZM8.28348 12.7907L7.80922 12.9491L7.9233 13.2907H8.28348V12.7907ZM24.6221 12.7907L25.1002 12.9372L25.2982 12.2907H24.6221V12.7907ZM22.2599 20.5V21H22.6296L22.7379 20.6465L22.2599 20.5ZM8.28348 20.5L7.81935 20.686L7.94518 21H8.28348V20.5ZM7.10237 17.5523V17.0523H6.36338L6.63825 17.7383L7.10237 17.5523ZM20.0945 17.5523V18.0523H20.4703L20.5748 17.6913L20.0945 17.5523ZM20.6851 15.5116L21.1654 15.6506L21.3503 15.0116H20.6851V15.5116ZM6.51182 15.5116L6.0444 15.6892L6.16688 16.0116H6.51182V15.5116ZM4.34646 0.5H1V1.5H4.34646V0.5ZM6.86498 6.96383L4.82072 0.841641L3.8722 1.15836L5.91646 7.28055L6.86498 6.96383ZM6.39072 7.62219H26V6.62219H6.39072V7.62219ZM25.5114 7.01614L24.724 10.644L25.7013 10.8562L26.4887 7.22824L25.5114 7.01614ZM25.2126 10.2501H7.6021V11.2501H25.2126V10.2501ZM8.75774 12.6323L8.07636 10.5917L7.12784 10.9085L7.80922 12.9491L8.75774 12.6323ZM24.6221 12.2907H8.28348V13.2907H24.6221V12.2907ZM22.7379 20.6465L25.1002 12.9372L24.144 12.6442L21.7818 20.3535L22.7379 20.6465ZM8.28348 21H22.2599V20H8.28348V21ZM6.63825 17.7383L7.81935 20.686L8.74761 20.314L7.5665 17.3664L6.63825 17.7383ZM20.0945 17.0523H7.10237V18.0523H20.0945V17.0523ZM20.2048 15.3726L19.6142 17.4133L20.5748 17.6913L21.1654 15.6506L20.2048 15.3726ZM6.51182 16.0116H20.6851V15.0116H6.51182V16.0116ZM0.53258 1.17754L6.0444 15.6892L6.97924 15.3341L1.46742 0.822464L0.53258 1.17754Z"
                  fill="currentColor"
                />
                <ellipse
                  cx="10.5585"
                  cy="25.375"
                  rx="1.47059"
                  ry="1.625"
                  fill="currentColor"
                />
                <ellipse
                  cx="20.162"
                  cy="25.375"
                  rx="1.47059"
                  ry="1.625"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="ml-16 lg:flex hidden">
              <ul className="flex items-center space-x-5">
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Home
                </li>
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Electronics
                </li>
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Fashion
                </li>
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Beauty
                </li>
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Home &amp; Garden
                </li>
                <li className="hover:text-gray-500 dark:text-white text-base leading-4 cursor-pointer text-gray-800">
                  Sports
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-7">
            <div className="cursor-pointer lg:flex hidden items-center relative">
              <div
                className="absolute left-0 ml-2 cursor-pointer z-40"
                onClick={() => setDesktopInput(!desktopInput)}
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={22}
                  height={22}
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.1111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.1111C15.2222 4.18375 12.0385 1 8.1111 1C4.18375 1 1 4.18375 1 8.1111C1 12.0385 4.18375 15.2222 8.1111 15.2222Z"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.9995 16.9995L13.1328 13.1328"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                className={` ${
                  desktopInput ? "w-64 opacity-100" : "w-0 opacity-0 "
                } relative ease-in-out duration-300 transition z-0 py-3 bg-gray-100 dark:bg-gray-800 pl-10 focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600 dark:placeholder-gray-300`}
                placeholder="Search for products"
                id="desktopInput"
              />
            </div>
            {/* Responsive */}
            <div
              className="cursor-pointer lg:hidden flex items-center relative"
              onClick={() => setTabView(true)}
            >
              <div className="cursor-pointer z-40">
                <svg
                  className="fill-stroke text-gray-800 dark:text-white dark:hover:text-gray-300"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                  />
                  <path
                    d="M15.8574 15.8574L21.0001 21.0001"
                    stroke="currentColor"
                    strokeMiterlimit={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            {/* Responsive */}
            <div className="cursor-pointer sm:flex hidden">
              <svg
                className="fill-stroke text-gray-800 dark:text-white dark:hover:text-gray-300"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64157 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77739 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="cursor-pointer sm:flex hidden">
              <svg
                className="fill-stroke text-gray-800 dark:text-white dark:hover:text-gray-300"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1H4.81818L7.37636 14.39C7.46365 14.8504 7.70273 15.264 8.05175 15.5583C8.40077 15.8526 8.83748 16.009 9.28545 16H18.5636C19.0116 16.009 19.4483 15.8526 19.7973 15.5583C20.1464 15.264 20.3854 14.8504 20.4727 14.39L22 6H5.77273"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="cursor-pointer sm:flex hidden">
              <svg
                className="fill-stroke text-gray-800 dark:text-white dark:hover:text-gray-300"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              className="cursor-pointer lg:hidden"
              onClick={() => setShowMenu(true)}
            >
              <svg
                className="fill-stroke text-gray-800 dark:text-white"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 18L20 18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L20 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className={` items-center justify-between ${
            tabView ? "flex" : "hidden"
          }`}
          id="displayMobile"
        >
          <div className="flex items-center bg-gray-100 w-full px-4">
            <div>
              <svg
                className="fill-stroke text-gray-800 dark:text-white"
                width={18}
                height={18}
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.1111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.1111C15.2222 4.18375 12.0385 1 8.1111 1C4.18375 1 1 4.18375 1 8.1111C1 12.0385 4.18375 15.2222 8.1111 15.2222Z"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9995 16.9995L13.1328 13.1328"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              className="bg-gray-100 w-full relative ease-in-out duration-300 transition z-0 py-3 px-2 pl-4 focus:outline-none text-sm leading-none text-gray-600 placeholder-gray-600"
              placeholder="Search for products"
            />
            <div onClick={() => setTabView(false)} className="cursor-pointer">
              <svg
                className="fill-stroke text-gray-800 dark:text-white"
                width={10}
                height={10}
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 1L1 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L9 9"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div
            className="cursor-pointer lg:hidden ml-6"
            onClick={() => setShowMenu(true)}
          >
            <svg
              className="fill-stroke text-gray-800 dark:text-white"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 12L20 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L20 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        {/* Mobile List */}
      </div>
      <div
        className={` ${tabView ? "" : "flex"} ${
          showMenu ? "flex" : "hidden"
        }  w-full h-screen z-50 fixed lg:hidden  top-0 items-center justify-end`}
        id="sliderMenuDiv"
      >
        <div className="dark:bg-gray-800 bg-white dark:bg-opacity-70 bg-opacity-70 top-0 absolute h-full w-full" />
        <div className="sm:w-96 w-full h-screen dark:bg-gray-900 bg-white z-50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between p-6">
              <div className="sm:flex items-center gap-x-10 hidden">
                <div
                  className="cursor-pointer lg:hidden sm:flex hidden items-center relative"
                  onClick={() => {
                    setShowMenu(false);
                    setTabView(true);
                  }}
                >
                  <div className="cursor-pointer z-40">
                    <svg
                      className="fill-stroke text-black dark:text-white"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M15.8574 15.8574L21.0001 21.0001"
                        stroke="currentColor"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="cursor-pointer sm:flex hidden">
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64157 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77739 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer sm:flex hidden">
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1 1H4.81818L7.37636 14.39C7.46365 14.8504 7.70273 15.264 8.05175 15.5583C8.40077 15.8526 8.83748 16.009 9.28545 16H18.5636C19.0116 16.009 19.4483 15.8526 19.7973 15.5583C20.1464 15.264 20.3854 14.8504 20.4727 14.39L22 6H5.77273"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer sm:flex hidden">
                  <svg
                    className="fill-stroke text-black dark:text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                      stroke="currentColor"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="cursor-pointer sm:hidden">
                <svg
                  className="fill-current text-gray-800 dark:text-white"
                  width={118}
                  height={28}
                  viewBox="0 0 118 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M52.9858 10.5653H56.5227C56.4716 7.45454 53.9148 5.30682 50.0284 5.30682C46.2017 5.30682 43.3977 7.42045 43.4148 10.5909C43.4062 13.1648 45.2216 14.6392 48.1705 15.3466L50.071 15.8239C51.9716 16.2841 53.0284 16.8295 53.0369 18.0057C53.0284 19.2841 51.8182 20.1534 49.9432 20.1534C48.0256 20.1534 46.6449 19.267 46.5256 17.5199H42.9545C43.0483 21.2955 45.75 23.2472 49.9858 23.2472C54.2472 23.2472 56.7528 21.2102 56.7614 18.0142C56.7528 15.108 54.5625 13.5653 51.5284 12.8835L49.9602 12.5085C48.4432 12.1591 47.1733 11.5966 47.1989 10.3438C47.1989 9.21875 48.196 8.39204 50.0028 8.39204C51.767 8.39204 52.8494 9.19318 52.9858 10.5653ZM62.8061 15.4318C62.8146 13.7443 63.8459 12.7557 65.3288 12.7557C66.8033 12.7557 67.6726 13.7017 67.6641 15.3125V23H71.2947V14.6648C71.3033 11.5966 69.4964 9.73864 66.7692 9.73864C64.7834 9.73864 63.4538 10.6761 62.8572 12.2188H62.7038V5.54545H59.1754V23H62.8061V15.4318ZM80.0668 23.2557C84.0384 23.2557 86.5099 20.5369 86.5099 16.5057C86.5099 12.4489 84.0384 9.73864 80.0668 9.73864C76.0952 9.73864 73.6236 12.4489 73.6236 16.5057C73.6236 20.5369 76.0952 23.2557 80.0668 23.2557ZM80.0838 20.4432C78.2514 20.4432 77.3139 18.7642 77.3139 16.4801C77.3139 14.196 78.2514 12.5085 80.0838 12.5085C81.8821 12.5085 82.8196 14.196 82.8196 16.4801C82.8196 18.7642 81.8821 20.4432 80.0838 20.4432ZM88.8707 27.9091H92.5014V20.9034H92.6122C93.1151 21.9943 94.2145 23.2131 96.3281 23.2131C99.3111 23.2131 101.638 20.8523 101.638 16.4716C101.638 11.9716 99.2088 9.73864 96.3366 9.73864C94.1463 9.73864 93.098 11.0426 92.6122 12.108H92.4503V9.90909H88.8707V27.9091ZM92.4247 16.4545C92.4247 14.1193 93.4134 12.6278 95.1776 12.6278C96.9759 12.6278 97.9304 14.1875 97.9304 16.4545C97.9304 18.7386 96.9588 20.3239 95.1776 20.3239C93.4304 20.3239 92.4247 18.7898 92.4247 16.4545ZM109.973 23.2557C113.945 23.2557 116.416 20.5369 116.416 16.5057C116.416 12.4489 113.945 9.73864 109.973 9.73864C106.001 9.73864 103.53 12.4489 103.53 16.5057C103.53 20.5369 106.001 23.2557 109.973 23.2557ZM109.99 20.4432C108.158 20.4432 107.22 18.7642 107.22 16.4801C107.22 14.196 108.158 12.5085 109.99 12.5085C111.788 12.5085 112.726 14.196 112.726 16.4801C112.726 18.7642 111.788 20.4432 109.99 20.4432Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1 1H4.34646L6.39072 7.12219H26L25.2126 10.7501H7.6021L8.28348 12.7907H24.6221L22.2599 20.5H8.28348L7.10237 17.5523H20.0945L20.6851 15.5116H6.51182L1 1Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.34646 1L4.82072 0.841641L4.70665 0.5H4.34646V1ZM1 1V0.5H0.275238L0.53258 1.17754L1 1ZM6.39072 7.12219L5.91646 7.28055L6.03053 7.62219H6.39072V7.12219ZM26 7.12219L26.4887 7.22824L26.6202 6.62219H26V7.12219ZM25.2126 10.7501V11.2501H25.6158L25.7013 10.8562L25.2126 10.7501ZM7.6021 10.7501V10.2501H6.90801L7.12784 10.9085L7.6021 10.7501ZM8.28348 12.7907L7.80922 12.9491L7.9233 13.2907H8.28348V12.7907ZM24.6221 12.7907L25.1002 12.9372L25.2982 12.2907H24.6221V12.7907ZM22.2599 20.5V21H22.6296L22.7379 20.6465L22.2599 20.5ZM8.28348 20.5L7.81935 20.686L7.94518 21H8.28348V20.5ZM7.10237 17.5523V17.0523H6.36338L6.63825 17.7383L7.10237 17.5523ZM20.0945 17.5523V18.0523H20.4703L20.5748 17.6913L20.0945 17.5523ZM20.6851 15.5116L21.1654 15.6506L21.3503 15.0116H20.6851V15.5116ZM6.51182 15.5116L6.0444 15.6892L6.16688 16.0116H6.51182V15.5116ZM4.34646 0.5H1V1.5H4.34646V0.5ZM6.86498 6.96383L4.82072 0.841641L3.8722 1.15836L5.91646 7.28055L6.86498 6.96383ZM6.39072 7.62219H26V6.62219H6.39072V7.62219ZM25.5114 7.01614L24.724 10.644L25.7013 10.8562L26.4887 7.22824L25.5114 7.01614ZM25.2126 10.2501H7.6021V11.2501H25.2126V10.2501ZM8.75774 12.6323L8.07636 10.5917L7.12784 10.9085L7.80922 12.9491L8.75774 12.6323ZM24.6221 12.2907H8.28348V13.2907H24.6221V12.2907ZM22.7379 20.6465L25.1002 12.9372L24.144 12.6442L21.7818 20.3535L22.7379 20.6465ZM8.28348 21H22.2599V20H8.28348V21ZM6.63825 17.7383L7.81935 20.686L8.74761 20.314L7.5665 17.3664L6.63825 17.7383ZM20.0945 17.0523H7.10237V18.0523H20.0945V17.0523ZM20.2048 15.3726L19.6142 17.4133L20.5748 17.6913L21.1654 15.6506L20.2048 15.3726ZM6.51182 16.0116H20.6851V15.0116H6.51182V16.0116ZM0.53258 1.17754L6.0444 15.6892L6.97924 15.3341L1.46742 0.822464L0.53258 1.17754Z"
                    fill="currentColor"
                  />
                  <ellipse
                    cx="10.5585"
                    cy="25.375"
                    rx="1.47059"
                    ry="1.625"
                    fill="currentColor"
                  />
                  <ellipse
                    cx="20.162"
                    cy="25.375"
                    rx="1.47059"
                    ry="1.625"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer lg:hidden"
                onClick={() => setShowMenu(false)}
              >
                <svg
                  className="fill-stroke text-gray-800 dark:text-white"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4L4 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 4L12 12"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-center bg-gray-100 py-2 gap-x-10 dark:bg-gray-800 sm:hidden">
              <div
                className="cursor-pointer lg:hidden flex sm:hidden items-center relative"
                onClick={() => setTabView(true)}
              >
                <div className="cursor-pointer z-40">
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={20}
                    height={20}
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.1111 15.2222C12.0385 15.2222 15.2222 12.0385 15.2222 8.1111C15.2222 4.18375 12.0385 1 8.1111 1C4.18375 1 1 4.18375 1 8.1111C1 12.0385 4.18375 15.2222 8.1111 15.2222Z"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9995 16.9995L13.1328 13.1328"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="cursor-pointer flex sm:hidden">
                <svg
                  className="fill-stroke text-black dark:text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64157 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77739 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer flex sm:hidden">
                <svg
                  className="fill-stroke text-black dark:text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 1H4.81818L7.37636 14.39C7.46365 14.8504 7.70273 15.264 8.05175 15.5583C8.40077 15.8526 8.83748 16.009 9.28545 16H18.5636C19.0116 16.009 19.4483 15.8526 19.7973 15.5583C20.1464 15.264 20.3854 14.8504 20.4727 14.39L22 6H5.77273"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="cursor-pointer flex sm:hidden">
                <svg
                  className="fill-stroke text-black dark:text-white"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="currentColor"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/zGbNvFt/image-1.png"
                  alt="Home"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Home
                </p>
              </div>
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/9qJDDWZ/image-2.png"
                  alt="Electronics"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Electronics
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/gvfZvL4/image-3.png"
                  alt="Fashion"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Fashion
                </p>
              </div>
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/nLvdt8M/image-4.png"
                  alt="Beauty"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Beauty
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/bm0VJr3/image-5.png"
                  alt="Home & Garden"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Home &amp; Garden
                </p>
              </div>
              <div className="relative w-full">
                <img
                  className="w-full"
                  src="https://i.ibb.co/SV38bY0/image-6.png"
                  alt="Sports"
                />
                <p className="text-base font-medium leading-4 absolute bottom-0 pl-6 pb-3 text-white">
                  Sports
                </p>
              </div>
            </div>
          </div>
          <div className="dark:bg-gray-900">
            <div className="px-6 py-3 mt-6">
              <p className="text-base leading-4 text-gray-800 dark:text-white">
                Track Order
              </p>
              <p className="text-base leading-4 mt-6 text-gray-800 dark:text-white">
                Support
              </p>
              <button
                onClick={() => setList(!list)}
                className="relative flex items-center cursor-pointer mt-6"
              >
                <p
                  id="text2"
                  className="text-base leading-4 text-center text-gray-800 dark:text-white pr-3"
                >
                  English (US)
                </p>
                <svg
                  className={`${
                    list ? "hidden" : "block"
                  } fill-stroke dark:text-white text-gray-800`}
                  id="iconClose2"
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  id="iconOpen2"
                  className={`${
                    list ? "block" : "hidden"
                  } fill-stroke text-gray-800 dark:text-white  transform rotate-180`}
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  id="dropdownlist2"
                  className={` ${
                    list ? "flex" : "hidden"
                  } w-28 top-6 absolute bg-white list-none justify-start items-start flex-col dark:bg-gray-800`}
                >
                  <li
                    onClick={() => changeText2("Russian")}
                    className="hover:text-gray-500 text-gray-800 dark:text-white"
                  >
                    Russian
                  </li>
                  <li
                    onClick={() => changeText2("Hindi")}
                    className="hover:text-gray-500 text-gray-800 dark:text-white"
                  >
                    Hindi
                  </li>
                  <li
                    onClick={() => changeText2("Chinease")}
                    className="hover:text-gray-500 text-gray-800 dark:text-white"
                  >
                    Chinease
                  </li>
                  <li
                    onClick={() => changeText2("English (US)")}
                    className="hover:text-gray-500 text-gray-800 dark:text-white"
                  >
                    English (US)
                  </li>
                </div>
              </button>
            </div>
            <div className="px-6 py-3 bg-gray-100 dark:bg-gray-800 w-full mt-7">
              <div className="flex items-center gap-x-4">
                <div className="cursor-pointer">
                  <svg
                    className="fill-current text-gray-500 dark:text-white dark:hover:text-gray-300"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.477 0 0 4.477 0 10C0 14.991 3.657 19.128 8.438 19.879V12.89H5.898V10H8.438V7.797C8.438 5.291 9.93 3.907 12.215 3.907C13.309 3.907 14.453 4.102 14.453 4.102V6.562H13.193C11.95 6.562 11.563 7.333 11.563 8.124V10H14.336L13.893 12.89H11.563V19.879C16.343 19.129 20 14.99 20 10C20 4.477 15.523 0 10 0Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="fill-current text-gray-500 dark:text-white dark:hover:text-gray-300"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7957 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer">
                  <svg
                    className="fill-current text-gray-500 dark:text-white dark:hover:text-gray-300"
                    width={22}
                    height={18}
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.1623 2.65593C20.3989 2.99362 19.5893 3.2154 18.7603 3.31393C19.6341 2.79136 20.288 1.96894 20.6003 0.999927C19.7803 1.48793 18.8813 1.82993 17.9443 2.01493C17.3149 1.34151 16.4807 0.89489 15.5713 0.744511C14.6618 0.594133 13.7282 0.748418 12.9156 1.18338C12.1029 1.61834 11.4567 2.30961 11.0774 3.14972C10.6981 3.98983 10.607 4.93171 10.8183 5.82893C9.15541 5.74558 7.52863 5.31345 6.04358 4.56059C4.55854 3.80773 3.24843 2.75097 2.1983 1.45893C1.82659 2.09738 1.63125 2.82315 1.6323 3.56193C1.6323 5.01193 2.3703 6.29293 3.4923 7.04293C2.82831 7.02202 2.17893 6.84271 1.5983 6.51993V6.57193C1.5985 7.53763 1.93267 8.47354 2.54414 9.22099C3.15562 9.96843 4.00678 10.4814 4.9533 10.6729C4.33691 10.84 3.6906 10.8646 3.0633 10.7449C3.33016 11.5762 3.8503 12.3031 4.55089 12.824C5.25147 13.3449 6.09743 13.6337 6.9703 13.6499C6.10278 14.3313 5.10947 14.8349 4.04718 15.1321C2.98488 15.4293 1.87442 15.5142 0.779297 15.3819C2.69099 16.6114 4.91639 17.2641 7.1893 17.2619C14.8823 17.2619 19.0893 10.8889 19.0893 5.36193C19.0893 5.18193 19.0843 4.99993 19.0763 4.82193C19.8952 4.23009 20.6019 3.49695 21.1633 2.65693L21.1623 2.65593Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
