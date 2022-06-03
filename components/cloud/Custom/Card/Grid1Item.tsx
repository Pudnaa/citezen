import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import { isEmpty } from "lodash";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomLink,
  AtomImage,
} from "@components/common/Atom";
type PropsType = {
  item: any;
};

const Grid3Item: FC<PropsType> = ({ item }) => {
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

  if (isEmpty(item)) return null;
  // console.log("amin", item);
  return (
    <>
      <div className="flex">
        <div className="mr-3 items-center flex justify-center">
          <AtomImage
            item={renderPositionType(item, "position2", positionConfig)}
            customClassName="h-7 w-7 rounded-full object-cover object-center"
          />
          {/* <img
              src={renderPositionType(item, "position2", positionConfig)}
              className="h-32 w-32 rounded-full object-cover object-center"
            /> */}
        </div>
        <div className="">
          <AtomText
            item={renderPositionType(item, "position92", positionConfig)}
            customClassName="text-xs font-medium leading-5 text-gray-400"
          />
          <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            link={`16313055518091/#${renderPositionType(
              item,
              "position0",
              positionConfig
            )}`}
            customStyle={{}}
            customClassName="text-base font-semibold leading-6"
            truncateRow={2}
          />
        </div>
      </div>
      <div className="text-sm font-medium leading-normal text-green-500">
        {renderPositionType(item, "position47", positionConfig) != "0" ? (
          <AtomCurrency
            item={renderPositionType(item, "position47", positionConfig)}
            customClassName=""
            type="mnt"
          />
        ) : (
          <span>Төлбөргүй</span>
        )}
      </div>
    </>
  );
};

export default Grid3Item;
