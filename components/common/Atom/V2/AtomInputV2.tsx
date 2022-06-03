import { FC } from "react";
import { isEmpty } from "lodash";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: any;
  placeholder?: string;
  color?: string;
  type?: any;
  formCustom?: any;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
  customDivNumber?: string;
  divNamePrefix?: string;
  sample?: boolean;
};

const AtomInputV2: FC<PropsType> = ({
  item,
  placeholder = "",
  color = "sso",
  type = "text",
  formCustom,
  onChange = () => {},
  customStyle = {},
  customClassName = "",
  customDivNumber = "DivInput",
  divNamePrefix = "",
  sample = false,
}) => {
  const bg = `bg-${color}`;
  const border = `border-0`;
  const hover = ``;
  const text = ``;

  return (
    <input
      type={type}
      className={overrideTailwindClasses(
        `w-full outline-none shadow-none focus:border-current  ${customClassName}`
      )}
      style={customStyle}
      placeholder={placeholder}
      defaultValue={item?.value}
      onChange={(e) => {
        e.preventDefault();
        onChange(e);
      }}
      {...formCustom}
    />
  );
};

export default AtomInputV2;
