import { useContext, useState } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { listToTree, prepareIsOpen } from "util/helper";
import { Layout, Menu, Breadcrumb } from "antd";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function WeeklySubMenu1() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || "id"]
  );
  const { SubMenu } = Menu;

  if (_.isEmpty(readyDatasrc)) return null;

  // console.log("WeeklySubMenu config", config);
  console.log("WeeklySubMenu readyDatasrc", readyDatasrc);
  // console.log("🚀 ~ WeeklySubMenu ~ readyDatasrc", readyDatasrc);
  // console.log("WeeklySubMenu widgetnemgooReady", widgetnemgooReady);
  // console.log("WeeklySubMenu positionConfig", positionConfig);

  const treeReadyDatasrc: any =
    prepareIsOpen(
      listToTree(readyDatasrc, {
        idKey: widgetnemgooReady?.listconfig?.fieldid || "id",
        parentKey: widgetnemgooReady?.listconfig?.fieldparentid || "parentid",
        childrenKey: "children",
      }),
      selectedId,
      positionConfig
    )[0] || [];

  // console.log("🚀 ~ SubMenu ~ treeReadyDatasrc", treeReadyDatasrc);

  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, widgetnemgooReady.link, true);
    cloudContext.buildCloudURL(item, widgetnemgooReady.link, true);
  };
  return (
    <>
      <div className="w-full flex justify-start flex-col">
        {/* <TreeMain
          rawDatasrc={treeReadyDatasrc}
          config={config}
          color={widgetAllaround.color}
          widgetnemgooReady={widgetnemgooReady}
          customClassName=''
          defaultSelectedId={selectedId}
          indent={5}
          onClickItem={(item: any) =>
            cloudContext.buildCloudURL(item, widgetnemgooReady.link, true)
          }
        /> */}
        <Menu mode="inline">
          {treeReadyDatasrc.map((item: any, index: number) => {
            const withChildren: any = item?.children;
            if (_.isEmpty(item?.children)) {
              return (
                // <Menu.Item key={item?.id || index} onClick={(e: any) => handleClick(item)}>
                <Menu.Item key={item?.id || index}>
                  {/* {item.itemcategoryname} */}
                  <span className="flex flex-row justify-between">
                    <RenderAtom
                      item={item.position1}
                      defaultAtom="text"
                      customClassName="text-gray-500"
                    />
                    <RenderAtom
                      item={item.position4}
                      defaultAtom="icon"
                      customClassName=""
                    />
                  </span>
                </Menu.Item>
              );
            } else {
              return (
                <SubMenu key={`sub-${index}`} title={item.itemcategoryname}>
                  {withChildren.map((item: any, subindex: number) => {
                    return (
                      <Menu.Item
                        // onClick={(e: any) => handleClick(item)}
                        key={subindex}
                      >
                        {/* {item.itemcategoryname} */}
                        {/* <span className="flex flex-row justify-between">
                          <RenderAtom
                            item={item.position1}
                            defaultAtom="text"
                          />
                          <RenderAtom
                            item={item.position4}
                            defaultAtom="text"
                          />
                        </span> */}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu>
      </div>
    </>
  );
}
