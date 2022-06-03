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
export default function CTA2() {
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

  // console.log("CTA2 config", config);
  // console.log("CTA2 readyDatasrc", readyDatasrc);
  // console.log("CTA2 widgetnemgooReady", widgetnemgooReady);
  // console.log("CTA2 positionConfig", positionConfig);
  return (
    <>
      <div className="w-full flex md:flex-col flex-col-reverse items-center justify-center  py-12">
        <img
          src="https://i.ibb.co/KFN84NL/bgImg.png"
          className="w-full object-center object-fill md:mt-0 mt-6 xl:block hidden"
          alt="background image"
        />
        <img
          src="https://i.ibb.co/Lxn1MTX/tabley.png"
          className="w-full object-center object-fill md:mt-0 mt-6 xl:hidden"
          alt="background image"
        />
        <div className="md:absolute flex flex-col items-center justify-center px-4">
          <h1 className="lg:text-5xl text-center text-3xl font-bold text-gray-800">
            OvonRueden Is For Everyone
          </h1>
          <p className="text-base leading-6 text-center text-gray-600 mt-4 lg:w-8/12 sm:w-10/12">
            A good idiom for kids is "It's raining cats and dogs." Kids know
            what both cats and dogs are from an early age
          </p>
          <div>
            <button
              role="button"
              aria-label="view all"
              className="text-base font-medium leading-4 py-4 px-7 text-white bg-indigo-700 rounded mt-12 hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
