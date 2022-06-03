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
export default function Team5() {
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

  // console.log("Team5 config", config);
  // console.log("Team5 readyDatasrc", readyDatasrc);
  // console.log("Team5 widgetnemgooReady", widgetnemgooReady);
  // console.log("Team5 positionConfig", positionConfig);
  return (
    <>
      <div className="mx-auto container lg:px-20 md:px-6 px-4 py-12">
        <div className="flex items-center justify-center flex-col">
          <h1 className="lg:text-5xl text-3xl font-bold leading-10 text-gray-800 text-center">
            Faces Behind Our Success
          </h1>
          <p className="text-base leading-6 text-center text-gray-600 mt-5 lg:w-5/12 sm:w-7/12">
            A good idiom for kids is "It's raining cats and dogs." Kids know
            what both cats and dogs are from an early age
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 pb-12 pt-20">
          <div className="w-full flex items-center justify-center flex-col">
            <div className="w-full px-5 -mb-10  relative z-40">
              <img
                src="https://i.ibb.co/85RFr5V/christina-wocintechchat-com-0-Zx1b-Dv5-BNY-unsplash-1.png"
                alt="girl smilling"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
              <p className="text-xl font-semibold leading-5 text-center text-white">
                Anna Rose
              </p>
              <p className="text-base leading-4 mt-2 text-center text-white">
                District Brand Associate
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <div className="w-full px-5 -mb-10  relative z-40">
              <img
                src="https://i.ibb.co/fNyc2Tg/austin-distel-7uo-Mmz-Pd2-JA-unsplash-1.png"
                alt="guy smilling"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
              <p className="text-xl font-semibold leading-5 text-center text-white">
                Jack Daniels
              </p>
              <p className="text-base leading-4 mt-2 text-center text-white">
                Lead Communications Developer
              </p>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <div className="w-full px-5 -mb-10  relative z-40">
              <img
                src="https://i.ibb.co/F4pdTRP/michael-dam-m-EZ3-Po-FGs-k-unsplash-1.png"
                alt="girl smilling"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="pb-8 pt-14 bg-indigo-700 rounded-md w-full ">
              <p className="text-xl font-semibold leading-5 text-center text-white">
                Cindy Williams
              </p>
              <p className="text-base leading-4 mt-2 text-center text-white">
                Corporate Integration Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
