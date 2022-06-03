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
import RenderAtom from '@components/common/Atom/RenderAtom'
function LandingPageCta3() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    widgetnemgooReady,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext)
  const item = readyDatasrc
  console.log(item)
  return (
    <section className="max-w-lpcontainer mx-auto flex flex-col items-center lg:px-0 xs:px-4">
      <RenderAtom
        item={{ value: widgetnemgooReady?.title }}
        defaultAtom="title"
        customClassName={'lg:text-[44px] xs:text-3xl text-center'}
      />
      <RenderAtom
        item={{ value: widgetnemgooReady?.subtitle }}
        defaultAtom="text"
        customClassName={'text-[18px] text-center'}
      />
      <div className="lg:grid grid-cols-2 gap-4 py-[60px] xs:flex xs:flex-col">
        {item?.map((item, index) => (
          <div
            key={index}
            className="flex p-[40px] items-center justify-between shadow-lg"
          >
            <div className="lg:w-1/2 xs:w-4/5 h-[190px]">
              <RenderAtom
                item={{ value: item?.mainimage }}
                defaultAtom="image"
                customClassName={'lg:h-[190px] xs:h-auto float-center'}
              />
            </div>
            <div className="flex flex-col justify-around h-3/4 pl-6">
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName={'text-[28px]'}
              />
              <RenderAtom
                item={{ value: item?.text }}
                defaultAtom="text"
                customClassName={'text-[18px] text-[#7B7B93]'}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LandingPageCta3
