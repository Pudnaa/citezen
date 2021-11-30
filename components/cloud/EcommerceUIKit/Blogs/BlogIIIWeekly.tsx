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
import RenderAtom from "@components/common/Atom/RenderAtom";
const BlogIIIWeekly = () => {
  const {
    config,
    readyDatasrc,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(readyDatasrc)) return null;
  // console.log("BlogIIIWeekly config", config);
  // console.log("BlogIIIWeekly readyDatasrc", readyDatasrc);
  // console.log("BlogIIIWeekly otherattr", otherattr);
  // console.log("BlogIIIWeekly positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="flex justify-center items-center bg-white">
      <div className="w-96 md:w-auto 2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4">
        <h1 className="lg:text-2xl text-3xl font-medium leading-9 text-gray-800">
        Resources & Blog
        </h1>
        <div className="lg:flex items-center mt-12 lg:gap-x-8 md:gap-6 gap-4">
          <div className="md:flex items-center justify-between lg:w-1/2 w-full h-full bg-black">
            <div className="md:w-1/2 md:pl-8 lg:pr-6 md:pr-16 p-8">
                <p className="uppercase text-white mb-3 text-xs">Article</p>
            <RenderAtom
                 item={item?.position1}
                  defaultAtom="title"
                  customClassName="text-2xl font-medium leading-7 text-white"
                   />
                    <RenderAtom
                 item={item?.position3}
                  defaultAtom="title"
                  customClassName="text-sm font-medium leading-6 text-white mt-4"
                   />
              <button className="hover:underline transition duration-150 text-base font-medium uppercase leading-none text-white mt-6 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Read More
                <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10.6667L25.3333 16"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </button>
            </div>
          </div>
          <div className="md:flex items-center justify-between lg:w-1/2 w-full h-full bg-black lg:mt-0 mt-6">
            <div className="md:w-1/2 md:pl-8 lg:pr-6 md:pr-16 p-8">
                <p className="uppercase text-white mb-3 text-xs">Guide</p>
            <RenderAtom
                 item={item?.position1}
                  defaultAtom="title"
                  customClassName="text-2xl font-medium leading-7 text-white"
                   />
                    <RenderAtom
                 item={item?.position3}
                  defaultAtom="title"
                  customClassName="text-sm font-medium leading-6 text-white mt-4"
                   />
              <button className="hover:underline transition duration-150 text-base font-medium uppercase leading-none text-white mt-6 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Download now
                <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66663 16H25.3333"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 21.3333L25.3333 16"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 10.6667L25.3333 16"
                  stroke="Cyan"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-end bg-purple-800 ">
            <RenderAtom
                 item={item?.position2}
                  defaultAtom="image"
                  customClassName="lg:w-full md:w-80 w-full"
                   />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIIIWeekly;
