import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Link from 'next/link'
import Image from 'next/image'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderMolecule from '@molecule/RenderMolecule'
import { parentidToChildren } from 'util/helper'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { Rate } from 'antd'

const pageTitle = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext)

  const router = useRouter()
  // console.log("readyDatasrcreadyDatasrc ", readyDatasrc);

  const pageType = widgetnemgooReady?.listconfig?.pageType
  const parameters = `&parameters=${JSON.stringify({
    item: router.query?.item,
  })}`
  const { data: CustomTitle } = useSWR(
    `/api/get-process?processcode=getHdrInfo_004${parameters}`,
  )
  // console.log("readyDatasrcre adyDatasrc CustomTitle ", CustomTitle);
  const renderType = () => {
    if (pageType == 'single') {
      return (
        <BlockDiv
          customClassName={`grid grid-cols-1`}
          divNumber="divGridNumber"
        >
          {' '}
          <RenderAtom
            item={{ value: CustomTitle?.urlstring }}
            defaultAtom="text"
            customClassName=" mb-0 text-citizen-title mt-4 "
          />
          <RenderAtom
            item={{ value: CustomTitle?.name }}
            defaultAtom="title"
            customClassName=" mb-0 text- mt-3"
          />
          <RenderAtom
            item={{ value: CustomTitle?.description }}
            defaultAtom="text"
            customClassName=" mb-0 text-citizen-title mt-4 "
          />
          <span>
            <Rate
              allowHalf
              defaultValue={CustomTitle?.avgval}
              disabled
              className="text-sm mt-4"
              style={{ color: '#FFBB00' }}
            />
            <span className="text-white pl-2"> (4.1) 89</span>
          </span>
          <span className=" mb-0 text-citizen-title mt-4 flex">
            <span>
              Сүүлийн шинэчлэл: 2022.03.10 |{' '}
              <i className="fa-light fa-flag-swallowtail  pl-4"></i>
            </span>
            <RenderAtom
              item={{ value: CustomTitle?.lang }}
              defaultAtom="text"
              customClassName=" mb-0  pl-2 "
            />
          </span>
        </BlockDiv>
      )
    } else {
      return (
        <BlockDiv
          customClassName={`grid grid-cols-1`}
          divNumber="divGridNumber"
        >
          <p className="text-white opacity-80 ">
            Нүүр / Хүний нөөцийн удирдлага
          </p>
          {readyDatasrc.map((item: any, index: number) => {
            return (
              <RenderMolecule
                key={item?.id || index}
                moleculeConfig={widgetnemgooReady?.children?.[0]}
                {...{
                  item: {
                    title: item?.position1,
                    // image: item?.position2,
                    // description: item?.position6,
                    // button: item?.position10,
                  },
                }}
              />
            )
          })}
          <span className="w-1/2 text-white pt-4">
            Хэрэглэгч та бизнесийн олон төрлийн үйлчилгээг дижитал хэлбэрээр
            хялбар авах боломжтой бөгөөд цахим шилжилт хийсэн бизнесүүдийн
            үйлчилгээний сангаас сонголтоо хийн үйлчлүүлнэ үү.
          </span>
          <span>
            <Rate
              allowHalf
              defaultValue={3.2}
              disabled
              className="text-sm mt-4"
              style={{ color: '#FFBB00' }}
            />
            <span className="text-white pl-2"> (4.1) 89</span>
          </span>
          <span className=" mb-0 text-white opacity-80 mt-4 flex">
            <span>
              Сүүлийн шинэчлэл: 2022.03.10 |{' '}
              <i className="fa-light fa-flag-swallowtail  px-2"></i>
            </span>
            en / mn
          </span>
        </BlockDiv>
      )
    }
  }

  return (
    <>
      <BlockDiv customClassName="w-full " divNumber="div10">
        {renderType()}
      </BlockDiv>
    </>
  )
}
export default pageTitle
