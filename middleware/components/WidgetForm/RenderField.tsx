import React, { FC, useState } from "react";
import _ from "lodash";
import {
  Atom_string,
  Atom_number,
  Atom_long,
  Atom_date,
  Atom_combo,
  Atom_radio,
  Atom_range_slider,
  Atom_file_attach,
  Atom_button,
  Atom_boolean,
  Atom_datetime,
  Atom_textarea,
  Atom_text_editor,
  Atom_combo_multi,
} from "@components/common/Atom/Form";
import { getRowItems, dtlToSectionDtl, isEmpty } from "util/helper";
import RenderDetail from "./RenderDetail";
import WidgetStandart from "../WidgetStandart/WidgetStandart";

type PropsType = {
  field: any;
  className?: string;
  style?: any;
  rowIndex?: any;
  labelClassName?: string;
  attr?: any;
  sectionConfig?: any;
  formDataInitData?: any;
};

const RenderField: FC<PropsType> = ({
  field,
  attr,
  className,
  style,
  labelClassName,
  rowIndex,
  sectionConfig,
  formDataInitData,
}) => {
  console.log("field type", field);

  if (field["isshow"] === "0") {
    return (
      <Atom_string
        config={field}
        className={className}
        style={style}
        rowIndex={rowIndex}
        labelClassName={labelClassName}
      />
    );
  }

  switch (true) {
    case field["choosetype"] == "multicomma":
      return (
        <Atom_combo_multi
          className={className}
          style={style}
          labelClassName={labelClassName}
          config={field}
          sectionConfig={sectionConfig}
          rowIndex={rowIndex}
        />
      );
      break;
    case field["lookuptype"] === "combo":
      return (
        <Atom_combo
          className={className}
          style={style}
          labelClassName={labelClassName}
          config={field}
          sectionConfig={sectionConfig}
          rowIndex={rowIndex}
        />
      );
    case field["lookuptype"] === "radio":
      return (
        <Atom_radio
          className={className}
          style={style}
          rowIndex={rowIndex}
          labelClassName={labelClassName}
          config={field}
          sectionConfig={sectionConfig}
        />
      );
    case field["lookuptype"] === "range_slider":
      return <Atom_range_slider config={field} />;
    case field["datatype"] == "string":
      return (
        <Atom_string
          config={field}
          className={className}
          style={{ ...style, height: 42 }}
          rowIndex={rowIndex}
          sectionConfig={sectionConfig}
          labelClassName={labelClassName}
        />
      );

    case field["datatype"] == "date":
      return (
        <Atom_date
          className={className}
          style={style}
          rowIndex={rowIndex}
          labelClassName={labelClassName}
          config={field}
          sectionConfig={sectionConfig}
        />
      );
    case field["datatype"] == "datetime":
      return (
        <Atom_datetime
          className={className}
          style={style}
          rowIndex={rowIndex}
          labelClassName={labelClassName}
          sectionConfig={sectionConfig}
          config={field}
        />
      );

    case field["datatype"] == "file":
      return (
        <Atom_file_attach
          config={field}
          rowIndex={rowIndex}
          style={style}
          className={className}
          labelClassName={labelClassName}
        />
      );
    case field["datatype"] == "number" || field["datatype"] == "bigdecimal":
      return (
        <Atom_number
          config={field}
          rowIndex={rowIndex}
          style={{ ...style, height: 42 }}
          className={className}
          sectionConfig={sectionConfig}
          labelClassName={labelClassName}
        />
      );
    case field["datatype"] == "long":
      return <></>;
      break;
    case field["datatype"] == "text_editor":
      return (
        <Atom_text_editor
          config={field}
          rowIndex={rowIndex}
          style={style}
          className={className}
          labelClassName={labelClassName}
        />
      );
    case field["datatype"] == "button":
      return (
        <Atom_button
          config={field}
          rowIndex={rowIndex}
          style={style}
          className={className}
          labelClassName={labelClassName}
        />
      );
    case field["datatype"] == "description" ||
      field["datatype"] == "description_auto":
      return (
        <Atom_textarea
          config={field}
          className={className}
          style={style}
          rowIndex={rowIndex}
          sectionConfig={sectionConfig}
          labelClassName={labelClassName}
        />
      );
    case field["datatype"] == "boolean":
      return (
        <Atom_boolean
          config={field}
          className={className}
          style={style}
          rowIndex={rowIndex}
          sectionConfig={sectionConfig}
          labelClassName={labelClassName}
        />
      );

    case field["datatype"] == "group" && !field["paramrealpath"].includes("."):
      if (field["dtltheme"] && field["dtltheme"] != 0) {
        const widgetObj = {
          ...sectionConfig,
          componentpath: field.dtlthemecomponentpath,
          widgetcode: field.dtlthemecode,
          otherattr: [],
          bpsectiondtl: dtlToSectionDtl(field, attr),
        };
        return (
          <WidgetStandart
            dataProcess={_.values(formDataInitData[field.paramrealpath])}
            listConfig={widgetObj}
          />
        );
      } else {
        const listConfig = getRowItems(field, attr);
        return (
          <RenderDetail config={field} pathConfig={listConfig} attr={attr} />
        );
      }
    case field["datatype"] == "group" && field["paramrealpath"].includes("."):
      // const listConfig = getRowItems(field, attr);
      return (
        <button className="mx-3 my-1 font-bold bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-3 py-1 text-xs">
          ...
        </button>
      );

    default:
      return (
        <div>
          Not found <strong>{field["datatype"]}</strong> field!
        </div>
      );
  }

  // if (field["lookuptype"] === "combo") {
  //   return (
  //     <Atom_combo
  //       className={className}
  //       style={style}
  //       labelClassName={labelClassName}
  //       config={field}
  //       sectionConfig={sectionConfig}
  //       rowIndex={rowIndex}
  //     />
  //   );
  // }
  // if (field["lookuptype"] === "radio") {
  //   return (
  //     <Atom_radio
  //       className={className}
  //       style={style}
  //       rowIndex={rowIndex}
  //       labelClassName={labelClassName}
  //       config={field}
  //       sectionConfig={sectionConfig}
  //     />
  //   );
  // }
  // if (field["lookuptype"] === "range_slider") {
  //   return <Atom_range_slider config={field} />;
  // }
  // if (field["datatype"] == "string") {
  //   return (
  //     <Atom_string
  //       config={field}
  //       className={className}
  //       style={{ ...style, height: 42 }}
  //       rowIndex={rowIndex}
  //       sectionConfig={sectionConfig}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "date") {
  //   return (
  //     <Atom_date
  //       className={className}
  //       style={style}
  //       rowIndex={rowIndex}
  //       labelClassName={labelClassName}
  //       config={field}
  //       sectionConfig={sectionConfig}
  //     />
  //   );
  // }
  // if (field["datatype"] == "datetime") {
  //   return (
  //     <Atom_datetime
  //       className={className}
  //       style={style}
  //       rowIndex={rowIndex}
  //       labelClassName={labelClassName}
  //       sectionConfig={sectionConfig}
  //       config={field}
  //     />
  //   );
  // }
  // if (field["datatype"] == "file") {
  //   return (
  //     <Atom_file_attach
  //       config={field}
  //       rowIndex={rowIndex}
  //       style={style}
  //       className={className}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "number" || field["datatype"] == "bigdecimal") {
  //   return (
  //     <Atom_number
  //       config={field}
  //       rowIndex={rowIndex}
  //       style={{ ...style, height: 42 }}
  //       className={className}
  //       sectionConfig={sectionConfig}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "long") {
  // }
  // if (field["datatype"] == "text_editor") {
  //   return (
  //     <Atom_text_editor
  //       config={field}
  //       rowIndex={rowIndex}
  //       style={style}
  //       className={className}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "button") {
  //   return (
  //     <Atom_button
  //       config={field}
  //       rowIndex={rowIndex}
  //       style={style}
  //       className={className}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (
  //   field["datatype"] == "description" ||
  //   field["datatype"] == "description_auto"
  // ) {
  //   return (
  //     <Atom_textarea
  //       config={field}
  //       className={className}
  //       style={style}
  //       rowIndex={rowIndex}
  //       sectionConfig={sectionConfig}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "boolean") {
  //   return (
  //     <Atom_boolean
  //       config={field}
  //       className={className}
  //       style={style}
  //       rowIndex={rowIndex}
  //       sectionConfig={sectionConfig}
  //       labelClassName={labelClassName}
  //     />
  //   );
  // }
  // if (field["datatype"] == "group" && !field["paramrealpath"].includes(".")) {
  //   if (field["dtltheme"] && field["dtltheme"] != 0) {
  //     const widgetObj = {
  //       ...sectionConfig,
  //       componentpath: field.dtlthemecomponentpath,
  //       widgetcode: field.dtlthemecode,
  //       otherattr: [],
  //       bpsectiondtl: dtlToSectionDtl(field, attr),
  //     };
  //     return (
  //       <WidgetStandart
  //         dataProcess={_.values(formDataInitData[field.paramrealpath])}
  //         listConfig={widgetObj}
  //       />
  //     );
  //   } else {
  //     const listConfig = getRowItems(field, attr);
  //     return (
  //       <RenderDetail config={field} pathConfig={listConfig} attr={attr} />
  //     );
  //   }
  // }

  // if (field["datatype"] == "group" && field["paramrealpath"].includes(".")) {
  //   // const listConfig = getRowItems(field, attr);
  //   return (
  //     <button className="mx-3 my-1 font-bold bg-white transition duration-150 ease-in-out hover:border-gray-900 hover:text-gray-900 rounded border border-gray-800 text-gray-800 px-3 py-1 text-xs">
  //       ...
  //     </button>
  //   );
  // }
  // {
  //   return (
  //     <div>
  //       Not found <strong>{field["datatype"]}</strong> field!
  //     </div>
  //   );
  // }
};
export default RenderField;
