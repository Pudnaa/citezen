import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import Index from 'pages/jaak/jaak'
import { useTranslation } from 'next-i18next'

export default function khanTab() {
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
  const item = readyDatasrc
  const [activeBtn, setActiveBtn] = useState(0)
  const { t } = useTranslation('common')
  return (
    <BlockDiv
      customClassName={
        'flex items-center relative xs:overflow-x-scroll lg:overflow-auto'
      }
      divNumber={'DivTab'}
    >
      <BlockDiv customClassName={''} divNumber={'DivTabButton'}>
        {item.map((item, index) => (
          <RenderAtom
            item={item?.position10}
            defaultAtom="button"
            customClassName={`border-b-2 z-10 ${
              index === activeBtn
                ? 'text-[#024E31] border-[#024E31]'
                : 'text-black  border-black/0'
            }`}
            onClick={() => setActiveBtn(index)}
          />
        ))}
      </BlockDiv>
      <div className={'absolute h-[2px] w-full bg-black/20 bottom-0 z-1'}></div>
    </BlockDiv>
  )
}
