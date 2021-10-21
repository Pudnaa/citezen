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

const Highlight6 = () => {
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
      // console.log("Highlight6 config", config);
      // console.log("Highlight6 datasrc", datasrc);
      // console.log("Highlight6 otherattr", otherattr);
      // console.log("Highlight6 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-24 md:gap-16 gap-12">
                {/* Free Shipping Grid Card */}
                <div className=" flex flex-col justify-start items-center">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="33" cy="33" r="29" stroke="#1F2937" strokeWidth="2" />
                        <circle cx="33" cy="33" r="32.25" stroke="#1F2937" strokeWidth="0.5" />
                        <g>
                            <path d="M35.6413 24.9291L40.3554 20.2151C40.9805 19.59 41.8283 19.2388 42.7124 19.2388C43.5964 19.2388 44.4443 19.59 45.0694 20.2151C45.6945 20.8402 46.0457 21.6881 46.0457 22.5721C46.0457 23.4562 45.6945 24.304 45.0694 24.9291L40.3554 29.6432L43.8909 42.6068L40.3554 46.1423L34.4628 35.5357L29.7488 40.2498V44.9638L26.2132 48.4994L23.8562 41.4283L16.7851 39.0713L20.3207 35.5357H25.0347L29.7488 30.8217L19.1422 24.9291L22.6777 21.3936L35.6413 24.9291Z" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white" transform="translate(5 32) rotate(-45)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-6 mt-6">Free Shipping</p>
                    <p className=" text-base leading-6 font-normal text-center text-gray-600 mt-4 lg:w-9/12">Free shipping on orders above $100</p>
                </div>

                {/* Easy Returns Grid Card */}
                <div className=" flex flex-col justify-start items-center">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M40.8334 26.3333C40.5016 25.3921 39.8958 24.5716 39.0938 23.9776C38.2918 23.3835 37.3304 23.0431 36.3334 23H29.6667C28.3406 23 27.0688 23.5268 26.1312 24.4645C25.1935 25.4021 24.6667 26.6739 24.6667 28C24.6667 29.3261 25.1935 30.5979 26.1312 31.5355C27.0688 32.4732 28.3406 33 29.6667 33H36.3334C37.6594 33 38.9312 33.5268 39.8689 34.4645C40.8066 35.4021 41.3334 36.6739 41.3334 38C41.3334 39.3261 40.8066 40.5979 39.8689 41.5355C38.9312 42.4732 37.6594 43 36.3334 43H29.6667C28.6696 42.9569 27.7082 42.6165 26.9062 42.0224C26.1043 41.4284 25.4984 40.6079 25.1667 39.6667"
                            stroke="#1F2937"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path d="M33 43V48M33 18V23V18Z" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="33" cy="33" r="29" stroke="#1F2937" strokeWidth="2" />
                        <circle cx="33" cy="33" r="32.25" stroke="#1F2937" strokeWidth="0.5" />
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-6 mt-6">Easy Returns</p>
                    <p className=" text-base leading-6 font-normal text-center text-gray-600 mt-4 lg:w-9/12">You can return the product within 30 days.</p>
                </div>

                {/* One Year Warranty Grid Card */}
                <div className=" flex flex-col justify-start items-center">
                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="33" cy="33" r="29" stroke="#1F2937" strokeWidth="2" />
                        <circle cx="33" cy="33" r="32.25" stroke="#1F2937" strokeWidth="0.5" />
                        <path d="M28 33.0003L31.3333 36.3337L38 29.667" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M33 18C36.893 21.4443 41.9741 23.2376 47.1667 23C47.9226 25.5717 48.154 28.2691 47.8469 30.932C47.5398 33.5948 46.7005 36.1688 45.379 38.5009C44.0575 40.833 42.2806 42.8756 40.1541 44.5075C38.0275 46.1393 35.5946 47.327 33 48C30.4053 47.327 27.9725 46.1393 25.8459 44.5075C23.7193 42.8756 21.9425 40.833 20.621 38.5009C19.2995 36.1688 18.4602 33.5948 18.1531 30.932C17.846 28.2691 18.0773 25.5717 18.8333 23C24.0259 23.2376 29.1069 21.4443 33 18" stroke="#1F2937" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className=" text-xl text-gray-800 font-semibold leading-6 mt-6">One Year Warranty</p>
                    <p className=" text-base leading-6 font-normal text-center text-gray-600 mt-4 lg:w-10/12">We offer one year warranty on all digital products</p>
                </div>
            </div>
        </div>
    );
};

export default Highlight6;
