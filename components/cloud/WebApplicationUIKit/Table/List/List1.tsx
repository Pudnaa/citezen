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

export default function List1() {
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
  //console.log("List1 config", config);
  //console.log("List1 datasrc", datasrc);
  //console.log("List1 otherattr", otherattr);
  //console.log("List1 positionConfig", positionConfig);

  return (
    <div className="py-1 w-full  ">
      <div className="lg:flex items-center justify-center w-full">
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="lg:w-full lg:mr-7 lg:mb-0 mb-7 ml-6 bg-white p-6 "
            >
              <div className="flex items-center pb-6 ">
                <img
                  src={renderPositionType(item, "position2", positionConfig)}
                  className="w-12 h-12 rounded-fullr"
                />
                <div className="flex items-start justify-between w-full">
                  <div className=" pl-3 w-full">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      link=""
                      customStyle={{}}
                      customClassName="text-base font-medium leading-5 font-bold text-gray-800"
                      truncateRow={2}
                    />
                    {renderPositionType(item, "position51", positionConfig)}
                  </div>
                </div>
              </div>
              <div className="px-2">
                <AtomText
                  item={renderPositionType(item, "position3", positionConfig)}
                  customClassName="text-sm leading-5 py-4 text-gray-600"
                />
                <div className="flex justify-center mt-3 ">
                  <AtomButton
                    item="ХҮСЭЛТ ИЛГЭЭХ"
                    type="primary"
                    customClassName="rounded-full"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
