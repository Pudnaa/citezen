import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { isEmpty } from 'lodash'
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
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Render from '@middleware/meta/layout/render'
import { text } from 'stream/consumers'
import { any } from 'core-js/fn/promise'

function LandingPageCta() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext)
  return (
    <section className="max-w-lpcontainer  mx-auto lg:mt-[200px] xs:mt-[100px] lg:px-0 xs:px-4">
      <div className="max-w-[920px] text-center mx-auto">
        <h1 className="lg:text-[44px] xs:text-3xl font-bold">
          Хэрхэн <span className="text-[#009BDE]"> хөгжүүлэгч</span> болох вэ?
        </h1>
        <RenderAtom
          item={{
            value:
              'Энэ эрин үед бизнес цэцэглэн хөгжихийн тулд технологийн түнш байх ёстой. Интерактив -ийн хувьд бидний цорын ганц эрхэм зорилго бол таны бизнесийг саадгүй дэмжих бүтээгдэхүүнээр хангах явдал юм.',
          }}
          defaultAtom="text"
          customClassName={'w-full lg:text-[18px] xs:text-xl opacity-50'}
        />
      </div>

      {readyDatasrc[0].speclist1.map((item: any, i: number) => {
        const media = (image: String) => {
          return (
            <div className="relative w-full md:w-1/2 px-6 py-10 lg:block xs:hidden">
              <RenderAtom
                item={{ value: image }}
                defaultAtom="image"
                customClassName={''}
              />
            </div>
          )
        }
        const content = (title: String, text: String, button: any) => {
          return (
            <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12 lg:py-0 xs:py-11">
              <div className="pl-4 flex flex-col justify-evenly h-4/5 ">
                <RenderAtom
                  item={{ value: title }}
                  defaultAtom="title"
                  customClassName={'text-[#2C2C51] lg:text-[44px] xs:text-3xl'}
                />
                <RenderAtom
                  item={{ value: text }}
                  defaultAtom="text"
                  customClassName={'text-lg text-[#7B7B93]'}
                />
                <button
                  className="px-10 p-3 rounded-lg  text-white mt-8 hover:bg-blue-400 w-[200px] cursor-pointer"
                  style={{ background: '#bfe6f6' }}
                >
                  <RenderAtom
                    item={{ value: button }}
                    defaultAtom="button"
                    customClassName={'text-[#009BDE] font-bold'}
                  />
                </button>
              </div>
            </div>
          )
        }
        const mixedContent = () => {
          if (i === 0) {
            return (
              <div className="flex flex-col md:flex-row justify-between">
                {media(item?.mainimage)}
                {content(item?.title, item?.description, item?.button)}
              </div>
            )
          } else if (i === 1) {
            return (
              <div className="flex flex-col md:flex-row  justify-between">
                {content(item?.title, item?.description, item?.button)}
                {media(item?.mainimage)}
              </div>
            )
          } else if (i === 2) {
            return (
              <div className="flex flex-col md:flex-row  justify-between">
                {media(item?.mainimage)}
                {content(item?.title, item?.description, item?.button)}
              </div>
            )
          }
        }
        return mixedContent()
      })}
    </section>
  )
}

export default LandingPageCta
