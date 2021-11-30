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
import WeeklyCard from "@cloud/Custom/Card/WeeklyCard";

export default function ProductGridWeekly() {
  const {
    config,
    readyDatasrc,
    datasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(readyDatasrc)) return null;
  // console.log("ProductGridWeekly config", config);
  // console.log("ProductGridWeekly readyDatasrc", readyDatasrc);
  // console.log("ProductGridWeekly widgetnemgoo,", widgetnemgoo,);
  //console.log("ProductGridWeekly positionConfig", positionConfig);

  return (
    <>
 
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-8 w-full`}
      >
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between flex-col bg-white rounded-sm  relative animate-fade-in-down w-full"
            >
              <WeeklyCard item={item} />
            </div>
          );
        })}
        
      </div>
    </>
  );
}
