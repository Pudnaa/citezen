import { FC } from "react";
import _ from "lodash";
import { Select } from "antd";
import { Controller } from "react-hook-form";

const { Option } = Select;

type PropsType = {
  item: any;
  input?: any;
  validation?: any;
  fieldName: string;
  register: any;
  errors: any;
  control: any;
};

const AtomFormSelectV2: FC<PropsType> = ({
  item,
  input = {},
  validation = {},
  fieldName,
  register,
  errors,
  control,
}) => {
  const myDataList = item?.rowsReady || [];

  return (
    <Controller
      control={control}
      name={fieldName}
      rules={validation}
      render={({ field }) => {
        return (
          <Select
            {...field}
            className="w-full z-10"
            allowClear
            placeholder="Сонгоно уу.."
          >
            {myDataList.map((item: any, index: number) => {
              return (
                <Option
                  key={item?.position0?.value || index}
                  value={item?.position0?.value}
                >
                  {item?.position1?.value || ""}
                </Option>
              );
            })}
          </Select>
        );
      }}
    />
  );
};

export default AtomFormSelectV2;
