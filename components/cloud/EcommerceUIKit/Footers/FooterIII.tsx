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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

const FooterIII = () => {
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
      // console.log("FooterIII config", config);
      // console.log("FooterIII datasrc", datasrc);
      // console.log("FooterIII otherattr", otherattr);
      // console.log("FooterIII positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4">
            <div className="py-14 border-b border-t border-gray-200 lg:flex items-center justify-between sm:space-y-10 lg:space-y-0">
                <div className="lg:w-1/2 sm:flex items-start justify-between">
                    <div className="md:w-1/2">
                        <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">Customer services</h2>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Contact</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Track order</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Delivery &amp; returns</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Return policy</p>
                        </a>
                        <a href="/">
                            <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Sitemap</p>
                        </a>
                    </div>
                    <div className="md:w-1/2 md:flex items-center justify-center mt-9 md:mt-0">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">Online services</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Payment methods</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Shipping options</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">My account</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">E-services</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Frequently asked questions</p>
                            </a>
                        </div>
                    </div>
                    <div className="lg:hidden md:w-1/2 sm:pt-0 md:flex items-center justify-center mt-9 md:mt-0">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">Privacy &amp; legal</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Cookies</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Privacy policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Terms &amp; conditions</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:flex items-start justify-between">
                    <div className="hidden md:w-1/2 sm:pt-0 pt-4 lg:flex items-center lg:justify-center">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">Privacy &amp; legal</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Cookies</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Privacy policy</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Terms &amp; conditions</p>
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 sm:pt-0 mt-10 md:mt-0 sm:flex items-center lg:justify-center">
                        <div className="flex flex-col items-left justify-start">
                            <h2 className="text-xl font-extrabold leading-tight text-gray-800 pb-7">More from luxe</h2>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Luxe app for iOS &amp; Android</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">The company</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Media publications</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">Careers at luxe</p>
                            </a>
                            <a href="/">
                                <p className="pb-6 cursor-pointer text-base leading-4 text-gray-800">luxe &amp; CSR</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col py-12 items-center justify-center">
                <a href="/" className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="55" height="25" viewBox="0 0 55 25" fill="none">
                        <path
                            d="M5.64 21.21C5.64 22.03 5.81 22.6 6.15 22.92C6.49 23.22 7.08 23.37 7.92 23.37V24C6.08 23.92 4.87 23.88 4.29 23.88C3.71 23.88 2.5 23.92 0.66 24V23.37C1.5 23.37 2.09 23.22 2.43 22.92C2.77 22.6 2.94 22.03 2.94 21.21V4.08C2.94 3.16 2.77 2.49 2.43 2.07C2.09 1.65 1.5 1.44 0.66 1.44V0.809998C1.28 0.869999 1.9 0.899999 2.52 0.899999C3.78 0.899999 4.82 0.759999 5.64 0.479999V21.21ZM23.074 20.76C23.074 21.68 23.244 22.35 23.584 22.77C23.924 23.19 24.514 23.4 25.354 23.4V24.03C24.734 23.97 24.114 23.94 23.494 23.94C22.234 23.94 21.194 24.08 20.374 24.36V20.82C19.894 22.06 19.214 22.97 18.334 23.55C17.454 24.13 16.494 24.42 15.454 24.42C14.094 24.42 13.054 24.04 12.334 23.28C11.974 22.88 11.714 22.37 11.554 21.75C11.414 21.13 11.344 20.33 11.344 19.35V11.82C11.344 10.9 11.174 10.23 10.834 9.81C10.494 9.39 9.90398 9.18 9.06398 9.18V8.55C9.68398 8.61 10.304 8.64 10.924 8.64C12.184 8.64 13.224 8.5 14.044 8.22V20.01C14.044 20.77 14.084 21.39 14.164 21.87C14.264 22.33 14.474 22.71 14.794 23.01C15.134 23.31 15.644 23.46 16.324 23.46C17.084 23.46 17.774 23.22 18.394 22.74C19.014 22.26 19.494 21.61 19.834 20.79C20.194 19.95 20.374 19.03 20.374 18.03V11.82C20.374 10.9 20.204 10.23 19.864 9.81C19.524 9.39 18.934 9.18 18.094 9.18V8.55C18.714 8.61 19.334 8.64 19.954 8.64C21.214 8.64 22.254 8.5 23.074 8.22V20.76ZM39.3356 21.87C39.6956 22.37 39.9956 22.73 40.2356 22.95C40.4956 23.15 40.8156 23.29 41.1956 23.37V24C40.1556 23.92 39.4456 23.88 39.0656 23.88C38.3856 23.88 37.2056 23.92 35.5256 24V23.37C35.8456 23.37 36.1156 23.31 36.3356 23.19C36.5756 23.07 36.6956 22.91 36.6956 22.71C36.6956 22.57 36.6556 22.45 36.5756 22.35L33.1556 17.37L30.9656 20.22C30.4056 20.96 30.1256 21.56 30.1256 22.02C30.1256 22.44 30.3156 22.77 30.6956 23.01C31.0956 23.23 31.6456 23.36 32.3456 23.4V24C31.3056 23.94 30.1656 23.91 28.9256 23.91C28.0456 23.91 27.2856 23.94 26.6456 24V23.4C27.0456 23.36 27.4456 23.18 27.8456 22.86C28.2656 22.54 28.7456 22.02 29.2856 21.3L32.7356 16.77L28.5656 10.68C28.1656 10.1 27.8456 9.72 27.6056 9.54C27.3656 9.34 27.0656 9.22 26.7056 9.18V8.55C27.7456 8.63 28.4556 8.67 28.8356 8.67C29.5156 8.67 30.6956 8.63 32.3756 8.55V9.18C32.0556 9.18 31.7756 9.24 31.5356 9.36C31.3156 9.48 31.2056 9.64 31.2056 9.84C31.2056 9.98 31.2456 10.1 31.3256 10.2L34.5356 14.88L36.6056 11.97C37.2056 11.11 37.5056 10.48 37.5056 10.08C37.5056 9.8 37.3656 9.59 37.0856 9.45C36.8256 9.29 36.3956 9.19 35.7956 9.15V8.55C36.8356 8.61 37.6756 8.64 38.3156 8.64C39.1956 8.64 39.9556 8.61 40.5956 8.55V9.15C39.7756 9.25 38.8956 9.95 37.9556 11.25L34.9256 15.45L39.3356 21.87ZM54.9642 20.4C54.6042 21.5 53.9242 22.45 52.9242 23.25C51.9442 24.03 50.7542 24.42 49.3542 24.42C47.9342 24.42 46.7042 24.1 45.6642 23.46C44.6242 22.8 43.8242 21.89 43.2642 20.73C42.7242 19.55 42.4542 18.19 42.4542 16.65C42.4542 14.91 42.7342 13.4 43.2942 12.12C43.8542 10.84 44.6442 9.86 45.6642 9.18C46.6842 8.48 47.8742 8.13 49.2342 8.13C51.0342 8.13 52.4142 8.68 53.3742 9.78C54.3542 10.86 54.8442 12.51 54.8442 14.73H45.4542C45.3942 15.29 45.3642 15.93 45.3642 16.65C45.3642 17.97 45.5742 19.12 45.9942 20.1C46.4342 21.08 47.0042 21.84 47.7042 22.38C48.4242 22.9 49.1742 23.16 49.9542 23.16C50.9142 23.16 51.7642 22.93 52.5042 22.47C53.2442 22.01 53.8642 21.24 54.3642 20.16L54.9642 20.4ZM49.1142 8.7C48.1742 8.7 47.3642 9.16 46.6842 10.08C46.0042 11 45.5842 12.36 45.4242 14.16H51.9642C52.0042 12.6 51.7742 11.3 51.2742 10.26C50.7942 9.22 50.0742 8.7 49.1142 8.7Z"
                            fill="#18181B"
                        ></path>
                    </svg>
                </a>
                <p className="text-sm text-center text-gray-500 pt-3">© 2021 Luxe Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default FooterIII;
