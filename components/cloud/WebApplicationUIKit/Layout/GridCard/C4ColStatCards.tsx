import { useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { StateCardItem } from '@components/cloud/Custom/Card'
import { isEmpty } from 'lodash'

const C4ColStatCards = () => {
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

  // console.log("C4ColStatCards config", config);
  // console.log("C4ColStatCards readyDatasrc", readyDatasrc);
  // console.log("C4ColStatCards widgetnemgooReady", widgetnemgooReady);
  // console.log("C4ColStatCards positionConfig", positionConfig);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6 pb-2 ${widgetnemgooReady.className}`}
      style={{ ...widgetnemgooReady.style }}
    >
      {readyDatasrc.map((item: any, index: any) => (
        <StateCardItem key={item?.id || index} item={item} />
      ))}
    </div>
  )
}

export default C4ColStatCards
