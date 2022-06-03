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

export default function MediumStatCards() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("MediumStatCards config", config);
  // console.log("MediumStatCards readyDatasrc", readyDatasrc);
  // console.log("MediumStatCards widgetnemgooReady", widgetnemgooReady);
  //console.log("MediumStatCards positionConfig", positionConfig);

  return (
    <>
      {/* Card is full width. Use in 12 col grid for best view. */}
      {/* Card code block start */}
      <div className="w-full bg-gray-100 rounded-t-lg grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {readyDatasrc.map((item: any, index: number) => {
          return (
            <div
              key={item?.id || index}
              className="pt-5 pl-6 pr-12 pb-3 flex items-start "
            >
              <div className="text-gray-500 dark:text-gray-400 mt-5">
                <AtomIcon
                  item={renderPositionType(item, "position49", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName=""
                />
              </div>
              <div className="pl-3 mt-1">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName="mb-3 leading-4 text-gray-700 dark:text-gray-900 text-sm"
                  truncateRow={2}
                />
                <div className="flex items-center">
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="text-gray-600 dark:text-gray-600 text-xs leading-normal font-medium"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Card code block end */}
    </>
  );
}
