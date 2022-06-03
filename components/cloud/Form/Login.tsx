import { FC, useState, useContext } from 'react'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import { Modal } from 'antd'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { signIn } from 'next-auth/react'
import useToggle from '@customhook/useToggle'
import RenderWidgetProcess from '@middleware/components/WidgetForm/RenderWidgetProcess'
import { useTranslation } from 'next-i18next'

type PropsType = {
  type?: 'login' | 'register'
  setType?: any
}

const Login: FC<PropsType> = ({ type, setType }) => {
  const {
    config,
    positionConfig,
    metaConfig,
    readyDatasrc,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)
  const { t } = useTranslation('common')
  const [showpass, setShowPass] = useState(false)
  const [ischeck, setIscheck] = useState(false)
  const { toggle: visibleModal2, setToggle: setVisibleModal2 } = useToggle(
    false,
  )
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [hover, setHover] = useState('')
  const [activeBtn, setActiveBtn] = useState('Нэвтрэх')
  const onChangeHandlerName = (e: any) => {
    e.preventDefault()
    setUsername(e.target.value)
  }

  const onChangeHandlerPassword = (e: any) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const onSubmit = async (e: any) => {
    e.preventDefault()

    let parameters = {
      iscustomer: true,
      redirect: false,
      callbackUrl: '/khanbank',
      username: username,
      password: password,
    }

    const res = await signIn('credentials', parameters)
    if (res.status == 401) {
      setIscheck(true)
    }
  }

  const onClickPassReset = () => {
    setVisibleModal2(true)
  }

  const onClose = () => {
    setVisibleModal2(false)
  }

  const onClickRegister = () => {
    setType('register')
  }
  return (
    <div className="w-full h-[100vh] overflow-hidden flex flex-col items-center bg-white relative px-[50px]">
      <RenderAtom
        item={{
          value:
            'https://res.cloudinary.com/dzih5nqhg/image/upload/v1630998948/cloud/icons/Group_223_xdibqp.png',
        }}
        defaultAtom="image"
        customClassName={'w-[210px] h-[120px] my-14'}
      />
      <div className="w-[480px] text-start flex flex-col items-center">
        <div className="w-[480px] text-start px-[50px]">
          <p className="text-citizen-blue text-[24px] m-0  font-bold">
            Сайн байна уу?
          </p>
          <span className="font-medium leading-5 text-tiny">
            Таньд энэ өдрийн мэнд хүргэе
          </span>
          {ischeck && (
            <div className="bg-[#FFE1DF] flex text-[#D93A30] space-x-2 mt-4 mb-2-4 py-4 px-4 rounded-lg text-">
              <i className="fa-regular fa-circle-exclamation"></i>
              <span> Нэвтрэх нэр эсвэл нууц үгийг шалгана уу</span>
            </div>
          )}
          <div>
            <div className="flex flex-col py-4 space-y-4">
              <div className="relative mt-4 w-full flex items-center h-9">
                <i className="far fa-user absolute text-gray-500 flex items-center px-2 false hover:text-citizien" />
                <input
                  type="text"
                  placeholder="Хэрэглэгчийн нэр"
                  onChange={(e: any) => onChangeHandlerName(e)}
                  className={`w-full outline-none flex items-center pl-7 text-sm border-[#E1E1E1] rounded-md h-10 text-gray-600 border-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white font-normal ${
                    ischeck ? ` border-red-500` : `border-[#F9F9F9]`
                  }`}
                />
              </div>
              <div className="relative mt-4 w-full flex items-center h-9">
                <i className="fa-regular fa-lock absolute text-gray-500 flex items-center px-2 false hover:text-citizien" />
                <input
                  type="text"
                  placeholder="Нууц үг"
                  onChange={(e: any) => onChangeHandlerPassword(e)}
                  className={`w-full outline-none flex items-center pl-7 text-sm border-[#E1E1E1] rounded-md h-10 text-gray-600 border-1 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white font-normal ${
                    ischeck ? ` border-red-500` : `border-[#F9F9F9]`
                  }`}
                />
              </div>
              {/* <div
								onClick={() => setShowPass(!showpass)}
								className="absolute right-3 top-3 cursor-pointer"
							>
								<div id="show">
									<svg
										width={16}
										height={16}
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
											fill="#71717A"
										/>
									</svg>
								</div>
								<div id="hide" className="hidden">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="icon icon-tabler icon-tabler-eye-off"
										width={16}
										height={16}
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="#27272A"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<line x1={3} y1={3} x2={21} y2={21} />
										<path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
										<path d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341" />
									</svg>
								</div>
							</div> */}
              {/* </div> */}
            </div>

            <span className="flex justify-between pt-2">
              <span className="text-[#A0A0A0] text-[13px] cursor-pointer  hover:text-kbportal">
                <input
                  type="checkbox"
                  className="rounded-sm border-1 border-[#A0A0A0] w-4 h-4 mr-2.5"
                />{' '}
                Нэвтрэх нэр санах
              </span>
              <span
                className="text-[#A0A0A0] text-[13px] cursor-pointer  hover:text-kbportal"
                onClick={() => onClickPassReset()}
              >
                Нууц үгээ мартсан?{' '}
              </span>
            </span>
            <span
              className="bg-[#538EFA] font-bold text-lg text-white text-center  rounded-md w-full inline-block py-2 my-6 cursor-pointer hover:bg-opacity-90"
              onClick={(e: any) => onSubmit(e)}
            >
              Нэвтрэх
            </span>
            <span className="flex justify-center w-full text-[#A0A0A0] text-tiny">
              Эсвэл
            </span>
            <div className="flex w-full justify-between items-center mt-[22px] h-10">
              <button
                className="w-[180px] shadow h-10 rounded-[10px] hover:bg-[#4267B2] cursor-pointer"
                onMouseEnter={() => setHover('facebook')}
                onMouseLeave={() => setHover(null)}
              >
                <i
                  className="fa-brands fa-facebook-f w-[9px] h-[19px]"
                  style={{
                    color: hover === 'facebook' ? 'white' : '#4267B2',
                    width: '9px',
                    height: '19px',
                  }}
                />
              </button>
              <button
                className="w-[180px] shadow h-10 rounded-[10px] cursor-pointer hover:bg-[#F44336]"
                onMouseEnter={() => setHover('google')}
                onMouseLeave={() => setHover(null)}
              >
                <i
                  className="fa-brands fa-google-plus-g w-[25px] h-[25px]"
                  style={{ color: hover === 'google' ? 'white' : '#F44336' }}
                />
              </button>
            </div>
            <p className="text-sm text-center mt-5 text-[#585858]">
              Хаягаар нэвтрэх
            </p>
          </div>
          {/* <p className="text-[#19181B] text-[13px]">
					{t("kb_0016")}
					<span
						className="cursor-pointer font-bold hover:text-kbportal capitalize pl-1	"
						onClick={() => onClickRegister()}
					>
						{t("kb_0002")}
					</span>
				</p> */}
        </div>
      </div>

      <Modal
        visible={visibleModal2}
        width={620}
        title="Нууц үг сэргээх"
        centered
        footer={false}
        onCancel={onClose}
      >
        {
          <RenderWidgetProcess
            dialog={true}
            listConfig={{ metadataid: '1650443355719672' }} // 1641266492517411
          />
        }
      </Modal>
      <div className="absolute bottom-10 left-0 w-full flex justify-between h-10 px-[50px]">
        <button
          className={`w-[180px] h-10 rounded  font-bold text-lg cursor-pointer bg-white ${
            activeBtn === 'Нэвтрэх'
              ? 'shadow text-citizen-blue'
              : 'text-[#667C8A]'
          }`}
          onClick={(e: any) => setActiveBtn('Нэвтрэх')}
        >
          Нэвтрэх
        </button>
        <button
          className={`w-[180px] h-10 rounded font-bold text-lg cursor-pointer bg-white ${
            activeBtn === 'Бүртгүүлэх'
              ? 'shadow text-citizen-blue'
              : 'text-[#667C8A]'
          }`}
          onClick={(e: any) => {
            setActiveBtn('Бүртгүүлэх'), onClickRegister()
          }}
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  )
}

export default Login
