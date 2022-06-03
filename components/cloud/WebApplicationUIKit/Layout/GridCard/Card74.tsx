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
export default function Card74() {
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

  // console.log("Card74 config", config);
  // console.log("Card74 readyDatasrc", readyDatasrc);
  // console.log("Card74 widgetnemgooReady", widgetnemgooReady);
  // console.log("Card74 positionConfig", positionConfig);
  return (
    <>
      <BlockDiv
        customClassName="flex items-center justify-center h-full "
        divNumber={'DivCalendar'}
      >
        <BlockDiv customClassName="max-w-3xl  bg-white shadow-md  dark:bg-gray-800  rounded w-full">
          <BlockDiv customClassName="flex bg-[#699BF7] py-6 rounded-t-lg items-center justify-between px-10 sm:px-14 mb-7">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={15}
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M7.90137 1.42871L2 7.71443L7.90137 14.0001"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
            <p className="font-medium leading-6 text-center  text-white dark:text-gray-100">
              2020 оны 12 сар
            </p>
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={15}
              viewBox="0 0 9 15"
              fill="none"
            >
              <path
                d="M1 14L6.90137 7.71429L1 1.42857"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </BlockDiv>
          <BlockDiv customClassName=" overflow-x-scroll md:overflow-x-auto flex flex-col items-center">
            <table className="w-full ">
              <thead className="mb-4">
                <tr className="font-bold text-center">
                  <td className="px-3 pb-3">ДА</td>
                  <td className="px-3 pb-3">MЯ</td>
                  <td className="px-3 pb-3">ЛХ</td>
                  <td className="px-3 pb-3">ПҮ</td>
                  <td className="px-3 pb-3">Ба</td>
                  <td className="px-3 pb-3">БЯ</td>
                  <td className="px-3 pb-3">НЯ</td>
                </tr>
              </thead>
              <tbody>
                <tr className="font-medium  leading-normal text-center text-gray-800">
                  <td className="">1</td>
                  <td className=" bg-gradient-to-tl  rounded-bl-lg">2</td>
                  <td className=" bg-gradient-to-tr">3</td>
                  <td className=" bg-gradient-to-tl rounded-br-lg">4</td>
                  <td>5</td>
                  <td>6</td>
                  <td className="">7</td>
                </tr>
                <tr className="h-11" />
                <tr className="font-medium leading-normal text-center text-gray-800">
                  <td className="">8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>13</td>
                  <td className="">14</td>
                </tr>
                <tr className="h-11" />
                <tr className="font-medium leading-normal text-center text-gray-800">
                  <td className="">15</td>
                  <td>16</td>
                  <td className="bg-gradient-to-tr   rounded-bl-lg">17</td>
                  <td className="bg-gradient-to-tl  ">18</td>
                  <td className="bg-gradient-to-tr  ">19</td>
                  <td className="bg-gradient-to-tl  rounded-br-lg">20</td>
                  <td className="">21</td>
                </tr>
                <tr className="h-11" />
                <tr className="font-medium leading-normal text-center text-gray-800">
                  <td className="">22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                  <td>26</td>
                  <td>27</td>
                  <td className="">28</td>
                </tr>
                <tr className="h-11" />
                <tr className="font-medium leading-normal text-center text-gray-800">
                  <td className="">29</td>
                  <td>30</td>
                  <td className="text-gray-500 dark:text-gray-400">31</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <BlockDiv customClassName="h-px bg-[#E1E1E1] w-4/5 my-5"></BlockDiv>
            <BlockDiv customClassName="flex flex-col px-4 items-start w-full ">
              {data.map((item, index) => (
                <BlockDiv key={index} customClassName="mb-5 flex flex-col">
                  <RenderAtom
                    item={{ value: item.date }}
                    defaultAtom="text"
                    customClassName={'text-tiny text-[#A0A0A0]'}
                  />
                  <RenderAtom
                    item={{ value: item.text }}
                    defaultAtom="text"
                    customClassName={'text-base font-medium leading-5'}
                  />
                </BlockDiv>
              ))}
            </BlockDiv>
          </BlockDiv>
        </BlockDiv>
      </BlockDiv>
    </>
  )
}
const data = [
  {
    date: '8:00',
    text: 'Өглөөний цай',
  },
  {
    date: '11:00',
    text: 'Хоолны уулзалт',
  },
  {
    date: '13:00',
    text: 'Холбооны уулзалт',
  },
]
