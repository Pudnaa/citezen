import { FC, useState } from "react";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import useNumber from "@customhook/useNumber";

type PropsType = {
  type?: "default" | "modern";
  item: Array<any>;
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeTab: FC<PropsType> = ({
  type = "default",
  item: myList,
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const { number, setNumber } = useNumber(0, 0);

  const normalTabClassName = "text-[#3C3C3C]";
  const activeTabClassName =
    "font-bold border-b-2 border-solid border-cozy text-cozy";

  return (
    <BlockDiv divNumber={`${divNamePrefix}MoleculeTabOuter`}>
      <BlockDiv divNumber={`${divNamePrefix}MoleculeTabInner`}>
        <BlockDiv
          customClassName="flex flex-row gap-x-7 w-full border-b border-gray-100 border-solid"
          divNumber="MoleculeTabHeaderBlock"
        >
          {myList.map((item: any, index: number) => {
            return (
              <BlockDiv
                key={item?.id || index}
                customClassName={`cursor-pointer`}
                divNumber="MoleculeTabTitleBlock"
                onClick={() => {
                  setNumber(index);
                }}
              >
                <RenderAtom
                  item={{ value: item.title }}
                  defaultAtom="title"
                  customClassName={`pb-3 ${
                    number === index ? activeTabClassName : normalTabClassName
                  }`}
                />
              </BlockDiv>
            );
          })}
        </BlockDiv>

        <BlockDiv
          customClassName="py-5 rounded-b-xl"
          divNumber="MoleculeTabBodyBlock"
        >
          {myList[number].content}
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  );
};

export default MoleculeTab;
