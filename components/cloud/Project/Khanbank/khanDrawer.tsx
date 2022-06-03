import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import { Drawer, Empty } from "antd";
import _ from "lodash";
import { Modal } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";
import { signIn } from "next-auth/react";
import useToggle from "@customhook/useToggle";
import KhanLogin from "./khanLogin";
import KhanRegister from "./khanRegister";
import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";

type PropsType = {
	type?: "login" | "register";
	toggle?: boolean;
	setToggle?: any;
};

const KhanDrawerLogin: FC<PropsType> = ({
	type,
	toggle = false,
	setToggle,
}) => {
	const [showpass, setShowPass] = useState(false);
	const [ischeck, setIscheck] = useState(false);
	const [contentType, setContentType] = useState(type);
	const { toggle: visibleModal2, setToggle: setVisibleModal2 } =
		useToggle(false);
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();

	const onChangeHandlerName = (e: any) => {
		e.preventDefault();
		setUsername(e.target.value);
	};

	const onChangeHandlerPassword = (e: any) => {
		e.preventDefault();
		setPassword(e.target.value);
	};
	const onSubmit = async (e: any) => {
		e.preventDefault();

		let parameters = {
			iscustomer: true,
			redirect: false,
			callbackUrl: "/khanbank",
			username: username,
			password: password,
		};

		console.log("param ", parameters);
		const res = await signIn("credentials", parameters);
		console.log("res ", res);
		if (res.status == 401) {
			setIscheck(true);
		}
	};
	const onClickPassReset = () => {
		setVisibleModal2(true);
	};
	const setContentTyped = () => {
		setContentType("register");
	};
	const setContentTypeLogin = () => {
		setContentType("login");
	};

	const onClose = () => {
		setVisibleModal2(false);
	};
	const contentItem = () => {
		switch (contentType) {
			case "login":
				return <KhanLogin type={contentType} setType={setContentTyped} />;
			default:
				return (
					<KhanRegister type={contentType} setType={setContentTypeLogin} />
				);
		}
	};

	return (
		<>
			<Drawer
				// title={<>login</>}
				placement="right"
				visible={toggle}
				mask={true}
				width={window.innerWidth > 500 ? 850 : "100%"}
				// width="100%"
				closable={true}
				closeIcon=""
				onClose={() => {
					setToggle(false);
				}}
			>
				{contentItem()}
			</Drawer>
		</>
	);
};

export default KhanDrawerLogin;
