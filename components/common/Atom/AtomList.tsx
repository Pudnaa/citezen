import { FC } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

type PropsType = {
  list: [];
  type?: "primary" | "modern";
  link?: string;
  customClassName?: string;
  customStyle?: any;
  rowClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
  truncateRow?: number;
};

const AtomList: FC<PropsType> = ({
  list,
  type = "primary",
  link,
  customStyle,
  customClassName = "",
  rowClassName = "",
  labelClassName = "",
  valueClassName = "",
  truncateRow = 0,
}) => {
  return (
    <div className={` ${customClassName}`} style={customStyle}>
      {list.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className={`w-full my-1 flex flex-row items-center mb-3 ${rowClassName}`}
          >
            <div className={`w-5/12 text-gray-500 ${labelClassName}`}>
              {item.label}
            </div>
            <div className={`w-7/12 ${valueClassName}`}>{item.value}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AtomList;
