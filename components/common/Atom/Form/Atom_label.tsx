import React, { FC } from "react";

type PropsType = {
  labelName: string;
  labelFor?: string;
  isHideSeperator?: any;
  isrequired: string;
  styles: any;
  sectionConfig?: any;
  className: string;
};

const Atom_label: FC<PropsType> = ({
  labelName,
  isrequired,
  styles,
  labelFor,
  className,
  sectionConfig,
  isHideSeperator,
}) => {
  return (
    <>
      <label
        htmlFor={labelFor}
        className={`text-sm self-center text-gray-900 dark:text-gray-100 ${className} ${
          sectionConfig?.otherattr?.labelPosition == "top" ? `` : `text-right`
        }`}
        style={{ ...styles }}
      >
        {isrequired == "1" && "*"}
        {labelName}
        {isHideSeperator ? "" : ":"}
      </label>
    </>
  );
};

export default Atom_label;
