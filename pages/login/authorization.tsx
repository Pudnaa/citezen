import React, { useState, FC, useEffect, forwardRef } from "react";

import CloudBanner1 from "@components/Login/Banner1";
import CloudLoginPage from "@components/Login/CloudLoginPage";
import { isEmpty, jsonParse, decrypt } from "util/helper";
import { useRouter } from "next/router";
import _ from "lodash";

import { signIn, useSession, signOut } from "next-auth/react";
import { seteuid } from "process";

export default function authorization() {
	const router = useRouter();

	useEffect(() => {
		if (router.query) return;
		setData(router.query.scope);
		// console.log("main data effect ", router.query?.scope);
		// codes using router.query
	}, [router.query]);

	const info = router.query;
	const scope = router.query?.scope;
	const returnType = router.query?.returnType;
	const redirect_uri = router.query?.redirect_uri;
	const { data: session } = useSession();
	const [user, setUser] = useState<any>({});
	const [data, setData] = useState<any>(scope);

	console.log("infoinfoinfoinf inf session ", session);

	const userinfo = () => {
		if (data) {
			const decryptobject = data.replaceAll("tttnmhttt", "+");
			const messageA = decrypt(decryptobject);
			// console.log("user", JSON.parse(messageA));
			// setUser(messageA);
			// onSubmit();
			return messageA;
		}
		return "null";
	};

	// const parameters = {
	// 	iscustomer: true,
	// 	redirect: false,
	// 	callbackUrl: "/khanbank",
	// 	// ...user,
	// 	username: "togtokhsuren.ts",
	// 	isHash: 1,
	// 	passwordhash: "0df0d5257198f67bdf064121bc988003",
	// 	// password: password,
	// };
	// console.log("user parameters", parameters);

	const onSubmit = async (e: any) => {
		e.preventDefault();

		let parameters = {
			iscustomer: false,
			redirect: true,
			callbackUrl:
				"https://help.veritech.mn/category/detail?item=16484393106219&id=16484393088689",
			username: "togtokhsuren.ts",
			isHash: 1,
			password:
				"70a58c3ffd9a41b79e44d7522480da1beb2bacdf96d9330a56ad577bb073c085",
		};

		const res = await signIn("credentials", parameters, {
			callbackUrl:
				"https://help.veritech.mn/category/detail?item=16484393106219&id=16484393088689",
		});
		console.log("ressssss", res);
		if (res.status == 401) {
			// setIscheck(true);
		}
	};

	return (
		<>
			<div className="bg-gray-100 w-screen h-screen flex flex-row">
				{/* authorization page */}
				<span className="bg-red-700" onClick={(e: any) => onSubmit(e)}>
					Нэвтрэх
				</span>
				<button
					className="cursor-pointer hover:text-kbportal text-[13px] pl-2  "
					onClick={() => signOut({ callbackUrl: "/login" })}
				>
					Cистемээс гарах
				</button>
				{userinfo()}
			</div>
		</>
	);
}
