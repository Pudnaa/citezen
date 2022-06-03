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

export default function CTA5() {
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

  // console.log("CTA5 config", config);
  // console.log("CTA5 readyDatasrc", readyDatasrc);
  // console.log("CTA5 widgetnemgooReady", widgetnemgooReady);
  // console.log("CTA5 positionConfig", positionConfig);
  return (
    <div>
      <section className="w-full h-80 flex justify-center bg-gradient-to-l from-indigo-600 to-indigo-700">
        <div className="mx-auto container flex flex-col justify-center items-center">
          <div className="text-center">
            <h2 className="lg:text-5xl text-4xl font-extrabold leading-10 text-white">
              Get results, no matter what
            </h2>
          </div>
          <div className="mt-4 flex justify-center">
            <p className="lg:text-base text-sm font-medium leading-normal text-center text-white md:w-3/5 px-14">
              Start your free trial today, you get all the pro features for 1
              month for you and your team. If you think its not for you can
              easily unsubscribe
            </p>
          </div>
          <div className="mt-8">
            <button className="text-indigo-700 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:bg-gray-100 bg-white w-40 h-12 text-base  rounded-sm">
              Start free trial
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
