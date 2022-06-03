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
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("VerticalNavigation config", config);
  // console.log("VerticalNavigation readyDatasrc", readyDatasrc);
  // console.log("VerticalNavigation widgetnemgooReady", widgetnemgooReady);

  let treeData = [...readyDatasrc];
  treeData.map((item, index) => {
    treeData[index].title = item.title;
    treeData[index].key = item.id;
    treeData[index].isLeaf = false;
    treeData[index].isOpen = false;
    treeData[index].isSelected = false;
  });

  const readyDatasrc1 = parentidToChildren(treeData);
  // console.log("readyDatasrc", readyDatasrc);

  const [selectedId, setSelectedId] = useState(-1);

  return (
    <>
      <div className="w-full flex flex-col justify-between">
        <div className="overflow-y-auto">
          <TreeMainCategory
            readyDatasrc={readyDatasrc1}
            config={config}
            widgetnemgooReady={widgetnemgooReady}
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
