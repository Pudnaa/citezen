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
export default function Newsletter1() {
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

  // console.log("Newsletter1 config", config);
  // console.log("Newsletter1 readyDatasrc", readyDatasrc);
  // console.log("Newsletter1 widgetnemgooReady", widgetnemgooReady);
  // console.log("Newsletter1 positionConfig", positionConfig);
  return (
    <>
      <div className="p-6 container md:w-2/3 xl:w-full mx-auto xl:items-stretch xl:flex-row">
        <div className="w-full xl:w-full xl:pl-40">
          <div className="flex items-stretch">
            <input
              className="bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500"
              type="email"
              placeholder="Таны и-мейл хаяг"
            />
            <button className="w-32 rounded-l-none hover:bg-[#009BDE] bg-[#009BDE] rounded-lg text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
              Бүртгүүлэх 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
