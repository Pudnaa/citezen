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
  AtomImage,
} from "@components/common/Atom";
const CtaII = () => {
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
    // console.log("Cta2 config", config);
  // console.log("Cta2 datasrc", datasrc);
  // console.log("Cta2 otherattr", otherattr);
  // console.log("Cta2 positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container lg:px-20 md:px-6 px-4 md:py-12 py-8 flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="w-full relative">
                    <img className="w-full hidden lg:block" src="https://i.ibb.co/808PfJx/Group-1741.png" alt="sofas" />
                    <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/5BS3WRr/pexels-houzlook-com-3356416-3.png" alt="sofas" />
                    <img className="w-full md:hidden" src="https://i.ibb.co/7159Lvf/pexels-houzlook-com-3356416-4.png" alt="sofas" />
                    <div className="absolute lg:hidden inset-0 w-full opacity-60 bg-gray-800"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
                        <div className="px-2 sm:px-4 md:px-0">
                            <p className="text-3xl lg:text-4xl font-semibold lg:leading-9 md:leading-7 leading-9 text-white">Decorate Your Home With Us</p>
                        </div>
                        <div className="px-2 sm:px-4 md:px-0 lg:mt-6 mt-4 md:w-3/4 lg:w-2/5">
                            <p className="text-base leading-6 text-center text-white font-normal">We offer premium quality furniture at most affordable prices ever and a huge range of collection to give you most exquisite shopping experience</p>
                        </div>
                        <div className="px-4 sm:px-8 md:px-0 mt-16 lg:mt-20  lg:px-0 w-full flex justify-center items-center">
                            <button className="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 w-full md:w-3/4 lg:w-32 py-4 bg-white flex justify-center items-center text-base font-medium leading-4 text-center text-gray-800">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaII;
