import { FC, useState, useContext } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@components/common/Atom/RenderAtom";
import fetchJson from "lib/fetchJson";
import { useSession } from "next-auth/react";
import moment from "moment";
import { useCloud } from "hooks/use-cloud";
import useSWR from "swr";
import { Image } from "antd";
import { Document, Page, pdfjs } from "react-pdf";
import useToggle from "@customhook/useToggle";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf-worker.js";

import { Modal } from "antd";
type PropsType = {
  dataItem?: any;
};

const fileViewType: FC<PropsType> = ({ dataItem }) => {
  const { data: session, status }: any = useSession();
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const { toggle: visibleModal2, setToggle: setVisibleModal2 } =
    useToggle(false);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.path || "id"]
  );

  const [content, setContent] = useState<any>();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const parameters = `&parameters=${JSON.stringify({
    filterrecordid: selectedId,
    filterstructureid: widgetnemgooReady?.listconfig?.filterstructureid,
  })}`;

  const { data: fileList } = useSWR(
    `/api/get-process?processcode=getFile_004${parameters}`
  );
  const fileSrc = _.values(fileList?.filedtl);

  const onClose = () => {
    setVisibleModal2(false);
  };

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
  const onClickOpenFdf = (item) => {
    setContent(
      <div className="containaer mx-auto overflow-scroll ">
        <Document file={item} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    );
    setVisibleModal2(true);
  };
  return (
    <div className=" mt-6 ">
      {fileSrc.map((item: any, index: number) => {
        const type = item?.fileextension || "";
        let imgSrc = item?.physicalpath;
        if (imgSrc.startsWith("storage/")) {
          imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
        }
        const contentItem = () => {
          switch (type) {
            case "pdf":
              return (
                <img
                  src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1649641911/cloud/icons/Group_7134_4_iujlmx.png"
                  alt="icon"
                  className=""
                  width={40}
                  onClick={() => onClickOpenFdf(imgSrc)}
                />
              );
            default:
              return <Image width={40} src={imgSrc} />;
          }
        };

        return (
          <div
            className="bg-white flex h-16 list-none my-2 rounded-lg px-4 cursor-pointer gap-3"
            key={item?.id || index}
          >
            <div className="w-10 flex items-center ">{contentItem()}</div>
            <div className=" grid content-center ">
              <>
                <p
                  className="text-citizen-title font-medium text-tiny m-0 pt-2 line-clamp-2 w-100"
                  style={{ lineHeight: "16px" }}
                >
                  {item.filename}
                </p>
                <span className="text-gray-300  text-tiny ">
                  {formatBytes(item.filesize)}
                </span>
              </>
            </div>

            <Modal
              visible={visibleModal2}
              width={1000}
              title="Файл харах"
              // centered
              footer={false}
              onCancel={onClose}
            >
              {content}
            </Modal>
          </div>
        );
      })}
    </div>
  );
};

export default fileViewType;
