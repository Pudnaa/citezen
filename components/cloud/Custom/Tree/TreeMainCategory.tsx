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
} from "@components/common/Atom";

type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
  customClassName?: string;
  customStyle?: any;
  selectedId: number;
  setSelectedId: any;
  indent?: number;
};

const TreeMainCategory: FC<PropsType> = ({
  config,
  datasrc,
  otherattr,
  customClassName,
  customStyle,
  selectedId,
  setSelectedId,
  indent,
}) => {
  const [data, setData] = useState<any>(datasrc);
  if (_.isEmpty(datasrc)) return null;
  const positionConfig = positionToPath(config.bpsectiondtl);
  // console.log("TreeMainCategory config", config);
  // console.log("TreeMainCategory datasrc", datasrc);
  // console.log("TreeMainCategory otherattr", otherattr);

  // const [selectedId, setSelectedId] = useState<number>(-1);

  // console.log("data", data);

  return (
    <ul className={` ${customClassName} `} style={{ ...customStyle }}>
      {data.map((item: any, index: number) => {
        const selected = selectedId === item.id;

        return (
          <span key={index}>
            <TreeItem
              key={index}
              item={item}
              positionConfig={positionConfig}
              customClassName={`rounded-2xl bg-white py-3 px-5  mb-4 ${
                selected
                  ? "bg-gradient-to-br from-sso to-sso-gradientfinish border-0"
                  : "border border-gray-300"
              } animate-fade-in-down`}
              selected={selected}
              onClick={(e: any) => {
                e.preventDefault();
                setData([
                  ...data.slice(0, index),
                  { ...data[index], isOpen: !data[index].isOpen },
                  ...data.slice(index + 1),
                ]);
                setSelectedId(item.id);
              }}
            />
            {/* {!_.isEmpty(item?.children) && openItem === item.id && ( */}
            {!_.isEmpty(item?.children) && data[index].isOpen && (
              <>
                <TreeMainCategory
                  config={config}
                  datasrc={item?.children}
                  otherattr={otherattr}
                  customClassName={`ml-${indent}`}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  indent={indent}
                />
                {/* bg-gradient-to-br from-sso to-sso-gradientfinish  text-pink-800 ml-3; */}
              </>
            )}
          </span>
        );
      })}
    </ul>
  );
};

export default TreeMainCategory;

type PropsTypeItem = {
  item: any;
  positionConfig: any;
  customClassName?: string;
  selected: boolean;
  onClick?: any;
};

const TreeItem: FC<PropsTypeItem> = ({
  item,
  positionConfig,
  customClassName,
  selected,
  onClick,
}) => {
  // console.log("item", item);

  return (
    <li
      className={`flex w-full justify-between text-gray-800  leading-none cursor-pointer items-center py-3 px-4 ${customClassName}`}
      onClick={onClick}
    >
      <AtomText
        item={renderPositionType(item, "position1", positionConfig)}
        customClassName={`text-sm ml-2 ${
          selected ? "text-white font-semibold" : "text-gray-800"
        }`}
      />
      {!item.isLeaf && (
        <AtomIcon
          item={`far fa-chevron-${item.isOpen ? "down" : "right"} ${
            selected ? "text-white" : "text-gray-800"
          }`}
        />
      )}
    </li>
  );
};
