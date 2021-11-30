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
} from "@components/common/Atom";

export default function ExpandedChat() {
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

  //console.log("ExpandedChat -> ", datasrc);
  //console.log(otherattr.type);
  const isMoto = otherattr.type === "moto";
  return isMoto ? (
    <div className="w-full">
      <div className="border-b pb-5 font-bold text-sm">Сэтгэгдэл</div>
      <div className="pt-5">
        <div className="flex justify-between">
          <p className="text-gray-500">20 сэтгэгдэл</p>
          <i className="fas fa-angle-down text-moto"></i>
        </div>
        <div>
          <div className="w-full flex pt-7">
            <div className="px-4">
              <img
                src="https://c.disquscdn.com/uploads/users/34079/3119/avatar92.jpg?1578285889"
                alt=""
                width="62px"
                height="62px"
                className="rounded-full rounded-full border-4 border-moto"
              />
            </div>
            <div className="border-b w-full pb-5 px-5">
              <div className="flex mb-2">
                <p className="mr-4 font-bold">Админ</p>
                <p className="text-gray-500">2021-04-27</p>
              </div>
              <div className="mb-2">
                <p className="text-gray-500">
                  Proactively fabricate one-to-one materials via effective
                  e-business. Completely synergize scalable e-commerce rather
                  than high standards in e-services.
                </p>
              </div>
              <div>
                <span className="text-moto hover:text-green-700 cursor-pointer">
                  Reply
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex pt-7 pl-20">
            <div className="px-4">
              <img
                src="https://c.disquscdn.com/uploads/users/34079/3119/avatar92.jpg?1578285889"
                alt=""
                width="62px"
                height="62px"
                className="rounded-full rounded-full border-4 border-moto"
              />
            </div>
            <div className="border-b w-full pb-5 px-5">
              <div className="flex mb-2">
                <p className="mr-4 font-bold">Админ</p>
                <p className="text-gray-500">2021-04-27</p>
              </div>
              <div className="mb-2">
                <p className="text-gray-500">
                  Proactively fabricate one-to-one materials via effective
                  e-business. Completely synergize scalable e-commerce rather
                  than high standards in e-services.
                </p>
              </div>
              <div>
                <span className="text-moto hover:text-green-700 cursor-pointer">
                  Reply
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <form action="">
            <div className="w-full">
              <textarea
                placeholder="Бичих талбар"
                className="w-full h-auto rounded-lg pl-6 pt-4 resize-none border border-gray-400 text-xs"
                style={{ height: "110px" }}
              />
            </div>
            <div className="w-full mt-5">
              <input
                type="email"
                className="w-full rounded-lg text-xs border border-gray-400 pl-6 "
                placeholder="Имэйл"
              />
            </div>
            <div className="flex mt-5">
              <input
                type="submit"
                className="px-11 py-3 font-bold text-xs bg-moto rounded-2xl text-white mr-5 cursor-pointer
                hover:bg-white border border-moto hover:text-moto"
                value="Илгээх"
              />
              <input
                className="px-11 py-3 font-bold text-xs bg-white rounded-2xl text-moto border-2 border-moto cursor-pointer
                hover:bg-moto hover:text-white"
                value="Арилгах"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full">
      {/* CHAT */}
      <div className="">
        <div className="chat-header py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center pb-4">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-5 text-gray-800">
                Сэтгэгдэл
              </p>
            </div>
          </div>
          <div className="flex items-center pl-3 bg-white  rounded-lg border">
            <svg
              className="text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L12.5 12.5"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              className="py-2.5 pl-1 w-full focus:outline-none text-sm rounded-lg text-gray-600 placeholder-gray-500 border-0"
              placeholder="Хайх "
            />
          </div>
        </div>
        <div className="chat-container py-4">
          {datasrc.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex justify-between px-4 mt-4">
                  <div className="flex">
                    <div className="w-16">
                      <img
                        src={renderPositionType(
                          item,
                          "position2",
                          positionConfig
                        )}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="w-full pl-2">
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        link=""
                        customStyle={{}}
                        customClassName="text-sm md:text-xl font-medium text-gray-700"
                        truncateRow={2}
                      />
                      <AtomText
                        item="desc"
                        customClassName="text-sm leading-5 font-normal text-gray-500 "
                      />
                    </div>
                  </div>
                  <div>
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position5",
                        positionConfig
                      )}
                      customClassName="text-xs font-medium py-1 text-gray-700 text-right  "
                    />
                  </div>
                </div>
                <div className="px-4">
                  <AtomText
                    item={renderPositionType(item, "position3", positionConfig)}
                    customClassName="text-sm leading-5 font-normal py-2 text-gray-500 "
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
      {/* CHAT */}
      <div className="w-full py-1">
        <div className='flex h-full  rounded-xl  border p-4 h-10"'>
          {/* <div className='w-16 h-full flex items-center justify-center'></div> */}
          <input
            className='w-full focus:outline-none text-gray-700 pl-1 h-10"'
            placeholder="Сэтгэгдэл үлдээх "
          />
          <div className="flex">
            <div className="w-16 h-full flex items-center justify-end">
              <i className="fa fa-location-arrow text-green-500 rotate-2 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
