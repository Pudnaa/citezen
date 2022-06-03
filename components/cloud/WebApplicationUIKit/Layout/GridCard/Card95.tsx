import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
import { Swiper, SwiperSlide } from 'swiper/react'
import RenderAtom from '@components/common/Atom/RenderAtom'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/grid'
import { Pagination } from 'swiper'
import Link from 'next/link'
import { AtomLinkV3 } from '@components/common/Atom'
import Render from '@middleware/meta/layout/render'
import BlockDiv from '@components/common/Block/BlockDiv'
const Card95 = () => {
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
  } = useContext(WidgetWrapperContext)

  // console.log("Card95 config", config);
  // console.log("Card95 readyDatasrc", readyDatasrc);
  // console.log("Card95 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card95 positionConfig", positionConfig);
  return (
    <>
      <div className="lg:container xs:ml-2 xs:max-w-full relative my-6 lg:mx-auto ">
        {/* <div className="flex  h-5justify-center items-center space-y-4 sm:space-y-6 xl:space-y-0 xl:flex-row flex-col w-full xl:space-x-6 relative z-10">
					<div className="flex  h-5sm:justify-start items-center justify-center  flex-col sm:flex-row sm:items-start"> */}
        <Swiper
          slidesPerView={widgetnemgooReady?.slidesPerView || 6}
          spaceBetween={widgetnemgooReady?.space || 20}
          // pagination={{
          // 	clickable: true,
          // }}
          grid={{
            rows: widgetnemgooReady?.rows || 1,
          }}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: widgetnemgooReady?.space || 15,
            },
          }}
          modules={[Pagination]}
          className="company_carousel "
        >
          {readyDatasrc?.map((item: any, index1: number) => {
            return (
              <SwiperSlide key={index1}>
                <BlockDiv
                  customClassName="max-w-sm rounded-lg  pt-6 pb-4 h-56 bg-green-100 dark:bg-gray-800 cursor-pointer"
                  customStyle={{ backgroundColor: item?.bgColor }}
                  divNumber={'DivSwiper'}
                >
                  <BlockDiv
                    customClassName="flex flex-col items-center  pt-2"
                    divNumber={'DivSwiperContent'}
                  >
                    <div className="w-20 h-20  rounded-full flex items-center justify-center pt-4">
                      {/* <i className={`text-2xl ${item?.icon}`}></i>

											 */}
                      {(item?.icon && (
                        <img
                          src={item?.icon}
                          alt={item?.name}
                          className="w-20"
                        />
                      )) || (
                        <p className="text-3xl  text-citizen-title opacity-30 pt-16">
                          Илүү...
                        </p>
                      )}
                    </div>
                    <RenderAtom
                      item={{ value: item?.name }}
                      defaultAtom="text"
                      customClassName={
                        'text-xl font-medium sm:text-xl h-16 leading-6 text-center mt-6 text-white dark:text-gray-100 line-clamp-2 pt-4'
                      }
                    ></RenderAtom>
                  </BlockDiv>
                </BlockDiv>
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
            )
          })}
        </Swiper>

        {/* </div>
				</div> */}
        <BlockDiv
          customClassName="flex justify-end mt-8"
          divNumber={'DivAllButton'}
        >
          <AtomLinkV3
            href={widgetnemgooReady?.moreLink || '/'}
            color="blue-400"
            children={
              <span className="cursor-pointer text-base text-citizen-description hover:border-blue-400 border-citizen-description  hover:text-blue-400 border rounded-lg py-2 px-4 ">
                Бүх үйлчилгээ
                <i className="fa-solid fa-arrow-right-long pl-2"></i>
              </span>
            }
          />
        </BlockDiv>
      </div>
    </>
  )
}
export default Card95
