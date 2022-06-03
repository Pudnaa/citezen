import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import KhanDrawerLogin from "./khanDrawer";
import _ from "lodash";

import { useSession, signOut } from "next-auth/react";
import useScrollTop from "@customhook/useScrollTop";
import { Popover } from "antd";
import { AtomLinkV3, AtomImage } from "@components/common/Atom";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

import useToggle from "@customhook/useToggle";

export default function khanHeader() {
	const { t } = useTranslation("common");
	const router = useRouter();

	const { config, readyDatasrc, widgetnemgooReady } =
		useContext(WidgetWrapperContext);
	const { isTop, setIsTop } = useScrollTop(true);
	const header = widgetnemgooReady?.header || {};
	const { data: session, status }: any = useSession();
	const { toggle, setToggle } = useToggle(false);
	const [register, setRegister] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const useProfile = (
		<div className="p-4 ">
			<div className="flex justify-center flex-col text-center">
				<div className="flex justify-center w-full ">
					{" "}
					<img
						src={session?.profileImg}
						alt="prof"
						className="w-[27.5px] h-[27.5px] mx-2 "
					/>
				</div>

				<div>
					<span className="p-0 m-0 inline-block text-[13px] font-semibold text-kbportal">
						{session?.user?.name}
					</span>
				</div>
			</div>

			<ul className="pt-2">
				<li>
					<i className="fa-thin fa-pen-to-square text-sm w-6"></i>
					<AtomLinkV3
						href="/khanbank/company"
						color="blue-400"
						children={
							<span className="cursor-pointer pl-1 text-[13px]  hover:text-kbportal">
								Mэдээлэл засах
							</span>
						}
					/>
					{/* <span className="cursor-pointer" onClick={handleClick}>
						Миний мэдээлэл
					</span> */}
				</li>
				<li>
					{" "}
					<i className="fa-thin fa-pen-to-square text-sm w-6"></i>
					<AtomLinkV3
						href="/khanbank/passwordreset"
						color="blue-400"
						children={
							<span className="cursor-pointer pl-1 text-[13px]  hover:text-kbportal ">
								Нууц үг солих{" "}
							</span>
						}
					/>
				</li>
				<li>
					<i className="fa-thin fa-arrow-right-from-bracket text-sm w-5"></i>
					<button
						className="cursor-pointer hover:text-kbportal text-[13px] pl-2  "
						onClick={() => signOut()}
					>
						Cистемээс гарах
					</button>
				</li>
			</ul>
		</div>
	);
	return (
		<>
			<BlockDiv
				customClassName={` top-0 inset-x-0 w-full h-16 bg-white flex items-center h-[100px] bg-white z-30 ${
					isTop ? header?.top?.className : header?.standard?.className
				} transition ease-in-out`}
				divNumber="divHeaderOuter"
			>
				<BlockDiv
					customClassName="max-w-kbcontainer mx-auto flex flex-row items-center justify-between w-full "
					divNumber="divHeaderInner"
				>
					<BlockDiv
						customClassName="flex-none w-48"
						divNumber="divHeaderZone01"
					>
						<AtomImage
							item="https://res.cloudinary.com/dzih5nqhg/image/upload/v1651485930/Khanbank/Logo_by6gqv.png"
							customClassName="w-auto h-10 object-contain object-center"
							link="/khanbank"
						/>
					</BlockDiv>
					<BlockDiv customClassName="flex-none" divNumber="divHeaderZone03">
						<BlockDiv
							customClassName="lg:flex xs:hidden gap-x-2 items-center justify-end lg:w-[260px] xs:w-full"
							divNumber="divHeader501"
						>
							{(!session && (
								<div className="pr-2 flex gap-2">
									<span
										className="bg-kbportal lg:py-[6px] lg:px-[16px] rounded lg:h-[32px] lg:w-[84px] cursor-pointer text-white capitalize xs:w-[67px] xs:text-[11px] xs:h-[24px] xs:flex xs:items-center xs:justify-center"
										onClick={() => setToggle(!toggle)}
									>
										{t("kb_0001")}
									</span>

									<RenderAtom
										item={{ value: t("kb_0002") }}
										defaultAtom="button"
										onClick={() => setRegister((prev) => !prev)}
										customClassName="text-kbportal border-2 border-kbportal rounded lg:w-[103px] lg:h-[32px] capitalize xs:w-[82px] xs:h-[24px] xs:text-[11px]"
									/>
								</div>
							)) || (
								<>
									<Popover
										content={useProfile}
										placement="bottom"
										className="pr-4"
									>
										<div className="flex items-center cursor-pointer">
											<div className="text-right  ">
												<img
													src={session?.profileImg}
													alt="prof"
													className="w-[27.5px] h-[27.5px] mx-2 "
												/>
												<span className="p-0 m-0 inline-block text-[13px] font-semibold text-kbportal">
													{session?.user?.name}
												</span>
												<i className="fa-thin fa-angle-down px-2"></i>
											</div>
										</div>
									</Popover>
								</>
							)}
							<>
								<RenderAtom
									item={{ value: "fa-thin fa-globe" }}
									defaultAtom="icon"
									customClassName="opacity-95 xs:hidden lg:block"
								/>
								<span>
									<Link
										href={router.asPath}
										locale={router.locale === "mn" ? "en" : "mn"}
									>
										<button className="opacity-95 cursor-pointer xs:hidden lg:block">
											{router.locale === "mn" ? "EN" : "МН"}
										</button>
									</Link>
								</span>
							</>
						</BlockDiv>
						<div className="xs:block lg:hidden">
							{(!session && (
								<div className="">
									<i
										className="fa-solid fa-bars fa-xl"
										onClick={() => setOpenMenu(!openMenu)}
									></i>
								</div>
							)) || (
								<div className="flex items-center justify-center">
									<Popover
										content={useProfile}
										placement="bottom"
										className="py-2"
									>
										<div className="flex items-center cursor-pointer">
											<div className="text-right  ">
												<img
													src={session?.profileImg}
													alt="prof"
													className="w-[27.5px] h-[27.5px] mx-2 "
												/>
												<span className="p-0 m-0 inline-block text-[13px] font-semibold text-kbportal">
													{session?.user?.name}
												</span>
												<i className="fa-thin fa-angle-down px-2"></i>
											</div>
										</div>
									</Popover>
								</div>
							)}
						</div>
					</BlockDiv>
				</BlockDiv>
			</BlockDiv>
			{toggle && (
				<KhanDrawerLogin type="login" toggle={toggle} setToggle={setToggle} />
			)}
			{register && (
				<KhanDrawerLogin
					type="register"
					toggle={register}
					setToggle={setRegister}
				/>
			)}
			{/* ResponSive header Menu */}
			{openMenu && (
				<>
					<div className="w-full flex items-center bg-white justify-around">
						<button
							className="bg-kbportal text-white px-8 rounded my-2"
							onClick={() => setToggle(!toggle)}
						>
							{t("kb_0001")}
						</button>
						<button
							className="border rounded border-kbportal px-8 text-black my-2"
							onClick={() => setRegister((prev) => !prev)}
						>
							{t("kb_0002")}
						</button>
						<div>
							<i className="fa-thin fa-globe fa-xl opacity-40 mr-1" />
							<Link
								href={router.asPath}
								locale={router.locale === "mn" ? "en" : "mn"}
							>
								<button>{router.locale === "mn" ? "en" : "mn"}</button>
							</Link>
						</div>
					</div>
				</>
			)}
		</>
	);
}
