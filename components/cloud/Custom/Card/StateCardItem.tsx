import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { jsonParse, renderPositionType } from "util/helper";
import { isEmpty } from "lodash";
import {
	AtomText,
	AtomNumber,
	AtomIcon,
	AtomCurrency,
} from "@components/common/Atom";

type PropsType = {
	item: any;
};

const StateCardItem: FC<PropsType> = ({ item }) => {
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

	if (isEmpty(item)) return null;

	const iconStyle = jsonParse(positionConfig["position49"]?.widgetnemgooReady);

	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
			<div className="flex items-center justify-between w-full sm:w-full">
				<div className="flex items-center">
					<div
						className="p-3  rounded-lg flex items-center justify-center h-14 w-14"
						style={{ background: item?.bgcolor }}
					>
						<AtomIcon
							item={renderPositionType(item, "position49", positionConfig)}
							color={widgetAllaround.color}
							customClassName="text-xl"
							customStyle={{ color: item?.textcolor }}
						/>
					</div>
					<div className="ml-3">
						<AtomCurrency
							type="mnt"
							item={renderPositionType(item, "position4", positionConfig)}
							customClassName="text-xl text-citizen-title font-bold block"
						/>
						<AtomText
							item={renderPositionType(item, "position40", positionConfig)}
							customClassName="text-base text-citizen-description  font-medium block"
						/>
					</div>
				</div>
				<div>
					<div className="flex items-center ml-2">
						<AtomIcon
							item={renderPositionType(item, "position50", positionConfig)}
							color={widgetAllaround.color}
							customClassName={`text-xs tracking-wide font-bold leading-normal pl-1 text-${
								renderPositionType(item, "position50", positionConfig) ===
								"fa fa-arrow-up"
									? "green"
									: "red"
							}-500`}
						/>

						<AtomText
							item={renderPositionType(item, "position51", positionConfig)}
							customClassName={`text-xs tracking-wide font-bold leading-normal pl-1 text-${
								renderPositionType(item, "position50", positionConfig) ===
								"fa fa-arrow-up"
									? "green"
									: "red"
							}-500`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StateCardItem;
