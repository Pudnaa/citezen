import { FC } from "react";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
  color?: string;
  opacityClass?: string;
  customClassName?: string;
  customStyle?: any;
  customDivNumber?: string;
  divNamePrefix?: string;
};

const AtomFade: FC<PropsType> = ({
  color = "black",
  opacityClass = "bg-opacity-30",
  customClassName = "",
  customStyle,
  customDivNumber = "DivFade",
  divNamePrefix = "",
  ...props
}) => {
  return (
    <BlockDiv
      customClassName={`absolute w-full h-full inset-0 ${customClassName} bg-${color} ${opacityClass}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}${customDivNumber}`}
    />
  );
};

export default AtomFade;
