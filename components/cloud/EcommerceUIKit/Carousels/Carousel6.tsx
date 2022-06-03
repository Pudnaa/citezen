import { useContext, useState } from "react";
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
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Navigation } from "swiper";

// import "swiper/css";

function Carousel6() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
  } = useContext(WidgetWrapperContext);

  // console.log("Carousel6 config", config);
  // console.log("Carousel6 widgetnemgooReady", widgetnemgooReady);
  // console.log("Carousel6 positionConfig", positionConfig);
  const item = readyDatasrc[0];
  // const [style, setStyle] = useState({ display: "none" });

  return (
    <div className="  relative ">
      {/* <div className="flex  h-5justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
					<div className="flex  h-5sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start"> */}
      <Swiper navigation={true} modules={[Navigation]} className="carousel6 ">
        {readyDatasrc.map((item1: any, index: number) => {
          return (
            <SwiperSlide key={item1?.id || index}>
              <div className="shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer  relative ">
                <img
                  src={item1?.mainimage}
                  alt={item1?.title}
                  className=" w-full object-cover object-center "
                />
                <div className=" hidden flex flex-col jusitfy-center items-center space-y-2 absolute bottom-0 bg-white bg-opacity-60 h-20 w-full pt-4 hover:bg-opacity-0">
                  <RenderAtom
                    item={{ value: item1?.title }}
                    defaultAtom="title"
                    customClassName="text-lg xl:text-xl font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800"
                  />
                  <RenderAtom
                    item={{ value: item1?.subtitle }}
                    defaultAtom="text"
                    customClassName="text-base xl:text-base font-medium xl:font-bold leading-none xl:leading-5 text-center text-gray-800"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* </div>
				</div> */}
    </div>
  );
}
export default Carousel6;
