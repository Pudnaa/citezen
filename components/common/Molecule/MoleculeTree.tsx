import { FC, useState, useMemo } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";
import { prepareIsOpen } from "util/helper";

type PropsType = {
  item?: any;
  selectedKeys?: Array<string | number>;
  defaultSelectedId?: string | number;
  type?: "separate" | "solid";
  customClassName?: string;
  customStyle?: object;
  positionConfig?: any;
  divNamePrefix?: string;
};

const MoleculeTree: FC<PropsType> = ({
  item,
  selectedKeys,
  defaultSelectedId,
  type = "separate",
  customClassName = "",
  customStyle = {},
  positionConfig,
  divNamePrefix = "",
}) => {
  const [readyDatasrc, setDatasrc] = useState<any>(item);

  const toggleIsOpen = (item: any, itemIndex: number) => {
    let tempArray = [...readyDatasrc];
    tempArray[itemIndex] = { ...item, isOpen: true };
    setDatasrc([...tempArray]);
    return null;
  };

  return (
    <BlockDiv>
      {readyDatasrc.map((item: any, index: number) => {
        if (!_.isEmpty(item.children) && item.isOpen) {
          return (
            <div className="ml-4 my-1" key={item?.id || index}>
              <TreeItem
                item={item}
                toggleIsOpen={toggleIsOpen}
                index={index}
                defaultSelectedId={defaultSelectedId}
                arrow={{ value: "far fa-chevron-down" }}
                type={type}
              />

              <MoleculeTree
                item={item.children}
                selectedKeys={selectedKeys}
                defaultSelectedId={defaultSelectedId}
                customClassName={customClassName}
                customStyle={customStyle}
                positionConfig={positionConfig}
                divNamePrefix={divNamePrefix}
                type={type}
              />
            </div>
          );
        }

        if (!_.isEmpty(item.children) && !item.isOpen) {
          return (
            <div className="ml-4 my-1" key={item?.id || index}>
              <TreeItem
                item={item}
                toggleIsOpen={toggleIsOpen}
                index={index}
                defaultSelectedId={defaultSelectedId}
                type={type}
                arrow={{ value: "far fa-chevron-right" }}
              />
            </div>
          );
        }

        return (
          <div className="ml-4 my-1 mr-4" key={item?.id || index}>
            <ItemTitle item={item} defaultSelectedId={defaultSelectedId} />
          </div>
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeTree;

type TreeItemPropsType = {
  item?: any;
  toggleIsOpen?: any;
  index?: number;
  defaultSelectedId?: number | string;
  arrow?: any;
  type?: any;
};

const TreeItem: FC<TreeItemPropsType> = ({
  item,
  toggleIsOpen,
  index,
  defaultSelectedId,
  arrow,
  type,
}) => {
  switch (type) {
    case "solid":
      return (
        <div className="">
          <ItemTitle
            item={item}
            defaultSelectedId={defaultSelectedId}
            customClassName="relative w-full"
          >
            <RenderAtom
              item={{ value: arrow?.value }}
              defaultAtom="icon"
              customClassName="inline-block absolute right-0"
            />
          </ItemTitle>
        </div>
      );

    case "separate":
      return (
        <div className="flex flex-row items-center justify-between gap-x-2">
          <ItemTitle item={item} defaultSelectedId={defaultSelectedId} />
          <RenderAtom
            item={{ value: arrow?.value }}
            defaultAtom="icon"
            customClassName="inline-block"
            onClick={() => toggleIsOpen(item, index)}
          />
        </div>
      );
  }

  return null;
};

type ItemTitlePropsType = {
  item?: any;
  defaultSelectedId?: string | number;
  customClassName?: string;
  children?: any;
};

const ItemTitle: FC<ItemTitlePropsType> = ({
  item,
  defaultSelectedId,
  customClassName,
  children,
}) => {
  return (
    <RenderAtom
      item={item.position1}
      defaultAtom="text"
      customClassName={`inline-block text-black hover:text-cozy ${
        defaultSelectedId === item.id ? "text-cozy font-medium" : ""
      } ${customClassName}`}
    >
      {children}
    </RenderAtom>
  );
};
