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

const ProductDetail5 = () => {
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
      // console.log("ProductDetail5 config", config);
      // console.log("ProductDetail5 datasrc", datasrc);
      // console.log("ProductDetail5 otherattr", otherattr);
      // console.log("ProductDetail5 positionConfig", positionConfig);
    return (
        <>
            <div className="flex justify-center items-center w-full">
                <div className="md:w-10/12 lg:w-8/12 xl:w-full flex justify-start flex-col items-start py-16 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto">
                    <div className="flex jusitfy-start items-start flex-col space-y-3">
                        <p className="text-4xl font-semibold leading-9 text-gray-800">Product details</p>
                        <p className="text-base leading-6 md:leading-4 text-gray-600">
                            Home {">"} Electronics {">"} Headphones {">"} Logitech K251
                        </p>
                    </div>
                    <div className="mt-5 flex jusitfy-start  items-start xl:items-center flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-8">
                        <div className="w-full mt-5 flex jusitfy-start items-stretch flex-col-reverse xl:flex-row gap-y-4 xl:gap-y-0 xl:space-x-8">
                            <div className="flex justify-start items-start flex-row ">
                                <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 md:grid-cols-3 xl:grid-cols-1 justify-items-start gap-x-2 xl:gap-x-0 xl:gap-y-4">
                                    <img className="w-full" src="https://i.ibb.co/1JRMyk1/Group-548.png" alt="headphones-1" />

                                    <img className="w-full" src="https://i.ibb.co/bNkN5sC/Group-547.png" alt="headphones-2" />

                                    <img className="w-full" src="https://i.ibb.co/fH2nrrj/Group-546.png" alt="headphones-3" />
                                </div>
                            </div>
                            <div>
                                <img className="hidden xl:block w-full" src="https://i.ibb.co/sHdhJMj/Group-537.png" alt="headphones-4" />
                                <img className="xl:hidden w-full" src="https://i.ibb.co/gTBV04D/Group-537.png" alt="headphones-4" />
                            </div>
                        </div>
                        <div className="w-full xl:w-7/12 flex justify-start items-start flex-col">
                            <p className="text-xl lg:text-2xl font-semibold leading-5 xl:leading-6 text-gray-800 ">Logitech K251</p>
                            <p className="text-lg md:text-xl font-medium leading-5 text-gray-600 mt-3">$465.00</p>
                            <p className="text-base leading-normal text-gray-600 mt-5 ">Sony K251 provides 30+ hours of wireless playtime for a truely librating listening experience. The one-ear haedphone offer cripse, full spectrum sound and a control knob for simplified navigation.</p>
                            <p className="text-base font-medium leading-4 text-gray-600 mt-6">Colors</p>
                            <div className="flex justify-start items-start space-x-3 mt-4 ">
                                <button aria-label="green" className="focus:ring-1 focus:ring-offset-2 focus;ring-gray-800 p-3  bg-green-600"></button>
                                <button aria-label="gray" className="focus:ring-1 focus:ring-offset-2 focus;ring-gray-800 p-3  bg-gray-900"></button>
                                <button aria-label="blue" className="focus:ring-1 focus:ring-offset-2 focus;ring-gray-800 p-3  bg-blue-800"></button>
                                <button aria-label="red" className="focus:ring-1 focus:ring-offset-2 focus;ring-gray-800 p-3  bg-red-800"></button>
                            </div>
                            <div className="mt-10 w-full xl:w-auto flex jusitfy-start items-start  space-x-4 ">
                                <button className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-black text-base font-medium leading-4 md:px-8 bg-gray-800 text-center text-white border border-gray-800 ">Add to cart</button>
                                <button className="py-5 w-full xl:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-300 text-base font-medium leading-4 bg-white border border-gray-800  md:px-8 text-center text-gray-800">Add to wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail5;
