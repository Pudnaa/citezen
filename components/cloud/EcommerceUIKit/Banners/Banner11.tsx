import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderAtom from '@components/common/Atom/RenderAtom'
import _ from 'lodash'

const Banner4 = () => {
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

  const item = readyDatasrc[0]
  return (
    <>
      <div className="overflow-y-hidden w-full">
        <div
          className=" flex justify-center items-center md:justify-start w-full lg:h-[650px] bg-cover xs:h-[300px] object-cover xs:py-10 lg:py-0 xs:px-4 lg:px-0"
          style={{ backgroundImage: `url('${item?.mainimage}')` }}
        >
          {/* <img
						className="absolute left-0 top-0 md:block object-center object-fill w-full lg:h-[650px] md:h-full"
						src={item?.mainimage}
						alt="randeer"
					/> */}
          {/* <img className="hidden md:block object-center object-fill w-full h-48 md:h-full" src="https://i.ibb.co/gWn4wjZ/Rectangle-32-1.png" alt="Background-img" /> */}
          {/* <img
						className="md:block lg:hidden hidden  w-full "
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_ipad.png"
						alt="randeer"
					/>
					<img
						className="md:hidden w-full "
						src="https://tuk-cdn.s3.amazonaws.com/can-uploader/banner_11_mobile.png"
						alt="randeer"
					/> */}
          <div className="max-w-lpcontainer flex flex-col-reverse mx-auto h-full w-full">
            <div className="w-full flex flex-col lg:h-1/2 xs:h-full justify-evenly lg:mb-14 xs:mb-0">
              <RenderAtom
                item={item?.position1}
                defaultAtom="title"
                customClassName={
                  'lg:text-[60px] xs:text-xl font-semibold whitespace-normal lg:leading-[60px] xs:leading-normal'
                }
                customStyle={{ color: 'white' }}
              />
              <RenderAtom
                item={item?.position3}
                defaultAtom="text"
                customClassName={'text-white'}
              />
              <RenderAtom
                item={item?.position10}
                defaultAtom="button"
                customClassName={
                  'bg-white text-[#699BF7] w-[138px] rounded-md font-bold'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner4
