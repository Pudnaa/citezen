import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import _ from "lodash";
import { Select } from "antd";

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

const MoleculeFilterCombo: FC<PropsType> = ({
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
      customClassName={`w-full relative flex flex-col ${customClassName}`}
      customStyle={customStyle}
      divNumber={`${divNamePrefix}MoleculeFilterComboItemOuter`}
    >
      <Select
        onChange={onChangeLocal}
        defaultValue={defaultValues[columnName]}
        allowClear
      >
        {rows.map((item: any, index: number) => {
          return (
            <Select.Option
              key={item?.id || index}
              value={item?.position0.value}
            >
              <RenderAtom
                item={item?.position1}
                defaultAtom="text"
                divNamePrefix={divNamePrefix}
              />
            </Select.Option>
          );
        })}
      </Select>
    </BlockDiv>
  );
};

export default MoleculeFilterCombo;
