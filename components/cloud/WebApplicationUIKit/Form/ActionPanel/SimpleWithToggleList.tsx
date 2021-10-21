import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
  toBoolean,
} from "util/helper";
import { AtomTitle, AtomSwitch } from "@components/common/Atom";
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
  // console.log("SimpleWithToggleList datasrc", datasrc);
  // console.log("SimpleWithToggleList otherattr", otherattr);
  // console.log("SimpleWithToggleList positionConfig", positionConfig);

  return (
    <>
      <div>
        <p className="text-sm text-gray-600 font-normal my-5">
          Subscription will be updated automatically as long as you
          to change this option. Are you sure you want this?
        </p>
      </div>
      {datasrc.map((item: any, index: number) => {
        return (
          <AtomSwitch
            key={index}
            id={renderPositionType(item, "position0", positionConfig)}
            item={renderPositionType(item, "position1", positionConfig)}
            checked={toBoolean(item.status)}
          />
        );
      })}
    </>
  );
};
export default SimpleWithToggleList;
