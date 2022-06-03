import { FC, useState } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
  item: string;
  type?:
    | "primary"
    | "primary-white"
    | "primary-border"
    | "blank"
    | "dashed"
    | "dotted"
    | "text"
    | "link"
    | "icon";
  icon?: string;
  color?: string;
  checked?: boolean;
  onClick?: any;
  customClassName?: string;
  customStyle?: object;
  sample?: boolean;
};

const AtomTitle: FC<PropsType> = ({
  item,
  type = "primary",
  icon = null,
  color = "sso",
  checked = false,
  onClick = null,
  customStyle = {},
  customClassName = "",
  sample = false,
}) => {
  let bg = `bg-${color}`;
  let border = `border-0`;
  let hover = ``;
  let text = ``;

  switch (type) {
    case "primary":
      bg = `bg-${color}`;
      border = `border-0`;
      text = `text-white`;
      hover = `hover:bg-${color}-dark`;
      break;
    case "primary-white":
      bg = `bg-white`;
      border = `border-0`;
      text = `text-${color}`;
      hover = `hover:bg-${color} hover:text-white`;
      break;
    case "primary-border":
      bg = `bg-white`;
      border = `border border-${color}`;
      text = `text-${color}`;
      hover = `hover:bg-${color} hover:text-white hover:border-0`;
      break;
    case "blank":
      bg = `bg-transparent`;
      border = `border border-solid`;
      hover = `hover:text-${color} hover:border-${color}`;
      break;
    case "dashed":
      bg = `bg-transparent`;
      border = `border border-dashed`;
      hover = `hover:text-${color} hover:border-${color}`;
      break;
    case "dotted":
      bg = `bg-transparent`;
      border = `border border-dotted`;
      hover = `hover:text-${color} hover:border-${color}`;
      break;
    case "text":
      bg = `bg-transparent`;
      border = `border-0`;
      hover = `hover:bg-gray-100`;
      break;
    case "link":
      bg = `bg-transparent`;
      border = `border-0`;
      hover = `hover:text-${color}`;
      break;
    case "icon":
      bg = `bg-transparent`;
      border = `border-0`;
      hover = `hover:text-${color}`;
      break;
    default:
      break;
  }

  const buttonClassName = `${text} ${border} py-2 px-4 ${bg} ${hover}`;

  return (
    <button
      className={`flex items-center justify-center transition-colors duration-300 focus:shadow-outline ${buttonClassName} ${customClassName}`}
      style={{ ...customStyle }}
      onClick={(e) => {
        e.preventDefault();
        onClick && onClick(e);
      }}
    >
      {icon && <i className={`${icon} ${!isEmpty(item) && "mr-3"}`}></i>}
      {item && <span>{item}</span>}
    </button>
  );
};

export default AtomTitle;
