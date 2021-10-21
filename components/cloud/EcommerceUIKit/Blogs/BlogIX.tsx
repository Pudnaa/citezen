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
export default function BlogIX() {
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
      // console.log("BlogIX config", config);
      // console.log("BlogIX datasrc", datasrc);
      // console.log("BlogIX otherattr", otherattr);
      // console.log("BlogIX positionConfig", positionConfig);
    return (
        <div>
            <div className="2xl:mx-auto 2xl:container  py-12 xl:px-20 md:px-6 px-4 flex justify-center items-center w-full flex-col">
                <div className="sm:w-96 md:w-8/12 xl:w-full space-y-10">
                    <div className="text-center flex flex-col justify-center items-center space-y-4">
                        <h1 className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Latest Fashion Blogs</h1>
                        <p className="text-base leading-6 md:leading-4 text-center text-gray-600">Dive deep into the world of fashion with our lastest blogs updates.</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center space-y-6 xl:space-y-8">
                        <div className="w-full relative">
                            <img className="w-full object-cover xl:object-contain hidden xl:block" src="https://i.ibb.co/rG6qtF3/olena-sergienko-n-Ph-Vq-Ch-P1-JI-unsplash-1.png" alt="clothes" />
                            <img className="w-full object-cover hidden md:block xl:hidden" src="https://i.ibb.co/xGnDtD7/Group-1870-1.png" alt="clothes" />
                            <img className="w-full md:hidden" src="https://i.ibb.co/FHnwhX7/Group-2234.png" alt="clothes" />
                            <div className="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8 xl:left-8 xl:right-1/2 bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                                <p className="text-sm leading-none text-gray-600">23 July 2021</p>
                                <p className="mt-2 text-2xl font-semibold leading-6 text-gray-800">The Wardrobe Tour</p>
                                <p className="mt-4 text-base leading-6 text-gray-600">Read about how your favourite celebrities pick their clothing items to have striking appearances. You might want to click read story if you want to know their fashion secrets.</p>
                                <a href="javascript:void(0)" className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800">
                                    Read Story
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row w-full justify-center items-center  space-y-6 xl:space-y-0 xl:space-x-8">
                            <div className="w-full relative">
                                <img className="w-full object-cover xl:object-contain hidden  xl:block" src="https://i.ibb.co/B2yXD4Y/pexels-tanya-satina-6558010.png" alt="girls" />
                                <img className="w-full object-cover hidden md:block xl:hidden" src="https://i.ibb.co/pndL2sx/pexels-tanya-satina-6558010.png" alt="girls" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/FYFnDJN/Group-2233.png" alt="girls" />
                                <div className="absolute bottom-2 md:bottom-8 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                                    <p className="text-sm leading-none text-gray-600">23 July 2021</p>
                                    <p className="mt-2 text-2xl font-semibold leading-6 text-gray-800">The Wardrobe Tour</p>
                                    <p className="mt-4 text-base leading-6 text-gray-600">Read about how your favourite celebrities pick their clothing items to have striking appearances. You might want to click read story if you want to know their fashion secrets.</p>
                                    <a href="javascript:void(0)" className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800">
                                        Read Story
                                    </a>
                                </div>
                            </div>
                            <div className="w-full relative">
                                <img className="w-full object-cover xl:object-contain hidden  xl:block" src="https://i.ibb.co/B4bchqF/flaunter-b-ETVkpm2u-Mw-unsplash-1.png" alt="girl" />
                                <img className="w-full object-cover hidden md:block xl:hidden" src="https://i.ibb.co/NxcL40w/pexels-michelle-leman-6774877.png" alt="girl" />
                                <img className="w-full md:hidden" src="https://i.ibb.co/yWCt1kH/Group-2235.png" alt="girl" />
                                <div className="absolute md:bottom-8 bottom-2 inset-x-2 md:inset-x-8  bg-blur flex flex-col justify-start items-start text-left p-6 md:p-8">
                                    <p className="text-sm leading-none text-gray-600">23 July 2021</p>
                                    <p className="mt-2 text-2xl font-semibold leading-6 text-gray-800">The Wardrobe Tour</p>
                                    <p className="mt-4 text-base leading-6 text-gray-600">Read about how your favourite celebrities pick their clothing items to have striking appearances. You might want to click read story if you want to know their fashion secrets.</p>
                                    <a href="javascript:void(0)" className="mt-6 text-base font-medium leading-4 focus:outline-none focus:underline hover:underline text-gray-800">
                                        Read Story
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
                .bg-blur {
                    background: linear-gradient(91.25deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 99.82%);
                backdrop-filter: blur(25px);
            }
            `}
            </style>
        </div>
    );
}
