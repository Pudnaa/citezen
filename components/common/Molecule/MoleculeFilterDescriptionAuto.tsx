import { FC, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useToggle from "@customhook/useToggle";
import _ from "lodash";

type PropsType = {
  item: string;
  type?: "default" | "modern";
  input?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterDescriptionAuto: FC<PropsType> = ({
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
      divNumber={`${divNamePrefix}MoleculeFilterDescriptionAutoItemOuter`}
    >
      <textarea className={input?.className} style={input?.style} />
    </BlockDiv>
  );
};

export default MoleculeFilterDescriptionAuto;
