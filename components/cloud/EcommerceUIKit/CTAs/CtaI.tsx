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
const CtaI = () => {
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
    // console.log("Cta1 config", config);
  // console.log("Cta1 datasrc", datasrc);
  // console.log("Cta1 otherattr", otherattr);
  // console.log("Cta1 positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-44 md:px-6 py-9 px-4 flex justify-center">
            <div className="relative flex flex-row justify-between items-center bg-gray-800 sm:rounded-r-full">
                <div className="-mt-12 sm:-mt-0 w-8/12 sm:w-6/12 ml-6 md:ml-12 flex-col flex justify-start items-start">
                    <div>
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 lg:leading-10 text-white">We’re interested in working with creatives</p>
                    </div>
                    <div className="mt-12 md:mt-20 lg:mt-16">
                        <button className="focus:ring-2 focus:ring-gray-500 hover:text-black hover:bg-gray-200 focus:outline-none rounded-sm transition duration-150 absolute bottom-6 sm:static w-72 text-base lg:text-xl font-medium leading-4 lg:leading-5 text-center text-gray-900 sm:w-44 h-12 bg-white flex justify-center items-center pb-1">Join Now</button>
                    </div>
                </div>

                <div>
                    <img className="hidden lg:block" src="https://i.ibb.co/mN8VbTN/Photo.png" alt="girl" />
                    <img className="hidden sm:block lg:hidden" src="https://i.ibb.co/N67j4xn/Photo-1.png" alt="girl" />
                    <img className="sm:hidden" src="https://i.ibb.co/PwV4J0Z/Photo-3.png" alt="girl" />
                </div>
            </div>
        </div>
    );
};

export default CtaI;
