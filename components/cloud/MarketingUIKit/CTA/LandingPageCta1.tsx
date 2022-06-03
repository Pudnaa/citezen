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
function LandingPageCta1() {
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

  const item = readyDatasrc[0]
  return (
    <section className="max-w-lpcontainer  mx-auto bg-gray-200">
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col justify-center w-full md:w-1/2 px-4 md:pr-12">
          <div className="pl-4">
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName="text-xl  xl:text-4xl font-bold lg:leading-tight text-gray-800 "
            />
            <RenderAtom
              item={item?.position3}
              defaultAtom="text"
              customClassName="text-xl  font-roboto  xl:text-xl text-gray-800 xl:leading-normal pt-4"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 md:px-2 lg:px-28 py-10 flex items-center">
          <RenderAtom
            item={item?.position2}
            defaultAtom="image"
            customClassName=""
          />
        </div>
      </div>
    </section>
  )
}

export default LandingPageCta1
