import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";

type PropsType = {
  item: any;
  rows?: Array<any>;
  filterNemgoo?: any;
  type?: "default" | "modern";
  input?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterNumber: FC<PropsType> = ({
  item = {},
  rows = [],
  filterNemgoo = {},
  type = "default",
  input = { className: "", style: {} },
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("MoleculeFilterNumber ~ rows", rows);
  // console.log("MoleculeFilterNumber ~ item", item);
  // console.log("MoleculeFilterNumber ~ filterNemgoo", filterNemgoo);

  return (
    <BlockDiv
      customClassName={customClassName}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterNumberItemOuter`}
    >
      <input className={input?.className} style={input?.style} type="number" />
    </BlockDiv>
  );
};

export default MoleculeFilterNumber;
