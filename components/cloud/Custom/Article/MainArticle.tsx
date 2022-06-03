import { useContext, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { decode } from 'html-entities'
import parseHtml from 'html-react-parser'
import { CopyBlock, dracula } from 'react-code-blocks'
import { Modal } from 'antd'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'

import _ from 'lodash'
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from '@components/common/Atom'
import TreeMain from '@components/cloud/Custom/Tree/TreeMain'
import { useCloud } from 'hooks/use-cloud'

export default function MainArticle() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    widgetnemgooReady,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)
  const router = useRouter()
  const cloudContext = useCloud()
  // const metaName = "metaDo";
  const metaName = cloudContext.metaConstant.ourMetaConstant.metaName
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || 'id'],
  )
  const [copySuccess, setCopySuccess] = useState('')
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('')
  const textAreaRef: any = useRef(null)
  // console.log("  config,", config);
  // console.log("  readyDatasrc,", readyDatasrc);
  const data = readyDatasrc
  // const parameters = `&parameters=${JSON.stringify({
  //   id: selectedId,
  // })}`;

  // const { data } = useSWR(
  //   `/api/get-process?processcode=portalKnowledge_004${parameters}&metaName=${metaName}`,
  // );
  const showModal = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setVisible(false)
  }

  if (readyDatasrc) {
    const kmdtl = _.values(readyDatasrc[0].kmdtl)
    const kmdtlnav = _.values(readyDatasrc[0].kmdtl)
    // console.log("detakmdtlnavil", kmdtlnav);
    // const parser = new DOMParser();
    if (kmdtlnav) {
    }
    function copyToClipboard(e: any) {
      textAreaRef.current.select()
      document.execCommand('copy')
      e.target.focus()
      setCopySuccess('хуулагдав!')
    }

    return (
      <div className="px-10 pb-8 min-h-screen  relative">
        <div className="grid grid-cols-12 gap-6 w-full ">
          <div className="col-span-9  pb-8">
            {/* <div className='max-h-screen mt-6 overflow-y-auto  scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full'> */}
            <div className=" ">
              <div className="border-b  w-full border-gray-300 bg-gray-100   py-2">
                <h1 className="text-gray-800 font-semibold  text-4xl pb-2">
                  {parseHtml(decode(data.name))}
                </h1>
              </div>
              {kmdtl.map((item: any, index: number) => {
                switch (item.typeid) {
                  case '2':
                    return (
                      <div className="pt-4 text-base">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        {parseHtml(decode(item.description))}
                      </div>
                    )
                  case '3':
                    return (
                      <div className="pt-4 text-base">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        {parseHtml(decode(item.description))}
                      </div>
                    )
                  case '4':
                    return (
                      <div>
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <div className="flex items-center justify-center px-4 lg:px-0 py-4  ">
                          <div
                            id="alert"
                            className="transition duration-150 ease-in-out w-full mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded  border-l-4 border-yellow-600 "
                          >
                            <div className="sm:flex sm:items-start lg:items-center py-4">
                              <div className="flex items-end">
                                <div className="mr-2 text-yellow-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={30}
                                    height={30}
                                    fill="#D97706"
                                  >
                                    <path
                                      className="heroicon-ui"
                                      d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 pl-4 sm:pt-0 pb-2 sm:pb-0">
                                {parseHtml(decode(item.description))}
                              </p>
                            </div>
                            <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4"></div>
                          </div>
                        </div>
                        <style>
                          {`
                              .translate-show{
                                  transform : translateY(0%);
                              }
                              .translate-hide{
                                  transform : translateY(18vh);
                              }
                              `}
                        </style>
                      </div>
                    )
                  case '5':
                    return (
                      <div>
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <div className="flex items-center justify-center px-4 lg:px-0 py-4  ">
                          <div
                            id="alert"
                            className="transition w-full duration-150 ease-in-out  mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded  border-l-4 border-red-600 "
                          >
                            <div className="sm:flex sm:items-start lg:items-center py-4">
                              <div className="flex items-end">
                                <div className="mr-2 text-yellow-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={30}
                                    height={30}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#B91C1C"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-x"
                                  >
                                    <line x1={18} y1={6} x2={6} y2={18} />
                                    <line x1={6} y1={6} x2={18} y2={18} />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">
                                {parseHtml(decode(item.description))}
                              </p>
                            </div>
                          </div>
                        </div>
                        <style>
                          {`
                              .translate-show{
                                  transform : translateY(0%);
                              }
                              .translate-hide{
                                  transform : translateY(18vh);
                              }
                              `}
                        </style>
                      </div>
                    )
                  case '6':
                    return (
                      <div className="pt-4 text-base">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        {parseHtml(decode(item.description))}
                      </div>
                    )
                  case '7':
                    return (
                      <div className="py-8">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <img src={'https://dev.veritech.mn/' + item.picture} />
                      </div>
                    )
                  case '8':
                    return (
                      <div>
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <div className="flex items-center justify-center px-4 lg:px-0 py-4  ">
                          <div
                            id="alert"
                            className="transition duration-150 ease-in-out w-full mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded  border-l-4 border-blue-700 "
                          >
                            <div className="sm:flex sm:items-start lg:items-center py-4">
                              <div className="flex items-end">
                                <div className="mr-2 text-blue-400">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width={30}
                                    height={30}
                                    fill="#1D4ED8"
                                  >
                                    <path
                                      className="heroicon-ui"
                                      d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 pl-4 sm:pt-0 pb-2 sm:pb-0">
                                {parseHtml(decode(item.description))}
                              </p>
                            </div>
                            <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4"></div>
                          </div>
                        </div>
                        <style>
                          {`
                              .translate-show{
                                  transform : translateY(0%);
                              }
                              .translate-hide{
                                  transform : translateY(18vh);
                              }
                              `}
                        </style>
                      </div>
                    )
                  case '9':
                    // console.log("dddddddddd",html)
                    return (
                      <div className="language  my-4">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <CopyBlock
                          language="html"
                          text={decode(item.description)}
                          showLineNumbers="true"
                          theme={dracula}
                          wrapLines={false}
                          codeBlock
                        />
                      </div>
                    )
                  case '15':
                    return (
                      <div className="py-6">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <p className="mx-4 text-lg  text-center sm:text-left">
                          {' '}
                          {parseHtml(decode(item.description))}
                        </p>
                      </div>
                    )
                  case '16':
                    return (
                      <div className="py-6">
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <p className="mx-4 text-lg  text-center sm:text-left">
                          {' '}
                          {parseHtml(decode(item.description))}
                        </p>
                      </div>
                    )
                  case '17':
                    return (
                      <div>
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <p className="mx-4 text-lg  text-center sm:text-left">
                          {parseHtml(decode(item.description))}
                        </p>
                      </div>
                    )
                  case '18':
                    return (
                      <div>
                        {item.name && (
                          <h2
                            className="text-gray-700 pt-4  font-semibold text-2xl pb-2"
                            id={item.name}
                          >
                            {decode(item.name)}
                          </h2>
                        )}
                        <CopyBlock
                          language="html"
                          text={decode(item.description)}
                          showLineNumbers="true"
                          theme={dracula}
                          wrapLines={false}
                          codeBlock
                        />
                      </div>
                    )
                  default:
                    return (
                      <p className="pt-4">
                        {parseHtml(decode(item.description))} <br />
                      </p>
                    )
                    break
                }
              })}
            </div>
          </div>
          <div className="col-span-3 h-5/6 pt-6 ">
            <div className="border-l-2  border-gray-300 pl-3 fixed">
              <button onClick={copyToClipboard}>Link хуулах</button>
              <input
                className="border-0 focus:outline-none bg-gray-100 text-gray-100"
                ref={textAreaRef}
                value={window.location.href}
              />
              <ul className="mt-8 border-t-2  border-gray-300 pt-4">
                {kmdtl.map((e: any, index: number) => {
                  if (e.parentid != '') {
                    return (
                      <>
                        {e.name && (
                          <li
                            key={e?.id || index}
                            className="flex w-full justify-between text-gray-600 hover:text-gray-300  cursor-pointer items-center py-2 "
                          >
                            <a href={`#${e.name}`}> {decode(e.name)}</a>
                          </li>
                        )}
                      </>
                    )
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <></>
}
