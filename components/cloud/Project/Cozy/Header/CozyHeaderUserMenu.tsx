import { useState } from "react";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";
import { useSession } from "next-auth/react";
import { Modal, Popover } from "antd";

import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import ModalLogin from "@components/Login/ModalLogin";
import CozyHeaderUserMenuList from "./CozyHeaderUserMenuList";

export default function CozyHeaderUserMenu() {
  // console.log("🚀 ~ CozyHeaderUserMenu ~ readyDatasrc", readyDatasrc);
  const cloudContext = useCloud();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data: session, status }: any = useSession();
  console.log("🚀 ~ CozyHeaderUserMenu ~ session", session);

  return (
    <BlockDiv customClassName="" divNumber="CozyHeaderUserMenuOuter">
      {!session && (
        <RenderAtom
          item={{ value: "Нэвтрэх" }}
          defaultAtom="text"
          customClassName="cursor-pointer block"
          onClick={() => setIsModalVisible(true)}
        />
      )}
      {session && (
        <Popover
          content={CozyHeaderUserMenuList}
          title={`Сайн уу,    ${session.user.name}`}
          trigger="hover"
          placement="bottomRight"
        >
          <div>
            <RenderAtom
              item={{ value: session.user.image || session.profileImg }}
              defaultAtom="avatar"
              customClassName="rounded-full object-cover object-center w-10 h-10 cursor-pointer block"
            />
          </div>
        </Popover>
      )}
      <Modal
        title="Нэвтрэх"
        visible={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        footer={false}
      >
        <ModalLogin />
      </Modal>
    </BlockDiv>
  );
}
