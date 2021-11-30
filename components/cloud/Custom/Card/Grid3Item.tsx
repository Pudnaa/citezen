import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { jsonParse, renderPositionType } from "util/helper";
import { useCloud } from "hooks/use-cloud";
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
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  const cloudContext = useCloud();

  if (isEmpty(item)) return null;
  // console.log("amin", item);
  return (
    <>
      <AtomTag item="-20%" color="sso-lightest" />
      <div className="flex justify-center my-10">
        <AtomImage
          item={renderPositionType(item, "position2", positionConfig)}
          customClassName="h-24 w-24 rounded-full object-cover object-center"
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
          link={`16313055518091/?metaId=${renderPositionType(
            item,
            "position0",
            positionConfig
          )}`}
          // link={cloudContext.buildCloudURL(item, "", true)}
          customStyle={{}}
          customClassName="text-base font-semibold leading-6"
          truncateRow={2}
        />
      </div>
      <div className="mt-2 flex justify-start w-full items-center text-base font-bold leading-normal text-green-500">
        {renderPositionType(item, "position47", positionConfig) == "0" ? (
          <span>Төлбөргүй</span>
        ) : (
          <AtomCurrency
            item={renderPositionType(item, "position47", positionConfig)}
            customClassName=""
            type="mnt"
          />
        )}
        {renderPositionType(item, "position47", positionConfig) !== "0" &&
          renderPositionType(item, "position4", positionConfig) !== "0" && (
            <AtomCurrency
              item={renderPositionType(item, "position4", positionConfig)}
              customClassName="text-xs font-normal leading-normal text-gray-400 line-through ml-2"
              type="mnt"
            />
          )}
      </div>
    </>
  );
};

export default Grid3Item;
