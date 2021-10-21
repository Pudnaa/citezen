import { FC, useState } from "react";
import { isEmpty } from "lodash";
import AtomIcon from "./AtomIcon";

type PropsType = {
  item: string;
  icon?: string;
  button?: any;
  value?: any;
  placeholder: string;
  color?: string;
  type: "text" | "password";
  checked?: boolean;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
  sample?: boolean;
};

const AtomInput: FC<PropsType> = ({
  item,
  icon = "",
  button = "",
  value,
  placeholder = "",
  color = "sso",
  type = "text",
  checked = false,
  onChange = null,
  customStyle = {},
  customClassName = "",
  sample = false,
}) => {
  const bg = `bg-${color}`;
  const border = `border-0`;
  const hover = ``;
  const text = ``;

  return (
    <div className={`relative ${customClassName} flex items-center`}>
      <AtomIcon
        item={icon}
        customClassName="absolute text-gray-500 flex items-center pl-4"
      />
      <input
        type={type ? type : "text"}
        className={`text-gray-600 border-0 focus:outline-none focus:ring-2 focus:ring-gray-200  focus:bg-white font-normal h-10 w-full flex items-center ${
          isEmpty(icon) ? "pl-5" : "pl-12"
        } text-sm bg-gray-100 rounded-full`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          onChange && onChange(e);
        }}
      />
    </div>
  );
};

export default AtomInput;
