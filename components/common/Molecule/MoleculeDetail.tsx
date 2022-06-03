import { FC } from "react";
import { overrideTailwindClasses } from "tailwind-override";
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

const MoleculeDetail: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv divNumber={`${divNamePrefix}divMoleculeDetailOuter`}>
      <RenderAtom
        item={item?.image}
        defaultAtom="image"
        customClassName="w-full h-full object-cover object-center"
        divNamePrefix={divNamePrefix}
      />
      <RenderAtom
        item={item?.title}
        defaultAtom="title"
        divNamePrefix={divNamePrefix}
      />
      <RenderAtom
        item={item?.description}
        defaultAtom="text"
        divNamePrefix={divNamePrefix}
      />
      <RenderAtom
        item={item?.button}
        defaultAtom="button"
        divNamePrefix={divNamePrefix}
      />
    </BlockDiv>
  );
};

export default MoleculeDetail;
