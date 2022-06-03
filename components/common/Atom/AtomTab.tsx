import { FC, useState } from "react";
import { isEmpty } from "lodash";
import Link from "next/link";

// const data = [
//   { title: "Нэвтрэх", icon: "" },
//   { title: "Бүртгүүлэх", icon: "" },
// ];

type PropsType = {
  data: [];
  pageIndex: number;
  setPageIndex: any;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
};

const AtomTab: FC<PropsType> = ({
  data,
  pageIndex,
  setPageIndex,
  onChange = null,
  customStyle = {},
  customClassName = "",
}) => {
  return (
    <ul className="flex space-x-8">
      {data.map((item: any, index: number) => {
        return (
          <TabItem
            key={item?.id || index}
            index={index}
            pageIndex={pageIndex}
            item={item}
            onClick={setPageIndex}
          />
        );
      })}
    </ul>
  );
};

export default AtomTab;

type TabItemPropsType = {
  index: number;
  pageIndex: number;
  item: any;
  onClick?: any;
  customStyle?: object;
  customClassName?: string;
};

const TabItem: FC<TabItemPropsType> = ({ index, pageIndex, item, onClick }) => {
  const defaultClassName =
    pageIndex == index
      ? "text-citizen flex flex-col justify-between border-citizen font-semibold"
      : "text-gray-600 pb-3  cursor-pointer hover:text-gray-800";

  return (
    <li
      onClick={() => onClick(index)}
      className={`text-sm font-normal ${defaultClassName}`}
    >
      <span className="mb-3 cursor-pointer px-4">{item.title}</span>
      {pageIndex == index && <div className="w-full h-0.5 bg-citizen" />}
    </li>
  );
};
