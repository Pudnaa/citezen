import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import KhanNewsItem from './khanNewsItem'
import { Pagination, Navigation } from 'swiper'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import useSwiperRef from '@components/common/Atom/useSwiperRef'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import 'swiper/css/free-mode'

export default function khanNews() {
  const { config, readyDatasrc, widgetnemgooReady } = useContext(
    WidgetWrapperContext,
  )
  const { t } = useTranslation('common')
  const router = useRouter()

  const [nextEl, nextElRef]: any = useSwiperRef()
  const [prevEl, prevElRef]: any = useSwiperRef()
  const search = widgetnemgooReady?.settings?.search
  const type = widgetnemgooReady?.settings?.type
  const pagination = widgetnemgooReady?.settings?.paginatin

  const contentItem = () => {
    switch (type) {
      case 'slider':
        return (
          <div
            className={
              'max-w-kbcontainer mx-auto flex flex-col justify-between items-center animate-fade-in-up'
            }
          >
            <div
              className={
                'flex items-center justify-between w-full mb-6 xs:px-4'
              }
            >
              <RenderAtom
                item={{ value: t('kb_0027') }}
                defaultAtom="title"
                customClassName={'lg:text-3xl xs:text-base'}
              />
              <div className={'cursor-pointer'}>
                {/* <RenderAtom
								item={{ value: "Бүгдийг харах" }}
								defaultAtom="text"
								customClassName={"text-kbportal"}
							/> */}
                <Link href={router.asPath + '/news'} shallow={true}>
                  <span
                    className={
                      'text-kbportal cursor-pointer hover:animate-bounce lg:text-base xs:text-xs'
                    }
                  >
                    {t('kb_0004')}
                  </span>
                </Link>
                <i
                  className="fa-thin fa-arrow-right-long ml-3 w-[20px] h-[10px]"
                  style={{ color: '#024E31' }}
                ></i>
              </div>
            </div>
            <div className={'w-full xs:px-4'}>
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={{
                  prevEl,
                  nextEl,
                }}
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
                modules={[Pagination, Navigation]}
                className="w-full xs:flex lg:grid xs:flex-col"
              >
                {readyDatasrc.map((item, index) => (
                  <SwiperSlide key={index}>
                    <KhanNewsItem key={index} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className={'w-full flex justify-between items-center h-28'}>
              <div
                ref={prevElRef}
                className={`w-12 h-12 rounded-full  bg-kbportal bg-opacity-30 text-center flex items-center justify-center cursor-pointer`}
              >
                <i className="far fa-chevron-left text-xl text-white"></i>
              </div>
              <div
                ref={nextElRef}
                className={`w-12 h-12 rounded-full  bg-kbportal bg-opacity-30 text-center flex items-center justify-center cursor-pointer`}
              >
                <i className="far fa-chevron-right text-xl text-white"></i>
              </div>
            </div>
          </div>
        )
      default:
        return (
          <div
            className={
              'max-w-kbcontainer mx-auto flex flex-col justify-between items-center animate-fade-in-up'
            }
          >
            <div className=" lg:grid grid-cols-3 gap-6 xs:flex xs:flex-col xs:px-4">
              {readyDatasrc.map((item, index) => (
                <div key={index}>
                  <KhanNewsItem key={index} item={item} />
                </div>
              ))}
            </div>
          </div>
        )
    }
  }

  return (
    <>
      <BlockDiv
        customClassName={`ftransition ease-in-out`}
        divNumber="divNewsOuter"
      >
        {contentItem()}
      </BlockDiv>
    </>
  )
}
