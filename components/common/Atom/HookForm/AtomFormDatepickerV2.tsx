import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import { DatePicker } from "antd";
import { Controller } from "react-hook-form";
import moment from "moment";

type PropsType = {
  input?: any;
  validation?: any;
  fieldName: string;
  register: any;
  errors: any;
  control: any;
};

const AtomFormDatepickerV2: FC<PropsType> = ({
  input = {},
  validation = {},
  fieldName,
  register,
  errors,
  control,
}) => {
  return (
    <Controller
      control={control}
      name={fieldName}
      rules={validation}
      render={({ field }) => {
        const myValueProp = field.value ? { value: moment(field.value) } : {};
        return (
          <DatePicker
            className="w-full z-10"
            {...myValueProp}
            showToday
            allowClear
            placeholder="Өдрөө сонгоно уу"
            onChange={(date, dateString) => field.onChange(dateString)}
          />
        );
      }}
    />
  );
};

export default AtomFormDatepickerV2;
