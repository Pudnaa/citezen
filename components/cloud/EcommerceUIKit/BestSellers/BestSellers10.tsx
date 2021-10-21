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

const BestSellers10 = () => {
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
      // console.log("BestSellers10 config", config);
      // console.log("BestSellers10 datasrc", datasrc);
      // console.log("BestSellers10 otherattr", otherattr);
      // console.log("BestSellers10 positionConfig", positionConfig);
    return (
        <div className="flex justify-center items-center pb-16">
            <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                <div className="flex flex-col jusitfy-center items-center space-y-12 md:px-40 lg:px-0">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">Shop Our Best Sellers</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 md:space-y-6 lg:space-y-0 lg:space-x-8">
                        <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
                            <div className="group relative">
                                <img className="hidden md:block" src="https://i.ibb.co/mHNTtm4/jan-de-keijzer-M0g1s-V4-SEdo-unsplash-1.png" alt="jan-de-keijzer-M0g1s-V4-SEdo-unsplash-1" />
                                <img className="md:hidden w-full" src="https://i.ibb.co/F6w1pfP/jan-de-keijzer-M0g1s-V4-SEdo-unsplash-1.png" alt="jan-de-keijzer-M0g1s-V4-SEdo-unsplash-1" />
                                <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                <div tabIndex={0} className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Luxe Bag Limited Edition</p>
                                    <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                                <div className="group relative">
                                    <img className="hidden md:block" src="https://i.ibb.co/r2jYkzP/caique-silva-1-Mz-Yz7-Tklw-U-unsplash-1.png" alt="bag" />
                                    <img className="md:hidden w-full" src="https://i.ibb.co/ZHrfTFr/caique-silva-1-Mz-Yz7-Tklw-U-unsplash-1.png" alt="bag" />
                                    <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                    <div tabIndex={0}  className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                        <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Abstract Print</p>
                                        <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                            Explore Now
                                        </a>
                                    </div>
                                </div>
                                <div className="group relative">
                                    <img className="hidden md:block" src="https://i.ibb.co/n84cD72/pexels-bruno-salvadori-3046336-1.png" alt="girl" />
                                    <img className="md:hidden w-full" src="https://i.ibb.co/G31931F/pexels-bruno-salvadori-3046336-1.png" alt="girl" />
                                    <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                    <div tabIndex={0}  className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                        <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Draped Tunic Dress</p>
                                        <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                            Explore Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative">
                                <img src="https://i.ibb.co/M1Qy7J0/pexels-neeraj-raj-2767638-1.png" alt="girl" />
                                <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                <div tabIndex={0}  className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Sequin Blouse</p>
                                    <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto flex flex-col md:flex-row lg:flex-col space-y-4 md:space-y-0 md:space-x-6 lg:space-x-0 lg:space-y-8">
                            <div className="group relative">
                                <img className="md:block hidden object-cover object-center h-full" src="https://i.ibb.co/B3GKV3Z/monica-silva-Vl-MMBx-SZu-SI-unsplash-1.png" alt="girl" />
                                <img className="md:hidden w-full" src="https://i.ibb.co/4F4K9XP/monica-silva-Vl-MMBx-SZu-SI-unsplash-1.png" alt="girl" />
                                <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                <div tabIndex={0}  className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Crochet Dress</p>
                                    <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                        Explore Now
                                    </a>
                                </div>
                            </div>

                            <div className="group relative">
                                <img className="hidden md:block object-cover object-center h-full" src="https://i.ibb.co/7WYcRFx/pexels-cottonbro-4887008-1.png" alt="boy" />
                                <img className="md:hidden w-full" src="https://i.ibb.co/cySR59B/pexels-cottonbro-4887008-1.png" alt="boy" />
                                <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
                                <div tabIndex={0} className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4">
                                    <p className="text-xl lg:text-2xl font-semibold leading-5 text-white">Casual Shirt</p>
                                    <a href="/" className="focus:outline-none text-base font-medium leading-none underline text-white">
                                        Explore Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers10;
