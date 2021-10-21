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

export default function NewsletterI() {
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
      // console.log("NewsletterI config", config);
      // console.log("NewsletterI datasrc", datasrc);
      // console.log("NewsletterI otherattr", otherattr);
      // console.log("NewsletterI positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container py-12 pb-20 xl:px-20 sm:px-6 px-4">
            <div className="md:flex items-center justify-center">
                <div className="relative flex items-center justify-start md:w-1/2">
                    <img src="https://i.ibb.co/yRyb3Cs/img-1.png" alt="Sofa for sale" className="xl:w-auto md:w-9/12 w-10/12" />
                    <img src="https://i.ibb.co/0XxTw7N/img-2.png" alt="flower pot" className="absolute right-0 xl:w-auto lg:w-64 md:w-48 sm:w-auto w-5/12 -ml-24" />
                </div>
                <div className="md:w-2/5 md:ml-8 md:mt-0 mt-8">
                    <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800 ">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-gray-600 mt-4">Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in a week on every friday to get latest news and updates.</p>
                    <div className="flex items-center justify-between border border-gray-800 lg:w-96 sm:w-80 w-full sm:mt-12 mt-10">
                        <input className="text-base font-medium leading-none text-gray-800 px-4 placeholder-gray-800 w-full focus:outline-none" placeholder="Email address" />
                        <button className="text-base font-medium leading-4 text-white bg-gray-800 hover:bg-gray-700 py-4 px-6 focus:ring-2 focus:ring-setoff-2 focus:ring-gray-700">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
