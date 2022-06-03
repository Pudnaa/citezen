import { useContext } from 'react'
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
import BlockDiv from '@components/common/Block/BlockDiv'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Render from '@middleware/meta/layout/render'

export default function Card22() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
    Title,
  } = useContext(WidgetWrapperContext)

  // console.log("Card22 config", config);
  // console.log('Card22 readyDatasrc', readyDatasrc);

  // console.log('Card22 widgetnemgooReady', widgetnemgooReady)
  // console.log("Card22 positionConfig", positionConfig);
  return (
    <>
      <BlockDiv customClassName="flex items-center justify-center ">
        <BlockDiv customClassName="bg-white dark:bg-gray-800 md:w-full rounded px-5 pt-4 pb-5 w-full shadow ">
          {/* <p customClassName="text-lg font-bold leading-none text-gray-800 dark:text-gray-100">
            Recent Chats
          </p> */}
          <BlockDiv customClassName="flex w-full justify-between items-center">
            <RenderAtom
              item={{ value: widgetnemgooReady?.title }}
              defaultAtom="title"
              customClassName={
                'font-bold leading-none text-gray-800 text-xl dark:text-gray-100 '
              }
            />
            <RenderAtom
              item={{ value: 'fa-solid fa-ellipsis' }}
              defaultAtom="icon"
              customClassName={'fa-xl cursor-pointer'}
            />
          </BlockDiv>
          <BlockDiv customClassName="my-4 w-full px-5 h-px bg-[#E1E1E1] " />
          {readyDatasrc?.map((item, index) => (
            <BlockDiv customClassName="mt-6 flex items-center" key={index}>
              {/* <img
              customClassName="w-10 h-10 rounded-full shadow"
              src="https://i.ibb.co/D1J3VjY/card-1.png"
              alt="profile"
            /> */}
              <RenderAtom
                item={item?.position2}
                defaultAtom="image"
                customClassName={'w-10 h-10 rounded-full shadow'}
              />
              <BlockDiv customClassName="flex justify-between w-full items-center">
                <BlockDiv customClassName="ml-2">
                  <BlockDiv customClassName="flex items-center">
                    {/* <p customClassName="text-sm font-medium leading-4 text-gray-800 dark:text-gray-100">
                    James Hart
                  </p> */}
                    <RenderAtom
                      item={item?.position40}
                      defaultAtom="text"
                      customClassName={
                        'text-sm font-medium leading-4 text-gray-800 dark:text-gray-100'
                      }
                    />
                    {/* <BlockDiv customClassName="w-1 h-1 bg-green-500 rounded-full ml-2" /> */}
                  </BlockDiv>
                  {/* <p customClassName="w-48 text-xs leading-3 text-gray-600 dark:text-gray-400 mt-1">
                  Let’s catchup sometime later?
                </p> */}
                  <RenderAtom
                    item={item?.position3}
                    defaultAtom="text"
                    customClassName={'text-[#A0A0A0]'}
                  />
                </BlockDiv>
                {/* <p customClassName="text-xs leading-4 text-right text-gray-600 dark:text-gray-400">
                  04:43 PM
                </p> */}
                {item?.check === true ? (
                  <RenderAtom
                    item={{ value: 'fa-light fa-circle-check' }}
                    defaultAtom="icon"
                    customClassName={
                      'fa-2xl flex items-center text-[#00A793] cursor-pointer'
                    }
                  />
                ) : (
                  <RenderAtom
                    item={{ value: 'fa-light fa-circle-plus' }}
                    defaultAtom="icon"
                    customClassName={'fa-2xl flex items-center cursor-pointer'}
                  />
                )}
              </BlockDiv>
            </BlockDiv>
          ))}
        </BlockDiv>
      </BlockDiv>
    </>
  )
}
