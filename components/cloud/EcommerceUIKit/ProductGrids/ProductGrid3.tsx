import { useContext, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Grid3Item, Grid1Item } from "@components/cloud/Custom/Card";
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
  AtomSlider4,
  AtomSlider5,
  AtomSlider6,
  AtomSlider7,
} from "@components/common/Atom";

export default function ProductGrid3() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  const [isGrid, setIsGrid] = useState(true);

  if (isEmpty(datasrc)) return null;
  // console.log("ProductGrid3 config", config);
  //console.log("ProductGrid3 datasrc", datasrc);
  //console.log("ProductGrid3 otherattr", otherattr);
  // console.log("ProductGrid3 positionConfig", positionConfig);

  // const mainContent;
  switch (otherattr.type) {
    case "slider":
      return (
        <div>
          {/* <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            {datasrc.map((item: any, index: any) => (
              <SwiperSlide key={index} className='item'>
                <div className='shadow-lg border rounded-lg'>
                  <Grid3Item key={index} item={item} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <AtomSlider5 customClassName="container mx-auto">
            {datasrc.map((item: any, index: number) => (
              <div key={index}>
                <div
                  className="shadow-lg border rounded-lg mx-3
                flex justify-between flex-col p-4 bg-white rounded-lg shadow-citizen relative animate-fade-in-down w-full"
                >
                  <Grid3Item key={index} item={item} />
                </div>
              </div>
            ))}
          </AtomSlider5>
          <style>
            {`
                .next-button {
                  right: -45px;
                }
                
                .prev-button {
                  left: -45px;
                }
                `}
          </style>
        </div>
      );
    default:
      return (
        <>
          <div className="mb-6 flex justify-between">
            <div className="font-medium text-lg text-center">
              Хэрэглээний зээл
            </div>
            <div className="flex justify-end text-center items-center">
              <AtomIcon
                // item={item.icon}
                item="fa fa-list"
                checked={false}
                color="green-500"
                hoverSolid={true}
                customClassName={`text-lg cursor-pointer ${
                  !isGrid ? "text-green-500" : ""
                }`}
                onClick={() => setIsGrid(false)}
              />
              <AtomIcon
                // item={item.icon}
                item="fa fa-th-large"
                checked={false}
                color="green-500"
                hoverSolid={true}
                customClassName={`text-lg mr-5 ml-6 cursor-pointer ${
                  isGrid ? "text-green-500" : ""
                }`}
                onClick={() => setIsGrid(true)}
              />
              <select name="" id="" className="border-none rounded-lg w-52">
                <option value="">Эрэмблэх</option>
                <option value="">lol</option>
              </select>
            </div>
          </div>
          <div
            className={`${isGrid ? "block" : "hidden"}
          w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6`}
          >
            {datasrc.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex justify-between flex-col p-4 bg-white rounded-lg shadow-citizen relative animate-fade-in-down w-full"
                >
                  <Grid3Item key={index} item={item} />
                </div>
              );
            })}
          </div>
          <div className={`${!isGrid ? "block" : "hidden"}`}>
            {datasrc.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between my-4 p-4 bg-white rounded-lg shadow-citizen relative animate-fade-in-down w-full"
                >
                  <Grid1Item key={index} item={item} />
                </div>
              );
            })}
          </div>
        </>
      );
  }
}

// itemcategoryid: "16329246115881"
// itemcode: "CE-0010-C0000002"
// itemid: "16329921392851"
// itemname: "КЛАССИК тээврийн хэрэгслийн даатгал"
// itemtypeid: "16329840876031"
// profilephoto: "storage/uploads/process/202109/file_1632995867221923_14966466791537741.jpg"
// purchaseprice: "0"
// saleprice: "0"
// status: "0"

// {
//   "position0": {
//       "id": "16327187582021",
//       "sectionid": "16324190608031",
//       "positionname": "position0",
//       "fieldpath": "itemId",
//       "otherattr": ""
//   },
//   "position51": {
//       "id": "16327187582041",
//       "sectionid": "16324190608031",
//       "positionname": "position51",
//       "fieldpath": "status",
//       "otherattr": ""
//   },
//   "position2": {
//       "id": "16327187582051",
//       "sectionid": "16324190608031",
//       "positionname": "position2",
//       "fieldpath": "profilePhoto",
//       "otherattr": ""
//   },
//   "position1": {
//       "id": "16324190608041",
//       "sectionid": "16324190608031",
//       "positionname": "position1",
//       "fieldpath": "itemName",
//       "otherattr": ""
//   },
//   "position4": {
//       "id": "16324190608051",
//       "sectionid": "16324190608031",
//       "positionname": "position4",
//       "fieldpath": "salePrice",
//       "otherattr": ""
//   },
//   "position47": {
//       "id": "16324190608061",
//       "sectionid": "16324190608031",
//       "positionname": "position47",
//       "fieldpath": "purchasePrice",
//       "otherattr": ""
//   },
//   "position41": {
//       "id": "16328070899231",
//       "sectionid": "16324190608031",
//       "positionname": "position41",
//       "fieldpath": "departmentName",
//       "otherattr": ""
//   }
// }
