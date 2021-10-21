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
const Highlight9 = () => {
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
      // console.log("Highlight9 config", config);
      // console.log("Highlight9 datasrc", datasrc);
      // console.log("Highlight9 otherattr", otherattr);
      // console.log("Highlight9 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className=" text-center">
                <h2 className=" lg:text-4xl text-3xl lg:leading-9 leading-7 font-semibold text-gray-800">Our Delivery Process</h2>
                <p className=" font-normal text-base lg:leading-4 leading-6 text-gray-600 lg:mt-4 md:mt-2 mt-4">Here is the procedure through which we guarantee that your order is delivered on time</p>
            </div>

            <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-10  lg:mt-16 mt-10 ">
                {/* Order Online Grid Card */}
                <div className=" flex flex-col justify-start items-center ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99996 34.9997C11.8409 34.9997 13.3333 33.5073 13.3333 31.6663C13.3333 29.8254 11.8409 28.333 9.99996 28.333C8.15901 28.333 6.66663 29.8254 6.66663 31.6663C6.66663 33.5073 8.15901 34.9997 9.99996 34.9997Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.3333 34.9997C30.1743 34.9997 31.6667 33.5073 31.6667 31.6663C31.6667 29.8254 30.1743 28.333 28.3333 28.333C26.4924 28.333 25 29.8254 25 31.6663C25 33.5073 26.4924 34.9997 28.3333 34.9997Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.3333 28.3333H9.99996V5H6.66663" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31.905 20.003L31.6667 21.6663H10M10 8.33301L20.0083 9.04801L10 8.33301Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M30 5V15M25 10H35H25Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-center text-xl text-gray-800 font-semibold leading-5 mt-6">Order Online</p>
                    <p className="text-center font-normal text-base leading-6 text-gray-600 mt-4">Order online from a huge range of products offered.</p>
                </div>

                {/* Personalization Grid Card */}
                <div className=" flex flex-col justify-start items-center ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 35.0002H11.6667L33.3333 13.3335C34.2174 12.4495 34.714 11.2504 34.714 10.0002C34.714 8.74994 34.2174 7.5509 33.3333 6.66684C32.4493 5.78279 31.2502 5.28613 30 5.28613C28.7498 5.28613 27.5507 5.78279 26.6667 6.66684L5 28.3335V35.0002Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M24.1666 9.16699L30.8333 15.8337" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 13.3333L11.6667 5L5 11.6667L13.3333 20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M11.6666 13.333L9.16663 15.833" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.6667 20L35 28.3333L28.3333 35L20 26.6667" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.6666 28.333L24.1666 30.833" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-center text-xl text-gray-800 font-semibold leading-5 mt-6">Personalisation</p>
                    <p className="text-center font-normal text-base leading-6 text-gray-600 mt-4 lg:pr-0 pr-10">We offer a range of personalisation services</p>
                </div>

                {/* Shopping Grid Card */}
                <div className=" flex flex-col justify-start items-center ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 31.6667C10.1743 31.6667 11.6667 30.1743 11.6667 28.3333C11.6667 26.4924 10.1743 25 8.33333 25C6.49238 25 5 26.4924 5 28.3333C5 30.1743 6.49238 31.6667 8.33333 31.6667Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M31.6667 29.9997H35V19.9997C35 16.9055 34.122 13.938 32.5592 11.7501C30.9964 9.56217 28.8768 8.33301 26.6667 8.33301H25L27.5 19.9997H35M11.6667 29.9997H25H11.6667Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 29.9997V8.33301H25" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 28.3333V20H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-center text-xl text-gray-800 font-semibold leading-5 mt-6">Shipping</p>
                    <p className="text-center font-normal text-base leading-6 text-gray-600 mt-4">All of our products are shipped over XYZ services.</p>
                </div>

                {/* Delivery Grid Card */}
                <div className=" flex flex-col justify-start items-center ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.33333 20H5L20 5L35 20H31.6667" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.33331 20V31.6667C8.33331 32.5507 8.6845 33.3986 9.30962 34.0237C9.93474 34.6488 10.7826 35 11.6666 35H28.3333C29.2174 35 30.0652 34.6488 30.6903 34.0237C31.3155 33.3986 31.6666 32.5507 31.6666 31.6667V20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 35.0003V25.0003C15 24.1163 15.3512 23.2684 15.9763 22.6433C16.6014 22.0182 17.4493 21.667 18.3333 21.667H21.6667C22.5507 21.667 23.3986 22.0182 24.0237 22.6433C24.6488 23.2684 25 24.1163 25 25.0003V35.0003" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-center text-xl text-gray-800 font-semibold leading-5 mt-6">Delivery</p>
                    <p className="text-center font-normal text-base leading-6 text-gray-600 mt-4 lg:pr-0 pr-10">Your order will br delivered at your doorstep.</p>
                </div>
            </div>
        </div>
    );
};

export default Highlight9;
