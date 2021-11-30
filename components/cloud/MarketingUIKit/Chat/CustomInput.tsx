import React, { useState, FC, useContext, useRef } from "react";
import FormMetaContext from "context/Meta/FormMetaContext";
import fetchJson from "lib/fetchJson";
import _ from "lodash";
import { notification } from "antd";
import axios from "axios";
type PropsType = {
  cancellor?: any;
  parentId?: any;
  edit?: any;
  recordId?: any;
  refStructureId?: any;
  pdata?: any;
  value?: any;
  submit?: any;
  handleCancel?: any;
};

// refStructureId
// id
// recordId
// commentText
// isModified
// isDeleted
// isReply
// parentId

const CustomInput: FC<PropsType> = ({
  cancellor,
  parentId,
  value,
  edit,
  refStructureId,
  pdata,
  recordId,
  submit,
  handleCancel,
  ...rest
}) => {
  const [text, setText] = useState(value);
  const { handleSubmitContext, processConfig } = useContext(FormMetaContext);
  const [pData, setpData] = useState();
  const handleChange = (e: any) => {
    setText(e.target.value);
    // alert(e.target.value);
  };

  let form = useRef();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    form_data.forEach(function (value: any, key: string) {
      payload[key] = value;
    });
    handleFilterData(payload);
  };
  console.log("dddd", pdata);
  const handleFilterData = async (payload: any) => {
    const { data } = await axios.post(`/api/post-process`, {
      processcode: "clEcmCommentDv_001",
      parameters: payload,
    });
    if (data.status === "success") {
      notification.success({ message: "Амжилттай хадгалагдлаа" });
    } else {
      notification.error({ message: data.text });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="row">
          <div className="row">
            <div className="arrow-left"></div>
            <div className="input-div">
              <textarea
                rows={2}
                className="input-box border-0"
                name="commentText"
                placeholder="Type your reply here."
                value={text}
                onChange={handleChange}
              ></textarea>
              <input type="hidden" name="recordId" value={recordId} />
              <input
                type="hidden"
                name="refStructureId"
                value={refStructureId}
              />
              {/* <input type="text" name="parentId" value={""} /> */}
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button
            className="py-4 px-4 border border-ssoBackground bg-indigo-50"
            // onClick={() => submit(cancellor, text, parentId, edit, setText)}
            type="submit"
            disabled={!text}
          >
            Сэтгэгдэл үлдээх
          </button>
          {/* <button
            className="cancel-btn"
            onClick={() => handleCancel(cancellor, edit)}
          >
            Cancel
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default CustomInput;
