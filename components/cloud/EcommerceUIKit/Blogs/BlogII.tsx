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

const BlogII = () => {
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
      // console.log("BlogII config", config);
      // console.log("BlogII datasrc", datasrc);
      // console.log("BlogII otherattr", otherattr);
      // console.log("BlogII positionConfig", positionConfig);
    return (
        <div className="2xl:mx-auto 2xl:container lg:py-16 lg:px-40 xl:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-semibold leading-9 text-gray-800">Latest Blog</h1>
                <p className="text-base leading-6 text-center text-gray-600 sm:w-96 md:w-9/12 lg:w-5/12 mt-4">If you_re looking for random paragraphs, you_ve come to the right place. When a random word or a random sentence isn_t quite enough</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-8 md:gap-6 gap-4 lg:mt-12 md:mt-9 mt-6">
                <div className="relative flex items-center justify-center">
                    <img src="https://i.ibb.co/kqt7S1z/img-1.png" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-normal text-center text-white">The history of wood</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="https://i.ibb.co/w04zsMJ/img-2.png" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold leading-7 lg:leading-7 text-center text-white">Minimimalism and modern day architecture</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    <img src="https://i.ibb.co/3ctkDMB/img-3.png" alt="chair" />
                    <div className="absolute top-0 flex flex-col w-80 md:w-80 lg:w-80 xl:w-96 h-full items-center justify-between py-10">
                        <div className="flex items-center justify-center flex-col h-full">
                            <h2 className="xl:px-10 md:px-2 px-7 text-2xl font-semibold sm:w-auto leading-normal text-center text-white">Layout setting and mood</h2>
                            <p className="xl:px-10 md:px-2 px-7 text-base leading-normal text-center text-white mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>
                        <div className="px-4 md:w-auto w-full">
                            <button className="w-full hover:bg-gray-300 transition duration-150 text-base font-medium leading-none text-center text-gray-800 py-4 px-12 bg-white focus:outline-none">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogII;
