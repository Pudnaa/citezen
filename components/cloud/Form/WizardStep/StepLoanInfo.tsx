import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import {
	positionToPath,
	otherAttrToObj,
	renderPositionType,
	getRowItems,
} from "util/helper";
import FormMetaContext from "context/Meta/FormMetaContext";
import RenderField from "@middleware/components/WidgetForm/RenderField";
import RenderDetail from "@middleware/components/WidgetForm/RenderDetail";
import { isEmpty } from "lodash";
import {
	AtomTitle,
	AtomText,
	AtomNumber,
	AtomIcon,
	AtomButton,
	AtomImage,
} from "@components/common/Atom";
type ItemPropsType = {
	item?: any;
	position?: any;
	data?: any;
};

const StepLoanInfo: FC<ItemPropsType> = ({ item, data }) => {
	const { processConfig } = useContext(FormMetaContext);
	const { config, positionConfig } = useContext(WidgetWrapperContext);
	const sectionconfig = {
		widgetnemgooReady: {
			labelPosition: "top",
		},
	};
	return (
		<>
			<div className="grid grid-cols-2 gap-6  ">
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position210?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position211?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position212?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
				/>
				{/* <RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position213?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					/> */}
				{/* <RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position214?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					/> */}
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position215?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position216?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={1}
				/>
				{/* <RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position217?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none"
					labelClassName="text-lg mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					/> */}
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position218?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2 "
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				{/* <RenderField
          field={_.find(data, {
            paramrealpath: positionConfig?.position219?.fieldpath,
          })}
          className="w-full border-0 border-b-2 rounded-none"
          labelClassName="text-lg mt-2 ml-0 mb-0"
          sectionConfig={sectionconfig}
        /> */}
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position220?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position221?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position222?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position223?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position224?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position225?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position226?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position227?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
				<RenderField
					field={_.find(data, {
						paramrealpath: positionConfig?.position228?.fieldpath,
					})}
					className="w-full border-0 border-b-2 rounded-none py-1 pl-2"
					labelClassName="text-lg text-citizen-title font-medium  mt-2 ml-0 mb-0"
					sectionConfig={sectionconfig}
					rowIndex={0}
				/>
			</div>
		</>
	);
};
export default StepLoanInfo;
