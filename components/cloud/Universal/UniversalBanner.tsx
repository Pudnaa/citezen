import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import RenderMolecule from '@molecule/RenderMolecule'

export default function UniversalBanner() {
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

  // console.log("readyDatasrc", readyDatasrc);

  return (
    <>
      {readyDatasrc.map((item: any, index: number) => {
        return (
          <RenderMolecule
            key={item?.id || index}
            moleculeConfig={{
              type: 'MoleculeBanner',
              className: widgetnemgooReady?.className,
              style: widgetnemgooReady?.style,
              props: widgetnemgooReady?.props,
            }}
            {...{
              item: {
                title: item?.position1,
                image: item?.position2,
                description: item?.position3,
                button: item?.position10,
              },
            }}
          />
        )
      })}
    </>
  )
}
