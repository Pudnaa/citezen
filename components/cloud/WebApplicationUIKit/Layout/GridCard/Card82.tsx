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
export default function Card82() {
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

  // console.log("Card82 config", config);
  // console.log('Card82 readyDatasrc', readyDatasrc)
  // console.log("Card82 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card82 positionConfig", positionConfig);
  return (
    <>
      {readyDatasrc?.map((item, index) => (
        <BlockDiv
          key={index}
          customClassName="rounded-xl overflow-hidden bg-white "
          divNumber={'DivCard'}
        >
          <BlockDiv customClassName="bg-white dark:bg-gray-800 rounded-t pb-2 px-6">
            <BlockDiv
              customClassName="flex items-start justify-between"
              divNumber={'DivHead'}
            >
              <BlockDiv customClassName="flex items-center">
                <BlockDiv customClassName="w-12 relative">
                  {/* <img className="w-12" src="https://i.ibb.co/WnVgd7B/DP.png" /> */}
                  <RenderAtom
                    item={{ value: 'https://i.ibb.co/WnVgd7B/DP.png' }}
                    defaultAtom="image"
                    customClassName={'w-12'}
                  />
                </BlockDiv>
                <BlockDiv customClassName="ml-4" divNumber={'DivMember'}>
                  {/* <p className="sm:text-lg text-base font-semibold leading-4 text-gray-800 dark:text-gray-100">
                  Tolu Arowoselu
                </p>
                <p className="sm:text-base text-sm leading-6  text-gray-500 dark:text-gray-400">
                  2 hours ago
                </p> */}
                  <RenderAtom
                    item={{ value: item?.name }}
                    defaultAtom="text"
                    customClassName={
                      'sm:text-lg text-base font-semibold leading-4 text-gray-800 dark:text-gray-100'
                    }
                  />
                  <RenderAtom
                    item={{ value: '2 цагийн өмнө' }}
                    defaultAtom="text"
                    customClassName={
                      'sm:text-base text-sm leading-6  text-gray-500 dark:text-gray-400'
                    }
                  />
                </BlockDiv>
              </BlockDiv>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx={5} cy={12} r={1} />
                <circle cx={12} cy={12} r={1} />
                <circle cx={19} cy={12} r={1} />
              </svg>
            </BlockDiv>
            {/* <p className="mt-6 mb-4 text-base leading-5 text-gray-800 dark:text-gray-100 w-11/12">
            Got quarantined at the vet and had to give Billy a little peptalk
            that the other dogs do wanna be his friend, he’s just can’t wait to
            play with them
            <br />
            <span className="font-bold ">#billy #pets #dogs</span>
          </p> */}

            <RenderAtom
              item={item?.position40}
              defaultAtom="title"
              customClassName={
                'mt-4 mb-2 text-base leading-5 text-gray-800 dark:text-gray-100 w-11/12'
              }
            />
            <RenderAtom
              item={item?.position3}
              defaultAtom="text"
              customClassName={''}
            />
          </BlockDiv>
          {/* <img
          className="w-full"
          src="https://i.ibb.co/XSch7BW/adorable-dog.png"
        /> */}
          {item?.type === 'post' ? (
            <RenderAtom
              item={item?.position2}
              defaultAtom="image"
              customClassName={'w-full lg:h-[434px] xs:h-[200px]'}
            />
          ) : (
            <BlockDiv customClassName="bg-white rounded-lg p-4 border border-black/20 m-4">
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName={'text-[#585858]'}
              />
              <RenderAtom
                item={{ value: item?.description1 }}
                defaultAtom="text"
                customClassName={'opacity-30'}
              />
              {item?.speclist1.map((item: any, index) => (
                <BlockDiv key={index} customClassName="flex items-center py-3">
                  <div className="w-[30px] h-[30px] rounded-full border border-black/50" />
                  <RenderAtom
                    item={{ value: item }}
                    defaultAtom="text"
                    customClassName={'pl-3 font-semibold text-[#585858]'}
                  />
                </BlockDiv>
              ))}
              <BlockDiv customClassName="flex mt-7">
                <RenderAtom
                  item={{ value: item?.button1 }}
                  defaultAtom="button"
                  customClassName={
                    'py-3 px-3 bg-[#699BF7] text-white rounded-lg mx-5 font-medium'
                  }
                />
                <RenderAtom
                  item={{ value: item?.button2 }}
                  defaultAtom="button"
                  customClassName={
                    'py-3 px-3 border border-black/20 rounded-lg text-black font-medium'
                  }
                />
              </BlockDiv>
            </BlockDiv>
          )}
          <BlockDiv customClassName="bg-white dark:bg-gray-800 rounded-b px-6 flex justify-between items-center ">
            <BlockDiv
              customClassName={`flex items-center h-[70px] border-b-2 border-[#E1E1E1] w-full ${
                item?.type === 'question' && 'border-none'
              }`}
            >
              <BlockDiv customClassName="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-heart"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </svg>
                <p className="ml-2 text-lg leading-4 text-gray-500 dark:text-gray-400">
                  91
                </p>
              </BlockDiv>
              <BlockDiv customClassName="ml-4 sm:ml-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-message-dots"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                  <line x1={12} y1={11} x2={12} y2="11.01" />
                  <line x1={8} y1={11} x2={8} y2="11.01" />
                  <line x1={16} y1={11} x2={16} y2="11.01" />
                </svg>
                <p className="ml-2 text-lg leading-4 text-gray-500 dark:text-gray-400">
                  14
                </p>
              </BlockDiv>
              <BlockDiv customClassName="ml-4 sm:ml-8 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-share"
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <circle cx={6} cy={12} r={3} />
                  <circle cx={18} cy={6} r={3} />
                  <circle cx={18} cy={18} r={3} />
                  <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                  <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                </svg>
              </BlockDiv>
            </BlockDiv>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 sm:w-auto cursor-pointer text-gray-600 dark:text-gray-400 icon icon-tabler icon-tabler-star"
              width={25}
              height={25}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
            </svg>
          </BlockDiv>
          <BlockDiv
            customClassName={`h-[80px] bg-white flex justify-around items-start px-5 pt-5 mb-5 ${
              item?.type === 'question' && 'hidden'
            }`}
            divNumber={'DivInput'}
          >
            <RenderAtom
              item={{
                value:
                  'https://res.cloudinary.com/dzih5nqhg/image/upload/v1653547124/cloud/item/Profile_3_tqc231.jpg',
              }}
              defaultAtom="image"
              customClassName={'w-9 h-9'}
            />
            <RenderAtom
              item={{ value: 'сэтгэгдэл үлдээх' }}
              defaultAtom="input"
              customClassName={'rounded-2xl bg-[#F5F5F5] ml-[12px] border-none'}
            />
          </BlockDiv>
        </BlockDiv>
      ))}
    </>
  )
}
