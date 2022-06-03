import { FC, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  type?: "default" | "modern";
  item: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeButtonGroup: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv divNumber={`${divNamePrefix}divmoleculebuttongroup10`}>
      Энд Button Group гарна.
    </BlockDiv>
  );
};

export default MoleculeButtonGroup;
