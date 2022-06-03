import { useContext, useState, useEffect, useRef, FC, useMemo } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderMolecule from "@molecule/RenderMolecule";
import fetchJson from "lib/fetchJson";
import moment from "moment";
import _, { split } from "lodash";
import { json } from "stream/consumers";
import { data } from "autoprefixer";
import { spawn } from "child_process";
import { Select, Input, Popconfirm } from "antd";
import axios from "axios";
import { notification } from "antd";
import useSWR from "swr";
import { Modal } from "antd";
export default function ScheduleSkyResort() {
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
	const [tab1, setTab1] = useState(false);
	const [tab2, setTab2] = useState(false);
	const [tab3, setTab3] = useState(false);
	const [orderDay, setOrderDay] = useState<any>();
	const [orderProduct, setOrderProduct] = useState<any>({});
	const [isCheck, setsCheck] = useState([false, false, false, false]);
	const [todos, setTodos] = useState([]);
	const [active, setActive] = useState(false);
	const [hide, setHidden] = useState<any>();
	const [plane, setPlane] = useState<any>();
	const [responseData, setResponseData] = useState<any>();
	const [planeid, setPlaneId] = useState<any>();
	const [isRentVal, setIsRentVal] = useState<any>();
	const [itemIdVal, setItemIdVal] = useState<any>();
	const [qtyVal, setQtyVal] = useState<any>();
	const [visible, setVisible] = useState(false);
	const [content, setContent] = useState<any>();
	const [status, setStatus] = useState(false);
	let now = moment();
	const text = "Are you sure you want to cancel?";
	const handleShow = (e: any, id) => {
		// setTodos([]);
		switch (id) {
			case 1:
				// setTab1(true);
				setTab1((prev) => !prev);
				setTab2(false);
				setTab3(false);
				setHidden("show");
				status && reloadThePage();
				break;
			case 222:
				console.log("newss33 Show,-----", id);
				setTab1(false);
				setTab2(true);
				// setTab2((prev) => !prev);
				setTab3(false);
				break;
			case 3:
				setTab1(false);
				setTab2(false);
				setTab3((prev) => !prev);
				break;
			default:
				console.log("unknown category");
				break;
		}
		// onClickOtherDay(e, now.format("YYYY-MM-DD"), "");
	};

	const onClickData = async (e: any, item: any, index: any) => {
		e.preventDefault();
		setTodos([]);
		setPlane(item.name);
		setPlaneId(item.id);
		// console.log("ishow", ishow);
		// console.log("ishow index", index);
		let newisCheck = [...isCheck];
		const processName = "getServiceAvailableTime_004";
		const processParameters = {
			id: item.id,
			bookDate: now.format("YYYY-MM-DD"),
		};
		const processResult: any = await fetchJson(
			`/api/get-process?processcode=${processName}&parameters=${JSON.stringify(
				processParameters,
			)}`,
		);

		setOrderDay(processResult);

		newisCheck[index] = !isCheck[index];
		setsCheck(newisCheck);

		// console.log("dd", newisCheck);
		setHidden("hidden");
		// setTab1(false);
	};

	const onClickOtherDay = async (e: any, item: any, id: any) => {
		e.preventDefault();
		setTodos([]);
		// setPlane(item.name);
		let newisCheck = [...isCheck];
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
		// newisCheck[index] = !isCheck[index];
		// setsCheck(newisCheck);
		// setHidden("hidden");
	};

	const onClickOrderTime = (e: any, day: any, time: any) => {
		e.preventDefault();
		let newisCheck = [...todos];
		// console.log("todos", newisCheck);
		// console.log("todos day", day);
		// console.log("todos time", time);
		if (_.find(newisCheck, { dayTime: day?.id + `--` + day?.time })) {
			notification.info({
				message: "Already has been added",
			});
		} else {
			setTodos((todos) => [
				...todos,
				{
					id: time?.id,
					bookDate: time?.bookeddate,
					monthday: time?.monthday,
					dayName: time?.name,
					dayBookId: day?.bookid,
					dayId: day?.id,
					time: day?.time,
					planId: planeid,
					// isRent: isRentVal,
					// itemId: itemIdVal,
					// qty: qtyVal,
					dayTime: day?.id + "--" + day?.time,
				},
			]);
		}
	};

	const kmdtl = _.values(orderDay?.availableday);
	let form = useRef<any>();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		e.target.reset();
		const form_data = new FormData(form.current);
		let book = { bookDtl: [...todos] };
		let payload: any = {};

		form_data.forEach(function (value: any, key: string) {
			payload[key] = value;
		});
		const orderData = { ...payload, ...book };
		if (!itemIdVal) {
			notification.info({
				message: "Number of holes.",
			});
			return;
		}
		console.log("DDDD FORM DATA payload", orderData);
		handleOrderRequest(orderData);
	};

	const handleOrderRequest = async (payload: any) => {
		if (!qtyVal) {
			notification.info({
				message: "Number of players.",
			});
			return;
		}

		const { data } = await axios.post(`/api/post-process`, {
			processcode: "golfOrderBook",
			parameters: payload,
		});

		if (data.status === "success") {
			setTodos([]);
			setTab1(false);
			setTab2(false);
			setTab3(true);
			const orderid = data.result?.id;
			const processNameResult = "GET_ORDER_INFO_004";
			const processParameters = {
				id: orderid,
			};
			setStatus(true);
			const processResult: any = await fetchJson(
				`/api/get-process?processcode=${processNameResult}&parameters=${JSON.stringify(
					processParameters,
				)}`,
			);
			setResponseData(_.values(processResult.bookdtl));
		} else {
			notification.error({
				message: data.text,
			});
		}
	};

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

	const reqForm = () => {
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
			<form ref={form} onSubmit={handleSubmit} className="w-full bg-white ">
				<div>
					<div className="">
						<div className="xl:flex lg:flex md:flex flex-wrap justify-between">
							<div className="w-full mb-3">
								<label
									htmlFor="lastName"
									className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
								>
									Name
								</label>
								<div className="flex justify gap-2">
									<Input
										type="text"
										name="firstName"
										required
										placeholder="First Name"
										id="firstName"
										className="w-1/3 h-8 rounded"
									/>{" "}
									<Input
										type="text"
										id="lastName"
										placeholder="Last Name"
										name="lastName"
										className="w-2/3 h-8 rounded"
									/>
								</div>
							</div>

							<div className="w-full  flex flex-col mb-3">
								<label
									htmlFor="phoneNumber"
									className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
								>
									Phone number
								</label>
								<Input
									type="text"
									name="phone"
									required
									placeholder="phone number"
									id="phone"
									className="w-full h-8 rounded"
								/>{" "}
							</div>
							<div className="w-full flex flex-col mb-3">
								<label
									htmlFor="email"
									className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
								>
									Email
								</label>
								<div className="relative">
									<Input
										type="text"
										name="email"
										required
										placeholder="Email"
										id="email"
										className="w-full h-8 rounded"
									/>{" "}
								</div>
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
									placeholder="- Select -"
								>
									{/* <Option value="1">1</Option>
									<Option value="2">2</Option>
									<Option value="3">3</Option>
									<Option value="4">4</Option> */}

									{options1 &&
										options1.map((item: any, index: any) => {
											return (
												<Option key={index} value={item.id}>
													{item.name}
												</Option>
											);
										})}
								</Select>
								{/* {qtyVal && (
									<div className="border-red-800 flex text-red-600 space-x-2 py-2 px-4 rounded-lg">
										<span> Please select a value</span>
									</div>
								)} */}
							</div>
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
									htmlFor="options3"
									className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100"
								>
									Golf club set rental
								</label>
								<Select
									placeholder="- Select -"
									// defaultValue="0"
									onChange={eventHandle3}
									id="options3"
									className="h-8  rounded"
								>
									{/* <Option value="1">Yes</Option>
									<Option value="0">No</Option> */}
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
				<Input type="hidden" required name="itemId" value={itemIdVal} />
				<Input type="hidden" required name="qty" value={qtyVal} />
				{/* <Input type="hidden" required name="planTimeId" value={isRentVal} /> */}
				<Input type="hidden" required name="isRent" value={isRentVal} />
				<Input type="hidden" name="planId" value={planeid} />
				<Input type="hidden" name="bookDate" value={now.format("YYYY-MM-DD")} />

				<div className="w-full mt-2 ">
					<button
						className="bg-gray-700 transition duration-150 ease-in-out hover:bg-gray-600 rounded text-white px-8 py-1 text-sm focus:outline-none"
						type="submit"
					>
						Complete Appointment »
					</button>
				</div>
			</form>
		);
	};
	const orderUpdate = async (e: any, item: any) => {
		e.preventDefault();
		setVisible(true);

		const salesorderid = item[0]?.salesorderid || "";
		// // console.log("salesOrder", salesorderid);

		const processNameResult = "SKY_WEB_ORDER_GET_004";
		const processParameters = {
			salesOrderId: salesorderid,
		};
		const salesData: any = await fetchJson(
			`/api/get-process?processcode=${processNameResult}&parameters=${JSON.stringify(
				processParameters,
			)}`,
		);
		console.log("rememoveProccessremoveProccess", salesData);
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

	const onClose = () => {
		setVisible(false);
	};

	const orderCancel = async (e: any) => {
		const salesorderid = responseData[0]?.salesorderid || "";
		const payload = {
			id: salesorderid,
		};
		const { data } = await axios.post(`/api/post-process`, {
			processcode: "ORDER_DATAS_DV_005",
			parameters: payload,
		});
		if (data.status === "success") {
			notification.warning({
				message: "Order canceled",
			});
			reloadThePage();
		} else {
			console.log("error", data.text);
		}
	};
	function reloadThePage() {
		window.location.reload();
	}
	const onClickOrderRemove = (e: any, i: any) => {
		e.preventDefault();
		// console.log("date ", i);
		// console.log("todos ", todos);
		const newlist = todos.filter((todos) => todos.dayId !== i.dayId);
		setTodos(newlist);
	};

	const timelist = (e: any) => {
		// console.log("time;os", kmdtl);
		return (
			<div>
				<div className="bg-white  mt-4 ">
					<div className="flex justify-between pt-3 px-1 ">
						<button
							className=" py-1 rounded-lg border border-white hover:border hover:border-gray-300 cursor-pointer text-gray-500  "
							onClick={(e: any) => {
								onClickOtherDay(e, kmdtl[0]["prevdate"], kmdtl[0]["id"]);
							}}
						>
							<i className="fa-solid fa-angle-left pr-2"></i>
							Өмнөх {kmdtl[0]["prevdate"]}
						</button>
						<button
							className=" py-1 rounded-lg border border-white hover:border hover:border-gray-300 cursor-pointer text-gray-500  "
							onClick={(e: any) => {
								onClickOtherDay(e, kmdtl[0]["nextdate"], kmdtl[0]["id"]);
							}}
						>
							Дараагийнх
							<i className="fa-solid fa-angle-right pl-2"></i>
						</button>
					</div>
					<div className="flex justify-center w-full">
						<div className="grid w-full grid-cols-5 py-2">
							{kmdtl.map((day: any, index: any) => {
								const time = _.values(day?.availabletime);
								return (
									<div className="text-center justify-self-stretch" key={index}>
										<div className=" bg-gray-100 px-2 py-4 mb-2 ">
											<span className="m-0 text-sm text-gray-400 capitalize">
												{day?.weekname}
											</span>
											<p className="m-0 capitalize">{day?.name}</p>
											<span className="m-0 text-sm text-gray-400 capitalize ">
												{day?.monthday}
											</span>
										</div>
										{time.map((time: any, index: any) => {
											return (
												<p
													key={index}
													className={`m-0 py-1 rounded-lg border border-white hover:border hover:border-gray-300 item-${time?.id} ${active}`}
													onClick={(e: any) => {
														onClickOrderTime(e, time, day);
													}}
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
		);
	};

	return (
		<>
			<div className="overflow-y-hidden pt-6">
				<div className="md:w-3/4 sm:w-full 2xl:mx-auto py-6 sm:px-2 md:px-6 xl:px-20 flex justify-center items-center flex-col">
					<div className="w-full  bg-white  p-6 border rounded">
						<div className="text-left flex justify-center items-center flex-col ">
							<h1 className="font-medium text-xl md:text-2xl lg:text-4xl leading-5 md:leading-8 lg:leading-10 text-gray-800 mb-0">
								Sky Resort
							</h1>
							<p className="mt-0 md:mt-1 lg:mt-2 leading-6 md:leading-8 text-lg md:text-xl lg:text-2xl">
								Mt.Bogd golf & county club
							</p>
						</div>
						<div className="text-left mt-2">
							<p className="text-left mb-0">
								15:00 цагаас хойш зөвхөн 9 нүхний тоглолтын цаг захиална уу !
							</p>
							<span className="text-left">
								Дэлгэрэнгүй мэдээллийг 77000909 утаснаас лавлана уу
							</span>
						</div>
					</div>
					<div className="mt-2 md:mt-2 xl:mt-2 flex flex-col xl:flex-row justify-start items-start  w-full xl:space-x-52  ">
						<div className="w-full  flex flex-col justify-start items-start ">
							<div className="w-full flex justify-start items-start flex-col space-y-8">
								<div className="w-full flex justify-start items-start flex-col">
									{/* tab 1 */}
									<div className="border border-gray-200 w-full p-6  bg-white my-2 rounded ">
										<div>
											<div
												className="flex items-center  gap-3 cursor-pointer"
												// onClick={() => handleShow(1)}
												onClick={(e: any) => {
													handleShow(e, 1);
												}}
											>
												<p className="w-7 h-7  rounded-full text-base text-white bg-gray-700 text-center flex items-center	justify-center m-0  ">
													1
												</p>
												<span className=" p-0 m-0 text-lg lg:text-xl leading-7 lg:leading-5 text-gray-800">
													Choose Appointment
												</span>
											</div>
											<div className={`${tab1 ? "w-full mt-4" : "mt-2"}`}>
												<div>
													{todos.length > 0 && (
														<div className="bg-gray-100 p-6">
															<p className="m-0">{plane}</p>
															<div className="">
																{todos.map((order: any, index: any) => {
																	return (
																		<div
																			key={index}
																			className="flex justify-between items-center md:w-1/2  sm:w-full hover:bg-slate-50 px-2"
																		>
																			{order?.monthday +
																				" , 2022  at " +
																				order?.time}
																			<div>
																				<i
																					className="fa-solid fa-trash-can p-2 hover:text-red-500 cursor-pointer"
																					onClick={(e: any) => {
																						onClickOrderRemove(e, order);
																					}}
																				></i>
																			</div>
																		</div>
																	);
																})}
															</div>
															<span
																className="py-1 px-4 bg-gray-600 text-white rounded mt-4 hover:bg-gray-900"
																// onClick={() => handleShow(222)}
																onClick={(e: any) => {
																	handleShow(e, 222);
																}}
															>
																Continue »
															</span>
														</div>
													)}
												</div>
												<div className={`${tab1 ? "" : "hidden"}`}>
													{readyDatasrc.map((item: any, index: any) => {
														return (
															<>
																<div
																	key={index}
																	className={`border p-3  my-1   cursor-pointer w-full hover:bg-gray-50 flex justify-between ${[
																		hide,
																	]}
																	 ${isCheck[index] ? `bg-gray-300 ` : `bg-white   `}  `}
																	onClick={(e: any) => {
																		onClickData(e, item, index);
																	}}
																>
																	<div>
																		<p className="m-0">{item?.name}</p>
																		<span>{item?.description}</span>
																	</div>
																	{[index] && (
																		<div className="">
																			<i className="fa-solid fa-angle-up"></i>
																		</div>
																	)}
																</div>
																{isCheck[index] &&
																	kmdtl.length > 0 &&
																	timelist(item)}
															</>
														);
													})}
												</div>
											</div>
										</div>
									</div>
									{/* tab 2 */}
									<div
										className={`border rounded border-gray-200 w-full p-6 flex justify-start items-start space-x-4 bg-white my-2 cursor-pointer `}
										// onClick={() => handleShow(222)}
									>
										<div>
											<div className="flex items-center  gap-3">
												<p className="w-7 h-7  rounded-full text-base text-white bg-gray-700 text-center flex items-center	justify-center m-0  ">
													2
												</p>
												<span className=" p-0 m-0 text-lg lg:text-xl leading-7 lg:leading-5 text-gray-800">
													Your Information
												</span>
											</div>
											<div
												className={`${
													tab2 ? "" : "hidden"
												}  mt-4 text-base leading-normal text-gray-600`}
											>
												{reqForm()}
											</div>
										</div>
									</div>
									{/* tab 3 */}
									<div
										className="border rounded border-gray-200 w-full px-6 py-10 flex justify-start items-start space-x-4 bg-white my-2 cursor-pointer"
										// onClick={() => handleShow(3)}
									>
										<div className="w-full">
											<div className="flex items-center  gap-3">
												<p className="w-7 h-7  rounded-full text-base text-white bg-gray-700 text-center flex items-center	justify-center m-0  ">
													3
												</p>
												<span className=" p-0 m-0 text-lg lg:text-xl leading-7 lg:leading-5 text-gray-800">
													Confirmation
												</span>
											</div>
											<div
												className={`${
													tab3 ? "" : "hidden"
												} mt-4 text-base leading-normal w-full`}
											>
												{" "}
												<h1>{responseData && responseData[0]?.path1}</h1>
												<div className="bg-[#dff0d8]  rounded gap-2 text-black p-6 w-full">
													{responseData &&
														responseData.map((item: any, index: any) => {
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
												<p className="my-2">
													{responseData && responseData[0]?.path4}
												</p>
												<div className="flex gap-4">
													{/* <p
														className="px-6 py-2 inline-block bg-gray-700 text-white rounded-lg my-4 hover:opacity-75"
														onClick={(e: any) => orderCancel(e)}
													>
														Сancel
													</p> */}
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

													{/* <p
														className="px-6 py-2 inline-block bg-gray-700 text-white rounded-lg my-4 hover:opacity-75"
														onClick={(e: any) => orderUpdate(e, responseData)}
													>
														Захиалга засах
													</p> */}
												</div>
												<Modal
													visible={visible}
													width={620}
													// title="Edit form"
													centered
													footer={false}
													onCancel={onClose}
												>
													{content}
												</Modal>
											</div>
										</div>
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

type PropsType = {
	item?: any;
	time?: any;
	onClick?: any;
};

const ScheduleTime: FC<PropsType> = ({ item, time, onClick }) => {
	const [isShown, setIsShown] = useState(false);
	const [todo, setTodo] = useState([]);
	const showContextMenu = (event: any) => {
		event.preventDefault();

		setTodo((todo) => [
			...todo,
			{
				id: time?.id,
				// bookeddate: time?.bookeddate,
				// monthday: time?.monthday,
				// dayName: time?.name,
				// dayBookId: day?.bookid,
				// dayId: day?.id,
				// time: day?.time,
			},
		]);
		setIsShown(false);
	};
	// console.log("todo", todo);
	return (
		<>
			<p
				className={`m-0 py-1 rounded-lg border border-white hover:border cursor-pointer hover:border-gray-300 item-${time?.id} `}
				// onClick={(e: any) => {
				// 	onClickOrderTime(e, time, day);
				// }}
				onClick={() => setIsShown((prev) => !prev)}
			>
				{time?.time}
			</p>
			{isShown && (
				<p
					className="border  bg-gray-800 text-white py-1 px-6 rounded-lg"
					onClick={(e: any) => showContextMenu(e)}
				>
					Add to time
				</p>
			)}
		</>
	);
};
