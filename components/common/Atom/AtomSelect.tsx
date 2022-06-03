import { FC, useState, useRef, useEffect } from "react";
import _ from "lodash";
import { toBoolean } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { AtomInput } from "@components/common/Atom";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  options?: any;
  placeholder?: any;
  color?: string;
  type?: "default" | "compact";
  showArrow?: any;
  onChange?: any;
  customClassName?: string;
  customStyle?: object;
  arrowContainer?: any;
  optionContainer?: any;
  sample?: boolean;
};

const AtomDropdown: FC<PropsType> = ({
  options = [],
  placeholder = { value: "Сонгоно уу", className: "" },
  color = "sso",
  type = "default",
  showArrow = "1",
  onChange = null,
  customClassName = "",
  customStyle = {},
  arrowContainer = {
    customClassName: "",
    upArrow: { value: "fal fa-chevron-up", customClassName: "" },
    downArrow: { value: "fal fa-chevron-down", customClassName: "" },
  },
  optionContainer,
  sample = false,
}) => {
  const [show, setShow] = useState(false);

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
          className="bg-white flex items-center justify-between border rounded w-full cursor-pointer h-10"
          onClick={() => setShow(!show)}
        >
          <AtomInput
            item=""
            value={undefined}
            placeholder="Та ямар хэрэгсэл захиалах вэ?"
            type="text"
            // customClassName="w-full bg-white border rounded h-10"
            customClassName=""
            inputContainer={{
              customClassName: `px-3 text-sm leading-3 tracking-normal font-normal border-0 ring-0 focus:ring-0 ${placeholder?.className}`,
            }}
          />
          {/* <RenderAtom
            item={{ value: placeholder?.value }}
            defaultAtom="text"
            customClassName={`px-3 py-3 text-gray-400 text-sm leading-3 tracking-normal font-normal ${placeholder?.className}`}
          /> */}

          {toBoolean(showArrow) && (
            <Arrow arrowContainer={arrowContainer} show={show} />
          )}
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

//#############################
//Arrow
type ArrowPropsType = {
  arrowContainer: any;
  show: boolean;
};

const Arrow: FC<ArrowPropsType> = ({ arrowContainer, show }) => {
  return (
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
  );
};

//#############################
//Options
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
        `transition duration-300 opacity-100 bg-white z-50 shadow-xl rounded mt-2 py-1 w-auto absolute ${optionContainer?.customClassName}`
      )}
    >
      {options.map((item: any, index: number) => {
        return (
          <li
            key={item?.id || index}
            className={overrideTailwindClasses(
              `cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 pl-3 pr-6 flex flex-row items-center ${optionContainer?.item?.customClassName}`
            )}
            onClick={() => {
              setShow(false);
            }}
          >
            <RenderAtom
              item={item.position2}
              defaultAtom="image"
              customClassName={`object-center object-cover w-7 h-7 rounded ${optionContainer?.item?.mainimage?.customClassName}`}
            />
            <RenderAtom
              item={item.position1}
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
