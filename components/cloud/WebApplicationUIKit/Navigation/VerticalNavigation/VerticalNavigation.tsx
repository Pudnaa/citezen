import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { parentidToChildren } from "util/helper";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomButton,
} from "@components/common/Atom";
import TreeMainCategory from "@cloud/Custom/Tree/TreeMainCategory";

export default function VerticalNavigation() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  // console.log("VerticalNavigation config", config);
  // console.log("VerticalNavigation datasrc", datasrc);
  // console.log("VerticalNavigation otherattr", otherattr);

  let treeData = [...datasrc];
  treeData.map((item, index) => {
    treeData[index].title = item.title;
    treeData[index].key = item.id;
    treeData[index].isLeaf = false;
    treeData[index].isOpen = false;
    treeData[index].isSelected = false;
  });

  const readyDatasrc = parentidToChildren(treeData);
  // console.log("readyDatasrc", readyDatasrc);

  const [selectedId, setSelectedId] = useState(-1);

  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <div className="overflow-y-auto">
          <TreeMainCategory
            datasrc={readyDatasrc}
            config={config}
            otherattr={otherattr}
            customClassName="citizen-tree"
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            indent={16}
          />
        </div>
      </div>
    </>
  );
}
