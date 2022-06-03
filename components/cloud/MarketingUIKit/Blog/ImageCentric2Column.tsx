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
} from "@components/common/Atom";
function ImageCentric2Column() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("ImageCentric2Column config", config);
  // console.log("ImageCentric2Column readyDatasrc", readyDatasrc);
  // console.log("ImageCentric2Column widgetnemgooReady", widgetnemgooReady);
  // console.log("ImageCentric2Column positionConfig", positionConfig);
  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">
          Our Blogs
        </h1>
        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <img
                src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog1.png"
                className="w-full"
              />
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  Beautiful Italy, Travel Blog
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-6">
                  <a>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    A Broken Backpack
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog3.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    My life’s a Movie
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Lilii’s Travel Plans
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-16 w-full">
          <button className=" hover:bg-gray-200 border border-indigo-700  lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </div>
        <div />
      </div>
    </>
  );
}

export default ImageCentric2Column;
