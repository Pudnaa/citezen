import { FC } from "react";
import { isEmpty } from "lodash";
import AtomLink from "./AtomLink";

type PropsType = {
  item: string;
  link?: string;
  color?: string;
  customStyle?: any;
  customClassName?: string;
  truncateRow?: number;
};

const AtomText: FC<PropsType> = ({
  item,
  link,
  color = "sso",
  customStyle,
  customClassName = "",
  truncateRow = 0,
}) => {
  if (isEmpty(item)) return null;

  return (
    <AtomLink item={link} color={color}>
      <span
        className={`${
          !customClassName.includes("text-") && "text-sm lg:text-base"
        }  ${customClassName}`}
        style={{
          ...customStyle,
        }}
      >
        <span className={`line-clamp-${truncateRow}`}>{item}</span>
      </span>
    </AtomLink>
  );
};

export default AtomText;
