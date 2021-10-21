import { useContext, useState } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  renderPositionType,
  parentidToChildren,
  listToTree,
  prepareIsOpen,
} from "util/helper";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { useCloud } from "hooks/use-cloud";

export default function SubMenu() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[otherattr?.listconfig?.fieldid || "id"]
    );

  if (_.isEmpty(datasrc)) return null;

  // console.log("SubMenu config", config);
  // console.log("SubMenu datasrc", datasrc);
  // console.log("SubMenu otherattr", otherattr);
  // console.log("SubMenu positionConfig", positionConfig);

  const readyDatasrc =
    prepareIsOpen(
      listToTree(datasrc, {
        idKey: otherattr?.listconfig?.fieldid || "id",
        parentKey: otherattr?.listconfig?.fieldparentid || "parentid",
        childrenKey: "children",
      }),
      selectedId,
      positionConfig
    )[0] || [];
  // console.log("🚀 ~ SubMenu ~ readyDatasrc", readyDatasrc);

  return (
    <>
      {/* <Title /> */}
      <div className="w-full flex justify-start flex-col pl-1 pr-3 py-5">
        <TreeMain
          datasrc={readyDatasrc}
          config={config}
          color={widgetDefault.color}
          otherattr={otherattr}
          customClassName=""
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          indent={5}
          onClickItem={(item: any) =>
            cloudContext.buildCloudURL(item, otherattr.link, true)
          }
        />
      </div>
    </>
  );
}