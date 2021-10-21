import { useState, useContext } from "react";
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
  AtomImage,
} from "@components/common/Atom";

export default function NavigationI() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);

  // console.log("NavigationI config", config);
  // console.log("NavigationI datasrc", datasrc);
  // console.log("NavigationI otherattr", otherattr);
  // console.log("NavigationI positionConfig", positionConfig);
  
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  if (isEmpty(datasrc)) return null;

  return (
    <div className="dark:bg-gray-900">
      <div>
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <AtomIcon item="far fa-search" customClassName="text-lg" />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="space-x-6">
              <button
                aria-label="view favourites"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <AtomIcon item="far fa-heart" customClassName="text-lg" />
              </button>
              <button
                aria-label="go to cart"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <AtomIcon
                  item="far fa-shopping-bag"
                  customClassName="text-lg"
                />
              </button>
            </div>
          </div>
          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900 bg-gray-50 px-6 py-4">
            <div className="container mx-auto flex items-center justify-between">
              <div
                className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white"
                aria-label="the Crib."
              >
                <AtomImage
                  item="https://res.cloudinary.com/dzih5nqhg/image/upload/v1634289839/sky/sky_logo_prvdqa.png"
                  customClassName="w-12 h-12"
                />
              </div>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                {menuList.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href="javascript:void(0)"
                        className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                      >
                        <AtomText
                          item={item.title}
                          link="#"
                          color={widgetDefault.color}
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x-4 xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <AtomIcon
                      item="far fa-search"
                      customClassName="text-xl"
                      color={widgetDefault.color}
                    />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <AtomIcon
                      item="far fa-heart"
                      customClassName="text-xl"
                      color={widgetDefault.color}
                    />
                  </button>
                  <button
                    aria-label="go to cart"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <AtomIcon
                      item="far fa-shopping-bag"
                      customClassName="text-xl"
                      color={widgetDefault.color}
                    />
                  </button>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black hidden md:flex rounded"
                  >
                    <AtomIcon
                      item="far fa-stream"
                      customClassName="text-xl"
                      color={widgetDefault.color}
                    />
                  </button>
                  <button
                    aria-label="open menu"
                    onClick={() => setShowMenu(true)}
                    className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <AtomIcon
                      item="far fa-stream"
                      customClassName="text-xl"
                      color={widgetDefault.color}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full`}
          >
            <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
              <div className="flex items-center space-x-3">
                <div>
                  <AtomIcon
                    item="far fa-search"
                    customClassName="text-lg"
                    color={widgetDefault.color}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <AtomIcon
                  item="fal fa-close"
                  customClassName="text-lg"
                  color={widgetDefault.color}
                />
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                {menuList.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href="javascript:void(0)"
                        className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                      >
                        <AtomText
                          item={item.title}
                          link="#"
                          color={widgetDefault.color}
                        />
                        <div>
                          <AtomIcon
                            item="fal fa-chevron-right"
                            customClassName="text-sm"
                            color={widgetDefault.color}
                          />
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <AtomIcon
                        item="fal fa-shopping-bag"
                        customClassName="text-2xl"
                        color={widgetDefault.color}
                      />
                    </div>
                    <AtomText item="Сагс" customClassName="text-base" />
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    <div>
                      <AtomIcon
                        item="fal fa-heart"
                        customClassName="text-2xl"
                        color={widgetDefault.color}
                      />
                    </div>
                    <AtomText
                      item="Хүслийн жагсаалт"
                      customClassName="text-base"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const menuList = [
  { title: "Нүүр" },
  { title: "Цана" },
  { title: "Боард" },
  { title: "Сургалт" },
];
