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
function Card114() {
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

  // console.log("Card114 config", config);
  // console.log("Card114 readyDatasrc", readyDatasrc);
  // console.log("Card114 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card114 positionConfig", positionConfig);
  return (
    <div className="w-full justify-center flex py-12 px-4">
      <div className="px-8 py-8 bg-gray-100 dark:bg-gray-800 rounded-xl max-w-lg">
        <p className="text-2xl lg:text-3xl font-bold lg:leading-10 text-gray-800 dark:text-gray-50">
          Closer look into our templates
        </p>
        <div className="mt-4">
          <p className="text-sm md:text-lg leading-7 text-gray-700 dark:text-gray-300">
            Tailwind ui kit is home to a huge variety of templates that let you
            create a sleek and intuitive user interface while ensuring you have
            the best user experience. Now with our huge collection of tailwind
            css templates, create stunning and impressive designs in no time.
          </p>
          <p className="text-gray-800 text-xl dark:text-gray-50 font-bold mt-4 mb-2">
            Rapid Development:
          </p>
          <p className="text-sm md:text-lg  text-gray-700 dark:text-gray-300 ">
            {" "}
            Our tailwind css templates enable rapid development so our clients
            can cut down on cost and time
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card114;
