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

export default function Wishlist5() {
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
      // console.log("Wishlist5 config", config);
      // console.log("Wishlist5 datasrc", datasrc);
      // console.log("Wishlist5 otherattr", otherattr);
      // console.log("Wishlist5 positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container md:py-12 py-9 lg:px-20 px-4 md:px-6 flex justify-center items-center flex-col space-y-8">
            <div className="w-full sm:px-20 md:px-0 text-left">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Wishlist</h1>
            </div>
            <div className="grid grid-cols-1 sm:px-20 md:px-0 md:grid-cols-2 xl:grid-cols-3 w-full justify-items-center gap-x-6 lg:gap-x-8 gap-y-12 xl:gap-y-0">
                <div className="flex w-full flex-col justify-center items-start space-y-4">
                    <div className="group relative w-full flex justify-center items-center">
                        <img className="w-full hidden lg:block" src="https://i.ibb.co/fHFQ6Hs/david-svihovec-BGGHi-Sp2-Quw-unsplash-1.png" alt="watch-1" />
                        <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/L8hCnQ9/david-svihovec-BGGHi-Sp2-Quw-unsplash-1.png" alt="watch-1" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/2WrDysC/david-svihovec-BGGHi-Sp2-Quw-unsplash-1-1.png" alt="watch-1" />
                        <button className="z-30 p-2 rounded-full bg-white absolute top-4 right-4 hover:text-red-600 text-gray-600">
                            <svg className="fill-stroke " width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8.75H25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 8.75L7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75L23.75 8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.25 8.75V5C11.25 4.66848 11.3817 4.35054 11.6161 4.11612C11.8505 3.8817 12.1685 3.75 12.5 3.75H17.5C17.8315 3.75 18.1495 3.8817 18.3839 4.11612C18.6183 4.35054 18.75 4.66848 18.75 5V8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="opacity-0 hover:text-black z-10 group-hover:opacity-100 transition duration-200 absolute bg-white flex justify-center items-center   text-center py-3 text-base font-medium leading-4 bottom-8 w-5/6  text-gray-800">Add to cart</button>
                        <div className=" w-full h-full opacity-0 group-hover:opacity-25 transition duration-200 bg-gradient-to-t z-0 from-gray-800 to-opacity-0 absolute bottom-0" />
                    </div>
                    <div className=" text-left">
                        <p className="text-sm leading-3 text-gray-600">Mk290</p>
                        <h2 className="mt-1 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Luxe Smart Watch</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-xl font-medium leading-5 text-gray-600">$9700</p>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center items-start space-y-4">
                    <div className="group relative w-full flex justify-center items-center">
                        <img className="w-full hidden lg:block" src="https://i.ibb.co/fGgBjCm/pexels-monstera-6311497-1.png" alt="girl" />
                        <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/fH9WN2r/pexels-monstera-6311497-1.png" alt="girl" />
                        <img className="md:hidden w-full" src="https://i.ibb.co/0Bd0vXQ/pexels-monstera-6311497-1-1.png" alt="girl" />
                        <button className="z-30 p-2 rounded-full bg-white absolute top-4 right-4 hover:text-red-600 text-gray-600">
                            <svg className="fill-stroke " width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8.75H25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 8.75L7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75L23.75 8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.25 8.75V5C11.25 4.66848 11.3817 4.35054 11.6161 4.11612C11.8505 3.8817 12.1685 3.75 12.5 3.75H17.5C17.8315 3.75 18.1495 3.8817 18.3839 4.11612C18.6183 4.35054 18.75 4.66848 18.75 5V8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="opacity-0 z-10 hover:text-black group-hover:opacity-100 transition duration-200 absolute bg-white flex justify-center items-center   text-center py-3 text-base font-medium leading-4 bottom-8 w-5/6  text-gray-800">Add to cart</button>
                        <div className=" w-full h-full opacity-0 group-hover:opacity-25 transition duration-200 bg-gradient-to-t z-0 from-gray-800 to-opacity-0 absolute bottom-0" />
                    </div>
                    <div className=" text-left">
                        <p className="text-sm leading-3 text-gray-600">Mk290</p>
                        <h2 className="mt-1 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Streachable Bodysuit</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-xl font-medium leading-5 text-gray-600">$1520</p>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-center items-start space-y-4">
                    <div className="group relative w-full flex justify-center items-center">
                        <img className="w-full hidden lg:block" src="https://i.ibb.co/MhmKjx1/pexels-evg-culture-1040384-1.png" alt="watch-1" />
                        <img className="w-full hidden md:block lg:hidden" src="https://i.ibb.co/34w7txS/Group-1854.png" alt="watch-1" />
                        <img className="w-full md:hidden" src="https://i.ibb.co/NjJgmX9/pexels-evg-culture-1040384-1.png" alt="watch-1" />
                        <button className="z-30 p-2 rounded-full bg-white absolute top-4 right-4 hover:text-red-600 text-gray-600">
                            <svg className="fill-stroke " width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 8.75H25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M17.5 13.75V21.25" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.25 8.75L7.5 23.75C7.5 24.413 7.76339 25.0489 8.23223 25.5178C8.70107 25.9866 9.33696 26.25 10 26.25H20C20.663 26.25 21.2989 25.9866 21.7678 25.5178C22.2366 25.0489 22.5 24.413 22.5 23.75L23.75 8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.25 8.75V5C11.25 4.66848 11.3817 4.35054 11.6161 4.11612C11.8505 3.8817 12.1685 3.75 12.5 3.75H17.5C17.8315 3.75 18.1495 3.8817 18.3839 4.11612C18.6183 4.35054 18.75 4.66848 18.75 5V8.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="opacity-0 z-10 hover:text-black group-hover:opacity-100 transition duration-200 absolute bg-white flex justify-center items-center   text-center py-3 text-base font-medium leading-4 bottom-8 w-5/6  text-gray-800">Add to cart</button>
                        <div className=" w-full h-full opacity-0 group-hover:opacity-25 transition duration-200 bg-gradient-to-t z-0 from-gray-800 to-opacity-0 absolute bottom-0" />
                    </div>
                    <div className=" text-left">
                        <p className="text-sm leading-3 text-gray-600">Mk290</p>
                        <h2 className="mt-1 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-gray-800">Crystal Heel Leather Boots</h2>
                    </div>
                    <div className="text-left">
                        <p className="text-xl font-medium leading-5 text-gray-600">$9700</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
