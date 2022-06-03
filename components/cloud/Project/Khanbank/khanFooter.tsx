import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
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
  const { isTop, setIsTop } = useScrollTop(true)
  const header = widgetnemgooReady?.header || {}
  const item = readyDatasrc[0] || {}
  const { t } = useTranslation('common')

  return (
    <>
      <BlockDiv customClassName={'max-w-kbcontainer mx-auto flex flex-col'}>
        <BlockDiv
          customClassName={'flex flex-row h-[88px] items-inherit'}
          divNumber="divFooterOuter"
        >
          <div
            className={
              'flex justify-between w-full xs:flex-col lg:flex-row xs:items-center  xs:h-[259px] '
            }
          >
            <RenderAtom
              item={{
                value:
                  'https://res.cloudinary.com/dzih5nqhg/image/upload/v1651485930/Khanbank/Logo_by6gqv.png ',
              }}
              defaultAtom="image"
              customClassName={'w-[212px] h-[40px]'}
            />
            <div className={'flex flex-col h-[88px] xs:h-auto'}>
              <RenderAtom
                item={{ value: t('kb_0005') }}
                defaultAtom="title"
                customClassName={'text-sm font-bold mb-4 xs:hidden lg:block'}
              />
              <RenderAtom
                item={{ value: '7515-3333 /Дотуур дугаар/' }}
                defaultAtom="text"
                customClassName={'text-xs '}
              />
            </div>
            <div className={'flex flex-col lg:h-[88px] w-[255px]'}>
              <RenderAtom
                item={{ value: t('kb_0006') }}
                defaultAtom="title"
                customClassName={'text-sm font-bold mb-4 xs:hidden lg:block'}
              />
              <RenderAtom
                item={{
                  value:
                    'Чингисийн Өргөн Чөлөө-6, Стадион  Оргил-1, Хан-Уул Дүүрэг Улаанбаатар 17010, Монгол Улс',
                }}
                defaultAtom="text"
                customClassName={'text-xs xs:hidden lg:block'}
              />
            </div>
            <div className={'flex flex-col h-[88px] w-[255px]'}>
              <RenderAtom
                item={{ value: t('kb_0007') }}
                defaultAtom="title"
                customClassName={'text-sm mb-4'}
              />
              <div className={'flex items-center justify-between'}>
                {icons.map((item, index) => (
                  <RenderAtom
                    key={index}
                    item={{ value: item.icon }}
                    defaultAtom="icon"
                    customClassName={''}
                  />
                ))}
              </div>
            </div>
          </div>
        </BlockDiv>
        <div className={'w-full h-1 bg-[#000000]/10 mb-10 xs:mt-[112px]'}></div>
        <div className={'font-xs mb-14 flex items-center justify-center'}>
          <p>© 1991-2022 ХААН Банк ХХК</p>
        </div>
      </BlockDiv>
    </>
  )
}
const icons = [
  { icon: 'fa-brands fa-facebook-f' },
  { icon: 'fa-brands fa-youtube' },
  { icon: 'fa-brands fa-linkedin-in' },
  { icon: 'fa-brands fa-twitter' },
  { icon: 'fa-brands fa-instagram' },
]
