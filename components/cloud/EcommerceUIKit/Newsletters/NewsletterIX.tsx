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

export default function NewsletterIX() {
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
      // console.log("NewsletterIX config", config);
      // console.log("NewsletterIX datasrc", datasrc);
      // console.log("NewsletterIX otherattr", otherattr);
      // console.log("NewsletterIX positionConfig", positionConfig);
    return (
        <div className="mx-auto container py-12 px-6 xl:px-0">
            <div className="flex flex-col xl:flex-row justify-center items-center space-y-6 xl:space-y-0 xl:space-x-36">
                <div className=" sm:w-11/12 lg:w-8/12 xl:w-2/5 2xl:w-2/6 xl:pr-14 flex flex-col justify-start">
                    <div>
                        <p className="text-sm leading-3 font-normal text-gray-600">Subscribe to our newsletter</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Join Our Mailing List</p>
                    </div>
                    <div className="mt-4">
                        <p className="text-base leading-6 text-gray-600">Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday to get latest news and updates.</p>
                    </div>
                    <div className="relative mt-16 flex justify-center items-center">
                        <input className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-100 w-full py-3 sm:py-6 pl-4 text-base leading-none text-gray-600 placeholder-gray-600" type="text" name="name" placeholder="Enter your email address here" />
                        <div className="hidden sm:block absolute right-4 flex justify-center items-center">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 hover:bg-gray-700 text-base leading-none text-white">Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <button className="block sm:hidden mt-4 py-3 w-full hover:bg-gray-700 bg-gray-800 text-base leading-none text-white">Subscribe</button>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row xl:space-x-8 lg:space-x-6 w-full md:w-11/12  lg:w-8/12 xl:w-2/5 2xl:w-auto  sm:space-x-6 space-y-4 sm:space-y-0 xl:space-y-20 sm:px-6 md:px-0">
                    <div className="xl:mb-20 w-full">
                        <img src="https://i.ibb.co/hKkhFQ0/pexels-konstantin-mishchenko-2010812-1.png" className="w-full" alt="girl" />
                    </div>
                    <div className="xl:mt-20 w-full">
                        <img src="https://i.ibb.co/J3HjCdK/pexels-waldir-vora-5944321-1.png" className="w-full" alt="boy" />
                    </div>
                </div>
            </div>
            <div />
        </div>
    );
}
