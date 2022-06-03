import React, { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@atom/RenderAtom'
import _ from 'lodash'
import useScrollTop from '@customhook/useScrollTop'
import { decode } from 'html-entities'
import parseHtml from 'html-react-parser'
import { overrideTailwindClasses } from 'tailwind-override'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useCloud } from 'hooks/use-cloud'

export default function khanNewsDetails() {
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
  const value: string = !readyDatasrc
    ? readyDatasrc?.description || ''
    : 'Sample Text'
  const router = useRouter()

  // console.log('SCM_TENDER_ECM_NEWS_DV_004', readyDatasrc)

  const item = readyDatasrc[0]

  const content = decode(item?.body?.substring(0, 110000000))

  const cloudContext = useCloud()

  let imgSrc = item?.imgurl
  if (imgSrc?.startsWith('storage/')) {
    imgSrc = `${cloudContext.metaConstant.ourMetaConstant.imageRootURL}${imgSrc}`
  }

  return (
    <>
      <div className="max-w-kbcontainer mx-auto xs:px-4 lg:px-0">
        <BlockDiv
          customClassName={`ftransition ease-in-out py-10 cursor-pointer xs:px-4 lg:px-0`}
          divNumber="divNewsOuter"
        >
          <RenderAtom
            item={{ value: 'fa-solid fa-arrow-left-long' }}
            defaultAtom="icon"
            customClassName={'text-black/60'}
          />
          <RenderAtom
            item={{ value: t('kb_0022') }}
            defaultAtom="text"
            onClick={() => router.back()}
            customClassName={'text-black/60 ml-3'}
          />
        </BlockDiv>
        <RenderAtom
          item={item.position1}
          defaultAtom="title"
          customClassName={'font-semibold leading-10 text-3xl pb-10'}
        />
        <RenderAtom
          item={{
            value: imgSrc,
          }}
          defaultAtom="image"
          customClassName={'w-full h-[500px] rounded'}
        />
        {!item.body && (
          <>
            <div
              className={
                'max-w-[730px] mx-auto h-auto flex flex-col justify-around'
              }
            >
              <RenderAtom
                item={{
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra dapibus ac faucibus sit consectetur massa augue malesuada. Malesuada felis habitasse nunc mattis non pulvinar morbi quis. Ac sed mauris, nunc euismod interdum laoreet porttitor integer. Ut ornare nibh arcu netus aenean faucibus. Est semper bibendum nullam tristique bibendum lectus. Facilisis at in ut commodo. Tincidunt arcu sagittis fermentum id. Lectus proin facilisis rhoncus volutpat mattis semper commodo dolor tortor.',
                }}
                defaultAtom="text"
                customClassName={'text-sm pt-8'}
              />
              <RenderAtom
                item={{
                  value:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra dapibus ac faucibus sit consectetur massa augue malesuada. Malesuada felis habitasse nunc mattis non pulvinar morbi quis. Ac sed mauris, nunc euismod interdum laoreet porttitor integer. Ut ornare nibh arcu netus aenean faucibus. Est semper bibendum nullam tristique bibendum lectus. Facilisis at in ut commodo. Tincidunt arcu sagittis fermentum id. Lectus proin facilisis rhoncus volutpat mattis semper commodo dolor tortor.',
                }}
                defaultAtom="text"
                customClassName={'text-sm py-8'}
              />
              <RenderAtom
                item={{ value: t('kb_0030') }}
                defaultAtom="title"
                customClassName={'text-xl font-semibold pb-8'}
              />
              <div className={'flex justify-between w-full relative h-[500px]'}>
                <div>
                  {data.map((item, index) => (
                    <div key={item} className="flex w-full relative">
                      <div className="h-8">
                        <p
                          className={
                            'w-8 h-8 rounded-full border-kbportal border flex justify-center items-center bg-white text-kbportal'
                          }
                        >
                          {index + 1}
                        </p>
                        <div
                          className={
                            index === 4
                              ? 'hidden'
                              : 'absolute h-full w-[1px] left-[14px] border-kbportal border-2 z-1'
                          }
                        ></div>
                      </div>
                      <div className={'h-[102px] flex flex-col pl-4'}>
                        <RenderAtom
                          item={{ value: item }}
                          defaultAtom="text"
                          customClassName={'lg:text-xl xs:text-base'}
                        />
                        <RenderAtom
                          item={{
                            value:
                              'consectetur adipiscing elit. Pharetra dapibus ac faucibus sit consectetur massa augue malesuada. Malesuada felis habitasse nunc mattis non pulvinar morbi quis.',
                          }}
                          defaultAtom="text"
                          customClassName={'opacity-60 text-xs'}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <iframe
              src="https://www.youtube.com/embed/v=jS4aFq5-91M"
              className="w-full lg:h-[500px] mb-[100px] mt-[30px] xs:h-[250px]"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              frameBorder="0"
            />
          </>
        )}
        <div
          className={
            'max-w-[730px] mx-auto h-auto flex flex-col justify-around py-10'
          }
        >
          <ReactMarkdown
            children={content}
            rehypePlugins={[rehypeRaw]}
            components={{ p: React.Fragment }}
          />
        </div>
      </div>
    </>
  )
}

const data = [
  'АППЛИКЕЙШН ТАТАХ',
  'БҮРТГҮҮЛЭХ',
  'БҮРТГЭЛ ИДЭВХЖҮҮЛЭХ',
  'КАРТ НЭМЭХ',
  'КАРТ ИДЭХЖҮҮЛЭХ',
]
