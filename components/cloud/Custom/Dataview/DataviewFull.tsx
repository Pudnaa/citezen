import React, { useMemo, useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import Table from "./makeData";
import TableCriteria from "./TableCriteria";
import _ from "lodash";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import RenderWidgetProcess from "middleware/components/WidgetForm/RenderWidgetProcess";
// import FormWrapper, { FormSectionWrapper } from "./FormWrapper";
export const DataView = () => {
	const {
		config,
		readyDatasrc,
		positionConfig,
		metaConfig,
		gridJsonConfig,
		pathConfig,
		widgetnemgooReady,
		widgetAllaround,
	} = useContext(WidgetWrapperContext);
	const [visibleModal, setVisibleModal] = useState(false);
	const [content, setContent] = useState<any>();
	const [title, setTitle] = useState("");
	// console.log("config", config);
	// console.log("pathConfig", pathConfig);
	let headerItem = _.orderBy(
		_.filter(pathConfig, (item) => {
			return (
				item?.isshow === "1" &&
				!item?.fieldpath.includes(".") &&
				item?.datatype !== "group"
			);
		}) || [],
		["displayorder"],
	);
	const filterItem = _.orderBy(
		_.filter(pathConfig, (item) => {
			return item?.iscriteria === "1";
		}) || [],
		["displayorder"],
	);
	// console.log("readyDatasrc", readyDatasrc);
	const headerItems = [];
	let column = headerItem.map((obj) => {
		var grouped = _.mapValues(_.groupBy(headerItem, "sidebarname"));

		return {
			Header: obj.labelname,
			accessor: obj.fieldpath.toLowerCase(),
			style: {
				textTransform: obj.texttransform,
				color: obj.textcolor,
				fontWeight: obj.textweight,
				width: obj.columnwidth,
			},
		};
	});

	const columns = useMemo(() => column, []);
	const data = useMemo(() => readyDatasrc, []);

	const buttons = _.values(
		config.metaConfig.meta_group_grid_options_mobile
			?.meta_dm_process_dtl_mobile,
	);

	const handlerCloseClick = (e: any) => {
		setVisibleModal(false);
	};
	const handlerClick = (e: any) => {
		const param = { ...e, metadataid: e.processmetadataid };
		// console.log("param", param);
		setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
		setTitle(e.processname);
		setVisibleModal(true);
	};

	return (
		<>
			<TableCriteria filterItem={filterItem} dataid={config.metadataid} />
			<div>
				{buttons.map((obj: any, index: any) => (
					<button
						key={obj?.id || index}
						onClick={() => handlerClick(obj)}
						className="mr-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-700 px-6 py-2 text-xs"
					>
						<i className={`far ${obj.iconname}`} /> {obj.processname}
					</button>
				))}
			</div>
			<div className="w-full overflow-y-auto scrollbar scrollbar-thumb-citizen scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-citizen-dark scrollbar-thumb-rounded-full">
				<Table columns={columns} data={data} tableOptions={metaConfig} />
			</div>
			<ModalView
				visible={visibleModal}
				modalOptions={{
					width: 800,
				}}
				onClose={handlerCloseClick}
				modelContent={content}
			/>
		</>
	);
};
export default DataView;

// function ReactTable(props) {
//   const columns = React.useMemo(() => props.columns, [props.columns]);
//   const data = React.useMemo(() => props.data, [props.data]);

//   return <Table columns={columns} data={data} />
// }
