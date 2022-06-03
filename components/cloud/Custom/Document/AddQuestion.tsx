import { useContext, useState, useRef } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderField from "@middleware/components/WidgetForm/RenderField";
import Router from "next/router";
import _ from "lodash";
import axios from "axios";
import { CKEditor } from "ckeditor4-react";
import FormMetaContext from "context/Meta/FormMetaContext";

export default function AddQuestion() {
  const { widgetnemgooReady, positionConfig } =
    useContext(WidgetWrapperContext);
  const { processConfig, handleSubmitContext } = useContext(FormMetaContext);

  const { meta_process_param_attr_link_mobile: readyDatasrc } = processConfig;
  // console.log("positionConfig", positionConfig);
  // console.log("readyDatasrc", readyDatasrc);
  // console.log("processConfig", processConfig);

  const handleFilterData = async (payload: any) => {
    const { data } = await axios.post(`/api/post-process`, {
      processcode: widgetnemgooReady?.addProcess,
      parameters: payload,
    });
    if (data.status === "success") {
      Router.push("/doc");
      // setcommentList("fff");
    } else {
      console.log("error", data.text);
    }
  };

  let form = useRef<any>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("ddddd");
  };
  const sectionconfig = {
    widgetnemgooReady: {
      labelPosition: "top",
    },
  };

  return (
    <div className="w-full">
      <h3 className="text-3xl text-left font-bold">Ask a public question</h3>

      <form className="bg-white rounded-lg  mt-4">
        <div>
          <div className="text-left">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 ">
              Гарчиг/Title
            </p>
            <span>Acуултыг ойлгомжтой оруулна уу</span>
          </div>
          <RenderField
            field={_.find(readyDatasrc, {
              paramrealpath: positionConfig?.position1?.fieldpath,
            })}
            className="my-4 flex"
            labelClassName="text-sm font-bold text-gray-800 dark:text-gray-100 hidden"
            sectionConfig={sectionconfig}
          />
        </div>
        <div>
          <div className="text-left pb-4">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 ">
              Дэлгэрэнгүй / Body
            </p>
          </div>
          <RenderField
            field={_.find(readyDatasrc, {
              paramrealpath: positionConfig?.position4?.fieldpath,
            })}
            className="my-4 flex"
            labelClassName="text-sm font-bold text-gray-800 dark:text-gray-100 hidden"
            sectionConfig={sectionconfig}
          />
        </div>
        <div>
          <div className="text-left pb-2 pt-6">
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 ">
              Шошго/ Tags
            </p>
          </div>
          <RenderField
            field={_.find(readyDatasrc, {
              paramrealpath: positionConfig?.position2?.fieldpath,
            })}
            className=" flex"
            labelClassName="text-sm font-bold text-gray-800 dark:text-gray-100 hidden"
            sectionConfig={sectionconfig}
          />
        </div>
        <div className="flex justify-end mt-4 ">
          <button
            type="button"
            className="focus:outline-none w-full sm:w-auto bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-lg text-white px-8 py-3 text-sm"
            onClick={handleSubmitContext}
          >
            Хадгалах
          </button>
        </div>
      </form>
      <style>
        {`
          .defaultBtn {
             display:none
          }
          `}
      </style>
    </div>
  );
}
