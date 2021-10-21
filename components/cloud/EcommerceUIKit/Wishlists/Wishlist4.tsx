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
export default function Wishlist4() {
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
      // console.log("Wishlist4 config", config);
      // console.log("Wishlist4 datasrc", datasrc);
      // console.log("Wishlist4 otherattr", otherattr);
      // console.log("Wishlist4 positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container xl:px-20 md:px-12 px-4 py-12">
            <div>
                <p className="text-sm leading-none text-gray-600">Home / Products / Wishlist</p>
                <h1 className="text-4xl font-semibold leading-9 text-gray-800 mt-2">Wishlist</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-8">
                <div>
                    <div>
                        <img src="https://i.ibb.co/zf5vFWf/img-1.png" alt="girl smiling" className="w-full" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm leading-none text-gray-600">MKL-5078</p>
                        <p className="text-xl font-semibold leading-5 text-gray-800">$ 79</p>
                    </div>
                    <h1 className="text-base font-medium leading-4 mt-2 text-gray-800">Comfy sweater</h1>
                    <p className="text-sm leading-none text-gray-600 mt-2">Ivory</p>
                    <div className="flex items-center gap-x-3 mt-6">
                        <button className="text-white hover:bg-black  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3 bg-gray-800  border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Add to cart</p>
                        </button>
                        <button className=" text-gray-800 hover:text-red-500  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3    border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Remove</p>
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/j6xPTc4/img-2.png" alt="girl " className="w-full" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm leading-none text-gray-600">MKL-5078</p>
                        <p className="text-xl font-semibold leading-5 text-gray-800">$ 54</p>
                    </div>
                    <h1 className="text-base font-medium leading-4 mt-2 text-gray-800">Crop top</h1>
                    <p className="text-sm leading-none text-gray-600 mt-2">Dark Green</p>
                    <div className="flex items-center gap-x-3 mt-6">
                        <button className="text-white hover:bg-black  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3 bg-gray-800  border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Add to cart</p>
                        </button>
                        <button className=" text-gray-800 hover:text-red-500  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3    border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Remove</p>
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/Ptcqmdh/img-3.png" alt="Scarf" className="w-full" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm leading-none text-gray-600">MKL-5078</p>
                        <p className="text-xl font-semibold leading-5 text-gray-800">$ 24</p>
                    </div>
                    <h1 className="text-base font-medium leading-4 mt-2 text-gray-800">Headscarf</h1>
                    <p className="text-sm leading-none text-gray-600 mt-2">Peach</p>
                    <div className="flex items-center gap-x-3 mt-6">
                        <button className="text-white hover:bg-black  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3 bg-gray-800  border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Add to cart</p>
                        </button>
                        <button className=" text-gray-800 hover:text-red-500  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3    border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Remove</p>
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://i.ibb.co/bFSYLgv/img-4.png" alt="Girl in white shirt" className="w-full" />
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p className="text-sm leading-none text-gray-600">MKL-5078</p>
                        <p className="text-xl font-semibold leading-5 text-gray-800">$ 37</p>
                    </div>
                    <h1 className="text-base font-medium leading-4 mt-2 text-gray-800">Plain white shirt</h1>
                    <p className="text-sm leading-none text-gray-600 mt-2">White</p>
                    <div className="flex items-center gap-x-3 mt-6">
                        <button className="text-white hover:bg-black  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3 bg-gray-800  border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Add to cart</p>
                        </button>
                        <button className=" text-gray-800 hover:text-red-500  w-1/2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 py-3    border border-gray-800">
                            <p className="text-sm font-medium leading-none ">Remove</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
