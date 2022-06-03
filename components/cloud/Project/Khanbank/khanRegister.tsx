import { FC, useState } from "react";
import RenderAtom from "@atom/RenderAtom";
import { Drawer, Empty } from "antd";
import _ from "lodash";
import { Modal } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";
import { signIn } from "next-auth/react";
import useToggle from "@customhook/useToggle";

import RenderWidgetProcess from "@middleware/components/WidgetForm/RenderWidgetProcess";

type PropsType = {
	type?: "login" | "register";
	setType?: any;
};

const KhanRegister: FC<PropsType> = ({ type, setType }) => {
	const onClickLogin = () => {
		setType("login");
	};
	return (
		<div className="w-full h-full max-h-full overflow-hidden flex flex-col justify-center items-center">
			<RenderWidgetProcess
				listConfig={{ metadataid: "1650443355719672" }} // 1641266492517411
			/>

			<p className="text-[#19181B] text-[13px]">
				Бүртгэлтэй хаяг байгаа юу?
				<span
					className="cursor-pointer font-bold hover:text-kbportal	"
					onClick={() => onClickLogin()}
				>
					Нэвтрэх
				</span>
			</p>
		</div>
	);
};

export default KhanRegister;
