import { FC, useState } from "react";
import { isEmpty } from "lodash";
import AtomIcon from "./AtomIcon";
import { DatePicker } from "antd";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item?: string;
  icon?: string;
  button?: any;
  value?: any;
  placeholder?: string;
  color?: string;
  type?: any;
  checked?: boolean;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
  inputContainer?: any;
  iconContainer?: any;
  sample?: boolean;
};

const AtomDateAnt: FC<PropsType> = ({
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
  inputContainer = { customClassName: "" },
  iconContainer = { customClassName: "" },
  sample = false,
}) => {
  const bg = `bg-${color}`;
  const border = `border-0`;
  const hover = ``;
  const text = ``;

  /* ------------------------------------------------------ */
  /*              //ЭНЭ ДУТУУ ХИЙГДСЭН ATOM ШҮҮ             */
  /* ------------------------------------------------------ */

  return (
    <>
      <DatePicker
        bordered={false}
        allowClear={false}
        suffixIcon={null}
        // prevIcon={<i className="far fa-car" />}
      />
    </>
  );
};

export default AtomDateAnt;
