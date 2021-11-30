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
export default function NavigationIV() {
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
  if (isEmpty(datasrc)) return null;
  // console.log("NavigationIV config", config);
  // console.log("NavigationIV datasrc", datasrc);
  // console.log("NavigationIV otherattr", otherattr);
  // console.log("NavigationIV positionConfig", positionConfig);
  const isMoto = otherattr.type === "moto";
  return isMoto ? (
    <div className="px-32">
      <div className="w-full text-center">
        <p className="font-bold text-2xl mx-auto">ШИНЭ НИЙТЛЭЛ</p>
      </div>
      <div className="flex justify-between text-gray-500 text-xs">
        <div className="py-5 border-b-2 border-moto text-moto font-bold">
          Дотоод мэдээ
        </div>
        <div className="py-5">Гадаад мэдээ</div>
        <div className="py-5">Мэдлэг Зөвлөгөө</div>
        <div className="py-5">Гудамжинд </div>
        <div className="py-5">Тэмцээн</div>
        <div className="py-5">Moto.mn</div>
        <div className="py-5">Сонирхолтой зургууд</div>
        <div className="py-5">Үйл ажиллагаа</div>
        <div className="py-5">Авто Тойм</div>
        <div className="py-5">Machinery</div>
      </div>
    </div>
  ) : (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto relative">
        <div className="py-9 mx-6">
          <div className="flex items-center justify-between">
            <div className="w-8/12 sm:w-7/12 flex justify-between">
              <div>
                <ul className="hidden lg:flex items-center space-x-6">
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      New{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Men{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Women{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Kids{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      {" "}
                      Magazine{" "}
                    </a>
                  </li>
                </ul>
                <div className="lg:hidden">
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="dark:text-white text-gray-800 hidden md:block focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 12H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 18H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenuSm(true)}
                    className="dark:text-white text-gray-800 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded"
                  >
                    <svg
                      className="fill-stroke"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 12H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 18H4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div
                role="img"
                aria-label="Luxiwood. Logo."
                className="flex items-center space-x-2 cursor-pointer"
              >
                <div>
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11.25V10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5H2.25ZM5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5V11.25H5.25Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="hidden lg:block">
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={111}
                    height={19}
                    viewBox="0 0 111 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.376 15.336H11.728V18H0.0640001V2.16H3.376V15.336ZM18.154 18.24C17.354 18.24 16.634 18.096 15.994 17.808C15.354 17.52 14.842 17.064 14.458 16.44C14.09 15.816 13.906 14.992 13.906 13.968V6H17.194V13.176C17.194 14.104 17.386 14.752 17.77 15.12C18.154 15.472 18.706 15.648 19.426 15.648C20.114 15.648 20.722 15.4 21.25 14.904C21.794 14.392 22.066 13.576 22.066 12.456V6H25.354V18H22.426L22.306 15.912C21.906 16.696 21.354 17.28 20.65 17.664C19.946 18.048 19.114 18.24 18.154 18.24ZM31.4779 6L33.9979 10.176L36.5419 6H40.2619L36.0139 11.928L40.3339 18H36.5179L33.8539 13.656L31.1419 18H27.4219L31.8379 11.928L27.6379 6H31.4779ZM44.134 4.272C42.774 4.272 42.094 3.688 42.094 2.52C42.094 1.336 42.774 0.743999 44.134 0.743999C45.494 0.743999 46.174 1.336 46.174 2.52C46.174 3.688 45.494 4.272 44.134 4.272ZM45.766 6V18H42.478V6H45.766ZM64.7314 6H68.2354L64.3954 18H60.6034L57.9874 9.84L55.4674 18H51.6754L47.8354 6H51.3394L53.7394 15.192L56.4034 6H59.6674L62.3554 15.192L64.7314 6ZM75.4188 5.76C76.6188 5.76 77.6828 6.008 78.6108 6.504C79.5388 7 80.2588 7.712 80.7708 8.64C81.2988 9.568 81.5628 10.688 81.5628 12C81.5628 13.312 81.2988 14.432 80.7708 15.36C80.2588 16.288 79.5388 17 78.6108 17.496C77.6828 17.992 76.6188 18.24 75.4188 18.24C74.2028 18.24 73.1308 17.992 72.2028 17.496C71.2908 17 70.5708 16.288 70.0428 15.36C69.5308 14.432 69.2748 13.312 69.2748 12C69.2748 10.688 69.5308 9.568 70.0428 8.64C70.5708 7.712 71.2908 7 72.2028 6.504C73.1308 6.008 74.2028 5.76 75.4188 5.76ZM75.4188 8.208C74.5228 8.208 73.8188 8.528 73.3068 9.168C72.8108 9.792 72.5628 10.736 72.5628 12C72.5628 13.264 72.8108 14.216 73.3068 14.856C73.8188 15.48 74.5228 15.792 75.4188 15.792C76.2988 15.792 76.9868 15.48 77.4828 14.856C77.9948 14.216 78.2508 13.264 78.2508 12C78.2508 10.736 77.9948 9.792 77.4828 9.168C76.9868 8.528 76.2988 8.208 75.4188 8.208ZM89.7859 5.76C90.9859 5.76 92.0499 6.008 92.9779 6.504C93.9059 7 94.6259 7.712 95.1379 8.64C95.6659 9.568 95.9299 10.688 95.9299 12C95.9299 13.312 95.6659 14.432 95.1379 15.36C94.6259 16.288 93.9059 17 92.9779 17.496C92.0499 17.992 90.9859 18.24 89.7859 18.24C88.5699 18.24 87.4979 17.992 86.5699 17.496C85.6579 17 84.9379 16.288 84.4099 15.36C83.8979 14.432 83.6419 13.312 83.6419 12C83.6419 10.688 83.8979 9.568 84.4099 8.64C84.9379 7.712 85.6579 7 86.5699 6.504C87.4979 6.008 88.5699 5.76 89.7859 5.76ZM89.7859 8.208C88.8899 8.208 88.1859 8.528 87.6739 9.168C87.1779 9.792 86.9299 10.736 86.9299 12C86.9299 13.264 87.1779 14.216 87.6739 14.856C88.1859 15.48 88.8899 15.792 89.7859 15.792C90.6659 15.792 91.3539 15.48 91.8499 14.856C92.3619 14.216 92.6179 13.264 92.6179 12C92.6179 10.736 92.3619 9.792 91.8499 9.168C91.3539 8.528 90.6659 8.208 89.7859 8.208ZM103.217 18.24C102.225 18.24 101.337 17.992 100.553 17.496C99.7851 17 99.1771 16.296 98.7291 15.384C98.2971 14.456 98.0811 13.336 98.0811 12.024C98.0811 10.696 98.3131 9.568 98.7771 8.64C99.2411 7.696 99.8651 6.984 100.649 6.504C101.449 6.008 102.345 5.76 103.337 5.76C104.201 5.76 104.945 5.968 105.569 6.384C106.193 6.8 106.665 7.352 106.985 8.04V0.743999H110.273V18H107.321L107.177 15.672C106.841 16.472 106.321 17.104 105.617 17.568C104.913 18.016 104.113 18.24 103.217 18.24ZM104.177 15.72C105.025 15.72 105.705 15.392 106.217 14.736C106.729 14.064 106.985 13.12 106.985 11.904C106.985 10.752 106.729 9.864 106.217 9.24C105.721 8.6 105.057 8.28 104.225 8.28C103.329 8.28 102.625 8.6 102.113 9.24C101.617 9.864 101.369 10.784 101.369 12C101.369 13.216 101.617 14.144 102.113 14.784C102.609 15.408 103.297 15.72 104.177 15.72Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="hidden md:block lg:hidden">
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={94}
                    height={16}
                    viewBox="0 0 94 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.9 12.34H10.52V15H0.46V1.8H3.9V12.34ZM15.5531 15.2C14.5398 15.2 13.7131 14.9267 13.0731 14.38C12.4331 13.8333 12.1131 12.9333 12.1131 11.68V5H15.5131V10.88C15.5131 11.52 15.6398 11.9667 15.8931 12.22C16.1465 12.4733 16.5065 12.6 16.9731 12.6C17.4531 12.6 17.8598 12.4267 18.1931 12.08C18.5398 11.72 18.7131 11.1467 18.7131 10.36V5H22.1131V15H19.0731L18.9731 13.12C18.6531 13.8267 18.2065 14.3533 17.6331 14.7C17.0598 15.0333 16.3665 15.2 15.5531 15.2ZM27.4959 5L29.2759 8.3L31.0959 5H34.9159L31.4359 9.96L34.9959 15H31.0959L29.1959 11.56L27.2559 15H23.4359L27.0359 9.94L23.5759 5H27.4959ZM38.0333 3.84C37.3399 3.84 36.8333 3.71333 36.5133 3.46C36.2066 3.19333 36.0533 2.78 36.0533 2.22C36.0533 1.64667 36.2066 1.23333 36.5133 0.979999C36.8333 0.713333 37.3399 0.58 38.0333 0.58C38.7133 0.58 39.2133 0.713333 39.5333 0.979999C39.8533 1.23333 40.0133 1.64667 40.0133 2.22C40.0133 2.78 39.8533 3.19333 39.5333 3.46C39.2133 3.71333 38.7133 3.84 38.0333 3.84ZM39.7333 5V15H36.3333V5H39.7333ZM55.2536 5H58.8136L55.7936 15H51.7136L49.8936 8.86L48.1336 15H44.0736L41.0336 5H44.6136L46.2936 12.38L48.2536 5H51.6136L53.5536 12.38L55.2536 5ZM64.6675 4.8C65.7208 4.8 66.6408 5.00667 67.4275 5.42C68.2275 5.83333 68.8475 6.42667 69.2875 7.2C69.7408 7.97333 69.9675 8.90667 69.9675 10C69.9675 11.0933 69.7408 12.0267 69.2875 12.8C68.8475 13.5733 68.2275 14.1667 67.4275 14.58C66.6408 14.9933 65.7208 15.2 64.6675 15.2C63.6275 15.2 62.7075 14.9933 61.9075 14.58C61.1208 14.1667 60.5008 13.5733 60.0475 12.8C59.6075 12.0267 59.3875 11.0933 59.3875 10C59.3875 8.90667 59.6075 7.97333 60.0475 7.2C60.5008 6.42667 61.1208 5.83333 61.9075 5.42C62.7075 5.00667 63.6275 4.8 64.6675 4.8ZM64.6675 7.22C64.0808 7.22 63.6208 7.44 63.2875 7.88C62.9675 8.30667 62.8075 9.01333 62.8075 10C62.8075 10.9733 62.9675 11.68 63.2875 12.12C63.6208 12.56 64.0808 12.78 64.6675 12.78C65.2675 12.78 65.7275 12.56 66.0475 12.12C66.3808 11.68 66.5475 10.9733 66.5475 10C66.5475 9.01333 66.3808 8.30667 66.0475 7.88C65.7275 7.44 65.2675 7.22 64.6675 7.22ZM76.6402 4.8C77.6935 4.8 78.6135 5.00667 79.4002 5.42C80.2002 5.83333 80.8202 6.42667 81.2602 7.2C81.7135 7.97333 81.9402 8.90667 81.9402 10C81.9402 11.0933 81.7135 12.0267 81.2602 12.8C80.8202 13.5733 80.2002 14.1667 79.4002 14.58C78.6135 14.9933 77.6935 15.2 76.6402 15.2C75.6002 15.2 74.6802 14.9933 73.8802 14.58C73.0935 14.1667 72.4735 13.5733 72.0202 12.8C71.5802 12.0267 71.3602 11.0933 71.3602 10C71.3602 8.90667 71.5802 7.97333 72.0202 7.2C72.4735 6.42667 73.0935 5.83333 73.8802 5.42C74.6802 5.00667 75.6002 4.8 76.6402 4.8ZM76.6402 7.22C76.0535 7.22 75.5935 7.44 75.2602 7.88C74.9402 8.30667 74.7802 9.01333 74.7802 10C74.7802 10.9733 74.9402 11.68 75.2602 12.12C75.5935 12.56 76.0535 12.78 76.6402 12.78C77.2402 12.78 77.7002 12.56 78.0202 12.12C78.3535 11.68 78.5202 10.9733 78.5202 10C78.5202 9.01333 78.3535 8.30667 78.0202 7.88C77.7002 7.44 77.2402 7.22 76.6402 7.22ZM87.5328 15.2C86.2928 15.2 85.2928 14.7467 84.5328 13.84C83.7861 12.9333 83.4128 11.6667 83.4128 10.04C83.4128 8.92 83.5861 7.97333 83.9328 7.2C84.2928 6.41333 84.7861 5.82 85.4128 5.42C86.0528 5.00667 86.7861 4.8 87.6128 4.8C88.3195 4.8 88.9195 4.97333 89.4128 5.32C89.9195 5.66667 90.2995 6.12667 90.5528 6.7V0.76H93.9528V15H90.9128L90.7928 13.04C90.5128 13.7067 90.0861 14.2333 89.5128 14.62C88.9528 15.0067 88.2928 15.2 87.5328 15.2ZM88.7128 12.7C89.2728 12.7 89.7195 12.4667 90.0528 12C90.3861 11.5333 90.5528 10.8467 90.5528 9.94C90.5528 9.1 90.3928 8.45333 90.0728 8C89.7528 7.53333 89.3061 7.3 88.7328 7.3C88.1461 7.3 87.6795 7.52 87.3328 7.96C86.9995 8.38667 86.8328 9.06667 86.8328 10C86.8328 10.9333 86.9995 11.62 87.3328 12.06C87.6661 12.4867 88.1261 12.7 88.7128 12.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="md:hidden">
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={94}
                    height={16}
                    viewBox="0 0 94 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.9 12.34H10.52V15H0.46V1.8H3.9V12.34ZM15.5531 15.2C14.5398 15.2 13.7131 14.9267 13.0731 14.38C12.4331 13.8333 12.1131 12.9333 12.1131 11.68V5H15.5131V10.88C15.5131 11.52 15.6398 11.9667 15.8931 12.22C16.1465 12.4733 16.5065 12.6 16.9731 12.6C17.4531 12.6 17.8598 12.4267 18.1931 12.08C18.5398 11.72 18.7131 11.1467 18.7131 10.36V5H22.1131V15H19.0731L18.9731 13.12C18.6531 13.8267 18.2065 14.3533 17.6331 14.7C17.0598 15.0333 16.3665 15.2 15.5531 15.2ZM27.4959 5L29.2759 8.3L31.0959 5H34.9159L31.4359 9.96L34.9959 15H31.0959L29.1959 11.56L27.2559 15H23.4359L27.0359 9.94L23.5759 5H27.4959ZM38.0333 3.84C37.3399 3.84 36.8333 3.71333 36.5133 3.46C36.2066 3.19333 36.0533 2.78 36.0533 2.22C36.0533 1.64667 36.2066 1.23333 36.5133 0.979999C36.8333 0.713333 37.3399 0.58 38.0333 0.58C38.7133 0.58 39.2133 0.713333 39.5333 0.979999C39.8533 1.23333 40.0133 1.64667 40.0133 2.22C40.0133 2.78 39.8533 3.19333 39.5333 3.46C39.2133 3.71333 38.7133 3.84 38.0333 3.84ZM39.7333 5V15H36.3333V5H39.7333ZM55.2536 5H58.8136L55.7936 15H51.7136L49.8936 8.86L48.1336 15H44.0736L41.0336 5H44.6136L46.2936 12.38L48.2536 5H51.6136L53.5536 12.38L55.2536 5ZM64.6675 4.8C65.7208 4.8 66.6408 5.00667 67.4275 5.42C68.2275 5.83333 68.8475 6.42667 69.2875 7.2C69.7408 7.97333 69.9675 8.90667 69.9675 10C69.9675 11.0933 69.7408 12.0267 69.2875 12.8C68.8475 13.5733 68.2275 14.1667 67.4275 14.58C66.6408 14.9933 65.7208 15.2 64.6675 15.2C63.6275 15.2 62.7075 14.9933 61.9075 14.58C61.1208 14.1667 60.5008 13.5733 60.0475 12.8C59.6075 12.0267 59.3875 11.0933 59.3875 10C59.3875 8.90667 59.6075 7.97333 60.0475 7.2C60.5008 6.42667 61.1208 5.83333 61.9075 5.42C62.7075 5.00667 63.6275 4.8 64.6675 4.8ZM64.6675 7.22C64.0808 7.22 63.6208 7.44 63.2875 7.88C62.9675 8.30667 62.8075 9.01333 62.8075 10C62.8075 10.9733 62.9675 11.68 63.2875 12.12C63.6208 12.56 64.0808 12.78 64.6675 12.78C65.2675 12.78 65.7275 12.56 66.0475 12.12C66.3808 11.68 66.5475 10.9733 66.5475 10C66.5475 9.01333 66.3808 8.30667 66.0475 7.88C65.7275 7.44 65.2675 7.22 64.6675 7.22ZM76.6402 4.8C77.6935 4.8 78.6135 5.00667 79.4002 5.42C80.2002 5.83333 80.8202 6.42667 81.2602 7.2C81.7135 7.97333 81.9402 8.90667 81.9402 10C81.9402 11.0933 81.7135 12.0267 81.2602 12.8C80.8202 13.5733 80.2002 14.1667 79.4002 14.58C78.6135 14.9933 77.6935 15.2 76.6402 15.2C75.6002 15.2 74.6802 14.9933 73.8802 14.58C73.0935 14.1667 72.4735 13.5733 72.0202 12.8C71.5802 12.0267 71.3602 11.0933 71.3602 10C71.3602 8.90667 71.5802 7.97333 72.0202 7.2C72.4735 6.42667 73.0935 5.83333 73.8802 5.42C74.6802 5.00667 75.6002 4.8 76.6402 4.8ZM76.6402 7.22C76.0535 7.22 75.5935 7.44 75.2602 7.88C74.9402 8.30667 74.7802 9.01333 74.7802 10C74.7802 10.9733 74.9402 11.68 75.2602 12.12C75.5935 12.56 76.0535 12.78 76.6402 12.78C77.2402 12.78 77.7002 12.56 78.0202 12.12C78.3535 11.68 78.5202 10.9733 78.5202 10C78.5202 9.01333 78.3535 8.30667 78.0202 7.88C77.7002 7.44 77.2402 7.22 76.6402 7.22ZM87.5328 15.2C86.2928 15.2 85.2928 14.7467 84.5328 13.84C83.7861 12.9333 83.4128 11.6667 83.4128 10.04C83.4128 8.92 83.5861 7.97333 83.9328 7.2C84.2928 6.41333 84.7861 5.82 85.4128 5.42C86.0528 5.00667 86.7861 4.8 87.6128 4.8C88.3195 4.8 88.9195 4.97333 89.4128 5.32C89.9195 5.66667 90.2995 6.12667 90.5528 6.7V0.76H93.9528V15H90.9128L90.7928 13.04C90.5128 13.7067 90.0861 14.2333 89.5128 14.62C88.9528 15.0067 88.2928 15.2 87.5328 15.2ZM88.7128 12.7C89.2728 12.7 89.7195 12.4667 90.0528 12C90.3861 11.5333 90.5528 10.8467 90.5528 9.94C90.5528 9.1 90.3928 8.45333 90.0728 8C89.7528 7.53333 89.3061 7.3 88.7328 7.3C88.1461 7.3 87.6795 7.52 87.3328 7.96C86.9995 8.38667 86.8328 9.06667 86.8328 10C86.8328 10.9333 86.9995 11.62 87.3328 12.06C87.6661 12.4867 88.1261 12.7 88.7128 12.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-4/12 md:w-5/12 flex items-center justify-end space-x-5">
              <a
                aria-label="favourites"
                href="javascript:void(0)"
                className="text-gray-800 dark:text-white dark: dark:hover:text-gray-300hover:text-gray-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
              >
                <div>
                  <svg
                    className="fill-stroke"
                    width={18}
                    height={17}
                    viewBox="0 0 18 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7663 2.27306C15.3753 1.86947 14.9111 1.5493 14.4002 1.33087C13.8893 1.11243 13.3417 1 12.7887 1C12.2357 1 11.6881 1.11243 11.1772 1.33087C10.6663 1.5493 10.2021 1.86947 9.81116 2.27306L8.9998 3.11028L8.18843 2.27306C7.39874 1.45821 6.32768 1.00042 5.21089 1.00042C4.09409 1.00042 3.02303 1.45821 2.23334 2.27306C1.44365 3.08792 1 4.19311 1 5.34549C1 6.49788 1.44365 7.60306 2.23334 8.41792L3.0447 9.25514L8.9998 15.4L14.9549 9.25514L15.7663 8.41792C16.1574 8.01451 16.4677 7.53554 16.6794 7.00836C16.891 6.48118 17 5.91613 17 5.34549C17 4.77485 16.891 4.2098 16.6794 3.68263C16.4677 3.15545 16.1574 2.67647 15.7663 2.27306V2.27306Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="hidden md:block text-base">Favrouties</p>
              </a>
              <a
                aria-label="bag"
                href="javascript:void(0)"
                className="text-gray-800 dark:text-white dark: dark:hover:text-gray-300hover:text-gray-300 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
              >
                <div>
                  <svg
                    className="fill-stroke"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="hidden md:block text-base">Bag</p>
              </a>
            </div>
          </div>
        </div>
        <div
          id="md-menu"
          className={`${
            showMenu ? "md:block" : "hidden"
          } lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-white dark:bg-opacity-70 bg-opacity-70`}
        >
          <div className="relative w-full h-screen">
            <div className="absolute inset-0 w-1/2 bg-white p-6 justify-center dark:bg-gray-900">
              <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-800"
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
                </button>
                <div>
                  <h1 className="text-base font-semibold text-right text-gray-800 dark:text-white">
                    Menu
                  </h1>
                </div>
                <div />
              </div>
              <div className="mt-8">
                <ul className="flex flex-col space-y-8">
                  <li className="flex items-center justify-between">
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      New
                    </a>
                    <button
                      aria-label="add"
                      className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.33301V12.6663"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.33203 8H12.6654"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Men
                    </a>
                    <button
                      aria-label="add"
                      className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.33301V12.6663"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.33203 8H12.6654"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Women
                    </a>
                    <button
                      aria-label="add"
                      className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.33301V12.6663"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.33203 8H12.6654"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Kids
                    </a>
                    <button
                      aria-label="add"
                      className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.33301V12.6663"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.33203 8H12.6654"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a
                      href="javascript:void(0)"
                      className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                    >
                      Magazine
                    </a>
                    <button
                      aria-label="add"
                      className="text-gray-800 dark:text-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        className="fill-stroke"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 3.33301V12.6663"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M3.33203 8H12.6654"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="mobile-menu"
          className={`${
            showMenuSm ? "flex" : "hidden"
          } dark:bg-gray-900 md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-6`}
        >
          <div className="w-full">
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-3 mx-4">
              <button
                aria-label="close menu"
                onClick={() => setShowMenuSm(false)}
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <svg
                  className="fill-stroke"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5L5 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 5L15 15"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                role="img"
                aria-label="Luxiwood. Logo"
                className="text-gray-800 dark:text-white flex space-x-2 items-center"
              >
                <div>
                  <svg
                    className="fill-stroke"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 19.5V14.25C2.25235 13.4551 2.56917 12.6934 3.13128 12.1313C3.69338 11.5692 4.45507 11.2523 5.25 11.25H18.75C19.5449 11.2523 20.3066 11.5692 20.8687 12.1313C21.4308 12.6934 21.7477 13.4551 21.75 14.25V19.5M18 11.25H4.5V6.375C4.50148 5.87818 4.6995 5.40212 5.05081 5.05081C5.40212 4.6995 5.87818 4.50148 6.375 4.5H17.625C18.1218 4.50148 18.5979 4.6995 18.9492 5.05081C19.3005 5.40212 19.4985 5.87818 19.5 6.375V11.25H18Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 11.25V10.5C12.0011 10.1025 12.1595 9.72163 12.4406 9.44057C12.7216 9.15951 13.1025 9.00111 13.5 9H17.25C17.6475 9.00111 18.0284 9.15951 18.3094 9.44057C18.5905 9.72163 18.7489 10.1025 18.75 10.5V11.25M2.25 19.5V19.125C2.25087 18.8269 2.36967 18.5413 2.58046 18.3305C2.79125 18.1197 3.0769 18.0009 3.375 18H20.625C20.9231 18.0009 21.2087 18.1197 21.4195 18.3305C21.6303 18.5413 21.7491 18.8269 21.75 19.125V19.5H2.25ZM5.25 11.25V10.5C5.25111 10.1025 5.40951 9.72163 5.69057 9.44057C5.97163 9.15951 6.35252 9.00111 6.75 9H10.5C10.8975 9.00111 11.2784 9.15951 11.5594 9.44057C11.8405 9.72163 11.9989 10.1025 12 10.5V11.25H5.25Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    className="fill-stroke"
                    width={94}
                    height={16}
                    viewBox="0 0 94 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.9 12.34H10.52V15H0.46V1.8H3.9V12.34ZM15.5531 15.2C14.5398 15.2 13.7131 14.9267 13.0731 14.38C12.4331 13.8333 12.1131 12.9333 12.1131 11.68V5H15.5131V10.88C15.5131 11.52 15.6398 11.9667 15.8931 12.22C16.1465 12.4733 16.5065 12.6 16.9731 12.6C17.4531 12.6 17.8598 12.4267 18.1931 12.08C18.5398 11.72 18.7131 11.1467 18.7131 10.36V5H22.1131V15H19.0731L18.9731 13.12C18.6531 13.8267 18.2065 14.3533 17.6331 14.7C17.0598 15.0333 16.3665 15.2 15.5531 15.2ZM27.4959 5L29.2759 8.3L31.0959 5H34.9159L31.4359 9.96L34.9959 15H31.0959L29.1959 11.56L27.2559 15H23.4359L27.0359 9.94L23.5759 5H27.4959ZM38.0333 3.84C37.3399 3.84 36.8333 3.71333 36.5133 3.46C36.2066 3.19333 36.0533 2.78 36.0533 2.22C36.0533 1.64667 36.2066 1.23333 36.5133 0.979999C36.8333 0.713333 37.3399 0.58 38.0333 0.58C38.7133 0.58 39.2133 0.713333 39.5333 0.979999C39.8533 1.23333 40.0133 1.64667 40.0133 2.22C40.0133 2.78 39.8533 3.19333 39.5333 3.46C39.2133 3.71333 38.7133 3.84 38.0333 3.84ZM39.7333 5V15H36.3333V5H39.7333ZM55.2536 5H58.8136L55.7936 15H51.7136L49.8936 8.86L48.1336 15H44.0736L41.0336 5H44.6136L46.2936 12.38L48.2536 5H51.6136L53.5536 12.38L55.2536 5ZM64.6675 4.8C65.7208 4.8 66.6408 5.00667 67.4275 5.42C68.2275 5.83333 68.8475 6.42667 69.2875 7.2C69.7408 7.97333 69.9675 8.90667 69.9675 10C69.9675 11.0933 69.7408 12.0267 69.2875 12.8C68.8475 13.5733 68.2275 14.1667 67.4275 14.58C66.6408 14.9933 65.7208 15.2 64.6675 15.2C63.6275 15.2 62.7075 14.9933 61.9075 14.58C61.1208 14.1667 60.5008 13.5733 60.0475 12.8C59.6075 12.0267 59.3875 11.0933 59.3875 10C59.3875 8.90667 59.6075 7.97333 60.0475 7.2C60.5008 6.42667 61.1208 5.83333 61.9075 5.42C62.7075 5.00667 63.6275 4.8 64.6675 4.8ZM64.6675 7.22C64.0808 7.22 63.6208 7.44 63.2875 7.88C62.9675 8.30667 62.8075 9.01333 62.8075 10C62.8075 10.9733 62.9675 11.68 63.2875 12.12C63.6208 12.56 64.0808 12.78 64.6675 12.78C65.2675 12.78 65.7275 12.56 66.0475 12.12C66.3808 11.68 66.5475 10.9733 66.5475 10C66.5475 9.01333 66.3808 8.30667 66.0475 7.88C65.7275 7.44 65.2675 7.22 64.6675 7.22ZM76.6402 4.8C77.6935 4.8 78.6135 5.00667 79.4002 5.42C80.2002 5.83333 80.8202 6.42667 81.2602 7.2C81.7135 7.97333 81.9402 8.90667 81.9402 10C81.9402 11.0933 81.7135 12.0267 81.2602 12.8C80.8202 13.5733 80.2002 14.1667 79.4002 14.58C78.6135 14.9933 77.6935 15.2 76.6402 15.2C75.6002 15.2 74.6802 14.9933 73.8802 14.58C73.0935 14.1667 72.4735 13.5733 72.0202 12.8C71.5802 12.0267 71.3602 11.0933 71.3602 10C71.3602 8.90667 71.5802 7.97333 72.0202 7.2C72.4735 6.42667 73.0935 5.83333 73.8802 5.42C74.6802 5.00667 75.6002 4.8 76.6402 4.8ZM76.6402 7.22C76.0535 7.22 75.5935 7.44 75.2602 7.88C74.9402 8.30667 74.7802 9.01333 74.7802 10C74.7802 10.9733 74.9402 11.68 75.2602 12.12C75.5935 12.56 76.0535 12.78 76.6402 12.78C77.2402 12.78 77.7002 12.56 78.0202 12.12C78.3535 11.68 78.5202 10.9733 78.5202 10C78.5202 9.01333 78.3535 8.30667 78.0202 7.88C77.7002 7.44 77.2402 7.22 76.6402 7.22ZM87.5328 15.2C86.2928 15.2 85.2928 14.7467 84.5328 13.84C83.7861 12.9333 83.4128 11.6667 83.4128 10.04C83.4128 8.92 83.5861 7.97333 83.9328 7.2C84.2928 6.41333 84.7861 5.82 85.4128 5.42C86.0528 5.00667 86.7861 4.8 87.6128 4.8C88.3195 4.8 88.9195 4.97333 89.4128 5.32C89.9195 5.66667 90.2995 6.12667 90.5528 6.7V0.76H93.9528V15H90.9128L90.7928 13.04C90.5128 13.7067 90.0861 14.2333 89.5128 14.62C88.9528 15.0067 88.2928 15.2 87.5328 15.2ZM88.7128 12.7C89.2728 12.7 89.7195 12.4667 90.0528 12C90.3861 11.5333 90.5528 10.8467 90.5528 9.94C90.5528 9.1 90.3928 8.45333 90.0728 8C89.7528 7.53333 89.3061 7.3 88.7328 7.3C88.1461 7.3 87.6795 7.52 87.3328 7.96C86.9995 8.38667 86.8328 9.06667 86.8328 10C86.8328 10.9333 86.9995 11.62 87.3328 12.06C87.6661 12.4867 88.1261 12.7 88.7128 12.7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div />
            </div>
          </div>
          <div className="mt-4 mx-4">
            <ul className="flex flex-col space-y-4">
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  New{" "}
                </a>
                <button
                  aria-label="Add"
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  Men{" "}
                </a>
                <button
                  aria-label="Add"
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  Women{" "}
                </a>
                <button
                  aria-label="Add"
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  Kids{" "}
                </a>
                <button
                  aria-label="Add"
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="border-b border-gray-200 dark:border-gray-700 pb-4 px-1 flex items-center justify-between">
                <a
                  href="javascript:void(0)"
                  className="focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 text-base text-gray-800 hover:underline"
                >
                  {" "}
                  Magazine{" "}
                </a>
                <button
                  aria-label="Add"
                  className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100"
                >
                  <svg
                    className="fill-stroke"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.3335V12.6668"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.33203 8H12.6654"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full h-full flex items-end">
            <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
              <li>
                <a
                  className="flex items-center text-gray-800 dark:text-white space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="javascript:void(0)"
                >
                  <div>
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 5H21"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Bag</p>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-gray-800 dark:text-white space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  href="javascript:void(0)"
                >
                  <div>
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-base">Favourites</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
