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
import WeeklyCard1 from "@cloud/Custom/Card/WeeklyCard1";

export default function ProductGrid4() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;
  // console.log("ProductGrid4 config", config);
  // console.log("ProductGrid4 datasrc", datasrc);
  // console.log("ProductGrid4 otherattr", otherattr);
  //console.log("ProductGrid4 positionConfig", positionConfig);

  return (
    <>
      {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"> */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-x-8 gap-y-8 w-full`}
      >
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between flex-col bg-white rounded-xl shadow-citizen relative animate-fade-in-down w-full"
            >
              <WeeklyCard1 item={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
