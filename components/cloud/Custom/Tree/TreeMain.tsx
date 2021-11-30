import { FC, useEffect, useState } from "react";
import { Tree } from "antd";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
  toBoolean,
  prepareIsOpen,
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
  rawDatasrc: any;
  otherattr: any;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  defaultSelectedId?: any;
  indent?: number;
  onClickItem?: any;
};

const TreeMain: FC<PropsType> = ({
  config,
  rawDatasrc,
  otherattr,
  color,
  customClassName,
  customStyle,
  defaultSelectedId,
  indent,
  onClickItem = () => null,
}) => {
  if (_.isEmpty(rawDatasrc)) return null;
  const positionConfig = positionToPath(config.bpsectiondtl);
  // console.log("TreeMain config", config);
  // console.log("TreeMain rawDatasrc", rawDatasrc);
  // console.log("TreeMain otherattr", otherattr);

  const [selectedId, setSelectedId] = useState<any>(defaultSelectedId);
  const [datasrc, setDatasrc] = useState<any>(
    prepareIsOpen(rawDatasrc, selectedId, positionConfig)[0] || [],
  );

  useEffect(() => {
    setDatasrc(prepareIsOpen(rawDatasrc, selectedId, positionConfig)[0] || []);
  }, [selectedId]);

  // console.log("🚀 ~ selectedId", selectedId);
  //Business process → 16115866996021

  const toggleIsOpen = (item: any, itemIndex: number) => {
    const tempArray = [...datasrc];
    tempArray[itemIndex] = { ...item, isOpen: !item.isOpen };

    setDatasrc([...tempArray]);

    return null;
  };

  return (
    <ul className={` ${customClassName} `} style={{ ...customStyle }}>
      {datasrc.map((item: any, index: number) => {
        const selected =
          selectedId === renderPositionType(item, "position0", positionConfig);
        return (
          <li key={index} className={`relative ${item.icon ? "pl-1" : `pl-2`}`}>
            {/* {item.icon && (
              <AtomIcon
                item={`fas ${item.icon} text-gray-700`}
                color='weekly'
                customClassName='absolute left-0'
              />
            )} */}
            <TreeItem
              key={index}
              item={item}
              positionConfig={positionConfig}
              color={color}
              customClassName={`mb-4 ${selected ? "" : `text-${color}`}`}
              selected={selected}
              itemIndex={index}
              onClickItem={(e: any) => {
                onClickItem(e);
              }}
              onArrowClickItem={(item: any, itemIndex: number) => {
                toggleIsOpen(item, itemIndex);
              }}
            />
            {!_.isEmpty(item?.children) && datasrc[index].isOpen && (
              <span className="submenu">
                <TreeMain
                  config={config}
                  color={color}
                  rawDatasrc={_.orderBy(item?.children, "ordernumber")}
                  otherattr={otherattr}
                  customClassName={`ml-${indent}`}
                  defaultSelectedId={selectedId}
                  indent={indent}
                  onClickItem={onClickItem}
                />
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default TreeMain;

//  ##### #####  ###### ###### # ##### ###### #    #
//    #   #    # #      #      #   #   #      ##  ##
//    #   #    # #####  #####  #   #   #####  # ## #
//    #   #####  #      #      #   #   #      #    #
//    #   #   #  #      #      #   #   #      #    #
//    #   #    # ###### ###### #   #   ###### #    #
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
  // console.log("positionConfig", positionConfig);
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
      <div
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
          color="weekly"
          onClick={() => {
            onArrowClickItem(item, itemIndex);
          }}
        />
      )}
    </div>
  );
};
