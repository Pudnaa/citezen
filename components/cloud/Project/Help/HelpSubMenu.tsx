import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useRouter } from "next/router";
import { Empty } from "antd";
import BlockDiv from "@components/common/Block/BlockDiv";

export default function HelpSubMenu() {
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
	const router = useRouter();

	// console.log("main readyDatasrc", readyDatasrc);

	const dataSrc = _.filter(readyDatasrc, ["categoryid", router.query?.id]);
	// console.log("🚀 ~ HelpKnowledgeListCard ~ dataSrc", dataSrc);

	if (_.isEmpty(dataSrc))
		return (
			<Empty
				className="pt-40 border h-156 rounded-lg  mx-6"
				description="Үйлчилгээ алга"
			/>
		);

	// console.log("duct Grid  dataSrc dataSrc", dataSrc);
	const item = readyDatasrc[0];
	return (
		<BlockDiv
			customClassName="h-full overflow-hidden border rounded-lg m-6"
			divNumber="HelpKnowledgeListCardOuter"
		>
			<BlockDiv
				customClassName="bg-yellow-100 bg-white flex flex-col divide-y divide-gray-200 divide-solid"
				divNumber="HelpKnowledgeListCardInner"
			></BlockDiv>
		</BlockDiv>
	);
}
