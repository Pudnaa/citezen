import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import KhanDrawerLogin from "./khanDrawer";
import { useTranslation } from "next-i18next";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import KhanTenderMenu from "./khanTenderMenu";
import useToggle from "@customhook/useToggle";
import Modal from "antd/lib/modal/Modal";

export default function khanDetailsDetails() {
	const { readyDatasrc } = useContext(WidgetWrapperContext);
	const { t } = useTranslation("common");
	const router = useRouter();
	const { data: session } = useSession();
	const { toggle, setToggle } = useToggle(false);
	const [register, setRegister] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const handleClose = () => {
		setOpenModal(false);
	};
	const backgroundImage =
		"https://res.cloudinary.com/dzih5nqhg/image/upload/v1651629235/Khanbank/Green_pattern_2_4_tnysqr.png";

	return (
		<>
			<div className="max-w-kbcontainer mx-auto">
				<div className={"py-10 cursor-pointer xs:px-4 lg:px-0"}>
					<RenderAtom
						item={{ value: "fa-solid fa-arrow-left-long" }}
						defaultAtom="icon"
						customClassName={"text-black/60 hover:text-[#04A15A]"}
					/>
					<RenderAtom
						item={{ value: t("kb_0022") }}
						defaultAtom="text"
						onClick={() => router.back()}
						customClassName={
							"text-black/60 ml-3 font-segoe hover:text-[#04A15A] "
						}
					/>
				</div>
				<BlockDiv
					customClassName={`ftransition ease-in-out`}
					divNumber="divDetailsOuter"
				>
					<RenderAtom
						item={{
							value:
								"Хаан банканд шаардлагатай вебсайтын хөгжүүлэлтийн үйлчилгээ үзүүлэх нийлүүлэгчийг сонгох",
						}}
						defaultAtom="title"
						customClassName={
							"font-semibold leading-10 lg:text-4xl pb-10 xs:text-tiny xs:text-center"
						}
					/>
					<div
						className={
							"flex justify-between items-center w-full xs:flex-col lg:flex-row"
						}
					>
						<div
							className={
								"flex lg:w-3/4 justify-between bg-[#F8FCFA] w-full items-center"
							}
						>
							{data.map((item, index) => (
								<div
									key={index}
									className={
										"flex flex-col justify-center items-center py-2.5 w-[206px]"
									}
								>
									<RenderAtom
										item={{ value: item.type + ":" }}
										defaultAtom="text"
										customClassName="xs:text-xs lg:text-xs font-segoe"
									/>
									<RenderAtom
										item={{ value: item.text }}
										defaultAtom="title"
										customClassName="text-kbportal xs:text-tiny lg:text-xl font-segoe font-semibold"
									/>
								</div>
							))}
						</div>
						<RenderAtom
							item={{ value: t("kb_0008") }}
							defaultAtom="button"
							onClick={() => setOpenModal(true)}
							customClassName={
								"border-2 border-kbportal-300/50 rounded text-kbportal/50 font-semibold w-1/4  xs:w-[200px] lg:w-[250px] xs:mt-3 h-[48px] lg:mt-0"
							}
						/>
					</div>
					<div className={"max-w-[730px] mx-auto flex flex-col justify-around"}>
						<RenderAtom
							item={{
								value:
									"1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
							}}
							defaultAtom="text"
							customClassName="lg:text-base my-10 xs:px-4 ls:p-0 xs:text-tiny"
						/>
						<RenderAtom
							item={{
								value:
									"1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
							}}
							defaultAtom="text"
							customClassName="lg:text-base xs:text-tiny xs:px-4 ls:p-0"
						/>
					</div>
				</BlockDiv>
			</div>

			{!session && (
				<div
					className={
						"w-full h-[256px] flex flex-col lg:justify-around xs:justify-evenly items-center mt-[80px] mb-[36px]"
					}
					style={{ backgroundImage: `url(${backgroundImage})` }}
				>
					<RenderAtom
						item={{ value: "Sign up with Khan bank tender today" }}
						defaultAtom="title"
						customClassName={"lg:text-[34px] xs:text-base"}
					/>
					<RenderAtom
						item={{
							value:
								"So what are you waiting for? Join over 2 million people who’ve found a better way to manage their money online. Sign up to Khan bank to open your mobile money account today.",
						}}
						defaultAtom="text"
						customClassName={
							"lg:w-[730px] lg:text-center xs:w-auto xs:text-center xs:px-2 lg:px-0 lg:text-base xs:text-xs"
						}
					/>
					<div className="flex items-center w-[303px] justify-between h-[48px]">
						<span
							className="text-[15px] bg-kbportal rounded text-white h-full py-3 px-8 capitalize cursor-pointer"
							onClick={() => setToggle(!toggle)}
						>
							{t("kb_0001")}
						</span>
						<RenderAtom
							item={{ value: t("kb_0002") }}
							defaultAtom="button"
							onClick={() => setRegister((prev) => !prev)}
							customClassName={
								"text-[15px] border-2 rounded border-kbportal text-kbportal h-full py-3 px-8 "
							}
						/>
					</div>
					{toggle && (
						<KhanDrawerLogin
							type="login"
							toggle={toggle}
							setToggle={setToggle}
						/>
					)}
					{register && (
						<KhanDrawerLogin
							type="register"
							toggle={register}
							setToggle={setRegister}
						/>
					)}
				</div>
			)}

			{/*  */}
			{/*  */}
			{/*  */}
			{/*  */}
			{/*  */}
			<div className="max-w-kbcontainer mx-auto">
				<div className="w-full h-[264px] border-kbportal border rounded p-[30px]">
					<RenderAtom
						item={{ value: t("kb_0031") }}
						defaultAtom="title"
						customClassName={"text-xl text-kbportal "}
					/>
					<div className="w-full grid grid-cols-2 gap-4 pt-10">
						{paymentData.map((item, index) => (
							<div
								key={index}
								className="border relative border-black/25 rounded flex justify-between items-center w-[510px] h-[48px] px-4 py-3 z-10"
							>
								<p className="absolute top-[-10px] left-[18px] z-20 bg-white font-semibold text-[#19181B] text-[12px]">
									{item.title}
								</p>
								<RenderAtom
									item={{ value: item.text }}
									defaultAtom="text"
									customClassName={"text-[17px] font-semibold"}
								/>
								<RenderAtom
									item={{ value: t("kb_0024") }}
									defaultAtom="button"
									customClassName={
										"border border-kbportal rounded text-[11px] font-semibold text-kbportal py-1"
									}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="max-w-kbcontainer mx-auto mt-5">
				<div className="w-full h-[256px] border-kbportal border rounded p-[30px]">
					<RenderAtom
						item={{ value: "Тодруулга асуулт" }}
						defaultAtom="title"
						customClassName={"text-xl text-kbportal"}
					/>
					<div className="w-full rounded border border-black/20 px-3 py-4 relative mt-[30px] z-10">
						<p className="absolute left-[18px] top-[-12px] bg-white z-20 text-[#19181B] font-semibold px-6">
							Та тодруулга асуултаа бичнэ үү
						</p>
						<RenderAtom
							item={{
								value:
									"Online classes are hot right now for a variety of reasons – including the fact that during the past few years, it’s often been difficult to gather in person. Out-of-the-box thinking meant that pastry chefs could offer mini-workshops on making éclairs if their restaurants were shut, and teachers of all stripes could share their knowledge when schools were closed or practicing remote learning. ",
							}}
							defaultAtom="text"
							customClassName={"text-[17px] font-semibold "}
						/>
					</div>
					<div className="h-8 pl-4 pb-4 flex items-center mt-2">
						<p className="text-3 text-black/60 ">300/500</p>
						<div className="h-4 w-4 rounded-full border border-kbportal ml-1"></div>
					</div>
				</div>
			</div>
			<KhanTenderMenu />
			<Modal
				visible={openModal}
				onCancel={handleClose}
				footer={null}
				width={730}
			>
				<div className="h-[518px] bg-red flex items-center justify-evenly flex-col py-[60px] px-[110px]">
					<RenderAtom
						item={{ value: "fa-solid fa-check" }}
						defaultAtom="icon"
						customClassName={"fa-6x text-[#04A15A]"}
					/>
					<div className="flex flex-col items-center">
						<RenderAtom
							item={{ value: "Амжилттай бүртгэгдлээ" }}
							defaultAtom="text"
							customClassName={"font-semibold text-[28px]"}
						/>
						<RenderAtom
							item={{
								value: "Та мэйл хаягаа шалгаж бүртгэлээ баталгаажуулна уу",
							}}
							defaultAtom="text"
							customClassName={"opacity-50 text-[15px]"}
						/>
					</div>
					<RenderAtom
						item={{ value: t("kb_0025") }}
						defaultAtom="button"
						onClick={handleClose}
						customClassName={
							"w-full bg-kbportal font-bold text-[15px] text-white"
						}
					/>
				</div>
			</Modal>
		</>
	);
}

const data = [
	{
		type: "Дугаар",
		text: "RFP22-57",
	},
	{
		type: "Төлөв",
		text: "Нээлттэй",
	},
	{
		type: "Зарласан огноо",
		text: "14/03/20222",
	},
	{
		type: "Дуусах огноо",
		text: "14/04/2022",
	},
];
const paymentData = [
	{
		title: "Дансны дугаар",
		text: "5000 000 015",
		btn: "Хуулах",
	},
	{
		title: "Дансны нэр",
		text: "Хаан банк",
		btn: "Хуулах",
	},
	{
		title: "Гүйлгээний утга",
		text: "RGP22-91 АА90020214",
		btn: "Хуулах",
	},
	{
		title: "Мөнгөн дүн",
		text: "50,000₮",
		btn: "Хуулах",
	},
];
