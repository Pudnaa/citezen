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
import LandingPageTeamItem from './LandingPageTeamItem'
import { Swiper, SwiperSlide } from 'swiper/react'
// import "swiper/css";
// import "swiper/css/pagination";

import { Pagination } from 'swiper'
import BlockDiv from '@components/common/Block/BlockDiv'
import Render from '@middleware/meta/layout/render'

function LandingPageTeam() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    widgetnemgooReady,
    pathConfig,
  } = useContext(WidgetWrapperContext)
  const [active, setActive] = useState()
  // console.log("LandingPageTeam config", config);
  // console.log("LandingPageTeam widgetnemgooReady", widgetnemgooReady);
  // console.log("LandingPageTeam positionConfig", positionConfig);
  const item = readyDatasrc[0]
  // const [style, setStyle] = useState({ display: "none" });
  return (
    <BlockDiv customClassName="w-full max-w-lpcontainer mx-auto relative text-center py-[100px] ls:px-0 xs:px-4">
      <RenderAtom
        item={item?.position1}
        defaultAtom="title"
        customClassName={'text-center lg:text-[44px] xs:text-3xl'}
      />
      <RenderAtom
        item={item?.position32}
        defaultAtom="text"
        customClassName={'text-[#7B7B93] text-lg w-[920px]'}
      />
      <div className="flex w-full justify-between items-center mt-[60px]  lg:flex-row xs:flex-col">
        {item?.speclist1?.map((item, index) => (
          <LandingPageTeamItem
            item={item}
            key={index}
            active={active}
            setActive={setActive}
            index={index}
          />
        ))}
      </div>
    </BlockDiv>
  )
}
export default LandingPageTeam
