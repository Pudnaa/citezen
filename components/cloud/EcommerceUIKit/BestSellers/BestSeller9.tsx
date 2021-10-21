import { useContext ,useState} from "react";
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
const BestSeller9 = () => {
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
      
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    if (isEmpty(datasrc)) return null;
      // console.log("BestSeller9 config", config);
      // console.log("BestSeller9 datasrc", datasrc);
      // console.log("BestSeller9 otherattr", otherattr);
      // console.log("BestSeller9 positionConfig", positionConfig);

    return (
        <div className="2xl:mx-auto 2xl:container flex justify-center items-center">
            <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-start flex-col">
                <div className="">
                    <p className="text-4xl font-semibold leading-9 text-gray-800">Recommended</p>
                </div>
                <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 justify-items-between gap-y-4 md:gap-y-8 lg:gap-y-0 gap-x-8">
                    <div className="group">
                        <div onMouseOver={() => setShow(true)} onMouseOut={() => setShow(false)} className="group-hover:shadow relative cursor-pointer">
                            <img className="hidden lg:block" src="https://i.ibb.co/vv3gWn2/Rectangle-249.png" alt="laptop-1" />
                            <img className="lg:hidden" src="https://i.ibb.co/HFqtmNJ/Rectangle-249.png" alt="laptop-1" />
                            <div className="flex justify-start flex-col absolute bottom-0 w-full">
                                <div className="ml-6">
                                    <p className="text-base font-bold leading-4 text-white">Macbook Pro 11</p>
                                </div>
                                <div className="mt-3 ml-6 mb-6">
                                    <p className="text-base font-medium leading-4 text-white">$1,725.00</p>
                                </div>
                                <button id="btn1" className={"bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 " + (show ? "block" : "hidden")}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div onMouseOver={() => setShow2(true)} onMouseOut={() => setShow2(false)} className="group-hover:shadow relative cursor-pointer">
                            <img className="hidden lg:block" src="https://i.ibb.co/7gMsH1s/Rectangle-249-623.png" alt="laptop-2" />
                            <img className="lg:hidden" src="https://i.ibb.co/DzTs7tG/Rectangle-249.png" alt="laptop-2" />
                            <div className="flex justify-start flex-col absolute bottom-0 w-full">
                                <div className="ml-6">
                                    <p className="text-base font-bold leading-4 text-white">Macbook Pro 11</p>
                                </div>
                                <div className="mt-3 ml-6 mb-6">
                                    <p className="text-base font-medium leading-4 text-white">$1,725.00</p>
                                </div>
                                <button id="btn2" className={"bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 " + (show2 ? "block" : "hidden")}>
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div onMouseOver={() => setShow3(true)} onMouseOut={() => setShow3(false)} className="group-hover:shadow relative cursor-pointer">
                            <img className="hidden lg:block" src="https://i.ibb.co/M8r9Xcp/Rectangle-249-2.png" alt="laptop-3" />
                            <img className="lg:hidden" src="https://i.ibb.co/z773sXx/Rectangle-249-1.png" alt="laptop-3" />
                            <div className="flex justify-start flex-col absolute bottom-0 w-full">
                                <div className="ml-6">
                                    <p className="text-base font-bold leading-4 text-white">Macbook Pro 11</p>
                                </div>
                                <div className="mt-3 ml-6 mb-6">
                                    <p className="text-base font-medium leading-4 text-white">$1,725.00</p>
                                </div>
                                <button className={"bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 " + (show3 ? "block" : "hidden")}>Add to cart</button>
                            </div>
                        </div>
                    </div>

                    <div className="group">
                        <div onMouseOver={() => setShow4(true)} onMouseOut={() => setShow4(false)} className="group-hover:shadow relative cursor-pointer">
                            <img className="hidden lg:block" src="https://i.ibb.co/F0zYQdr/Rectangle-249-3.png" alt="laptop-4" />
                            <img className="lg:hidden" src="https://i.ibb.co/xhPLv7K/Rectangle-249-2.png" alt="laptop-4" />
                            <div className="flex justify-start flex-col absolute bottom-0 w-full">
                                <div className="ml-6">
                                    <p className="text-base font-bold leading-4 text-white">Macbook Pro 11</p>
                                </div>
                                <div className="mt-3 ml-6 mb-6">
                                    <p className="text-base font-medium leading-4 text-white">$1,725.00</p>
                                </div>
                                <button className={"bg-white w-full text-base tracking-tight font-medium leading-none text-gray-800 py-4 " + (show4 ? "block" : "hidden")}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSeller9;
