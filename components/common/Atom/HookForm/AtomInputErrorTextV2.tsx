import { FC, useEffect } from "react";
import _ from "lodash";
import RenderAtom from "../RenderAtom";
import { useToggle } from "react-use";
// import AtomLinkV2 from "./AtomLinkV2";

type PropsType = {
  validation: any;
  errors: any;
  fieldName: string;
  customClassName?: string;
  customStyle?: any;
};

const AtomInputErrorTextV2: FC<PropsType> = ({
  validation,
  errors,
  fieldName,
  customClassName = "",
  customStyle,
}) => {
  const myError = _.get(errors, fieldName);
  if (_.isEmpty(myError)) return null;

  const [on, toggle] = useToggle(true);
  useEffect(() => {
    if (on === false) return null;

    setTimeout(function () {
      toggle(false);
    }, 3000);
  }, [on]);

  useEffect(() => {
    toggle(true);
  }, [myError]);

  return (
    <RenderAtom
      item={{ value: myError?.message }}
      defaultAtom="text"
      customClassName={`block absolute inset-x-0 text-pink-500  duration-500 ${customClassName} ${
        validation?.messageBlock?.className
      } ${on ? "-bottom opacity-100" : "opacity-0"}`}
      customStyle={customStyle}
    />
  );
};

export default AtomInputErrorTextV2;
