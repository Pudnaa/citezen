import { FC } from "react";
import RenderAtom from "@atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";

type PropsType = {
	type?: "default" | "modern";
	item?: any;
	customClassName?: string;
	customStyle?: object;
	divNamePrefix?: string;
};

//Тест

const MoleculeCard: FC<PropsType> = ({
	type = "default",
	item,
	customClassName = "",
	customStyle = {},
	divNamePrefix = "",
}) => {
	// console.log(
	// 	"moleculeTypemoleculeTypemolecu leTypemoleculeType description",
	// 	item?.description,
	// );
	return (
		<BlockDiv
			customClassName={customClassName}
			customStyle={{
				...customStyle,
			}}
			divNumber={`${divNamePrefix}divMoleculeCardOuter`}
		>
			<RenderAtom
				item={item?.image}
				defaultAtom="image"
				customClassName="w-full h-full object-cover object-center"
				divNamePrefix={divNamePrefix}
			/>
			<RenderAtom
				item={item?.title}
				defaultAtom="title"
				divNamePrefix={divNamePrefix}
			/>
			<RenderAtom
				item={item?.subtitle}
				defaultAtom="text"
				divNamePrefix={`${divNamePrefix}subtitle`}
			/>
			<RenderAtom
				item={item?.description}
				defaultAtom="text"
				divNamePrefix={divNamePrefix}
			/>
			<RenderAtom
				item={item?.button}
				defaultAtom="button"
				divNamePrefix={divNamePrefix}
			/>
		</BlockDiv>
	);
};

export default MoleculeCard;
