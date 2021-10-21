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

export default function NewsletterXI() {
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
      // console.log("NewsletterXI config", config);
      // console.log("NewsletterXI datasrc", datasrc);
      // console.log("NewsletterXI otherattr", otherattr);
      // console.log("NewsletterXI positionConfig", positionConfig);
    return (
        <div className="mx-auto container py-12 px-2 sm:px-6">
            <div className="flex flex-col justify-center items-center relative">
                <div className="mx-4 md:mx-12 lg:mx-20 xl:mx-40 relative border xl:border-gray-800 border-gray-300">
                    <div className="relative z-30 bg-tranparent flex flex-col lg:flex-row justify-center items-center px-3 py-12 md:p-12 lg:space-x-12 xl:space-x-32">
                        <div className="flex flex-col justify-start items-start">
                            <div>
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Subscribe to our newsletter</p>
                            </div>
                            <div className="mt-6">
                                <p className="text-base leading-6 text-gray-600">Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday to get latest news and updates.</p>
                            </div>
                            <div className="md:mt-12 lg:mt-0 flex flex-col md:flex-row lg:flex-col justify-between md:space-x-40 lg:space-x-0">
                                <div className="mt-8 md:mt-0 lg:mt-12 flex flex-col space-y-4">
                                    <div>
                                        <p className="text-xl font-semibold leading-5 text-gray-800">Call us</p>
                                    </div>
                                    <div>
                                        <p className="text-base leading-none text-gray-600">+674-484-8968</p>
                                    </div>
                                </div>
                                <div className="mt-6 md:mt-0 lg:mt-10 flex flex-col space-y-4">
                                    <div>
                                        <p className="text-xl font-semibold leading-5 text-gray-800">Email us</p>
                                    </div>
                                    <div>
                                        <p className="text-base leading-none text-gray-600">Lemuel47@hotmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="2xl:w-4/6 mt-12 md:mt-14 lg:mt-0 w-full flex justify-center items-center flex-col space-y-6">
                            <div className="w-full">
                                <input className="bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 h-12 w-full border border-gray-400 px-4 placeholder-gray-600 text-base leading-none text-gray-600 pb-1" placeholder="Your Name" type="text" name="name"  />
                            </div>
                            <div className="w-full">
                                <input className="bg-transparentfocus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 h-12 w-full border border-gray-400 px-4 placeholder-gray-600 text-base leading-none text-gray-600 pb-1" placeholder="Your Email" type="email" name="name"  />
                            </div>
                            <div className="w-full">
                                <textarea className="bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 resize-none focus:ring-offset-2 h-44 2xl:h-48 w-full border border-gray-400 px-4 py-4 placeholder-gray-600 text-base leading-none text-gray-600 pb-1" placeholder="Your Message" name="area"  defaultValue={""} />
                            </div>
                            <div className="w-full">
                                <button className="w-full h-12 focus:ring-2 focus:ring-offset-2 focus:ring-black hover:bg-black border border-gray-800 hover:text-white bg-gray-800 text-base font-medium leading-4 text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blur absolute inset-0 h-full w-full" />
                </div>
                <div className="-mt-52 lg:-mt-72 xl:-mt-64 w-full">
                    <img className="w-full hidden lg:block" src="https://i.ibb.co/3ypM7TW/google-map-background-2.png" alt="google-map" />
                    <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/rHWNWfP/google-map-background-2-1-2.png" alt="google-map" />
                    <img className="w-full md:hidden" src="https://i.ibb.co/TtgTRvC/mobile.png" alt="google-map" />
                </div>
            </div>

            <style>
                {`
                    .bg-blur {
                        background: linear-gradient(102.53deg, rgba(255, 255, 255, 0.4) 16.26%, rgba(255, 255, 255, 0.1) 78.34%);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                                
                `}
            </style>
        </div>
    );
}
