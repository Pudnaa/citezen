import { useContext } from "react";
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
const ProductDetail1 = () => {
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
      if (isEmpty(datasrc)) return null;
      // console.log("ProductDetail1 config", config);
      // console.log("ProductDetail1 datasrc", datasrc);
      // console.log("ProductDetail1 otherattr", otherattr);
      // console.log("ProductDetail1 positionConfig", positionConfig);
	return (
		<div className="mx-auto container flex items-center justify-center 2xl:px-32 md:px-8 px-4">
			<div className="w-full md:flex justify-center py-6">
				<div className="xl:w-auto w-1/2 md:block hidden">
					<div className="flex xl:flex-row flex-col w-full md:h-1/2 xl:space-x-5">
						<img
							src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/inner1.png"
							className="xl:w-96 w-full lg:h-full h-72 object-cover object-center"
							alt="prodcut-inner"
						/>
						<img
							src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/inner2.png"
							className="xl:w-96 w-full lg:h-full h-72 object-cover object-center xl:pt-0 pt-5"
							alt="prodcut-inner"
						/>
					</div>
					<div className="flex xl:flex-row flex-col w-full md:h-1/2 xl:space-x-5 mt-5">
						<img
							src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/inner3.png"
							className="xl:w-96 w-full lg:h-full h-72 object-cover object-center"
							alt="prodcut-inner"
						/>
						<img
							src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/inner4.png"
							className="xl:pt-0 pt-5 xl:w-96 w-full lg:h-full h-72 object-cover object-center"
							alt="prodcut-inner"
						/>
					</div>
				</div>

				{/* Mobile preview */}

				<div className="md:hidden">
					<img
						src="https://cdn.tuk.dev/assets/templates/e-commerce-kit/inner1.png"
						alt="product-inner"
						className="w-full "
					/>
					<div className="flex items-center justify-between mt-3 space-x-3">
						<img
							src="https://i.ibb.co/YWkLYPF/Rectangle-244.png"
							alt="img-selector"
							className="w-full "
						/>
						<img
							src="https://i.ibb.co/b6PsHdK/Rectangle-245.png"
							alt="img-selector"
							className="w-full "
						/>
						<img
							src="https://i.ibb.co/d6KXqjB/Rectangle-246.png"
							alt="img-selector"
							className="w-full "
						/>
						<img
							src="https://i.ibb.co/qyL8jDL/Rectangle-247.png"
							alt="img-selector"
							className="w-full "
						/>
					</div>
				</div>

				{/* Mobile preview */}

				<div className="xl:w-96 md:w-1/2 xl:ml-8 md:ml-6 md:pt-0 pt-5 pb-4">
					<p className="text-xs leading-3 pb-2 text-gray-800">RF293</p>
					<p className="lg:text-2xl text-xl font-semibold leading-normal text-gray-800">
						Series 3 - Swapable bands
					</p>
					<p className="md:text-lg text-base font-medium leading-none pt-3 text-gray-800 pb-6">
						$20,000
					</p>
					<div className="border-b flex items-center justify-between border-t py-4 border-gray-200">
						<p className="text-base leading-none text-gray-800">Colours</p>
						<div className="flex items-center">
							<div className="w-4 h-4 bg-indigo-500 shadow rounded-full cursor-pointer mr-3"></div>
							<div className="w-4 h-4 bg-gray-400 shadow rounded-full cursor-pointer mr-3"></div>
							<div className="w-4 h-4 bg-gray-800 shadow rounded-full cursor-pointer mr-3"></div>
							<div className="w-4 h-4 bg-white shadow rounded-full cursor-pointer"></div>
						</div>
					</div>
					<p className="text-base leading-5 pt-6 text-gray-600">
						A watch is a portable timepiece intended to be carried or worn by a person. It is
						designed to keep a consistent movement despite the motions caused by the person_s
						activities.{" "}
					</p>
					<div className="mt-8 w-full">
						<button className="text-base leading-none text-white w-full py-5 bg-gray-800 focus:outline-none hover:bg-opacity-90">
							Add to cart
						</button>
						<div className="flex items-center justifiy-between mt-4">
							<button className="text-base w-1/2 leading-none text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white flex items-center justify-center py-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="icon icon-tabler mr-2 icon-tabler-map-pin"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									strokeWidth="1"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<circle cx="12" cy="11" r="3"></circle>
									<path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
								</svg>
								Find in store
							</button>
							<button className="ml-4 text-base w-1/2 leading-none text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white flex items-center justify-center py-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="mr-2 icon icon-tabler icon-tabler-heart"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									strokeWidth="1"
									stroke="currentColor"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
									<path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
								</svg>
								Favourite
							</button>
						</div>
						<p className="lg:text-xl text-lg font-semibold leading-5 text-gray-800 pt-10">
							Product Information
						</p>
						<p className="text-base leading-normal text-gray-600 pt-5 pb-4">
							Product Code: 8BN321AF2IF0NYA
						</p>
						<p className="text-base leading-normal text-gray-600 pb-4">Length: 13.2 inches</p>
						<p className="text-base leading-normal text-gray-600 pb-4">Height: 10 inches</p>
						<p className="text-base leading-normal text-gray-600 pb-4">Depth: 5.1 inches</p>
						<p className="text-base leading-normal text-gray-600 pb-4">
							Composition: 100% calf leather, inside: 100% lamb leather
						</p>
						<p className="lg:text-xl text-lg pt-4 font-semibold leading-5 text-gray-800">
							Contact Support
						</p>
						<div className="mt-2">
							<a
								href="/"
								className=" text-base leading-4 cursor-pointer focus:outline-none focus:underline hover:underline  text-blue-800"
							>
								+92 0394 982734
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail1;
