import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";
import { Controller } from "react-hook-form";

type PropsType = {
  control: any;
  fieldName: string;
  defaultValue?: any;
  title?: string;
  active?: any;
  normal?: any;
};

const AtomFormCheckButtonV2: FC<PropsType> = ({
  control,
  fieldName,
  defaultValue,
  title,
  active = { className: "", style: {} },
  normal = { className: "", style: {} },
}) => {
  const myActive = {
    className: overrideTailwindClasses(
      `bg-cozy text-white ${active.className || ""}`
    ),
    style: active?.style,
  };

  const myNormal = {
    className: overrideTailwindClasses(
      `border border-gray-300 ${normal?.className || ""}`
    ),
    style: normal?.style,
  };

  return (
    <Controller
      control={control}
      name={fieldName}
      render={({ field }) => {
        const myValue = defaultValue;
        const isActive = field.value === myValue;
        return (
          <button
            className={`${
              isActive ? myActive?.className : myNormal?.className
            } w-full h-8 rounded-lg cursor-pointer`}
            style={{ height: "43px" }}
            onClick={() => {
              field.onChange(myValue);
            }}
          >
            {title}
          </button>
        );
      }}
    />
  );
};

export default AtomFormCheckButtonV2;
