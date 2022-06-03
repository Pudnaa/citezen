import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import { useTranslation } from 'next-i18next'

export default function khanCta() {
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
  const item = readyDatasrc[0]
  const { t } = useTranslation('common')
  return (
    <>
      <BlockDiv
        customClassName={`ftransition ease-in-out`}
        divNumber="divCtaOuter"
      >
        <div
          className={`w-full h-[124px] object-cover xs:px-2`}
          style={{
            backgroundImage: `url(${item.mainimage})`,
          }}
        >
          <div className="max-w-kbcontainer mx-auto flex items-center justify-center h-full ">
            <div className="h-[64px] flex justify-between items-center w-full">
              <i
                className="fa-light fa-file-pdf fa-4x"
                style={{ color: '#2D6C54' }}
              ></i>
              <RenderAtom
                item={{ value: t('kb_0029') }}
                defaultAtom="text"
                customClassName={
                  'text-2xl w-[769px] xs:text-xs sm:text-tiny md:text-base lg:text-xl font-segoeBold xs:px-2'
                }
              />
              {/* <RenderAtom
								item={item?.position10}
								defaultAtom="button"
								customClassName={
									"bg-[#125B32]  w-[165px] h-[48px] rounded font-bold text-[15px] text-white font-segoeBold"
								}
							/> */}
              <span className="bg-[#125B32]  w-[165px] h-[48px] rounded font-bold text-[15px] text-white font-segoeBold flex items-center justify-center cursor-pointer">
                {t('kb_0003')}
              </span>
            </div>
          </div>
        </div>
      </BlockDiv>
    </>
  )
}
