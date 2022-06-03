import { FC, useEffect } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useNumber from "@customhook/useNumber";
import useDidMountEffect from "util/useDidMountEffect";

type PropsType = {
  type?: "default" | "modern";
  item: any;
  customClassName?: string;
  customStyle?: object;
  onClick?: any;
  defaultValue?: string | number;
  minValue?: string | number;
  maxValue?: string | number;
  button?: any;
  divNamePrefix?: string;
};

const MoleculeButtonNumberBetween: FC<PropsType> = ({
  type = "default",
  item,
  customClassName = "",
  customStyle = {},
  onClick,
  defaultValue = "1",
  minValue,
  maxValue,
  button = {},
  divNamePrefix = "",
}) => {
  const { number, setNumber } = useNumber(
    Number(defaultValue),
    Number(minValue),
    Number(maxValue)
  );

  useDidMountEffect(() => {
    onClick(number);
  }, [number]);

  return (
    <BlockDiv
      divNumber={`${divNamePrefix}MoleculeButtonNumberBetweenOuter`}
      customClassName={`flex flex-row items-center justify-between rounded-full h-9 px-3 bg-cozy text-white ${customClassName}`}
      customStyle={customStyle}
    >
      <RenderAtom
        item={{ value: null }}
        defaultAtom="button"
        divNamePrefix={`${divNamePrefix}`}
        customClassName={`h-9 hover:bg-transparent px-0 ${button?.className}`}
        customStyle={button?.customStyle}
        customProps={{
          type: "text",
          color: "cozy",
          icon: `fas fa-minus text-white ${button?.icon?.className}`,
        }}
        onClick={() => {
          setNumber(number - 1);
        }}
      />
      <RenderAtom
        item={{ value: number.toString() }}
        defaultAtom="text"
        divNamePrefix={`${divNamePrefix}`}
        customClassName="block px-0"
        customStyle={{
          fontSize: "18px",
          lineHeight: "21px",
        }}
        customProps={{
          type: "text",
          color: "cozy",
        }}
      />
      <RenderAtom
        item={{ value: null }}
        defaultAtom="button"
        divNamePrefix={`${divNamePrefix}`}
        customClassName={`h-9 hover:bg-transparent px-0 ${button?.className}`}
        customStyle={button?.customStyle}
        customProps={{
          type: "text",
          color: "cozy",
          icon: `fas fa-plus text-white ${button?.icon?.className}`,
        }}
        onClick={() => {
          setNumber(number + 1);
        }}
      />
    </BlockDiv>
  );
};

export default MoleculeButtonNumberBetween;
