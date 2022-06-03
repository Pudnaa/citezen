import { useContext, useRef, useState, FC } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Link from 'next/link'
import Image from 'next/image'
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderMolecule from '@molecule/RenderMolecule'
import WidgetWithId from 'middleware/components/WidgetStandart/WidgetWithId'
import { parentidToChildren } from 'util/helper'
import useSWR from 'swr'
import { Empty } from 'antd'
import _ from 'lodash'
import { useRouter } from 'next/router'

import { useSession } from 'next-auth/react'
const knowLedgeSingle = () => {
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
  const [show, setShow] = useState(true)
  const [menu, setMenu] = useState(false)
  const [comment, setComment] = useState(false)
  const relatedknowledge = _.values(readyDatasrc[0]?.relatedknowledge)
  const parentItem = router.query?.item

  // console.log("knowLedgeSingle", readyDatasrc);

  return (
    <>
      <BlockDiv customClassName="w-full " divNumber="div10">
        <BlockDiv
          customClassName={`grid grid-cols-12 gap-2`}
          divNumber="divGridNumber"
        >
          <BlockDiv
            customClassName={`col-span-9 px-6 py-6   min-h-screen `}
            divNumber="divGridMain"
          >
            {readyDatasrc.map((item: any, index: number) => {
              return (
                <RenderMolecule
                  key={item?.id || index}
                  moleculeConfig={widgetnemgooReady?.children?.[0]}
                  {...{
                    item: {
                      title: item?.position1,
                      image: item?.position2,
                      description: item?.position3,
                      button: item?.position10,
                    },
                  }}
                />
              )
            })}
          </BlockDiv>
          <BlockDiv
            customClassName={`col-span-3 p-3`}
            divNumber="divGridMainSub"
          >
            <>
              <div
                className="cursor-pointer flex pt-4 items-center justify-between "
                onClick={() => setMenu((prev) => !prev)}
              >
                <RenderAtom
                  item={{ value: 'Холбоотой' }}
                  defaultAtom="text"
                  customClassName="text-lg text-citizen-title  font-semibold"
                />
                {menu == true ? (
                  <i className="fa-solid fa-chevron-up"></i>
                ) : (
                  <i className="fa-solid fa-chevron-up"></i>
                )}
              </div>
              {menu == true && (
                <>
                  {relatedknowledge.map((menu: any, index: number) => {
                    console.log('knowLedgeSingle menu', menu)
                    return (
                      <li
                        key={index}
                        className="py-1 list-none my-2 px-2 cursor-pointer border-transparent border-l hover:border-blue-500 rounded-none"
                      >
                        <Link
                          href={`/category/detail?item=${parentItem}&id=${menu.trgknowledgeid}`}
                          shallow={true}
                        >
                          <a className="hover:text-blue-400">
                            {menu.knowledgename}
                          </a>
                        </Link>
                      </li>
                    )
                  })}
                </>
              )}
            </>
            <>
              <div
                className="cursor-pointer flex pt-2 items-center justify-between "
                onClick={() => setShow((prev) => !prev)}
              >
                <RenderAtom
                  item={{ value: 'Хавсралт' }}
                  defaultAtom="text"
                  customClassName="text-lg text-citizen-title  font-semibold "
                />
                {show == true ? (
                  <i className="fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-solid fa-chevron-up"></i>
                )}
              </div>
              {show == true && (
                <>
                  <WidgetWithId widgetId="164922291319910" />
                </>
              )}
            </>
            <>
              <div
                className="cursor-pointer flex pt-2 items-center justify-between "
                onClick={() => setComment((prev) => !prev)}
              >
                <RenderAtom
                  item={{ value: 'Сэтгэгдэл' }}
                  defaultAtom="text"
                  customClassName="text-lg text-citizen-title  font-semibold "
                />
                {comment == true ? (
                  <i className="fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-solid fa-chevron-up"></i>
                )}
              </div>
              {comment && (
                <>
                  <WidgetWithId widgetId="	" />
                </>
              )}
            </>
            {/* <button onClick={copyToClipboard} className="cursor-pointer">
							Link хуулах
						</button>

						<input
							className="border-0 focus:outline-none bg-gray-100 text-gray-100"
							ref={textAreaRef}
							value={window.location.href}
						/> */}
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  )
}
export default knowLedgeSingle
