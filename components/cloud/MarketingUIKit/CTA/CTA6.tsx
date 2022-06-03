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

export default function CTA6() {
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

  // console.log("CTA6 config", config);
  // console.log("CTA6 readyDatasrc", readyDatasrc);
  // console.log("CTA6 widgetnemgooReady", widgetnemgooReady);
  // console.log("CTA6 positionConfig", positionConfig);
  return (
    <>
      <div className="dark:bg-gray-900">
        <section className="mx-auto container w-full py-36">
          <div className="flex flex-col justify-center items-center">
            <div className="md:text-5xl text-4xl font-black text-center text-gray-800 dark:text-white leading-snug lg:w-3/4">
              <h2>Build the next big thing and ship to market faster</h2>
            </div>
            <div className="flex justify-center items-center mt-16">
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded-sm">
                Download Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
