import { Fragment, useContext, useEffect, useState } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { indexOf, isEmpty } from "lodash";
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

const Faq8 = () => {
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
  // irj bui data-nii array-n toogoor state uusgenuu datasrc.length == 6 bol 6 shirheg state uusgene
  const [open, setOpen] = useState([100]);
  const items = [1, 2, 3, 4, 5, 6]; // Ирэх өгөгдөл
  const counter = Math.ceil(items.length / 2) - 1; // irsen ugugdliin toonoos shaltgaalan ehnii murd hed ni oroh too
  if (isEmpty(datasrc)) return null;
  // console.log("Faq8 config", config);
  //console.log("Faq8 datasrc", datasrc);
  // console.log("Faq8 otherattr", otherattr);
  // console.log("Faq8 positionConfig", positionConfig);
  const isMoto = otherattr.type === "moto";
  return !isMoto ? (
    <div className=" lg:container lg:mx-auto">
      <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        FAQ_s
      </h1>

      <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
        <div className=" flex justify-between md:flex-row flex-col ">
          <div className=" md:mb-0 mb-8 md:text-left text-center">
            <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">
              Questions
            </h2>
            <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">
              If you don’t find your answer, Please contact us or Leave a
              Message, we’ll be more than happy to assist you.
            </p>
          </div>

          <div className=" flex justify-center items-center">
            <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
              <input
                className="focus:outline-none focus:border-none bg-white border-none"
                type="text"
                placeholder="Search"
              />
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21L15 15"
                  stroke="#4B5563"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-8/12 w-full mx-auto">
        {datasrc &&
          datasrc.map((item: any, index: number) => {
            return (
              <div key={index}>
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                  <div
                    id="mainHeading"
                    className="flex justify-between items-center w-full"
                  >
                    <div className=" ">
                      <div className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                        {" "}
                        <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                          Q{index + 1}.
                        </span>
                        <AtomText
                          item={renderPositionType(
                            item,
                            "position1",
                            positionConfig
                          )}
                        />
                      </div>
                    </div>
                    <button
                      aria-label="toggler"
                      className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                      onClick={() => {
                        var array = [...open];
                        if (array.includes(index)) {
                          array.splice(array.indexOf(index), 1);
                        } else {
                          array.push(index);
                        }
                        setOpen(array);
                      }}
                    >
                      <svg
                        className={
                          "transform " +
                          (open.includes(index) ? "rotate-180" : "rotate-0")
                        }
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 9L12 15L18 9"
                          stroke="black"
                          strokeWidth="1.33333"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    id="menu"
                    className={
                      "mt-6 w-full " +
                      (open.includes(index) ? "block" : "hidden")
                    }
                  >
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-base leading-6 text-gray-600 font-normal"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        <hr className=" w-full lg:mt-10 my-8" />
      </div>
    </div>
  ) : (
    <div className="mt-10">
      <div className="flex">
        <h1 className="text-moto font-bold text-2xl whitespace-nowrap leading-3">
          Ерөнхий мэдээлэл
        </h1>
        <div className="w-full border-b"></div>
      </div>
      <div className="mt-5">
        <div className="flex">
          <div className="w-1/2 pr-5">
            {items.map((item: any, index: number) => {
              return index <= counter ? (
                <div key={index} className="w-full">
                  <div
                    className="flex justify-between border-b pt-5 pb-2 cursor-pointer"
                    onClick={() => {
                      let array = [...open];
                      if (array.includes(index)) {
                        array.splice(array.indexOf(index), 1);
                      } else {
                        array.push(index);
                      }
                      setOpen(array);
                    }}
                  >
                    <h1 className="font-bold text-2xl">Техник үзүүлэлт</h1>
                    <i
                      className={`fas fa-${
                        open.includes(index) ? "minus" : "plus"
                      }-circle text-moto text-2xl cursor-pointer`}
                      //onClick={() => setlist[index](!list[index])}
                    ></i>
                  </div>
                  <div
                    className={`font-medium text-gray-500 text-sm py-6 ${
                      open.includes(index) ? "" : "hidden"
                    }`}
                  >
                    “Би дэмжинэ, би нэгдэнэ” уриан дор Хавдартай тэмцэх дэлхийн
                    өдрийг өнөөдөр бүх улс оронд тэмдэглэн өнгөрүүлж байна. Хүн
                    төрөлхтнийг айдаст автуулсан энэ өвчнийг ялж болох хамгийн
                    энгийн алхам бол маш сайн урьдчилан сэргийлэлт гэдгийг эмч
                    нар хэлдэг. Энэ ч үүднээс жил бүр Хавдартай тэмцэх дэлхийн
                    өдрөөр Хавдар судлалын үндэсний төв (ХСҮТ)-өөс хэвлэл
                    мэдээллийн байгууллагын сэтгүүлчдийг урьж, Монгол дахь хорт
                    хавдрын өвчлөлийн өнөөгийн нөхцөл байдал, “Хавдрын эсрэг
                    үндэсний аян”-ы хүрээнд хийсэн ажлаа танилцуулж, энэ өвчнөөс
                    хүн амыг хэрхэн урьдчилан сэргийлэх, иргэдийн эрүүл мэндийн
                    боловсролыг дээшлүүлэх талаар санал солилцож, уулзалт
                    өдөрлөг зохион байгуулдаг уламжлалтай.
                  </div>
                </div>
              ) : (
                ""
              );
            })}
          </div>
          <div className="w-1/2 pl-5">
            {items.map((item: any, index: number) => {
              return index > counter ? (
                <div key={index} className="w-full">
                  <div
                    className="flex justify-between border-b pt-5 pb-2 cursor-pointer"
                    onClick={() => {
                      let array = [...open];
                      if (array.includes(index)) {
                        array.splice(array.indexOf(index), 1);
                      } else {
                        array.push(index);
                      }
                      setOpen(array);
                    }}
                  >
                    <h1 className="font-bold text-2xl">Техник үзүүлэлт</h1>
                    <i
                      className={`fas fa-${
                        open.includes(index) ? "minus" : "plus"
                      }-circle text-moto text-2xl cursor-pointer`}
                      //onClick={() => setlist[index](!list[index])}
                    ></i>
                  </div>
                  <div
                    className={`font-medium text-gray-500 text-sm py-6 ${
                      open.includes(index) ? "" : "hidden"
                    }`}
                  >
                    “Би дэмжинэ, би нэгдэнэ” уриан дор Хавдартай тэмцэх дэлхийн
                    өдрийг өнөөдөр бүх улс оронд тэмдэглэн өнгөрүүлж байна. Хүн
                    төрөлхтнийг айдаст автуулсан энэ өвчнийг ялж болох хамгийн
                    энгийн алхам бол маш сайн урьдчилан сэргийлэлт гэдгийг эмч
                    нар хэлдэг. Энэ ч үүднээс жил бүр Хавдартай тэмцэх дэлхийн
                    өдрөөр Хавдар судлалын үндэсний төв (ХСҮТ)-өөс хэвлэл
                    мэдээллийн байгууллагын сэтгүүлчдийг урьж, Монгол дахь хорт
                    хавдрын өвчлөлийн өнөөгийн нөхцөл байдал, “Хавдрын эсрэг
                    үндэсний аян”-ы хүрээнд хийсэн ажлаа танилцуулж, энэ өвчнөөс
                    хүн амыг хэрхэн урьдчилан сэргийлэх, иргэдийн эрүүл мэндийн
                    боловсролыг дээшлүүлэх талаар санал солилцож, уулзалт
                    өдөрлөг зохион байгуулдаг уламжлалтай.
                  </div>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq8;
