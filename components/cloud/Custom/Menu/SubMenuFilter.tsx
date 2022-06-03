import { useContext, useState } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { listToTree, prepareIsOpen } from "util/helper";
import { Layout, Menu, Breadcrumb } from "antd";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useCloud } from "hooks/use-cloud";

export default function SubMenuFilter() {
  const { readyDatasrc, widgetnemgooReady, positionConfig } =
    useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || "id"]
  );
  const { SubMenu } = Menu;

  if (_.isEmpty(readyDatasrc)) return null;

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

  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, widgetnemgooReady.link, true);
    cloudContext.buildCloudURL(item, widgetnemgooReady.link, true);
  };
  return (
    <>
      <div className="w-full flex justify-start flex-col">
        <p className="text-lg">{widgetnemgooReady?.title}</p>
        <Menu mode="inline" style={{ borderRight: "none", marginTop: 20 }}>
          <Menu.Item key={0} style={{ paddingLeft: 0 }}>
            <span className="flex flex-row justify-start">
              <RenderAtom
                item={`https://play-lh.googleusercontent.com/9tUBesUsI4UIkpgO1MPIMLFvhDa_4vZE75TrVAUHFA7a0bJ7IIgeyh2r1QXs9VlmXmkX`}
                customClassName="w-7 rounded-lg"
                defaultAtom="image"
              />
              <RenderAtom
                item={{ value: `Голомт банк` }}
                defaultAtom="text"
                customClassName="ml-3 mt-1 text-sm"
              />
            </span>
          </Menu.Item>
          <Menu.Item key={1} style={{ paddingLeft: 0 }}>
            <span className="flex flex-row justify-start">
              <RenderAtom
                item={`https://mongolianballet.mn/wp-content/uploads/2021/02/1519906734422.png`}
                customClassName="w-7 rounded-lg"
                defaultAtom="image"
              />
              <RenderAtom
                item={{ value: `Хаан банк` }}
                defaultAtom="text"
                customClassName="ml-3 mt-1 text-sm"
              />
            </span>
          </Menu.Item>
        </Menu>
        {/* <Menu mode="inline" style={{ borderRight: "none" }}>
          {treereadyDatasrc.map((item: any, index: number) => {
            const withChildren: any = item?.children;
            if (_.isEmpty(item?.children)) {
              return (
                <Menu.Item key={item?.id || index}>
                  <span className="flex flex-row justify-between">
                    <RenderAtom
                      item={`https://play-lh.googleusercontent.com/9tUBesUsI4UIkpgO1MPIMLFvhDa_4vZE75TrVAUHFA7a0bJ7IIgeyh2r1QXs9VlmXmkX`}
                      defaultAtom="image"
                    />
                    <RenderAtom item={`12`} defaultAtom="text" />
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
                            item={`https://play-lh.googleusercontent.com/9tUBesUsI4UIkpgO1MPIMLFvhDa_4vZE75TrVAUHFA7a0bJ7IIgeyh2r1QXs9VlmXmkX`}
                            defaultAtom="image"
                          />
                          <RenderAtom item={`12`} defaultAtom="text" />
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
    </>
  );
}
