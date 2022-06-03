import { useContext } from "react";
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
} from "@components/common/Atom";
export default function VerticalNavigation1() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("VerticalNavigation1 config", config);
  // console.log("VerticalNavigation1 readyDatasrc", readyDatasrc);
  // console.log("VerticalNavigation1 widgetnemgooReady", widgetnemgooReady);
  // console.log("VerticalNavigation1 positionConfig", positionConfig);

  return (
    <>
      <div className="flex">
        <div className="w-20 flex flex-col items-center py-6 border-r border-gray-200">
          <div className="cursor-pointer">
            <svg
              width={34}
              height={34}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17H0H1ZM7 17H6H7ZM17 27V28V27ZM27 17H28H27ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28V26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26V28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17H26C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17H28ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                fill="#1F2937"
              />
            </svg>
          </div>
          <div className="mt-44">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 8.19094V2.25H15.75V4.98984L12 1.5L0 12.75H3V22.5H9.75V15H14.25V22.5H21V12.75H24L19.5 8.19094Z"
                fill="#4338CA"
              />
            </svg>
          </div>
          <div className="text-gray-600 hover:text-indigo-700 cursor-pointer mt-14">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 19.5C1.5 19.6989 1.57902 19.8897 1.71967 20.0303C1.86032 20.171 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.171 22.2803 20.0303C22.421 19.8897 22.5 19.6989 22.5 19.5V10.4062H1.5V19.5ZM4.59375 13.0312C4.59375 12.9318 4.63326 12.8364 4.70359 12.7661C4.77391 12.6958 4.86929 12.6562 4.96875 12.6562H9.28125C9.38071 12.6562 9.47609 12.6958 9.54642 12.7661C9.61674 12.8364 9.65625 12.9318 9.65625 13.0312V16.0312C9.65625 16.1307 9.61674 16.2261 9.54642 16.2964C9.47609 16.3667 9.38071 16.4062 9.28125 16.4062H4.96875C4.86929 16.4062 4.77391 16.3667 4.70359 16.2964C4.63326 16.2261 4.59375 16.1307 4.59375 16.0312V13.0312ZM21.75 3.75H2.25C2.05109 3.75 1.86032 3.82902 1.71967 3.96967C1.57902 4.11032 1.5 4.30109 1.5 4.5V7.59375H22.5V4.5C22.5 4.30109 22.421 4.11032 22.2803 3.96967C22.1397 3.82902 21.9489 3.75 21.75 3.75Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-gray-600 hover:text-indigo-700 cursor-pointer mt-14">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 23.25H2.25V14.25H6V23.25ZM16.5 23.25H12.75V9.75H16.5V23.25ZM21.75 23.25H18V4.5H21.75V23.25ZM11.25 23.25H7.5V0.75H11.25V23.25Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-gray-600 hover:text-indigo-700 cursor-pointer mt-14">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.125 12C8.98896 12 10.5 10.489 10.5 8.625C10.5 6.76104 8.98896 5.25 7.125 5.25C5.26104 5.25 3.75 6.76104 3.75 8.625C3.75 10.489 5.26104 12 7.125 12Z"
                fill="currentColor"
              />
              <path
                d="M10.9688 13.875C9.64875 13.2047 8.19187 12.9375 7.125 12.9375C5.03531 12.9375 0.75 14.2191 0.75 16.7812V18.75H7.78125V17.9967C7.78125 17.1061 8.15625 16.2131 8.8125 15.4688C9.33609 14.8744 10.0692 14.3227 10.9688 13.875Z"
                fill="currentColor"
              />
              <path
                d="M15.9375 13.5C13.4967 13.5 8.625 15.0075 8.625 18V20.25H23.25V18C23.25 15.0075 18.3783 13.5 15.9375 13.5Z"
                fill="currentColor"
              />
              <path
                d="M15.9375 12C18.2157 12 20.0625 10.1532 20.0625 7.875C20.0625 5.59683 18.2157 3.75 15.9375 3.75C13.6593 3.75 11.8125 5.59683 11.8125 7.875C11.8125 10.1532 13.6593 12 15.9375 12Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="text-gray-600  hover:text-indigo-700 cursor-pointer mt-14">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8.25C11.2583 8.25 10.5333 8.46993 9.91662 8.88199C9.29993 9.29404 8.81929 9.87971 8.53546 10.5649C8.25163 11.2502 8.17737 12.0042 8.32206 12.7316C8.46676 13.459 8.82391 14.1272 9.34836 14.6517C9.8728 15.1761 10.541 15.5333 11.2684 15.6779C11.9958 15.8226 12.7498 15.7484 13.4351 15.4645C14.1203 15.1807 14.706 14.7001 15.118 14.0834C15.5301 13.4667 15.75 12.7417 15.75 12C15.747 11.0064 15.351 10.0542 14.6484 9.35163C13.9458 8.64901 12.9937 8.25297 12 8.25ZM20.0963 12C20.0943 12.3504 20.0686 12.7003 20.0194 13.0472L22.3017 14.8341C22.4011 14.9161 22.4681 15.0309 22.4907 15.1578C22.5133 15.2847 22.49 15.4155 22.425 15.5269L20.2659 19.2544C20.2003 19.3647 20.0979 19.4484 19.9766 19.4907C19.8554 19.5329 19.7231 19.5311 19.6031 19.4855L16.9195 18.4073C16.3607 18.8377 15.7492 19.1948 15.0998 19.47L14.6986 22.3191C14.6761 22.4467 14.6101 22.5625 14.5117 22.6468C14.4132 22.7311 14.2886 22.7786 14.1591 22.7812H9.84094C9.71375 22.7788 9.59115 22.7333 9.49316 22.6521C9.39517 22.571 9.32757 22.459 9.30141 22.3345L8.90016 19.4855C8.24901 19.2134 7.63705 18.8557 7.08047 18.4219L4.39688 19.5C4.27692 19.5457 4.1447 19.5476 4.02348 19.5054C3.90225 19.4632 3.79977 19.3796 3.73407 19.2694L1.57501 15.5423C1.51002 15.431 1.48673 15.3002 1.50932 15.1733C1.5319 15.0464 1.59888 14.9316 1.69829 14.8495L3.98063 13.0627C3.93195 12.7105 3.90627 12.3555 3.90376 12C3.90571 11.6496 3.93139 11.2997 3.98063 10.9528L1.69829 9.16594C1.59888 9.08386 1.5319 8.96911 1.50932 8.84219C1.48673 8.71527 1.51002 8.58446 1.57501 8.47312L3.73407 4.74563C3.7997 4.63528 3.90215 4.55161 4.02338 4.50934C4.14461 4.46707 4.27687 4.46891 4.39688 4.51453L7.08047 5.59266C7.63928 5.16235 8.2508 4.80524 8.90016 4.53L9.30141 1.68094C9.32387 1.55332 9.38995 1.43746 9.48836 1.35316C9.58676 1.26886 9.71139 1.22135 9.84094 1.21875H14.1591C14.2863 1.22123 14.4089 1.26675 14.5069 1.34788C14.6048 1.42901 14.6724 1.54097 14.6986 1.66547L15.0998 4.51453C15.7518 4.78639 16.3646 5.14408 16.9219 5.57812L19.6031 4.5C19.7231 4.45434 19.8553 4.45243 19.9765 4.49461C20.0978 4.53679 20.2002 4.62036 20.2659 4.73062L22.425 8.45813C22.49 8.56946 22.5133 8.70027 22.4907 8.82719C22.4681 8.95411 22.4011 9.06886 22.3017 9.15094L20.0194 10.9378C20.068 11.2898 20.0937 11.6446 20.0963 12Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
