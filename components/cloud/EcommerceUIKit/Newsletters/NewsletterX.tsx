import { useContext,useState } from "react";
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
export default function NewsletterX() {
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
    const [show, setShow] = useState(true);
    if (isEmpty(datasrc)) return null;
    // console.log("NewsletterX config", config);
    // console.log("NewsletterX datasrc", datasrc);
    // console.log("NewsletterX otherattr", otherattr);
    // console.log("NewsletterX positionConfig", positionConfig);

    return (
        <div className="relative flex items-center justify-center">
            <img src="https://i.ibb.co/rFfkmpr/bg-modal.png" alt="background image" className="w-full h-full lg:block hidden" />
            <img src="https://i.ibb.co/0VTHthR/mobile.png" alt="background image" className="w-full h-full lg:hidden" />
            <div className="lg:px-20 px-6 absolute bottom-0 w-full pb-20">
                <div id="modal" className={` bg-blur w-full py-6 md:py-10 flex-col items-center justify-center px-4 border border-gray-300`}>
                    <div>
                        <h1 className="lg:text-4xl text-3xl font-semibold text-center leading-9 text-white">Subscirbe to our newsletter</h1>
                    </div>
                    <p className="lg:w-auto md:w-7/12 text-base lg:leading-4 leading-6 text-white mt-3 text-center">It is a long established fact that a reader will be distracted by the readable content.</p>
                    <input placeholder="Your Email" className="mt-7 placeholder-white text-base leading-4 p-4 border border-white bg-transparent focus:outline-none md:w-96 w-full text-white" />
                    <button className="mt-3 text-base font-medium leading-4 p-4 md:w-96 w-full hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none bg-gray-900 text-white">Submit</button>
                </div>
            </div>

            <style>
                {`
                    .bg-blur {
                        background: linear-gradient(102.53deg, rgba(255, 255, 255, 0.4) 16.26%, rgba(255, 255, 255, 0.1) 50.34%);
                        backdrop-filter: blur(10px);
                        -webkit-backdrop-filter: blur(20px);
                    }
                `}
            </style>
        </div>
    );
}
