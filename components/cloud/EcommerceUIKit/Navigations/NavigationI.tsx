import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { useUser } from "hooks/use-user";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomIcon,
  AtomImage,
  AtomInput,
  AtomLink,
  AtomLinkV2,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";
import AtomAvatar from "@components/common/Atom/AtomAvatar";

export default function NavigationI() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);

  // console.log("NavigationI config", config);
  // console.log("NavigationI readyDatasrc", readyDatasrc);
  // console.log("NavigationI widgetnemgooReady", widgetnemgooReady);
  // console.log("NavigationI positionConfig", positionConfig);
  //console.log("Navigation1 readysata - ", readyDatasrc);

  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const userContext = useUser();
  const img =
    "https://skyresort.mn/wp-content/uploads/2020/01/skyresort_smalllogo2.png";

  const img1 =
    "https://www.skiresort.info/uploads/tx_mgskiresort/variationen1_01.jpg";
  //border-bottom-left-radius:3.5rem;border-bottom-right-radius:3.5rem
  const data = readyDatasrc[0];
  const titles = "data.position31.value";
  //console.log("titles ", titles);
  return (
    <div className="dark:bg-gray-900 z-50 ">
      <div className="">
        <div className="relative  h-36 bg-blue-600 rounded-b-3xl">
          {/*top one search wallet, cart*/}

          {/*
          background зураг
           <RenderAtom
            item={{
              value: img1,
            }}
            defaultAtom="image"
            customClassName="absolute w-full h-full object-cover z-0 rounded-b-3xl"
          /> */}
          <div className="absolute w-full h-full rounded-xl">
            <div id="md-searchbar" className="w-full h-24">
              <div className="py-2  px-5 lg:px-20 items-center flex justify-between w-full h-full border-b border-gray-300">
                <div className="flex space-x-14 items-center">
                  <RenderAtom
                    item={{
                      value: img,
                    }}
                    defaultAtom="image"
                    customClassName="w-auto hidden sm:flex h-auto z-10"
                  />
                  <AtomInput
                    item=""
                    icon="far fa-search"
                    value={undefined}
                    placeholder="Хайх үйлчилгээний нэрээ оруулна уу..."
                    type="text"
                    customClassName="w-96 hidden lg:flex"
                    inputContainer={{
                      customClassName:
                        "text-sm bg-gray-100 rounded-full text-gray-600 border-0 focus:outline-none focus:ring-2 focus:ring-gray-200  focus:bg-white font-normal",
                    }}
                    iconContainer={{
                      customClassName:
                        "absolute text-gray-500 flex items-center pl-4",
                    }}
                  />
                </div>
                <div className="flex flex-row z-10">
                  <div className="border-r border-gray-300 pr-5">
                    <div className="bg-yellow-200 flex flex-col items-center py-2 px-5 rounded-lg">
                      <i className="far fa-wallet text-lg"></i>
                      <RenderAtom
                        item={{
                          value: "Хэтэвч",
                        }}
                        defaultAtom="text"
                        customClassName="text-xs font-semibold"
                      />
                    </div>
                  </div>
                  <div className="pl-5 border-l border-gray-300">
                    <div className="flex">
                      <div className="bg-skyresort relative text-center rounded-l-lg  py-2 px-6 ">
                        <i className="far fa-shopping-bag text-2xl mx-auto"></i>
                        <div className="absolute w-5 h-5 rounded-full bg-green-500 top-1 right-4 text-center">
                          <RenderAtom
                            item={data.position23}
                            defaultAtom="text"
                            customClassName=" text-white font-bold text-xs"
                          />
                        </div>
                        <p className="text-xs font-semibold">Сагс</p>
                      </div>
                      <div className="bg-white text-center rounded-r-lg  pt-2 pb-1 px-3">
                        <p className="text-xs text-gray-500">Нийт дүн</p>
                        <RenderAtom
                          item={data.position4}
                          defaultAtom="currency"
                          customClassName=" font-bold text-lg text-gray-800 pt-1"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* For md screen size */}
            {/* bottom one*/}
            <div className="dark:bg-gray-900 z-10 px-5 lg:px-20 h-12 text-white rounded-lg py-2">
              <div className="flex items-center justify-between items-center h-full">
                <div className="flex">
                  {/* <div className="flex items-center text-center bg-skyresort rounded-2xl px-3 py-1 text-black space-x-2">
                    <i className="far fa-bars mt-1 "></i>
                    <RenderAtom
                      item={{
                        value: "Ангилал",
                      }}
                      defaultAtom="text"
                      customProps={{
                        color: widgetAllaround.color,
                      }}
                      customClassName="text-sm font-bold uppercase"
                    />
                  </div> */}
                  <div className="lg:hidden" onClick={() => setShowMenu(true)}>
                    <i className="cursor-pointer text-2xl fa">&#xf0c9;</i>
                  </div>
                  <ul className="hidden lg:flex items-center justify-center space-x-7">
                    {/* {titles.map((item1: any, index1: number) => {
                      return (
                        <li key={index1} className="">
                          <AtomLinkV2
                            item={{
                              path:
                                "/page/" +
                                renderPositionType(
                                  item1,
                                  "position45",
                                  positionConfig,
                                ),
                            }}
                            children={
                              <RenderAtom
                                item={{
                                  value: renderPositionType(
                                    item1,
                                    "position1",
                                    positionConfig,
                                  ),
                                }}
                                defaultAtom="text"
                                customProps={{
                                  color: widgetAllaround.color,
                                }}
                                customClassName=" uppercase text-xs sm:text-sm font-normal"
                              />
                            }
                            customClassName="cursor-pointer"
                          />
                        </li>
                      );
                    })} */}
                  </ul>
                </div>
                <div className="h-full sm:hidden">
                  <RenderAtom
                    item={{
                      value: img,
                    }}
                    defaultAtom="image"
                    customClassName="w-full h-full z-10"
                  />
                </div>

                <div className="flex items-center space-x-6 font-medium text-xl sm:text-sm">
                  <div className="flex space-x-2">
                    <i className="far fa-user"></i>
                    <p className="hidden sm:inline-block">Нэвтрэх</p>
                  </div>
                  <div className="flex space-x-2">
                    <i className="far fa-lock"></i>
                    <p className="hidden sm:inline-block">Бүртгүүлэх</p>
                  </div>
                  {/* <div className="hidden lg:flex items-center">
                    {/* <AtomButton
                    onClick={() => setSearchInput(!searchInput)}
                    item=""
                    icon="far fa-search"
                    type="icon"
                    customClassName="text-xl"
                    color={widgetAllaround.color}
                  />
                    <RenderAtom
                      item={{
                        value: "",
                      }}
                      defaultAtom="button"
                      customClassName="text-xl"
                      customProps={{
                        icon: "far fa-search",
                        type: "icon",
                        color: widgetAllaround.color,
                        onClick: () => setSearchInput(!searchInput),
                      }}
                    />
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="search"
                      className={` ${
                        searchInput ? "hidden" : ""
                      } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                    />
                  </div>
                  <div className="hidden lg:flex items-center space-x-4 xl:space-x-2">
                    <RenderAtom
                      item={{ value: null }}
                      defaultAtom="button"
                      customClassName="text-xl"
                      customProps={{
                        icon: "far fa-heart",
                        type: "icon",
                        color: widgetAllaround.color,
                      }}
                    />
                    <RenderAtom
                      item={{ value: null }}
                      defaultAtom="button"
                      customClassName="text-xl"
                      customProps={{
                        icon: "far fa-shopping-bag",
                        type: "icon",
                        color: widgetAllaround.color,
                      }}
                    />
                  </div>
                  <div className="flex lg:hidden">
                     Энд User байрлана. 
                    <AtomAvatar />
                    <RenderAtom
                      item={{ value: null }}
                      defaultAtom="button"
                      customClassName="text-xl hidden md:flex rounded"
                      customProps={{
                        icon: "far fa-stream",
                        type: "icon",
                        color: widgetAllaround.color,
                        onClick: () => setMdOptionsToggle(!mdOptionsToggle),
                      }}
                    />
                    <RenderAtom
                      item={{ value: null }}
                      defaultAtom="button"
                      customClassName="text-xl md:hidden"
                      customProps={{
                        icon: "far fa-stream",
                        type: "icon",
                        color: widgetAllaround.color,
                        onClick: () => setShowMenu(true),
                      }}
                    />
                  </div> */}
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
              <AtomInput
                item=""
                icon="far fa-search"
                value={undefined}
                placeholder="Үйлчилгээ хайх"
                type="text"
                customClassName="w-auto"
              />
              <RenderAtom
                item={{
                  value: null,
                }}
                defaultAtom="button"
                customClassName="text-lg"
                customProps={{
                  icon: "far fa-close",
                  type: "icon",
                  color: widgetAllaround.color,
                  onClick: () => setShowMenu(false),
                }}
              />
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                {/* {titles.map((item: any, index: number) => {
                  return (
                    <li key={item?.id || index} className="flex flex-row justify-between">
                      <RenderAtom
                        item={{
                          value: item.title,
                        }}
                        defaultAtom="text"
                        customProps={{
                          color: widgetAllaround.color,
                        }}
                      />

                      <RenderAtom
                        item={{
                          value: "fal fa-chevron-right",
                        }}
                        defaultAtom="icon"
                        customClassName="text-sm"
                        customProps={{
                          color: widgetAllaround.color,
                        }}
                      />
                    </li>
                  );
                })} */}
              </ul>
            </div>
            <div className="h-full flex items-end">
              <ul className="flex flex-col space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                <li className="flex flex-row items-center space-x-4 ">
                  <RenderAtom
                    item={{
                      value: "fal fa-shopping-bag",
                    }}
                    defaultAtom="icon"
                    customClassName="text-2xl"
                    customProps={{
                      color: widgetAllaround.color,
                    }}
                  />
                  <RenderAtom
                    item={{
                      value: "Сагс",
                    }}
                    defaultAtom="text"
                    customClassName="text-base"
                  />
                </li>
                <li className="flex flex-row items-center space-x-4 ">
                  <RenderAtom
                    item={{
                      value: "fal fa-heart",
                    }}
                    defaultAtom="icon"
                    customClassName="text-2xl"
                    customProps={{
                      color: widgetAllaround.color,
                    }}
                  />
                  <RenderAtom
                    item={{
                      value: "Хүслийн жагсаалт",
                    }}
                    defaultAtom="text"
                    customClassName="text-base"
                  />
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
  { title: "Сургалт" },
  { title: "Хөнгөлөлт" },
  { title: "Цагийн хуваарь" },
  { title: "Эрхийн бичиг" },
];
