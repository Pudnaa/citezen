import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import _ from 'lodash'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { useRouter } from 'next/router'
import { Empty } from 'antd'
import BlockDiv from '@components/common/Block/BlockDiv'
import { Rate } from 'antd'
import Link from 'next/link'
import useSWR from 'swr'
export default function HelpKnowledgeListCard() {
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
  const router = useRouter()

  let dataCriteria = {
    filtercategoryid: [
      {
        operator: '=',
        operand: router.query?.id,
      },
    ],
  }

  const { data: dataList } = useSWR(
    `/api/get-data?metaid=1648538196853642&criteria=${JSON.stringify(
      dataCriteria,
    )}`,
  )
  delete dataList?.aggregatecolumns
  delete dataList?.paging
  const dataDatasrc = _.values(dataList)

  // console.log("🚀 ~ HelpKnowledgeListCard ~ dadataCriteriataSrc", dataCriteria);
  // console.log("🚀 ~ HelpKnowledgeListCard ~ dataSrc", widgetnemgooReady);

  const dataSrc = _.filter(readyDatasrc, ['filtercategoryid', router.query?.id])

  if (_.isEmpty(dataList))
    return (
      <Empty
        className="pt-40 border h-156 rounded-lg  mx-6"
        description="Үйлчилгээ алга"
      />
    )
  const onClickEvent = (e: any, item: any) => {
    e.preventDefault()
    router.push(`/help/category/detail?item=${item?.id}&id=${item?.categoryid}`)

    // item: item?.id,
    // id: item?.categoryid,
  }
  const item = readyDatasrc[0]
  return (
    <BlockDiv
      customClassName="h-full overflow-hidden border rounded-lg m-6 te"
      divNumber="HelpKnowledgeListCardOuter"
    >
      <BlockDiv
        customClassName="bg-yellow-100 bg-white flex flex-col divide-y divide-gray-200 divide-solid"
        divNumber="HelpKnowledgeListCardInner"
      >
        {dataDatasrc.map((item: any, index: number) => {
          return (
            <BlockDiv
              key={item?.id || index}
              customClassName="justify-between p-4 cursor-pointer hover:bg-gray-100 relative w-full"
              divNumber="HelpKnowledgeListCard-CardOuter"
              // onClick={(e: any) => onClickEvent(e, item)}
            >
              <BlockDiv
                customClassName="flex justify-between items-start mb-0"
                divNumber="HelpKnowledgeListCard-CardHeader1"
              >
                <RenderAtom
                  item={{
                    value: item?.title,
                  }}
                  defaultAtom="text"
                  customClassName="text-sm"
                  customStyle={{ color: '#67748E' }}
                />
                <RenderAtom
                  item={{ value: `${item?.seencnt} удаа` }}
                  defaultAtom="text"
                  customClassName="text-tiny text-citizen-description font-bold"
                />
              </BlockDiv>
              <BlockDiv
                customClassName="flex justify-between items-start"
                divNumber="HelpKnowledgeListCard-CardHeader2"
              >
                {/* <Link
                  href={`/help/category/detail?item=${item?.id}&id=${item?.categoryid}`}
                  as={`/help/category/detail?item=${item?.id}&id=${item?.categoryid}`}
                >
                  <a className="hover:text-blue-400 text-xl font-bold">
                    {item?.name}
                  </a>
                </Link> */}
                <RenderAtom
                  item={{
                    value: item?.name,
                    positionnemgoo: {
                      url: {
                        path: '/category/detail',
                        query: {
                          item: item?.id,
                          id: item?.categoryid,
                        },
                        props: {
                          shallow: true,
                          // as={`/help/category/detail?item=${item?.id}&id=${item?.categoryid}`}
                        },
                      },
                    },
                  }}
                  defaultAtom="title"
                  customClassName="text-xl font-bold hover:text-blue-400"
                />

                {/* <RenderAtom
									item={{ value: item?.starval }}
									defaultAtom="text"
									customClassName="text-md text-yellow-700 font-bold block"
								/> */}
                {/* <button
									className="block pr-6 rounded-full bg-gender-main_blue h-9 w-32"
									type="submit"
								>
									<div className="flex items-center">
										<div className="fa-light fa-pen text-white text-center">
											<span className="text-white pl-2">Постлох</span>
										</div>
									</div>
								</button> */}
                <Rate
                  allowHalf
                  disabled
                  defaultValue={item?.starval}
                  style={{ color: '#FFBB00' }}
                  className="text-sm"
                />
              </BlockDiv>

              <BlockDiv
                customClassName="flex justify-between items-start my-4"
                divNumber="HelpKnowledgeListCard-CardBody"
              >
                <RenderAtom
                  item={{
                    value: item?.description,
                    // positionnemgoo:
                    // 	positionConfig?.position1?.positionnemgooReady,
                  }}
                  defaultAtom="text"
                  customClassName="text-tiny text-citizen-description"
                  divNamePrefix="desc"
                />
              </BlockDiv>

              <BlockDiv
                customClassName="flex"
                divNumber="HelpKnowledgeListCard-CardFooter "
              >
                {tagList.map((item: any, index: number) => {
                  return (
                    <RenderAtom
                      key={item?.id || index}
                      item={{ value: item.title }}
                      defaultAtom="text"
                      customClassName="border border-help py-1 px-3 rounded-full text-help mr-2 hover:opacity-95"
                      divNamePrefix="tag"
                    />
                  )
                })}
              </BlockDiv>

              {/* <Grid3Item item={item} /> */}
            </BlockDiv>
          )
        })}
      </BlockDiv>
    </BlockDiv>
  )
}

const tagList = [
  {
    title: 'Банк санхүү',
  },
  {
    title: 'Худалдаа үйлчилгээ',
  },
  {
    title: 'Хөдөлмөр эрхлэлт',
  },
]
