import useSWR from "swr";
import _ from "lodash";
import { useCloud } from "hooks/use-cloud";
import * as prepareSWR from "util/prepareSWR";
import { jsonParse, toBoolean } from "util/helper";

const usePostDataSWR = (comand?: any, param?: any) => {
	const cloudContext = useCloud();
	const parameters = `&parameters=${JSON.stringify(param)}`;
	const myMetaName = cloudContext.metaConstant.ourMetaConstant.metaName;

	let { data, error, mutate } = useSWR(
		`/api/get-process?processcode=${comand}&${parameters}&metaName=${myMetaName}`,
	);
	/* -------------------- prepare Data -------------------- */
	let aggregatecolumns: string = "";
	let paging: any = {};

	// let dataReady = data;
	// if (data) {
	// 	aggregatecolumns = dataReady?.aggregatecolumns;
	// 	paging = dataReady?.paging;
	// 	dataReady = _.values(_.omit(dataReady, ["aggregatecolumns", "paging"]));
	// }

	let dataReady = data;
	if (data) {
		dataReady = {
			...data,
			// kpitemplate: _.values(data?.kpitemplate),
		};
	}

	// return [dataReady, error, mutate];

	/* ----------------------- return ----------------------- */
	return [dataReady, error, mutate, paging, aggregatecolumns];
};

export default usePostDataSWR;
