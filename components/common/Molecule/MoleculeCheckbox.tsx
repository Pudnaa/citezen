import { FC, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useToggle from "@customhook/useToggle";
import _ from "lodash";

type PropsType = {
  item: Array<string | number>;
  type?: "default" | "modern";
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeCheckbox: FC<PropsType> = ({
  item,
  type = "default",
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const sizeClassName = "w-5 h-5";

  return (
    <BlockDiv
      customClassName={`w-full relative flex flex-col ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeCheckboxItemOuter`}
    >
      {item.map((item: any, index: number) => {
        return (
          <CheckboxItem
            key={item?.id || index}
            item={item}
            sizeClassName={sizeClassName}
            divNamePrefix={divNamePrefix}
          />
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeCheckbox;

/* ------------------------------------------------------ */
/*                      CHECKBOXITEM                      */
/* ------------------------------------------------------ */
const CheckboxItem = ({ item, sizeClassName, divNamePrefix }) => {
  const { toggle, setToggle } = useToggle(false);

  return (
    <div
      className="flex items-center p-1 cursor-pointer hover:bg-gray-50 rounded-md"
      onClick={() => setToggle(!toggle)}
    >
      {toggle ? (
        <RenderAtom
          item={{ value: "far fa-check" }}
          defaultAtom="icon"
          customClassName={`bg-cozy border-cozy text-white rounded-sm text-center ${sizeClassName}`}
          divNamePrefix={divNamePrefix}
        />
      ) : (
        <input
          type="checkbox"
          className={`border border-gray-200 rounded-sm ${sizeClassName}`}
        />
      )}

      <RenderAtom
        item={{ value: item.title }}
        defaultAtom="text"
        customClassName="ml-2"
        divNamePrefix={divNamePrefix}
      />
    </div>
  );
};
