import { FC } from "react";
import { isEmpty, replace } from "lodash";
import AtomLink from "./AtomLink";

type PropsType = {
  item: string;
  link?: string;
  checked?: boolean;
  color?: string;
  hoverSolid?: boolean;
  customClassName?: string;
  customStyle?: any;
  onClick?: any;
};

const AtomIcon: FC<PropsType> = ({
  item,
  link,
  checked = false,
  color = "citizen",
  hoverSolid = true,
  customClassName = "",
  customStyle,
  onClick,
}) => {
  if (isEmpty(item)) return null;

  let myIcon = item;
  if (hoverSolid && checked) {
    myIcon = replace(myIcon, "far", "fas");
    myIcon = replace(myIcon, "fal", "fas");
  }

  return (
    <AtomLink item={link}>
      <i
        className={`${myIcon} ${customClassName} ${
          checked && `text-${color}`
        } hover:text-${color} `}
        style={{ ...customStyle }}
        onClick={onClick}
      />
    </AtomLink>
  );
};

export default AtomIcon;
