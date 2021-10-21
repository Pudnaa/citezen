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

export default function ShoppingCart2() {
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
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(1);
    
    if (isEmpty(datasrc)) return null;
    // console.log("ShoppingCart2 config", config);
    // console.log("ShoppingCart2 datasrc", datasrc);
    // console.log("ShoppingCart2 otherattr", otherattr);
    // console.log("ShoppingCart2 positionConfig", positionConfig);
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div className="flex items-center space-x-4">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Shopping bag</h1>
                    <p className="text-base text-gray-600 mt-4">(02 Items)</p>
                </div>
                <div className="flex flex-col md:flex-row items-strech mt-10 md:mt-14 lg:mt-16">
                    <div>
                        <img src="https://i.ibb.co/JxRLmgC/pexels-melvin-buezo-2529148-1-1.png" alt="A pair of gray sneakers" role="img" className="hidden md:block" />
                        <img src="https://i.ibb.co/VNZTzjQ/pexels-melvin-buezo-2529148-3.png" alt="A pair of gray sneakers" role="img" className="w-full h-full md:hidden" />
                    </div>
                    <div className="md:flex hidden w-full justify-between">
                        <div className="flex flex-col justify-center md:ml-6 lg:ml-8">
                            <p className="text-sm text-gray-800">#1090</p>
                            <h2 className="mt-1 text-xl font-semibold text-gray-800">Running shoes</h2>
                            <p className="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12">If you are going to use a passage of Lorem Ipsum,you need to be sure there isn_t anything.</p>
                            <div className="mt-8 flex space-x-6 items-center">
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Edit
                                </a>
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Remove
                                </a>
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Move to wishlist
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="flex md:flex-col h-full lg:flex-row lg:space-x-72">
                                <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                                    <button onClick={() => setCounter1(counter1 - 1 < 0 ? 0 : counter1 - 1)} aria-label="decrease quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4L6 8L10 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <p className="quantity1 text-base text-gray-800">{counter1}</p>
                                    <button onClick={() => setCounter1(counter1 + 1)} aria-label="increase quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden md:block">
                                    <p className="mt-24 lg:mt-0 text-xl font-medium text-gray-800 text-right">$90</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:hidden mt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">#1090</p>
                                <h2 className="mt-1 text-xl font-semibold leading-tight text-gray-800">Running shoes</h2>
                            </div>
                            <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                                <button onClick={() => setCounter1(counter1 - 1 < 0 ? 0 : counter1 - 1)} aria-label="decrease quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4L6 8L10 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <p className="quantity1 text-base text-gray-800">{counter1}</p>
                                <button onClick={() => setCounter1(counter1 + 1)} aria-label="increase quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L10 8L6 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 w-11/12text-sm leading-tight text-gray-600">If you are going to use a passage of Lorem Ipsum,you need to be sure there isn_t anything.</p>
                        <div className="mt-8 flex space-x-6 items-center">
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Edit
                            </a>
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Remove
                            </a>
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Move to wishlist
                            </a>
                        </div>
                        <p className="mt-10 text-xl font-medium text-gray-800">$90</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-strech mt-20 md:mt-28 lg:mt-32">
                    <div>
                        <img src="https://i.ibb.co/njdySh4/pexels-max-avans-5058216-1-1.png" alt="A classical watch" role="img" className="hidden md:block" />
                        <img src="https://i.ibb.co/JnGWfr4/pexels-max-avans-5058216-2.png" alt="A classical" role="img" className="w-full h-full md:hidden" />
                    </div>
                    <div className="md:flex hidden w-full justify-between">
                        <div className="flex flex-col justify-center md:ml-6 lg:ml-8">
                            <p className="text-sm text-gray-800">#1090</p>
                            <h2 className="mt-1 text-xl font-semibold text-gray-800">Premium Watch</h2>
                            <p className="mt-4 text-sm leading-tight text-gray-600 md:w-8/12 lg:w-10/12">If you are going to use a passage of Lorem Ipsum,you need to be sure there isn_t anything.</p>
                            <div className="mt-8 flex space-x-6 items-center">
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Edit
                                </a>
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Remove
                                </a>
                                <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                    Move to wishlist
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="flex md:flex-col h-full lg:flex-row lg:space-x-64">
                                <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3 lg:mr-2">
                                    <button onClick={() => setCounter2(counter2 - 1 < 0 ? 0 : counter2 - 1)} aria-label="Decrease quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 4L6 8L10 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <p className="quantity2 text-base text-gray-800">{counter2}</p>
                                    <button onClick={() => setCounter2(counter2 + 1)} aria-label="increase quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 4L10 8L6 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="hidden md:block">
                                    <p className="mt-24 lg:mt-0 text-xl font-medium text-gray-800 text-right">$2700</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:hidden mt-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-800">#1090</p>
                                <h2 className="mt-1 text-xl font-semibold leading-tight text-gray-800">Premium Watch</h2>
                            </div>
                            <div className="p-3 w-20 h-10 border border-gray-300 flex items-center justify-center space-x-3">
                                <button onClick={() => setCounter2(counter2 - 1 < 0 ? 0 : counter2 - 1)} aria-label="Decrease quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 4L6 8L10 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <p className="quantity2 text-base text-gray-800">{counter2}</p>
                                <button onClick={() => setCounter2(counter2 + 1)} aria-label="increase quantity" className="focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100">
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 4L10 8L6 12" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 w-11/12text-sm leading-tight text-gray-600">If you are going to use a passage of Lorem Ipsum,you need to be sure there isn_t anything.</p>
                        <div className="mt-8 flex space-x-6 items-center">
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Edit
                            </a>
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Remove
                            </a>
                            <a href="javascript:void(0)" className="text-base text-gray-600 underline focus:outline-none focus:ring-2 focus:ring-gray-600 hover:text-black">
                                Move to wishlist
                            </a>
                        </div>
                        <p className="mt-10 text-xl font-medium text-gray-800">$2700</p>
                    </div>
                </div>
                <div className="flex justify-center flex-col-reverse md:flex-row md:justify-end mt-16 md:mt-36 lg:mt-40 md:space-x-6 w-full">
                    <a href="javascript:void(0)" className="w-full md:w-3/12 lg:w-auto flex items-center space-x-2 mt-4 md:mt-10 justify-center focus:outline-none focus:ring-2 focus:ring-gray-600">
                        <div className="mt-0.5 md:mt-1">
                            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12L9 16" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5 12L9 8" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="text-base font-medium underline text-gray-600 hover:text-gray-900">Continue shopping</p>
                    </a>
                    <div className="w-full md:w-9/12 lg:w-auto">
                        <div className="flex items-center justify-between">
                            <h3 className="text-2xl text-gray-800">Total</h3>
                            <p className="text-2xl font-semibold text-gray-800">$2790</p>
                        </div>
                        <button className="w-full mt-4 bg-gray-800 hover:bg-gray-900 text-base font-medium leading-none text-white py-5 lg:px-28 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">Check Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
