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
const BlogV = () => {
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
      // console.log("BlogV config", config);
      // console.log("BlogV datasrc", datasrc);
      // console.log("BlogV otherattr", otherattr);
      // console.log("BlogV positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container md:py-12 lg:px-20 md:px-6 px-4 py-9 flex justify-center items-center flex-col space-y-2 sm:space-y-10 lg:space-y-16">
            <div className="flex justify-center items-center flex-col">
                <h1 className="text-3xl text-center lg:text-4xl font-semibold leading-10 sm:leading-7 lg:leading-9 text-gray-800">Read About Hottest Fashion Trends</h1>
            </div>

            <div className="grid grid-cols-1 sm:px-20 md:px-0 md:grid-cols-2 xl:grid-cols-3 justify-items-center lg:gap-x-8 gap-x-6 gap-y-10 xl:gap-y-0">
                <div className="flex justify-center items-start flex-col space-y-6">
                    <div className="w-full">
                        <img className="w-full" src="https://i.ibb.co/rQszH28/pexels-marcelo-chagas-1784280-1.png" alt="girl" />
                    </div>
                    <div>
                        <div className="flex justify-start items-start text-left">
                            <h1 className="text-xl md:text-2xl font-semibold leading-6 text-gray-800">Summer and Shades</h1>
                        </div>
                        <div className="flex justify-start items-start text-left flex-col space-y-3 mt-4">
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">By:</span> Jacob Jackson
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">Date:</span> 23 July 2021
                            </p>
                        </div>
                        <div className="flex justify-start items-start text-left mt-6">
                            <p className="text-base leading-6 text-gray-600">Fashion can also simply mean our lifestyle: the clothing and accessories that we wear and the cosmetics that we apply.</p>
                        </div>
                        <div className="mt-8">
                            <a href="/" className="text-base font-semibold leading-none hover:underline text-gray-800">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-start flex-col space-y-6">
                    <div className="w-full">
                        <img className="w-full" src="https://i.ibb.co/4SdxK5Y/damir-spanic-P9-HMF1-F-8gg-unsplash-1.png" alt="perfume" />
                    </div>
                    <div>
                        <div className="flex justify-start items-start text-left">
                            <h1 className="text-xl md:text-2xl font-semibold leading-6 text-gray-800">Top 10 Best Perfumes of 2021</h1>
                        </div>
                        <div className="flex justify-start items-start text-left flex-col space-y-3 mt-4">
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">By:</span> Jacob Jackson
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">Date:</span> 23 July 2021
                            </p>
                        </div>
                        <div className="flex justify-start items-start text-left mt-6">
                            <p className="text-base leading-6 text-gray-600">Fashion can also simply mean our lifestyle: the clothing and accessories that we wear and the cosmetics that we apply.</p>
                        </div>
                        <div className="mt-8">
                            <a href="/" className="text-base font-semibold leading-none hover:underline text-gray-800">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-start flex-col space-y-6">
                    <div className="w-full">
                        <img className="w-full" src="https://i.ibb.co/1YVmMmN/pexels-olya-kobruseva-4541585-1.png" alt="girl-and-boy" />
                    </div>
                    <div>
                        <div className="flex justify-start items-start text-left">
                            <h1 className="text-xl md:text-2xl font-semibold leading-6 text-gray-800">Matching Jacket Story</h1>
                        </div>
                        <div className="flex justify-start items-start text-left flex-col space-y-3 mt-4">
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">By:</span> Jacob Jackson
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                                <span className="text-gray-600">Date:</span> 23 July 2021
                            </p>
                        </div>
                        <div className="flex justify-start items-start text-left mt-6">
                            <p className="text-base leading-6 text-gray-600">Fashion can also simply mean our lifestyle: the clothing and accessories that we wear and the cosmetics that we apply.</p>
                        </div>
                        <div className="mt-8">
                            <a href="/" className="text-base font-semibold leading-none hover:underline text-gray-800">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogV;
