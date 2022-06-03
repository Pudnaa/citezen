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
function CompactStatCardsAlternateStyle() {
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

  // console.log("CompactStatCardsAlternateStyle config", config);
  // console.log("CompactStatCardsAlternateStyle readyDatasrc", readyDatasrc);
  // console.log("CompactStatCardsAlternateStyle widgetnemgooReady", widgetnemgooReady);
  // console.log("CompactStatCardsAlternateStyle positionConfig", positionConfig);
  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded flex items-center justify-between px-5 relative shadow">
          <div className="absolute w-2 h-4 bg-indigo-700 left-0" />
          <h3 className="py-6 leading-4 text-gray-800  dark:text-gray-100 font-normal text-base">
            Total Subscribers
          </h3>
          <h2 className="text-gray-800  dark:text-gray-100 text-2xl leading-normal font-bold">
            2,330
          </h2>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded flex items-center justify-between px-5 relative shadow">
          <div className="absolute w-2 h-4 bg-indigo-700 left-0" />
          <h3 className="py-6 leading-4 text-gray-800  dark:text-gray-100 font-normal text-base">
            Avg. Click Rate
          </h3>
          <h2 className="text-gray-800  dark:text-gray-100 text-2xl leading-normal font-bold">
            22.3%
          </h2>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded flex items-center justify-between px-5 relative shadow">
          <div className="absolute w-2 h-4 bg-indigo-700 left-0" />
          <h3 className="py-6 leading-4 text-gray-800  dark:text-gray-100 font-normal text-base">
            Total Sales
          </h3>
          <h2 className="text-gray-800  dark:text-gray-100 text-2xl leading-normal font-bold">
            20.2K
          </h2>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded flex items-center justify-between px-5 relative shadow">
          <div className="absolute w-2 h-4 bg-indigo-700 left-0" />
          <h3 className="py-6 leading-4 text-gray-800  dark:text-gray-100 font-normal text-base">
            Profit Earned
          </h3>
          <h2 className="text-gray-800  dark:text-gray-100 text-2xl leading-normal font-bold">
            8,340
          </h2>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default CompactStatCardsAlternateStyle;
