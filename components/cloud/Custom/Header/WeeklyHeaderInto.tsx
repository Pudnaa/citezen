import { useContext,useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
export default function WeeklyHeaderInto() {
    const {
        config,
        readyDatasrc,
        otherattr,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        Title,
        widgetAllaround
      } = useContext(WidgetWrapperContext);
    const [showMenu, setShowMenu] = useState(false);
    const [showMenuSm, setShowMenuSm] = useState(false);
    const [search, setSearch] = useState(false);
    if (isEmpty(readyDatasrc)) return null;
    // console.log("WeeklyHeaderInto config", config);
    // console.log("WeeklyHeaderInto readyDatasrc", readyDatasrc);
    // console.log("WeeklyHeaderInto otherattr", otherattr);
    // console.log("WeeklyHeaderInto positionConfig", positionConfig);

    return (
        <div className="dark:bg-gray-900">
            <div className="container mx-auto relative">
                <div className="py-4 md:py-5 lg:py-9 mx-4 md:mx-6">
                    <div className="flex items-center justify-between">
                        <div className="w-1/8  ml-10">
                         <AtomImage
                           item="https://www-cdn.bigcommerce.com/assets/logos/bc-logo-dark.svg?mtime=20160329000432"
                           customClassName=""
                        />
                        </div>
                        <div className="ml-10 mt-3 hidden w-7/12 lg:flex justify-center">
                            <ul className="flex items-center space-x-14">
                                <li className="flex items-center space-x-2">
                                    <a href="javascript:void(0)" className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                                        Solutions
                                    </a>
                                    <button aria-label="view options" className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                                        <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-3/12 flex items-center lg:justify-end space-x-6 lg:space-x-4 xl:space-x-6">
                            <div className="hidden md:flex items-center space-x-2">
                                <button className="bg-green-500">Request Demo</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
