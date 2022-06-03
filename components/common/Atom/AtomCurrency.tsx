import { FC } from "react";
import accounting from "accounting";
import { isEmpty } from "lodash";

type PropsType = {
	item: any;
	type: "mnt" | "usd" | "jpy";
	link?: string;
	customStyle?: any;
	customClassName?: string;
};

const AtomCurrency: FC<PropsType> = ({
	item,
	type = "mnt",
	link,
	customStyle,
	customClassName,
}) => {
	if (isEmpty(item)) return null;

	return (
		<span
			className={` ${customClassName} `}
			style={{
				...customStyle,
			}}
		>
			{type === "mnt" &&
				accounting.formatMoney(item, {
					symbol: "₮",
					format: "%v%s",
					precision: 0,
					thousand: ",",
				})}
			{type === "usd" &&
				accounting.formatMoney(item, {
					symbol: "$",
					format: "%s%v",
					precision: 0,
					thousand: ",",
				})}
		</span>
	);
};

export default AtomCurrency;
