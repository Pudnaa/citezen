import { useState } from "react";
import Link from "next/link";
// import MotoInputButton2 from "components/Moto/MotoSmalls/MotoInputButton2";
// import MotoCardInfo2 from "components/Moto/MotoSmalls/MotoCardInfo2";

export default function Menu1({
  data = [
    {
      title: "Онцгой",
    },
    {
      title: "Шинэ",
    },
    {
      title: "Хямдралтай",
    },
    {
      title: "Брэнд",
    },
  ],
  defaultClassName = "",
  defaultStyle = {},
}) {
  return (
    <div className="h-full flex items-center">
      <ul className="md:flex items-center h-full hidden">
        {data.map((item, index) => {
          return (
            <li key={index}>
              <a
                href="javascript:void(0)"
                className="focus:outline-none font-medium cursor-pointer h-full flex items-center text-sm mr-6 tracking-normal"
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
