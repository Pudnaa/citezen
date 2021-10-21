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
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;
  //console.log("Card115 config", config);
  // console.log("Card115 datasrc", datasrc);
  //console.log("Card115 otherattr", otherattr);
  //console.log("Card115 positionConfig", positionConfig);

  return (
    <div className="py-1">
      <p className="text-base font-bold leading-5 text-gray-800 ">
        Ерөнхий мэдээлэл
      </p>
      {datasrc.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="flex items-start justify-between mt-6 w-full"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded">
                <img
                  src={renderPositionType(item, "position2", positionConfig)}
                  className="w-full h-full"
                />
              </div>
              <div className="pl-3">
                <AtomText
                  item={renderPositionType(item, "position40", positionConfig)}
                  customClassName="text-sm leading-5 font-semibold py-4 text-gray-500"
                />
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName="text-sm font-semibold leading-normal text-gray-800"
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
