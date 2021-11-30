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
  AtomIconV2,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
export default function MotoFilter() {
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
  const [show, setShow] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("Filter3 config", config);
  // console.log("Filter3 datasrc", datasrc);
  //console.log("Filter3 otherattr", otherattr);
  // console.log("Filter3 positionConfig", positionConfig);

  return (
    <div className="bg-gray-100 py-11 px-6 text-black text-xs rounded-2xl">
      <div className="text-xs py-2">
        <p className="font-bold">Шүүлтүүр</p>
        <div className="relative">
          <input
            type="text"
            placeholder="Нэрээр хайх"
            className="py-2 pl-5 rounded-2xl mt-2 w-full font-medium text-xs border-gray-400 focus:border-moto hover:border-moto"
          />
          <AtomIcon
            item="fas fa-search"
            customClassName="absolute text-base bottom-1 right-2"
            color="moto"
          />
        </div>
      </div>
      <div className="text-xs py-2">
        <p className="font-bold">Зарын төрөл</p>
        <div className="relative">
          <select
            name=""
            id=""
            className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-black"
          >
            <option value="">Авто зар</option>
            <option value="">Авто зар</option>
            <option value="">Авто зар</option>
            <option value="">Авто зар</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-xs">
          <p className="font-bold">Үйлдвэр</p>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
        <div className="text-xs">
          <p className="font-bold">Загвар</p>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Авто зар</option>
              <option value="">Авто зар1</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-xs">
          <p className="font-bold">Орж ирсэн он</p>
          <div className="relative">
            <select
              placeholder="Доод"
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Доод</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
        <div className="text-xs">
          <br />
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Дээд</option>
              <option value="">Авто зар1</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-xs">
          <p className="font-bold">Хөдөлгүүр</p>
          <div className="relative">
            <select
              placeholder="Доод"
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            ></select>
          </div>
        </div>
        <div className="text-xs">
          <p className="font-bold">Хурдны хайрцаг</p>
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 py-2">
        <div className="text-xs">
          <p className="font-bold">Орж ирсэн он</p>
          <div className="relative">
            <select
              placeholder="Доод"
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Доод</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
        <div className="text-xs">
          <br />
          <div className="relative">
            <select
              name=""
              id=""
              className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
            >
              <option value="">Дээд</option>
              <option value="">Авто зар1</option>
              <option value="">Авто зар</option>
              <option value="">Авто зар</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className="text-xs font-bold">Үнэ</p>
        <div className="grid grid-cols-2 gap-2 py-2">
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Доод үнэ</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Дээд үнэ</option>
                <option value="">Авто зар1</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Хөдөлгүүр</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Хурдны хайрцаг</option>
                <option value="">Авто зар1</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Нөхцөл</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Төрөл</option>
                <option value="">Авто зар1</option>
                <option value="">Авто зар</option>
                <option value="">Авто зар</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <p className="text-xs font-bold">Явсан</p>
        <div className="grid grid-cols-2 gap-2 py-2">
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Доод</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Дээд</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Хөтлөгч</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Хүрд</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="">
              <select
                placeholder="Доод"
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Лизинг</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Өнгө</option>
              </select>
            </div>
          </div>
          <div className="text-xs">
            <div className="relative">
              <select
                name=""
                id=""
                className="w-full py-2 pl-5 rounded-2xl mt-2 font-medium text-xs border-gray-400 hover:border-moto text-gray-500"
              >
                <option value="">Солино</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 w-full">
        <AtomButton
          item="Хайх"
          customClassName="rounded-xl bg-moto py-3 font-bold text-sm w-full hover:bg-white hover:text-moto border border-moto"
          color=""
        />
      </div>

      <style>
        {`
            .checkbox:checked + .check-icon {
             display: flex;
            }
            `}
      </style>
    </div>
  );
}
