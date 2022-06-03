import { useContext, useState } from 'react'
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
import Item from 'antd/lib/list/Item'

const SocialPost = () => {
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
  const Item = readyDatasrc.slice(2, 3)
  const [active, setActive] = useState(0)
  return (
    <BlockDiv customClassName="w-full xs:mt-4 lg:mt-0">
      <BlockDiv customClassName="h-[275px]   rounded-md px-4 py-2 bg-white">
        <BlockDiv customClassName="flex w-full justify-between border-b border-gray-300 h-[55px]">
          {readyDatasrc?.slice(0, 2).map((item, index) => (
            <BlockDiv
              key={index}
              customClassName={`flex justify-center items-center w-1/2 cursor-pointer ${
                active === index && 'border-[#699BF7] border-b-4'
              }`}
              onClick={() => setActive(index)}
            >
              <RenderAtom
                item={item?.position49}
                defaultAtom="icon"
                customClassName={`text-black text-base  ${
                  active === index && 'text-[#699BF7]'
                }`}
              />
              <RenderAtom
                item={item?.position10}
                defaultAtom="text"
                customClassName={`text-black text-base font-medium ml-[10px] ${
                  active === index && 'text-[#699BF7]'
                }`}
              />
            </BlockDiv>
          ))}

          {/* <BlockDiv
            customClassName={`flex justify-center items-center w-1/2 cursor-pointer ${
              active === 1 && 'border-[#699BF7] border-b-4'
            }`}
            onClick={() => setActive(1)}
          >
            <RenderAtom
              item={{ value: 'fa-regular fa-list-ul' }}
              defaultAtom="icon"
              customClassName={`text-black text-base ${
                active === 1 && 'text-[#699BF7]'
              }`}
            />
            <RenderAtom
              item={{ value: 'Агуулга' }}
              defaultAtom="text"
              customClassName={`text-black text-base font-medium ml-[10px] ${
                active === 1 && 'text-[#699BF7]'
              }`}
            />
          </BlockDiv> */}
        </BlockDiv>
        <BlockDiv customClassName="flex h-[140px] justify-between border-b-2 border-gray-300 pt-[20px]">
          <RenderAtom
            item={Item[0]?.position2}
            defaultAtom="image"
            customClassName={'rounded-full w-10 h-10 mx-auto'}
          />
          {/* <RenderAtom
            item={{ value: 'Нийтлэл бичих...' }}
            defaultAtom="input"
            customClassName={
              'w-11/12 border-none bg-transparent align-text-top'
            }
          /> */}
          <textarea
            className="w-11/12 border-none bg-transparent text-base align-text-top placeholder:font-bold focus:border-none focus:outline-none focus:shadow-none focus:ring-0"
            placeholder="Нийтлэлээ бичнэ үү..."
          ></textarea>
        </BlockDiv>
        <BlockDiv customClassName="flex items-center justify-between h-16">
          <BlockDiv customClassName="lg:w-3/12 xs:w-3/5 flex items-center justify-between">
            {Item[0]?.speclist1?.map((item, index) => (
              <RenderAtom
                key={index}
                item={{ value: item?.icon }}
                defaultAtom="icon"
                customClassName={'text-xl font-bold cursor-pointer'}
                customStyle={{ color: `${item?.color}` }}
              />
            ))}
          </BlockDiv>
          <RenderAtom
            item={{ value: widgetnemgooReady?.button }}
            defaultAtom="button"
            customClassName={
              'w-[100px] h-10 bg-[#699BF7] rounded-lg text-white font-medium'
            }
          />
        </BlockDiv>
      </BlockDiv>
    </BlockDiv>
  )
}
export default SocialPost
