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
export default function ModalI() {
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
    // console.log("ModalI config", config);
    // console.log("ModalI datasrc", datasrc);
    // console.log("ModalI otherattr", otherattr);
    // console.log("ModalI positionConfig", positionConfig);

    return (
        <div className="py-12">
            <div className="w-full flex items-center  justify-center" id="button">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm" onClick={() => setshow(true)}>
                    Open Modal
                </button>
            </div>
            <div className={`h-full w-full absolute items-center justify-center top-0 px-4 ${show ? "flex" : "hidden"}`} id="modal">
                <div className="bg-black bg-opacity-95 w-full h-full absolute" onClick={() => setshow(false)} />
                <div className="2xl:w-2/5 sm:w-auto w-full relative z-30 lg:px-28 md:px-16 px-4 py-12">
                    <div className="flex justify-between border-white border-b-2 mb-6">
                        <h1 className="lg:text-4xl text-3xl leading-7 font-semibold lg:leading-9 text-white pb-6">SUNDAY SPECIAL</h1>
                        <div className="flex items-end">
                            <button onClick={() => setshow(false)} className="font-semibold lg:text-xl text-base leading-4 lg:leading-5 underline text-white pb-4">
                                Close
                            </button>
                        </div>
                    </div>
                    <img src="https://i.ibb.co/J2gh7Vx/Mask-Group.png" alt="woman with purse" className="w-full" />
                    <button className="text-xl font-semibold leading-5 underline text-white mt-4 focus:ring-2 focus:ring-offset-1 py-2 px-1 focus:ring-white focus:outline-none hover:text-gray-400">Go to product</button>
                </div>
            </div>
        </div>
    );
}
