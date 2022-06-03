import { useContext, useEffect, useState } from "react";
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
  AtomInput,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomImage,
} from "@components/common/Atom";
import RenderAtom from "@components/common/Atom/RenderAtom";

const CheckoutsSkyResort = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
  } = useContext(WidgetWrapperContext);

  // console.log("Checkouts3 config", config);
  //console.log("Checkouts3 readyDatasrc", readyDatasrc);
  // console.log("Checkouts3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Checkouts3 positionConfig", positionConfig);
  //1 bol margaash 2 bol nogoodor 0 bol songogdoogui
  const [isTomorrow, setIsTomorrow] = useState(0);

  //1 bol Ert 2 bol Udur 3 bol Oroi form-2 d hereglene 0 bol songogdoogui
  const [isDawn, setIsDawn] = useState(0);

  //form3 counter
  const [heregselCounter, setHeregselCounter] = useState([""]);

  //form4 selector
  const [tulburSelected, setTulburSelected] = useState(-1);

  //cart
  const [counter1, setCounter1] = useState(1);
  const [counter2, setCounter2] = useState(1);
  const [counter3, setCounter3] = useState(1);
  const [counter4, setCounter4] = useState(1);
  const [counter5, setCounter5] = useState(1);
  const [counter6, setCounter6] = useState(1);
  const [total1, setTotal1] = useState(parseInt(cartItems[0]?.price));
  const [total2, setTotal2] = useState(parseInt(cartItems[1]?.price));
  const [total3, setTotal3] = useState(parseInt(cartItems[2]?.price));
  const [total4, setTotal4] = useState(parseInt(cartItems[3]?.price));
  const [total5, setTotal5] = useState(parseInt(cartItems[4]?.price));
  const [total6, setTotal6] = useState(parseInt(cartItems[5]?.price));
  const [grandTotal, setGrandTotal] = useState(
    total1 + total2 + total3 + total4 + total6
  );
  const list = [counter1, counter2, counter3, counter4, counter5, counter6];
  const setlist = [
    setCounter1,
    setCounter2,
    setCounter3,
    setCounter4,
    setCounter5,
    setCounter6,
  ];
  const list1 = [total1, total2, total3, total4, total5, total6];
  const setlist1 = [
    setTotal1,
    setTotal2,
    setTotal3,
    setTotal4,
    setTotal5,
    setTotal6,
  ];

  useEffect(() => {
    var total = 0;
    list1.map((item: any, index: number) => {
      total += item;
    });
    setGrandTotal(total);
  }, [list1]);

  return (
    <div className="w-full px-5 mt-14 font-sans">
      <div className="grid grid-cols-12 gap-7">
        <div className="col-span-12 sm:col-span-8">
          {/*
					form 1 Холбоо барих мэдээлэл end
					 */}
          <div className="rounded bg-white px-7 pt-4 pb-8">
            <div className="flex border-b pb-4 space-x-4 items-center">
              <span className="px-4 py-2 rounded-full bg-skyresort font-medium text-gray-800">
                1
              </span>
              <p className="text-lg font-medium text-gray-800">
                Холбоо барих мэдээлэл
              </p>
            </div>
            <div className="grid grid-cols-3 mt-7 gap-x-4 gap-y-7">
              {HolbooBarihMedeelel &&
                HolbooBarihMedeelel.map((item: any, index: number) => {
                  return (
                    <label
                      key={item?.id || index}
                      className="flex flex-col justify-between"
                    >
                      <p className="font-semibold text-sm text-gray-800 pl-3">
                        {item.title}
                      </p>
                      <input
                        type={item.type}
                        className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                      />
                    </label>
                  );
                })}
            </div>
            <div className="p-4 bg-red-100 mt-7 rounded">
              <p className="font-light text-sm">
                <span className="font-thin text-gray-500">“Covid 19”</span>
                -н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт, хүргэлтэд
                их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та ойлгоорой.
              </p>
            </div>
          </div>
          {/*
					form 1 Холбоо барих мэдээлэл end
					 */}
          {/*
					form 2 Өдөр сонгох
					 */}
          <div className="rounded bg-white px-7 pt-4 pb-8 mt-5">
            <div className="flex border-b pb-4 space-x-4 items-center">
              <span className="px-4 py-2 rounded-full bg-skyresort font-medium text-gray-800">
                2
              </span>
              <p className="text-lg font-medium text-gray-800">Өдөр сонгох</p>
            </div>
            <div className="grid grid-cols-3 mt-7 gap-x-4 gap-y-7">
              <label>
                <p className="font-semibold text-sm text-gray-800 pl-3">
                  Огноо
                </p>
                <input
                  type="date"
                  className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                  value="2021-12-01"
                />
              </label>
              <label>
                <br />
                <div
                  className={`mt-2 w-full text-sm text-center py-2 text-gray-800 
								bg-white border  rounded-2xl cursor-pointer  ${
                  isTomorrow === 1
                    ? "bg-skyresort border-skyresort"
                    : "border-gray-400"
                } `}
                  onClick={() => setIsTomorrow(1)}
                >
                  Маргааш
                </div>
              </label>
              <label>
                <br />
                <div
                  className={`mt-2 w-full text-sm text-center py-2 text-gray-800 
								bg-white border  rounded-2xl  cursor-pointer ${
                  isTomorrow === 2
                    ? "bg-skyresort border-skyresort"
                    : "border-gray-400"
                } `}
                  onClick={() => setIsTomorrow(2)}
                >
                  Нөгөөдөр
                </div>
              </label>
              {udrinTsag &&
                udrinTsag.map((item: any, index: number) => {
                  return (
                    <div
                      key={item?.id || index}
                      className={`w-full bg-gray-100 border-2 border-gray-100 ${
                        isDawn === index + 1 ? "border-skyresort" : ""
                      } rounded pt-4 pl-4 pb-5 cursor-pointer`}
                      onClick={() => setIsDawn(index + 1)}
                    >
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-sm mt-2">{item.time}</p>
                    </div>
                  );
                })}
            </div>
            <div className="p-4 bg-red-100 mt-4 rounded">
              <p className="font-light text-sm">
                <span className="font-thin text-gray-500">“Covid 19”</span>
                -н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт, хүргэлтэд
                их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та ойлгоорой.
              </p>
            </div>
          </div>
          {/*
					form 2 Өдөр сонгох end
					 */}
          {/*
					form 3 Хэрэгсэл хангах үйлчилгээ start
					 */}

          <div className="rounded bg-white px-7 pt-4 mt-5">
            <div className="flex justify-between border-b text-gray-800">
              <div className="flex items-center pb-4 space-x-4">
                <span className="px-4 py-2 rounded-full bg-skyresort font-medium text-gray-800">
                  3
                </span>
                <p className="text-lg font-medium text-gray-800">
                  Хэрэгсэл хадгалах үйлчилгээ
                </p>
              </div>
              <div
                className="flex space-x-2 items-center text-gray-800 cursor-pointer"
                onClick={() => {
                  var arr = heregselCounter;
                  arr.push("1");
                  setHeregselCounter([...arr]);
                }}
              >
                <i className="fas fa-plus"></i>
                <p className="text-sm font-semibold">Хэрэгсэл нэмэх</p>
              </div>
            </div>
            <div className="mt-2.5">
              {heregselCounter &&
                heregselCounter.map((item: any, index: number) => {
                  return index !== 0 ? (
                    <div
                      key={item?.id || index}
                      className={`flex py-5 ${
                        heregselCounter.length !== index + 1 ? "border-b" : ""
                      }`}
                    >
                      <div className="mr-4 text-gray-800 text-sm font-semibold">
                        {index}.
                      </div>
                      <div className="w-full grid grid-cols-3 gap-4">
                        <label>
                          <p className="font-semibold text-sm text-gray-800 pl-3">
                            Хэрэгсэл
                          </p>
                          <select
                            name=""
                            id=""
                            className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                          >
                            <option value="" selected disabled hidden>
                              Сонгох
                            </option>
                            {heregselData.map((item: any, index: number) => {
                              return (
                                <option key={item?.id || index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                        <label>
                          <p className="font-semibold text-sm text-gray-800 pl-3">
                            Хүн
                          </p>
                          <select
                            className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                          >
                            <option value="" selected disabled hidden>
                              Сонгох
                            </option>
                            {hunData.map((item: any, index: number) => {
                              return (
                                <option key={item?.id || index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                        <label>
                          <p className="font-semibold text-sm text-gray-800 pl-3">
                            Размер
                          </p>
                          <select
                            className="mt-2 w-full bg-white border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-skyresort
										focus:border-skyresort"
                          >
                            <option value="" selected disabled hidden>
                              Сонгох
                            </option>
                            {razmerData.map((item: any, index: number) => {
                              return (
                                <option key={item?.id || index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
            </div>
          </div>

          {/*
					form 3 Хэрэгсэл хангах үйлчилгээ end
					 */}

          {/*
					form 4 Төлбөрийн Нөхцөл
					 */}
          <div className="rounded bg-white px-7 pt-4 pb-8 mt-5">
            <div className="flex border-b pb-4 space-x-4 items-center">
              <span className="px-4 py-2 rounded-full bg-skyresort font-medium text-gray-800">
                4
              </span>
              <p className="text-lg font-medium text-gray-800">
                Төлбөрийн нөхцөл
              </p>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 font-sans">
              {TulburiinNuhtsul &&
                TulburiinNuhtsul.map((item: any, index: number) => {
                  return (
                    <div
                      key={item?.id || index}
                      className={`px-4 py-4 bg-gray-100 rounded border-2 border-gray-100 ${
                        tulburSelected === index ? "border-skyresort" : ""
                      } cursor-pointer`}
                      onClick={() => setTulburSelected(index)}
                    >
                      <div className="flex space-x-4">
                        <img
                          src={item.img}
                          alt=""
                          width="48px"
                          height="48px"
                          className="rounded-lg"
                        />
                        <div className="text-gray-800">
                          <p className="font-semibold text-sm">{item.title}</p>
                          <p className="text-xs mt-1.5">{item.type}</p>
                        </div>
                      </div>
                      <p className="mt-2.5 text-sm text-gray-800">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
          {/*
					form 4 Төлбөрийн Нөхцөл
					 */}
        </div>
        <div className="col-span-12 sm:col-span-4">
          <div className="rounded bg-white p-5">
            {/* Сагсан дахь барааны хэсэг---> */}
            <div className="text-gray-800">
              <div className="border-b pb-5 font-medium text-lg">
                <p>
                  Сагсан дахь барааны <span>({cartItems.length})</span>
                </p>
              </div>
              <div className="mt-3">
                {cartItems &&
                  cartItems.map((item: any, index: number) => {
                    return (
                      <div className="border-b py-2.5 w-full flex">
                        <img
                          src={item.image}
                          alt=""
                          width="90px"
                          height="90px"
                          className="rounded"
                        />
                        <div className="w-full pl-5">
                          <RenderAtom
                            item={{ value: item.title }}
                            defaultAtom="title"
                            customClassName="font-bold"
                          />
                          <RenderAtom
                            item={{ value: item.price }}
                            defaultAtom="currency"
                            customClassName="font-bold text-sm text-green-600"
                          />
                          <div className="w-full flex justify-between mt-4">
                            <div
                              className="text-gray-800 font-bold text-xl flex space-x-6 py-1 px-2 rounded-3xl 
															bg-skyresort"
                            >
                              <i
                                className="fas fa-minus cursor-pointer "
                                onClick={() => {
                                  setlist[index](
                                    list[index] === 0 ? 0 : list[index] - 1
                                  );
                                  setlist1[index](
                                    parseInt(item.price) *
                                      (list[index] - 1 < 0
                                        ? 0
                                        : list[index] - 1)
                                  );
                                }}
                              ></i>
                              <p>{list[index]}</p>
                              <i
                                className="fas fa-plus cursor-pointer"
                                onClick={() => {
                                  setlist[index](list[index] + 1);
                                  setlist1[index](
                                    (list[index] + 1) * parseInt(item.price)
                                  );
                                }}
                              ></i>
                            </div>
                            <RenderAtom
                              item={{ value: list1[index].toString() }}
                              defaultAtom="currency"
                              customClassName="font-bold text-lg"
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
            {/* ^Сагсан дахь барааны хэсэг^ */}
            <div className="font-sans mt-32">
              <div className="w-full flex items-center justify-between bg-red-100 rounded py-1 pl-2 pr-1 text-sm text-gray-800">
                <p>Гишүүний хөнгөлөлтийн эрх эдлэх</p>
                <div className="bg-white rounded flex py-3 px-3 items-center font-semibold">
                  <span className="">-3%</span>
                  <i className="far fa-tags"></i>
                </div>
              </div>
              <div className="border-t border-b py-5 mt-5">hey</div>
              <div className="mt-5 text-gray-800">
                <div className="flex justify-between text-lg">
                  <p>Хөнгөлөлт</p>
                  <p>-3%</p>
                </div>
                <div className="flex justify-between text-lg font-bold mt-2">
                  <p>Нийт дүн</p>
                  <RenderAtom
                    item={{ value: (grandTotal * 0.97).toString() }}
                    defaultAtom="currency"
                    customClassName=""
                  />
                </div>
                <button
                  className="mt-5 rounded-3xl w-full py-4 bg-skyresort
								border border-skyresort hover:bg-white hover:text-skyresort
								 uppercase text-gray-800 font-bold"
                >
                  Худалдан авалт хийх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutsSkyResort;
//data
const udrinTsag = [
  { title: "Эрт", time: "10:00-13:00 цагт" },
  { title: "Өдөр", time: "13:00-15:00 цагт" },
  { title: "Орой", time: "18:00-21:00 цагт" },
];
const HolbooBarihMedeelel = [
  {
    title: "Ургийн овог",
    type: "text",
  },
  {
    title: "Эцэг эхийн нэр",
    type: "text",
  },
  {
    title: "Нэр",
    type: "text",
  },
  {
    title: "Гар утас",
    type: "number",
  },
  {
    title: "Гэрийн утас",
    type: "number",
  },
  {
    title: "И-мэйл",
    type: "email",
  },
];
const TulburiinNuhtsul = [
  {
    title: "QPay",
    type: "Данс, эсвэл QR код",
    desc: "Төлбөрийг дансаар шилжүүлэх. Мобайл банк, интэрнет банк, QR код ашиглан төлөх.",
    img: "data:image/jpeg;base64,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",
  },
  {
    title: "Хаан банк",
    type: "Карт",
    desc: "Хаан банкны картаар төлбөр төлөх.Интернет Пин код шаардлагатай.",
    img: "https://qpay.mn/q/img/1.png",
  },
  {
    title: "Голомт банк",
    type: "Карт",
    desc: "Голомт банкны карт ашиглан төлбөр төлөх.",
    img: "https://play-lh.googleusercontent.com/9tUBesUsI4UIkpgO1MPIMLFvhDa_4vZE75TrVAUHFA7a0bJ7IIgeyh2r1QXs9VlmXmkX",
  },
  {
    title: "Худалдаа Хөгжлийн банк",
    type: "Карт",
    desc: "Худалдаа Хөгжлийн банкны картаар төлбөр төлөх.Интернет Пин код шаардлагатай.",
    img: "https://content.ikon.mn//news/2015/5/6/da2217_tdbm_x800.jpg",
  },
  {
    title: "Social Pay",
    type: "Цахим хэтэвч",
    desc: "Голомт банкны Social Pay цахим хэтэвч ашиглан төлбөр төлөх.",
    img: "https://golomtbank.com/wp-content/uploads/2020/07/SP_logo1.png",
  },
  {
    title: "Most Money",
    type: "Цахим хэтэвч",
    desc: "Худалдаа Хөгжлийн банкны Most Money үйлчилгээгээр төлбөр төлөх. Та ТАН код ашиглана уу.",
    img: "data:image/png;base64,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",
  },
  {
    title: "Meme Pay",
    type: "Цахим хэтэвч",
    desc: "Meme chat ашиглан төлбөрөө төлөх.",
    img: "https://image.winudf.com/v2/image1/Y29tLnhncm91bmQuaW1faWNvbl8xNTU0NTYxNzIxXzAxOA/icon.png?w=&fakeurl=1",
  },
  {
    title: "Pocket",
    type: "Цахим хэтэвч",
    desc: "Pocket хэтэвчээ ашиглан төлбөр төлөх.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pocket_logo.png",
  },
];
const cartItems = [
  {
    title: "Уулын цана",
    price: "20000",
    image:
      "https://dev.veritech.mn/storage/uploads/process/202111/file_1638248186358713_160870170544911.jpg",
  },
  {
    title: "SnowBoard",
    price: "50000",
    image:
      "https://dev.veritech.mn/storage/uploads/process/202111/file_1638248186358713_160870170544911.jpg",
  },
  {
    title: "Чарга",
    price: "100000",
    image:
      "https://dev.veritech.mn/storage/uploads/process/202111/file_1638248186358713_160870170544911.jpg",
  },
];
const heregselData = ["Цана", "SnowBoard", "etc2"];
const hunData = ["Том хүн", "Дунд хүн", "Жижиг хүн"];
const razmerData = ["36", "38", "40", "42", "44", "46", "48"];
