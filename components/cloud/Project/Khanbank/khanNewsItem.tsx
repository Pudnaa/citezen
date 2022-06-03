import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import Index from 'pages/jaak/jaak'
import { useTranslation } from 'next-i18next'

export default function KhanNewsItem({ item }) {
  const { t } = useTranslation('common')
  const { readyDatasrc } = useContext(WidgetWrapperContext)
  return (
    <div className={'flex flex-col   '}>
      <div className="feature">
        <RenderAtom
          item={item?.position2}
          defaultAtom="image"
          customClassName={'h-[180px] rounded-t'}
        />
      </div>
      <div className="p-6 bg-white h-40 flex flex-col">
        <RenderAtom
          item={item?.position1}
          defaultAtom="title"
          customClassName={'text-base font-semibold font-segoeBold'}
          customProps={{
            truncateRow: 3,
          }}
        />
        <div className={'flex items-end h-full'}>
          <div>
            <RenderAtom
              item={{ value: t('kb_0003') }}
              defaultAtom="text"
              customClassName={`text-kbportal font-semibold pr-1 cursor-pointer lg:text-base xs:text-tiny font-segoeBold hover:text-[#04A15A] ease-out duration-200`}
            />
            <i
              className="fa-light fa-angle-right"
              style={{ color: '#024E31' }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}
