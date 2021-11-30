import { useContext, useState } from "react";
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
  AtomLink,
  AtomLinkV2,
} from "@components/common/Atom";

export default function MotoProductGrid() {
  const {
    config,
    datasrc,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    readyDatasrc,
  } = useContext(WidgetWrapperContext);

  if (isEmpty(datasrc)) return null;
  // console.log("MotoProductGrid config", config);
  // console.log("MotoProductGrid datasrc", datasrc);
  // console.log("MotoProductGrid otherattr", otherattr);
  // console.log("MotoProductGrid positionConfig", positionConfig);
  const item = datasrc[0];
  const isGoCars = otherattr.type === "gocars";
  const list = [1, 2, 3, 4, 5];
  return (
    <div className="rounded-2xl ml-4">
      {list &&
        list.map((item: any, index: number) => {
          return (
            <div key={index} className="mb-5 grid grid-cols-12">
              <div className="col-span-9 border-r-2 pr-12 flex">
                <div className="relative mr-5 w-full h-full">
                  <img
                    src={
                      isGoCars
                        ? "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/600x600/10106.png"
                        : "https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg"
                    }
                    alt=""
                    className="w-full h-full rounded-2xl"
                  />
                  <div
                    className={`absolute text-medium text-xs  rounded-3xl py-1.5 px-4 text-white top-3 left-3
                  ${index % 2 === 0 ? "bg-moto" : "bg-yellow-600"} ${
                      index % 3 === 0 ? "hidden" : ""
                    }`}
                  >
                    {" "}
                    {index % 2 === 0 ? "Шинэ" : "Хуучин"}
                  </div>
                </div>
                <div className="w-full h-full flex flex-col justify-between">
                  <AtomLink
                    item={`/page/${
                      isGoCars ? "1637573382013972" : "1636710597333835"
                    }`}
                    children={
                      <h1 className="font-bold text-lg">
                        {isGoCars ? "Тоормозны систем" : "2016 LEXUS RX 350"}
                      </h1>
                    }
                  />
                  <div className="font-medium text-sm text-black">
                    <div className="flex justify-between">
                      <p className="">Хийц</p>
                      <p className="text-gray-500">SUV</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Жолоо</p>
                      <p className="text-gray-500">Зөв</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Хөдөлгүүр</p>
                      <p className="text-gray-500">3500 cc, Бензин</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Хроп</p>
                      <p className="text-gray-500">Автомат- АТ</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Хөтлөгч</p>
                      <p className="text-gray-500">4WD (Full-time)</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Гүйлт</p>
                      <p className="text-gray-500">50'000 км</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="">Орж ирсэн</p>
                      <p className="text-gray-500">2019 он</p>
                    </div>
                  </div>
                  <div className="">od od od od</div>
                </div>
              </div>
              <div className="col-span-3 pl-12 text-center">
                <div className="w-full h-full flex flex-col justify-between">
                  <div>
                    <p className="font-bold text-3xl text-gray-500">
                      ₮118'000'000
                    </p>
                  </div>
                  <div>
                    <AtomButton
                      item="Хадгалах"
                      color=""
                      customClassName="w-full py-3 font-bold text-sm border border-black rounded-2xl bg-black text-white hover:bg-white hover:text-black"
                    />
                  </div>
                  <div>
                    <AtomButton
                      item="Утасны дугаар авах"
                      color=""
                      customClassName="w-full py-3 font-bold text-sm rounded-2xl bg-white border border-moto text-moto hover:bg-moto hover:text-white"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">moto#345-99553-E </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
