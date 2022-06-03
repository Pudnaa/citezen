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
  AtomImage,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import Render from '@middleware/meta/layout/render'

const LandingPageCta5 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext)

  // console.log("LandingPageCta config", config);
  // console.log("LandingPageCta readyDatasrc", readyDatasrc);
  // console.log("LandingPageCta widgetnemgooReady", widgetnemgooReady);
  // console.log("LandingPageCta positionConfig", positionConfig);
  const item = readyDatasrc[0]
  const backgroundImage =
    'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652317938/ZOHO%20landing/Rectangle_29_ypwd5u.png'
  return (
    <div
      className="w-full h-[650px] lg:px-0 xs:px-4"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="max-w-lpcontainer mx-auto flex w-full justify-between h-full">
        <div className="w-1/2 lg:flex  xs:hidden flex-col-reverse h-full justify-start">
          <RenderAtom
            item={{
              value:
                'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652317939/ZOHO%20landing/image_175_nqtqfh.png',
            }}
            defaultAtom="image"
            customClassName={'w-[537px] h-[570px]'}
          />
        </div>
        <div className="lg:w-1/2 xs:w-full flex flex-col-reverse justify-start pb-[60px]">
          <div className="flex flex-col h-[570px] justify-evenly">
            <h1 className="text-white text-[44px] font-bold">
              Харилцагчын <span className="text-[#009BDE]">сэтгэгдэл</span>
            </h1>
            <RenderAtom
              item={{
                value:
                  'https://res.cloudinary.com/dzih5nqhg/image/upload/v1652404575/ZOHO%20landing/Next_Electronics_2_rllffx.png',
              }}
              defaultAtom="image"
              customClassName={'w-[100px] h-[49px]'}
            />
            <RenderAtom
              item={{
                value:
                  'Veritech ERP системийг нэвтрүүлснээр манай байгууллагын санхүүгийн мэдээлэл боловсруулалт шуурхай болж, төв орон нутгийн 20 гаруй салбар байгууллагуудын бүх гүйлгээг хянаж, бүх тайланг ямар ч цаг хугацаанд харах боломж бүрдсэн. Мөн үйл ажиллагааны орлого, зардлын төсөв болон гүйцэтгэлийн харьцуулалтыг автоматжуулж, төсвийн хэтрэлт, хэмнэлтийн талаарх мэдээллийг удирдлагад шуурхай гаргах боломж бүрдсэн.',
              }}
              defaultAtom="text"
              customClassName={'text-[18px] text-white'}
            />
            <div className="flex justify-between w-full">
              <div>
                <RenderAtom
                  item={{ value: 'Л. Чулуунболд' }}
                  defaultAtom="title"
                  customClassName={'text-[18px] text-white '}
                />
                <RenderAtom
                  item={{
                    value:
                      '“Некст Групп” ХХК-ийн Үүсгэн байгуулагч Ерөнхий захирал,',
                  }}
                  defaultAtom="text"
                  customClassName={' text-[18px] text-white'}
                />
              </div>
              <div className="flex justify-evenly w-1/2">
                <div className="w-[50px] h-[50px] rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                  <i className="fa-solid fa-arrow-left text-white"></i>
                </div>
                <div className="w-[50px] h-[50px] rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                  <i className="fa-solid fa-arrow-right text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPageCta5
