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

export default function NewsletterVI() {
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
      // console.log("NewsletterVI config", config);
      // console.log("NewsletterVI datasrc", datasrc);
      // console.log("NewsletterVI otherattr", otherattr);
      // console.log("NewsletterVI positionConfig", positionConfig);
    return (
        <div className="mx-auto container py-12 px-4 md:px-6 xl:px-0">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <p className="text-3xl lg:text-4xl font-semibold leading-8 lg:leading-9 text-gray-800">Lufu’s Newsletter</p>
                </div>
                <div className="mt-4">
                    <p className="text-base text-center leading-6 md:leading-4 text-gray-600">Subscrible to receive fashion and lifestyle updates from Lufu</p>
                </div>
                <div className="w-full sm:w-8/12 lg:w-1/4 justify-center items-center flex flex-col lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0 mt-10">
                    <div className="w-full">
                        <input className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 h-12 border border-gray-600 w-full leading-4 lg:w-60 xl:w-80 px-4 text-gray-600 placeholder-gray-600 pb-1" placeholder="Email address" type="email" />
                    </div>
                    <div className="w-full">
                        <button className="hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-full lg:w-20 text-base font-medium leading-4 text-white h-12 bg-gray-600">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
