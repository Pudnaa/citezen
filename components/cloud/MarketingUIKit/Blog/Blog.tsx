import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import RenderMolecule from "@molecule/RenderMolecule";
import Head from "next/head";
import _ from "lodash";
import { CartItem } from "@components/cloud/Custom/Card";
export default function Blog() {
	const { readyDatasrc, widgetnemgooReady } = useContext(WidgetWrapperContext);
	const { settings } = widgetnemgooReady || "";
	const fiter = settings?.filter || "";
	const filterStr = ["Эрэлттэй", "Шинэ"];
	const [filterItem, setFilterItem] = useState(fiter?.filterStr[0] || "");
	const [active, setActive] = useState(0);

	const selectdata = _.filter(readyDatasrc, {
		filtertype: filterItem,
	});

	const onFilterEvent = (e: any, item: any) => {
		e.preventDefault();
		setFilterItem(item);
	};
	return (
		<div>
			<div className=" w-full">
				<BlockDiv customClassName="w-full pb-6 lg:px-2" divNumber="divFilter">
					<BlockDiv customClassName="w-full " divNumber="divSetctionTitle">
						<RenderAtom
							item={{ value: settings?.setctionTitle }}
							defaultAtom="title"
							customClassName=" text-citizen-title "
							customStyle={{ lineHeight: "40px" }}
							customProps={{
								truncateRow: 3,
							}}
						/>
					</BlockDiv>
					<div className="flex item-center">
						<ul className="flex gap-6 items-center  ">
							{filterStr.map((item: any, index: any) => {
								return (
									<li
										key={item?.id || index}
										className={`list-item cursor-pointer hover:border-b-2 hover:border-blue-400 border-gray-100 text-base font-bold py-2 border-b-2 ${
											active === index
												? "border-blue-400"
												: "hover:text-blue-400"
										}`}
										onClick={(e: any) => onFilterEvent(e, item)}
									>
										<span onClick={() => setActive(index)}> {item}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</BlockDiv>

				<div className="container mx-auto ">
					<div className="lg:flex md:flex sm:flex xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around gap">
						{selectdata
							.slice(0, settings?.displayView || 3)
							.map((item: any, index: any) => {
								return (
									<div
										className={`xl:mb-0 mb-8  lg:w-1/${
											settings?.displayView || 3
										} xl:w-1/${
											settings?.displayView || 3
										} w-11/12 mx-auto xl:mx-0 sm:w-2/5 md:w-1/4 sm:mx-auto  lg:px-2 lg:py-2 transition-all`}
									>
										<div className="h-48 bg-cover rounded-lg">
											<img
												src={item?.mainimage}
												className="h-full w-full object-cover overflow-hidden rounded "
											/>
										</div>
										<div className="px-4 pt-5 bg-white border-b-lg border-gray-300 shadow-xl rounded-b-lg h-28">
											<RenderAtom
												item={item.position41}
												defaultAtom="text"
												customClassName="text-sm "
												customStyle={{ color: "#009BDE " }}
												customProps={{
													truncateRow: 3,
												}}
											/>
											<RenderAtom
												item={item.position1}
												defaultAtom="text"
												customClassName="text-citizen-title py-4 text-lg hover:text-blue-400"
												// customStyle={{ lineHeight: "40px" }}
												customProps={{
													truncateRow: 2,
												}}
											/>
											{/* <p className="text-sm text-gray-600 text-center">
								{item.createddate}
								<a href="javascript:void(0)">
									<span className="text-indigo-700 cursor-pointer">
										{item.author}
									</span>
								</a>
							</p> */}
										</div>
									</div>
								);
							})}
					</div>
				</div>
				{/* <div
					role="article"
					className="focus:outline-none xl:container xl:mx-auto py-8 px-4"
				>
					<div className="pt-14 xl:px-0 px-4">
						<div className="w-full xl:flex">
							<div className="xl:w-3/5 w-full">
								<div className="relative md:flex items-start mb-8 bg-white rounded-md shadow-md md:p-0 p-4">
									<img
										role="img"
										aria-label="bag on a table"
										src="https://i.ibb.co/PxMNGGv/Rectangle-38.png"
										alt="Rectangle-38"
										className="focus:outline-none md:w-64 md:h-64 sm:w-auto w-full h-full"
									/>
									<div className="md:ml-6 mr-6">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="focus:outline-none f-m-m lg:text-3xl text-2xl font-semibold leading-14 mt-6 ">
												Figma Config 2021: What you need to know
											</h3>
										</a>
										<p className="focus:outline-none text-sm f-m-m text-gray-700 my-5">
											Vitae nulla nunc euismod vel nunc euismod velpretium
											tellus accumsan nulla nunc euismod ve semper turpis erat
											tempus, viverra aliquet.
										</p>
										<div className="xl:mt-2 lg:mt-16 mt-0">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/hHC3GKF/Ellipse-1-1.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Emilie Ngyuen
															</h3>
														</a>
														<h4 className="f-f-r text-xs text-gray-600">
															Principal @ Figma
														</h4>
													</div>
												</div>
												<div className="flex space-x-1 items-center justify-end  text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<p className="md:text-sm text-xs leading-3 text-gray-500">
														6 min read
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative md:flex p-6 items-start mb-8 bg-white justify-right  gap-x-2 shadow-md rounded-md">
									<img
										role="img"
										aria-label="bag on a table"
										alt="bag on table"
										src="https://i.ibb.co/f4mS86s/Rectangle.png"
										className=" focus:outline-none lg:w-32 md:w-48 shrink-0 sm:w-auto w-full"
									/>
									<div className="md:pl-6 w-full">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="md:w-80 focus:outline-none f-m-m md:text-2xl text-lg md:pt-0 pt-6 font-semibold md:leading-9 ">
												The world of minecraft just got way better
											</h3>
										</a>

										<div className=" mt-5">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/fdBG4hH/Ellipse-1-2.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Don Norman
															</h3>
														</a>
														<h4 className="f-f-r text-xs text-gray-600">
															Gaming Wiz @ Twitch
														</h4>
													</div>
												</div>
												<div className="flex space-x-1 items-center justify-end  text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<p className="md:text-sm text-xs leading-3 text-gray-500">
														6 min read
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative z-20 md:flex p-6 items-start mb-8 bg-white justify-right gap-x-2 shadow-md ">
									<img
										role="img"
										aria-label="bag on a table"
										alt="bag on table"
										src="https://i.ibb.co/F8qv7B8/Rectangle-1.png"
										className=" focus:outline-none lg:w-32 md:w-48 shrink-0 sm:w-auto w-full"
									/>
									<div className="md:pl-6 w-full">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="md:w-80 focus:outline-none f-m-m md:text-2xl text-lg md:pt-0 pt-6 font-semibold md:leading-9 ">
												Radio buttons, checkboxes and switches. A guide.
											</h3>
										</a>

										<div className="lg:mt-5 mt-10">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/tcnkzJF/Ellipse-1-3.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Carolyn Smith
															</h3>
														</a>
														<h4 className="f-f-r text-xs text-gray-600">
															UI Designer @ NoCode
														</h4>
													</div>
												</div>
												<div className="flex space-x-1 items-center justify-end  text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<p className="md:text-sm text-xs leading-3 text-gray-500">
														6 min read
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="xl:w-1/2 w-full xl:ml-8">
								<div className="relative md:flex p-6 items-start mb-8 bg-white  gap-x-2 shadow-md rounded-md">
									<img
										role="img"
										aria-label="bag on a table"
										alt="bag on table"
										src="https://i.ibb.co/DtNc2Zb/Rectangle-2.png"
										className=" focus:outline-none lg:w-32 md:w-48 shrink-0 sm:w-auto w-full"
									/>
									<div className="md:pl-6 w-full">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">
												Designing for usability &amp; inclusivity
											</h3>
										</a>
										<div className="lg:mt-5 mt-8">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/prFjHj7/Ellipse-1.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Gayle Chavez
															</h3>
														</a>
														<h4 className="f-f-r text-xs text-gray-600">
															UX Specialist @ NNG
														</h4>
													</div>
												</div>
												<div className="flex space-x-1 items-center justify-end  text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<p className="md:text-sm text-xs leading-3 text-gray-500">
														6 min read
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative md:flex p-6 items-start mb-8 bg-white  gap-x-2 shadow-md rounded-md">
									<img
										role="img"
										aria-label="bag on a table"
										alt="bag on table"
										src="https://i.ibb.co/ww06zZR/Rectangle-3.png"
										className=" focus:outline-none lg:w-32 md:w-48 shrink-0 sm:w-auto w-full"
									/>
									<div className="md:pl-6 w-full">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">
												XD is getting an update, and we’re excited
											</h3>
										</a>
										<div className="lg:mt-5 mt-10">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/gJRTZLK/Ellipse-1-4.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Dortha Ray
															</h3>
														</a>
														<h4 className="f-f-r text-xs text-gray-600">
															Design Lead @ Adobe
														</h4>
													</div>
												</div>
												<div className="flex space-x-1 items-center justify-end  text-gray-500">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="h-4 w-4"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															stroke-width="2"
															d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
														></path>
													</svg>
													<p className="md:text-sm text-xs leading-3 text-gray-500">
														6 min read
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="relative z-20 md:flex p-6 items-start mb-8 bg-white i gap-x-2 shadow-md rounded-md">
									<img
										role="img"
										aria-label="bag on a table"
										alt="bag on table"
										src="https://i.ibb.co/YLgB4Q2/Rectangle-4.png"
										className=" focus:outline-none lg:w-32 md:w-48 shrink-0 sm:w-auto w-full"
									/>
									<div className="md:pl-6 w-full">
										<a
											href="javascript:void(0)"
											className="focus:outline-none focus:text-gray-600 focus:underline hover:text-gray-600 hover:underline"
										>
											{" "}
											<h3 className="focus:outline-none f-m-m md:text-3xl text-lg lg:pt-0 pt-6 font-semibold md:leading-9 ">
												Engineering for scalibility: The future
											</h3>
										</a>
										<div className="lg:mt-5 mt-10">
											<div className="flex items-end justify-between">
												<div className="flex items-center">
													<div className="flex items-center justify-center rounded-full md:w-10 md:h-10 w-10 h-10">
														<img
															src="https://i.ibb.co/fkxLFDk/Ellipse-1-5.png"
															alt="Ellipse-1"
															role="img"
														/>
													</div>
													<div className="pl-2">
														<a
															href="javascript:void(0)"
															className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
														>
															<h3 className="f-f-l text-xs md:text-base">
																Amie White
															</h3>
															<h4 className="f-f-r text-xs text-gray-600">
																Engineer @ Devsio
															</h4>
														</a>
													</div>
												</div>
												<a
													href="javascript:void(0)"
													className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
												>
													<div className="flex space-x-1 items-center justify-end  text-gray-500">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																stroke-width="2"
																d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
															></path>
														</svg>
														<p className="md:text-sm text-xs leading-3 text-gray-500">
															6 min read
														</p>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
								<a
									href="javascript:void(0)"
									className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
								>
									<div className="mt-14 flex items-right justify-end">
										<button className="flex items-center justify-center mt-7 md:text-sm  text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none xl:leading-4 hover:underline hover:text-indigo-800">
											See More
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-4 w-4"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M9 5l7 7-7 7"
												></path>
											</svg>
										</button>
									</div>
								</a>
							</div>
						</div>
						<a
							href="javascript:void(0)"
							className="focus:outline-none focus:text-indigo-600 hover:text-indigo-600"
						>
							<div className="absolute bottom-0">
								<img src="https://i.ibb.co/kyPsDKc/Group-2.png" alt="Group-2" />
							</div>
						</a>
					</div>
				</div> */}
			</div>
		</div>
	);
}
