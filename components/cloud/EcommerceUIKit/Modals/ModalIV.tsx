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
export default function ModalIV() {
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
    const [show, setshow] = useState(true);
    if (isEmpty(datasrc)) return null;
    // console.log("ModalIV config", config);
    // console.log("ModalIV datasrc", datasrc);
    // console.log("ModalIV otherattr", otherattr);
    // console.log("ModalIV positionConfig", positionConfig);

    return (
        <div className="bg-gray-50">
            <div id="button" className={`${show ? "hidden" : "flex"} container mx-auto justify-center items-center px-4 md:px-10 py-20`}>
                <button onClick={() => setshow(true)} className="bg-gray-900 text-white py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 rounded">
                    Open Modal
                </button>
            </div>
            <div id="modal" className={`lg:container lg:mx-auto flex justify-center items-center md:py-10 md:px-6 py-8 px-4 ${show ? "" : "hidden"}`}>
                <div className="bg-gray-900 bg-opacity-90 flex justify-center items-center md:py-10 lg:px-36 md:px-24 py-8 px-4">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-base text-white text-center leading-4">Amoire</p>
                        <h1 className="mt-2 md:mt-4 lg:mt-3 text-3xl lg:text-4xl lg:leading-9 leading-7 font-semibold text-center text-white">Subscribe to our newsletter</h1>
                        <p className="mt-4 text-base leading-6 text-center text-white lg:w-9/12 w-10/12">It is a long established fact that a reader will be distracted by the readable content.</p>
                        <input type="text" placeholder="Your Name" className="mt-7 md:mt-9 p-4 bg-white w-full lg:w-9/12 text-base placeholder-gray-600 text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white" />
                        <input type="email" placeholder="Your Email" className="mt-4 p-4 bg-white w-full lg:w-9/12 text-base placeholder-gray-600 text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white" />
                        <button className="mt-6 text-base font-medium leading-4 text-white bg-gray-900 w-full lg:w-9/12 py-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 hover:bg-gray-700">Submit</button>
                        <button onClick={() => setshow(false)} className="mt-4 md:mt-6 text-base leading-4 font-medium underline text-white focus:outline-none focus:ring-2 focus:ring-white hover:text-gray-300 px-1 rounded">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
