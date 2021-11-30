import React, { FC, useContext } from "react";
import FormMetaContext from "context/Meta/FormMetaContext";

type PropsType = {
  handleSubmit?: any;
  children?: any;
  dialog?: any;
  title?: string;
};

const FormWrapper: FC<PropsType> = ({ children, title, dialog }) => {
  const { handleSubmitContext, processConfig } = useContext(FormMetaContext);

  return (
    <div
      className={`processRender ${
        dialog ? `px-3` : `shadow-citizen p-5 my-1.5`
      } bg-white rounded-lg`}
    >
      <form onSubmit={handleSubmitContext}>
        <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 pb-3">
          <div className="">
            <p className="text-lg text-gray-800 dark:text-gray-100">{title}</p>
          </div>
        </div>
        <div className="mt-4 grid gap-4">{children}</div>
        {processConfig?.actiontype !== "view" && (
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-lg text-white px-8 py-3 text-sm"
            >
              Хадгалах
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export const FormSectionWrapper: FC<PropsType> = ({ children }) => {
  const {
    handleSubmitContext,
    processConfig,
    processExpression,
    formDataInitData,
    setFormDataData,
  } = useContext(FormMetaContext);

  return (
    <div className="processRender">
      <form onSubmit={handleSubmitContext}>
        <div>{children}</div>
        {processConfig?.actiontype !== "view" && (
          <div className="flex justify-end mb-3">
            <button
              type="submit"
              className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-lg text-white px-8 py-3 text-sm mt-3"
            >
              Хадгалах
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormWrapper;
