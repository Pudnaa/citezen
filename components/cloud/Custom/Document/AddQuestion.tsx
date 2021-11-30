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
export default function AddQuestion() {
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
      {" "}
      <h3 className="text-3xl text-left font-bold">Ask a public question</h3>
      <form className="bg-white p-4" onSubmit={handleSubmit}>
        <div className="bg-white dark:bg-gray-800">
          <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
            <div className="xl:w-full ">
              <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center py-2">
                <p className="text-lg text-gray-800 dark:text-gray-100 ">
                  {" "}
                  title
                </p>
              </div>
            </div>
            <div className="text-left">
              <span>Acуултыг ойлгомжтой оруулна уу</span>
            </div>
            <div className="mx-auto">
              <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">
                <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                  <label
                    htmlFor="username"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    title
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="@example"
                  />
                </div>
                <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                  <label
                    htmlFor="about"
                    className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
                  >
                    body
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    required
                    className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-500 dark:text-gray-400"
                    placeholder="Let the world know who you are"
                    rows={5}
                    defaultValue={""}
                  />
                  <p className="w-full text-right text-xs pt-1 text-gray-500 dark:text-gray-400">
                    Character Limit: 200
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto w-11/12 xl:w-full">
            <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
              <button className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4">
                Cancel
              </button>
              <button
                className="bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
