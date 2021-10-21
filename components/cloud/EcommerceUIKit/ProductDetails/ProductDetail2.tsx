import { useContext,useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
const ProductDetail2 = () => {
    const {
        config,
        datasrc,
        otherattr,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        Title,
      } = useContext(WidgetWrapperContext);
	const [show, setShow] = useState(false);
	const [slide, setSlide] = useState(true);

    if (isEmpty(datasrc)) return null;
    // console.log("ProductDetail2 config", config);
    // console.log("ProductDetail2 datasrc", datasrc);
    // console.log("ProductDetail2 otherattr", otherattr);
    // console.log("ProductDetail2 positionConfig", positionConfig);

	const dropDown = () => setShow(!show);

	const slideToggle = () => setSlide(!slide);

	return (
		<div className="2xl:container 2xl:mx-auto  flex justify-center items-center">
			<div
				id="menu"
				className="w-96 px-4 md:px-8 xl:px-20 py-12 md:w-full lg:w-10/12 2xl:w-9/12 h-full flex justify-center "
			>
				<div className=" relative flex justify-start w-full items-start flex-col md:flex-row  md:space-x-8  bg-white">
					<div className="w-full">
						<div className="relative">
							<div className="slider">
								<div className="slide-ana h-96 xl:h-auto flex flex-shrink-0">
									<div
										className={
											"flex flex-shrink-0 transform " +
											(slide ? "translate-x-0" : "-translate-x-full")
										}
									>
										<img
											className=" lg:block hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoes"
										/>
										<img
											className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoe"
										/>
										<img
											className=" block md:hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoe"
										/>
									</div>
									<div
										className={
											"flex flex-shrink-0 transform " +
											(slide ? "translate-x-full" : "translate-x-0")
										}
									>
										<img
											className=" lg:block hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoe"
										/>
										<img
											className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoe"
										/>
										<img
											className=" block md:hidden w-full h-full object-center object-cover"
											src="https://i.ibb.co/mHtLKg3/Rectangle-5.png"
											alt="shoe"
										/>
									</div>
								</div>
							</div>
							<div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
								<button
									onClick={slideToggle}
									aria-label="previous"
									className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
								>
									<svg
										className=""
										width="52"
										height="52"
										viewBox="0 0 52 52"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="26" cy="26" r="26" fill="white" />
										<path
											d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
											stroke="#4B5563"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
								<button
									onClick={slideToggle}
									aria-label="Next"
									className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
								>
									<svg
										className=""
										width="52"
										height="52"
										viewBox="0 0 52 52"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="26" cy="26" r="26" fill="white" />
										<path
											d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
											stroke="#4B5563"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div className="mt-6 md:mt-0 flex justify-start items-start w-full flex-col ">
						<div className="flex flex-col justify-start items-start space-y-1">
							<p className="text-sm leading-none text-gray-600">LXD Sneakers</p>
							<p className="text-2xl font-semibold leading-normal text-gray-800">
								Ribbed Sneakers
							</p>
						</div>
						<div className=" flex justify-start items-center mt-4 w-full">
							<div className="py-4 cursor-pointer flex justify-between items-center w-full border-t border-b border-gray-200">
								<p className="text-base leading-none text-gray-800">Colours</p>
								<div className="flex justify-end items-center w-full space-x-3">
									<p className="text-sm leading-none text-gray-600">
										Smoke Blue with red accents
									</p>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<rect width="24" height="24" fill="url(#paint0_linear)" />
										<defs>
											<linearGradient
												id="paint0_linear"
												x1="12"
												y1="0"
												x2="12"
												y2="24"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#02153F" />
												<stop offset="1" stopColor="#6189C6" />
											</linearGradient>
										</defs>
									</svg>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 4L10 8L6 12"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className=" flex justify-start items-center  w-full">
							<div className="py-4 cursor-pointer flex justify-between items-center w-full  border-b border-gray-200">
								<p className="text-base leading-none text-gray-800">Size</p>
								<div className="flex justify-end items-center w-full space-x-3">
									<p className="text-sm leading-none text-gray-600">38.0</p>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M6 4L10 8L6 12"
											stroke="#4B5563"
											strokeWidth="1.25"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</div>
							</div>
						</div>
						<div className="mt-4 flex justify-start items-center w-full flex-col space-y-3.5">
							<button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  py-5 w-full text-base leading-4 border border-gray-800 text-white bg-gray-800 hover:bg-black">
								Add to cart
							</button>
							<button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  py-5 w-full flex justify-center items-center space-x-1 hover:bg-gray-300 border border-gray-800 text-base leading-4  text-gray-800 ">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42399C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42399C13.3679 3.5492 14 5.07533 14 6.66663Z"
										stroke="#1F2937"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z"
										stroke="#1F2937"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<p>Find in store </p>
							</button>
						</div>
						<div className="mt-8 flex justify-start items-start flex-col w-full">
							<button
								onClick={dropDown}
								className="flex justify-between w-full items-start "
							>
								<h3 className="text-lg font-medium leading-4 text-gray-800">
									Product information
								</h3>
								<svg
									id="icon"
									className={"xl:hidden transform " + (show ? "rotate-180" : "rotate-0")}
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M12 6L8 10L4 6"
										stroke="#4B5563"
										strokeWidth="1.25"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</button>
							<div
								id="dropdown"
								className={
									"xl:block mt-6 space-y-4 flex-col justify-start item-start text-base text-gray-600 " +
									(show ? "flex" : "hidden")
								}
							>
								<p className=" text-base leading-4 text-gray-600">
									Product Code: 8BN321AF2IF0NYA
								</p>
								<p className=" text-base leading-4 text-gray-600">Length: 13.2 inches</p>
								<p className=" text-base leading-4 text-gray-600">Height: 10 inches</p>
								<p className=" text-base leading-4 text-gray-600">Depth: 5.1 inches</p>
								<p className=" text-base leading-6 lg:leading-4 text-gray-600">
									Composition: 100% calf leather, inside: 100% lamb leather
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>
				{`
                .slider {
                    width: 100%;
                    position: relative;
                    overflow: hidden;
                }

                @media (min-width: 1280px) {  
                    .slide-ana {
                    height: 539px;
                } }
                

                .slide-ana > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    transition: all 1s;
                }`}
			</style>
		</div>
	);
};

export default ProductDetail2;
