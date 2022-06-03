import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import RenderMolecule from '@molecule/RenderMolecule'
import _ from 'lodash'

export default function CozyGeneralMasonry() {
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

  const boxClassName = 'min-w-full h-48 min-h-full'
  const gridLayout = widgetnemgooReady?.gridTemplate || gridTemplate
  const settings = widgetnemgooReady?.settings
  return (
    <>
      <BlockDiv
        customClassName={`w-full h-full`}
        divNumber="CozyGeneralMasonryOuter"
      >
        <BlockDiv
          customClassName="flex flex-col py-2"
          divNumber="CozyGeneralMasonryInner"
        >
          <div className="grid overflow-hidden lg:grid-cols-5 lg:grid-rows-3 xs:grid-rows-2 xs:grid-cols-2 gap-5">
            {readyDatasrc
              .slice(0, settings?.displayView || 10)
              .map((item: any, index: number) => {
                return (
                  <BlockDiv
                    key={item?.id || index}
                    customClassName={`${boxClassName} ${gridLayout[index]?.className}  cursor-pointer`}
                    divNumber="CozyGeneralMasonryItem"
                  >
                    <RenderMolecule
                      key={item?.id || index}
                      moleculeConfig={{
                        type: 'MoleculeBanner',
                        className: 'rounded-l-xl rounded-r-xl',
                      }}
                      {...{
                        item: {
                          title: item?.position1,
                          image: item?.position2,
                          description: item?.position3,
                          mainnumber: item?.position4,
                          button: item?.position10,
                        },
                        divNamePrefix: 'banner',
                      }}
                    />
                  </BlockDiv>
                )
              })}
          </div>
        </BlockDiv>
      </BlockDiv>
    </>
  )
}

const gridTemplate = [
  { className: '' },
  { className: '' },
  { className: 'row-span-2' },
  { className: 'col-span-2' },
  { className: 'col-span-2' },
  { className: '' },
  { className: '' },
  { className: '' },
  { className: 'col-span-2' },
  { className: 'col-span-2' },
]
