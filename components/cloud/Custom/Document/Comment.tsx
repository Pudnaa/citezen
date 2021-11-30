import react, { useContext, useState, useEffect, useRef } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import useSWR from "swr";
import { useRouter } from "next/router";
import moment from "moment";
import _ from "lodash";
import axios from "axios";
import fetchJson from "lib/fetchJson";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import { AtomText } from "@components/common/Atom";
import pImage from "@components/common/Image/pImage";
import { useCloud } from "hooks/use-cloud";
// filterid
// filterrecordid
// filterstructureid
// clEcmCommentHdr_004
export default function PortalComent() {
  const { otherattr, positionConfig } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[otherattr?.listconfig?.fieldid || "id"],
  );

  const [commentList, setcommentList] = useState<any>(null);
  const [myState, setMyState] = useState();
  let structureId = otherattr?.structureId;

  const parameters = `&parameters=${JSON.stringify({
    filterrecordid: selectedId,
    filterstructureid: structureId,
  })}`;
  const { data } = useSWR(
    `/api/get-process?processcode=clEcmCommentHdr_004${parameters}`,
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
          param,
        )}`,
      );

      setcommentList(result.clecmcommentdtl);

      // setcommentList("fff");
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
    handleFilterData(payload);
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
        {clecmcommentd && (
          <div className="flex items-center pl-3 bg-white  rounded-lg border">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L12.5 12.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded-lg text-gray-600 placeholder-gray-500 border-0"
              placeholder="Хайх "
            />
          </div>
        )}
      </div>
      {clecmcommentd && (
        <div className="chat-container py-4 h-112  overflow-hidden">
          <div className="overflow-y-auto  scrollbar scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full">
            {clecmcommentd.map((item: any, index: number) => {
              return (
                <div key={index}>
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
                      item={item.commenttext}
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
          <div className="flex h-full  z-10 re rounded-xl  border p-4 h-10">
            <div className="w-full">
              <input
                className='w-full focus:outline-none text-gray-700 pl-1 h-10"'
                name="commentText"
                placeholder="Сэтгэгдэл үлдээх ..."
              />
              <input type="hidden" name="recordId" value={selectedId} />
              <input type="hidden" name="refStructureId" value={structureId} />
            </div>
            <div className="flex">
              <div className="w-16 h-full flex items-center justify-end">
                <button
                  className="px-4"
                  // onClick={() => submit(cancellor, text, parentId, edit, setText)}
                  type="submit"
                  // disabled={!text}
                >
                  <svg
                    width="27"
                    height="23"
                    viewBox="0 0 27 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.833011 22.4197C1.47895 23.0376 2.49271 22.9432 3.68591 22.4369L24.9122 13.3744C25.4863 13.1341 25.9439 12.8681 26.2489 12.5763C26.832 12.0185 26.832 11.332 26.2489 10.7741C25.9439 10.4824 25.4863 10.2163 24.9122 9.97603L3.56928 0.870704C2.5286 0.424449 1.48792 0.304303 0.83301 0.930777C0.00764455 1.72031 0.357528 2.58707 0.958609 3.6598L4.33184 9.70141C4.72658 10.4223 5.05853 10.7055 5.81212 10.7398L24.8404 11.3491C25.0647 11.3577 25.1813 11.5036 25.1992 11.6752C25.1992 11.8469 25.0736 11.9842 24.8494 11.9928L5.80315 12.6707C5.09441 12.6965 4.76247 12.9625 4.33185 13.7005L1.02141 19.5963C0.384443 20.7205 -0.00132605 21.6216 0.833011 22.4197Z"
                      fill="#7FC155"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
