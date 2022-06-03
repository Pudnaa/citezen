import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";

type PropsType = {
  item: string;
  type?: "default" | "modern";
  input?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterDatetime: FC<PropsType> = ({
  item,
  type = "default",
  input = { className: "", style: {} },
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  // console.log("Filter Text ~ item", item);

  return (
    <BlockDiv
      customClassName={customClassName}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterDatetimeItemOuter`}
    >
      <input className={input?.className} style={input?.style} type="date" />
    </BlockDiv>
  );
};

export default MoleculeFilterDatetime;
