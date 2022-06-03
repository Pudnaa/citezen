import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import Link from "next/link";
import {
	positionToPath,
	otherAttrToObj,
	jsonParse,
	renderPositionType,
} from "util/helper";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";
const lineChart = () => {
	const {
		config,
		readyDatasrc,
		positionConfig,
		metaConfig,
		gridJsonConfig,
		pathConfig,
		widgetnemgooReady,
		widgetAllaround,
		Title,
	} = useContext(WidgetWrapperContext);

	// console.log("lineChart config", config);
	// console.log("lineChart readyDatasrc", readyDatasrc);
	// console.log("lineChart widgetnemgooReady", widgetnemgooReady);
	const data = readyDatasrc;
	return (
		<>
			<div className="" id="chartDiv">
				<LineChart width={560} height={400} data={data}>
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend verticalAlign="top" align="right" height={36} />
					<CartesianGrid stroke="#eee" strokeDasharray="5 5" />
					<Line type="monotone" dataKey="орлого" stroke="#BE6EB2" />
					<Line type="monotone" dataKey="Зарлага" stroke="#F6BA14" />
				</LineChart>
			</div>
		</>
	);
};
export default lineChart;
