import { useContext, useState } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { AtomImage } from "@components/common/Atom";
import { listToTree, prepareIsOpen } from "util/helper";
import { Modal, Menu, Tooltip } from "antd";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomSearch,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { decode } from "html-entities";
import parseHtml from "html-react-parser";
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function ThreeMenu() {
  const {
    config,
    datasrc,
    readyDatasrc,
    otherattr,
    widgetnemgoo,
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
  const [openKeys, setOpenKeys] = useState<any>();
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState("");
  const onOpenChange = () => {
    setOpenKeys("");
  };

  if (_.isEmpty(datasrc)) return null;

  const { SubMenu } = Menu;
  const showModal = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setVisible(false);
  };
  // console.log("SubMenu config", config);
  // console.log("SubMenu datasrc", datasrc);
  // console.log("SubMenu otherattr", otherattr);
  // console.log("SubMenu positionConfig", positionConfig.position1.otherattr);

  const treeReadyDatasrc: any =
    prepareIsOpen(
      listToTree(readyDatasrc, {
        idKey: widgetnemgoo?.listconfig?.fieldid || "id",
        parentKey: widgetnemgoo?.listconfig?.fieldparentid || "parentid",
        childrenKey: "children",
      }),
      selectedId,
      positionConfig,
    )[0] || [];
  const [show, setShow] = useState(null);
  // console.log("treeReadyDatasrc", treeReadyDatasrc);
  const handleClick = (item: any) => {
    // console.log("handleClick", item.item, otherattr.link, true);
    cloudContext.buildCloudURL(item, otherattr.link, true);
  };
  return (
    <>
      {/* <Title /> */}
      {/* <div className=' relative bg-gray-100'> */}
      <div className="h-screen  fixed ">
        <div className="border-b border-gray-300 mb-2  z-10  top-0">
          <nav className="w-full  hidden xl:block   ">
            <div className="container px-4 h-16 flex justify-items-stretch items-center lg:items-stretch mx-auto">
              <div className="flex items-center relative w-full">
                <div className="mr-10 flex items-center">
                  <AtomImage
                    item="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
                    customClassName="w-36"
                    link="#"
                  />
                </div>
                <div className="absolute right-px">
                  <AtomSearch item={datasrc} />
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="h-5/6 overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full">
          <div className="w-full flex justify-start flex-col  p-2 pr-4">
            {/* <TreeMain
              rawDatasrc={readyDatasrc}
              config={config}
              color={widgetAllaround.color}
              otherattr={otherattr}
              customClassName="w-96"
              defaultSelectedId={selectedId}
              indent={5}
              onClickItem={(item: any) =>
                cloudContext.buildCloudURL(item, otherattr.link, true)
              }
            /> */}

            <Menu
              mode="inline"
              className="relative w-96 md:w-96 sm:w-full"
              openKeys={openKeys}
              defaultSelectedKeys={[selectedId]}
              // onOpenChange={onOpenChange}
            >
              {treeReadyDatasrc.map((item: any, index: number) => {
                const withChildren: any = item?.children;

                if (_.isEmpty(item?.children)) {
                  return (
                    // <Menu.Item key={index} onClick={(e: any) => handleClick(item)}>

                    <Menu.Item key={index}>
                      <span className="flex flex-row justify-between">
                        <RenderAtom
                          item={item.position1}
                          defaultAtom="text"
                          customClassName="leading-3"
                        />
                        <RenderAtom item={item.position4} defaultAtom="text" />
                      </span>
                    </Menu.Item>
                  );
                } else {
                  return (
                    <SubMenu
                      key={`sub-${index}`}
                      title={parseHtml(decode(item.name))}
                      className="text-base w-full bg-transparent "
                    >
                      {withChildren.map((item: any, subindex: number) => {
                        return (
                          <Menu.Item
                            // onClick={(e: any) => handleClick(item)}
                            className="whitespace-pre-wrap bg-transparent leading-3 hover:bg-gray-100"
                            key={"sub-" + subindex}
                          >
                            {/* {item.itemcategoryname} */}
                            <span className="flex flex-row justify-between">
                              <RenderAtom
                                item={item.position1}
                                defaultAtom="text"
                                customClassName="leading-3"
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
            </Menu>
            <style>
              {`
               .ant-menu-sub.ant-menu-inline {
                background: transparent !important;
               }
               .ant-menu-vertical > .ant-menu-item, .ant-menu-vertical-left > .ant-menu-item, .ant-menu-vertical-right > .ant-menu-item, .ant-menu-inline > .ant-menu-item, .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-left > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-vertical-right > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
                height: auto !important;
                line-height: inherit;
            }
                `}
            </style>
          </div>
        </div>
        <div className="pl-6 pt-6 text-gray-800 font-semibold  text-2xl pb-2">
          Powered By: Veritech ERP
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
