import { useContext, useState, useEffect } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderAtom from '@components/common/Atom/RenderAtom'
import LandingPageDrawer from '@components/cloud/EcommerceUIKit/CTAs/LandingPageDrawer'

const ZohoHero1 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext)

  const [scrollY, setScrollY] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div
        className={`w-full lg:bg-transparent xs:bg-zoho-darkestBlue h-20 absolute top-0 ${
          scrollY > 60
            ? 'lg:bg-zoho-darkestBlue shadow-lg '
            : 'h-20 absolute top-0'
        }`}
      >
        {/* <img
					className="absolute w-full h-full z-0"
					src="https://i.ibb.co/m8jcyZR/Hero.png"
					/> */}
        <div className="max-w-lpcontainer mx-auto h-20">
          <div className="flex items-center justify-between  px-6 my-6">
            <div
              className="cursor-pointer flex items-center"
              onClick={() => (window.location.href = '/developer')}
            >
              <img
                src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1641530898/CitizenDeveloperLandingPage/AI_en2_1_fx1x9e.png"
                alt=""
                className="w-10 h-10"
              />
              <p className="text-white text-2xl font-roboto pl-3 pt-1 w-32 h-9 ">
                Developer
              </p>
            </div>
            <div className="lg:flex hidden">
              {readyDatasrc.map((item: any, index: number) => {
                return (
                  <li className="flex items-center" key={item?.id || index}>
                    <RenderAtom
                      item={item?.position1}
                      defaultAtom="title"
                      customClassName=" text-base  font-roboto  mr-2 ml-5 text-center text-white w-20 h-6 cursor-pointer hover:text-gray-300"
                    />

                    {/* <RenderAtom
									item={{
										value: "far fa-chevron-down",
									}}
									defaultAtom="icon"
									customClassName=""
									/> */}
                  </li>
                )
              })}
              <div className="relative ml-8 flex items-center ">
                {/* <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-8 ml-1 m-auto" /> */}
                {/* <img
										className="rounded-full h-10 w-10 object-cover"
										src="https://res.cloudinary.com/dzih5nqhg/image/upload/v1641530904/CitizenDeveloperLandingPage/Profile_3_rbyusu.jpg"
										/> */}
                <span className="text-center text-white text-base cursor-pointer">
                  {' '}
                  Нэвтрэх / Бүртгүүлэх{' '}
                </span>
                {/* <RenderAtom
									item={{ value: "far fa-chevron-down" }}
									defaultAtom="icon"
									customClassName="cursor-pointer text-base text-white focus:ring focus:ring-offset focus:ring-white ml-2"
									/> */}
              </div>

              <LandingPageDrawer toggle={toggle} setToggle={setToggle} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative ml-8 flex items-center ">
        <span
          className="absolute right-10 top-7 text-center text-white cursor-pointer text-base fa-solid fa-bars"
          onClick={() => setToggle(true)}
        >
          {' '}
        </span>
      </div>
    </div>
  )
}

export default ZohoHero1
