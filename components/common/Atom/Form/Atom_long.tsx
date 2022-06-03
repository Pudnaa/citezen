import React, { FC, useContext } from "react";
import Atom_label from "./Atom_label";
import NumberFormat from "react-number-format";
import FormMetaContext from "context/Meta/FormMetaContext";
import { fieldHideShow, getAtomValue, fieldDisableEnable } from "util/helper";
import { overrideTailwindClasses } from "tailwind-override";
type PropsType = {
	config: any;
	className: any;
	rowIndex?: any;
	style: any;
	labelClassName: any;
	sectionConfig?: any;
};

const Atom_long: FC<PropsType> = ({
	config,
	rowIndex,
	labelClassName,
	className,
	style,
	sectionConfig,
}) => {
	const {
		processExpression,
		formDataInitData,
		handleChangeContext,
		processConfig,
		validData,
	} = useContext(FormMetaContext);

	const handlerChange = (e: any) => {
		handleChangeContext({
			name: config.paramrealpath,
			value: e.value,
			rowIndex,
		});
	};

	if (config?.columnwidth)
		style = { ...style, width: parseInt(config?.columnwidth, 10) };

	return (
		<>
			<div
				className={`${
					sectionConfig?.widgetnemgooReady?.labelPosition == "top"
						? `flex flex-col`
						: `grid grid-cols-2 gap-4`
				} 
				${
					config.isshow == "0"
						? "hidden"
						: fieldHideShow(config, processExpression) && "hidden"
				}
				`}
			>
				<Atom_label
					labelName={config.labelname}
					className={`${labelClassName}`}
					isrequired={config.isrequired}
					styles=""
					sectionConfig={sectionConfig}
				/>

				<NumberFormat
					thousandsGroupStyle="thousand"
					value={getAtomValue(
						config,
						formDataInitData,
						processConfig,
						rowIndex,
					)}
					prefix=""
					decimalSeparator="."
					displayType={processConfig.actiontype === "view" ? "text" : "input"}
					type="text"
					thousandSeparator={false}
					allowNegative={true}
					name={config.paramrealpath}
					placeholder={config?.placeholdername}
					style={{ ...style }}
					data-path={config.paramrealpath}
					className={overrideTailwindClasses(
						` rounded border-gray-400 focus:ring-0 focus:border-black text-right ${className}  `,
					)}
					onValueChange={handlerChange}
					fixedDecimalScale={false}
					// disabled={fieldDisableEnable(config, processExpression)}
				/>
				{config.isEmpty && <span>{config.errorText}</span>}
			</div>
		</>
	);
};

export default Atom_long;

// [isEdit] = 1;

// var docInfo = getProcessParam('PROC_BIDDER_USER_INFORMATION_IS_COMPLETE_GET_004', 'recordId@recordId');
// console.log(docInfo);
// console.log([bookTypeId].val());
// if (docInfo) {
//     if (docInfo.b0 == [bookTypeId].val() || docInfo.b1 == [bookTypeId].val() || docInfo.b2 == [bookTypeId].val() || docInfo.b3 == [bookTypeId].val()) {
//         message(info, 'Мэдээлэл оруулсан байна', 3);
//         [isEdit] = 0;
//     }
// }

// if ([isEdit].val() == 1) {
//     showKpi(1);
// } else {
//     showKpi(1, 'view');
// }
