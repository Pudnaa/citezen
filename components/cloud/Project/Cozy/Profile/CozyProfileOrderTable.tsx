import { useContext, FC, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import useSWR from "swr";
import { useUser } from "hooks/use-user";
import ModalView from "@components/cloud/Custom/Modal/ModalView";
import RenderWidgetProcess from "middleware/components/WidgetForm/RenderWidgetProcess";
import { useSession } from "next-auth/react";
import QRCode from "react-qr-code";
import useWidgetDataSWR from "middleware/components/dataHook/useWidgetDataSWR";

type PropsType = {
	display?: boolean;
};
const CozyProfileOrderTable: FC<PropsType> = ({ display = true }) => {
	const {
		config,
		readyDatasrc,
		positionConfig,
		metaConfig,
		gridJsonConfig,
		pathConfig,
	} = useContext(WidgetWrapperContext);

	const { data: session } = useSession();
	const [visibleModal, setVisibleModal] = useState(false);
	const [content, setContent] = useState<any>();

	// const [session, setSession] = useState(userContext?.userData);
	// const userId = session?.id || "";
	const handlerCloseClick = (e: any) => {
		setVisibleModal(false);
	};

	if (_.isEmpty(session)) return null;

	const handlerClick = (e: any) => {
		const param = { metadataid: "16443794210359" };
		setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
		// setContent(statusChangeProcess(e));
		setVisibleModal(true);
	};

	const handlerClickDate = (e: any) => {
		const param = { metadataid: "1644899850141664" };
		setContent(<RenderWidgetProcess dialog={true} listConfig={param} />);
		// setContent(statusChangeProcess(e));
		setVisibleModal(true);
	};

	const handlerClickqr = (e: any, code: any) => {
		// setVisibleQR(true);
		const qrStr = () => {
			return (
				<div className="flex justify-center">
					<QRCode value={code} />
				</div>
			);
		};
		setContent(qrStr());
		setVisibleModal(true);
	};

	//хэрэглэгчийн захиалгыг авчирна.
	const [dataSrc, dataError, dataMutate] = useWidgetDataSWR(
		{ metadataid: "1642578675304230" },
		{
			criteria: {
				defaultQuery: {
					customerId: session.id,
				},
			},
		},
	);

	return (
		<div
			className={` ${
				!display ? "opacity-0 h-0 overflow-hidden" : "flex opacity-100 h-full"
			} items-center justify-center overflow-x-auto px-4 trans`}
		>
			<div className="bg-white w-full dark:bg-gray-800 rounded py-6">
				<div className="">
					<table className="text-center">
						<thead>
							<tr className="h-4  border-b border-gray-200 text-xs md:text-base font-medium leading-none text-gray-500 dark:text-gray-400">
								<td className="pb-4 pl-8">№</td>
								<td className="pb-4 pl-4">Дугаар</td>
								<td className="pb-4 pl-8">Харилцагч</td>
								<td className="pb-4 pl-4">Огноо</td>
								<td className="pb-4 pl-8">Цаг</td>
								<td className="pb-4 px-8">Төлөв</td>
								<td className="pb-4 px-8">Үнэ</td>
								<td className="pb-4 px-8">Үйлдэл</td>
							</tr>
						</thead>
						<tbody>
							{dataSrc &&
								dataSrc.map((item: any, index: number) => {
									var c = new Date(item.orderdate);
									// const statusId =  item.wfmstatusid;
									const statusChange = () => {
										if (
											item.wfmstatusid === "1642050692952423" ||
											item.wfmstatusid === "1644377343561328" ||
											item.wfmstatusid === "1642057774716216"
										) {
											return (
												<span className="cursor-not-allowed text-gray-400">
													<i className="fa-solid fa-rotate-left text-sm pr-1"></i>
													Буцаах{" "}
												</span>
											);
										}
										return (
											<span
												className="hover:text-blue-600"
												onClick={() => handlerClick(item)}
											>
												<i className="fa-solid fa-rotate-left text-sm pr-1"></i>
												Буцаах{" "}
											</span>
										);
									};
									const statusChecked = () => {
										if (item.wfmstatusid === "1642050656042307") {
											return (
												<div
													className="py-2 px-5 rounded-xl text-white text-sm cursor-pointer"
													style={{ backgroundColor: item.wfmstatuscolor }}
													onClick={(e: any) => handlerClickqr(e, item.qrcode)}
												>
													{item.wfmstatusname}
												</div>
											);
										}
										return (
											<div
												className="py-2 px-5 rounded-xl text-white text-sm"
												style={{ backgroundColor: item.wfmstatuscolor }}
											>
												{item.wfmstatusname}
											</div>
										);
									};
									const dataChange = () => {
										if (item.wfmstatusid == "1642050692952423") {
											return (
												<>
													<i className="fa-regular fa-clock-rotate-left "></i>
													<RenderAtom
														item={{ value: item.orderdate }}
														defaultAtom="text"
														customClassName=" justify-self-center"
													/>
												</>
											);
										}
										return (
											<>
												<span
													onClick={() => handlerClickDate(item)}
													className="flex"
												>
													<i className="fa-regular fa-clock-rotate-left text-blue-500  cursor-pointer hover:text-blue-800"></i>
													<RenderAtom
														item={{ value: item.orderdate }}
														defaultAtom="text"
														customClassName="text-blue-500 cursor-pointer hover:text-blue-800 justify-self-center"
													/>
												</span>
											</>
										);
									};
									return (
										<tr
											key={item?.id || index}
											className="text-xs md:text-base leading-3 dark:text-gray-100 text-gray-800"
										>
											<td className="pl-8 pt-4">
												<div className="flex items-center">
													<p>{index + 1}</p>
												</div>
											</td>
											<td className="pl-4 pt-4">
												<div className="flex items-center">
													<RenderAtom
														item={{ value: item.ordernumber }}
														defaultAtom="text"
														customClassName="whitespace-nowrap"
													/>
												</div>
											</td>
											<td className="pt-4 pl-8">
												<RenderAtom
													item={{ value: item.username }}
													defaultAtom="text"
													customClassName="whitespace-nowrap"
												/>
											</td>
											<td className="pt-6 pl-4 flex gap-2  text-center  justify-center">
												{dataChange()}
											</td>
											<td className="pt-4 pl-8">
												<RenderAtom
													item={{ value: item.ordertime }}
													defaultAtom="text"
													customClassName=""
												/>
											</td>
											<td className="pt-4 pl-9 text-center">
												{statusChecked()}
											</td>
											<td className="pt-4 pl-8 pr-5">
												<RenderAtom
													item={{ value: item.linetotalprice }}
													defaultAtom="currency"
													customClassName=""
												/>
											</td>
											<td className="pt-4 pl-8 pr-5">{statusChange()}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
			<ModalView
				visible={visibleModal}
				modalOptions={{
					width: 450,
				}}
				onClose={handlerCloseClick}
				modelContent={content}
			/>
		</div>
	);
};
export default CozyProfileOrderTable;
