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
} from "@components/common/Atom";
function RightAlignedAvatarsWithGradient() {
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

  // console.log("RightAlignedAvatarsWithGradient config", config);
  // console.log("RightAlignedAvatarsWithGradient readyDatasrc", readyDatasrc);
  // console.log("RightAlignedAvatarsWithGradient widgetnemgooReady", widgetnemgooReady);
  // console.log("RightAlignedAvatarsWithGradient positionConfig", positionConfig);
  return (
    <>
      <div className="mx-auto container py-12 px-4">
        <div className="w-full flex justify-center">
          <div className="w-full md:w-11/12 xl:w-10/12 bg-gradient-to-r from-indigo-500 to-indigo-700 md:py-8 md:px-8  px-5 py-4 xl:px-12 xl:py-16">
            <div>
              <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
                <div className="md:w-2/3 w-full pb-6 md:pb-0 md:pr-6 flex-col md:block flex  items-center justify-center md:pt-0 pt-4 ">
                  <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl lg:w-10/12 text-white font-black leading-tight md:text-left text-center ">
                    Become a member and start building the next big thing
                  </h1>
                  <button className="mt-5 lg:mt-12 py-3 lg:py-4 px-4  lg:px-6 bg-white font-bold text-indigo-700 rounded-lg text-sm lg:text-lg xl:text-xl hover:opacity-90">
                    Join the community
                  </button>
                </div>
                <div className="md:w-1/3 w-full">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center mt-8">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(2).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png"
                        />
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full mr-3">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(1).png"
                        />
                      </div>
                      <div className="xl:w-20 lg:h-14 lg:w-14 w-10 h-10  xl:h-20 rounded-full">
                        <img
                          className="w-full h-full"
                          src="https://cdn.tuk.dev/assets/templates/prodify/avatar(3).png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightAlignedAvatarsWithGradient;
