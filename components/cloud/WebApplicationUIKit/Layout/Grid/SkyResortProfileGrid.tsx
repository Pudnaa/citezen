import { useContext, useEffect, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
	positionToPath,
	otherAttrToObj,
	jsonParse,
	renderPositionType,
} from "util/helper";
import {
	AtomList,
	AtomTitle,
	AtomText,
	AtomCurrency,
	AtomIcon,
	AtomButton,
	AtomTag,
} from "@components/common/Atom";
import SkyResortProfileNav from "@cloud/Custom/Card/SkyResortProfileNav";
import SkyResortProfileTable from "../GridCard/SkyResortProfileTable";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
function SkyResortProfileGrid() {
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

	const [nav, setNav] = useState(1);
	// console.log("ddddddddd", readyDatasrc);
	// useEffect(() => {
	//   console.log(nav);
	// }, [nav]);
	// console.log("C12ColGrid config", config);
	// console.log("C12ColGrid readyDatasrc", readyDatasrc);
	// console.log("C12ColGrid widgetnemgooReady", widgetnemgooReady);
	// console.log("C12ColGrid positionConfig", positionConfig);
	return (
		<div className="container pt-6 mx-auto bg-transparent">
			<div className="sm:flex gap-6">
				<div className="flex-auto max-w-xs w-full">
					<SkyResortProfileNav setNav={setNav} nav={nav} />
				</div>

				<div className="flex-auto w-full sm:w-96 mt-5 sm:mt-0 bg-white rounded-xl">
					<SkyResortProfileTable display={nav === 1 ? true : true} />
					{/* {`target`} */}
					{/* <WidgetWithId widgetId={`16418006205581`} /> */}
					{/* {`test`} */}
					<div
						className={`${
							nav === 0
								? "flex opacity-100 h-full w-full"
								: "opacity-0 h-0 overflow-hidden"
						}`}
					>
						{/* <WidgetWithId widgetId={`16425896626981`} /> */}
					</div>
				</div>
				<style>
					{`
        .trans{
          transition: opacity 0.3s ease-out;
        }`}
				</style>
			</div>
		</div>
	);
}
export default SkyResortProfileGrid;
