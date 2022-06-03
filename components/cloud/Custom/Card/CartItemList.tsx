import { FC } from "react";
import {
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import moment from "moment";
import RenderAtom from "@components/common/Atom/RenderAtom";
import {
  AtomList,
  AtomTitleV2,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomLink,
  AtomImageV2,
} from "@components/common/Atom";
type PropsType = {
  item: any;
  position: any;
  type: any;
};

const CartItemList: FC<PropsType> = ({ item, position, type }) => {
  // console.log("Card101", position);
  return (
    <div>
      <div className=" w-full relative py-4 border-b border-gray-200">
        <div className=" ">
          <RenderAtom
            item={item?.position1}
            defaultAtom="title"
            customClassName="text-base font-normal text-blue-400 hover:text-blue-500"
            customProps={{
              truncateRow: 50,
            }}
          />
          {/* {item.position22} */}
          <RenderAtom
            item={item?.position22}
            defaultAtom="text"
            customClassName="text-sm"
            customProps={{
              truncateRow: 30,
            }}
          />
          {/* <span> {renderPositionType(item, "position22", position)}</span> */}
        </div>
        <div className="flex items-start justify-between w-full pt-4">
          <div className="flex">
            <span>
              Хариулсан:{" "}
              <span className="border border-gray-300 px-2 rounded-md text-xs text-gray-800 dark:text-gray-100 font-normal">
                2
              </span>
            </span>
            <div className="px-6 flex items-center gap-2  sm:flex-row justify-between flex-wrap cursor-pointer">
              <div className="bg-blue-500  h-6 px-2  mb-4 md:mb-0 rounded-md flex items-center justify-center">
                <span className="text-xs text-white font-normal">
                  expression
                </span>
              </div>
              <div className="bg-blue-500 h-6 px-2  mb-4 md:mb-0 rounded-md flex items-center justify-center cursor-pointer">
                <span className="text-xs text-white font-normal">
                  Чиг үүрэг
                </span>
              </div>
            </div>
            {/* <p className="text-base pl-4">
              {" "}
              <RenderAtom
                item={item?.position42}
                defaultAtom="text"
                customClassName="text-xs font-medium leading-5 text-gray-400 "
              />
            </p> */}
          </div>
          <div>
            <div className="flex items-center mb-4 lg:mb-0 mr-10">
              <div className="w-12 h-12 bg-cover rounded-md mr-3">
                <img
                  src="https://dev.veritech.mn/storage/uploads/process/file_1587451363050236_15677537796831.png"
                  alt="profile"
                  className="rounded h-full w-full overflow-hidden shadow"
                />
              </div>
              <div>
                <p className="text-gray-800 dark:text-gray-100 text-base font-medium">
                  {renderPositionType(item, "position87", position)}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  {/* огноо:{" "} */}
                  <AtomText
                    item={renderPositionType(item, "position5", position)}
                    customClassName="text-xs font-medium py-1 text-gray-700 text-right  "
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
