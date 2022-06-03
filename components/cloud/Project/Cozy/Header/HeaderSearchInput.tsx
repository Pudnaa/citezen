import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  type?: "default" | "modern";
  item: any;
  customClassName?: string;
  customStyle?: object;
};

const HeaderSearchInput: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
}) => {
  // console.log("HeaderSearchInput item", item);

  return (
    <BlockDiv
      divNumber="divHeaderSearchInput10"
      customClassName="w-full relative flex flex-col max-w-lg"
    >
      {/* Зүүн талын Icon */}
      {/* <BlockDiv
        divNumber="HeaderSearchInputLeftBlock"
        customClassName="absolute flex items-center h-full bg-cozy text-white rounded-full rounded-br-none px-5"
      >
        <RenderAtom
          item={{ value: item.icon }}
          defaultAtom="icon"
          customClassName="text-xl"
        />
      </BlockDiv> */}

      {/* Баруун талын Icon */}
      <BlockDiv
        divNumber="HeaderSearchInputRightBlock"
        customClassName="absolute right-0 flex items-center h-full bg-cozy text-white rounded-full rounded-bl-none px-5"
      >
        <RenderAtom
          item={{ value: item.icon }}
          defaultAtom="icon"
          customClassName="text-xl"
        />
      </BlockDiv>
      <input
        className="focus:outline-none focus:border focus:border-gray-100 font-normal h-10 flex items-center px-5 pr-20 text-sm rounded-full w-full placeholder:text-gray-400"
        style={{ background: "#F5F5F5" }}
        placeholder="Хайх барааны нэрээ оруулна уу..."
      />
    </BlockDiv>
  );
};

export default HeaderSearchInput;
