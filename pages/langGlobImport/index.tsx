import useSWR from "swr";
// import fs from "fs";
import * as fs from "fs";
import path from "path";
import { serverData } from "service/callERPServices";
import _ from "lodash";
import { metaConfig } from "config/metaConfig";
import fetchJson from "lib/fetchJson";

export default function Globe() {
	const handleFilterData = async (lang: any) => {
		const criteria = {
			group_id: [
				{
					operator: "=",
					operand: 100,
				},
			],
		};
		let data = await fetchJson(
			`/api/get-data?metaid=1653555921420007&pagingwithoutaggregate=1&criteria=${JSON.stringify(
				criteria,
			)}`,
		);
		delete data.aggregatecolumns;
		delete data.paging;
		data = _.values(data);
		console.log("lang,", lang);
		console.log(data);
		// return data;

		// fs.writeFileSync(
		// 	path.resolve("./public/locales/mn/test.json"),
		// 	JSON.stringify(data),
		// 	"utf8",
		// );
	};

	// const { data: langStr } = useSWR(
	// 	`/api/get-data?metaid=1653555921420007&pagingwithoutaggregate=1`,
	// );
	// delete langStr?.aggregatecolumns;
	// delete langStr?.paging;
	// const dataSrc = _.values(langStr);
	// let translation = {};
	// dataSrc.map((item: any, index: number) => {
	// 	translation = { ...translation, [item.code]: item.en };
	// });

	// console.log("dataSrc", dataSrc);

	// fs.writeFileSync(
	// 	path.resolve("./public/locales/mn/test.json"),
	// 	JSON.stringify(translation),
	// 	"utf8",
	// );

	return (
		<div style={{ color: "green", fontSize: 16 }}>
			loading
			{/* Орчуулгын файл амжилттай үүслээ. */}
			{/* <p onClick={(e) => handleFilterData("mn")}>mongolian </p>
			<p onClick={(e) => handleFilterData("en")}>en </p> */}
		</div>
	);
}

// export async function getStaticProps(context) {
export async function getServerSideProps(context) {
	const { URL } = process.env;
	let result = await fetchJson(
		URL + `/api/get-data?metaid=1653555921420007&pagingwithoutaggregate=1}`,
	);
	delete result.aggregatecolumns;
	delete result.paging;
	const data = _.values(result);

	let mnSrc = {};
	let enSrc = {};
	data.map((item: any) => {
		mnSrc = { ...mnSrc, [item.code]: item.mn };
	});
	data.map((item: any) => {
		enSrc = { ...enSrc, [item.code]: item.en };
	});

	fs.writeFileSync(
		path.resolve("./public/locales/mn/common.json"),
		JSON.stringify(mnSrc),
		"utf8",
	);
	fs.writeFileSync(
		path.resolve("./public/locales/en/common.json"),
		JSON.stringify(enSrc),
		"utf8",
	);
	return {
		props: {}, // will be passed to the page component as props
	};
}
