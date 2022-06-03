import { useContext, useState, FC } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import BlockDiv from '@components/common/Block/BlockDiv'
import { isEmpty } from 'lodash'
import Link from 'next/link'
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from 'util/helper'
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomImage,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { BlockList } from 'net'
import Item from 'antd/lib/list/Item'
import { Drawer } from 'antd'

type PropsType = {
  toggle?: boolean
  setToggle?: any
}

const LandingPageDrawer: FC<PropsType> = ({ toggle, setToggle }) => {
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

  return (
    <>
      <Drawer
        placement="right"
        visible={toggle}
        mask={true}
        width={window.innerWidth > 500 ? 300 : '100%'}
        // width="100%"
        closable={true}
        closeIcon=""
        onClose={() => {
          setToggle(false)
        }}
      >
        <div className="w-full h-full relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
              <RenderAtom
                item={{
                  value:
                    'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652768701/Zoho%20landing/AI_en2_1_w9gfwn.png',
                }}
                defaultAtom="image"
                customClassName={'w-[32px] h-[32px]'}
              />
              <RenderAtom
                item={{ value: 'Developer' }}
                defaultAtom="title"
                customClassName={'ml-2'}
              />
            </div>
            <i
              className="fa-solid fa-x cursor-pointer"
              onClick={() => setToggle(false)}
            ></i>
          </div>
          <div className="mt-[100px]">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-full flex justify-between items-center py-3 opacity-50 cursor-pointer"
              >
                <RenderAtom
                  item={{ value: item }}
                  defaultAtom="title"
                  customClassName={'text-lg'}
                />
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            ))}
          </div>
          <div className="absolute bottom-10 right-0 h-[173px] w-full border-t-4 border-[#009BDE] flex flex-col justify-around">
            <RenderAtom
              item={{ value: 'Ажлын байр' }}
              defaultAtom="title"
              customClassName={'cursor-pointer text-lg'}
            />
            <RenderAtom
              item={{ value: 'Тендер' }}
              defaultAtom="title"
              customClassName={'cursor-pointer text-lg'}
            />
            <RenderAtom
              item={{ value: 'Холбоо барих ' }}
              defaultAtom="title"
              customClassName={'cursor-pointer text-lg'}
            />
          </div>
        </div>
      </Drawer>
    </>
  )
}
export default LandingPageDrawer

const data = ['Платформ', 'Нээлттэй ажлын байрууд', 'Шийдэл', 'Олон нийт']
