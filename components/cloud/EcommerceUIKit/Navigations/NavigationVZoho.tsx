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
const NavigationVZoho: FC<PropsType> = ({ item }) => {
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

  // console.log("NavigationVZoho config", config);
  // console.log("NavigationVZoho readyDatasrc", readyDatasrc);
  // console.log("NavigationVZoho widgetnemgooReady", widgetnemgooReady);
  // console.log("NavigationVZoho positionConfig", positionConfig);

  return (
    <div className="dark:bg-gray-900 bg-white pr-10">
      <div className="container mx-auto ">
        <div className="py-4 md:py-5 lg:py-1 mx-4 md:mx-4">
          <div className="flex items-center justify-between">
            <div className="ml-10" role="img">
              <img
                className="h-10"
                src="https://www.zohowebstatic.com/sites/default/files/styles/product-home-page/public/creator_3.png?itok=Ytzb1_Cp"
                alt=""
              />
            </div>
            <div className=" w-2/6 lg:flex justify-start ">
              <ul className="flex items-center space-x-10 ">
                {readyDatasrc.map((item: any, index: number) => {
                  return (
                    <li className="flex items-center">
                      <RenderAtom
                        item={item?.position1}
                        defaultAtom="title"
                        customClassName="text-sm font-normal leading-5 text-gray-900 mt-3"
                      />
                      <a
                        href="javascript:void(0)"
                        className="text-base text-gray-800 dark:text-white dark:hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                      >
                        <div className="ml-1 mt-2">
                          <RenderAtom
                            item={{
                              value: "fas fa-chevron-down   ",
                            }}
                            defaultAtom="icon"
                            customClassName="text-sm"
                          />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex items-end  ">
              <button className="bg-red-500  uppercase text-white px-1 py-2 ">
                get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavigationVZoho;
