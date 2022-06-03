import { FC } from "react";
import { renderPositionType } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import _ from "lodash";
import { AtomIcon, AtomTag } from "@components/common/Atom";

type PropsTypeItem = {
  item: any;
  positionConfig: any;
  color?: string;
  customClassName?: string;
  selected?: boolean;
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
