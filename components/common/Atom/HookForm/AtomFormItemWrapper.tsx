import { FC, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import _ from "lodash";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "../RenderAtom";

type PropsType = {
  item?: any;
  onChange?: any;
  customStyle?: object;
  customClassName?: string;
  customDivNumber?: string;
  divNamePrefix?: string;
  sample?: boolean;
  input?: any;
  label?: any;
  validation?: any;
  fieldName: string;
  defaultValue?: any;
  register: any;
  errors?: any;
  control?: any;
  showtype: string;
  customProps?: any;
  children?: any;
};

const AtomFormItemWrapper: FC<PropsType> = ({
  item,
  onChange = () => {},
  customClassName = "",
  customStyle = {},
  customDivNumber = "DivFormInput",
  divNamePrefix = "",
  sample = false,
  input = {},
  label = {},
  validation = {},
  fieldName,
  defaultValue,
  register,
  errors,
  control,
  showtype = "input",
  customProps = {},
  children,
}) => {
  if (_.isEmpty(control)) return null;

  const fieldTypeList: any = {
    input: "AtomFormInputV2",
    textarea: "AtomFormTextAreaV2",
    datepicker: "AtomFormDatepickerV2",
    checkbutton: "AtomFormCheckButtonV2",
    select: "AtomFormSelectV2",
  };

  const RenderComponent = useMemo(
    () =>
      dynamic(() =>
        import(
          `@components/common/Atom/HookForm/${
            fieldTypeList?.[showtype] || "AtomFormInputV2"
          }`
        ).catch((err) => {
          return () => (
            <>Form Input Component олдсонгүй - {fieldTypeList?.[showtype]}</>
          );
        })
      ),
    []
  );

  const componentProps: any = {
    item,
    input: {
      className:
        "rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-cozy focus:border-cozy",
      ...input,
    },
    validation: {
      ...validation,
      required: {
        value: false,
        message: "Заавал бөглөх ёстой.",
        ...validation.required,
      },
      messageBlock: {
        className: "text-pink-500",
        style: {},
        ...validation.messageBlock,
      },
    },
    fieldName,
    defaultValue,
    register,
    errors,
    control,
    ...customProps,
  };

  return (
    <BlockDiv
      customClassName={`my-3 flex flex-col gap-y-1 ${customClassName}`}
      customStyle={customStyle}
    >
      {/* label title */}
      <RenderAtom
        item={{ value: label?.title }}
        defaultAtom="text"
        customClassName={`block text-sm font-normal pl-2 ${label?.className}`}
      />
      <BlockDiv customClassName="relative">
        {/* input element */}
        {children || <RenderComponent {...componentProps} />}

        {/* error info */}
        <RenderAtom
          item={{}}
          defaultAtom="forminputerror"
          customClassName="z-0"
          customProps={{
            // validation: validation,
            // error: errors?.[fieldName] || {},
            ...componentProps,
          }}
        />
      </BlockDiv>
    </BlockDiv>
  );
};

export default AtomFormItemWrapper;
