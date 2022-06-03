import _ from "lodash";
import { getCachedDataviewData } from "lib/cached-data-file";

/* ------------------------------------------------------ */
/*                     PREPAREURLPAGE                     */
/* ------------------------------------------------------ */
export default async function prepareUrlPage(ourMetaConstant, hostObject) {
	const pageFullList = await getCachedDataviewData(
		ourMetaConstant,
		"16298299324201",
		true,
	);

	/* ------------------ convert function ------------------ */
	let pageList = {};
	pageFullList.map((item, index) => {
		// console.log("item", item);
		pageList[item.domainname] = {
			...pageList[item.domainname],
			[item.slugname]: {
				...item,
				pageid: item.metadataid,
			},
		};
	});

	/*
  [
    {
      metadataid: '1638244842252727',
      domainname: 'skyresort',
      slugname: 'home',
      hostname: '',
    },
    {
      metadataid: '1640830646329294',
      domainname: 'skyresort',
      slugname: 'training',
      hostname: '',
    }
  ];
  гэсэн хийцийг
  {
    skyresort: {
      ourMetaConstant: "metaDde",
      home: {
        pageid: "1638244842252727",
      },
      training: {
        pageid: "1640830646329294",
      }
    }
  }
  болгож хувиргах ёстой.
  */

	//detectParams дотор [ 'cozy', 'news', 'detail', '1511959' ] гэсэн бүтэцтэй мэдээлэл ирнэ.

	//эхний элементийг root-д өгнө.
	// const rootDomain = detectParams[0];
	const rootDomain = hostObject?.domain?.rootDomain;
	//эхний root-ийг авч хаяна
	// detectParams.shift();
	//slug-уудыг нийлүүлж угсарна.
	// const slug = _.join(detectParams, "/");
	const slug = hostObject?.slug;

	// console.log("XXXXXXXXXXX", rootDomain, slug);

	//Хуудсаа олох гол ажил эхэлж байна.
	let destinationPage = { title: "citizen", ...pageList?.citizen };
	let destinationSlug = { ...pageList?.citizen?.home };

	const pageKeys = _.keys(pageList);
	for (let index = 0; index < pageKeys.length; index++) {
		//бүх page Key-ээр гүйнэ.
		const element = pageKeys[index] || "";
		// console.log("XXXXXXXX element", element);
		// console.log("XXXXXXXX index", index);

		if (rootDomain === element && !_.isEmpty(element)) {
			//ирсэн URL дотор уг Key байгаа эсэхийг шалгаж байвал тэр Page-ийг өгнө.
			destinationPage = {
				// sheetPath: sheetPath,
				title: element,
				...pageList[element],
			};
			destinationSlug = {
				...(pageList[element]?.[slug] || pageList[element]?.home),
			};
			// console.log("Ийшээ орж байна.", element, rootDomain);
			break;
		}
	}

	// console.log("destinationPage", destinationPage);
	// console.log("destinationSlug", destinationSlug);

	return [destinationPage, destinationSlug];
}

/* ------------------------------------------------------ */
/*                           OLD                          */
/* ------------------------------------------------------ */

export async function prepareUrlPage_old(req, resolvedUrl, ourMetaConstant) {
	const pageFullList = await getCachedDataviewData(
		ourMetaConstant,
		"16298299324201",
		true,
	);

	// console.log(
	//   "only SkyResort",
	//   _.filter(pageFullList, { domainname: "skyresort" })
	// );

	/* ------------------ convert function ------------------ */
	let pageList = {};
	pageFullList.map((item, index) => {
		// console.log("item", item);
		pageList[item.domainname] = {
			...pageList[item.domainname],
			[item.slugname]: {
				...item,
				pageid: item.metadataid,
			},
		};
	});

	// console.log("pageList", pageList);

	/*
  [
    {
      metadataid: '1638244842252727',
      domainname: 'skyresort',
      slugname: 'home',
      hostname: '',
    },
    {
      metadataid: '1640830646329294',
      domainname: 'skyresort',
      slugname: 'training',
      hostname: '',
    }
  ];
  гэсэн хийцийг
  {
    skyresort: {
      ourMetaConstant: "metaDde",
      home: {
        pageid: "1638244842252727",
      },
      training: {
        pageid: "1640830646329294",
      }
    }
  }
  болгож хувиргах ёстой.
  */

	//req буюу Domain-ийн мэдээлэл ирнэ. headers, url гэсэн хоёр гол бүтэцтэй.
	const domain = req.headers.host;
	const path = resolvedUrl;
	// console.log("req", req);
	// console.log("domain ", domain);
	// console.log("path", path);

	const url = new URL("https://" + domain + path);
	// console.log("00 url", url.hostname);
	// console.log("path", _.split(path, "/", 2)[1]);
	const tempPath = _.split(url.pathname, "/", 3); //http://localhost:3000/cloudddd/cloud/weekly гэсэн байвал эхний cloudddd гэдэг үгийг авна.

	let defaultPage = "citizen";
	// if (
	//   url.hostname == "testshop.veritech.mn" ||
	//   url.hostname == "skyresorteshop.mn"
	// ) {
	//   defaultPage = "skyresort";
	// }
	// console.log("url.hostnameurl.hostnameurl.hostname", url.hostname);
	switch (url.hostname) {
		case "testshop.veritech.mn" || "skyresorteshop.mn":
			defaultPage = "skyresortOrder";
			break;
		case "www.skyresorteshop.mn":
			defaultPage = "skyresort";
			break;
		case "developer.interactive.mn":
			defaultPage = "developer";
			break;
		default:
			defaultPage = "citizen";
	}

	// https://testshop.veritech.mn/
	const pageKeys = _.keys(pageList);
	// console.log("🚀 ~ pageKeys", pageKeys);
	let myHost = {
		domain: _.replace(domain, "/", ""),
		slug: tempPath[1] || "home",
	};
	let myPath = {
		domain: tempPath[1] || defaultPage,
		slug: tempPath[2] || "home",
	};
	// console.log("myHost ===", myHost);
	// console.log("myPath ===", myPath);

	const env = process.env.NODE_ENV; //development, production

	let destinationPage = { title: "weekly", ...pageList?.weekly };
	let destinationSlug = { ...pageList?.weekly?.home };

	for (let index = 0; index < pageKeys.length; index++) {
		//бүх page Key-ээр гүйнэ.
		const element = pageKeys[index] || "";
		// console.log("XXXXXXXX element", element);
		// console.log("XXXXXXXX index", index);

		if (myHost.domain === element && !_.isEmpty(element)) {
			//ирсэн URL дотор уг Key байгаа эсэхийг шалгаж байвал тэр Page-ийг өгнө.
			destinationPage = {
				// sheetPath: sheetPath,
				title: element,
				...pageList[element],
			};
			destinationSlug = {
				...(pageList[element]?.[myHost.slug] || pageList[element]?.home),
			};
			// console.log("Ийшээ орж байна.", element, myHost.domain);
			break;
		}

		// console.log("ЗЗЗЗ", element, " - ", myPath.slug);
		// console.log("ЗЗЗЗ myPath.domain - ", myPath.domain);

		if (myPath.domain === element && !_.isEmpty(element)) {
			//ирсэн URL дотор уг Key байгаа эсэхийг шалгаж байвал тэр Page-ийг өгнө.
			destinationPage = {
				// sheetPath: sheetPath,
				title: element,
				...pageList[element],
			};
			// console.log("CXCCCCCCCCCC", element, " - ", myPath.slug);
			destinationSlug = {
				...(pageList[element]?.[myPath.slug] || pageList[element]?.home),
			};
			break;
		}
	}

	// console.log("destinationPage", destinationPage);
	// console.log("destinationSlug", destinationSlug);

	return [destinationPage, destinationSlug];
}
