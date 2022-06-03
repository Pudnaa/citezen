import { FC, useContext, useState } from "react";
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

type PropsType = {
  item?: any;
};
const NavigationVWeekly: FC<PropsType> = ({ item }) => {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);

  // console.log("NavigationVWeekly config", config);
  // console.log("NavigationVWeekly readyDatasrc", readyDatasrc);
  // console.log("NavigationVWeekly widgetnemgooReady", widgetnemgooReady);
  // console.log("NavigationVWeekly positionConfig", positionConfig);

  return (
    <div className="dark:bg-gray-900 bg-white">
      <div className="container mx-auto ">
        <div className="py-4 md:py-5 lg:py-9 mx-4 md:mx-6">
          <div className="flex items-center justify-between">
            <div className="ml-10" role="img">
              <img
                src="https://www-cdn.bigcommerce.com/assets/logos/bc-logo-dark.svg?mtime=20160329000432"
                alt=""
              />
            </div>
            <div className=" w-3/6 lg:flex justify-start ">
              <ul className="flex items-center space-x-10 ">
                {readyDatasrc.map((item: any, index: number) => {
                  return (
                    <li className="flex items-center">
                      <a
                        href="javascript:void(0)"
                        className="text-base text-gray-800 dark:text-white dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                      >
                        <RenderAtom
                          item={item?.position1}
                          defaultAtom="title"
                          customClassName="text-sm font-medium leading-5 text-gray-500 mt-3"
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="lg:w-3/12 flex items-center lg:justify-center space-x-6 lg:space-x-4 xl:space-x-6 ">
              <div className=" md:flex items-center space-x-2">
                <button className="bg-blue-600 rounded-lg uppercase text-white px-8 py-2">
                  request demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationVWeekly;
