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

export default function SubMenu() {
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

  // console.log("SubMenu config", config);
  // console.log("SubMenu readyDatasrc", readyDatasrc);
  // console.log("🚀 ~ SubMenu ~ readyDatasrc", readyDatasrc);
  // console.log("SubMenu widgetnemgooReady", widgetnemgooReady);
  // console.log("SubMenu positionConfig", positionConfig);

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

  // console.log("🚀 ~ SubMenu ~ widgetnemgooReady", widgetnemgooReady);
  // console.log("🚀 ~ SubMenu ~ treeReadyDatasrc", treeReadyDatasrc);

  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, widgetnemgooReady.link, true);
    cloudContext.buildCloudURL(item, widgetnemgooReady.link, true);
  };
  return (
    <>
      <div className="shadow-lg p-4 h-screen rounded overflow-x-auto scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full">
        <p className="text-xl text-citizen-title ">Салбар</p>
        <div className=" w-full flex justify-start flex-col ">
          <TreeMain
            rawDatasrc={treeReadyDatasrc}
            color="citizen-blue"
            customClassName="w-full "
            defaultSelectedId={selectedId}
            indent={5}
          />
          {/* <Menu mode="inline">
						{treereadyDatasrc.map((item: any, index: number) => {
							const withChildren: any = item?.children;
							if (_.isEmpty(item?.children)) {
							return (
								<Menu.Item key={item?.id || index}>
								<span className="flex flex-row justify-between">
									<RenderAtom item={item.position1} defaultAtom="text" />
									<RenderAtom item={item.position4} defaultAtom="text" />
								</span>
								</Menu.Item>
							);
							} else {
							return (
								<SubMenu key={`sub-${index}`} title={item.itemcategoryname}>
								{withChildren.map((item: any, subindex: number) => {
									return (
									<Menu.Item
										key={subindex}
									>
										<span className="flex flex-row justify-between">
										<RenderAtom
											item={item.position1}
											defaultAtom="text"
										/>
										<RenderAtom
											item={item.position4}
											defaultAtom="text"
										/>
										</span>
									</Menu.Item>
									);
								})}
								</SubMenu>
							);
							}
						})}
					</Menu> */}
        </div>
      </div>
    </>
  );
}
