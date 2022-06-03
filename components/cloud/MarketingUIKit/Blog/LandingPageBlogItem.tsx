import { useContext, useState, FC } from 'react'
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
// import "swiper/css";
// import "swiper/css/pagination";
import { Pagination } from 'swiper'

type PropsType = {
  item?: any
  index?: any
}

const LandingPageBlogItem: FC<PropsType> = ({ item, index }) => {
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

  return (
    <div className="bg-white text-left p-[30px]">
      <RenderAtom
        item={item.position1}
        defaultAtom="title"
        customClassName={'font-bold text-[22px]'}
      />
      <div className="h-[83px] text-ellipsis overflow-hidden mt-[20px] whitespace-normal w-full">
        <RenderAtom
          item={item.position3}
          defaultAtom="text"
          customClassName={'h-[50px] w-full  opacity-50  leading-7'}
        />
      </div>
      <div className="w-full flex justify-end items-start mt-[47px]">
        <RenderAtom
          item={{
            value:
              'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652682954/Zoho%20landing/image_209_alck4h.png',
          }}
          defaultAtom="image"
          customClassName={'w-[180px] h-[135px] text-right '}
        />
      </div>
    </div>
  )
}

export default LandingPageBlogItem
