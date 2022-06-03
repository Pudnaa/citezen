import { useContext, useMemo } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@molecule/RenderMolecule";
import { parentidToChildren, prepareIsOpen } from "util/helper";

export default function UniversalTree() {
  const {
    config,
    readyDatasrc,
    paging,
    aggregatecolumns,
    defaultValue,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  // console.log("🚀 ~ UniversalTree ~ readyDatasrc", readyDatasrc);

  //Tree бүтцээр харуулахад Antd-ийн Tree нь заавал title, key гэсэн бүтэц шаарддаг. Түүнд бэлтгэв.
  readyDatasrc.map((item: any, index: number) => {
    readyDatasrc[index].title = item?.position1?.value;
    readyDatasrc[index].key = item?.position0?.value;
  });

  // console.log("DDDDDDDDDD", defaultValue.value);

  //ERP-аас parentid бүтэцтэй ирдэг, түүнийг children:[] бүтэцтэй болгоно.
  const readyDatasrc1 = parentidToChildren(readyDatasrc, "id", "parentid");
  const readyDatasrc2 = prepareIsOpen(
    readyDatasrc1,
    defaultValue.value,
    positionConfig,
    true
  )[0];

  return (
    <BlockDiv customClassName="w-full pl-4 py-4" divNumber="UniversalTreeOuter">
      <BlockDiv customClassName="w-full -ml-4" divNumber="UniversalTreeInner">
        <RenderMolecule
          moleculeConfig={{
            type: "MoleculeTree",
            className: "",
            props: {
              type: "solid",
            },
          }}
          {...{
            item: readyDatasrc2,
            selectedKeys: [defaultValue.value],
            defaultSelectedId: defaultValue.value,
            positionConfig: positionConfig,
            divNamePrefix: "tree",
          }}
        />

        <RenderAtom
          item={{
            value: "Бүгдийг харах",
            positionnemgoo: { url: { path: "/product" } },
          }}
          defaultAtom="text"
          customClassName="text-cozy mt-5 block float-right"
          divNamePrefix="seeAll"
        />
      </BlockDiv>
    </BlockDiv>
  );
}
