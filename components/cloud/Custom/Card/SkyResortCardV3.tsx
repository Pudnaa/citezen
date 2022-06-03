import { FC, useState, useContext } from "react";
import RenderAtom from "@components/common/Atom/RenderAtom";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import ModalSkyResortProductReview from "@components/common/Modals/ModalSkyResortProductReview";
import axios from "axios";
// import { useSession } from "next-auth/react";
import { useUser } from "hooks/use-user";
import { notification } from "antd";
import { useCloud } from "hooks/use-cloud";
import Image from "next/image";
import FormMetaContext from "context/Meta/FormMetaContext";
type PropsType = {
	item?: any;
	type?: string;
	ordertime?: string;
	orderday?: string;
	itemkey?: number;
	setsalesOrderId?: any;
};

const SkyResortCardV3: FC<PropsType> = ({
	item,
	type = "default",
	orderday,
	ordertime,
	itemkey,
	setsalesOrderId,
}) => {
	const cloudContext = useCloud();
	const [currentcount, setCurrentCount] = useState(1);
	const [razmer, setRazmer] = useState(
		_.isEmpty(item?.clkpiindicatormapdv) ? 1 : null,
	);
	const {
		config,
		readyDatasrc,
		widgetnemgooReady,
		widgetAllaround,
		metaConfig,
		gridJsonConfig,
	} = useContext(WidgetWrapperContext);
	const [fact2, setFact2] = useState();
	const [orderDate, setOrderDate] = useState("time");
	const [orderTime, setOrderTime] = useState();
	const [salesOrder, setSalesOrder] = useState();
	const itemSize = _.values(item.clkpiindicatormapdv);
	const userContext = useUser();
	const [session, setSession] = useState(userContext?.userData);
	const noimage = "/public/img/no-img.jpg";
	// console.log("salesOrder", salesOrder);
	const RazmerRender = () => {
		if (_.isEmpty(item?.clkpiindicatormapdv)) return null;
		return (
			<div className="py-2 w-24">
				<div className="grid grid-cols-2">
					<div className="border-r border-black py-2 px-0.5 text-center">
						<RenderAtom
							item={{ value: "Размер" }}
							defaultAtom="text"
							customClassName="font-semibold text-xss"
						/>
						<div className="flex flex-col items-center font-semibold text-sm ">
							{itemSize.map((dataItem: any, index: number) => {
								return (
									<span
										className={` px-2  rounded cursor-pointer hover:border-skyresort hover:bg-skyresort hover:text-white ${
											dataItem.valueid === razmer
												? "border-skyresort bg-skyresort"
												: ""
										}`}
										onClick={(e: any) => onSizeEvent(e, dataItem)}
									>
										{dataItem.name}
									</span>
									//  " <RenderAtom
									//     key={item?.id || index}
									//     item={{ value: dataItem.name }}
									//     defaultAtom="text"
									//     onClick={(e: any) => onSizeEvent(e, dataItem)}
									//     customClassName={` pt-0.5 px-2  rounded cursor-pointer hover:border-skyresort hover:bg-skyresort hover:text-white ${
									//       dataItem.valueid === razmer
									//         ? "border-skyresort bg-skyresort"
									//         : ""
									//     }`}
									//   />"
								);
							})}
						</div>
					</div>
					<div className="py-2 px-0.5 text-center">
						<RenderAtom
							// item={item?.position2}
							item={{ value: "Тоо" }}
							defaultAtom="text"
							customClassName="font-semibold text-xss"
						/>
						<div className="flex flex-col items-center font-semibold text-sm">
							{itemSize.map((dataItem: any, index: number) => {
								return (
									<span
										key={item?.id || index}
										className="px-2  rounded cursor-default "
									>
										{dataItem.mainqty}
									</span>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		);
	};

	let activeIndex;
	const onSizeEvent = async (e: any, item: any) => {
		e.preventDefault();
		setRazmer(item.valueid);
		setFact2(item.code);
	};

	const onSubmit = async (e: any, item: any) => {
		e.preventDefault();
		if (!orderday) {
			notification.info({
				message: "Үйлчилгээ авах өдрийг сонгоно уу.",
				// placement: "",
			});
			return;
		}
		if (!ordertime) {
			notification.info({
				message: "Үйлчилгээ авах цагийг сонгоно уу.",
				// placement: "",
			});
			return;
		}
		// if (!orderTime) {
		//   notification.info({
		//     message: "Үйлчилгээ авах цагийг сонгоно уу.",
		//   });
		//   return;
		// }
		if (!razmer) {
			notification.info({
				message: "Хэмжээ, размерыг сонгоно уу.",
			});
			return;
		}
		if (_.isEmpty(session)) {
			notification.info({
				message: "Та эрхээрээ нэвтэрч орно уу.",
			});
			return;
		}
		const sdmSalesOrderItem_dtl = {
			itemId: item.itemid,
			fact1: razmer,
			fact2: fact2,
			fact3: item.olditemcode,
			unitPrice: item.unitprice,
			lineTotalPrice: item.unitprice,
			orderQty: currentcount,
		};
		const payload = {
			orderDate: orderday,
			refPlanDtlId: ordertime,
			companyDeparrtmentId: "16372242308021",
			customerId: session?.id,
			sdmSalesOrderItem_dtl,
		};
		handleFilterData(payload);
	};

	const handleFilterData = async (payload: any) => {
		const { data } = await axios.post(`/api/post-process`, {
			processcode: "cl_sdmOrderBookRowDv_001",
			parameters: payload,
		});
		if (data.status === "success") {
			notification.success({
				message: "Cагсанд нэмэгдлээ.",
				placement: "bottomRight",
			});
		} else {
			notification.error({
				message: data.text,
			});
		}
	};

	let imgSrc = item?.profilephoto;
	if (imgSrc.startsWith("storage/")) {
		imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`;
	}

	return (
		<div
			className={`cart-${itemkey} relative flex flex-col w-full h-full overflow-hidden rounded-lg`}
		>
			<div className="w-full h-60 bg-white flex  text-gray-800 font-roboto">
				<div className="w-full relative">
					<div className="w-full h-60 relative"></div>
					<Image
						src={imgSrc}
						alt={item?.itemname}
						role="img"
						className="w-full h-60 rounded-t-lg object-cover"
						layout="fill"
						objectFit="cover"
					/>
					<RenderAtom
						item={{ value: item?.itemname }}
						defaultAtom="title"
						customClassName={`absolute top-4 left-4 text-lg uppercase font-bold ${
							item?.itemname === "Өмд" && "text-white"
						}`}
					/>
					<div className="absolute bottom-2 left-2.5 flex space-x-1 baseline">
						<div className="flex items-baseline space-x-2.5">
							<RenderAtom
								item={{ value: item?.unitprice }}
								defaultAtom="currency"
								customClassName={`font-bold text-3xl lg:text-3xl`}
							/>
							<RenderAtom
								item={{ value: item?.shortname }}
								defaultAtom="text"
								customClassName="font-semibold"
							/>
						</div>
					</div>
				</div>
				<RazmerRender />
			</div>
			<div
				className="grow w-full p-3 h-full font-robotoslab"
				style={{ backgroundColor: "#e6e6e6" }}
			>
				<div className="w-full flex justify-between px-2">
					<div className="text-gray-800 font-bold text-xl flex justify-between   py-1 px-5 rounded-lg  border-2 border-skyresort  w-36">
						<i
							className="fas fa-minus cursor-pointer"
							onClick={(e: any) => {
								e.preventDefault();
								currentcount > 1 && setCurrentCount(currentcount - 1);
							}}
						></i>
						<span>{currentcount}</span>
						<i
							className="fas fa-plus cursor-pointer"
							onClick={(e: any) => {
								e.preventDefault();
								setCurrentCount(currentcount + 1);
							}}
						></i>
					</div>
					<RenderAtom
						item={{
							value: "Сагсанд хийх",
							positionnemgoo: {
								atom: {
									type: "button",
									className:
										"cursor-pointer hover:text-white hover:bg-skyresort-dark bg-skyresort text-center flex justify-center py-3 text-sm rounded-lg font-bold uppercase whitespace-nowrap",
									props: {
										disable: razmer ? false : true,
										disableClassName:
											"bg-gray-300 text-gray-600 cursor-default hover:bg-gray-300 hover:text-gray-600",
										disableWarning: "Размераа сонгоно уу",
									},
								},
								tooltip: { text: razmer ? "" : "Размераа сонгоно уу." },
							},
						}}
						onClick={(e: any) => onSubmit(e, item)}
					/>
				</div>
			</div>
		</div>
	);
};

export default SkyResortCardV3;
