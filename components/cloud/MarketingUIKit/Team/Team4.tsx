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
export default function Team4() {
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

  // console.log("Team4 config", config);
  // console.log("Team4 readyDatasrc", readyDatasrc);
  // console.log("Team4 widgetnemgooReady", widgetnemgooReady);
  // console.log("Team4 positionConfig", positionConfig);
  return (
    <>
      <div className="2xl:mx-auto 2xl:container 2xl:px-20 md:px-6 px-4 py-12">
        <div className="w-full lg:flex items-center  justify-center">
          <div className="lg:w-5/12 sm:w-10/12">
            <h1 className="lg:text-5xl text-3xl font-bold leading-10 text-gray-800">
              Meet our professionals
            </h1>
            <p className="text-base leading-6 text-gray-600 mt-4">
              A good idiom for kids is "It's raining cats and dogs." Kids know
              what both cats and dogs are from an early age
            </p>
            <div className="mt-12">
              <button className="text-base font-medium leading-4 bg-indigo-700 rounded py-4 px-7 text-white hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                View All
              </button>
            </div>
          </div>
          <div className="lg:w-5/12 w-full lg:ml-14 lg:mt-0 mt-12 relative">
            <img
              src="https://i.ibb.co/7ysF4Pb/team.png"
              className="w-full h-full lg:block hidden"
              alt="map"
            />
            <img
              src="https://i.ibb.co/dWSKdMH/Group-1957.png"
              className="w-full h-full lg:hidden md:block hidden"
              alt="map"
            />
            <img
              src="https://i.ibb.co/TtCGmGg/Group-1957.png"
              className="w-full h-full md:hidden"
              alt="map"
            />
          </div>
        </div>
      </div>
    </>
  );
}
