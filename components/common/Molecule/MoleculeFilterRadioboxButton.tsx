import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
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

const MoleculeFilterRadioboxButton: FC<PropsType> = ({
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
  const activeClassName = "bg-cozy text-white border-cozy";
  const normalClassName = "bg-transparent text-[#585858] border-gray-200";

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
      customClassName={`w-full flex flex-wrap gap-2 ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterRadioboxButtonOuter`}
    >
      {rows.map((item: any, index: number) => {
        const active = defaultValues[columnName] == item.position0.value;
        return (
          <RenderAtom
            key={item?.position0.value}
            item={item?.position1}
            defaultAtom="text"
            customClassName={`block px-3 py-0.5 cursor-pointer rounded-full border flex items-center hover:bg-cozy hover:text-white hover:border-cozy ${
              active ? activeClassName : normalClassName
            }`}
            divNamePrefix={divNamePrefix}
            onClick={() => {
              onChangeLocal(item?.position0.value);
            }}
          />
        );
      })}
    </BlockDiv>
  );
};

export default MoleculeFilterRadioboxButton;
