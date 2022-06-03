import { useContext, useRef, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import KhanFaqItem from './khanFaqItem'
import { useTranslation } from 'next-i18next'

export default function khanFaq() {
  const { readyDatasrc, widgetnemgooReady } = useContext(WidgetWrapperContext)

  const { t } = useTranslation('common')
  return (
    <>
      <div className=" md:w-3/4 mx-auto xs:w-full lg:w-[730px]">
        <BlockDiv
          customClassName={`transition ease-in-out w-3/5 px-6 mx-auto xs:w-full`}
          divNumber="divFaqOuter"
        >
          <RenderAtom
            item={{ value: t('kb_0028') }}
            defaultAtom="title"
            customClassName={'lg:text-3xl xs:text-base font-segoe font-bold'}
          />
          <div className="mt-6">
            {readyDatasrc.map((item, index) => (
              <KhanFaqItem
                title={item.title}
                content={item.description}
                key={index}
              />
            ))}
          </div>
        </BlockDiv>
      </div>
    </>
  )
}
