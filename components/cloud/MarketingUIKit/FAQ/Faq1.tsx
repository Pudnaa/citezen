import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import _ from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import BlockDiv from "@components/common/Block/BlockDiv";
import { AtomLinkV2 } from "@components/common/Atom";
function Faq1() {
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
	const [show, setShow] = useState(false);

	// console.log("Faq1 config", config);
	// console.log("Faq1 readyDatasrc", readyDatasrc);
	// console.log("Faq1 widgetnemgooReady", widgetnemgooReady);
	// console.log("Faq1 positionConfig", positionConfig);

	const groupByDatas = _.groupBy(readyDatasrc, "categoryname");
	// console.log("Faq1 selectdata", groupByData);
	const groupByData = _.chain(readyDatasrc)
		.groupBy("categoryname")
		.map((value, key) => ({ name: key, rows: value, icon: value[0]?.icon }))
		.value();
	// const mainData = _.values(groupByData);

	// console.log("Faq1 selectdata", groupByData);

	return (
		<>
			<BlockDiv
				customClassName="w-full pb-6 lg:px-2 bg-gray-100 "
				divNumber="divWrapper"
			>
				<BlockDiv customClassName="container mx-auto" divNumber="divContainer">
					<BlockDiv customClassName="py-12 md:px-8" divNumber="divArticle">
						<BlockDiv
							customClassName="px-4 xl:px-0 py-10"
							divNumber="divSetcionTitle"
						>
							<div className="flex flex-col lg:flex-row flex-wrap">
								<div className="mt-4 lg:mt-0 lg:w-3/5">
									<div>
										<RenderAtom
											item={{ value: "Түгээмэл асуултууд" }}
											defaultAtom="title"
											customClassName=" text-citizen-title text-3xl ml-2 lg:ml-0 lg:text-4xl font-bold text-gray-900 tracking-normal lg:w-11/12 "
											customStyle={{ lineHeight: "40px" }}
											customProps={{
												truncateRow: 3,
											}}
										/>
									</div>
								</div>
								<div className="lg:w-2/5 flex mt-10 ml-2 lg:ml-0 lg:mt-0 lg:justify-end">
									<div className="pt-2 relative  text-gray-600">
										<input
											className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
											type="search"
											name="search"
											placeholder="Search"
										/>
										<button
											type="submit"
											className="focus:ring-2 focus:ring-offset-2 text-gray-600 focus:text-indigo-700 focus:rounded-full  focus:bg-gray-100 focus:ring-indigo-700 bg-white focus:outline-none absolute right-0 top-0 mt-5 mr-4"
										>
											<svg
												className=" h-4 w-4 fill-current"
												xmlns="http://www.w3.org/2000/svg"
												xmlnsXlink="http://www.w3.org/1999/xlink"
												version="1.1"
												id="Capa_1"
												x="0px"
												y="0px"
												viewBox="0 0 56.966 56.966"
												width="512px"
												height="512px"
											>
												<path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
											</svg>
										</button>
									</div>
								</div>
							</div>
						</BlockDiv>

						<BlockDiv customClassName="px-6 xl:px-0" divNumber="divFaqContent">
							<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pb-6 gap-8">
								{groupByData.map((item: any, index: any) => {
									// console.log("maindata ", item);
									return (
										<div role="cell" className="bg-gray-100" key={index}>
											<div className="bg-white p-5 rounded-md relative h-full w-full">
												<span className="bg-gray-200 p-2 mb-5 rounded-full w-10 h-10 flex items-start justify-center">
													<i className={` fa ${item.icon}`}> </i>
													{/* <img
														className="bg-gray-200 p-2 mb-5 rounded-full"
														src="https://i.ibb.co/27R6nk5/home-1.png"
														alt="home-1"
													/> */}
												</span>

												<RenderAtom
													item={{ value: item.name }}
													defaultAtom="text"
													customClassName="pb-4 text-2xl font-semibold "
													// customStyle={{ color: "#009BDE " }}
													customProps={{
														truncateRow: 3,
													}}
												/>
												<div className="my-4">
													{item.rows
														.slice(0, 5)
														.map((rowItem: any, index: any) => {
															return (
																<div
																	className="flex items-start pb-2 dark:border-gray-700 cursor-pointer w-full space-x-3 hover::text-gray-300"
																	key={index}
																>
																	<svg
																		xmlns="http://www.w3.org/2000/svg"
																		width="12.5"
																		height={16}
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																		className="pt-1"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M9 5l7 7-7 7"
																		/>
																	</svg>
																	{/* <h4 className="text-md mb-0 text-gray-900 dark:text-gray-100 hover:text-gray-400">
																		{rowItem.name}
																	</h4> */}
																	<RenderAtom
																		item={rowItem.position1}
																		defaultAtom="text"
																		customClassName="text-md mb-0 text-gray-900 dark:text-gray-100 hover:text-gray-400 "
																		// customStyle={{ color: "#009BDE " }}
																		customProps={{
																			truncateRow: 3,
																		}}
																	/>
																</div>
															);
														})}
												</div>

												<span className="hover:text-indigo-500 hover:underline absolute bottom-3 text-sm text-indigo-700 font-bold cursor-pointer flex items-center">
													<AtomLinkV2
														item={{ path: "/faq" }}
														color="blue-400"
														children={
															<span className="cursor-pointer">
																Бүгдийг харах
															</span>
														}
													/>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="icon icon-tabler icon-tabler-arrow-narrow-right "
														width={16}
														height={16}
														viewBox="0 0 24 24"
														strokeWidth="1.5"
														stroke="#4338CA"
														fill="none"
														strokeLinecap="round"
														strokeLinejoin="round"
													>
														<path stroke="none" d="M0 0h24v24H0z" fill="none" />
														<line x1={5} y1={12} x2={19} y2={12} />
														<line x1={15} y1={16} x2={19} y2={12} />
														<line x1={15} y1={8} x2={19} y2={12} />
													</svg>
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</BlockDiv>
					</BlockDiv>
				</BlockDiv>
			</BlockDiv>
		</>
	);
}

export default Faq1;
{
	/* <div role="cell" className="bg-gray-100">
<div className="bg-white p-5 rounded-md relative h-full w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/27R6nk5/home-1.png"
      alt="home-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Account Overview
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.5"
        height={16}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
      <h4 className="text-md text-gray-900 dark:text-gray-100">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full space-x-3">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy if I have to cancel during
        the month
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div>
<div role="cell" className="bg-gray-100">
<div className="bg-white p-5 rounded-md relative h-full w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/bdGyLYk/pricetags-1.png"
      alt="pricetags-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Subscription Plans
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy if I have to cancel during
        the month
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy?
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div>
<div role="cell" className="bg-gray-100">
<div className="bg-white p-5 rounded-md relative h-full w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/GT4KHvJ/card-1.png"
      alt="home-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Payment Options
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy if I have to cancel during
        the month
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div>
<div role="cell" className="bg-gray-100">
<div className="bg-white p-5 rounded-md  h-full relative w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/rG4r6NJ/notifications-1.png"
      alt="home-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Notification Settings
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy if I have to cancel during
        the month
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div>
<div role="cell" className="bg-gray-100">
<div className="relative bg-white p-5 rounded-md  h-full w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/HFC1hqn/people-1.png"
      alt="home-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Profile Preferences
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div>
<div role="cell" className="bg-gray-100">
<div className="relative bg-white p-5 rounded-md  h-full  w-full">
  <span>
    <img
      className="bg-gray-200 p-2 mb-5 rounded-full"
      src="https://i.ibb.co/QX80fYm/lock-closed-1.png"
      alt="home-1"
    />
  </span>
  <h1 className="pb-4 text-2xl font-semibold">
    Privacy and Cookies
  </h1>
  <div className="my-5">
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        First time, what do I do next?
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        Changing you profile picture and other information
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        I didnt get a confirmation email, what should I do
        next
      </h4>
    </div>
    <div className="flex items-center pb-4 dark:border-gray-700 cursor-pointer w-full">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.5"
          height={16}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <h4 className="text-md text-gray-900 dark:text-gray-100 pl-4">
        What is the refund policy if I have to cancel during
        the month
      </h4>
    </div>
  </div>
  <a
    className="hover:text-indigo-500 hover:underline absolute bottom-5 text-sm text-indigo-700 font-bold cursor-pointer flex items-center"
    href="#"
  >
    <p>Show All</p>
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-right"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#4338CA"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={5} y1={12} x2={19} y2={12} />
        <line x1={15} y1={16} x2={19} y2={12} />
        <line x1={15} y1={8} x2={19} y2={12} />
      </svg>
    </div>
  </a>
</div>
</div> */
}
