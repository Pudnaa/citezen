import React, { FC, useContext } from "react";
import useSWR from "swr";
import _ from "lodash";
import Atom_label from "./Atom_label";
import FormMetaContext from "context/Meta/FormMetaContext";
import { getAtomValue, fieldHideShow, fieldDisableEnable } from "util/helper";
import { useTranslation } from "next-i18next";
import { overrideTailwindClasses } from "tailwind-override";
type PropsType = {
	config: any;
	className?: any;
	labelClassName?: any;
	style?: any;
	rowIndex?: any;
	sectionConfig?: any;
};

const Atom_string: FC<PropsType> = ({
	config,
	className,
	labelClassName,
	style,
	rowIndex,
	sectionConfig,
}) => {
	const {
		processExpression,
		formDataInitData,
		handleChangeContext,
		processConfig,
		validData,
	} = useContext(FormMetaContext);
	// const { t } = useTranslation("translation");
	// console.log("fieldHideShow processExpression", processExpression);
	const handlerChange = (e: any) => {
		handleChangeContext({
			name: config.paramrealpath,
			value: e.currentTarget.value,
			rowIndex,
		});
	};
	const handlerBlur = (e: any) => {
		console.log("eeeeeeeeeeeee :>> ", e);
	};
	if (config?.columnwidth)
		style = { ...style, width: parseInt(config?.columnwidth, 10) };

	return (
		<div
			className={`${
				sectionConfig?.widgetnemgooReady?.labelPosition == "top"
					? `flex flex-col`
					: `grid grid-cols-2 gap-4`
			} ${
				config.isshow == "0"
					? "hidden"
					: fieldHideShow(config, processExpression) && "hidden"
			}`}
		>
			<Atom_label
				// labelName={t(config.labelname)}
				labelName={config.labelname}
				labelFor={config.paramname}
				isrequired={config.isrequired}
				styles=""
				className={`${labelClassName}`}
				sectionConfig={sectionConfig}
			/>
			{processConfig?.actiontype === "view" ? (
				<div className="self-center">
					{getAtomValue(config, formDataInitData, processConfig, rowIndex)}
				</div>
			) : (
				<input
					type="text"
					id={config.paramname}
					name={config.paramname}
					className={overrideTailwindClasses(
						` rounded border-gray-400 focus:ring-0  ${className} focus:border-black${
							validData[config.paramname] ? ` border-red-500` : ``
						}`,
					)}
					style={{ ...style }}
					placeholder={config?.placeholdername}
					data-path={config.paramrealpath}
					value={getAtomValue(
						config,
						formDataInitData,
						processConfig,
						rowIndex,
					)}
					// disabled={fieldDisableEnable(config, processExpression)}
					onChange={handlerChange}
					onBlur={(e) => handlerBlur(e)}
				/>
			)}
			{config.isEmpty && <span>{config.errorText}</span>}
		</div>
	);
};

export default Atom_string;
