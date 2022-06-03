import { useContext, useEffect, useRef, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import { Swiper, SwiperSlide } from "swiper/react";
import RenderAtom from "@components/common/Atom/RenderAtom";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const carousel8 = () => {
	const {
		config,
		readyDatasrc,
		positionConfig,
		metaConfig,
		gridJsonConfig,
		pathConfig,
		widgetnemgooReady,
		widgetAllaround,
		Title,
	} = useContext(WidgetWrapperContext);

	const useSwiperRef = () => {
		const [wrapper, setWrapper] = useState(null);
		const ref = useRef(null);

		useEffect(() => {
			setWrapper(ref.current);
		}, []);

		return [wrapper, ref];
	};
	// console.log("carousel8 config", config);
	// console.log("carousel8 readyDatasrc", readyDatasrc);
	// console.log("carousel8 widgetnemgooReady", widgetnemgooReady);
	// console.log("carousel8 positionConfig", positionConfig);
	const [nextEl, nextElRef]: any = useSwiperRef();
	const [prevEl, prevElRef]: any = useSwiperRef();
	return (
		<>
			<div className="container relative py-6 ">
				{/* <div className="flex  h-5justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
					<div className="flex  h-5sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start"> */}
				<Swiper
					slidesPerView={4}
					spaceBetween={20}
					// pagination={{
					// 	clickable: true,
					// }}
					navigation={{
						prevEl,
						nextEl,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
						1280: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}
					modules={[Pagination]}
					className="company_carousel "
				>
					{readyDatasrc?.map((item: any, index1: number) => {
						return (
							<SwiperSlide key={item?.id || index1}>
								<div
									className="max-w-sm shadow-lg  bg-white rounded-lg  my-4  dark:bg-gray-800 cursor-pointer bg-opacity-30"
									// style={{ backgroundColor: item?.bgColor }}
								>
									<img
										src={item?.icon}
										alt={item?.name}
										className=" w-full object-cover object-center "
									/>
								</div>
								{/* <div className="shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer  relative pt-4">
									{/* <div
										className="bg-indigo-700 absolute h-96  w-full bg-opacity-70 pt-12 "
										onMouseEnter={(e) => {
											setStyle({ display: "block" });
										}}
										onMouseLeave={(e) => {
											setStyle({ display: "none" });
										}}
									>
										<h3 className="text-2xl font-semibold leading-6 text-center text-white">
											{item?.subtitle}
										</h3>
										<p className="lg:w-80 lg:px-0 px-4 text-base leading-6 text-center text-white mt-6">
											{item?.contact}
										</p>
									</div> */}
								{/* <img
										src={item?.mainimage}
										alt={item?.title}
										className="h-96 w-full object-cover object-top "
									/>
									<div className="flex flex-col jusitfy-center items-center space-y-2 absolute bottom-0 bg-white bg-opacity-60 h-20 w-full pt-4 hover:bg-opacity-0">
										<RenderAtom
											item={{ value: item?.title }}
											defaultAtom="title"
											customClassName="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800"
										/>
										<RenderAtom
											item={{ value: item?.subtitle }}
											defaultAtom="text"
											customClassName="text-base xl:text-base font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800"
										/>
									</div>
								</div> */}
							</SwiperSlide>
						);
					})}
				</Swiper>

				{/* </div>
				</div> */}
			</div>
		</>
	);
};
export default carousel8;
