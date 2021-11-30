import { FC, useState, useRef, useEffect } from "react";
import Select from "react-select";
import { isEmpty } from "lodash";
import AtomIcon from "./AtomIcon";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  item: string;
  icon?: string;
  button?: any;
  value?: any;
  options?: any;
  placeholder: string;
  color?: string;
  type?: "default" | "compact";
  checked?: boolean;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
  arrowContainer?: any;
  optionContainer?: any;
  sample?: boolean;
};

const AtomDropdown: FC<PropsType> = ({
  item,
  icon = "",
  button = "",
  value,
  options = [],
  placeholder = "",
  color = "sso",
  type = "text",
  checked = false,
  onChange = null,
  customStyle = {},
  customClassName = "",
  arrowContainer = {
    customClassName: "",
    upArrow: { value: "fal fa-chevron-up", customClassName: "" },
    downArrow: { value: "fal fa-chevron-down", customClassName: "" },
  },
  optionContainer,
  sample = false,
}) => {
  const bg = `bg-${color}`;
  const border = `border-0`;
  const hover = ``;
  const text = ``;

  const [isList, setIsList] = useState(false);
  const [show, setShow] = useState(true);

  //Гадуур хулгана дарсныг илрүүлэх зорилготой. Dropdown хураагдана.
  const componentRef = useRef();
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          // Гадуур хулгана дарсан байна.
          setShow(false);
        }
      }
    }
  }, []);

  return (
    <>
      <div
        className={overrideTailwindClasses(`relative ${customClassName}`)}
        ref={componentRef as any}
      >
        <div
          className="bg-white dark:bg-gray-800 flex justify-between border rounded w-full cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span className="px-3 py-3 text-gray-400 text-sm leading-3 tracking-normal font-normal">
            {placeholder}
          </span>
          <div
            className={overrideTailwindClasses(
              `flex items-center justify-center rounded-r border-l border-gray-300 w-12 ${arrowContainer?.customClassName}`
            )}
          >
            {show ? (
              <RenderAtom
                item={{ value: arrowContainer?.upArrow?.value }}
                defaultAtom="icon"
                customClassName={arrowContainer?.upArrow?.customClassName}
              />
            ) : (
              <RenderAtom
                item={{ value: arrowContainer?.downArrow?.value }}
                defaultAtom="icon"
                customClassName={arrowContainer?.downArrow?.customClassName}
              />
            )}
          </div>
        </div>
        {show && (
          <DropdownOptions
            options={options}
            optionContainer={optionContainer}
            setShow={setShow}
          />
        )}
      </div>
    </>
  );
};

type OptionPropsType = {
  options: any;
  optionContainer?: any;
  setShow: any;
};
const DropdownOptions: FC<OptionPropsType> = ({
  options,
  optionContainer = {},
  setShow,
}) => {
  return (
    // <ul className="visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 z-50 shadow rounded mt-2 py-1 w-full absolute">
    <ul
      className={overrideTailwindClasses(
        `transition duration-300 opacity-100 bg-white z-50 shadow-xl rounded mt-2 py-1 w-full absolute ${optionContainer?.customClassName}`
      )}
    >
      {options.map((item: any, index: number) => {
        return (
          <li
            key={index}
            className={overrideTailwindClasses(
              `cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 flex flex-row items-center ${optionContainer?.item?.customClassName}`
            )}
            onClick={() => {
              setShow(false);
            }}
          >
            <RenderAtom
              item={{ value: item.profilephoto }}
              defaultAtom="image"
              // customClassName={overrideTailwindClasses(
              //   `object-center object-cover w-7 h-7 rounded-lg ${optionContainer?.item?.mainimage?.customClassName}`
              // )}
              customClassName={`object-center object-cover w-7 h-7 rounded-lg ${optionContainer?.item?.mainimage?.customClassName}`}
            />
            <RenderAtom
              item={{ value: item.itemname }}
              defaultAtom="text"
              customClassName={`ml-3 font-normal ${optionContainer?.item?.title?.customClassName}`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AtomDropdown;
