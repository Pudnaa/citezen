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

const Banner5WeeklyLanding = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("Banner5WeeklyLanding config", config);
  // console.log("Banner5WeeklyLanding readyDatasrc", readyDatasrc);
  // console.log("Banner5WeeklyLanding widgetnemgooReady", widgetnemgooReady);
  // console.log("Banner5WeeklyLanding positionConfig", positionConfig);
  return (
    <div className=" container mx-auto py-9 md:py-12 ">
      {readyDatasrc &&
        readyDatasrc.map((item: any, index: number) => {
          return (
            <div className="flex flex-col  md:flex-row justify-around  items-stretch  bg-black py-8 md:py-11 lg:py-3 px-4 md:px-8 lg:px-16">
              <div className="flex items-center ">
                <div className="flex  items-center w-full">
                  <RenderAtom
                    item={item?.position1}
                    defaultAtom="title"
                    customClassName="text-2xl leading-9 font-medium text-white"
                  />
                  <AtomButton
                    item={item.button}
                    customClassName="w-full mb-10 m-10 sm:w-auto mt-12 md:mt-10 bg-blue-600 rounded uppercase py-2 px-6 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-white hover:text-gray-600"
                    color=""
                  />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Banner5WeeklyLanding;
