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
} from "@components/common/Atom";
export default function Checkout5Part3Orgil() {
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
  const [dropdown1, setDropdown1] = useState(false);
  const [changeText1, setChangeText1] = useState("Expiry Date");
  if (isEmpty(datasrc)) return null;
  // console.log("Checkout5Part3 config", config);
  // console.log("Checkout5Part3 datasrc", datasrc);
  // console.log("Checkout5Part3 otherattr", otherattr);
  // console.log("Checkout5Part3 positionConfig", positionConfig);

  const HandleText1 = (e: any) => {
    setChangeText1(e);
    setDropdown1(false);
  };
  const item = datasrc[0];
  return (
    <div>
      <div className="flex justify-center items-center bg-white shadow-xl">
        <div className="">
          <div className="flex flex-col justify-start items-start w-full p-6 ">
            <div>
            <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
        />
             
            </div>
            <hr className=" w-full mt-1" />
            <div className="flex mt-7 flex-col items-end w-full space-y-6">
              <div className="flex justify-between w-full items-center">
              <AtomText
                  item={renderPositionType(item, "position90", positionConfig)}
                  customClassName="text-base font-medium leading-4 text-gray-600"
                />
                 <AtomCurrency
                type="mnt"
                item={renderPositionType(item, "position4", positionConfig)}
                customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
              />
              </div>
              <div className="flex justify-between w-full items-center ">
              <AtomText
                  item={renderPositionType(item, "position91", positionConfig)}
                  customClassName="text-base font-medium leading-4 text-gray-600"
                />
                <AtomCurrency
                type="mnt"
                item={renderPositionType(item, "position3", positionConfig)}
                customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
              />
              </div>
              <hr className=" w-full mt-1" />
              <div className="flex justify-between w-full items-center">
              <AtomText
                  item={renderPositionType(item, "position93", positionConfig)}
                  customClassName="text-base font-semibold uppercase leading-4 text-gray-700"
                />
                  <AtomCurrency
                type="mnt"
                item={renderPositionType(item, "position92", positionConfig)}
                customClassName="text-base md:text-base font-semibold leading-5 text-gray-600 mt-3"
              />
              </div>
              <div className=" mt-5 p-3 bg-yellow-100 rounded">
              <AtomText
                  item={renderPositionType(item, "position94", positionConfig)}
                  customClassName="text-xs  text-gray-500"
                />
              <div className="flex items-center m-1 gap-1 "> 
                  < input
                  className="bg-yellow-100 border-gray-300"
                  type="checkbox"
              />
              <p className="text-sm text-gray-600">Зөвшөөрч байна</p>
              </div>
             
          </div>
            </div>
            <div className="flex justify-between w-full items-center mt-10">
            <button className="bg-red-500 text-white uppercase font-normal w-full p-3 border border-red-500 hover:bg-white hover:text-red-500 rounded-full center  ">
                            худалдан авалт хийх
                          </button>
            </div>
          </div>
        </div>
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
