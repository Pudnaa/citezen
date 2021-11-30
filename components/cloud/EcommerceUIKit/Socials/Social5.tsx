import { useContext, useState } from "react";
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
export default function Social5() {
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
  const [show, setShow] = useState(false);

  if (isEmpty(datasrc)) return null;
  // console.log("Social5 config", config);
  // console.log("Social5 datasrc", datasrc);
  // console.log("Social5 otherattr", otherattr);
  // console.log("Social5 positionConfig", positionConfig);
  const item = datasrc[0];
  const images = renderPositionType(item, "position31", positionConfig);
  return (
    <div>
      <div className=" 2xl:container 2xl:mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4 sm:block flex justify-center items-center flex-col sm:w-full xs:w-96 w-auto mx-auto">
        <div className="sm:px-0 px-1">
          <h2 className=" font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 ">
            Shop Instagram
          </h2>
          <p className=" font-normal text-base md:leading-4 leading-6 text-gray-600 mt-4">
            Follow us on instagram @
            <span className=" underline cursor-pointer">followusoninsta</span>{" "}
            and tagus to get featured on our timeline
          </p>
        </div>
        <div className=" flex sm:flex-row flex-col lg:space-x-8 md:space-x-6 sm:space-x-4 space-0 md:mt-10 mt-6">
          <div className=" sm:w-6/12 w-full md:mb-0 sm:mb-0 mb-4">
            <AtomImage
              item={renderPositionType(images[0], "position2", positionConfig)}
              customClassName="w-auto"
              alt={renderPositionType(item, "position45", positionConfig)}
            />
          </div>
          <div className="sm:w-6/12 w-full">
            <div className=" grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-6 gap-4">
              {images &&
                images.map((item1: any, index1: number) => {
                  return index1 === 0 ? (
                    ""
                  ) : (
                    <div key={index1}>
                      <AtomImage
                        item={renderPositionType(
                          item1,
                          "position2",
                          positionConfig
                        )}
                        customClassName="w-auto"
                        alt={renderPositionType(
                          item,
                          "position45",
                          positionConfig
                        )}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className=" sm:px-0 px-1  flex justify-center items-center">
          <button className=" hover:bg-gray-700 duration-100 cursor-pointer focus:ring focus:ring-offset-2 focus:ring-gray-800 text-white bg-gray-800 py-5 px-16 sm:py-3 sm:px-10 md:py-5 md:px-16 sm:w-auto w-full lg:mt-16 mt-10">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
}
