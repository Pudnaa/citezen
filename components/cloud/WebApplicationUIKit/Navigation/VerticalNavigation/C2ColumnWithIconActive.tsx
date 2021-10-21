import { useState } from "react";

export default function C2ColumnWithIconActive() {
  const [show, setShow] = useState(true);
  return (
    <div className="bg-gray-50 bg-opacity-40 h-full z-20 p-4">
      <div className="w-full flex justify-center flex-col ">
        <div className="cursor-pointer h-8" onClick={() => setShow(!show)}>
          <i className="fal fa-bars" />
        </div>
        <ul aria-orientation="vertical" className="rounded pt-3">
          {data.map((item, index) => {
            return (
              <li key={index} className="cursor-pointer text-gray-700 text-sm leading-3 tracking-normal h-8 flex items-center hover:text-sso focus:text-sso focus:outline-none">
                <i className={`${item.icon} w-7`} />
                {show && (
                  <span className="ml-2 w-48 font-base">
                    {item.title}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

const data = [
  { title: "Үндсэн нүүр", icon: "far fa-home" },
  { title: "Статистик", icon: "far fa-chart-line" },
  { title: "Хувийн санхүү", icon: "far fa-piggy-bank" },
  { title: "Ажилтны үйлчилгээ", icon: "far fa-user-friends" },
  { title: "Сошиал", icon: "far fa-share-alt" },
  { title: "Цаг захиалга", icon: "far fa-clock" },
  { title: "Боловсрол", icon: "far fa-graduation-cap" },
];
