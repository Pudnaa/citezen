import { FC, useContext, useState, useEffect } from "react";
import _ from "lodash";
import { getItemObject } from "util/helper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { useCloud } from "hooks/use-cloud";
import Image from "next/image";

type PropsType = {
	item?: any;
	positionConfig?: any;
	index?: number;
	onClickQty?: any;
	onClickRemove?: any;
};

const SkyResortShoppingCartItem: FC<PropsType> = ({
	item,
	positionConfig,
	index,
	onClickQty,
	onClickRemove,
}) => {
	const cloudContext = useCloud();

	let imgSrc = item?.profilephoto;
	if (imgSrc.startsWith("storage/")) {
		imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
	}

	return (
		<div className="flex items-center py-2.5 border-b w-full">
			<div className="">
				<Image
					src={imgSrc}
					alt={item?.itemname}
					width={150}
					height={160}
					className="object-center object-cover rounded-lg"
				/>
			</div>
			<div className="w-full px-3">
				<div className="flex items-center justify-between w-full pt-1">
					<RenderAtom
						item={getItemObject(item, "position1", positionConfig)}
						defaultAtom="title"
						customClassName={`text-base font-black leading-none text-gray-800`}
					/>
					{/* <i className="fas fa-times text-gray-500 hover:text-gray-800 cursor-pointer" /> */}
					<RenderAtom
						item={{ value: "fas fa-times" }}
						defaultAtom="icon"
						customClassName={`text-gray-500 hover:text-gray-800 cursor-pointer`}
						onClick={(e: any) => {
							e.preventDefault();
							onClickRemove(index, {
								...item,
								rowstate: "removed",
							});
						}}
					/>
				</div>
				<div className="flex justify-between w-full">
					<div className="flex items-center">
						<RenderAtom
							item={getItemObject(item, "position93", positionConfig)}
							defaultAtom="text"
							customClassName={`text-sm text-gray-500 mr-6`}
						/>
						<RenderAtom
							item={getItemObject(item, "position91", positionConfig)}
							defaultAtom="text"
							customClassName={`px-2 border text-gray-500`}
						/>
					</div>
					<RenderAtom
						item={getItemObject(item, "position4", positionConfig)}
						defaultAtom="currency"
						customClassName={`font-bold text-sm text-green-500`}
					/>
				</div>
				<div className="flex items-center">
					<RenderAtom
						item={getItemObject(item, "position92", positionConfig)}
						defaultAtom="text"
						customClassName={`text-gray-500`}
					/>
				</div>
				<div className="flex items-center justify-between py-2 w-full">
					<div
						className="bg-skyresort rounded-lg py-1.5 flex justify-between px-2 text-gray-800"
						style={{ width: "100px" }}
					>
						<i
							className="fas fa-minus text-lg cursor-pointer opacity-60 hover:opacity-95"
							onClick={(e: any) => {
								e.preventDefault();
								item.orderqty > 1 &&
									onClickQty(item, item.orderqty * 1 - 1 + "");
							}}
						/>
						<span className="text-xl font-bold items-center leading-6">
							{getItemObject(item, "position83", positionConfig).value}
						</span>
						<i
							className="fas fa-plus text-lg cursor-pointer opacity-60 hover:opacity-95"
							onClick={(e: any) => {
								e.preventDefault();
								onClickQty(item, item.orderqty * 1 + 1 + "");
							}}
						/>
					</div>
					<RenderAtom
						item={{
							value: String(item.unitprice * item.orderqty),
						}}
						defaultAtom="currency"
						customClassName={`text-lg lg:text-lg font-bold text-gray-800`}
					/>
				</div>
			</div>
		</div>
	);
};
export default SkyResortShoppingCartItem;
