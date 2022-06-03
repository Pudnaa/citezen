import { useContext, useState, useEffect, useRef, FC, useMemo } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import fetchJson from "lib/fetchJson";
import moment from "moment";
import _, { split } from "lodash";
import { json } from "stream/consumers";
import { data } from "autoprefixer";
import { spawn } from "child_process";
import axios from "axios";
import { notification, Empty } from "antd";
import useSWR from "swr";
import { useCloud } from "hooks/use-cloud";
import { useRouter } from "next/router";
import { Modal, Popconfirm, Select, Input } from "antd";
export default function ScheduleTime() {
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

	const [responseData, setResponseData] = useState<any>();
	const [todos, setTodos] = useState([]);
	const router = useRouter();
	const cloudContext = useCloud();
	const [active, setActive] = useState(false);
	const [hide, setHidden] = useState<any>();
	const [plane, setPlane] = useState<any>();
	const [planeid, setPlaneId] = useState<any>();
	const [isRentVal, setIsRentVal] = useState<any>();
	const [itemIdVal, setItemIdVal] = useState<any>();
	const [qtyVal, setQtyVal] = useState<any>();
	const [visible, setVisible] = useState(false);
	const [visible1, setVisible1] = useState(false);
	const [content, setContent] = useState<any>();
	const [status, setStatus] = useState(false);

	const [selectedId, setSelectedId] = useState<any>(
		router.query?.salesorderid || "salesorderid",
	);
	const processParam = {
		id: 1,
		bookDate: moment().format("YYYY-MM-DD"),
	};

	useEffect(() => {
		fetch(
			`/api/get-process?processcode=getServiceAvailableTime_004&parameters=${JSON.stringify(
				processParam,
			)}`,
		)
			.then((res) => res.json())
			.then((data) => setOrderDay(data));
	}, []);

	const [orderDay, setOrderDay] = useState<any>();

	const { data: optionsObject1 } = useSWR(
		`/api/get-data?metaid=1647319289441213&pagingwithoutaggregate=1`,
	);
	const { data: optionsObject2 } = useSWR(
		`/api/get-data?metaid=1615886060716745&pagingwithoutaggregate=1`,
	);
	const { data: optionsObject3 } = useSWR(
		`/api/get-data?metaid=1647325640977874&pagingwithoutaggregate=1`,
	);
	delete optionsObject1?.aggregatecolumns;
	delete optionsObject2?.aggregatecolumns;
	delete optionsObject3?.aggregatecolumns;
	delete optionsObject1?.paging;
	delete optionsObject2?.paging;
	delete optionsObject3?.paging;
	const options1 = _.values(optionsObject1);
	const options2 = _.values(optionsObject2);
	const options3 = _.values(optionsObject3);
	let now = moment();
	const processParameters = {
		id: selectedId,
	};
	const { data: orderInfo } = useSWR(
		`/api/get-process?processcode=GET_ORDER_INFO_004&parameters=${JSON.stringify(
			processParameters,
		)}`,
	);
	delete orderInfo?.aggregatecolumns;
	delete orderInfo?.paging;

	const dataSrc = _.values(orderInfo?.bookdtl);
	const text = "Are you sure you want to cancel?";

	function reloadThePage() {
		window.location.reload();
	}

	const orderCancel = async (e: any) => {
		const salesorderid = dataSrc[0]?.salesorderid || "";
		const payload = {
			id: salesorderid,
		};
		const { data } = await axios.post(`/api/post-process`, {
			processcode: "ORDER_DATAS_DV_005",
			parameters: payload,
		});
		if (data.status === "success") {
			reloadThePage();
		} else {
			console.log("error", data.text);
		}
	};
	const onClose = () => {
		setVisible(false);
		setVisible1(false);
	};
	let form = useRef<any>();

	const orderUpdate = async (e: any, item: any) => {
		e.preventDefault();
		setVisible(true);

		const salesorderid = dataSrc[0]?.salesorderid || "";
		// console.log("salesOrder item", dataSrc);

		const processNameResult = "SKY_WEB_ORDER_GET_004";
		const processParameters = {
			salesOrderId: salesorderid,
		};
		const salesData: any = await fetchJson(
			`/api/get-process?processcode=${processNameResult}&parameters=${JSON.stringify(
				processParameters,
			)}`,
		);
		// console.log("rememoveProccessremoveProccess", salesData);
		const upForm = () => {
			const { Option } = Select;

			const eventHandle = (e: any) => {
				// console.log("ddddddddd", e);
				setQtyVal(e);
			};

			const eventHandle2 = (e: any) => {
				setItemIdVal(e);
			};

			const eventHandle3 = (e: any) => {
				setIsRentVal(e);
			};
			return (
				<div>
					<form ref={form} className="w-full bg-white ">
						<div>
							<div className="">
								<div className="xl:flex lg:flex md:flex flex-wrap justify-between">
									<div className="w-full  flex flex-col mb-3">
										<label
											htmlFor="options2"
											className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
										>
											Number of holes
										</label>
										<Select
											placeholder="- Select -"
											onChange={eventHandle2}
											className="h-8  rounded"
											defaultValue={salesData.itemid}
										>
											{options2 &&
												options2.map((item: any, index: any) => {
													return (
														<Option key={index} value={item.id}>
															{item.name}
														</Option>
													);
												})}
											{/* <Option value="16188152370261">9 нүх</Option>
									<Option value="16188152359231">18 нүх</Option> */}
										</Select>

										{/* {itemIdVal && (
									<div className="border-red-800 flex text-red-600 space-x-2 py-2 px-4 rounded-lg">
										<span> Please select a value</span>
									</div>
								)} */}
									</div>
									<div className="w-full  flex flex-col mb-3">
										<label
											htmlFor="options1"
											className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
										>
											Number of players
										</label>

										<Select
											className="h-8  rounded "
											onChange={eventHandle}
											defaultValue={salesData.qty}
											placeholder="- Select -"
										>
											{options1 &&
												options1.map((item: any, index: any) => {
													return (
														<Option key={index} value={item.id}>
															{item.name}
														</Option>
													);
												})}
										</Select>
									</div>
									<div className="w-full  flex flex-col mb-3">
										<label
											htmlFor="options3"
											className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
										>
											Golf club set rental
										</label>
										<Select
											placeholder="- Select -"
											defaultValue={salesData.planid}
											onChange={eventHandle3}
											id="options3"
											className="h-8  rounded"
										>
											{options3 &&
												options3.map((item: any, index: any) => {
													return (
														<Option key={index} value={item.id}>
															{item.name}
														</Option>
													);
												})}
										</Select>
									</div>
								</div>
							</div>
						</div>
						<Input
							type="hidden"
							required
							name="itemId"
							value={salesData.itemid}
						/>
						<Input type="hidden" required name="qty" value={salesData.qty} />
						{/* <Input type="hidden" required name="planTimeId" value={isRentVal} /> */}
						<Input type="hidden" required name="isRent" value={isRentVal} />
						<Input type="hidden" name="planId" value={planeid} />
						<Input
							type="hidden"
							name="bookDate"
							value={now.format("YYYY-MM-DD")}
						/>

						<div className="w-full mt-2 ">
							<button
								className="bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-600 rounded text-white px-8 py-1 text-sm focus:outline-none"
								type="submit"
							>
								Update Forms »
							</button>
						</div>
					</form>
				</div>
			);
		};
		setContent(
			<>
				<h2> {item && item[0]?.path4}</h2>
				{upForm()}
				{/* <span>
					<pre>{JSON.stringify(salesData, null, 4)}</pre>
				</span> */}
			</>,
		);
	};

	const onClickOtherDay = async (item: any) => {
		// e.preventDefault();
		const processName = "getServiceAvailableTime_004";
		const processParameters = {
			id: 1,
			bookDate: item,
		};
		const processResult: any = await fetchJson(
			`/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
				processParameters,
			)}`,
		);
		setOrderDay(processResult);
	};

	const kmdtl = _.values(orderDay?.availableday);

	const orderUpdateTime = async (e: any, item: any) => {
		e.preventDefault();
		setVisible1(true);
	};

	return (
		<>
			<div className="overflow-y-hidden pt-6">
				<div className="md:w-3/4 sm:w-full  2xl:mx-auto py-6 px-4 md:px-6 xl:px-20 flex justify-center items-center flex-col">
					<div className="w-full  bg-white  p-6 border rounded">
						<div className="text-left flex justify-center items-center flex-col ">
							<h1 className="font-medium text-xl md:text-2xl lg:text-4xl leading-5 md:leading-8 lg:leading-10 text-gray-800 mb-0">
								Sky Resort
							</h1>
							<p className="mt-0 md:mt-1 lg:mt-2 leading-6 md:leading-8 text-lg md:text-xl lg:text-2xl">
								Mt.Bogd golf & county club
							</p>
						</div>
					</div>
					<div className="mt-2 md:mt-2 xl:mt-2 flex flex-col xl:flex-row justify-start items-start  w-full xl:space-x-52  ">
						<div className="w-full  flex flex-col justify-start items-start ">
							<div className="w-full flex justify-start items-start flex-col space-y-8">
								<div className="w-full flex justify-start items-start flex-col">
									<div
										className="border rounded border-gray-200 w-full px-6 py-10 flex justify-start items-start space-x-4 bg-white my-2 cursor-pointer"
										// onClick={() => handleShow(3)}
									>
										{(dataSrc.length > 0 && (
											<div className="w-full">
												<div className={`mt-4 text-base leading-normal w-full`}>
													<h1>{(dataSrc && dataSrc[0]?.path1) || "title"}</h1>
													<div className="bg-[#dff0d8]  rounded gap-2 text-black p-6 w-full">
														{/* {JSON.stringify(responseData)} */}
														{dataSrc &&
															dataSrc.map((item: any, index: any) => {
																return (
																	<p
																		key={index}
																		className="border-b inline-block border-black my-1 hover:opacity-90"
																	>
																		{" "}
																		{item?.path2} / {item?.path3}
																	</p>
																);
															})}
													</div>
													<p className="my-2">{dataSrc && dataSrc[0]?.path4}</p>

													<div className="flex gap-1">
														<Popconfirm
															placement="top"
															title={text}
															okText="Yes"
															cancelText="No"
															onConfirm={(e: any) => orderCancel(e)}
														>
															<p
																className="px-4 text-sm py-1 inline-block bg-gray-600 text-white rounded my-4 hover:opacity-75"
																// onClick={(e: any) => orderCancel(e)}
															>
																Сancel
															</p>
														</Popconfirm>

														<p
															className="px-4 text-sm py-1 inline-block bg-gray-600 text-white rounded my-4 hover:opacity-75"
															onClick={(e: any) =>
																orderUpdateTime(e, responseData)
															}
														>
															Reschedule
														</p>
														<p
															className="px-4 text-sm py-1 inline-block bg-gray-600 text-white rounded my-4 hover:opacity-75"
															onClick={(e: any) => orderUpdate(e, responseData)}
														>
															Edit Forms
														</p>
													</div>
												</div>
												<Modal
													visible={visible}
													// width={620}
													// title="Edit form"
													centered
													footer={false}
													onCancel={onClose}
												>
													{content}
												</Modal>
												<Modal
													visible={visible1}
													// width={620}
													// title="Edit form"
													centered
													footer={false}
													onCancel={onClose}
												>
													<div>
														<div className="bg-white  mt-4 ">
															<div className="flex justify-between pt-3 px-1 ">
																<button
																	className=" py-1 rounded-lg border border-white hover:border hover:border-gray-300 cursor-pointer text-gray-500  "
																	onClick={(e: any) => {
																		onClickOtherDay(kmdtl[0]["prevdate"]);
																	}}
																>
																	<i className="fa-solid fa-angle-left pr-2"></i>
																	prev
																</button>
																<button
																	className=" py-1 rounded-lg border border-white hover:border hover:border-gray-300 cursor-pointer text-gray-500  "
																	onClick={(e: any) => {
																		onClickOtherDay(kmdtl[0]["nextdate"]);
																	}}
																>
																	next
																	<i className="fa-solid fa-angle-right pl-2"></i>
																</button>
															</div>
															<div className="flex justify-center w-full">
																<div className="grid w-full grid-cols-5 py-2">
																	{kmdtl.map((day: any, index: any) => {
																		const time = _.values(day?.availabletime);
																		return (
																			<div
																				className="text-center justify-self-stretch"
																				key={index}
																			>
																				<div className=" bg-gray-100 px-2 py-4 mb-2 ">
																					<span className="m-0 text-sm text-gray-400 capitalize">
																						{day?.weekname}
																					</span>
																					<p className="m-0 capitalize">
																						{day?.name}
																					</p>
																					<span className="m-0 text-sm text-gray-400 capitalize ">
																						{day?.monthday}
																					</span>
																				</div>
																				{time.map((time: any, index: any) => {
																					return (
																						<p
																							key={index}
																							className={`m-0 py-1 rounded-lg border border-white hover:border hover:border-gray-300 item-${time?.id} ${active}`}
																							// onClick={(e: any) => {
																							// 	onClickOrderTime(e, time, day);
																							// }}
																							// onClick={() => setActive((prev) => !prev)}
																						>
																							{time?.time}
																							{/* <p className="border solid  "> Add to time</p> */}
																						</p>
																					);

																					// return (
																					// 	<ScheduleTime
																					// 		item={day}
																					// 		time={time}
																					// 		onClick={(e: any) => onClickOrderTime(e, time, day)}
																					// 	/>
																					// );
																				})}
																			</div>
																		);
																	})}
																</div>
															</div>
														</div>
													</div>
												</Modal>
											</div>
										)) || (
											<Empty
												className="py-20  rounded-lg  mx-6 w-full"
												description="No service "
											/>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
