import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import { Tree } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { DirectoryTree, TreeNode } = Tree;

type PropsType = {
  item?: any;
  selectedKeys?: Array<string | number>;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeTree: FC<PropsType> = ({
  item: readyDatasrc,
  selectedKeys,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("🚀 ~ readyDatasrc", readyDatasrc);

  const onSelect = (keys: React.Key[], info: any) => {
    console.log("Trigger Select", keys, info);
  };

  const onExpand = () => {
    console.log("Trigger Expand");
  };

  return (
    <BlockDiv divNumber={`${divNamePrefix}divMoleculeTreeOuter`}>
      <DirectoryTree
        className="bg-transparent"
        multiple
        onSelect={onSelect}
        onExpand={onExpand}
        showIcon={false}
        switcherIcon={<DownOutlined />}
        defaultSelectedKeys={selectedKeys}
        defaultExpandedKeys={selectedKeys}
      >
        {renderTreeNodes(readyDatasrc)}
      </DirectoryTree>
    </BlockDiv>
  );
};

export default MoleculeTree;

/* ------------------------------------------------------ */
/*                     RENDERTREENODES                    */
/* ------------------------------------------------------ */

const renderTreeNodes = (readyDatasrc: any) => {
  return readyDatasrc.map((item: any) => {
    if (item.children) {
      return (
        <TreeNode
          title={
            <RenderAtom
              item={item.position1}
              defaultAtom="text"
              customClassName="inline-block leading-none ml-2"
            />
          }
          key={item.key}
          isLeaf={item.isLeaf}
          icon={item.icon}
        >
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return (
      <TreeNode
        {...item}
        title={
          <RenderAtom
            item={item.position1}
            defaultAtom="text"
            customClassName="inline-block leading-none ml-2"
          />
        }
        key={item.key}
        isLeaf={item.isLeaf}
        icon={item.icon}
        dataRef={item}
      />
    );
  });
};
