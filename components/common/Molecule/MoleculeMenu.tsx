import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";

type PropsType = {
  type?: "default" | "modern";
  defaultActive?: number | string;
  item?: any;
  customClassName?: string;
  customStyle?: object;
  active?: any;
  divNamePrefix?: string;
};

//Тест

const MoleculeMenu: FC<PropsType> = ({
  type = "default",
  defaultActive = -1,
  item: menuList,
  customClassName = "",
  customStyle = {},
  active = {
    className: "border-b-2 border-cozy pb-2",
    style: { fontWeight: "700" },
  },
  divNamePrefix = "",
}) => {
  const { number, setNumber } = useNumber(Number(defaultActive));

  return (
    <BlockDiv
      customClassName={`flex flex-col ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}divMoleculeMenuOuter`}
    >
      {menuList.map((item: any, index: number) => {
        return (
          <RenderAtom
            key={item?.id || index}
            item={item?.position1}
            defaultAtom="title"
            divNamePrefix={divNamePrefix}
            customClassName={`cursor-pointer ${
              number === index ? active?.className || "" : ""
            }`}
            customStyle={number === index ? active?.style || {} : {}}
            onClick={() => setNumber(index)}
          />
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeMenu;
