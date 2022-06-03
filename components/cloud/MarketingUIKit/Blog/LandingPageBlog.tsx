import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from 'util/helper'
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { decode } from 'html-entities'
import parseHtml from 'html-react-parser'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperRef from '@components/common/Atom/useSwiperRef'
import LandingPageBlogItem from './LandingPageBlogItem'
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

function LandingPageBlog() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    // WidgetTitle,
  } = useContext(WidgetWrapperContext)
  // console.log("BlogSimple config", config);
  // console.log("BlogSimple readyDatasrc", readyDatasrc);
  // console.log("BlogSimple widgetnemgooReady", widgetnemgooReady);
  // console.log("BlogSimple positionConfig", positionConfig);
  // const item = readyDatasrc;
  const [nextEl, nextElRef]: any = useSwiperRef()
  const [prevEl, prevElRef]: any = useSwiperRef()
  return (
    <div className="relative lg:max-w-lpcontainer xs:w-full mx-auto pt-12 pb-16 lg:px-0 xs:px-4 bg-[#F3F4F6] text-center ">
      <RenderAtom
        item={{ value: widgetnemgooReady?.title }}
        defaultAtom="title"
        customClassName={'text-zoho.dark lg:text-4xl xs:text-2xl'}
      />
      <RenderAtom
        item={{ value: widgetnemgooReady?.text }}
        defaultAtom="text"
        customClassName={'text-[18px] text-[#7B7B93] mb-[80px]'}
      />
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        style={{ marginTop: '60px' }}
        modules={[Pagination, Navigation]}
        navigation={{
          prevEl,
          nextEl,
        }}
        className="mySwiper"
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 40,
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
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {readyDatasrc?.map((item, index) => (
          <SwiperSlide key={index}>
            <LandingPageBlogItem item={item} key={index} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full flex justify-center">
        <RenderAtom
          item={{ value: 'Өөрт хэрэгтэй салбараа олоорой...' }}
          defaultAtom="button"
          customClassName={
            'text-white bg-[#009BDE] text-center rounded-md mt-[80px]'
          }
        />
      </div>
      <div
        className={
          'absolute w-[120%] lg:flex xs:hidden justify-between items-center h-28 top-[50%] left-[-120px]'
        }
      >
        <div
          ref={prevElRef}
          className={`w-12 h-12 rounded-full  bg-white bg-opacity-30 text-center flex items-center justify-center cursor-pointer`}
        >
          <i className="fa-solid fa-arrow-left text-xl text-black"></i>
        </div>
        <div
          ref={nextElRef}
          className={`w-12 h-12 rounded-full  bg-white bg-opacity-30 text-center flex items-center justify-center cursor-pointer`}
        >
          <i className="fa-solid fa-arrow-right text-xl text-black"></i>
        </div>
      </div>
    </div>
  )
}

export default LandingPageBlog
