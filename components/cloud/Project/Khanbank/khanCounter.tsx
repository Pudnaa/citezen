import { useContext, useEffect, useState, useRef, FC } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderAtom from "@atom/RenderAtom";
import _ from "lodash";
import useScrollTop from "@customhook/useScrollTop";
import { useTranslation } from "next-i18next";
// import { count } from "console";
import Item from "antd/lib/list/Item";

export default function khanCounter() {
	const { readyDatasrc } = useContext(WidgetWrapperContext);
	const { t } = useTranslation("common");

	return (
		<>
			<BlockDiv
				customClassName={`max-w-kbcontainer mx-auto bg-white`}
				divNumber="divCounterOuter"
			>
				<div
					className={
						"flex items-center justify-between w-full xs:flex xs:flex-col lg:flex-row xs:px-4"
					}
				>
					{readyDatasrc.map((item, index) => (
						<ItemCount key={index} data={item} />
					))}
				</div>
			</BlockDiv>
		</>
	);
}

type PropsTypeItem = {
	data: any;
};

const ItemCount: FC<PropsTypeItem> = ({ data }) => {
	const countNumber = data?.position1?.value;
	const [count, setCount] = useState(0);
	const ref = useRef(0);
	const accumlator = countNumber / 100;

	const updateCount = () => {
		if (ref.current < countNumber) {
			const result = Math.ceil(ref.current + accumlator);
			if (result > countNumber) return setCount(countNumber);
			setCount(result);
			ref.current = result;
		}
		setTimeout(updateCount, 50);
	};

	useEffect(() => {
		updateCount();
	}, [countNumber]);

	return (
		<div
			className={
				"lg:w-[255px] h-[100px] bg-[#F9F9F9] rounded flex flex-col items-center justify-evenly border-2 border-[#000000]/4 shadow-sm xs:w-full xs:my-2"
			}
		>
			<span className="flex space-x-1 justify-center items-center text-kbportal text-2xl font-semibold">
				{count}
			</span>
			<RenderAtom
				item={data?.position3}
				defaultAtom={"text"}
				customClassName={"text-kbportal text-xs"}
			/>
		</div>
	);
};
