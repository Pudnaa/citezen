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

export default function NewsletterII() {
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
      // console.log("NewsletterII config", config);
      // console.log("NewsletterII datasrc", datasrc);
      // console.log("NewsletterII otherattr", otherattr);
      // console.log("NewsletterII positionConfig", positionConfig);
    return (
        <div className="mx-auto container flex justify-center items-center 2xl:px-20 px-6 py-12">
            <div className="sm:flex flex-wrap lg:flex-nowrap items-center justify-between">
                <div className="lg:w-1/3">
                    <p className="text-2xl font-medium leading-normal text-black pb-5">Luxe newsletter</p>
                    <p className="text-sm font-light leading-none text-gray-600">Subscrible to receive updates from luxe</p>
                    <div className="flex items-center justify-between border-b border-gray-500 pt-5 w-72">
                        <input type="email" className="py-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none w-full pr-4" placeholder="Enter you email address" />
                        <button aria-label="search" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  text-gray-500 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={12} viewBox="0 0 14 12" fill="none">
                                <path d="M8 11L13 6L8 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1 11L6 6L1 1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/3 flex md:mx-4 items-center sm:pt-0 pt-6 md:justify-center">
                    <div className="flex flex-col items-left justify-start">
                        <p className="text-2xl font-medium leading-normal text-black pb-5">Help center</p>
                        <p className="text-sm font-light leading-none text-gray-600 pb-5">Available throughout the week</p>
                        <p className="w-full font-light text-sm leading-5 text-gray-600">
                            To speak with luxe care, call on
                            <span className="font-semibold cursor-pointer underline">287-024-9820</span>
                            or
                            <br />
                            send us an email on
                            <span className="font-semibold cursor-pointer underline">care@luxe.com</span>
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/3 flex items-center lg:mt-0 mt-6 md:justify-end">
                    <div className="flex flex-col items-left justify-start">
                        <p className="text-2xl font-medium leading-normal text-black pb-5">Find a store</p>
                        <p className="text-sm font-light leading-none text-gray-600">Enter a location to find the nearby luxe outlets</p>
                        <div className="flex items-center justify-between border-b border-gray-500 pt-5 w-72">
                            <input type="text" className="w-full pr-4 py-3 text-sm text-gray-500 placeholder-gray-500 focus:outline-none" placeholder="Search by zipcode or vicinity" />
                            <button aria-label="search" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer text-gray-500 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
