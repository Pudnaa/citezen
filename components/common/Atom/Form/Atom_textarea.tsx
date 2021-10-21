import React, { FC, useContext } from "react";
import useSWR from "swr";
import _ from "lodash";
import Atom_label from "./Atom_label";
import FormMetaContext from "context/Meta/FormMetaContext";
import { fieldDisableEnable, fieldHideShow, getAtomValue } from "util/helper";

type PropsType = {
  config: any;
  className: any;
  labelClassName: any;
  style: any;
  rowIndex?: any;
  sectionConfig?: any;
};

const Atom_textarea: FC<PropsType> = ({
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
    validData,
    processConfig,
  } = useContext(FormMetaContext);

  const handlerChange = (e: any) => {
    handleChangeContext({
      name: config.paramrealpath,
      value: e.currentTarget.value,
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
          {getAtomValue(config, formDataInitData, processConfig, rowIndex)}
        </div>
      ) : (
        <textarea
          id={config.paramrealpath}
          name={config.paramrealpath}
          className={`${className} rounded border-gray-400 focus:ring-0 focus:border-black${
            validData[config.paramrealpath] ? ` border-red-500` : ``
          }`}
          style={{
            ...style,
            height: 42,
            width: parseInt(config.columnwidth, 10),
          }}
          placeholder={config?.placeholdername}
          onChange={handlerChange}
          disabled={fieldDisableEnable(config, processExpression)}
        >
          {getAtomValue(config, formDataInitData, processConfig, rowIndex)}
        </textarea>
      )}
      {config.isEmpty && <span>{config.errorText}</span>}
    </div>
  );
};

export default Atom_textarea;
