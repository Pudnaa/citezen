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
const BlogIV = () => {
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
  // console.log("BlogIV config", config);
  // console.log("BlogIV datasrc", datasrc);
  // console.log("BlogIV otherattr", otherattr);
  // console.log("BlogIV positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div className="2xl:mx-auto 2xl:container 2xl:px-20 xl:px-12 sm:px-6 px-4 py-16">
      <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">
        Join Our Blog Community
      </h1>
      <p className="md:w-1/2 text-base leading-normal mt-4 sm:pr-10 text-gray-600">
        If you_re looking for random paragraphs, you_ve come to the right place.
      </p>
      <div className="md:flex items-start justify-between mt-12">
        <div className="md:w-1/2 lg:w-full">
          <div>
            <div className="relative">
              <AtomImage
                item={renderPositionType(item[0], "position2", positionConfig)}
                customClassName="w-auto"
                alt={renderPositionType(item[0], "position1", positionConfig)}
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <AtomText
              item={renderPositionType(item[0], "position40", positionConfig)}
              customClassName="text-base font-light leading-4 text-gray-800 mt-6"
            />
            <AtomTitle
              item={renderPositionType(item[0], "position1", positionConfig)}
              customClassName="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
            />
            <AtomText
              item={renderPositionType(item[0], "position3", positionConfig)}
              customClassName="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
            />
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <AtomImage
                item={renderPositionType(item[1], "position2", positionConfig)}
                customClassName="w-auto"
                alt={renderPositionType(item[1], "position1", positionConfig)}
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>

            <AtomText
              item={renderPositionType(item[1], "position40", positionConfig)}
              customClassName="text-base font-light leading-4 text-gray-800 mt-6"
            />
            <AtomTitle
              item={renderPositionType(item[1], "position1", positionConfig)}
              customClassName="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
            />
            <AtomText
              item={renderPositionType(item[1], "position3", positionConfig)}
              customClassName="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
            />
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:ml-6 md:mt-0 mt-9 lg:w-full">
          <div>
            <div className="relative">
              <AtomImage
                item={renderPositionType(item[2], "position2", positionConfig)}
                customClassName="w-auto"
                alt={renderPositionType(item[2], "position1", positionConfig)}
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <AtomText
              item={renderPositionType(item[2], "position40", positionConfig)}
              customClassName="text-base font-light leading-4 text-gray-800 mt-6"
            />
            <AtomTitle
              item={renderPositionType(item[2], "position1", positionConfig)}
              customClassName="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
            />
            <AtomText
              item={renderPositionType(item[2], "position3", positionConfig)}
              customClassName="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
            />
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="mt-9">
            <div className="relative">
              <AtomImage
                item={renderPositionType(item[3], "position2", positionConfig)}
                customClassName="w-auto"
                alt={renderPositionType(item[0], "position1", positionConfig)}
              />
              <div className="bg-white absolute top-0 left-0">
                <p className="text-base leading-4 py-3 px-5 text-gray-800">
                  News
                </p>
              </div>
            </div>
            <AtomText
              item={renderPositionType(item[3], "position40", positionConfig)}
              customClassName="text-base font-light leading-4 text-gray-800 mt-6"
            />
            <AtomTitle
              item={renderPositionType(item[3], "position1", positionConfig)}
              customClassName="text-2xl font-semibold leading-7 sm:pr-20 mt-2 text-gray-800"
            />
            <AtomText
              item={renderPositionType(item[3], "position3", positionConfig)}
              customClassName="text-base leading-normal mt-4 sm:pr-20 md:pr-10 text-gray-600"
            />
            <button className="flex items-center justify-between w-72 mt-6 bg-gray-800 p-4 hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
              <p className="text-base font-medium leading-4 text-white">
                Read more
              </p>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33203 8H12.6654"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 10.6667L12.6667 8"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 5.33344L12.6667 8.0001"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIV;
