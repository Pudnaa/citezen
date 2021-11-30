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
const BlogIII = () => {
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
  // console.log("BlogIII config", config);
  // console.log("BlogIII datasrc", datasrc);
  // console.log("BlogIII otherattr", otherattr);
  // console.log("BlogIII positionConfig", positionConfig);
  const item = datasrc;
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 md:w-auto 2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4">
        <h1 className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800">
          This Week Blogs
        </h1>
        <p className="text-base leading-normal mt-4 text-gray-600 xl:w-1/2 md:w-8/12">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry_s standard dummy text ever
        </p>
        <div className="lg:flex items-center mt-12 lg:gap-x-8 md:gap-6 gap-4">
          <div className="md:flex items-center justify-between lg:w-1/2 w-full h-full bg-gray-50">
            <div className="md:w-1/2 md:pl-8 lg:pr-6 md:pr-16 p-8">
              <AtomTitle
                item={renderPositionType(item[0], "position1", positionConfig)}
                customClassName="text-2xl font-semibold leading-7 text-gray-800"
              />
              <AtomText
                item={renderPositionType(item[0], "position3", positionConfig)}
                customClassName="text-base leading-6 text-gray-600 mt-4"
              />
              <button className="hover:underline transition duration-150 text-base font-medium leading-none text-gray-800 mt-6 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Read More
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-end">
              <AtomImage
                item={renderPositionType(item[0], "position2", positionConfig)}
                customClassName="lg:w-full md:w-80 w-full"
                alt={renderPositionType(item[0], "position1", positionConfig)}
              />
            </div>
          </div>
          <div className="md:flex items-center justify-between lg:w-1/2 w-full h-full bg-gray-50 lg:mt-0 mt-6">
            <div className="md:w-1/2 md:pl-8 lg:pr-6 md:pr-16 p-8">
              <AtomTitle
                item={renderPositionType(item[1], "position1", positionConfig)}
                customClassName="text-2xl font-semibold leading-7 text-gray-800"
              />
              <AtomText
                item={renderPositionType(item[1], "position3", positionConfig)}
                customClassName="text-base leading-6 text-gray-600 mt-4"
              />
              <button className="hover:underline transition duration-150 text-base font-medium leading-none text-gray-800 mt-6 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">
                Read More
              </button>
            </div>
            <div className="md:w-1/2 flex items-center justify-end">
              <AtomImage
                item={renderPositionType(item[0], "position2", positionConfig)}
                customClassName="lg:w-full md:w-80 w-full"
                alt={renderPositionType(item[1], "position1", positionConfig)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIII;
