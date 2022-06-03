import { FC, useState } from "react";
import { overrideTailwindClasses } from "tailwind-override";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import useToggle from "@customhook/useToggle";
import useNumber from "@customhook/useNumber";
import _ from "lodash";

type PropsType = {
  item: any;
  rows?: Array<any>;
  filterNemgoo?: any;
  defaultValues?: any;
  onChange?: any;
  type?: "default" | "modern";
  customClassName?: string;
  customStyle?: object;
  divNamePrefix?: string;
};

const MoleculeFilterRadioboxColor: FC<PropsType> = ({
  item = {},
  rows = [],
  filterNemgoo = {},
  defaultValues,
  onChange,
  type = "default",
  customClassName = "",
  customStyle = {},
  divNamePrefix = "",
}) => {
  const columnName = `dvc${item.columnname}`;
  const { number, setNumber } = useNumber(-1, 0, rows.length);
  const normalClassName = "border-0";
  const activeClassName = "border-2 border-gray-500";

  const onChangeLocal = (value: any) => {
    onChange({
      [columnName]:
        !_.isEmpty(value) && defaultValues[columnName] != value
          ? value
          : "removeIt",
    });
  };

  return (
    <BlockDiv
      customClassName={`w-full flex flex-wrap gap-1 ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterRadioboxColorOuter`}
    >
      {rows.map((item: any, index: number) => {
        const active = defaultValues[columnName] == item.position0.value;
        return (
          <BlockDiv
            key={item?.position0.value}
            customClassName={`w-12 h-7 block flex items-center justify-center hover:p-0 ${
              active ? "p-0" : "p-0.5"
            }`}
            onClick={() => {
              setNumber(index);
              onChangeLocal(item?.position0.value);
            }}
          >
            <div
              className={`w-full h-full cursor-pointer rounded-full ${
                active ? activeClassName : normalClassName
              }`}
              style={{ backgroundColor: item?.value }}
            />
          </BlockDiv>
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeFilterRadioboxColor;
