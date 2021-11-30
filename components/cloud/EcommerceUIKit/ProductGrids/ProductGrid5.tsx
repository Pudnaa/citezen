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
  AtomLink,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

const ProductGrid5 = () => {
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
  //console.log("ProductGrid5 config", config);
  // console.log("ProductGrid5 datasrc", datasrc);
  //console.log("ProductGrid5 otherattr", otherattr);
  // console.log("ProductGrid5 positionConfig", positionConfig);
  const item = datasrc[0];
  //const list = renderPositionType(item, "position31", positionConfig);

  const [show, setShow] = useState(9999);
  // Нүүр хуудас болон эд ангиуд хуудсанд ашиглагдаж байгаа type-раа gocars гэдгийг өгсөн тул widget-н гарчигаар
  // аль нь нүүр хуудас аль нь эд ангиуд хуудас болохийг ялгана
  const isHome = otherattr.title.title === "Сэлбэгийн каталог";

  const list = [
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10106.png",
      title: "Тоормозны систем",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10102.png",
      title: "Хөдөлгүүр",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10101.png",
      title: "Их бие",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage: "https://www.autodoc.co.uk/atd/img/tyres/23208.png",
      title: "Дугуйнууд",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10341.png",
      title: "Халаагч",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },

    {
      mainimage:
        "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/200x200/10112.png",
      title: "Жолоо",
      speclist1: [
        {
          title: "Тоормозны гишгүүр",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10130.png",
        },
        {
          title: "Тоормозны диск",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10132.png",
        },
        {
          title: "Тоормозны серьво",
          mainimage:
            "https://cdn.autodoc.de/uploads/custom-catalog/atd/categories/55x55/10125.png",
        },
      ],
    },
  ];
  return otherattr.type === "gocars" ? (
    <div className="">
      <div className={`grid grid-cols-${isHome ? "6" : "5"}`}>
        {list.map((item: any, index: number) => {
          if (isHome && index > 11) {
          } else {
            return (
              <div key={index} className="w-full relative">
                <div
                  className=" pb-5  border-b-2 cursor-pointer"
                  onClick={() => {
                    setShow(show === index ? 9999 : index);
                  }}
                >
                  <div className="w-full py-5 flex justify-center">
                    <img
                      src={item.mainimage}
                      alt=""
                      className="w-32 h-32 object-cover"
                    />
                  </div>
                  <div className="w-full text-center">
                    <p>{item.title}</p>
                  </div>
                </div>
                {/*in progress design later*/}
                <div
                  className={`absolute max-w-screen-xl ${
                    show !== index ? "hidden" : "hidden"
                  } py-5 bg-white z-10`}
                >
                  <div className="grid grid-cols-4">
                    {item.speclist1.map((item1: any, index1: number) => {
                      return (
                        <div key={index1} className="flex items-center">
                          <img src={item1.mainimage} alt="" />
                          <p className="underline">{item1.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/*works for now */}
                <div className={`w-full ${show !== index ? "hidden" : ""}`}>
                  {item.speclist1.map((item1: any, index1: number) => {
                    if (isHome && index1 > 3) {
                    } else {
                      return (
                        <AtomLink
                          key={index1}
                          item="/page/1637315644520249"
                          children={
                            <div className="flex items-center">
                              <img src={item1.mainimage} alt="" />
                              <p className="underline">{item1.title}</p>
                            </div>
                          }
                        />
                      );
                    }
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div
        className={`w-full flex justify-center mt-5 ${isHome ? "" : "hidden"}`}
      >
        <AtomLink
          item="/page/1637315553920451"
          children={
            <button className="mx-auto underline font-semibold py-5 px-16 bg-gray-200 rounded">
              Дэлгэрэнгүй харах
            </button>
          }
        />
      </div>
    </div>
  ) : (
    <div className=" 2xl:container 2xl:mx-auto">
      <div className=" bg-gray-50 text-center lg:py-10 md:py-8 py-6">
        <AtomTitle
          item={renderPositionType(item, "position1", positionConfig)}
          customClassName="w-10/12 mx-auto md:w-full  font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800"
        />
      </div>
      <div className=" py-6 lg:px-20 md:px-6 px-4">
        <p className=" font-normal text-sm leading-3 text-gray-600 ">
          Home / Shop by Category /{" "}
          {renderPositionType(item, "position41", positionConfig)}
        </p>
        <hr className=" w-full bg-gray-200 my-6" />

        <div className=" flex justify-between items-center">
          <div className=" flex space-x-3 justify-center items-center">
            <svg
              className=" cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.75 7.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 12H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
              <path
                d="M3.75 16.5H20.25"
                stroke="#1F2937"
                strokeMiterlimit="10"
                strokeLinecap="round"
              />
            </svg>
            <p className=" font-normal text-base leading-4 text-gray-800">
              Filter
            </p>
          </div>
          <p className=" cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
            Showing {list.length} products
          </p>
        </div>

        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {list &&
            list.map((item1: any, index1: number) => {
              return (
                <div key={index1}>
                  <div className="relative group">
                    <div className=" flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <AtomImage
                      item={renderPositionType(
                        item1,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-auto"
                      alt={renderPositionType(
                        item1,
                        "position1",
                        positionConfig
                      )}
                    />
                    <div className=" absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                      <button className=" font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                        Сагсанд нэмэх
                      </button>
                      <button className=" bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <AtomTitle
                    item={renderPositionType(item, "position1", positionConfig)}
                    customClassName=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4"
                  />
                  <AtomCurrency
                    type="mnt"
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="font-semibold text-xl leading-5 text-gray-800 mt-4"
                  />
                  <br />
                  <AtomText
                    item={
                      renderPositionType(item, "position3", positionConfig) +
                      " colors"
                    }
                    customClassName="font-normal text-base leading-4 text-gray-600 mt-4"
                  />
                </div>
              );
            })}
        </div>

        <div className=" flex justify-center items-center">
          <AtomButton
            color=""
            item="Load more"
            customClassName="hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductGrid5;
