import React, { FC, useState, useContext, useRef } from "react";
import { positionToPath } from "util/helper";
import useSWR from "swr";
import moment from "moment";
import _ from "lodash";
import axios from "axios";
import fetchJson from "lib/fetchJson";
import { useUser } from "hooks/use-user";
import { Atom_string } from "@components/common/Atom/Form";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { Upload, message, Modal } from "antd";
import { toBoolean, jsonParse } from "util/helper";
import Router from "next/router";
type PropsType = {
  listConfig: any;
  data: any;
};

const crmRegisterForm: FC<PropsType> = ({ listConfig }) => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);
  const [username, setUsername] = useState();
  const [bfirstName, setBfirstName] = useState();
  const [bemail, setbemail] = useState();
  const [blastName, setBlastName] = useState();

  const userContext = useUser();
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  function beforeUpload(file: any) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress, filename } = options;

    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event: any) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };

    fmData.append(options.file.name, file, options.file.name);
    fmData.append("sessionId", userContext.userData?.sessionid);
    fmData.append("fileName", options.file.name);

    try {
      const res = await axios.post(metaConfig.fileAttach, fmData, config);
      onSuccess("Ok");
      // handleChangeContext({
      //   name: filename,
      //   value: res.data.response.files,
      // });
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };
  // const parameters = `&parameters=${JSON.stringify({
  //   id: widgetnemgooReady?.commandId,
  // })}`;

  // const { data } = useSWR(
  //   `/api/get-process?processcode=META_BUSINESS_PROCESS_LINK_BP_GET_004${parameters}`,
  // );

  const uploadButton = (
    <div>
      <div style={{ marginTop: 2 }}>
        {" "}
        <span className="far fa-plus text-2xl"></span>{" "}
      </div>
    </div>
  );
  const handlerChangePhone = (e: any) => {
    setUsername(e.target.value);
  };
  const handlerChangeFirstName = (e: any) => {
    setBfirstName(e.target.value);
  };
  const handlerChangeEmail = (e: any) => {
    setbemail(e.target.value);
  };
  const handlerChangeLastName = (e: any) => {
    setBlastName(e.target.value);
  };

  const handleFilterData = async (payload: any) => {
    const { data } = await axios.post(`/api/post-process`, {
      processcode: "clCrmUserDv_001",
      parameters: payload,
    });
    if (data.status === "success") {
      console.log(data);
      Router.push("/skyresort");
    } else {
      console.log("error", data.text);
    }
  };
  let form = useRef<any>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    form_data.forEach(function (value: any, key: string) {
      payload[key] = value;
    });
    // handleFilterData(payload);

    console.log("register 0", payload);
  };

  // console.log("register 0", parameters);

  return (
    <div className="processRender">
      <div>
        <div>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="w-7/12 mx-auto bg-white shadow rounded"
          >
            <div>
              <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5">
                <div className="flex items-center w-11/12 mx-auto">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">
                    Шинэ хэрэглэгч болох
                  </p>
                </div>
              </div>
              <div className="w-8/12  mx-auto ">
                <div className="container px-10 mx-auto">
                  <div className="my-8 mx-auto xl:w-full xl:mx-0">
                    <div className="xl:flex lg:flex md:flex flex-wrap justify-between">
                      <div>
                        <label
                          htmlFor="objectPhoto"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Профайл зураг оруулах
                        </label>

                        <Upload
                          name="crmCustomerDv.objectPhoto"
                          id="objectPhoto"
                          listType="picture-card"
                          className="avatar-uploader mt-2"
                          showUploadList={true}
                          customRequest={uploadImage}
                          beforeUpload={beforeUpload}
                          // onChange={handleOnChange}
                        >
                          {uploadButton}
                        </Upload>
                        <Modal
                          title="image"
                          footer={null}
                          // onCancel={this.handleCancel}
                        >
                          <span>image title </span>
                        </Modal>
                        {config.isEmpty && <span>{config.errorText}</span>}
                      </div>
                      <div className="w-full flex flex-col mb-3">
                        <label
                          htmlFor="lastName"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Овог
                        </label>
                        <input
                          type="text"
                          name="crmCustomerDv.lastName"
                          required
                          onChange={handlerChangeLastName}
                          id="lastName"
                          className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                      <div className="w-full  flex flex-col mb-3">
                        <label
                          htmlFor="LastName"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Нэр
                        </label>
                        <input
                          type="text"
                          id="LastName"
                          name="crmCustomerDv.customerName"
                          onChange={handlerChangeFirstName}
                          required
                          className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                      <div className="w-full  flex flex-col mb-3">
                        <label
                          htmlFor="phoneNumber"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Утасны дугаар
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="crmCustomerDv.phoneNumber"
                          required
                          onChange={handlerChangePhone}
                          className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        />
                        <input type="hidden" name="username" value={username} />
                        <input
                          type="hidden"
                          name="crmCustomerDv.basePersonDv.lastName"
                          value={blastName}
                        />
                        <input
                          type="hidden"
                          name="crmCustomerDv.basePersonDv.firstName"
                          value={bfirstName}
                        />
                        <input
                          type="hidden"
                          name="crmCustomerDv.basePersonDv.phoneNumber"
                          value={username}
                        />
                        <input
                          type="hidden"
                          name="crmCustomerDv.basePersonDv.email"
                          value={bemail}
                        />
                      </div>
                      <div className="w-full flex flex-col mb-3">
                        <label
                          htmlFor="email2"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Имэйл
                        </label>
                        <div className="relative">
                          <div className="absolute text-gray-600 dark:text-gray-400 flex items-center px-4 border-r h-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-mail"
                              width={20}
                              height={20}
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path stroke="none" d="M0 0h24v24H0z" />
                              <rect x={3} y={5} width={18} height={14} rx={2} />
                              <polyline points="3 7 12 13 21 7" />
                            </svg>
                          </div>
                          <input
                            id="email2"
                            name="crmCustomerDv.email"
                            required
                            className="w-full bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-green-400 rounded border shadow"
                            placeholder="example@gmail.com"
                            onChange={handlerChangeEmail}
                          />
                        </div>
                      </div>
                      <div className="w-full  flex flex-col mb-3">
                        <label
                          htmlFor="password1"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Нууц үг:
                        </label>
                        <input
                          type="password"
                          id="password1"
                          name="password1"
                          required
                          className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                      <div className="w-full  flex flex-col mb-3">
                        <label
                          htmlFor="password2"
                          className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                        >
                          Нууц үг давтах:
                        </label>
                        <input
                          type="password"
                          id="password2"
                          name="password2"
                          required
                          className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none bg-transparent focus:border-indigo-700 text-gray-800 dark:text-gray-100"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-4 sm:px-12 px-4 bg-gray-100 dark:bg-gray-700 mt-6 flex justify-end rounded-bl rounded-br">
                <button
                  className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"
                  type="submit"
                >
                  Хадгалах
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default crmRegisterForm;
