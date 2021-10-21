import React, { FC, useContext } from "react";
import useSWR from "swr";
import _ from "lodash";
import Atom_label from "./Atom_label";
import FormMetaContext from "context/Meta/FormMetaContext";
import { getAtomValue, fieldHideShow } from "util/helper";

type PropsType = {
  config: any;
  className: any;
  labelClassName: any;
  style: any;
  rowIndex?: any;
  sectionConfig?: any;
};

const Atom_boolean: FC<PropsType> = ({
  config,
  className,
  labelClassName,
  style,
  rowIndex,
  sectionConfig,
}) => {
  const {
    processExpression,
    formDataInitData,
    handleChangeContext,
    processConfig,
    validData,
  } = useContext(FormMetaContext);
  const checkedValue: any =
    getAtomValue(config, formDataInitData, processConfig, rowIndex) || 0;

  const handlerChange = (e: any) => {
    handleChangeContext({
      name: config.paramrealpath,
      value: Number(!checkedValue),
      rowIndex,
    });
  };

  return (
    <div
      className={`${
        sectionConfig?.otherattr?.labelPosition == "top"
          ? `flex flex-col`
          : `grid grid-cols-2 gap-4`
      } ${
        config.isshow == "0"
          ? "hidden"
          : fieldHideShow(config, processExpression) && "hidden"
      }`}
    >
      <Atom_label
        labelName={config.labelname}
        labelFor={config.paramrealpath}
        isrequired={config.isrequired}
        styles=""
        className={`${labelClassName}`}
        sectionConfig={sectionConfig}
      />
      {processConfig.actiontype === "view" ? (
        <div className="self-center">
          {getAtomValue(config, formDataInitData, processConfig, rowIndex)
            ? "Тийм"
            : "Үгүй"}
        </div>
      ) : (
        <input
          type="checkbox"
          id={config.paramrealpath}
          name={config.paramrealpath}
          className={`${className} ${`self-center focus:ring-0`} ${
            validData[config.paramrealpath] ? `border-red-500` : ``
          }`}
          style={{ ...style, width: parseInt(config?.columnwidth, 10) }}
          placeholder={config?.placeholdername}
          defaultChecked={checkedValue}
          onChange={handlerChange}
        />
      )}
      {config.isEmpty && <span>{config.errorText}</span>}
    </div>
  );
};

export default Atom_boolean;
