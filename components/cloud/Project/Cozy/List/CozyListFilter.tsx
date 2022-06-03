import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";
import { parentidToChildren } from "util/helper";
import RenderMolecule from "@molecule/RenderMolecule";

export default function CozyListFilter() {
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

  const readyDatasrcOrder = _.orderBy(readyDatasrc, (item) =>
    parseInt(item?.ordernumber, 10)
  );

  const readyDatasrcChildren = parentidToChildren(
    readyDatasrcOrder,
    "id",
    "parentid"
  );

  return (
    <BlockDiv customClassName="w-full" divNumber="CozyListFilterOuter">
      <BlockDiv customClassName="w-full" divNumber="CozyListFilterInner">
        <RenderMolecule
          moleculeConfig={{
            type: "MoleculeFilter",
            className: "",
            props: {},
          }}
          {...{
            item: readyDatasrcChildren,
            divNamePrefix: "cozyfilter",
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
}
