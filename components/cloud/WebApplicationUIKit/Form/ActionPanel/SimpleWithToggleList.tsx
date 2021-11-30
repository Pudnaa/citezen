import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
  toBoolean,
} from "util/helper";
import { AtomTitle, AtomSwitch, AtomIcon } from "@components/common/Atom";
import { isEmpty } from "lodash";

// type PropsType = {
//   config: any;
//   datasrc: any;
//   otherattr: any;
// };

// const SimpleWithToggleList: FC<PropsType> = () => {
const SimpleWithToggleList = () => {
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

  // console.log("SimpleWithToggleList config", config);
  //console.log("SimpleWithToggleList datasrc", datasrc);
  // console.log("SimpleWithToggleList otherattr", otherattr);
  // console.log("SimpleWithToggleList positionConfig", positionConfig);

  var titles = new Array();
  datasrc &&
    datasrc.map((item: any, index: number) => {
      const title = item.groupname;
      !titles?.includes(title) && titles.push(title);
    });
  return (
    <div className="relative">
      <div
        className={`w-7 h-7 absolute -top-11 -right-1 rounded-3xl bg-gray-300 items-center flex justify-center cursor-pointer`}
      >
        <AtomIcon
          // item={item.icon}
          item="far fa-pencil"
          checked={false}
          hoverSolid={true}
          customClassName="text-sm"
        />
      </div>
      <div className="mt-4">
        {titles &&
          titles.map((item: any, index: number) => {
            return (
              <>
                <div key={index} className="font-bold text-xs text-gray-700">
                  {item}
                </div>
                {datasrc.map((item1: any, index1: number) => {
                  return item === item1.groupname ? (
                    <AtomSwitch
                      key={index1}
                      id={renderPositionType(
                        item1,
                        "position0",
                        positionConfig
                      )}
                      item={renderPositionType(
                        item1,
                        "position1",
                        positionConfig
                      )}
                      checked={toBoolean(item1.status)}
                    />
                  ) : (
                    ""
                  );
                })}
              </>
            );
          })}
      </div>
    </div>
  );
};
export default SimpleWithToggleList;
