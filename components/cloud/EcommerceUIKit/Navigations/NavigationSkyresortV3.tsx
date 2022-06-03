import { FC, useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
import _ from "lodash";
import Link from "next/link";
import {
	positionToPath,
	otherAttrToObj,
	jsonParse,
	renderPositionType,
} from "util/helper";
import { AtomLinkV2 } from "@components/common/Atom";
import { Popover, Button } from "antd";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import ModalLogin from "@components/Login/ModalLogin";
import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";
import useToggle from "@customhook/useToggle";
import { useUser } from "hooks/use-user";
export default function NavigationSkyresortV3() {
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

	const [rotate, setRotate] = useState(false);
	const [show, setShow] = useState(false);
	const userContext = useUser();
	const [session, setSession] = useState(userContext?.userData || "");
	//
	// console.log("NavigationSkyresortV3 widgetnemgooReady", widgetnemgooReady);
	// console.log("NavigationSkyresortV3 positionConfig", positionConfig);
	const logoImg =
		"https://dev.veritech.mn/storage/uploads/process/202112/file_1639729371676846_160870170544911.png";

	const useProfile = (
		isGuest: boolean,
		setLoginDisplay: any,
		setRegisterDisplay: any,
	) => {
		return (
			<div>
				<ul>
					<li>
						{isGuest ? (
							<div
								className="cursor-pointer hover:text-skyresort"
								onClick={() => setLoginDisplay(true)}
							>
								<i className="far fa-user text-sm w-6"></i>
								Нэвтрэх
							</div>
						) : (
							<div>
								<i className="far fa-user text-sm w-6"></i>
								<AtomLinkV2
									item={{ path: readyDatasrc[0].profilelink }}
									color="blue-400"
									children={
										<span className="cursor-pointer">Миний мэдээлэл</span>
									}
								/>
							</div>
						)}

						{/* <AtomLinkV2
            item={{ path: "skyresort/profile" }}
            color="blue-400"
            children={
              <button className="cursor-pointer">Миний мэдээлэл</button>
            }
          /> */}
					</li>
					<li>
						{isGuest ? (
							<div
								className="flex cursor-pointer hover:text-skyresort"
								onClick={setRegisterDisplay}
							>
								<RenderAtom
									item={{ value: "fal fa-lock w-6 text-sm" }}
									defaultAtom="icon"
								/>
								<RenderAtom item={{ value: "Бүртгүүлэх" }} defaultAtom="text" />
							</div>
						) : (
							<>
								<i className="far fa-sign-out-alt  text-sm w-6"></i>
								<Link href="/logout">
									<a className="cursor-pointer hover:text-blue-400 ">Гарах</a>
								</Link>
							</>
						)}
					</li>
				</ul>
			</div>
		);
	};

	return (
		<div style={{ backgroundColor: "#5c5c5c", height: "80px" }}>
			<div className="container mx-auto h-full">
				<div className="w-full h-full flex flex-row items-center justify-between">
					<div className="flex items-center h-full w-auto pr-3">
						<RenderAtom
							item={{
								value: logoImg,
								positionnemgoo: {
									url: {
										path: "/",
									},
								},
							}}
							defaultAtom="image"
							customClassName="w-auto h-auto z-10"
						/>
					</div>
					<div className="text-center w-full font-roboto md:flex justify-center sm:hidden xs:hidden">
						<RenderAtom
							item={{
								value: `skyresort / онлайн захиалга`,
							}}
							defaultAtom="text"
							customClassName="font-bold text-sm sm:text-xl uppercase text-white "
						/>
					</div>
					<div>
						<div className="flex space-x-10 items-center justify-end w-full">
							{/* <div className="text-white font-bold text-xl space-x-7 hidden sm:flex">
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
							<UserMenu session={session} useProfile={useProfile} />

							{session ? (
								<div className="flex flex-row z-10 h-10 overflow-hidden rounded-l-3xl rounded-r-3xl">
									<div className="flex bg-white ">
										<WidgetWithId widgetId="16419621802401" />
									</div>
								</div>
							) : (
								<></>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

/* ------------------------------------------------------ */
/*                        USER MENU                       */
/* ------------------------------------------------------ */
type PropsType = {
	session?: any;
	useProfile?: any;
};

const UserMenu: FC<PropsType> = ({ session, useProfile }) => {
	const { toggle: visibleModal, setToggle: setVisibleModal } = useToggle(false);
	const { toggle: visibleModal2, setToggle: setVisibleModal2 } =
		useToggle(false);

	const handlerCloseClick = (e: any) => {
		setVisibleModal(false);
	};

	const handlerCloseClick2 = (e: any) => {
		setVisibleModal2(false);
	};

	const onClickOpenRegister = () => {
		setVisibleModal2(true);
		setVisibleModal(false);
	};

	return (
		<>
			{session ? (
				<>
					<Popover
						content={useProfile}
						placement="bottom"
						// className="w-56"
					>
						<div className="flex items-center cursor-pointer text-white">
							<RenderAtom
								item={{ value: session?.customername }}
								defaultAtom="text"
								customClassName={`capitalize font-light text-sm px-1 w-36 text-right`}
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
			) : (
				<>
					{/* <Popover
            content={useProfile(true, setVisibleModal, onClickOpenRegister)}
            placement="bottom"
            // className="w-56"
          >
            <div className="flex items-center cursor-pointer text-white">
              <RenderAtom
                item={{ value: session?.customername }}
                defaultAtom="text"
                customClassName={`capitalize font-light text-sm px-1 w-36`}
              />
              <button
                id="popover"
                className="transition duration-150 ease-in-out ml-2 "
              >
                <div className="flex space-x-1">
                  <RenderAtom
                    item={{ value: "Зочин" }}
                    defaultAtom="text"
                    customClassName={`capitalize font-light text-sm text-white font-bold`}
                  />
                  <i className="fas fa-chevron-down "></i>
                </div>
              </button>
            </div>
          </Popover> */}
					<div className="text-white flex flex-row items-center space-x-3">
						<div className="flex space-x-2 items-center">
							<RenderAtom item={{ value: "fal fa-user" }} defaultAtom="icon" />
							<RenderAtom
								item={{ value: "Нэвтрэх" }}
								defaultAtom="text"
								onClick={() => setVisibleModal(true)}
								customClassName="cursor-pointer"
							/>
						</div>
						<div className="flex space-x-2 items-center">
							<RenderAtom item={{ value: "fal fa-lock" }} defaultAtom="icon" />
							<RenderAtom
								item={{ value: "Бүртгүүлэх" }}
								defaultAtom="text"
								onClick={() => onClickOpenRegister()}
								customClassName="cursor-pointer"
							/>
						</div>
					</div>
				</>
			)}

			<ModalView
				visible={visibleModal && !session}
				modalOptions={{
					width: 500,
					title: "Нэвтрэх",
				}}
				onClose={() => setVisibleModal(false)}
				modelContent={<ModalLogin onClick={onClickOpenRegister} />}
			/>
			<ModalView
				visible={visibleModal2}
				modalOptions={{
					width: 650,
					title: "Бүртгүүлэх",
				}}
				onClose={() => setVisibleModal2(false)}
				// modelContent={content2}
				modelContent={
					<RenderWidgetProcess
						dialog={true}
						listConfig={{ metadataid: "1641266492517411" }}
					/>
				}
			/>
		</>
	);
};
