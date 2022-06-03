import { useContext, useState } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import BlockDiv from '@components/common/Block/BlockDiv'
import { isEmpty } from 'lodash'
import Link from 'next/link'
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
  AtomImage,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { BlockList } from 'net'
import Item from 'antd/lib/list/Item'
import LandingPageDrawer from './LandingPageDrawer'

const LandingPage = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)

  // console.log("WeeklyLandingCtaIII config", config);
  // console.log("WeeklyLandingCtaIII readyDatasrc", readyDatasrc);
  // console.log("WeeklyLandingCtaIII widgetnemgooReady", widgetnemgooReady);
  // console.log("WeeklyLandingCtaIII positionConfig", positionConfig);
  const item = readyDatasrc[0] //eswel readyDatasrc[0]
  const [toggle, setToggle] = useState(false)
  // const backgroundImage= "https://res.cloudinary.com/dzih5nqhg/image/upload/v1652665107/Zoho%20landing/Rectangle_3_dxwfuc.png";
  return (
    <>
      <BlockDiv
        customClassName="w-full lg:h-[800px] xs:h-[700px] bg-no-repeat bg-cover lg:pt-0 xs:pt-24 lg:px-0 xs:px-4"
        customStyle={{ backgroundImage: `url('${item?.mainimage}')` }}
      >
        {/* <div className="relative w-full lg:px-[195px] xs:px-0 pt-[25px] flex justify-between">
            <img src={logo} alt="1" className="w-50 h-10"></img>
            <div className="justify-between lg:flex xs:hidden items-center">
              {menu.map((item, index) => (
                <div key={index} className="flex items-center justify-between pr-[30px]">
                <RenderAtom 
                item={{value:item}}
                defaultAtom="button"
                customClassName={"text-white py-0 px-0"}
                />
                <i className="fa-solid fa-angle-down text-white pl-4"></i>
                </div>
              ))}
              <i className="fa-light fa-user text-white" ></i>
            </div>
            <RenderAtom 
            item={{value:"fa-solid fa-bars"}}
            defaultAtom="icon"
            customClassName={"absolute top-[40px] right-[32px] fa-xl text-white cursor-pointer"}
            onClick={() => setToggle(true)}
            />
        </div> */}
        <div className="max-w-lpcontainer mx-auto flex my-auto items-center justify-between lg:mt-0 xs:mt-14">
          <div className="flex flex-col h-full justify-between">
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName={'lg:text-5xl xs:text-3xl font-bold  text-white'}
            />
            <RenderAtom
              item={item?.position3}
              defaultAtom="text"
              customClassName={'text-white text-lg pt-[30px] pb-[80px]'}
            />
            <RenderAtom
              item={item?.position45}
              defaultAtom="button"
              customClassName={
                'bg-white text-[#4334D7] font-bold w-[150px] h-[50px] rounded'
              }
            />
          </div>
          <RenderAtom
            item={{
              value:
                'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652665106/Zoho%20landing/image_179_nrgq1c.png',
            }}
            defaultAtom="image"
            customClassName={'mt-[70px] lg:block xs:hidden'}
          />
        </div>
        <div className="max-w-lpcontainer bg-white mx-auto lg:h-[195px] xs:hidden lg:block xs:h-auto shadow-xl">
          <RenderAtom
            item={{ value: 'Манай платформыг ашигладаг шилдэг компаниуд' }}
            defaultAtom="title"
            customClassName={'text-center text-xl py-[30px]'}
          />
          <div className="lg:flex-row xs:flex-wrap xs:hidden lg:flex w-full justify-around ">
            {item?.speclist1.map((item, index) => (
              <RenderAtom
                key={index}
                item={{ value: item.wallpaper }}
                defaultAtom="image"
                customClassName={'w-[142px] h-[50px] object-contain'}
              />
            ))}
          </div>
        </div>
        <LandingPageDrawer toggle={toggle} setToggle={setToggle} />
      </BlockDiv>
    </>
  )
}
export default LandingPage

const menu = [
  'Платформ',
  'Шийдэл',
  'Салбар',
  'Бүтээгдэхүүн',
  'Олон нийт',
  'Нөөц',
  'Компани',
]
