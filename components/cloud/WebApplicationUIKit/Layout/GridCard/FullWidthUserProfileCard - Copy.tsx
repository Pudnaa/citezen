import { useState, useContext, useEffect } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import { isEmpty } from "lodash";
import { Tabs } from "antd";
import {
  AtomTitle,
  AtomText,
  AtomIcon,
  AtomButton,
  AtomModal,
} from "@components/common/Atom";
import WidgetWithId from "middleware/components/WidgetStandart/WidgetWithId";
import RenderAtom from "@components/common/Atom/RenderAtom";
export default function FullWidthUserProfileCard() {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const { TabPane } = Tabs;
  // console.log("FullWidthUserProfileCard config", config);
  // console.log("FullWidthUserProfileCard readyDatasrc", readyDatasrc);
  // console.log("FullWidthUserProfileCard widgetnemgooReady", widgetnemgooReady);

  const tabItems = widgetnemgooReady?.tab || [];
  const editIcon = (
    w: number,
    background: string,
    t: number,
    r: number,
    f: any
  ) => {
    return (
      <div
        className={`w-${w} h-${w} absolute top-${t} right-${r} rounded-3xl bg-${background} items-center flex justify-center cursor-pointer`}
        onClick={f}
      >
        <AtomIcon
          // item={item.icon}
          item="far fa-pencil"
          checked={false}
          hoverSolid={true}
          customClassName="text-lg"
        />
      </div>
    );
  };

  const [editPro, setEditPro] = useState(false);
  const readyData = readyDatasrc[0];

  const body = () => {
    return (
      <div className="">
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="w-48 h-48 overflow-hidden object-cover rounded"
            // src="https://image.freepwik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
            src={renderPositionType(readyData, "position2", positionConfig)}
          />
        </div>
        <div className="p-2 bg-gray-300 rounded-lg inline-flex justify-between items-center text-gray-500 cursor-pointer">
          <AtomIcon
            // item={item.icon}
            item="far fa-eye"
            checked={false}
            hoverSolid={true}
            customClassName="text-sm mr-2"
          />
          <span className="font-bold text-xs">Нийтийн</span>
        </div>
      </div>
    );
  };
  const footer = () => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex">
          <div className="pr-4 ml-1 items-center hover:text-green-500 cursor-pointer">
            <div className="flex justify-center">
              <AtomIcon
                // item={item.icon}
                item="far fa-pencil"
                checked={false}
                hoverSolid={true}
                customClassName="text-lg"
              />
            </div>

            <p>засах</p>
          </div>
          <div className="px-4 items-center hover:text-green-500 cursor-pointer">
            <div className="flex justify-center">
              <AtomIcon
                // item={item.icon}
                item="far fa-camera"
                checked={false}
                hoverSolid={true}
                customClassName="text-lg"
              />
            </div>

            <p>Зураг нэмэх</p>
          </div>
          <div className="pl-4 items-center hover:text-green-500 cursor-pointer">
            <div className="flex justify-center">
              <AtomIcon
                // item={item.icon}
                item="far fa-image"
                checked={false}
                hoverSolid={true}
                customClassName="text-lg"
              />
            </div>

            <p>Хүрээ</p>
          </div>
        </div>
        <div>
          <div className="items-center hover:text-green-500 cursor-pointer">
            <div className="flex justify-center">
              <AtomIcon
                // item={item.icon}
                item="far fa-trash"
                checked={false}
                hoverSolid={true}
                customClassName="text-lg"
              />
            </div>

            <p>Устгах</p>
          </div>
        </div>
      </div>
    );
  };
  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <div className="flex items-center justify-center w-full p-2">
        <div className="bg-white rounded ">
          <div className="relative  ">
            <img
              className="h-72  rounded-t w-full object-cover object-center"
              src={renderPositionType(readyData, "position52", positionConfig)}
            />
            <div className="inset-0 m-auto w-28 h-28 absolute bottom-0 -mb-12 xl:ml-8 border-white">
              <img
                className="w-full h-full overflow-hidden object-cover rounded"
                src={renderPositionType(readyData, "position2", positionConfig)}
              />
            </div>
            {editIcon(10, "white", 5, 5, () => {})}
          </div>
          <div className="px-4 xl:px-8 pb-4 relative">
            {/* {editIcon(10, "white", 5, 5, () => setEditPro(true))} */}
            <div className="pt-16 pb-4 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className=" w-full xl:w-1/4">
                <div className="text-center  mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <RenderAtom
                    item={readyData?.position1}
                    defaultAtom="title"
                    customClassName="text-2xl text-citizen-title dark:text-gray-100  "
                    customProps={{
                      truncateRow: 2,
                    }}
                  />
                </div>
                {/* <RenderAtom
									item={readyData?.position3}
									defaultAtom="text"
									customClassName="text-center xl:text-left text-citizen-description mt-1 text-base tracking-normal "
									customProps={{
										truncateRow: 2,
									}}
								/> */}
              </div>
              <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-center justify-between xl:w-2/4">
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-citizen-title dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    1000
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100 text-sm xl leading-5">
                    Миний оноо
                  </p>
                </div>
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-citizen-title dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    1000
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100 text-sm xl leading-5">
                    Салбар
                  </p>
                </div>
                <div className="mr-6 xl:mr-10">
                  <h2 className="text-citizen-title dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                    12
                  </h2>
                  <p className="text-gray-600 dark:text-gray-100 text-sm xl leading-5">
                    Гишүүнчлэл
                  </p>
                </div>
              </div>
              <div className="w-full xl:w-auto flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                <button className="focus:outline-none ml-0 md:ml-5 bg-blue-400 transition duration-150 ease-in-out hover:bg-indigo-600 rounded-lg text-white px-3 md:px-6 py-2 text-sm">
                  <div className=" items-center flex justify-center">
                    <AtomIcon
                      // item={item.icon}
                      item="far fa-commenting"
                      checked={false}
                      hoverSolid={true}
                      customClassName="text-lg mr-3"
                    />
                    <span className="text-xs items-center">
                      Дансны үлдэгдэл шалгах
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          {tabItems && (
            <div className="border-t px-4 min-h-fit">
              <Tabs defaultActiveKey="1" type="line">
                {tabItems.map((item: any, index: number) => {
                  if (item.tabname) {
                    return (
                      <TabPane tab={item.tabname} key={item?.id || index}>
                        <WidgetWithId widgetId={item.widgetId} />
                      </TabPane>
                    );
                  }
                })}
              </Tabs>
            </div>
          )}
        </div>
        {/* Card code block end */}
      </div>
    </>
  );
}
