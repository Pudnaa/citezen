import { FC } from "react";
import _ from "lodash";
import { overrideTailwindClasses } from "tailwind-override";

type PropsType = {
  input?: any;
  validation?: any;
  fieldName: string;
  defaultValue?: any;
  register: any;
  errors: any;
};

const AtomFormInputV2: FC<PropsType> = ({
  input = {},
  validation = {},
  fieldName,
  defaultValue,
  register,
  errors,
}) => {
  return (
    <input
      type={input?.type || "text"}
      defaultValue={defaultValue}
      className={overrideTailwindClasses(
        `z-10 w-full rounded-lg border text-base py-1 px-2 focus:outline-none focus:ring-1 focus:ring-cozy focus:border-cozy ${
          input?.className || ""
        } ${
          errors?.[fieldName]
            ? input?.error?.className || "border-pink-500"
            : ""
        }`
      )}
      {...register(fieldName, { ...validation })}
    />
  );
};

export default AtomFormInputV2;
