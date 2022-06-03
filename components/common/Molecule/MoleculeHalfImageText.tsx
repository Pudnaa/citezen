import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import { AtomFade } from "@components/common/Atom";

type PropsType = {
  type?: "default" | "modern";
  item?: any;
  customClassName?: string;
  customStyle?: object;
  AtomFadeProps?: any;
  divNamePrefix?: string;
};

const MoleculeHalfImageText: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  AtomFadeProps = { opacityClass: "bg-opacity-0" },
  divNamePrefix = "",
}) => {
  return (
    <BlockDiv
      customClassName="w-full h-full relative flex"
      divNumber={`${divNamePrefix}divMoleculeHalfImageTextOuter`}
    >
      <BlockDiv
        customClassName={`w-1/2 order-1 ${item?.leftclass?.value || ""}`}
        divNumber={`${divNamePrefix}divposition25`}
      >
        <RenderAtom
          item={item?.image}
          defaultAtom="image"
          customClassName="w-full h-full object-cover object-center inset-0"
          divNamePrefix={divNamePrefix}
        />
      </BlockDiv>
      <BlockDiv
        customClassName={`w-1/2 order-2 ${item?.rightclass?.value || ""}`}
        divNumber={`${divNamePrefix}divposition27`}
      >
        <RenderAtom
          item={item?.title}
          defaultAtom="title"
          customClassName="text-center text-2xl"
          divNamePrefix={divNamePrefix}
        />
        <RenderAtom
          item={item?.description}
          defaultAtom="text"
          customClassName="text-center text-gray-700"
          divNamePrefix={divNamePrefix}
        />
        <RenderAtom
          item={item?.button}
          defaultAtom="button"
          divNamePrefix={divNamePrefix}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeHalfImageText;
