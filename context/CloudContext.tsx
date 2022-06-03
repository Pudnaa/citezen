import { FC, useEffect, createContext, useState } from "react";
import { useRouter } from "next/router";
import _ from "lodash";
import {
	prepareQuery,
	preparePaging,
	prepareSorting,
	prepareViewtype,
} from "lib/urlFunctions";
import { metaConfig } from "config/metaConfig";

type PropsContextType = {
	cloudURL?: any;
	updateListOption?: any;
	buildURL?: any;
	clearQuery?: any;
	buildCloudURL?: any;
	globalConfig?: any;
	setGlobalConfig?: any;
	metaConstant?: any;
	setMetaConstant?: any;
	rawWidgetList?: any;
	setRawWidgetList?: any;
	hostObject?: any;
	setHostObject?: any;
};

const CloudContext = createContext<PropsContextType>({});

type PropsType = {};
export const CloudStore: FC<PropsType> = ({ ...props }) => {
	/* V2 jagaa start*/
	const [hostObject, setHostObject] = useState({});
	// console.log("🚀 ~ hostObject", hostObject);

	/* V2 jagaa end*/

	// const domain = window.location.hostname;

	const router = useRouter();
	// console.log("Энд эхлэв props");

	const menu = router.pathname.split("/")[1]; //"news"

	const initialCloudURL = {
		asPath: router.asPath, //Browser дээр байгаа URL-ийг түүхийгээр авах
		asPathDomain: router, //Browser дээр байгаа URL-ийг түүхийгээр авах
		breadcrumb: router.pathname.split("/"), //0: "" 1: "news", 3: "detail"
		menu: menu,
		urlIdValue: router.asPath.split("/")[2] || "", //detailid баахан тоо
		pathname: router.pathname, //"/news/[id]"
		menuType: "list",
		query: { ...prepareQuery(router.query) }, //Бүх шүүлтүүрүүд байна
		listOption: {
			paging: preparePaging(router.query),
			sorting: prepareSorting(router.query),
			viewtype: prepareViewtype(router.query),
			total: "0",
			listShortConfig: {},
		},
	};

	// console.log("Энд initialCloudURL", initialCloudURL);
	const [cloudURL, setCloudURL] = useState(initialCloudURL);
	const [metaConstant, setMetaConstant] = useState({
		meta: metaConfig,
		// ourMetaConstant: {},
		ourMetaConstant: metaConfig.metaDev,
	});

	// console.log("DDDDDDDDDDDD cloudContext.cloudURL", cloudURL);
	// console.log("DDDDDDDDDDDD cloudContext.hostObject", hostObject);

	useEffect(() => {
		setCloudURL(initialCloudURL);
	}, [router.query]);

	const [globalConfig, setGlobalConfig] = useState({
		bodyDefault: {
			className: "bg-white min-h-screen min-w-screen font-roboto",
			style: {},
		},
		sectionDefault: {
			className:
				"w-full h-full bg-white p-4 shadow-sm overflow-hidden rounded-lg",
			style: {},
		},
		widgetAllaround: {
			color: "gray-500",
			className:
				"w-full h-full bg-white p-4 shadow-sm overflow-hidden rounded-lg",
			style: {},
			title: {
				className: "text-lg leading-6 font-bold text-gray-700",
				style: {},
			},
		},
	});

	const [rawWidgetList, setRawWidgetList] = useState({});

	const buildURL = (
		addNewQuery: any,
		removeQueryKey: any = undefined,
		options: any = {},
		clearOtherQuery: boolean = false,
	) => {
		//mglfirm солигдсон бол mglmark-ийг цэвэрлэх хэрэгтэй.
		let oldQuery = router.query || {};
		delete oldQuery[removeQueryKey];
		//Бүх Query-г цэвэрлэнэ.
		if (clearOtherQuery) oldQuery = {};

		//newQuery нь хоосон value-тай ирэх үе байна. Энэ үед түүнийг бас устгана.
		let newQuery: any = {};
		Object.entries(addNewQuery).map(([key, value]) => {
			if (!_.isEmpty(value)) {
				newQuery[key] = value;
			} else {
				delete oldQuery[key];
			}
		});

		router.query = {
			...oldQuery,
			...newQuery,
		};

		router.push(router, undefined, { shallow: true, scroll: true, ...options });
	};

	const updateListOption = (listShortConfig: any, total: any) => {
		setCloudURL({
			...cloudURL,
			listOption: {
				...cloudURL.listOption,
				paging: preparePaging(router.query, listShortConfig),
				sorting: prepareSorting(router.query, listShortConfig),
				viewtype: prepareViewtype(router.query, listShortConfig),
				total: total,
				listShortConfig: listShortConfig,
			},
		});
	};

	const buildCloudURL = (item: any, link: any, isWhole = false) => {
		console.log("sssdddditem", item, link, isWhole);
		let key = "";
		if (isWhole) {
			key = link?.label;
		} else {
			// metaid[484848][itemcategoryid]=151515151515 гэсэн Query зам үүсэх ёстой.
			key = `metaid[${link?.metaid}][${link?.label}]`;
		}
		buildURL(
			{
				[key]: item?.[link?.path],
			}, // Нэмэгдэж буй гол query
			undefined,
			{}, //shallow гэх мэт нэмэлт options,
			false, //clear URL other query
		);
	};

	return (
		<CloudContext.Provider
			value={{
				cloudURL,
				updateListOption,
				buildURL,
				buildCloudURL,
				globalConfig,
				setGlobalConfig,
				metaConstant,
				setMetaConstant,
				rawWidgetList,
				setRawWidgetList,
				hostObject,
				setHostObject,
			}}
		>
			{props.children}
		</CloudContext.Provider>
	);
};

export default CloudContext;
