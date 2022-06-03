import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";

const PhoneNumberList = () => {
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
	return (
		<div className="py-8 xs:w-full md:w-2/3 lg:w-2/3 mx-auto">
			{readyDatasrc.map((item: any, index: number) => {
				return (
					<a href={`tel:${item.phone1}`}>
						<div className="w-full py-2 px-4 h-full rounded-lg shadow-lg hover:bg-opacity-75 flex justify-items-center my-3 ">
							<div className=" flex justify-center align-middle">
								<img
									src="https://cdn.tuk.dev/assets/templates/classified/search.png"
									className="h-14 w-14 rounded-full "
								/>
							</div>
							<div className="px-4  w-full h-full  flex justify-items-center items-center ">
								<div className="flex flex-col  justify-items-center lg:mt-1.5 xs:m-0">
									<div className="flex items-center lg:justify-left justify-between lg:mt-0 mt-1">
										<h2 className="text-lg font-semibold m-0">{item.name}</h2>
									</div>
									<span className="text-xs text-gray-600 ">
										{item.description}
									</span>
								</div>
							</div>
							<div className="flex items-center justify-between gap-5  w-1/3">
								<span className="text-indigo-700 text-sm font-semibold">
									{item.phone1}
								</span>
								{/* <a href="tel:">
									{" "}
									<h3 className="text-indigo-700 text-sm font-semibold m-0">
										Залгах
									</h3>
								</a> */}
							</div>
						</div>
					</a>
				);
			})}
		</div>
	);
};

export default PhoneNumberList;
