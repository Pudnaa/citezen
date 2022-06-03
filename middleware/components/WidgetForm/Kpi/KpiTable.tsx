import React, { FC, useEffect, useState, useMemo, useContext } from "react";
import {
	isEmpty,
	objectToArray,
	renderKpiJson,
	renderKpiHeaderJson,
} from "util/helper";
import usePostDataSWR from "./usePostDataSWR";
import fetchJson from "lib/fetchJson";
import {
	useTable,
	useSortBy,
	usePagination,
	useRowSelect,
	useGlobalFilter,
	useAsyncDebounce,
	useFilters,
} from "react-table";

import _, { keyBy } from "lodash";
import FormMetaContext from "context/Meta/FormMetaContext";
import * as ExpressionFuntions from "util/ExpressionFunctions";
import RenderAtom from "@components/common/Atom/RenderAtom";
import Table from "./tableData";
import { Empty } from "antd";
import { useSession, signOut } from "next-auth/react";
type PropsType = {
	dataSrc: any;
	key?: number;
};

const kpiTable: FC<PropsType> = ({ dataSrc, key }) => {
	const indicator = renderKpiJson(dataSrc);
	const headerKpi = renderKpiHeaderJson(dataSrc);
	// const { data: session, status }: any = useSession();
	// console.log(
	// 	indicator,
	// 	"dddddddddddddddddddddd----------------------------------------s",
	// );
	const columns = React.useMemo(
		() => [
			{
				Header: "Үзүүлэлт",
				accessor: "name",
				className: "w-50",
			},
			...headerKpi,
		],
		[],
	);

	return (
		<>
			{/* <pre>{JSON.stringify(indicator, null, 4)}</pre> */}
			<RenderAtom
				item={{ value: dataSrc.name }}
				defaultAtom="title"
				customClassName={"border-b-2 text-left  border-black py-2  my-3"}
			/>
			<Table columns={columns} data={indicator} key={key} />
		</>
	);
};

export default kpiTable;
