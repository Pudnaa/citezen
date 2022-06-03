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

export default function Card115() {
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

  // console.log("Card115 config", config);
  // console.log("Card115 readyDatasrc", readyDatasrc);
  //console.log("Card115 widgetnemgooReady", widgetnemgooReady);
  //console.log("Card115 positionConfig", positionConfig);

  return (
    <div className="p-6">
      <p className="text-base font-bold leading-5 text-gray-800 ">
        Ерөнхий мэдээлэл
      </p>
      {readyDatasrc.map((item: any, index: number) => {
        return (
          <div key={item?.id || index} className="mt-2 w-full">
            <AtomText
              item={renderPositionType(item, "position40", positionConfig)}
              customClassName="text-sm font-medium py-4 text-gray-500"
            />
            <div className="flex items-center">
              <div className="w-8 h-8 rounded">
                <img
                  src={renderPositionType(item, "position2", positionConfig)}
                  className="w-full h-full"
                />
              </div>
              <div className="pl-3">
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName="text-sm font-medium text-gray-700"
                  truncateRow={2}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
