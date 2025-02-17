import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";

const Checkouts2Weekly1 = () => {
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
	const [show, setshow] = useState(false);
	const [show2, setshow2] = useState(false);

	// console.log("Checkouts2Weekly1 config", config);
	// console.log("Checkouts2Weekly1 readyDatasrc", readyDatasrc);
	// console.log("Checkouts2Weekly1 widgetnemgooReady", widgetnemgooReady);
	// console.log("Checkouts2Weekly1 positionConfig", positionConfig);
	const item = readyDatasrc[0];
	return (
		<div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
			<div className="flex flex-col justify-start items-start space-y-9">
				<div className="flex p-2 bg-white w-full  flex-col justify-start items-start ">
					<div className="flex gap-3">
						<p className="text-lg bg-cozy text-white rounded-full h-7 w-7 flex items-center justify-center ">
							2
						</p>
						<RenderAtom
							item={item?.position1}
							defaultAtom="title"
							customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
						/>
					</div>
					<div className="w-full  flex flex-col justify-start items-start mt-2 space-y-6 md:space-y-9">
						<div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-3">
							{readyDatasrc &&
								readyDatasrc.map((item: any, index: number) => {
									return (
										<div className="flex flex-col justify-start items-start w-full">
											<RenderAtom
												item={item?.position2}
												defaultAtom="text"
												customClassName="text-base leading-4 text-gray-600 tracking-tighter "
											/>
											<div className="flex items-start mt-4 relative">
												<button className="bg-white text-gray-700 flex items-center justify-center border border-gray-400 rounded text-xs focus:outline-none">
													<span className="p-3 ml-3">-Сонгох-</span>
													<span
														className="py-3 rounded-r px-2"
														onClick={() => setshow2(!show2)}
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															width={50}
															height={16}
															viewBox="0 0 24 24"
															strokeWidth="1.5"
															stroke="currentColor"
															fill="none"
															strokeLinecap="round"
															strokeLinejoin="round"
														>
															<path stroke="none" d="M0 0h24v24H0z" />
															<polyline points="6 9 12 15 18 9" />
														</svg>
													</span>
												</button>
												{show2 && (
													<ul className="bg-white shadow rounded mt-10 py-1 absolute right-0 left-0 top-0  dropdown-content">
														<li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
															-Сонгох-
														</li>
														<li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
															Баянгол
														</li>
														<li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
															Баянзүрх
														</li>
														<li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">
															Хан-Уул
														</li>
													</ul>
												)}
											</div>
										</div>
									);
								})}
							<div className="flex flex-col justify-start items-start w-full">
								<div className="text-base leading-4 text-gray-600 tracking-tighter">
									<p>Дэлгэрэнгүй хаяг</p>
								</div>
								<textarea className="mt-2 bg-white border rounded border-gray-400 w-full p-1 placeholder-gray-600 text-base leading-4 text-gray-600"></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>
				{`
				.checkbox:checked + .check-icon {
					display: flex;
				}`}
			</style>
		</div>
	);
};

export default Checkouts2Weekly1;
