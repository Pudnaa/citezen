import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import MoleculeFilter from "@components/common/Molecule/MoleculeFilter";
import _ from "lodash";

export default function UniversalFilter() {
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
  // console.log("🚀 ~ UniversalFilter ~ readyDatasrc", readyDatasrc);

  const myReadyDatasrc = readyDatasrc[0];
  // console.log("🚀 ~ UniversalFilter ~ myReadyDatasrc", myReadyDatasrc);
  const myList = _.orderBy(_.values(myReadyDatasrc.dtl), "ordernumber");
  // console.log("FILTER: --> ddd", myList);
  // console.log("FILTER: -->", _.pick(myList[2], ["ordernumber"]));

  // console.log("hahaha :>> ", _.mapValues(myList, "filternemgoo"));

  const normalisedUsers = myList.map((item) =>
    _.mapValues(item, (val) => {
      // console.log("dssss", val.fieldnemgoo);
      return "dfdfd";
    })
  );

  // console.log("normalisedUsers :>> ", normalisedUsers);

  return (
    <BlockDiv customClassName="w-full" divNumber="UniversalFilterOuter">
      <BlockDiv customClassName="" divNumber="UniversalFilterInner">
        {myList.map((item: any, index: number) => {
          return (
            <MoleculeFilter
              key={item?.id || index}
              item={item}
              customClassName="col-span-1"
              divNamePrefix="cozy"
            />
          );
        })}
      </BlockDiv>
    </BlockDiv>
  );
}
