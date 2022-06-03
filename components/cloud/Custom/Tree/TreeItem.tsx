import { FC } from "react";
import { Tree } from "antd";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { AtomLinkV2 } from "@components/common/Atom";
import { jsonParse, renderPositionType, prepareIsOpen } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomTag,
} from "@components/common/Atom";

type PropsTypeItem = {
  item: any;
  positionConfig: any;
  color?: string;
  customClassName?: string;
  selected: boolean;
  onClickItem?: any;
  onArrowClickItem?: any;
  itemIndex: number;
};

const TreeItem: FC<PropsTypeItem> = ({
  item,
  positionConfig,
  color,
  customClassName,
  selected,
  onClickItem,
  onArrowClickItem,
  itemIndex,
}) => {
  // console.log("item", item);
  let linkPath = jsonParse(positionConfig?.position1?.widgetnemgooReady);

  // console.log(
  //   "renderPositionType(item, position1, positionConfig)",
  //   renderPositionType(item, "position1", positionConfig)
  // );
  const withChildren = !_.isEmpty(item?.children);

  const handlerChangeEvent = (e: any, i: any) => {
    if (withChildren) {
      onArrowClickItem(item, itemIndex);
    } else {
      onClickItem(item);
    }
  };

  return (
    <div
      className={`flex w-full justify-between text-gray-800  leading-none cursor-pointer items-center relative ${customClassName}`}
      onClick={(e) => handlerChangeEvent(e, item)}
    >
      {/* <div
        onClick={(e) => {
          e.preventDefault();
          onClickItem(item);
        }}
      > */}
      {/* <AtomLinkV2 item={linkPath.url} color={color}> */}
      {/* <AtomText
        item={renderPositionType(item, "position1", positionConfig)}
        customClassName={`text-sm hover:text-${color} ${
          selected ? `text-${color} font-semibold` : "text-gray-800"
        }`}
      /> */}

      <RenderAtom
        item={item.position1}
        defaultAtom="text"
        customClassName={`text-sm hover:text-${color} ${
          selected ? `text-${color} font-semibold` : "text-gray-800"
        }`}
      />
      <AtomTag
        item={renderPositionType(item, "position4", positionConfig)}
        type="gray"
        position="inset-y-0 right-0"
        zeroShow={false}
      />
      {/* </AtomLinkV2> */}
      {withChildren && (
        <AtomIcon
          item={`far fa-chevron-${
            item.isOpen ? "down" : "right"
          } text-gray-700`}
          color="weekly"
          onClick={() => {
            onArrowClickItem(item, itemIndex);
          }}
        />
      )}
    </div>
  );
};

export default TreeItem;
