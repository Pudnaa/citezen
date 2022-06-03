import react, { useContext, useState, useEffect, useRef } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import useSWR from "swr";
import { useRouter } from "next/router";
import moment from "moment";
import _ from "lodash";
import axios from "axios";
import fetchJson from "lib/fetchJson";

import { decode } from "html-entities";
import parseHtml from "html-react-parser";
import { AtomText } from "@components/common/Atom";
import { CKEditor } from "ckeditor4-react";
// filterid
// filterrecordid
// filterstructureid
// clEcmCommentHdr_004
export default function Comment() {
  const { widgetnemgooReady, positionConfig } =
    useContext(WidgetWrapperContext);
  const [commentText, setCommentText] = useState<any>();
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || "id"]
  );

  const [commentList, setcommentList] = useState<any>(null);
  const [myState, setMyState] = useState();
  let structureId = widgetnemgooReady?.structureId;

  const parameters = `&parameters=${JSON.stringify({
    filterrecordid: selectedId,
    filterstructureid: structureId,
  })}`;
  const { data } = useSWR(
    `/api/get-process?processcode=clEcmCommentHdr_004${parameters}`
  );

  useEffect(() => {
    if (data) {
      setcommentList(data.clecmcommentdtl);
    }
  }, [data]);

  const handleFilterData = async (payload: any) => {
    const { data } = await axios.post(`/api/post-process`, {
      processcode: "clEcmCommentDv_001",
      parameters: payload,
    });
    if (data.status === "success") {
      let param = {
        filterrecordid: selectedId,
        filterstructureid: structureId,
      };
      const result: any = await fetchJson(
        `/api/get-process?processcode=clEcmCommentHdr_004&parameters=${JSON.stringify(
          param
        )}`
      );
      setcommentList(result.clecmcommentdtl);
      // setcommentList("fff");
    } else {
      console.log("error", data.text);
    }
  };
  const inputHandler = (e: any) => {
    // console.log(e.editor.getData());
    setCommentText(e.editor.getData());
  };

  let form = useRef<any>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    form_data.forEach(function (value: any, key: string) {
      payload[key] = value;
      payload["commentText"] = commentText;
    });
    handleFilterData(payload);
    // console.log("form Data", payload);
  };
  const clecmcommentd: any = _.values(commentList);

  return (
    <div className="w-full">
      {/* CHAT */}
      <div className="">
        <div className="chat-header py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center pb-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-5 text-gray-800">
                Сэтгэгдэл
              </p>
            </div>
          </div>
        </div>
      </div>
      {clecmcommentd && (
        <div className="chat-container py-4 overflow-hidden">
          <div className="overflow-y-auto  scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full">
            {clecmcommentd.map((item: any, index: number) => {
              return (
                <div key={item?.id || index}>
                  <div className="flex justify-between py-2 px-4 ">
                    <div className="flex">
                      <div className="w-16">
                        <img
                          src="https://dev.veritech.mn/assets/core/global/img/user.png"
                          className=" rounded-full"
                        />
                      </div>
                      <div className="w-full pl-2">
                        {item.username}
                        <AtomText
                          item={item.departmentname}
                          customClassName="text-sm leading-5 font-normal text-gray-500 "
                        />
                      </div>
                    </div>
                    <div>
                      <AtomText
                        item={moment(item.createddate).format("YYYY-MM-DD")}
                        customClassName="text-xs font-medium py-1 text-gray-700 text-right  "
                      />
                    </div>
                  </div>
                  <div className="px-4">
                    <AtomText
                      item={parseHtml(decode(item.commenttext))}
                      customClassName="text-sm leading-5 font-normal py-2 text-gray-500 "
                    />
                  </div>
                  <hr />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* CHAT */}
      <div className="w-full py-1">
        <form ref={form} onSubmit={handleSubmit}>
          <div className=" h-full  z-10 re rounded-xl  border p-4 h-10">
            <div className="w-full">
              <input
                className='w-full focus:outline-none text-gray-700 pl-1 h-10"'
                name="commentText"
                placeholder="Сэтгэгдэл үлдээх ..."
              />
              {/* <CKEditor id="commentText" name="commentText" /> */}
              <input type="hidden" name="recordId" value={selectedId} />
              <input type="hidden" name="refStructureId" value={structureId} />
            </div>
            <div className="flex">
              <div className="w-full h-full flex items-center justify-end">
                <button
                  className="px-4 py-2 border border-gray-600 mt-4 text-blue rounded-lg font-semibold hover:bg-blue-300 hover:text-white hover: border-blue-300"
                  // onClick={() => submit(cancellor, text, parentId, edit, setText)}
                  type="submit"
                  // disabled={!text}
                >
                  Илгээх
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
