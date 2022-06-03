import { FC } from "react";
import { isEmpty, replace } from "lodash";
import AtomLink from "./AtomLink";
import { spawn } from "child_process";

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
  // console.log("item icona *** ", item);
  let myIcon = item;
  //storage гэсэн замтай ирвэл өмнө нь домэйнийг залгаж өгөх ёстой.
  let icon = "";
  if (myIcon.startsWith("storage/")) {
    return (
      <img
        src={`https://dev.veritech.mn/${myIcon}`}
        alt="icon"
        width="16"
        height="14"
        className="absolute left-0 top-2 z-10"
      />
    );
  } else {
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
  }
};

export default AtomIcon;
