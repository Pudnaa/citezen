import { useState, useEffect } from "react";
import axios from "axios";
import { notification } from "antd";
import Router from "next/router";
// import { signIn, useSession, signOut } from "next-auth/react";
import { parseBoolInt } from "util/helper";
import { signIn, useSession, signOut } from "next-auth/react";

import { AtomInput, AtomButton } from "@components/common/Atom";

export default function CloudLoginForm() {
	const [ldap, setldap] = useState(0);
	const [ischeck, setIscheck] = useState(false);
	const [data, setData] = useState({
		command: "login",
		rows: [
			{
				path: "username",
				title: "Хэрэглэгчийн нэр",
				placeholder: "Хэрэглэгчийн нэр",
				icon: "far fa-user",
				type: "text",
				value: "",
			},
			{
				path: "password",
				title: "Нууц үг",
				placeholder: "Нууц үг",
				icon: "far fa-lock",
				type: "password",
				value: "",
			},
		],
	});

	const { data: session } = useSession();
	// console.log("session", session);

	if (session) {
		window.location.href = "/";
	}
	const changeHandler = (e) => {
		let isChecked = parseBoolInt(e.target.checked);
		setldap(isChecked);
	};
	const onChange = (e, index) => {
		e.preventDefault();
		const tempData = [...data.rows];
		tempData[index] = {
			...tempData[index],
			value: e.target.value,
		};
		setData({ ...data, rows: tempData });
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		let parameters = { redirect: false, callbackUrl: "/", iscustomer: true };
		data.rows.map((item, index) => {
			parameters = { ...parameters, [item.path]: item.value };
		});
		let isldap = {
			isLdap: ldap,
		};
		let loginParam = {
			...parameters,
			...isldap,
		};

		console.log("parameters", loginParam);
		const res = await signIn("credentials", parameters);

		if (res.status == 401) {
			setIscheck(true);
		}

		// signIn("credentials", loginParam)
		// 	.then((res) => {
		// 		// window.location.reload();
		// 		return res;
		// 	})
		// 	.catch((res) => console.log(res));
		// const loginResult = await axios.post(`/api/post-login`, {
		// 	processcode: "login",
		// 	parameters: loginParam,
		// 	iscustomer: true,
		// });

		// if (loginResult.data.status === "error") {
		// 	notification.open({
		// 		message: "Үйлдэл амжилтгүй боллоо",
		// 		description: loginResult.data.text,
		// 		duration: 10,
		// 	});
		// } else {
		// 	// console.log("Success login " + loginParam);
		// 	// console.log("password", data.rows[1].value);
		// 	Router.push("/");
		// }
	};

	return (
		<>
			{data.rows.map((item, index) => {
				return (
					<AtomInput
						key={item?.id || index}
						item={item.title}
						icon={item.icon}
						value={item.value}
						placeholder={item.placeholder}
						type={item.type}
						customClassName={`mt-4 w-full ${
							ischeck ? ` border-red-500` : ``
						} `}
						inputContainer={{
							customClassName:
								"text-sm bg-gray-100 rounded-full text-gray-600 border-0 focus:outline-none focus:ring-2 focus:ring-gray-200  focus:bg-white font-normal",
						}}
						iconContainer={{
							customClassName: "absolute text-gray-500 flex items-center pl-2",
						}}
						onChange={(e) => onChange(e, index)}
					/>
				);
			})}
			<div className="mt-4 w-full flex justify-between text-xs items-center px-3">
				<div className="flex items-center">
					<input
						type="checkbox"
						className="pl-2"
						onChange={changeHandler}
						value={ldap}
					/>
					<span className="ml-2"> Active directory </span>
				</div>
				<div>Нууц үг мартсан</div>
			</div>
			<AtomButton
				item="Нэвтрэх"
				type="primary"
				color="sso"
				customClassName="rounded-full mt-7 w-full h-12 bg-blue-400 cursor-pointer text-white font-semibold hover:bg-citizen-dark"
				onClick={(e) => onSubmit(e)}
			/>
			{ischeck && (
				<div className="bg-orange-400  mt-6 text-center  flex text-white space-x-2 py-2 px-4 rounded-full">
					<i className="fa-solid fa-rotate-exclamation"></i>
					<span> Нэвтрэх нэр эсвэл нууц үгийг шалгана уу</span>
				</div>
			)}
		</>
	);
}
