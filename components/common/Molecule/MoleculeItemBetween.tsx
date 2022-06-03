import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  type?: "default" | "modern";
  item?: any;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

//Тест

const MoleculeItemBetween: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv divNumber="divMoleculeItemBetweenOuter">
      <BlockDiv
        customClassName="w-full flex flex-row items-center justify-between"
        divNumber={`${divNamePrefix}divMoleculeItemBetweenInside`}
      >
        <RenderAtom
          item={item?.first}
          defaultAtom="title"
          divNamePrefix={divNamePrefix}
        />
        <RenderAtom
          item={item?.second}
          defaultAtom="text"
          divNamePrefix={divNamePrefix}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeItemBetween;
