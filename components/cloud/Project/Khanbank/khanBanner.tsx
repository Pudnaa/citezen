import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import Image from 'next/image'
import _ from 'lodash'
import { AtomSliderV2 } from '@components/common/Atom'
import { SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
} from 'swiper'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'
import useSwiperRef from '@components/common/Atom/useSwiperRef'

import { overrideTailwindClasses } from 'tailwind-override'
import { url } from 'inspector'
import { useTranslation } from 'next-i18next'

export default function khanBanner() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)
  const { t } = useTranslation('common')

  const pagination: any = {
    clickable: true,
    type: 'bullets',
    renderBullet: (index: number, className: any) => {
      return `<span index-number="${index}" class="${className} cursor-pointer text-kbportal mx-2 w-4 h-4 inline-block border border-kbportal rounded-full"> </span>`
    },
  }
  const [nextEl, nextElRef]: any = useSwiperRef()
  const [prevEl, prevElRef]: any = useSwiperRef()

  const myProps: any = {}
  return (
    <>
      <BlockDiv customClassName={` `} divNumber="divBannerOuter">
        <BlockDiv customClassName={`relative `} divNumber="Swiper-Wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            pagination={pagination}
            navigation={{
              prevEl,
              nextEl,
            }}
            className="relative flex items-center justify-center"
            spaceBetween={10}
            centeredSlides={false}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}

            style={myProps?.style}
            div-name="AtomSliderV2-Swiper"
            {...myProps?.props}
          >
            {readyDatasrc.map((item: any, index: number) => {
              return (
                <SwiperSlide
                  key={item?.id || index}
                  // className="bg-cover"
                  style={{
                    backgroundImage: `url(${item.mainimage})`,
                    height: '500px',
                    backgroundSize: 'cover',
                  }}
                >
                  {/* <RenderAtom
										item={item?.position2}
										defaultAtom="image"
										customClassName=" cover "
									/> */}
                  <div className="max-w-kbcontainer mx-auto h-3/4 mt-16 flex items-center px-2">
                    <div>
                      <div>
                        <RenderAtom
                          item={item?.position1}
                          defaultAtom="title"
                          customClassName=" lg:w-8 xs:full text-kbportal-lightest uppercase lg:text-[60px] xs:text-5xl"
                          // customStyle={{ fontSize: "60px", lineHeight: "80px" }}
                        />
                      </div>

                      <hr className="bg-black" />
                      <div className="py-4">
                        <RenderAtom
                          item={item?.position3}
                          defaultAtom="text"
                          customClassName=" dd"
                        />
                      </div>
                      <span
                        className="bg-[#04A15A] text-white px-6 py-3 mt-4 rounded cursor-pointer font-roboto font-bold"
                        style={{ fontSize: '15px', lineHeight: '24px' }}
                      >
                        {t('kb_0003')}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}

            <BlockDiv
              customClassName={`absolute z-50 inset-y-1/2 xl:w-[75%] w-[90%] -translate-y-6  flex items-center justify-center`}
              divNumber="Arrow-Wrapper-Outside"
            >
              <BlockDiv
                customClassName={` absolute w-full `}
                divNumber="Arrow-Wrapper"
              >
                <div className="flex justify-between w-full h-14">
                  <div
                    ref={prevElRef}
                    className={`left-0 w-12 h-12 rounded-full  bg-kbportal bg-opacity-80 text-center flex items-center justify-center cursor-pointer hover:w-14 hover:h-14 ease-out duration-200 hover:bg-opacity-100`}
                  >
                    <i className="far fa-chevron-left text-xl text-white"></i>
                  </div>
                  <div
                    ref={nextElRef}
                    className={`right-0  w-12 h-12 rounded-full  bg-kbportal bg-opacity-80 text-center flex items-center justify-center cursor-pointer hover:w-14 hover:h-14 ease-out duration-200 hover:bg-opacity-100`}
                  >
                    <i className="far fa-chevron-right text-xl text-white"></i>
                  </div>
                </div>
              </BlockDiv>
            </BlockDiv>
          </Swiper>
        </BlockDiv>
      </BlockDiv>

      <style>
        {`
                    .swiper-pagination-bullet-active {
                        opacity:1 !important;
                        background:#024E31!important;
                    }
                    .swiper-pagination-bullet {
                        opacity:0.4;
                    }
                    .swiper-pagination {
                        position: absolute;
                        bottom: 20px;
                        z-index: 5000;
                        margin: 0 auto;
                        // transform: translate(-20%, 0);
                        left: 21%;
                    }
                    .swiper-slide {
                        width: unset;
                    }
                    `}
      </style>
    </>
  )
}
