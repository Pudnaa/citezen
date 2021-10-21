import { FC } from "react";
import { isEmpty } from "lodash";

type PropsType = {
  id: number;
  item: string;
  checked?: boolean;
  color?: string;
  customClassName?: string;
  customStyle?: any;
  truncateRow?: number;
};

const AtomSwitch: FC<PropsType> = ({
  id,
  item,
  checked = false,
  color = "sso",
  customStyle,
  customClassName = "",
  truncateRow = 0,
}) => {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className="w-12 h-6 cursor-pointer rounded-full relative shadow-sm mr-5">
          <input
            defaultChecked={checked}
            type="checkbox"
            name="toggle"
            id={`toggle${id}`}
            className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
          />

          <label
            htmlFor={`toggle${id}`}
            className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full cursor-pointer"
          />
        </div>
        <div>
          <p className="text-sm text-gray-600 pb-4 font-normal mt-3">{item}</p>
        </div>
        <style>
          {`
          .checkbox:checked {
              right: 0;
          }
          .checkbox:checked + .toggle-label {
              background-color: #4c51bf;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default AtomSwitch;

{
  /* <div className="cursor-pointer my-5 rounded-full relative shadow-sm">
  <input
    type="checkbox"
    name="toggle"
    id="toggle1"
    className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
  />
  <label
    htmlFor="toggle1"
    className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
  />
</div>;
<div className="cursor-pointer my-5 w-12 h-6 rounded-full bg-indigo-700 relative shadow-sm">
  <input
    defaultChecked
    type="checkbox"
    name="toggle"
    id="toggle2"
    className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer"
  />
  <label
    htmlFor="toggle2"
    className="toggle-label dark:bg-gray-700 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
  />
</div>; */
}
