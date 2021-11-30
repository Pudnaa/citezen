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
  AtomSlider5,
} from "@components/common/Atom";

export default function Carousel1() {
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
  // console.log("Carousel1 config", config);
  // console.log("Carousel1 datasrc", datasrc);
  // console.log("Carousel1 otherattr", otherattr);
  // console.log("Carousel1 positionConfig", positionConfig);
  return (
    <div className="container mx-auto py-12 bg-gray-800 w-full md:pl-6 md:px-6 px-4">
      <div className="lg:flex items-center">
        <div className="lg:w-1/3">
          <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-10 text-white">
            Hand crafted products that delight
          </p>
          <p className="text-sm leading-5 mt-4 text-white">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <button className="w-full lg:w-auto mt-7 text-sm leading-normal py-4 px-10 border border-white focus:outline-none hover:text-gray-800 hover:bg-white text-white">
            Explore more
          </button>
        </div>
        <div className="lg:w-9/12 lg:pl-10">
          <AtomSlider5 customClassName="flex items-center justify-center relative w-auto">
            {datasrc &&
              datasrc.map((item: any, index: number) => {
                return (
                  <div key={1}>
                    <div className="carousel-cell w-full group ">
                      <div className="md:w-full h-full relative">
                        <AtomImage
                          item={renderPositionType(
                            item,
                            "position2",
                            positionConfig
                          )}
                          customClassName="w-full h-full object-fit object-cover"
                          alt={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                        />
                        <div
                          className="opacity-0 group-hover:opacity-100 duration-100 items-end mb-6 ml-6 absolute bottom-0 left-0"
                          id="sub1"
                        >
                          <div className="p-8 bg-white">
                            <AtomText
                              item={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-2xl leading-6 mt-2 text-gray-700"
                            />
                          </div>
                          <div className="h-12 w-12 flex items-center justify-center bg-gray-800 cursor-pointer">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21 12H3M21 12L15 6M21 12L15 18"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </AtomSlider5>
        </div>
      </div>
    </div>
  );
}
