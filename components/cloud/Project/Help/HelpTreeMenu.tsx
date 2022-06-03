import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import WidgetWrapperContext from '@cloud/Custom/Wrapper/WidgetWrapper'
import { AtomImage } from '@components/common/Atom'
import { listToTree, prepareIsOpen } from 'util/helper'
import { Modal, Menu, Tooltip } from 'antd'
import _ from 'lodash'
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomSearch,
} from '@components/common/Atom'
import RenderAtom from '@components/common/Atom/RenderAtom'
import { decode } from 'html-entities'
import parseHtml from 'html-react-parser'
import TreeMain from '@components/cloud/Custom/Tree/TreeMain'
import { useCloud } from 'hooks/use-cloud'

export default function HelpTreeMenu() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext)
  const router = useRouter()
  const cloudContext = useCloud()
  const [selectedId, setSelectedId] = useState<any>(
    router.query?.[widgetnemgooReady?.listconfig?.fieldid || 'id'],
  )
  const [openKeys, setOpenKeys] = useState<any>()
  const [visible, setVisible] = useState(false)
  const [modalText, setModalText] = useState('')
  const onOpenChange = () => {
    setOpenKeys('')
  }

  const dataSrc = _.filter(readyDatasrc, ['parentid', router.query.item])

  // console.log("dataSrc tree main ", dataSrc);
  // console.log(
  // 	"onOpenChange onOpenChange onOpenChange router.query ",
  // 	readyDatasrc,
  // );

  if (_.isEmpty(readyDatasrc)) return null

  const { SubMenu } = Menu
  const showModal = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }
  const treeReadyDatasrc: any =
    prepareIsOpen(
      listToTree(readyDatasrc, {
        idKey: widgetnemgooReady?.listconfig?.fieldid || 'id',
        parentKey: widgetnemgooReady?.listconfig?.fieldparentid || 'parentid',
        childrenKey: 'children',
      }),
      selectedId,
      positionConfig,
    )[0] || []
  // cloud/Project/Help
  const [show, setShow] = useState(null)
  const handleClick = (item: any) => {
    cloudContext.buildCloudURL(item, widgetnemgooReady.link, true)
  }
  return (
    <>
      {/* <div className=' relative bg-gray-100'> */}
      <div className="h-max   pr-4  pt-4">
        <span className="py-6">
          <AtomSearch item={readyDatasrc} />
        </span>

        <div className="overflow-y-auto  h-5/6  scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full">
          <div className="w-full ">
            <TreeMain
              rawDatasrc={dataSrc}
              color="citizen-blue"
              customClassName="w-full "
              defaultSelectedId={selectedId}
              indent={5}
            />
          </div>
        </div>
      </div>
    </>
  )
}
