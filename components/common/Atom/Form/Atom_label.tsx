import React, { FC } from "react";
import { isEmpty } from "util/helper";
import { overrideTailwindClasses } from "tailwind-override";
type PropsType = {
	labelName: string;
	labelFor?: string;
	isHideSeperator?: any;
	isrequired: string;
	styles: any;
	sectionConfig?: any;
	className: string;
};

const Atom_label: FC<PropsType> = ({
	labelName,
	isrequired,
	styles,
	labelFor,
	className,
	sectionConfig,
	isHideSeperator,
}) => {
	return (
		<>
			<label
				htmlFor={labelFor}
				className={overrideTailwindClasses(
					`text-sm text-gray-900 dark:text-gray-100 ${className} ${
						sectionConfig?.widgetnemgooReady?.labelPosition == "top"
							? `ml-3 mb-3   ${className} `
							: `text-right self-center`
					}`,
				)}
				style={{ ...styles }}
			>
				{labelName}
				<span className="text-red-400 pl-1">{isrequired == "1" && "*"}</span>
				{isHideSeperator ||
				isEmpty(labelName) ||
				sectionConfig?.widgetnemgooReady?.labelPosition == "top"
					? ""
					: ":"}
			</label>
		</>
	);
};

export default Atom_label;
