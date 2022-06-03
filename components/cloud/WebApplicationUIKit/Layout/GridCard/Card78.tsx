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
export default function Card78() {
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

  // console.log("Card78 config", config);
  // console.log("Card78 readyDatasrc", readyDatasrc);
  // console.log("Card78 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card78 positionConfig", positionConfig);
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden">
        <img
          className="w-full"
          src="https://i.ibb.co/6P7MHP8/girl-on-a-car-trunk.png"
        />
        <div className="bg-white dark:bg-gray-800 rounded-b px-4 py-6 ">
          <div className="flex items-start justify-between">
            <p className="sm:text-base text-sm font-semibold leading-5 text-gray-800 dark:text-gray-100 w-4/5">
              Got my new Car today, hoping to get it to my parents home by
              myself
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mt-1 md:w-auto cursor-pointer text-gray-700 dark:text-gray-400 icon icon-tabler icon-tabler-dots-vertical"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx={12} cy={12} r={1} />
              <circle cx={12} cy={19} r={1} />
              <circle cx={12} cy={5} r={1} />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}
