import { useState, useContext, useEffect } from "react";
import useToggle from "@customhook/useToggle";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useUser } from "hooks/use-user";
import { signIn, useSession, signOut } from "next-auth/react";
import { Popover } from "antd";
import AtomAvatar from "@components/common/Atom/AtomAvatar";
import Router, { useRouter } from "next/router";
import ModalLogin from "@components/Login/ModalLogin";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import { Modal } from "antd";
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
  AtomLinkV3,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
export default function NavigationII() {
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
  const { data: session, status }: any = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [sideBar, setsideBar] = useState();
  const [show, setShow] = useState(null);
  const [profile, setProfile] = useState(false);

  const [product, setProduct] = useState(false);
  const [deliverables, setDeliverables] = useState(false);

  const useProfile = (
    <div>
      <ul>
        <li>
          <i className="far fa-sign-out-alt  text-sm w-6"></i>
          <button
            className="cursor-pointer hover:text-blue-400 "
            onClick={() => signOut()}
          >
            Гарах
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="mx-auto max-w-3xl  h-14 flex items-center ">
        <div className=" py-1 w-1/3"></div>
        <div className=" flex items-center justify-between  w-full">
          <div className="2xl:pl-10 flex gap-4">
            <span className="text-citizen-title text-base font-medium hover:cursor-pointer hover:text-gray-900">
              Суурь мэдлэг
            </span>
            <span className="text-citizen-title text-base font-medium hover:cursor-pointer hover:text-gray-900">
              Олон нийт
            </span>
            <span className="text-citizen-title text-base font-medium hover:cursor-pointer hover:text-gray-900">
              Холбоо барих
            </span>
          </div>
          <div className="flex">
            <div className="h-full flex items-center relative mx-2">
              <AtomIcon
                item="far fa-cog"
                customClassName="text-xl text-gray-600 hover:text-black"
              />
            </div>
            <div className="h-full flex items-center relative mx-2">
              <AtomIcon
                item="far fa-bell"
                customClassName="text-xl text-gray-600 hover:text-black"
              />
              <div className="absolute top-0 right-0">
                <div className="animate-ping w-2 h-2 rounded-full bg-red-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full w-full py-4 border-y"
        style={{ background: "#fff" }}
      >
        <div className="px-0  w-full mx-auto max-w-3xl ">
          <div
            className={`justify-between h-14 flex items-center ${
              widgetnemgooReady?.insideDiv?.className || ""
            }`}
          >
            <div className=" py-1 w-1/3">
              {/* <img
								src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1647506745/cozy/Group_7131_iirpqn.png"
								alt="logo"
							/> */}
              <AtomImage
                item="https://res.cloudinary.com/dzih5nqhg/image/upload/v1647506745/cozy/Group_7131_iirpqn.png"
                customClassName="w-52"
                link="/"
              />
            </div>
            <div className="w-2/3">
              <div className="flex items-center pl-1 relative 2xl:pl-10">
                <div className="absolute ml-3 top-1 inset-y-2 m-auto lg:w-4 lg:h-4 md:w-4 md:h-4">
                  <span className="far fa-search text-base text-citizen-description"></span>
                </div>
                <input
                  className="hidden bg-gray-600 bg-opacity-10 md:block rounded-xl text-base  text-citizen-description w-full pl-10 py-2.5 placeholder-gray-600 border-none"
                  type="text"
                  placeholder="Мэдлэгийн сангаас хайх..."
                ></input>
              </div>
            </div>
            <div className="w-1/3 flex justify-end ">
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <div className="flex items-center relative">
                    {!session && (
                      <>
                        <span onClick={() => showModal()}> Нэвтрэх</span>
                      </>
                    )}
                    {session && (
                      <>
                        <Popover
                          content={useProfile}
                          placement="bottom"
                          // className="w-56"
                        >
                          <div className="flex items-center cursor-pointer ">
                            <div className="text-right pr-1 ">
                              <span className="p-0 m-0 inline-block capitalize font-semibold text-sm text-citizen-title ">
                                {session?.user?.name}
                              </span>
                              <br />
                              <RenderAtom
                                item={{ value: "Голомт банк" }}
                                defaultAtom="text"
                                customClassName={`capitalize text-sm `}
                              />
                            </div>
                          </div>
                        </Popover>
                      </>
                    )}
                    <AtomAvatar customClassName="border ml-2 border-gray-300 rounded-full object-cover w-11 h-11 p-1 border-solid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Нэвтрэх"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <ModalLogin />
      </Modal>
    </>
  );
}
