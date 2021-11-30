import React, { FC, useContext } from "react";
import Atom_label from "./Atom_label";
import NumberFormat from "react-number-format";
import FormMetaContext from "context/Meta/FormMetaContext";
import { fieldHideShow, getAtomValue } from "util/helper";

type PropsType = {
  config: any;
  className: any;
  rowIndex?: any;
  style: any;
  labelClassName: any;
  sectionConfig?: any;
};

const Atom_button: FC<PropsType> = ({
  config,
  rowIndex,
  labelClassName,
  className,
  style,
  sectionConfig,
}) => {
  const {
    processExpression,
    formDataInitData,
    handleChangeContext,
    handleClickContext,
    processConfig,
    validData,
  } = useContext(FormMetaContext);

  const handlerChange = (e: any) => {};

  const handlerClick = (e: any) => {
    handleClickContext({
      name: config.paramrealpath,
      rowIndex,
    });
  };

  return (
    <>
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
          className={`${labelClassName} block`}
          isrequired={config.isrequired}
          styles=''
          sectionConfig={sectionConfig}
        />

        <button
          type='button'
          name={config.paramrealpath}
          style={{ ...style, width: parseInt(config.columnwidth, 10) }}
          className={`${className} bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2.5 text-sm`}
          onClick={handlerClick}
        >
          {config.labelname}
        </button>
        {config.isEmpty && <span>{config.errorText}</span>}
      </div>
    </>
  );
};

export default Atom_button;
