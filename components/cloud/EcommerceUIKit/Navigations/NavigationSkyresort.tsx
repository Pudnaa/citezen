import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { useUser } from "hooks/use-user";
import { renderPositionType } from "util/helper";
import { AtomLinkV2 } from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useCloud } from "hooks/use-cloud";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import ModalLogin from "@components/Login/ModalLogin";
import Link from "next/link";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";
// import { signIn, useSession, signOut } from "next-auth/react";
import { Popover, Button } from "antd";
import _ from "lodash";

export default function NavigationSkyresort() {
  const { readyDatasrc, positionConfig, widgetAllaround } =
    useContext(WidgetWrapperContext);
  const [content, setContent] = useState<any>();
  const [content2, setContent2] = useState<any>();
  const userContext = useUser();
  const [session, setSession] = useState(userContext?.userData);
  const loading = status === "loading";
  const { asPath } = useRouter();

  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModal2, setVisibleModal2] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (visibleModal && !session) {
      setVisibleModal(true);
    }
  }, [visibleModal, session]);

  const useProfile = (
    <div>
      <ul>
        <li>
          <i className="far fa-user text-sm w-6"></i>
          <AtomLinkV2
            item={{ path: "skyresort/profile" }}
            color="blue-400"
            children={<span className="cursor-pointer">Миний мэдээлэл</span>}
          />
        </li>
        <li>
          <i className="far fa-sign-out-alt  text-sm w-6"></i>
          {/* <button onClick={() => signOut()}>Log out</button> */}
          <Link href="/logout">
            <a className="cursor-pointer hover:text-blue-400 ">Гарах</a>
          </Link>
        </li>
      </ul>
    </div>
  );

  const img =
    "https://dev.veritech.mn/storage/uploads/process/202112/file_1639729371676846_160870170544911.png";
  //border-bottom-left-radius:3.5rem;border-bottom-right-radius:3.5rem
  const data = readyDatasrc[0];
  const titles = data?.position31?.value;
  const divStyle = {
    backgroundImage:
      "url(https://res.cloudinary.com/dzih5nqhg/image/upload/v1638498727/sky/424242_xvsrm8.png)",
  };

  const handlerCloseClick = (e: any) => {
    setVisibleModal(false);
  };

  const handlerCloseClick2 = (e: any) => {
    setVisibleModal2(false);
  };

  const handlerClick = (e?: any) => {
    setContent(<ModalLogin onClick={onClickEv} />);
    setVisibleModal(true);
  };

  const onClickEv = () => {
    const param = { metadataid: "1641266492517411" };
    setContent2(<RenderWidgetProcess dialog={true} listConfig={param} />);
    setVisibleModal2(true);
    setVisibleModal(false);
  };

  return (
    <div
      className="z-50 h-36 bg-black bg-opacity-30 rounded-b-3xl relative bg-center bg-cover"
      // style={{ ...divStyle }}
    >
      <div className="absolute w-full h-full">
        <div className="w-full h-24 px-5">
          <div className="w-full h-full border-b border-gray-300 border-opacity-30">
            <div className="container mx-auto flex items-center justify-between w-full h-full">
              <div className="flex space-x-14 items-center">
                <AtomLinkV2
                  item={{
                    path: "/skyresort",
                  }}
                  children={
                    <RenderAtom
                      item={{
                        value: img,
                      }}
                      defaultAtom="image"
                      customClassName="w-auto h-20 z-10"
                    />
                  }
                  customClassName="cursor-pointer"
                />
              </div>
              <div className="flex space-x-10 items-center">
                {/* <div className="flex text-white font-bold text-xl space-x-7">
                  <span className="cursor-pointer">
                    <i className="fal fa-gift"></i>
                  </span>
                  <span className="cursor-pointer">
                    <i className="fal fa-heart"></i>
                  </span>
                  <span className="cursor-pointer">
                    <i className="fal fa-wallet"></i>
                  </span>
                </div> */}
                <div className="flex flex-row z-10 h-10 overflow-hidden rounded-l-3xl rounded-r-3xl">
                  <div className="flex bg-white ">
                    <WidgetWithId widgetId="16397174631411" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* For md screen size */}
        {/* bottom one*/}
        <div className="z-10 text-white container mx-auto h-12">
          <div className="flex items-center justify-between h-full px-5 sm:px-2">
            <div className="flex">
              <div className="md:hidden" onClick={() => setShowMenu(true)}>
                <i className="cursor-pointer text-2xl fa">&#xf0c9;</i>
              </div>
              <ul className="hidden md:flex items-center justify-center space-x-7 mt-2">
                {titles.map((item1: any, index1: number) => {
                  const title = renderPositionType(
                    item1,
                    "position45",
                    positionConfig
                  );
                  return (
                    <li
                      key={item1?.id || index1}
                      className={`pb-1.5 ${
                        asPath === title
                          ? "border-b-2 text-skyresort border-skyresort"
                          : ""
                      } `}
                    >
                      <AtomLinkV2
                        item={{
                          path: title,
                        }}
                        color="skyresort"
                        children={
                          <RenderAtom
                            item={{
                              value: renderPositionType(
                                item1,
                                "position1",
                                positionConfig
                              ),
                            }}
                            defaultAtom="text"
                            customProps={{
                              color: widgetAllaround.color,
                            }}
                            customClassName="uppercase text-xs font-bold"
                          />
                        }
                        customClassName="cursor-pointer"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* <div className="h-full sm:hidden">
              <AtomLinkV2
                item={{
                  path: "/skyresort",
                }}
                children={
                  <RenderAtom
                    item={{
                      value: img,
                    }}
                    defaultAtom="image"
                    customClassName="w-full h-full z-10"
                  />
                }
                customClassName="cursor-pointer"
              />
            </div> */}

            <div className="flex items-center space-x-6 text-xs  font-normal">
              {session && (
                <>
                  <Popover
                    content={useProfile}
                    placement="bottom"
                    // className="w-56"
                  >
                    <div className="flex items-center cursor-pointer">
                      <RenderAtom
                        item={{ value: session?.username }}
                        defaultAtom="text"
                        customClassName={`capitalize font-light text-sm px-1`}
                      />
                      <button
                        id="popover"
                        className="transition duration-150 ease-in-out ml-2 "
                      >
                        <i className="fas fa-chevron-down "></i>
                      </button>
                    </div>
                  </Popover>
                </>
              )}

              {!session && (
                <>
                  <>
                    <div className="flex space-x-2">
                      <i className="fal fa-user"></i>
                      <p
                        className="text-xs font-normal cursor-pointer"
                        onClick={() => handlerClick()}
                      >
                        <span className="uppercase">Нэвтрэх</span>
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <i className="fal fa-lock"></i>
                      {/* <Link href="/skyresort/register"> */}
                      <span
                        className="uppercase cursor-pointer"
                        onClick={() => onClickEv()}
                      >
                        Бүртгүүлэх
                      </span>
                      {/* </Link> */}
                      {/* <link rel="stylesheet" href="register">
                    <p className="text-xs font-normal">Бүртгүүлэх</p>
                  </link> */}
                    </div>
                  </>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* For small screen */}
      <div
        id="mobile-menu"
        className={`${
          showMenu ? "flex" : "hidden"
        } absolute dark:bg-gray-900 z-50 inset-0 md:hidden bg-white flex-col h-screen w-full`}
      >
        <div className="flex items-center justify-end border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
          <div onClick={() => setShowMenu(false)}>
            <RenderAtom
              item={{
                value: null,
              }}
              defaultAtom="button"
              customClassName="text-lg"
              customProps={{
                icon: "far fa-close",
                type: "icon",
                color: widgetAllaround.color,
              }}
            />
          </div>
        </div>
        <div className="mt-6 p-4">
          <ul className="flex flex-col space-y-6">
            {titles.map((item: any, index: number) => {
              const title = renderPositionType(
                item,
                "position45",
                positionConfig
              );
              return (
                <li key={item?.id || index} className="">
                  <AtomLinkV2
                    item={{
                      path:
                        "/skyresort/" +
                        renderPositionType(item, "position45", positionConfig),
                    }}
                    children={
                      <div
                        className={`flex flex-row justify-between ${
                          asPath ===
                          "/skyresort" + (title === "" ? "" : "/") + title
                            ? "text-skyresort"
                            : ""
                        }`}
                      >
                        <RenderAtom
                          item={{
                            value: item.title,
                          }}
                          defaultAtom="text"
                          customProps={{
                            color: widgetAllaround.color,
                          }}
                        />

                        <RenderAtom
                          item={{
                            value: "fal fa-chevron-right",
                          }}
                          defaultAtom="icon"
                          customClassName="text-sm"
                          customProps={{
                            color: widgetAllaround.color,
                          }}
                        />
                      </div>
                    }
                    customClassName="cursor-pointer"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <ModalView
          // visible={visibleModal}
          visible={visibleModal && !session}
          modalOptions={{
            width: 500,
            title: "Нэвтрэх",
          }}
          onClose={handlerCloseClick}
          modelContent={content}
        />
        <ModalView
          visible={visibleModal2}
          modalOptions={{
            width: 650,
            title: "Бүртгүүлэх",
          }}
          onClose={handlerCloseClick2}
          modelContent={content2}
        />
        <div className="h-full flex items-end"></div>
      </div>
    </div>
  );
}
