import React, { FC, useContext, useState } from "react";
import useSWR from "swr";
import _ from "lodash";
import Atom_label from "./Atom_label";
import FormMetaContext from "context/Meta/FormMetaContext";
import { getAtomValue, fieldHideShow, fieldDisableEnable } from "util/helper";
import { useTranslation } from "next-i18next";
// import { Editor } from "@tinymce/tinymce-react";
import { CKEditor } from "ckeditor4-react";
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

  const { t } = useTranslation("translation");
  const [text, setText] = useState("");
  const handleEditorChange = (e: any) => {
    console.log("eee", e);
    // handleChangeContext({
    //   name: config.paramrealpath,
    //   value: e.target.value,
    //   rowIndex,
    // });
  };
  const modules = {
    toolbar: {
      container: "#toolbar",
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

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
      } ${sectionConfig?.otherattr.className}`}
    >
      <Atom_label
        labelName={t(config.labelname)}
        labelFor={config.paramname}
        isrequired={config.isrequired}
        styles=""
        className={`${labelClassName}`}
        sectionConfig={sectionConfig}
      />

      {/* <ReactQuill
        value={text}
        onChange={handleEditorChange}
        // modules={modules}
        formats={formats}
      /> */}

      {/* <Editor
        apiKey="ayoi0pb5fjm8mpv8rzinxjg2nnx41p2w6jgzup36cuzfgf6r"
        initialValue=""
        init={{
          height: 300,
          menubar: true,
        }}
        onChange={handleEditorChange}
      /> */}
      <CKEditor
        initData={
          <p>
            Include all the information someone would need to answer your
            question.
          </p>
        }
      />
    </div>
  );
};

export default Atom_text_editor;
