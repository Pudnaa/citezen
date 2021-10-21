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

export default function NewsletterVII() {
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
      // console.log("NewsletterVII config", config);
      // console.log("NewsletterVII datasrc", datasrc);
      // console.log("NewsletterVII otherattr", otherattr);
      // console.log("NewsletterVII positionConfig", positionConfig);
    return (
        <div className="bg-gray-50">
            <div className="relative mx-auto container">
                <div className="flex flex-col justify-center items-center lg:flex-row py-4 px-9 md:py-12">
                    <div className="relative w-full">
                        <img className="hidden md:block w-full h-full" src="https://i.ibb.co/bHq1bsZ/nathan-oakley-o3q-NM4-D994-unsplash-1.png" alt="dinning room" role="img" />
                        <img className="md:hidden w-full h-full" src="https://i.ibb.co/FmS1dqC/nathan-oakley-o3q-NM4-D994-unsplash-1-1.png" alt="dinning room" role="img" />
                    </div>
                    <div className="-mt-24 lg:-mt-0 lg:-ml-16 z-10 flex flex-col justify-center w-full lg:w-auto px-4 md:px-6 lg:px-0">
                        <div className="bg-white shadow px-6 py-7 md:px-9 md:py-10 lg:px-10 lg:py-14">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Join us!</h1>
                            <p className="mt-4 md:w-11/12 lg:w-80 text-base leading-normal text-gray-600">Subscribe to our newsletter, receive the latest updates and exclusive promotions just into your inbox</p>
                            <input type="email" placeholder="Your email address" className="mt-8 w-full bg-transparent border-b border-gray-400 text-base pb-4 text-gray-700 focus:outline-none" />
                            <button className="mt-4 bg-gray-900 w-full text-base font-semibold text-white py-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-800">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
