import { FC, useState } from "react";
import { useUser } from "hooks/use-user";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { signIn, useSession, signOut } from "next-auth/react";

type PropsType = {
	item?: string;
	type?: "simple" | "square";
	customClassName?: string;
	customStyle?: object;
};

const AtomAvatar: FC<PropsType> = ({
	item = "simple",
	customStyle = {},
	customClassName = "",
}) => {
	const userContext = useUser();

	const { data: session, status }: any = useSession();
	const emppicture =
		"https://res.cloudinary.com/dzih5nqhg/image/upload/v1637746847/cloud/icons/QMpejaITONnxnRBZKksI_mhmyc4.gif";

	const userData = userContext.userData;

	return (
		<>
			<RenderAtom
				item={{
					// value: "https://dev.veritech.mn/" + userData?.emppicture,
					value: session?.profileImg || emppicture,
				}}
				defaultAtom="image"
				customClassName={`  ${customClassName}`}
			/>
		</>
	);
};

export default AtomAvatar;
