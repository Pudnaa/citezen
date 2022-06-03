import { FC, useContext } from 'react'
import { overrideTailwindClasses } from 'tailwind-override'
import _ from 'lodash'
import RenderAtom from '@components/common/Atom/RenderAtom'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'

export default function sectionTitle() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    widgetAllaround,
    metaConfig,
    gridJsonConfig,
  } = useContext(WidgetWrapperContext)

  const data = readyDatasrc[0]
  return (
    <>
      <div
        className={`${
          widgetnemgooReady.customClassName || 'text-center w-full'
        }`}
      >
        <RenderAtom
          item={{ value: data?.name }}
          defaultAtom="title"
          customClassName={data?.titleClass || 'text-lg'}
          // customStyle={atomStyle}
        />
        <RenderAtom
          item={{ value: data?.subtitle }}
          defaultAtom="text"
          customClassName={data?.titleSubClass || 'text-sm'}
          // customStyle={atomStyle}
        />
      </div>
    </>
  )
}
