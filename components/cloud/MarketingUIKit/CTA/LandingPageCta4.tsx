import { useContext, useState, useRef, useEffect, FC } from 'react'
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
function LandingPageCta4() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext)

  const item = readyDatasrc[0]
  return (
    <div className="lg:max-w-lpcontainer xs:w-full mx-auto flex items-center flex-col justify-evenly lg:py-[100px] lg:px-[90px] xs:py-10 xs:px-4">
      <h1 className="xs:text-4xl lg:text-[44px] text-[#2C2C51] font-bold ">
        Бидэнтэй<span className="text-[#009BDE]"> нэгдээрэй</span>
      </h1>
      <RenderAtom
        item={item?.position3}
        defaultAtom="text"
        customClassName={'text-[#7B7B93] text-[18px] text-center opacity-50'}
      />
      <div className="lg:w-[850px] xs:w-full h-[60px] flex mt-[80px]">
        <RenderAtom
          item={{ value: 'Таны и-мэйл хаяг' }}
          defaultAtom="input"
          customClassName={'h-full rounded-l-lg border-[#E1E1E1]'}
        />
        <RenderAtom
          item={item?.position10}
          defaultAtom="button"
          customClassName={'text-white bg-[#009BDE] rounded-r-lg'}
        />
      </div>
    </div>
  )
}

export default LandingPageCta4

type PropsTypeItem = {
  data: any
}

const ItemCount: FC<PropsTypeItem> = ({ data }) => {
  const countNumber = data.number
  const [count, setCount] = useState(0)
  const ref = useRef(0)
  const accumlator = countNumber / 10000

  const updateCount = () => {
    if (ref.current < countNumber) {
      const result = Math.ceil(ref.current + accumlator)
      if (result > countNumber) return setCount(countNumber)
      setCount(result)
      ref.current = result
    }
    setTimeout(updateCount, 50)
  }

  useEffect(() => {
    updateCount()
  }, [countNumber])

  return (
    <div className="xs:text-center">
      <h1 className="lg:text-[46px] xs:text-xl text-[#2C2C51]">{count}</h1>
      <RenderAtom
        item={{ value: data.text }}
        defaultAtom="text"
        customClassName={'text-[24px] text-[#7B7B93]'}
      />
    </div>
  )
}
