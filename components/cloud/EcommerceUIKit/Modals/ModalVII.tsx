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
export default function ModalVII() {
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
    // console.log("ModalVII config", config);
    // console.log("ModalVII datasrc", datasrc);
    // console.log("ModalVII otherattr", otherattr);
    // console.log("ModalVII positionConfig", positionConfig);

    return (
        <div className="py-64">
            <div className="py-12">
                <div className="w-full flex items-center justify-center" id="button">
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={() => setshow(true)}>
                        Open Modal
                    </button>
                </div>
                <div className={`${show ? "flex" : "hidden"} h-full w-full absolute items-center justify-center top-0 lg:mx-auto md:px-28 md:py-10 px-4 py-9`} id="modal">
                    <div className="bg-black bg-opacity-70 w-full h-full absolute" onClick={() => setshow(false)} />
                    <div className="bg-white border border-gray-300 xl:w-2/6 w-full relative z-30 xl:px-14 lg:px-28 md:px-16 px-4 py-10 flex flex-col items-center justify-center">
                        <div>
                            <svg width={136} height={28} viewBox="0 0 136 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.408 9V14.004H10.512V20.088C10.512 20.928 10.692 21.528 11.052 21.888C11.436 22.248 12 22.428 12.744 22.428C13.272 22.428 13.728 22.38 14.112 22.284C14.496 22.164 14.856 22.008 15.192 21.816L15.66 26.064C15.06 26.472 14.268 26.784 13.284 27C12.324 27.24 11.376 27.36 10.44 27.36C8.136 27.36 6.36 26.904 5.112 25.992C3.864 25.056 3.24 23.472 3.24 21.24V14.004H0.288V9H3.24V5.076L10.512 3.06V9H15.408ZM17.9274 27V1.584H25.1994V12.492C26.2554 9.924 28.1394 8.64 30.8514 8.64C32.6754 8.64 34.1154 9.18 35.1714 10.26C36.2274 11.316 36.7554 12.84 36.7554 14.832V27H29.4834V16.776C29.4834 15.744 29.3154 15.036 28.9794 14.652C28.6674 14.268 28.2234 14.076 27.6474 14.076C26.9274 14.076 26.3394 14.352 25.8834 14.904C25.4274 15.456 25.1994 16.332 25.1994 17.532V27H17.9274ZM49.1077 27.36C45.9877 27.36 43.5397 26.544 41.7637 24.912C39.9877 23.28 39.0997 20.976 39.0997 18C39.0997 16.008 39.5077 14.316 40.3237 12.924C41.1397 11.532 42.2797 10.476 43.7437 9.756C45.2077 9.012 46.8997 8.64 48.8197 8.64C50.7877 8.64 52.4557 9.012 53.8237 9.756C55.2157 10.476 56.2717 11.484 56.9917 12.78C57.7357 14.076 58.1077 15.588 58.1077 17.316C58.1077 18.204 58.0477 18.96 57.9277 19.584H46.0837C46.2517 20.664 46.5877 21.408 47.0917 21.816C47.6197 22.2 48.3157 22.392 49.1797 22.392C49.9237 22.392 50.5117 22.236 50.9437 21.924C51.3997 21.612 51.7237 21.18 51.9157 20.628L57.7477 22.356C57.4357 23.46 56.8477 24.384 55.9837 25.128C55.1197 25.872 54.0877 26.436 52.8877 26.82C51.6877 27.18 50.4277 27.36 49.1077 27.36ZM48.8197 13.572C48.0517 13.572 47.4397 13.788 46.9837 14.22C46.5517 14.652 46.2637 15.384 46.1197 16.416H51.2317C51.1357 15.48 50.8957 14.772 50.5117 14.292C50.1517 13.812 49.5877 13.572 48.8197 13.572Z"
                                    fill="#9CA3AF"
                                />
                                <path
                                    d="M69.3785 8.64C71.3945 8.64 73.0505 8.928 74.3465 9.504C75.6665 10.08 76.6625 10.812 77.3345 11.7C78.0065 12.588 78.3905 13.524 78.4865 14.508L71.7545 16.56C71.6825 15.576 71.4785 14.844 71.1425 14.364C70.8305 13.884 70.3265 13.644 69.6305 13.644C68.7185 13.644 68.0345 13.98 67.5785 14.652C67.1465 15.324 66.9305 16.464 66.9305 18.072C66.9305 19.752 67.1825 20.892 67.6865 21.492C68.1905 22.068 68.8505 22.356 69.6665 22.356C70.9865 22.356 71.7425 21.48 71.9345 19.728L78.4505 21.78C78.3545 22.812 77.9345 23.748 77.1905 24.588C76.4705 25.428 75.4745 26.1 74.2025 26.604C72.9305 27.108 71.4305 27.36 69.7025 27.36C66.5825 27.36 64.1225 26.544 62.3225 24.912C60.5225 23.28 59.6225 20.976 59.6225 18C59.6225 16.008 60.0305 14.316 60.8465 12.924C61.6625 11.532 62.8025 10.476 64.2665 9.756C65.7305 9.012 67.4345 8.64 69.3785 8.64ZM80.5506 27V9H87.0666L87.2826 13.212C87.6906 11.796 88.3266 10.68 89.1906 9.864C90.0786 9.048 91.2306 8.64 92.6466 8.64C93.1506 8.64 93.5466 8.688 93.8346 8.784C94.1466 8.856 94.3866 8.952 94.5546 9.072L93.9066 14.976C93.6666 14.88 93.3546 14.796 92.9706 14.724C92.5866 14.652 92.1426 14.616 91.6386 14.616C90.5586 14.616 89.6466 14.916 88.9026 15.516C88.1826 16.092 87.8226 16.968 87.8226 18.144V27H80.5506ZM99.5414 7.416C98.1014 7.416 97.0574 7.176 96.4094 6.696C95.7854 6.192 95.4734 5.364 95.4734 4.212C95.4734 3.06 95.7854 2.232 96.4094 1.728C97.0574 1.224 98.1014 0.971998 99.5414 0.971998C101.005 0.971998 102.049 1.224 102.673 1.728C103.297 2.232 103.609 3.06 103.609 4.212C103.609 5.364 103.297 6.192 102.673 6.696C102.049 7.176 101.005 7.416 99.5414 7.416ZM103.177 9V27H95.9054V9H103.177ZM118.866 27.36C117.402 27.36 116.154 26.952 115.122 26.136C114.114 25.296 113.382 24.204 112.926 22.86L112.71 27H106.338V1.584H113.61V12.096C114.09 11.064 114.786 10.236 115.698 9.612C116.61 8.964 117.762 8.64 119.154 8.64C121.218 8.64 122.874 9.468 124.122 11.124C125.37 12.78 125.994 15.096 125.994 18.072C125.994 21.024 125.358 23.316 124.086 24.948C122.838 26.556 121.098 27.36 118.866 27.36ZM116.094 22.176C116.91 22.176 117.546 21.864 118.002 21.24C118.458 20.616 118.686 19.536 118.686 18C118.686 16.464 118.458 15.396 118.002 14.796C117.546 14.172 116.91 13.86 116.094 13.86C115.302 13.86 114.69 14.22 114.258 14.94C113.826 15.66 113.61 16.68 113.61 18C113.61 19.416 113.826 20.472 114.258 21.168C114.714 21.84 115.326 22.176 116.094 22.176ZM131.657 20.16C132.929 20.16 133.913 20.472 134.609 21.096C135.329 21.72 135.689 22.596 135.689 23.724C135.689 24.852 135.329 25.728 134.609 26.352C133.913 26.976 132.929 27.288 131.657 27.288C130.385 27.288 129.389 26.976 128.669 26.352C127.973 25.728 127.625 24.852 127.625 23.724C127.625 22.596 127.973 21.72 128.669 21.096C129.389 20.472 130.385 20.16 131.657 20.16Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </div>
                        <div className="mt-14 text-center">
                            <p className="text-base leading-4 text-gray-600">Welcome to thecrib</p>
                            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 mt-3">ENJOY 10% OFF</h1>
                            <p className="text-base leading-4 mt-6 text-gray-600">Enter your Email to get 10% of discount</p>
                        </div>
                        <div className="w-full mt-8">
                            <input placeholder="Email address" type="email" className="w-full py-4 focus:outline-none text-base leading-4 text-gray-600 border-gray-400 border-b" />
                            <button role="button" aria-label="unlock ten percent off" className="text-base font-medium leading-4 py-4 w-full bg-gray-800 text-white uppercase mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 hover:bg-gray-700">
                                unlock 10% off
                            </button>
                        </div>
                        <div className="flex items-center justify-center">
                            <button role="button" aria-label="no thanks" className="mt-4 text-base font-semibold leading-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 underline text-gray-800 capitalize hover:text-gray-600" onClick={() => setshow(false)}>
                                No, Thanks
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
