import React, { FC, useContext } from "react";
import { DatePicker } from "antd";
import moment from "moment";
import "moment/locale/mn";

import locale from "antd/lib/locale/zh_CN";
import FormMetaContext from "context/Meta/FormMetaContext";
import Atom_label from "./Atom_label";
import { fieldDisableEnable, fieldHideShow } from "util/helper";
type PropsType = {
  config: any;
  className: any;
  labelClassName: any;
  style: any;
  rowIndex?: any;
  sectionConfig?: any;
};

const Atom_date: FC<PropsType> = ({
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
  } = useContext(FormMetaContext);

  const handlerChangeSelectDate = (e: any, dateString: any) => {
    const { paramrealpath } = config;

    handleChangeContext({
      name: paramrealpath,
      value: dateString,
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
          isrequired={config.isrequired}
          className={`${labelClassName}`}
          labelFor={config.paramrealpath}
          styles=""
          sectionConfig={sectionConfig}
        />
        <div className="self-center">
          {processConfig.actiontype === "view" ? (
            <>
              {formDataInitData[config.paramrealpath] &&
                moment(formDataInitData[config.paramrealpath]).format(
                  "YYYY-MM-DD"
                )}
            </>
          ) : (
            <DatePicker
              name={config.paramrealpath}
              id={config.paramrealpath}
              placeholder={config?.placeholdername}
              defaultValue={
                formDataInitData[config.paramrealpath] &&
                moment(formDataInitData[config.paramrealpath])
              }
              // className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black  ant-input-lg rounded-none"
              className={`${className} rounded`}
              showToday={true}
              onChange={handlerChangeSelectDate}
              style={{ ...style, width: "165px", height: 42 }}
              disabled={fieldDisableEnable(config, processExpression)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Atom_date;
