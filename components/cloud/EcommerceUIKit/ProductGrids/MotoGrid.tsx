import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
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
  AtomImage,
} from "@components/common/Atom";

export default function Index() {
  return (
    <div className="overflow-y-hidden">
      <div className="2xl:container 2xl:mx-auto py-12 flex justify-center items-center lg:px-20 md:px-6 px-4">
        <CarouselProvider
          naturalSlideHeight={380}
          naturalSlideWidth={100}
          totalSlides={4}
        >
          <div className="hidden mt-6 md:flex justify-end items-center space-x-8 w-full">
            <ButtonBack className=" p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4754 16.2879C13.1093 16.654 12.5157 16.654 12.1496 16.2879L6.52459 10.6629C6.15847 10.2968 6.15847 9.7032 6.52459 9.33709L12.1496 3.71209C12.5157 3.34597 13.1093 3.34597 13.4754 3.71209C13.8415 4.0782 13.8415 4.6718 13.4754 5.03791L8.51333 10L13.4754 14.9621C13.8415 15.3282 13.8415 15.9218 13.4754 16.2879Z"
                  fill="#4B5563"
                />
              </svg>
            </ButtonBack>
            <ButtonNext className=" p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.52459 3.71209C6.8907 3.34597 7.4843 3.34597 7.85041 3.71209L13.4754 9.33709C13.8415 9.7032 13.8415 10.2968 13.4754 10.6629L7.85041 16.2879C7.4843 16.654 6.8907 16.654 6.52459 16.2879C6.15847 15.9218 6.15847 15.3282 6.52459 14.9621L11.4867 10L6.52459 5.03791C6.15847 4.6718 6.15847 4.0782 6.52459 3.71209Z"
                  fill="#4B5563"
                />
              </svg>
            </ButtonNext>
          </div>
          <div className="mt-4 swiper mySwiper">
            <Slider className="swiper-wrapper">
              <Slide index={0} className="swiper-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6 ">
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe2"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 t leading-6elg:xt-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe3"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={1} className="swiper-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6 ">
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe2"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 t leading-6elg:xt-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe3"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={2} className="swiper-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6 ">
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe2"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 t leading-6elg:xt-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe3"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                </div>
              </Slide>
              <Slide index={3} className="swiper-slide">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 lg:gap-y-0 lg:grid-cols-3 md:gap-x-4 lg:gap-x-6 ">
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe2"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 t leading-6elg:xt-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                  <div className="flex flex-col jusitfy-start items-start">
                    <div className="w-full ">
                      <img
                        src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                        alt="shoe3"
                      />
                    </div>
                    <div className="mt-6 flex justify-between items-center w-full">
                      <p className="text-lg lg:text-xl font-medium leading-6 lg:leading-5 text-gray-800">
                        Nike Crater Impact
                      </p>
                      <p className="text-lg lg:text-xl leading-6 lg:leading-5 text-gray-800">
                        $80
                      </p>
                    </div>
                    <p className="mt-3 text-sm md:text-lg lg:text-xl  leading-6 lg:leading-5 text-gray-600">
                      Men’s Shoes
                    </p>
                  </div>
                </div>
              </Slide>
            </Slider>
          </div>
          <div className="flex justify-center mt-12  md:hidden items-center space-x-8 w-full">
            <ButtonBack className="swiper-button-prev p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.4754 16.2879C13.1093 16.654 12.5157 16.654 12.1496 16.2879L6.52459 10.6629C6.15847 10.2968 6.15847 9.7032 6.52459 9.33709L12.1496 3.71209C12.5157 3.34597 13.1093 3.34597 13.4754 3.71209C13.8415 4.0782 13.8415 4.6718 13.4754 5.03791L8.51333 10L13.4754 14.9621C13.8415 15.3282 13.8415 15.9218 13.4754 16.2879Z"
                  fill="#D1D5DB"
                />
              </svg>
            </ButtonBack>
            <ButtonNext className="swiper-button-next p-1.5 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.52459 3.71209C6.8907 3.34597 7.4843 3.34597 7.85041 3.71209L13.4754 9.33709C13.8415 9.7032 13.8415 10.2968 13.4754 10.6629L7.85041 16.2879C7.4843 16.654 6.8907 16.654 6.52459 16.2879C6.15847 15.9218 6.15847 15.3282 6.52459 14.9621L11.4867 10L6.52459 5.03791C6.15847 4.6718 6.15847 4.0782 6.52459 3.71209Z"
                  fill="#4B5563"
                />
              </svg>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      <style>
        {`
		
					@media (min-width: 100px) { 
					.swiper {
			width: 330px;
	height: 500px;
}
}

@media (min-width: 768px) { 
	.swiper {
			width: 720px;
	height: 500px;
}
}



@media (min-width: 1024px) { 
	.swiper {
			width: 1370px;
	height: 500px;
}
}



	.swiper-button-next::after, .swiper-button-prev::after {
			content: "";
}
	.swiper-button-next,
	.swiper-button-prev {
			position: relative;
	right:10px;
	height: 30px;
	width: 30px;
}

	.swiper-slide {
			text - align: center;
	font-size: 18px;

	/* Center slide text vertically */
	display: -webkit-box;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	-webkit-justify-content: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	-webkit-align-items: center;
	align-items: center;
}

	.swiper-slide img {
			display: block;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
`}
      </style>
    </div>
  );
}

/*
export default function MotoGrid() {
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
  // console.log("MotoGrid config", config);
  // console.log("MotoGrid datasrc", datasrc);
  // console.log("MotoGrid otherattr", otherattr);
  // console.log("MotoGrid positionConfig", positionConfig);
  let arr = [
    " text-white",
    " text-white",
    " text-black",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
    " text-white",
  ];

  const [stars, setStars] = useState(arr);

  const setStarsValue = (val: any) => {
    const newArr = [...stars];
    if (newArr[val] === " text-white") {
      newArr[val] = " text-black";
    } else {
      newArr[val] = " text-white";
    }
    setStars(newArr);
  };

  const item = datasrc[0];
  //const list = renderPositionType(item, "position31", positionConfig);
  const list = [
    {
      id: "0",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
    {
      id: "1",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
    {
      id: "2",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
    {
      id: "3",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
    {
      id: "4",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
    {
      id: "5",
      title: "Гүйлтийн спорт гутал",
      mainnumber: "350000",
      mainimage: "https://i.ibb.co/RvYb6Y8/pexels-ray-piedra-1464625-1.png",
      category: "Sports",
    },
  ];
  return (
    <div className="flex justify-center items-center">
      <div className="mt-12 grid grid-cols-6 gap-5">
        {list &&
          list.map((item1: any, index1: number) => {
            return (
              <div className="flex justify-center flex-col">
                <div className="relative group flex justify-center items-center">
                  <AtomImage
                    item={item1.mainimage}
                    customClassName="w-auto"
                    alt={item1.title}
                  />
                  <div>
                    <button className="opacity-0 group-hover:opacity-100 py-4 w-10/12 sm:w-11/12 md:w-10/12 xl:w-11/12 flex justify-center items-center bg-white absolute bottom-6 inset-x-6 sm:inset-x-3 md:inset-x-6 lg:inset-x-5 xl:inset-x-4  shadow">
                      <p className="text-base text-center font-medium leading-4 text-gray-800 flex flex-shrink-0">
                        Quick View
                      </p>
                    </button>
                  </div>
                </div>
                <div className="mt-6 flex justify-between w-full">
                  <div>
                    <AtomTitle
                      item={item1.title}
                      customClassName="text-2xl font-semibold leading-6 text-gray-800"
                    />
                  </div>
                  <div className="focus:text-black">
                    <svg
                      id="heart"
                      onClick={() => setStarsValue(0)}
                      className={`cursor-pointer fill-current ${stars[0]}`}
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.75L5.82802 20.995L7.00702 14.122L2.00702 9.25495L8.90702 8.25495L11.993 2.00195L15.079 8.25495L21.979 9.25495L16.979 14.122L18.158 20.995L12 17.75Z"
                        stroke="#1F2937"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="mt-2">
                  <AtomText
                    item={item1.category}
                    customClassName="text-base leading-none text-gray-800"
                  />
                </div>
                <div className="mt-6 flex justify-between w-full">
                  <div>
                    <AtomCurrency
                      type="mnt"
                      item={item1.mainnumber}
                      customClassName="text-2xl font-semibold leading-normal text-gray-600"
                    />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
 */
