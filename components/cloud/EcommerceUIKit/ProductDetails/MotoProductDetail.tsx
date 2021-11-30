import { useContext } from "react";
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
  AtomLink,
} from "@components/common/Atom";
import image from "next/image";

const MotoProductDetail = () => {
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
  if (isEmpty(datasrc)) return null;

  //console.log("ProductDetail5 config", config);
  //console.log("ProductDetail5 datasrc", datasrc);
  //console.log("ProductDetail5 otherattr", otherattr);
  //console.log("ProductDetail5 positionConfig", positionConfig);

  const item = datasrc[0];
  //const images = renderPositionType(item, "position31", positionConfig);
  const colors = renderPositionType(item, "position32", positionConfig);
  const images = [
    "https://dev.veritech.mn/storage/uploads/process/202111/file_1637046291439561_160870170544911.jpg",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1513036191774-b2badb8fcb76?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  ];
  var fc = -1;
  return (
    <div className="w-full h-full mt-8">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-7">
          <div>
            <div className="relative">
              <img
                src="https://dev.veritech.mn/storage/uploads/process/202111/file_1637051641468882_160870170544911.jpg"
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
              <div className="absolute flex text-white top-8 right-7 text-sm items-center cursor-pointer">
                <p>Томруулж харах</p>
                <i className="fas fa-expand ml-4 text-xl"></i>
              </div>
              <div className="absolute font-bold text-2xl text-white bottom-9 left-10">
                moto.mn
              </div>
            </div>
            <div className="flex justify-between my-3 text-gray-600">
              <div className="flex">
                <div className="flex mr-7">
                  <i className="fas fa-calendar mr-2 text-moto"></i>
                  <p className="">3 өдрийн өмнө </p>
                </div>
                <div className="flex">
                  <i className="fas fa-share mr-2 text-moto"></i>
                  <p>970 shares</p>
                </div>
              </div>
              <div className="flex">
                <i className="fas fa-eye mr-2 text-gray-600"></i>
                <p>1000</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5">
              {images.map((item: any, index: number) => {
                if (index % 3 === 0) {
                  fc = Math.floor(Math.random() * 3);
                  //fc++; random-r bish daraallaaraa ywah bol
                  switch (fc % 3) {
                    case 0:
                      return (
                        <div key={index} className="w-full h-auto">
                          <div className="w-full">
                            <img
                              src={item}
                              className="w-full h-24 rounded-2xl object-cover"
                            />
                          </div>
                          <div className="w-full grid grid-cols-2 gap-5 mt-5">
                            {images.length > index + 1 && (
                              <img
                                src={images[index + 1]}
                                className="w-24 h-24 rounded-2xl object-cover"
                              />
                            )}
                            {images.length > index + 2 && (
                              <img
                                src={images[index + 2]}
                                className="w-24 h-24 rounded-2xl object-cover"
                              />
                            )}
                          </div>
                        </div>
                      );
                    case 1:
                      return (
                        <div key={index} className="w-full h-auto">
                          <div className="w-full grid grid-cols-2 gap-5 mb-5">
                            {images.length > index + 1 && (
                              <img
                                src={images[index + 1]}
                                className="w-24 h-24 rounded-2xl object-cover"
                              />
                            )}
                            {images.length > index + 2 && (
                              <img
                                src={images[index + 2]}
                                className="w-24 h-24 rounded-2xl object-cover"
                              />
                            )}
                          </div>
                          <div className="w-full">
                            <img
                              src={item}
                              className="w-full h-24 rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      );
                    default:
                      return (
                        <div
                          key={index}
                          className="w-full h-auto grid grid-cols-2 gap-5"
                        >
                          <div className="w-full">
                            {images.length > index + 1 && (
                              <img
                                src={images[index + 1]}
                                className="w-24 h-24 rounded-2xl mb-5 object-cover"
                              />
                            )}
                            {images.length > index + 2 && (
                              <img
                                src={images[index + 2]}
                                className="w-24 h-24 rounded-2xl object-cover"
                              />
                            )}
                          </div>
                          <div className="w-full">
                            <img
                              src={item}
                              className="w-full h-full rounded-2xl object-cover"
                            />
                          </div>
                        </div>
                      );
                  }
                }
              })}
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <div className="">
            <p className="font-bold text-gray-500 text-sm mb-3">
              moto#345-99553-E{" "}
            </p>
            <h1 className="font-bold text-2xl mb-3">
              2017 Bentley Flying Spur
            </h1>
            <p className="font-bold text-2xl text-moto mb-1">₮118'000'000</p>
            <p className="text-medium text-sm text-gray-500">
              Great news! There are currently no known recalls on 2017 Bentley
              Flying Spur.
            </p>
            <div className="pr-32 mt-4">
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Хийц</p>
                <p className="font-medium text-gray-500">Suv</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Жолоо</p>
                <p className="font-medium text-gray-500">Зөв</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Хөдөлгүүр</p>
                <p className="font-medium text-gray-500">3500 cc, Бензин</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Хроп</p>
                <p className="font-medium text-gray-500">Автомат - АТ</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Хөтлөгч</p>
                <p className="font-medium text-gray-500">4WD (Full-time)</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Гүйлт</p>
                <p className="font-medium text-gray-500">50'000 км</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Орж ирсэн</p>
                <p className="font-medium text-gray-500">2019 он</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Хөдөлгүүр</p>
                <p className="font-medium text-gray-500">3'500 cc</p>
              </div>
              <div className="flex justify-between text-lg mb-1">
                <p className="font-bold">Гүйлт</p>
                <p className="font-medium text-gray-500">50'000 км</p>
              </div>
            </div>
            <div className="flex my-7">
              <div className="flex mr-10">
                <i className="fas fa-save mr-4 text-moto"></i>
                <p>Хадгалах</p>
              </div>
              <div className="flex">od od od od od od</div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <button className="w-full py-3 bg-black text-white rounded-2xl font-bold text-sm">
                Хадгалах
              </button>
              <button className="w-full py-3 bg-white border border-moto text-moto rounded-2xl font-bold text-sm">
                Утасны дугаар авах
              </button>
            </div>
            <div className="bg-gray-100 border hover:border-moto w-full flex mt-7 rounded-2xl">
              <div className="w-1/2 py-6 flex justify-center">
                <div className="w-full text-center">
                  <div className="w-full my-3">
                    <img
                      src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
                      alt=""
                      className="w-12 h-12 mx-auto rounded-3xl border border-moto"
                    />
                  </div>
                  <p className="mx-auto text-xs font-bold text-gray-800">
                    Админ А.Золбоо
                  </p>
                </div>
              </div>
              <div className="w-1/2 py-6 flex justify-center">
                <div className="w-full">
                  <div className="text-center">
                    <p className="text-2xl ">moto.mn</p>
                    <p className="font-bold text-xs text-gray-800">
                      Танд тусламж хэрэгтэй юу?
                    </p>
                  </div>
                  <div className="flex justify-center mt-3">
                    <button
                      className="bg-moto rounded-2xl text-black font-bold text-sm px-11 py-3
                    border border-moto hover:bg-white hover:text-moto"
                    >
                      Чатлах
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 border hover:border-moto w-full flex mt-7 rounded-2xl px-10">
              <div className="flex w-full py-3 items-center">
                <p className="font-bold text-sm text-gray-700 cursor-pointer">
                  share
                </p>
                <div className="flex justify-between ml-8 w-full">
                  <i className="fab fa-facebook text-blue-600 cursor-pointer text-4xl" />
                  <i className="fab fa-twitter text-blue-300 cursor-pointer text-4xl" />
                  <i className="fab fa-youtube text-red-600 cursor-pointer text-4xl" />
                  <i className="fab fa-snapchat text-yellow-300 cursor-pointer text-4xl" />
                  <i className="fab fa-discord cursor-pointer text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotoProductDetail;
