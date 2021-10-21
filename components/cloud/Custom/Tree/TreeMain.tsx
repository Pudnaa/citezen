import { FC, useState } from "react";
import { Tree } from "antd";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
  toBoolean,
} from "util/helper";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomTag,
} from "@components/common/Atom";

type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  selectedId: number;
  setSelectedId: any;
  indent?: number;
  onClickItem?: any;
};

const TreeMain: FC<PropsType> = ({
  config,
  datasrc,
  otherattr,
  color,
  customClassName,
  customStyle,
  selectedId,
  setSelectedId,
  indent,
  onClickItem = () => null,
}) => {
  if (_.isEmpty(datasrc)) return null;
  const positionConfig = positionToPath(config.bpsectiondtl);
  // console.log("TreeMain config", config);
  // console.log("TreeMain datasrc", datasrc);
  // console.log("TreeMain otherattr", otherattr);

  return (
    <ul className={` ${customClassName} `} style={{ ...customStyle }}>
      {datasrc.map((item: any, index: number) => {
        const selected =
          selectedId === renderPositionType(item, "position0", positionConfig);

        return (
          <span key={index}>
            <TreeItem
              key={index}
              item={item}
              positionConfig={positionConfig}
              color={color}
              customClassName={`mb-4 ${selected ? "" : `text-${color}`}`}
              selected={selected}
              onClickItem={(e: any) => {
                onClickItem(e);
              }}
            />
            {!_.isEmpty(item?.children) && datasrc[index].isOpen && (
              <>
                <TreeMain
                  config={config}
                  color={color}
                  datasrc={_.orderBy(item?.children, "ordernumber")}
                  otherattr={otherattr}
                  customClassName={`ml-${indent}`}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  indent={indent}
                  onClickItem={onClickItem}
                />
              </>
            )}
          </span>
        );
      })}
    </ul>
  );
};

export default TreeMain;

type PropsTypeItem = {
  item: any;
  positionConfig: any;
  color?: string;
  customClassName?: string;
  selected: boolean;
  onClickItem?: any;
};

const TreeItem: FC<PropsTypeItem> = ({
  item,
  positionConfig,
  color,
  customClassName,
  selected,
  onClickItem,
}) => {
  // console.log("item", item);
  // console.log("positionConfig", positionConfig);
  // console.log(
  //   "renderPositionType(item, position1, positionConfig)",
  //   renderPositionType(item, "position1", positionConfig)
  // );
  const withChildren = !_.isEmpty(item?.children);

  return (
    <li
      className={`flex w-full justify-between text-gray-800  leading-none cursor-pointer items-center relative ${customClassName}`}
    >
      <div
        // className="ml-2"
        onClick={(e) => {
          e.preventDefault();
          onClickItem(item);
        }}
      >
        <AtomText
          item={renderPositionType(item, "position1", positionConfig)}
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
      </div>
      {withChildren && (
        <AtomIcon
          item={`far fa-chevron-${
            item.isOpen ? "down" : "right"
          } text-gray-700`}
        />
      )}
    </li>
  );
};
