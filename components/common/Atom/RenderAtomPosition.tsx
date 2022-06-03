import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item?: any;
  customClassName?: any;
  customStyle?: any;
};

export const RenderAtomPosition: FC<PropsType> = ({
  item,
  customClassName = "",
  customStyle,
}) => {
  const className = overrideTailwindClasses(
    `border border-dashed border-gray-300 p-1 m-1 ${customClassName}`
  );

  return (
    <span className={className} style={customStyle}>
      {item?.value || "no-position!"}
    </span>
  );
};

export default RenderAtomPosition;
