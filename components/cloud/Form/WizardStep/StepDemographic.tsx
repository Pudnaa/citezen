import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import FormMetaContext from "context/Meta/FormMetaContext";
import { getRowItems, dtlToSectionDtl, isEmpty } from "util/helper";
import RenderDetail from "@middleware/components/WidgetForm/RenderDetail";

type PropsType = {
	item?: any;
};

const StepDemographic: FC<PropsType> = ({ item }) => {
	const { processConfig } = useContext(FormMetaContext);

	if (item?.detailPath) {
		return (
			<>
				{item.detailPath.map((row: any, index: number) => {
					const field = processConfig["__groupPath"][row];

					if (
						field &&
						field[0]["datatype"] == "group" &&
						!field[0]["paramrealpath"].includes(".")
					) {
						const listConfig = getRowItems(
							field[0],
							processConfig.meta_process_param_attr_link_mobile,
						);
						return (
							<RenderDetail
								config={{ ...field[0], _sectionClassName: "hidden" }}
								pathConfig={listConfig}
								inputclassName={"w-full border-0 border-b-2 rounded-none"}
								attr={processConfig.meta_process_param_attr_link_mobile}
							/>
						);
					} else {
						return <>Error process detail</>;
					}
				})}
			</>
		);
	} else {
		return <>Error process detail</>;
	}
};
export default StepDemographic;
