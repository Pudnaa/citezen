import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import Index from 'pages/jaak/jaak'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function khanTenderGrid() {
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
  const { t } = useTranslation('common')
  const item = readyDatasrc
  const search = widgetnemgooReady?.settings?.search
  const grid = widgetnemgooReady?.settings?.grid
  const pagination = widgetnemgooReady?.settings?.paginatin
  const router = useRouter()
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, '...']
  // console.log(readyDatasrc);
  return (
    <>
      <BlockDiv
        customClassName={`ftransition ease-in-out w-full`}
        divNumber="divTenderGridOuter"
      >
        <div className="max-w-kbcontainer mx-auto flex flex-col justify-between">
          {search === true ? (
            <>
              <RenderAtom
                item={{ value: t('kb_0020') }}
                defaultAtom="title"
                customClassName={
                  'text-kbportal font-semibold font-segoe text-xl pb-10 xs:pl-4 lg:pl-0'
                }
              />
              <div
                className={
                  'flex w-full justify-between items-center h-12 xs:w-[95%] lg:w-full xs:mx-auto'
                }
              >
                <RenderAtom
                  item={{ type: 'text' }}
                  // type={{value:'Хайлт'}}
                  defaultAtom="input"
                  // placeholder="Хайлт"
                  customClassName={
                    'w-4/5 bg-[#F9F9F9] rounded px-4 border-none font-segoe'
                  }
                />
                <div
                  className={
                    'w-40 rounded border-kbportal border-2 flex justify-center items-center cursor-pointer'
                  }
                >
                  <RenderAtom
                    item={{
                      value: t('kb_0021'),
                      icon: 'fa-light fa-calendar-days',
                      type: 'icon',
                    }}
                    defaultAtom="button"
                    customClassName={'text-black font-bold'}
                  />
                  <i
                    className="fa-regular fa-calendar-days font-lg"
                    style={{ color: '#024E31' }}
                  ></i>
                </div>
              </div>
            </>
          ) : search === false ? (
            <div className="flex justify-between items-center w-full lg:px-0 xs:px-4">
              <RenderAtom
                item={{ value: t('kb_0026') }}
                defaultAtom="title"
                customClassName={
                  'text-3xl font-segoe font-bold xs:text-base lg:text-3xl'
                }
              />
              <div className={'cursor-pointer'}>
                {/* <RenderAtom 
					item={{value:"Бүгдийг харах"}}
					defaultAtom="text"
					customClassName={"text-kbportal"}
					/> */}
                <Link href={router.asPath + '/tender'} shallow={true}>
                  <span
                    className={
                      'text-kbportal cursor-pointer hover:animate-bounce xs:text-xs lg:text-base font-segoe hover:text-[#04A15A] hover:text-lg ease-out duration-200'
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
          ) : null}
          {grid === true ? (
            <div className={'w-full flex flex-wrap justify-between'}>
              {item?.map((item, index) => (
                <div
                  key={item.id || index}
                  className={
                    'w-[540px] h-[240px] p-8 mt-10 flex flex-col justify-between rounded shadow-md xs:m-4 lg:mx-0'
                  }
                >
                  <div className={'flex items-center justify-between'}>
                    <div className="flex items-center">
                      <div
                        className={'w-2.5 h-2.5 rounded-full bg-kbportal'}
                      ></div>
                      <RenderAtom
                        item={{ value: t('kb_0019') }}
                        defaultAtom="text"
                        customClassName={
                          'text-black ml-2 lg:text-[15px] xs:text-tiny font-segoe'
                        }
                      />
                    </div>
                    <RenderAtom
                      item={{ value: '4 хоногийн өмнө зарлагдсан' }}
                      defaultAtom="text"
                      customClassName={
                        'lg:text-[15px] xs:text-xs font-segoe opacity-60'
                      }
                    />
                  </div>
                  <RenderAtom
                    item={item?.position3}
                    defaultAtom="text"
                    customClassName={
                      'leading-7 lg:text-[21px] font-semibold xs:text-base'
                    }
                  />
                  <div className="flex justify-between items-center">
                    <div>
                      <i className="fa-regular fa-stopwatch"></i>
                      <RenderAtom
                        item={{ value: 'Дуусах хугацаа: 14/03/2022' }}
                        defaultAtom="text"
                        customClassName={
                          'ml-2 lg:text-base xs:text-xs font-segoe'
                        }
                      />
                    </div>
                    <div className={'cursor-pointer'}>
                      <RenderAtom
                        item={{ value: t('kb_0018') }}
                        defaultAtom="text"
                        customClassName={
                          'mr-2 text-kbportal font-bold lg:text-base xs:text-sm font-segoeBold hover:text-[#04A15A] transition ease-out duration-300'
                        }
                      />
                      <i
                        className="fa-regular fa-circle-arrow-right hover:transition"
                        style={{ color: '#024E31' }}
                      ></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : grid === false ? (
            <div className={'flex flex-col w-full items-center xs:px-4'}>
              {item.map((item, index) => (
                <div
                  key={item.id || index}
                  className={
                    'w-full flex justify-around items-center h-[88px] bg-[#F9F9F9] my-5 py-7 lg:px-5 xs:py-2 xs:px-4 lg:py-7 '
                  }
                >
                  <RenderAtom
                    item={item?.position3}
                    defaultAtom="text"
                    customClassName={
                      'leading-7 font-semibold text-base  w-1/3 xs:text-[10px] lg:text-xl'
                    }
                  />
                  <div
                    className={
                      'flex items-center w-3/5 justify-end xs:flex-col lg:flex-row xs:w-full lg:w-3/5 lg:justify-center xs:justify-between lg:h-auto xs:h-3/4'
                    }
                  >
                    <RenderAtom
                      item={{ value: t('kb_0019') }}
                      defaultAtom="button"
                      customClassName={
                        'h-6 rounded text-kbportal bg-kbportal/20 text-xs'
                      }
                    />
                    <div
                      className={
                        'lg:w-2/3 flex items-center xs:w-full xs:justify-evenly lg:justify-evenly'
                      }
                    >
                      <RenderAtom
                        item={{ value: 'fa-regular fa-calendar-days' }}
                        defaultAtom="icon"
                        customClassName={'xs:text-xs lg:text-xl'}
                        customStyle={{ color: '#024E31' }}
                      />
                      <RenderAtom
                        item={{ value: 'Огноо: 14/03/2022 - 04/04/2022' }}
                        defaultAtom="text"
                        customClassName={'opacity-60 xs:text-xss lg:text-xs'}
                      />
                      <RenderAtom
                        item={{ value: 'fa-regular fa-circle-chevron-right' }}
                        defaultAtom="icon"
                        customClassName={'xs:text-xss lg:text-xl'}
                        customStyle={{ color: '#024E31' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
          {!pagination
            ? null
            : pagination === true && (
                <div
                  className={
                    'flex items-center w-full h-10 justify-center mt-5'
                  }
                >
                  <RenderAtom
                    item={{ value: 'fa-solid fa-angle-left' }}
                    defaultAtom="icon"
                    customClassName={
                      'font-sm w-10 h-10 p-2 text-center cursor-pointer'
                    }
                    customStyle={{ color: '#024E31' }}
                  />
                  {number.map((item, index) => (
                    <p
                      key={index}
                      className={`w-10 lg:h-10 xs:h-auto flex items-center justify-center cursor-pointer text-center mx-1 rounded-lg hover:bg-[#024E31] hover:text-white ${
                        index === 0 ? 'bg-[#024E31] text-white' : ''
                      }`}
                    >
                      {item}
                    </p>
                  ))}
                  <RenderAtom
                    item={{ value: 'fa-solid fa-angle-right' }}
                    defaultAtom="icon"
                    customClassName={
                      'font-sm w-10 h-10 p-2 text-center cursor-pointer'
                    }
                    customStyle={{ color: '#024E31' }}
                  />
                </div>
              )}
        </div>
      </BlockDiv>
    </>
  )
}
