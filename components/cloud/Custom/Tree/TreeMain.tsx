import { FC, useEffect, useState, useContext } from 'react'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import TreeItem from './TreeItem'
import { renderPositionType, prepareIsOpen } from 'util/helper'
import _ from 'lodash'
import { AtomIcon } from '@components/common/Atom'

type PropsType = {
  rawDatasrc?: any
  widgetnemgooReady?: any
  color?: string
  customClassName?: string
  customStyle?: any
  defaultSelectedId?: any
  indent?: number
  onClickItem?: any
}

const TreeMain: FC<PropsType> = ({
  color,
  rawDatasrc,
  customClassName,
  customStyle,
  defaultSelectedId,
  indent,
  onClickItem = () => null,
}) => {
  const {
    config,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)

  if (_.isEmpty(rawDatasrc)) return null

  const [selectedId, setSelectedId] = useState<any>(defaultSelectedId)
  const [readyDatasrc, setDatasrc] = useState<any>(
    prepareIsOpen(rawDatasrc, selectedId, positionConfig)[0] || [],
  )

  useEffect(() => {
    setDatasrc(prepareIsOpen(rawDatasrc, selectedId, positionConfig)[0] || [])
  }, [selectedId])

  const toggleIsOpen = (item: any, itemIndex: number) => {
    const tempArray = [...readyDatasrc]
    tempArray[itemIndex] = { ...item, isOpen: !item.isOpen }
    setDatasrc([...tempArray])

    return null
  }

  return (
    <ul className={`  ${customClassName} `} style={{ ...customStyle }}>
      {readyDatasrc.map((item: any, index: number) => {
        const selected =
          selectedId === renderPositionType(item, 'position0', positionConfig)
        return (
          <li
            key={item?.id || index}
            className={`relative   ${item.icon ? ' pl-0 ' : `pr-2`}`}
          >
            {item.icon && (
              // <img
              // 	src={`https://dev.veritech.mn/${item.icon}`}
              // 	alt="icon"
              // 	width="16"
              // 	height="14"
              // 	className="absolute left-0 top-2 z-10"
              // />
              <AtomIcon
                item={item.icon}
                color="weekly"
                customClassName="absolute left-0"
              />
            )}
            <TreeItem
              key={item?.id || index}
              item={item}
              positionConfig={positionConfig}
              color={color}
              customClassName={` hover:bg-gray-100 py-2 pl-6 pr-2 ${
                selected ? 'text-citizen-blue' : `text-citizen-blue`
              }`}
              selected={selected}
              itemIndex={index}
              onClickItem={(e: any) => {
                onClickItem(e)
              }}
              onArrowClickItem={(item: any, itemIndex: number) => {
                toggleIsOpen(item, itemIndex)
              }}
            />
            {!_.isEmpty(item?.children) && readyDatasrc[index].isOpen && (
              <span className="submenu">
                <TreeMain
                  // config={config}
                  color={color}
                  rawDatasrc={_.orderBy(item?.children, 'ordernumber')}
                  widgetnemgooReady={widgetnemgooReady}
                  customClassName={`ml-${indent}`}
                  defaultSelectedId={selectedId}
                  indent={indent}
                  onClickItem={onClickItem}
                />
              </span>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default TreeMain
