import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { jsonParse, renderPositionType } from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomCurrency,
} from "@components/common/Atom";

type PropsType = {
  item: any;
};

const StateCardItem: FC<PropsType> = ({ item }) => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(item)) return null;

  const iconStyle = jsonParse(positionConfig["position49"].otherattr);
  // console.log("iconStyle", iconStyle);
  return (
    <div className='bg-white dark:bg-gray-800 rounded-lg shadow-citizen p-4'>
      <div className='flex items-center justify-between w-full sm:w-full'>
        <div className='flex items-center'>
          <div
            className='p-3 bg-blue-200 rounded-lg flex items-center justify-center h-14 w-14'
            style={{ aspectRatio: "auto 1 / 1", ...iconStyle.style }}
          >
            <AtomIcon
              item={renderPositionType(item, "position49", positionConfig)}
              color={widgetAllaround.color}
              customClassName='text-xl'
              customStyle={jsonParse(
                positionConfig["position49"].otherattr.style,
              )}
            />
          </div>
          <div className='ml-3'>
            <AtomCurrency
              type='mnt'
              item={renderPositionType(item, "position4", positionConfig)}
              customClassName='text-base text-gray-600 font-bold block'
            />
            <AtomText
              item={renderPositionType(item, "position40", positionConfig)}
              customClassName='text-sm text-gray-400 font-medium block'
            />
          </div>
        </div>
        <div>
          <div className='flex items-center ml-2'>
            <AtomIcon
              item={renderPositionType(item, "position50", positionConfig)}
              color={widgetAllaround.color}
              customClassName={`text-xs tracking-wide font-bold leading-normal pl-1 text-${
                renderPositionType(item, "position50", positionConfig) ===
                "fa fa-arrow-up"
                  ? "green"
                  : "red"
              }-500`}
            />
            <AtomText
              item={renderPositionType(item, "position51", positionConfig)}
              customClassName={`text-xs tracking-wide font-bold leading-normal pl-1 text-${
                renderPositionType(item, "position50", positionConfig) ===
                "fa fa-arrow-up"
                  ? "green"
                  : "red"
              }-500`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateCardItem;
