import React, { FC, useContext, useState } from "react";
import useSWR from "swr";
import _ from "lodash";
import Atom_label from "./Atom_label";
import FormMetaContext from "context/Meta/FormMetaContext";
import { getAtomValue, fieldHideShow, fieldDisableEnable } from "util/helper";
import { useTranslation } from "next-i18next";
// import { Editor } from "@tinymce/tinymce-react";
import { CKEditor } from "ckeditor4-react";
import { overrideTailwindClasses } from "tailwind-override";
// import "react-quill/dist/quill.snow.css";
type PropsType = {
  config: any;
  className?: any;
  labelClassName?: any;
  style?: any;
  rowIndex?: any;
  sectionConfig?: any;
};

const Atom_text_editor: FC<PropsType> = ({
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
  const handleEditorChange = (e: any) => {
    console.log("dddddddddddddddd", e.editor.getData());
    handleChangeContext({
      name: config.paramrealpath,
      value: e.editor.getData(),
      rowIndex,
    });
  };
  return (
    <div
      className={`${
        sectionConfig?.widgetnemgooReady?.labelPosition == "top"
          ? `flex flex-col`
          : `grid grid-cols-2 gap-4`
      } ${
        config.isshow == "0"
          ? "hidden"
          : fieldHideShow(config, processExpression) && "hidden"
      } ${sectionConfig?.widgetnemgooReady.className}`}
    >
      <Atom_label
        labelName={config.labelname}
        labelFor={config.paramname}
        isrequired={config.isrequired}
        styles=""
        className={`${labelClassName}`}
        sectionConfig={sectionConfig}
      />

      <CKEditor
        initData={getAtomValue(
          config,
          formDataInitData,
          processConfig,
          rowIndex
        )}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default Atom_text_editor;
