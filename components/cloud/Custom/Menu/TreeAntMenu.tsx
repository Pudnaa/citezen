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
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function TreeAntMenu() {
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
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || "id"]
  );
  const { SubMenu } = Menu;

  if (_.isEmpty(readyDatasrc)) return null;

  // console.log("SubMenu config", config);
  // console.log("SubMenu readyDatasrc", readyDatasrc);
  // console.log("SubMenu widgetnemgooReady", widgetnemgooReady);
  // console.log("SubMenu positionConfig", positionConfig);

  const readyDatasrc1: any =
    prepareIsOpen(
      listToTree(readyDatasrc, {
        idKey: widgetnemgooReady?.listconfig?.fieldid || "id",
        parentKey: widgetnemgooReady?.listconfig?.fieldparentid || "parentid",
        childrenKey: "children",
      }),
      selectedId,
      positionConfig
    )[0] || [];
  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, widgetnemgooReady.link, true);
    cloudContext.buildCloudURL(item, widgetnemgooReady.link, true);
  };
  return (
    <>
      <div className="w-full flex justify-start flex-col">
        {/* <TreeMain
          rawDatasrc={readyDatasrc}
          config={config}
          color={widgetAllaround.color}
          widgetnemgooReady={widgetnemgooReady}
          customClassName=""
          defaultSelectedId={selectedId}
          indent={5}
          onClickItem={(item: any) =>
            cloudContext.buildCloudURL(item, widgetnemgooReady.link, true)
          }
        /> */}
        {/* <Menu mode="inline">
          {readyDatasrc.map((item: any, index: number) => {
            const withChildren: any = item?.children;
            if (_.isEmpty(item?.children)) {
              return (
                <Menu.Item key={item?.id || index} onClick={(e: any) => handleClick(item)}>
                  {item.itemcategoryname}
                </Menu.Item>
              );
            } else {
              return (
                <SubMenu key={`sub-${index}`} title={item.itemcategoryname}>
                  {withChildren.map((item: any, index: number) => {
                    return (
                      <Menu.Item
                        onClick={(e: any) => handleClick(item)}
                        key={`sub-${index}`}
                      >
                        {item.itemcategoryname}
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu> */}
      </div>
    </>
  );
}
