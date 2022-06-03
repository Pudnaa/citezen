import { useState, useContext, useEffect } from 'react'
import useToggle from '@customhook/useToggle'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
import Link from 'next/link'
import { useUser } from 'hooks/use-user'
import { signIn, useSession, signOut } from 'next-auth/react'
import { Popover } from 'antd'
import AtomAvatar from '@components/common/Atom/AtomAvatar'
import Router, { useRouter } from 'next/router'
import ModalLogin from '@components/Login/ModalLogin'
import ModalView from '@components/cloud/Custom/Modal/ModalView'
import { Modal } from 'antd'
import {
  AtomImage,
  AtomText,
  AtomTitle,
  AtomIcon,
  AtomInput,
  AtomLinkV3,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
export default function HorizontalNavigation() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)
  const { data: session, status }: any = useSession()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }
  const handlerTypeEvent = (item: boolean) => {
    setIsModalVisible(item)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const [sideBar, setsideBar] = useState()
  const [show, setShow] = useState(null)
  const [profile, setProfile] = useState(false)
  // const [session, setSession] = useState(userContext?.userData);

  const [product, setProduct] = useState(false)
  const [deliverables, setDeliverables] = useState(false)
  // useEffect(() => {
  // 	console.log(session);
  // }, [session]);
  console.log('session', session)

  const useProfile = (
    <div>
      <ul>
        <li>
          <i className="far fa-user text-sm w-6"></i>
          <AtomLinkV3
            href="/page/16322760249471"
            color="blue-400"
            children={
              <span className="cursor-pointer pl-1">Миний мэдээлэл</span>
            }
          />
          {/* <span className="cursor-pointer" onClick={handleClick}>
						Миний мэдээлэл
					</span> */}
        </li>
        <li>
          <i className="far fa-sign-out-alt  text-sm w-6"></i>
          <button
            className="cursor-pointer hover:text-blue-400 "
            onClick={() => signOut()}
          >
            Гарах
          </button>
          {/* <Link href="/logout">
						<a className="cursor-pointer hover:text-blue-400 ">Гарах</a>
					</Link> */}
        </li>
      </ul>
    </div>
  )

  return (
    <>
      <div className="h-full w-full" style={{ background: '#fff' }}>
        {/* Code block starts */}
        <div
          className="px-0 my-2 w-full mx-auto  container"
          style={{ background: '#fff' }}
        >
          <div
            className={`justify-between h-14 flex items-center ${
              widgetnemgooReady?.insideDiv?.className || ''
            }`}
          >
            <div className="h-full flex items-center py-1">
              <AtomImage
                item="https://cloud.veritech.mn/app/storage/uploads/process/logo.png"
                customClassName="flex items-center pl-0"
                link="/"
              />
            </div>
            <div className="flex items-center justify-end ">
              <div className="flex items-center ">
                <AtomInput
                  item=""
                  icon="far fa-search"
                  value={undefined}
                  placeholder="Хайх ..."
                  inputContainer={{
                    customClassName:
                      'text-sm p-0 text-gray-600 border-0 focus:outline-none outline:none focus:none font-normal',
                  }}
                  type="text"
                  customClassName="w-full border px-4  rounded-lg bg-white"
                />
                <div className="xs:block lg:hidden">
                  <RenderAtom
                    item={{ value: 'fa-solid fa-bars' }}
                    defaultAtom="icon"
                    customClassName={''}
                    onClick={() => setShow(!show)}
                  />
                </div>
                {/* <div className="h-full flex items-center relative mx-5">
								<AtomIcon
									item="far fa-bell"
									customClassName="text-xl text-gray-600"
								/>
								<div className="absolute top-0 right-0">
									<div className="animate-ping w-2 h-2 rounded-full bg-citizen" />
								</div>
								</div> */}
              </div>
              <div className="hidden xl:flex items-center">
                <div className="ml-6 relative">
                  <div className="flex items-center relative">
                    {!session && (
                      // <RenderAtom
                      // 	item={{ value: "Нэвтрэх" }}
                      // 	defaultAtom="text"
                      // 	// onClick={() => setVisibleModal(true)}
                      // 	onClick={() => handlerClick()}
                      // 	customClassName="cursor-pointer"
                      // />
                      <>
                        <span onClick={() => showModal()}> Нэвтрэх</span>
                      </>

                      // <Link href="/login">
                      // 	<a>
                      // 		<span>Нэвтрэх</span>
                      // 	</a>
                      // </Link>
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
                              {/* <RenderAtom
																item={{ value: session?.customercode }}
																defaultAtom="text"
																customClassName={`capitalize font-light text-sm px-1`}
															/> */}
                              <span className="p-0 m-0 inline-block te">
                                {session?.user?.name}
                              </span>
                              <br />
                              <RenderAtom
                                item={{ value: session?.user?.name }}
                                defaultAtom="text"
                                customClassName={`capitalize font-semibold text-sm `}
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
        <div className={`w-full border-t lg:block ${show ? '' : 'xs:hidden'}`}>
          <div className="container  mx-auto flex items-center justify-between xs:flex-col lg:flex-row">
            <nav className=" 	 " role="navigation">
              <ul className="flex gap-6  items-center text-citizen-title text-base font-medium xs:flex-col lg:flex-row ">
                <li>
                  <span className="flex bg-blue-400 text-white gap-2 my-2 py-1.5 px-4 hover:cursor-pointer rounded-full">
                    <i className="fa-solid fa-bars"></i>
                    <a href=""> Үйлчилгээ</a>
                  </span>
                </li>
                <li>
                  <a href=""> Нүүр</a>
                </li>
                <li>
                  <a href="">Хамтрагч байгууллагууд</a>
                </li>
                <li>
                  <a href="">Хямдрал, урамшуулал</a>
                </li>
                <li>
                  <a href="">Мэдээ, Мэдээлэл</a>
                </li>
              </ul>
            </nav>
            <div>
              <div className="h-full flex items-center relative pl-4 xs:mt-2 lg:mt-0">
                <AtomIcon
                  item="far fa-bell"
                  customClassName="text-xl text-gray-600"
                />
                <div className="absolute top-0 right-0">
                  <div className="animate-ping w-2 h-2 rounded-full bg-citizen" />
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
        <ModalLogin handlerTypeEvent={handlerTypeEvent} />
      </Modal>
    </>
  )
}
