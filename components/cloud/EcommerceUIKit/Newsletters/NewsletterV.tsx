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
export default function NewsletterV() {
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
      // console.log("NewsletterV config", config);
      // console.log("NewsletterV datasrc", datasrc);
      // console.log("NewsletterV otherattr", otherattr);
      // console.log("NewsletterV positionConfig", positionConfig);
    return (
        <div className="mx-auto container py-12 px-4 md:px-6 xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-start lg:space-x-40 xl:space-x-60 space-y-16 lg:space-y-0">
                <div className="w-full 2xl:w-1/3 flex flex-col ">
                    <div>
                        <p className=" text-3xl lg:text-4xl font-semibold leading-8 lg:leading-9 text-gray-800">Subscribe to our newsletter</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-base leading-6 text-gray-600">Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday to get latest news and updates. </p>
                    </div>
                </div>
                <div className="w-full 2xl:w-1/3 flex flex-col justify-center items-start">
                    <div className="relative flex items-center flex-col sm:flex-row jusitfy-center w-full space-y-4 sm:space-y-0">
                        <input className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 w-full bg-gray-100 h-12 sm:h-16 px-4 text-gray-600 placeholder-gray-600 font-medium sm:font-normal" type="text" placeholder="Enter your email address here" />
                        <div className=" sm:absolute right-4 w-full sm:w-32">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 text-base w-full sm:w-32 leading-4 bg-gray-800 text-white hover:bg-black ">Subscribe</button>
                        </div>
                    </div>
                    <div className="mt-6 flex flex-row jusitfy-start items-start space-x-6">
                        <button aria-label="facebook" className="text-gray-800 hover:text-black focus:outline-none focus:ring-offset-2 focus:ring-gray-800 focus:ring-2 ">
                            <svg className="fill-current " width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M30 16.0849C30 8.35364 23.7313 2.08489 16 2.08489C8.26875 2.08489 2 8.35364 2 16.0849C2 23.0724 7.11875 28.8643 13.8125 29.9155V20.133H10.2569V16.0849H13.8125V13.0005C13.8125 9.49239 15.9031 7.55302 19.1006 7.55302C20.6325 7.55302 22.235 7.82677 22.235 7.82677V11.2724H20.4688C18.7306 11.2724 18.1869 12.3511 18.1869 13.4599V16.0849H22.0694L21.4494 20.133H18.1875V29.9168C24.8813 28.8661 30 23.0743 30 16.0849Z" fill="currentColor" />
                            </svg>
                        </button>
                        <button aria-label="twitter" className="text-gray-800 hover:text-black focus:outline-none focus:ring-offset-2 focus:ring-gray-800 focus:ring-2 ">
                            <svg className="fill-current " width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M31 6.84351C29.8747 7.33248 28.684 7.65462 27.4656 7.79976C28.746 7.05 29.709 5.85886 30.1737 4.44976C28.9632 5.15763 27.641 5.6543 26.2638 5.91851C25.6838 5.31071 24.9863 4.8272 24.2137 4.49735C23.4411 4.1675 22.6095 3.99821 21.7694 3.99976C18.3681 3.99976 15.6156 6.71226 15.6156 10.056C15.6132 10.5211 15.6665 10.9848 15.7744 11.4373C13.3354 11.3229 10.9472 10.7007 8.76249 9.61054C6.57777 8.52034 4.64468 6.98611 3.08687 5.10601C2.54036 6.02733 2.25133 7.07854 2.25 8.14976C2.25 10.2498 3.34562 12.106 5 13.1935C4.01983 13.1702 3.05974 12.9108 2.20125 12.4373V12.5123C2.20125 15.4498 4.32625 17.8935 7.13875 18.4498C6.60986 18.5907 6.06486 18.6622 5.5175 18.6623C5.12911 18.6629 4.74161 18.6253 4.36062 18.5498C5.1425 20.956 7.41813 22.706 10.1138 22.756C7.92336 24.4441 5.23414 25.3565 2.46875 25.3498C1.97789 25.349 1.48748 25.3198 1 25.2623C3.81324 27.0586 7.0834 28.0088 10.4213 27.9998C21.7563 27.9998 27.9487 18.7685 27.9487 10.7623C27.9487 10.4998 27.9419 10.2373 27.9294 9.98101C29.1313 9.12605 30.1711 8.06358 31 6.84351Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                        <button aria-label="youtube" className="text-gray-800 hover:text-black focus:outline-none focus:ring-offset-2 focus:ring-gray-800 focus:ring-2 ">
                            <svg className="fill-current " width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0)">
                                    <path
                                        d="M31.7897 9.29937C31.7897 6.48687 29.721 4.22437 27.1647 4.22437C23.7022 4.0625 20.171 4 16.5622 4H15.4372C11.8372 4 8.29971 4.0625 4.83721 4.225C2.28721 4.225 0.218459 6.5 0.218459 9.3125C0.0622087 11.5369 -0.00404132 13.7619 -0.000291319 15.9869C-0.00654132 18.2119 0.064292 20.439 0.212209 22.6681C0.212209 25.4806 2.28096 27.7619 4.83096 27.7619C8.46846 27.9306 12.1997 28.0056 15.9935 27.9994C19.7935 28.0119 23.5143 27.9327 27.156 27.7619C29.7122 27.7619 31.781 25.4806 31.781 22.6681C31.931 20.4369 31.9997 18.2119 31.9935 15.9806C32.0076 13.7556 31.9397 11.5285 31.7897 9.29937ZM12.9372 22.1181V9.83687L21.9997 15.9744L12.9372 22.1181Z"
                                        fill="currentColor"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width={32} height={32} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button aria-label="pinterest" className="text-gray-800 hover:text-black focus:outline-none focus:ring-offset-2 focus:ring-gray-800 focus:ring-2 ">
                            <svg className="fill-current " width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.0034 2C8.27211 2 2.00336 8.26875 2.00336 16C2.00336 21.7313 5.45336 26.6562 10.3846 28.825C10.3471 27.85 10.3784 26.675 10.6284 25.6125C10.8971 24.475 12.4284 17.9813 12.4284 17.9813C12.4284 17.9813 11.9784 17.0875 11.9784 15.7688C11.9784 13.6938 13.1784 12.1438 14.6784 12.1438C15.9534 12.1438 16.5659 13.1 16.5659 14.2437C16.5659 15.525 15.7471 17.4375 15.3284 19.2125C14.9784 20.7 16.0721 21.9062 17.5409 21.9062C20.1909 21.9062 21.9784 18.5 21.9784 14.4625C21.9784 11.3937 19.9096 9.1 16.1534 9.1C11.9096 9.1 9.25961 12.2687 9.25961 15.8062C9.25961 17.025 9.62211 17.8875 10.1846 18.55C10.4409 18.8562 10.4784 18.9812 10.3846 19.3312C10.3159 19.5875 10.1659 20.2062 10.0971 20.4562C10.0034 20.8125 9.71586 20.9375 9.39711 20.8062C7.44086 20.0063 6.52836 17.8687 6.52836 15.4563C6.52836 11.4813 9.88461 6.7125 16.5346 6.7125C21.8784 6.7125 25.3971 10.5812 25.3971 14.7312C25.3971 20.225 22.3409 24.325 17.8409 24.325C16.3284 24.325 14.9096 23.5062 14.4221 22.5812C14.4221 22.5812 13.6096 25.8062 13.4346 26.4312C13.1409 27.5125 12.5596 28.5875 12.0284 29.4312C13.317 29.8114 14.6535 30.0051 15.9971 30.0063C23.7284 30.0063 29.9971 23.7375 29.9971 16.0063C29.9971 8.275 23.7346 2 16.0034 2Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
