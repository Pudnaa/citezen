import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import Link from "next/link";
import Image from "next/image";
import { metaConfig } from "../../../../../config/metaConfig";
import { AtomLinkV3 } from "@components/common/Atom";
import { useRouter } from "next/router";
import {
	positionToPath,
	otherAttrToObj,
	jsonParse,
	renderPositionType,
} from "util/helper";
import {
	AtomList,
	AtomTitle,
	AtomText,
	AtomCurrency,
	AtomIcon,
	AtomButton,
	AtomTag,
} from "@components/common/Atom";
const Card96 = () => {
	const { config, readyDatasrc, widgetnemgooReady } =
		useContext(WidgetWrapperContext);
	const router = useRouter();
	// console.log("Card96 config", config);
	console.log("Card96 widgetnemgooReady", readyDatasrc);
	const veawPerCount = widgetnemgooReady?.veawPerCount || 3;
	// console.log("Card96 positionConfig", positionConfig);
	return (
		<>
			<div className="flex justify-between">
				<div className=" " div-name="divtitle">
					<span className="line-clamp-0 text-base font-semibold text-citizen-blue border-b border-solid border-citizen-blue pb-2">
						{widgetnemgooReady?.title || "Эрэлттэй үйлчилгээ"}
					</span>
					<span className="line-clamp-0 text-base font-semibold opacity-60 pl-6 text-citizen-title pb-2 cursor-pointer">
						Санал болгож буй үйлчилгээ
					</span>
				</div>
			</div>
			<div className="grid  grid-cols-3 grid-rows-2  grid-flow-col gap-4 pt-4">
				{readyDatasrc.slice(0, veawPerCount).map((item: any, index: any) => {
					return (
						<div
							key={item?.id || index}
							className="flex  flex-row  items-center md:flex-row rounded-lg shadow-sm   p-4 bg-white  cursor-pointer"
						>
							<div className=" flex items-center justify-center w-24">
								<Image
									src={`https://dev.veritech.mn/${item?.position2?.value}`}
									alt="icon"
									width={70}
									height={70}
								/>
							</div>
							<div className="sm:flex flex-row items-start justify-between ml-4 w-full">
								<div className="w-full">
									<div className="flex items-center justify-between">
										<RenderAtom
											item={item?.position41}
											defaultAtom="text"
											customClassName="text-base sm:pt-0 pt-4    text-citizen-description  dark:text-gray-400"
										/>
									</div>
									{/*
                  <RenderAtom
										item={item?.position1}
										defaultAtom="title"
										customClassName="text-base font-extrabold leading-5  text-citizen-title dark:text-gray-100  "
										customProps={{
											truncateRow: 2,
										}}
									/> */}

									<Link
										prefetch={true}
										shallow={true}
										href={`/citizen/detail?itemid=${item?.id}`}
									>
										<span
											className={`text-base font-bold leading-5  text-citizen-title dark:text-gray-100   line-clamp-2`}
										>
											{item?.itemname}
										</span>
									</Link>
									{/* <button
										type="button"
										onClick={() =>
											router.push("/citizen/detail?itemid=16390281362921")
										}
									>
										Click me
									</button> */}
									<RenderAtom
										item={item?.position92}
										defaultAtom="text"
										customClassName="text-base sm:pt-0 pt-4   text-citizen-title  dark:text-gray-400"
										customProps={{
											truncateRow: 2,
										}}
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="flex justify-end mt-8 ">
				<AtomLinkV3
					href={widgetnemgooReady?.moreLink || "/"}
					color="blue-400"
					children={
						<span className="cursor-pointer text-base text-citizen-description hover:border-blue-400 border-citizen-description  hover:text-blue-400 border rounded-lg py-2 px-4 ">
							Бүх үйлчилгээ
							<i className="fa-solid fa-arrow-right-long pl-2"></i>
						</span>
					}
				/>
			</div>
		</>
	);
};
export default Card96;
