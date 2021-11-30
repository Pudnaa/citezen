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
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[otherattr?.listconfig?.fieldid || "id"],
  );
  const { SubMenu } = Menu;

  if (_.isEmpty(datasrc)) return null;

  // console.log("SubMenu config", config);
  // console.log("SubMenu datasrc", datasrc);
  // console.log("SubMenu otherattr", otherattr);
  // console.log("SubMenu positionConfig", positionConfig);

  const readyDatasrc: any =
    prepareIsOpen(
      listToTree(datasrc, {
        idKey: otherattr?.listconfig?.fieldid || "id",
        parentKey: otherattr?.listconfig?.fieldparentid || "parentid",
        childrenKey: "children",
      }),
      selectedId,
      positionConfig,
    )[0] || [];
  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, otherattr.link, true);
    cloudContext.buildCloudURL(item, otherattr.link, true);
  };
  return (
    <>
      {/* <Title /> */}
      <div className="w-full flex justify-start flex-col">
        {/* <TreeMain
          rawDatasrc={readyDatasrc}
          config={config}
          color={widgetAllaround.color}
          otherattr={otherattr}
          customClassName=""
          defaultSelectedId={selectedId}
          indent={5}
          onClickItem={(item: any) =>
            cloudContext.buildCloudURL(item, otherattr.link, true)
          }
        /> */}
        {/* <Menu mode="inline">
          {readyDatasrc.map((item: any, index: number) => {
            const withChildren: any = item?.children;
            if (_.isEmpty(item?.children)) {
              return (
                <Menu.Item key={index} onClick={(e: any) => handleClick(item)}>
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
