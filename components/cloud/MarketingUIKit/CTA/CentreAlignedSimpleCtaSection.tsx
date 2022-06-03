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
function CentreAlignedSimpleCtaSection() {
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

  // console.log("CentreAlignedSimpleCtaSection config", config);
  // console.log("CentreAlignedSimpleCtaSection readyDatasrc", readyDatasrc);
  // console.log("CentreAlignedSimpleCtaSection widgetnemgooReady", widgetnemgooReady);
  // console.log("CentreAlignedSimpleCtaSection positionConfig", positionConfig);
  return (
    <section className="max-w-8xl mx-auto container pt-16 bg-white">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="flex flex-col justify-center items-center w-full md:w-9/12 px-4 lg:px-12">
          <div className="text-center md:flex flex-col items-center w-full">
            <h3 className="text-2xl md:text-4xl font-extrabold md:leading-tight text-gray-800 md:w-3/4 pt-3 md:pt-6">
              Beautiful Hand Crafted Library for busy devs
            </h3>
            <p className="text-base md:text-xl font-light text-gray-600 md:leading-normal pt-2 md:pt-5 w-full">
              If you are looking for a highly responsive, easily customizable,
              and beautifully designed web template you need one built with
              Tailwind UI kit.
            </p>
            <div className="flex justify-center flex-wrap">
              <div className="m-6">
                <button className="focus:outline-none bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-base  md:px-8 md:py-4 md:text-xl">
                  Get Started
                </button>
              </div>
              <div className="m-6">
                <button className="focus:outline-none bg-white transition duration-150 ease-in-out hover:bg-gray-200 rounded border border-indigo-600 text-indigo-600 px-4 py-2 text-base  md:px-8 md:py-4 md:text-xl">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CentreAlignedSimpleCtaSection;
