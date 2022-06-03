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

const MoleculeListItem: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv divNumber="divMoleculeListItemOuter">
      <BlockDiv
        customClassName="w-full h-48 grid grid-cols-12 gap-6"
        divNumber={`${divNamePrefix}divMoleculeListItemInside`}
      >
        <BlockDiv
          customClassName="w-full h-full col-span-4"
          divNumber={`${divNamePrefix}divMoleculeListItemLeft`}
        >
          <RenderAtom
            item={item?.image}
            defaultAtom="image"
            customClassName="w-full h-full object-cover object-center"
            divNamePrefix={divNamePrefix}
          />
        </BlockDiv>
        <BlockDiv
          customClassName="w-full h-full col-span-6"
          divNumber={`${divNamePrefix}divMoleculeListItemCenter`}
        >
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
        </BlockDiv>

        <BlockDiv
          customClassName="w-full h-full col-span-2"
          divNumber={`${divNamePrefix}divMoleculeListItemRight`}
        >
          <RenderAtom
            item={item?.button}
            defaultAtom="button"
            divNamePrefix={divNamePrefix}
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeListItem;
