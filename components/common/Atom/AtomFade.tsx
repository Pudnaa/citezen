import { FC } from "react";
import { isEmpty, replace } from "lodash";
import AtomLink from "./AtomLink";

type PropsType = {
  color?: string;
  opacityClass?: string;
  customClassName?: string;
  customStyle?: any;
};

const AtomFade: FC<PropsType> = ({
  color = "black",
  opacityClass = "bg-opacity-30",
  customClassName = "",
  customStyle,
}) => {
  return (
    <>
      <div
        className={`absolute w-full h-full inset-0 ${customClassName} bg-${color} ${opacityClass}`}
        style={{ ...customStyle }}
      ></div>
    </>
  );
};

export default AtomFade;
