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
const FooterV = () => {
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
      // console.log("FooterV config", config);
      // console.log("FooterV datasrc", datasrc);
      // console.log("FooterV otherattr", otherattr);
      // console.log("FooterV positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-12 px-10 py-12">
            <div className="sm:flex items-start justify-between">
                <div className="cursor-pointer">
                    <svg width="66" height="23" viewBox="0 0 66 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.95 17.41H16.37V22H0.83V2.2H6.95V17.41ZM23.4669 22.3C21.9269 22.3 20.7069 21.9 19.8069 21.1C18.9069 20.28 18.4569 18.94 18.4569 17.08V7H24.5169V15.67C24.5169 16.43 24.6569 16.97 24.9369 17.29C25.2169 17.61 25.6269 17.77 26.1669 17.77C26.7469 17.77 27.2069 17.55 27.5469 17.11C27.9069 16.67 28.0869 15.96 28.0869 14.98V7H34.1469V22H28.7169L28.5669 19C27.6669 21.2 25.9669 22.3 23.4669 22.3ZM48.1311 7V11.17H44.1411V22H38.0811V11.17H35.8611V7H38.0811V6.04C38.0811 4.62 38.3811 3.49 38.9811 2.65C39.6011 1.81 40.4011 1.21 41.3811 0.849999C42.3611 0.489999 43.3811 0.309999 44.4411 0.309999C45.3411 0.309999 46.1311 0.409998 46.8111 0.609998C47.4911 0.789998 47.9911 0.989999 48.3111 1.21L47.8311 4.81C47.6311 4.71 47.3911 4.62 47.1111 4.54C46.8311 4.44 46.4711 4.39 46.0311 4.39C45.3511 4.39 44.8011 4.53 44.3811 4.81C43.9611 5.09 43.7511 5.61 43.7511 6.37V7H48.1311ZM54.7266 22.3C53.1866 22.3 51.9666 21.9 51.0666 21.1C50.1666 20.28 49.7166 18.94 49.7166 17.08V7H55.7766V15.67C55.7766 16.43 55.9166 16.97 56.1966 17.29C56.4766 17.61 56.8866 17.77 57.4266 17.77C58.0066 17.77 58.4666 17.55 58.8066 17.11C59.1666 16.67 59.3466 15.96 59.3466 14.98V7H65.4066V22H59.9766L59.8266 19C58.9266 21.2 57.2266 22.3 54.7266 22.3Z"
                            fill="#4B5563"
                        />
                    </svg>
                </div>
                <div className="sm:ml-12 sm:mt-0 mt-20 flex gap-x-28 md:gap-x-20 lg:gap-x-28 gap-y-20 flex-wrap items-start">
                    <div className="flex flex-col space-y-6 items-start">
                        <h1 className="text-xl font-semibold leading-5 text-gray-800">ABOUT US</h1>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Store Locator</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Gift cards</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Lufu Group</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Careers</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Sustainability</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Special Offers</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Accessability</p>
                    </div>
                    <div className="flex flex-col space-y-6 items-start">
                        <h1 className="text-xl font-semibold leading-5 text-gray-800">SUPPORT</h1>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Contact us</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Size guide</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Shipping</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Payment security</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Order tracking</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Promotion details</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Special orders</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Our services</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Covid-19 Information</p>
                    </div>
                    <div className="md:hidden flex flex-col space-y-6 items-start">
                        <h1 className="text-xl font-semibold leading-5 text-gray-800">LEGAL</h1>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Privacy policy</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Cookie Policy</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Trademark</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Terms of use</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Promotion terms</p>
                    </div>
                    <div className="md:hidden flex flex-col space-y-6 items-start">
                        <h1 className="text-xl font-semibold leading-5 text-gray-800 uppercase">Visit Us</h1>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Mayfair</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Melbourne</p>
                        <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Wimbledon</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex flex-col space-y-6 items-start">
                            <h1 className="text-xl font-semibold leading-5 text-gray-800">LEGAL</h1>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Privacy policy</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Cookie Policy</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Trademark</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Terms of use</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Promotion terms</p>
                        </div>
                        <div className="flex flex-col space-y-7 items-start md:mt-10 mt-20">
                            <h1 className="text-xl font-semibold leading-5 text-gray-800 uppercase">Visit Us</h1>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Mayfair</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Melbourne</p>
                            <p className="hover:text-gray-500 text-base leading-4 cursor-pointer text-gray-800">Wimbledon</p>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <h1 className="text-xl font-semibold leading-5 text-gray-800 uppercase">FOLLOW Us</h1>
                        <div className="flex items-center gap-x-4 mt-6">
                            <div className="cursor-pointer">
                                <svg className="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.5 11.0637C21.5 5.26522 16.7984 0.56366 11 0.56366C5.20156 0.56366 0.5 5.26522 0.5 11.0637C0.5 16.3043 4.33906 20.6482 9.35938 21.4366V14.0998H6.69266V11.0637H9.35938V8.75038C9.35938 6.11928 10.9273 4.66475 13.3255 4.66475C14.4744 4.66475 15.6763 4.87007 15.6763 4.87007V7.45428H14.3516C13.048 7.45428 12.6402 8.26335 12.6402 9.09491V11.0637H15.552L15.087 14.0998H12.6406V21.4376C17.6609 20.6496 21.5 16.3057 21.5 11.0637Z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="cursor-pointer">
                                <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.25 2.13264C22.406 2.49936 21.513 2.74097 20.5992 2.84982C21.5595 2.2875 22.2817 1.39415 22.6303 0.337325C21.7224 0.868227 20.7307 1.24073 19.6978 1.43889C19.2629 0.983042 18.7397 0.620405 18.1603 0.373018C17.5808 0.125631 16.9571 -0.00133967 16.327 -0.000175167C13.7761 -0.000175167 11.7117 2.0342 11.7117 4.54201C11.7099 4.89084 11.7499 5.23863 11.8308 5.57795C10.0016 5.4922 8.2104 5.02557 6.57187 4.20791C4.93333 3.39026 3.48351 2.23959 2.31516 0.829512C1.90527 1.52051 1.6885 2.30891 1.6875 3.11232C1.6875 4.68732 2.50922 6.07951 3.75 6.89514C3.01487 6.87769 2.29481 6.68312 1.65094 6.32795V6.3842C1.65094 8.58732 3.24469 10.4201 5.35406 10.8373C4.9574 10.9431 4.54864 10.9966 4.13812 10.9967C3.84683 10.9972 3.5562 10.9689 3.27047 10.9123C3.85687 12.717 5.56359 14.0295 7.58531 14.067C5.94252 15.3331 3.9256 16.0174 1.85156 16.0123C1.48341 16.0118 1.11561 15.9899 0.75 15.9467C2.85993 17.294 5.31255 18.0066 7.81594 17.9998C16.3172 17.9998 20.9616 11.0764 20.9616 5.0717C20.9616 4.87482 20.9564 4.67795 20.947 4.48576C21.8485 3.84454 22.6283 3.04769 23.25 2.13264Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="cursor-pointer">
                                <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M23.8423 3.97453C23.8423 1.86516 22.2907 0.168281 20.3735 0.168281C17.7767 0.0468748 15.1282 0 12.4217 0H11.5779C8.87792 0 6.2248 0.0468749 3.62792 0.16875C1.71542 0.16875 0.163859 1.875 0.163859 3.98437C0.0466718 5.65266 -0.00301573 7.32141 -0.000203231 8.99016C-0.00489073 10.6589 0.0482343 12.3292 0.159172 14.0011C0.159172 16.1105 1.71073 17.8214 3.62323 17.8214C6.35136 17.948 9.1498 18.0042 11.9951 17.9995C14.8451 18.0089 17.6357 17.9495 20.367 17.8214C22.2842 17.8214 23.8357 16.1105 23.8357 14.0011C23.9482 12.3277 23.9998 10.6589 23.9951 8.98547C24.0057 7.31672 23.9548 5.64641 23.8423 3.97453ZM9.70292 13.5886V4.37766L16.4998 8.98078L9.70292 13.5886Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                            <div className="cursor-pointer">
                                <svg className="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.0025 0.5C5.20406 0.5 0.502502 5.20156 0.502502 11C0.502502 15.2984 3.09 18.9922 6.78844 20.6188C6.76031 19.8875 6.78375 19.0062 6.97125 18.2094C7.17281 17.3562 8.32125 12.4859 8.32125 12.4859C8.32125 12.4859 7.98375 11.8156 7.98375 10.8266C7.98375 9.27031 8.88375 8.10781 10.0088 8.10781C10.965 8.10781 11.4244 8.825 11.4244 9.68281C11.4244 10.6437 10.8103 12.0781 10.4963 13.4094C10.2338 14.525 11.0541 15.4297 12.1556 15.4297C14.1431 15.4297 15.4838 12.875 15.4838 9.84687C15.4838 7.54531 13.9322 5.825 11.115 5.825C7.93219 5.825 5.94469 8.20156 5.94469 10.8547C5.94469 11.7687 6.21656 12.4156 6.63844 12.9125C6.83063 13.1422 6.85875 13.2359 6.78844 13.4984C6.73688 13.6906 6.62438 14.1547 6.57281 14.3422C6.5025 14.6094 6.28688 14.7031 6.04782 14.6047C4.58063 14.0047 3.89625 12.4016 3.89625 10.5922C3.89625 7.61094 6.41344 4.03438 11.4009 4.03438C15.4088 4.03438 18.0478 6.93594 18.0478 10.0484C18.0478 14.1687 15.7556 17.2438 12.3806 17.2438C11.2463 17.2438 10.1822 16.6297 9.81656 15.9359C9.81656 15.9359 9.20719 18.3547 9.07594 18.8234C8.85563 19.6344 8.41969 20.4406 8.02125 21.0734C8.98776 21.3586 9.99013 21.5038 10.9978 21.5047C16.7963 21.5047 21.4978 16.8031 21.4978 11.0047C21.4978 5.20625 16.8009 0.5 11.0025 0.5Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-6 mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800 uppercase">Location</p>
                            <p className="text-sm leading-4 text-gray-800">United States</p>
                        </div>
                        <div className="flex flex-col space-y-6 mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800 uppercase">newsletter</p>
                            <p className="hover:text-gray-500 text-sm leading-4 cursor-pointer text-gray-800">Sign Up</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden sm:flex items-center justify-between md:mt-20">
                <div className="flex flex-col md:mt-0 mt-20">
                    <h1 className="text-xl font-semibold leading-5 text-gray-800 uppercase">FOLLOW Us</h1>
                    <div className="flex items-center gap-x-4 mt-6">
                        <div className="cursor-pointer">
                            <svg className="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5 11.0637C21.5 5.26522 16.7984 0.56366 11 0.56366C5.20156 0.56366 0.5 5.26522 0.5 11.0637C0.5 16.3043 4.33906 20.6482 9.35938 21.4366V14.0998H6.69266V11.0637H9.35938V8.75038C9.35938 6.11928 10.9273 4.66475 13.3255 4.66475C14.4744 4.66475 15.6763 4.87007 15.6763 4.87007V7.45428H14.3516C13.048 7.45428 12.6402 8.26335 12.6402 9.09491V11.0637H15.552L15.087 14.0998H12.6406V21.4376C17.6609 20.6496 21.5 16.3057 21.5 11.0637Z" fill="currentColor" />
                            </svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.25 2.13264C22.406 2.49936 21.513 2.74097 20.5992 2.84982C21.5595 2.2875 22.2817 1.39415 22.6303 0.337325C21.7224 0.868227 20.7307 1.24073 19.6978 1.43889C19.2629 0.983042 18.7397 0.620405 18.1603 0.373018C17.5808 0.125631 16.9571 -0.00133967 16.327 -0.000175167C13.7761 -0.000175167 11.7117 2.0342 11.7117 4.54201C11.7099 4.89084 11.7499 5.23863 11.8308 5.57795C10.0016 5.4922 8.2104 5.02557 6.57187 4.20791C4.93333 3.39026 3.48351 2.23959 2.31516 0.829512C1.90527 1.52051 1.6885 2.30891 1.6875 3.11232C1.6875 4.68732 2.50922 6.07951 3.75 6.89514C3.01487 6.87769 2.29481 6.68312 1.65094 6.32795V6.3842C1.65094 8.58732 3.24469 10.4201 5.35406 10.8373C4.9574 10.9431 4.54864 10.9966 4.13812 10.9967C3.84683 10.9972 3.5562 10.9689 3.27047 10.9123C3.85687 12.717 5.56359 14.0295 7.58531 14.067C5.94252 15.3331 3.9256 16.0174 1.85156 16.0123C1.48341 16.0118 1.11561 15.9899 0.75 15.9467C2.85993 17.294 5.31255 18.0066 7.81594 17.9998C16.3172 17.9998 20.9616 11.0764 20.9616 5.0717C20.9616 4.87482 20.9564 4.67795 20.947 4.48576C21.8485 3.84454 22.6283 3.04769 23.25 2.13264Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M23.8423 3.97453C23.8423 1.86516 22.2907 0.168281 20.3735 0.168281C17.7767 0.0468748 15.1282 0 12.4217 0H11.5779C8.87792 0 6.2248 0.0468749 3.62792 0.16875C1.71542 0.16875 0.163859 1.875 0.163859 3.98437C0.0466718 5.65266 -0.00301573 7.32141 -0.000203231 8.99016C-0.00489073 10.6589 0.0482343 12.3292 0.159172 14.0011C0.159172 16.1105 1.71073 17.8214 3.62323 17.8214C6.35136 17.948 9.1498 18.0042 11.9951 17.9995C14.8451 18.0089 17.6357 17.9495 20.367 17.8214C22.2842 17.8214 23.8357 16.1105 23.8357 14.0011C23.9482 12.3277 23.9998 10.6589 23.9951 8.98547C24.0057 7.31672 23.9548 5.64641 23.8423 3.97453ZM9.70292 13.5886V4.37766L16.4998 8.98078L9.70292 13.5886Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <div className="cursor-pointer">
                            <svg className="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.0025 0.5C5.20406 0.5 0.502502 5.20156 0.502502 11C0.502502 15.2984 3.09 18.9922 6.78844 20.6188C6.76031 19.8875 6.78375 19.0062 6.97125 18.2094C7.17281 17.3562 8.32125 12.4859 8.32125 12.4859C8.32125 12.4859 7.98375 11.8156 7.98375 10.8266C7.98375 9.27031 8.88375 8.10781 10.0088 8.10781C10.965 8.10781 11.4244 8.825 11.4244 9.68281C11.4244 10.6437 10.8103 12.0781 10.4963 13.4094C10.2338 14.525 11.0541 15.4297 12.1556 15.4297C14.1431 15.4297 15.4838 12.875 15.4838 9.84687C15.4838 7.54531 13.9322 5.825 11.115 5.825C7.93219 5.825 5.94469 8.20156 5.94469 10.8547C5.94469 11.7687 6.21656 12.4156 6.63844 12.9125C6.83063 13.1422 6.85875 13.2359 6.78844 13.4984C6.73688 13.6906 6.62438 14.1547 6.57281 14.3422C6.5025 14.6094 6.28688 14.7031 6.04782 14.6047C4.58063 14.0047 3.89625 12.4016 3.89625 10.5922C3.89625 7.61094 6.41344 4.03438 11.4009 4.03438C15.4088 4.03438 18.0478 6.93594 18.0478 10.0484C18.0478 14.1687 15.7556 17.2438 12.3806 17.2438C11.2463 17.2438 10.1822 16.6297 9.81656 15.9359C9.81656 15.9359 9.20719 18.3547 9.07594 18.8234C8.85563 19.6344 8.41969 20.4406 8.02125 21.0734C8.98776 21.3586 9.99013 21.5038 10.9978 21.5047C16.7963 21.5047 21.4978 16.8031 21.4978 11.0047C21.4978 5.20625 16.8009 0.5 11.0025 0.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:mt-0 mt-20 space-y-6">
                    <p className="text-xl font-semibold leading-5 text-gray-800 uppercase">Location</p>
                    <p className="text-sm leading-4 text-gray-800">United States</p>
                </div>
                <div className="flex flex-col md:mt-0 mt-20 space-y-6">
                    <p className="text-xl font-semibold leading-5 text-gray-800 uppercase">newsletter</p>
                    <p className="text-sm leading-4 cursor-pointer text-gray-800">Sign Up</p>
                </div>
            </div>
        </div>
    );
};

export default FooterV;
