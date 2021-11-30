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
  const smoker = (item: any, index: number) => {
    return (
      <div className="group relative">
        <AtomImage
          item={renderPositionType(item[index], "position2", positionConfig)}
          customClassName="w-auto"
          alt={renderPositionType(item[index], "position1", positionConfig)}
        />
        <div className="transition duration-500 opacity-0 group-hover:opacity-25 bg-gradient-to-tr from-gray-800 via-gray-800 to-gray-800 absolute bottom-0 h-full w-full"></div>
        <div
          tabIndex={0}
          className="opacity-0 focus:outline-none focus:opacity-100 group-hover:opacity-100 transition duration-500 bottom-4 md:bottom-6 lg:bottom-8 left-4 md:left-6 lg:left-8 absolute z-10 flex flex-col space-y-2 lg:space-y-4"
        >
          <AtomTitle
            item={renderPositionType(item[index], "position1", positionConfig)}
            customClassName="text-xl lg:text-2xl font-semibold leading-5 text-white"
          />
          <a
            href="/"
            className="focus:outline-none text-base font-medium leading-none underline text-white"
          >
            Explore Now
          </a>
        </div>
      </div>
    );
  };
  const item = datasrc;
  return (
    <div className="flex justify-center items-center pb-16">
      <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
        <div className="flex flex-col jusitfy-center items-center space-y-12 md:px-40 lg:px-0">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
              Shop Our Best Sellers
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 md:space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col space-y-4 md:space-y-6 lg:space-y-8">
              {smoker(item, 0)}
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
                {smoker(item, 1)}
                {smoker(item, 2)}
              </div>
              {smoker(item, 3)}
            </div>
            <div className="w-full lg:w-auto flex flex-col md:flex-row lg:flex-col space-y-4 md:space-y-0 md:space-x-6 lg:space-x-0 lg:space-y-8">
              {smoker(item, 4)}
              {smoker(item, 5)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers10;
