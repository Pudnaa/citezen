import { useContext, useState, useEffect, useRef, FC } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import useSWR from "swr";
import { useRouter } from "next/router";
import moment from "moment";
import _ from "lodash";
import axios from "axios";
import fetchJson from "lib/fetchJson";
import { useUser } from "hooks/use-user";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { AtomText } from "@components/common/Atom";
import ModalLogin from "@components/Login/ModalLogin";
import { useSession } from "next-auth/react";

type PropsType = {
  commentData?: any;
};
const helpComment: FC<PropsType> = ({ commentData }) => {
  const { data: session, status }: any = useSession();
  const { widgetnemgooReady, positionConfig } =
    useContext(WidgetWrapperContext);
  const router = useRouter();
  let selectedId =
    router.query?.[
      widgetnemgooReady?.criteria?.defaultQuery?.filterrecordid || "id"
    ];
  const [commentList, setcommentList] = useState<any>(null);
  const [myState, setMyState] = useState();
  let structureId = widgetnemgooReady?.listconfig?.filterstructureid;
  const [profile, setProfile] = useState(session);
  const [visibleModal, setVisibleModal] = useState(false);
  const [content, setContent] = useState<any>();
  const [comment, setComment] = useState<any>("");

  const parameters = `&parameters=${JSON.stringify({
    filterrecordid: selectedId,
    filterstructureid: structureId,
  })}`;
  const { data } = useSWR(
    `/api/get-process?processcode=getComment_004${parameters}`
  );
  console.log("comment list ", session);

  useEffect(() => {
    if (data) {
      setcommentList(data.ecmcommentdtl);
    }
  }, [data]);

  const handlerClick = (e?: any) => {
    setContent(<ModalLogin />);
    setVisibleModal(true);
  };

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

      setComment("");

      // console.log("error", param);
      const result: any = await fetchJson(
        `/api/get-process?processcode=getComment_004&parameters=${JSON.stringify(
          param
        )}`
      );
      setcommentList(result?.ecmcommentdtl);
    } else {
      console.log("error", data.text);
    }
  };

  // console.log("sss", session);
  let form = useRef<any>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form_data = new FormData(form.current);
    const payload: any = {};
    form_data.forEach(function (value: any, key: string) {
      payload[key] = value;
    });
    handleFilterData(payload);
    // console.log(payload);
  };
  let clecmcommentd: any = _.values(commentList);
  if (commentData) {
    clecmcommentd = commentData;
  }
  const handlerCloseClick = (e: any) => {
    setVisibleModal(false);
  };

  const handleUserComment = (e) => {
    setComment(e.target.value);
    console.log("comment", e.target.value);
  };

  return (
    <div className="w-full py-4">
      {!profile && (
        <div>
          <span
            onClick={() => handlerClick()}
            className="text-lg cursor-pointer hover:text-blue-400"
          >
            Та хэрэглэгчээр нэвтэрч орно уу
          </span>{" "}
        </div>
      )}

      {clecmcommentd.length > 0 && (
        <div className="chat-container pt-4 pb-2 max-h-112 overflow-y-auto mb-2 scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full">
          {/* <div className="overflow-y-auto  scrollbar-thumb-gray-300  scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-300 -dark scrollbar-thumb-rounded-full lg:max-h-sm h-full"> */}
          <div className="  lg:max-h-sm h-full">
            {clecmcommentd.map((item: any, index: number) => {
              return (
                <div key={item?.id || index}>
                  <div className="flex justify-between py-2 px-2 ">
                    <div className="flex">
                      <div className="w-16">
                        <img
                          src="https://dev.veritech.mn/assets/core/global/img/user.png"
                          className=" w-10 h-10 mt-1 rounded-full"
                        />
                      </div>
                      <div className="w-full pl-1.5 capitalize">
                        <RenderAtom
                          item={{ value: item?.username }}
                          defaultAtom="text"
                          customClassName="text-base text-citizen-title  font-semibold block pt-1"
                        />
                        <RenderAtom
                          item={{ value: item?.departmentname }}
                          defaultAtom="text"
                          customClassName="text-sm text-citizen-title lowercase -mt-1 relative -top-1"
                        />
                      </div>
                    </div>
                    <div>
                      <RenderAtom
                        item={{
                          value: moment(item.createdDate).format("h:mm"),
                        }}
                        defaultAtom="text"
                        customClassName="text-tiny font-semibold  pt-1.5 text-citizen-title  text-right lowercase pr-1 "
                      />
                    </div>
                  </div>
                  <div className="mx-3 border-b border-gray-300 ">
                    <AtomText
                      item={item.commenttext}
                      customClassName="text-sm leading-5 font-normal py-2 text-gray-500 "
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* CHAT */}
      {profile && (
        <div className="w-full py-1 ">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="flex z-10 bg-white rounded-lg justify-between  border p-1 ">
              <div className="">
                <textarea
                  className="w-full focus:outline-none text-gray-700 py-2 pl-2   border-none h-10 active:border-none"
                  name="commentText"
                  placeholder="Сэтгэгдэл үлдээх ..."
                  value={comment}
                  onChange={handleUserComment}
                />
                <input type="hidden" name="recordId" value={selectedId} />
                <input
                  type="hidden"
                  name="createdCrmUserId"
                  value={session.crmuserid}
                />
                <input type="hidden" name="createdUserId" value="" />
                <input
                  type="hidden"
                  name="refStructureId"
                  value={structureId}
                />
              </div>
              <div className="flex">
                <div className="w-16 h-full flex items-center justify-end">
                  <button
                    className="px-2 pt-1 cursor-pointer"
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
                        fill="#699BF7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      <ModalView
        visible={visibleModal}
        modalOptions={{
          width: 500,
          title: "Нэвтрэх",
        }}
        onClose={handlerCloseClick}
        modelContent={content}
      />
    </div>
  );
};
export default helpComment;
