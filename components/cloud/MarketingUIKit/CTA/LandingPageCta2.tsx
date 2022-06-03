import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { Swiper } from 'swiper/react'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Render from '@middleware/meta/layout/render'
import useSwiperRef from '@components/common/Atom/useSwiperRef'
import BlockDiv from '@components/common/Block/BlockDiv'
function LandingPageCta2() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    widgetnemgooReady,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext)

  const item = readyDatasrc
  return (
    <div className="max-w-lpcontainer mx-auto text-center flex flex-col items-center ">
      <RenderAtom
        item={{ value: widgetnemgooReady?.title }}
        defaultAtom="title"
        customClassName={'lg:text-[44px] xs:text-3xl text-center'}
      />
      <RenderAtom
        item={{ value: widgetnemgooReady?.subtitle }}
        defaultAtom="text"
        customClassName={'lg:text-[18px] xs:text-xl opacity-30'}
      />
      <div className="lg:grid grid-cols-4 gap-4 my-[60px] xs:flex xs:flex-col">
        {item?.map((item, index) => (
          <div
            key={index}
            className="bg-white p-[20px] flex flex-col justify-around"
          >
            <RenderAtom
              item={item?.position1}
              defaultAtom="text"
              customClassName={'font-bold text-[20px] text-left'}
            />
            <div className="flex w-full justify-between items-center ">
              <div>
                <RenderAtom
                  item={{ value: 'fa-solid fa-star' }}
                  defaultAtom="icon"
                  customClassName={'text-[#009BDE] mr-2'}
                />
                <RenderAtom
                  item={{ value: '4.8/100' }}
                  defaultAtom="text"
                  customClassName={'opacity-50'}
                />
              </div>
              <RenderAtom
                item={{ value: item.discreption }}
                defaultAtom="text"
                customClassName={'opacity-50'}
              />
            </div>
          </div>
        ))}
      </div>
      <RenderAtom
        item={{ value: widgetnemgooReady?.button }}
        defaultAtom="button"
        customClassName={'bg-[#009BDE] font-bold  rounded-md'}
      />
    </div>
  )
}

export default LandingPageCta2
