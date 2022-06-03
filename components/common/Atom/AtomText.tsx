import { FC } from "react";
import { isEmpty } from "lodash";
import AtomLink from "./AtomLink";

type PropsType = {
  item: any;
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
      <div
        className={`${
          !customClassName.includes("text-") ? "text-sm lg:text-base" : ""
        }  ${customClassName}`}
        style={{
          ...customStyle,
        }}
      >
        <span className={`line-clamp-${truncateRow}`}>{item}</span>
      </div>
    </AtomLink>
  );
};

export default AtomText;
