import { FC } from "react";
import { isEmpty } from "lodash";

type PropsType = {
  item: number;
  link?: string;
  customStyle?: any;
  customClassName?: string;
};

const AtomNumber: FC<PropsType> = ({
  item,
  link,
  customStyle,
  customClassName,
}) => {
  if (isEmpty(item)) return null;

  return (
    <span
      className={`text-sm lg:text-base ${customClassName}`}
      style={{
        ...customStyle,
      }}
    >
      {item}
    </span>
  );
};

export default AtomNumber;
