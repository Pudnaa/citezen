import { Children, useContext, useRef, useState, FC } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { decode } from "html-entities";
import { Modal } from "antd";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { jsonParse, listToTree, prepareIsOpen, Iframe } from "util/helper";

import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";

type PropsType = {
  modelContent: any;
  visible: boolean;
  modalOptions?: any;
  onClose: any;
};

const ModalView: FC<PropsType> = ({
  visible,
  modalOptions,
  onClose,
  modelContent,
}) => {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [visibles, setVisible] = useState(visible);

  const isModal = () => {
    // console.log('Clicked cancel button');
    setVisible(false);
  };

  function modalViewContent(e: any) {
    if (e == "iframe") {
      if (_(modalOptions)) {
        return <Iframe iframe={modelContent} allow="autoplay" />;
      } else {
        return modelContent;
      }
    }
  }

  return (
    <Modal
      visible={visible}
      width={modalOptions?.width || 520}
      zIndex={modalOptions?.zIndex || 1000}
      title={modalOptions?.title || ""}
      footer={modalOptions?.footer || ""}
      // {...options}
      // onOk={(e) => {
      //   isModal();
      // }}
      // onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={onClose}
    >
      {/* <Iframe iframe={demos["golomt"]} allow='autoplay' /> */}
      {modelContent}
    </Modal>
  );
};

export default ModalView;
