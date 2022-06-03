import axios from "axios";
import { metaConfig } from "@config/metaConfig";
import { Button, notification, Space } from "antd";
import { useSession } from "next-auth/react";

// хүсэлт явуулна
export const request = async (url: string, body: any) => {
	return axios
		.post(url, body)
		.then((res) => res.data)
		.catch((err) => console.log(`err: `, err));
};

// сервер лүү хандаж дата авна
export const serverLoginData = async (
	url: string,
	command: string,
	json: any,
	isCrm: any,
) => {
	// const body: any = getJsonBody(command, json, ourMetaConstant);
	const body: any = {
		languagecode: "mn",
		command: command,
		parameters: json,
		isCustomer: true,
	};
	const { response } = await request(url, body);
	// console.log("url", url);

	if (response.status === "error") {
		// console.log("callERPServices body parameters.criteria", body.parameters.criteria);
		// console.log("callERPServices getJsonBody ourMetaConstant", ourMetaConstant);
		// console.log("callERPServices getJsonBody response", response);
	}
	return response !== "" ? response : {};
};

export const serverData = async (
	url: string,
	command: string,
	json: any,
	ourMetaConstant: any = metaConfig.metaDev,
	// ourMetaConstant: any,
	config?: any,
) => {
	const userinfo = {
		ipaddress: "",
		osName: "",
		platformName: "",
		useragent:
			"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
	};
	// const { data: session, status }: any = useSession();
	const body: any = {
		request: {
			languagecode: "mn",
			command: command,
			// ismobile: "1",
			parameters: json,
			// zip: isZip.value,
			username: ourMetaConstant.username,
			password: ourMetaConstant.password,
			// sessionId: "e54e9837-8526-4659-900d-9cf63a6f2a97",
			// isCustomer: undefined,
			// userinfo,
			...config,
		},
	};
	// console.log(
	// 	"DSDDDDDDDD iscustomeriscustomeriscustomeriscustomeriscustome body bodyr",
	// 	// session,
	// );
	const { response } = await axios
		.post(url, body)
		.then((res) => res.data)
		.catch((err) => console.log(`err: `, err));

	if (response && response.status === "error") {
		console.log(response);
	}
	return response !== "" ? response : {};
};

export const serverDataFileUpload = async (url: string, body: any) => {
	// console.log("serverDataFileUpload", url, body);
	const { response } = await request(url, body);
	return response;
};

export const getJsonBody_old = (
	command: any,
	json: any,
	ourMetaConstant: any,
	userinfo: any,
	config: any,
) => {
	//sessionId: "65178215-7896-4513-8e26-896df9cb36ad",
	// console.log(isUser);
	const body: any = {
		request: {
			languagecode: "mn",
			command: command,
			// ismobile: "1",
			parameters: json,
			// zip: isZip.value,
			username: ourMetaConstant.username,
			password: ourMetaConstant.password,
			// sessionId: "f22ed090-531e-4eb3-a5d9-a4d6201b3819",
			isCustomer: undefined,
			// userinfo,
			...config,
		},
	};

	return body;
};

/*Jargal - new Load Function*/
export const callServerAPI = async (
	json: any,
	ourMetaConstant: any = metaConfig.metaDev,
	config?: any,
	command: string = "PL_MDVIEW_004",
) => {
	//? одоогоор ашиглаагүй.
	// const userinfo = {
	//   ipaddress: "",
	//   osName: "",
	//   platformName: "",
	//   useragent:
	//     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
	// };

	const myParameters: any = {
		request: {
			languagecode: "mn",
			command: command, //metaConfig.COMMAND_DATAVIEW,
			parameters: json,
			username: ourMetaConstant.username,
			password: ourMetaConstant.password,
			isCustomer: undefined,
			...config,
		},
	};

	// console.log("DDDDEEEEEEEDDDDD", ourMetaConstant);

	const apiResult: any = await axios
		.post(ourMetaConstant?.serverUrl, myParameters)
		.then((myResponse) => {
			const myReadyResponse = myResponse?.data?.response;

			// console.log("API иржээ", myResponse.data);
			const myApiStatus = myReadyResponse?.status;
			const myApiResult = myReadyResponse?.result;

			switch (myApiStatus) {
				case "error":
					throw new Error(`${myReadyResponse.text}`);

					// API ирэхдээ алдаа ирүүлсэн байна. Тэрэн дээр нь арга хэмжээ авах ёстой.
					console.log("ERP return error: ", myReadyResponse);

					notification.error({
						message: "Алдаа буцаалаа",
						description: `Текст: ${myReadyResponse.text}, Code: ${myReadyResponse.code}`,
					});
					return {};
				case "success":
					return myApiResult;
				default:
					return {};
					break;
			}
		})
		.catch((error) => {
			//Алдаатай холбоотой ажлууд хийгдэнэ.
			throw error;
			// console.log(`API call error: `, error);
		});

	return apiResult || [];
};

export const callServerPageList = async (
	json: any,
	ourMetaConstant: any,
	config?: any,
) => {
	return await callServerAPI(json, ourMetaConstant, config, "layoutHdr_004");
};

export const callServerDataview = async (
	json: any,
	ourMetaConstant: any,
	config?: any,
) => {
	return await callServerAPI(json, ourMetaConstant, config, "PL_MDVIEW_004");
};
