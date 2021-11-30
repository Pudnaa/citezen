import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import RenderAtom from "@components/common/Atom/RenderAtom";
import { renderPositionType } from "util/helper";
import { AtomButton, AtomImage } from "@components/common/Atom";

export default function ProductCategory5() {
  const {
    config,
    datasrc,
    readyDatasrc,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);
  if (isEmpty(datasrc)) return null;
  // console.log("ProductCategory5 config", config);
  // console.log("ProductCategory5 datasrc", datasrc);
  // console.log("ProductCategory5 widgetnemgoo", widgetnemgoo);
  // console.log("ProductCategory5 positionConfig", positionConfig);
  const item = readyDatasrc;
  const isSkyResortHome = widgetnemgoo.type === "skyresort_home";

  return (
    <div className="pb-16">
      <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
          <div className="flex flex-col jusitfy-center items-center space-y-10">
            <div className="flex flex-col justify-center items-center space-y-2">
              <p className="text-xl leading-5 text-gray-600">
                2021 Trendsetters
              </p>
              <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
                Shop By Category
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 w-full">
              <div className="relative group flex justify-center items-center h-full w-full">
                <AtomImage
                  item={renderPositionType(
                    item[0],
                    "position2",
                    positionConfig
                  )}
                  customClassName="object-center object-cover h-full w-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
                <AtomButton
                  item={renderPositionType(
                    item[0],
                    "position1",
                    positionConfig
                  )}
                  color=""
                  customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                <div className="relative group flex justify-center items-center h-full w-full">
                  <AtomImage
                    item={renderPositionType(
                      item[1],
                      "position2",
                      positionConfig
                    )}
                    customClassName="object-center object-cover h-full w-full"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <AtomButton
                    item={renderPositionType(
                      item[1],
                      "position1",
                      positionConfig
                    )}
                    color=""
                    customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full">
                  <AtomImage
                    item={renderPositionType(
                      item[2],
                      "position2",
                      positionConfig
                    )}
                    customClassName="object-center object-cover h-full w-full"
                    alt={renderPositionType(item, "position1", positionConfig)}
                  />
                  <AtomButton
                    item={renderPositionType(
                      item[2],
                      "position1",
                      positionConfig
                    )}
                    color=""
                    customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                  />
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                <AtomImage
                  item={renderPositionType(
                    item[3],
                    "position2",
                    positionConfig
                  )}
                  customClassName="object-center object-cover h-full w-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
                <AtomButton
                  item={renderPositionType(
                    item[3],
                    "position1",
                    positionConfig
                  )}
                  color=""
                  customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
              <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                <AtomImage
                  item={renderPositionType(
                    item[3],
                    "position2",
                    positionConfig
                  )}
                  customClassName="object-center object-cover h-full w-full"
                  alt={renderPositionType(item, "position1", positionConfig)}
                />
                <AtomButton
                  item={renderPositionType(
                    item[3],
                    "position1",
                    positionConfig
                  )}
                  color=""
                  customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
            <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
              <AtomImage
                item={renderPositionType(item[3], "position2", positionConfig)}
                customClassName="object-center object-cover h-full w-full"
                alt={renderPositionType(item, "position1", positionConfig)}
              />
              <AtomButton
                item={renderPositionType(item[3], "position1", positionConfig)}
                color=""
                customClassName="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"
              />
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// {
// 	"raw": "1",
// 	"className": "mt-10 container mx-auto",
// 	"title": {
// 		"title": "ProductCategory5",
// 		"classname": ""
// 	},
// 	"data": [{
// 		"id": "0",
// 		"title": "Women",
// 		"mainimage": "https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png"
// 	},{
// 		"id": "0",
// 		"title": "Shoes",
// 		"mainimage": "https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png"
// 	},{
// 		"id": "0",
// 		"title": "Watches",
// 		"mainimage": "https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
// 	},{
// 		"id": "0",
// 		"title": "Accessories",
// 		"mainimage": "https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
// 	}]
// }

//SKYRESORT
// [
//   {
// "title": "Хурим",
// "description": "asdassdadasd",
//       "mainimage":"https://skyresort.mn/wp-content/uploads/2020/01/skyresort_smalllogo2.png",
// "wallpaper":"https://skyresort.mn/wp-content/uploads/2020/01/skywedding.png"
// },
// {
// "title": "Хурал уулзалт",
// "description": "asdassdadasd",
//   "mainimage":"https://skyresort.mn/wp-content/uploads/2020/01/skyresort_smalllogo2.png",
// "wallpaper":"https://skyresort.mn/wp-content/uploads/2020/01/hural.png"
// },
// {
// "title": "ТОГЛОЛТ ЭНТЭРТАЙНМЭНТ",
// "description": "asdassdadasd",
// "mainimage":"https://skyresort.mn/wp-content/uploads/2020/01/skyresort_smalllogo2.png",
// "wallpaper":"https://skyresort.mn/wp-content/uploads/2020/01/entertainment.png"
// }
// ]
