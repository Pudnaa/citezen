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
  AtomImage,
} from "@components/common/Atom";
import SkyResortCard from "@cloud/Custom/Card/SkyResortCard";

export default function SkyResortGrid() {
  const {
    config,
    datasrc,
    readyDatasrc,
    otherattr,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(readyDatasrc)) return null;
  // console.log("ProductGrid4 config", config);
  //console.log("skyResortGrid readyDatasrc", readyDatasrc);
  // console.log("ProductGrid4 widgetnemgoo,", widgetnemgoo);
  // console.log("ProductGrid4 positionConfig", positionConfig);
  const isSkyResortHome = otherattr.type === "skyresort_home";
  return (
    <>
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-5 w-full`}
      >
        {readyDatasrc.map((item: any, index: number) => {
          return index < 5 ? (
            <div
              key={index}
              className="flex justify-between flex-col bg-white rounded-xl shadow-citizen relative animate-fade-in-down w-full"
            >
              <SkyResortCard item={item} />
            </div>
          ) : null;
        })}
      </div>
    </>
  );
}
