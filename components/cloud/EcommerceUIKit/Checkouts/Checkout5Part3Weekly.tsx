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
import RenderAtom from "@components/common/Atom/RenderAtom";

export default function Checkout5Part3Weekly() {
  const {
    config,
    readyDatasrc,
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
  if (isEmpty(readyDatasrc)) return null;
  // console.log("Checkout5Part3Weekly config", config);
  // console.log("Checkout5Part3Weekly datasrc", datasrc);
  // console.log("Checkout5Part3Weekly otherattr", otherattr);
  // console.log("Checkout5Part3Weekly positionConfig", positionConfig);

  const HandleText1 = (e: any) => {
    setChangeText1(e);
    setDropdown1(false);
  };
  const item = readyDatasrc[0];
  return (
    <div>
      <div className="flex justify-center items-center bg-white shadow-xl">
        <div className="">
          <div className="flex flex-col justify-start items-start w-full p-6 ">
            <div>
            <RenderAtom
               item={item?.position1}
               defaultAtom="title"
               customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
              />
            </div>
            <hr className=" w-full mt-1" />
            <div className=" mt-5 p-3 bg-yellow-100 rounded">
             <p className="text-sm text-gray-600">Гишүүний хөнгөлөлтийн эрх эдлэх</p> 
          </div>
            <hr className=" w-full mt-1" />
            <div className="flex justify-end">
            <input
                          className="m-3 bg-white border rounded border-gray-300 w-full  placeholder-gray-400 text-xs leading-3 text-gray-600"
                          type="text"
                          placeholder="Зурган дээрх кодыг бичнэ үү"
                        />
            </div>
            <hr className=" w-full mt-1" />
            <div className="flex mt-7 flex-col items-end w-full space-y-6 ">
              <div className="flex justify-between w-full items-center">
              <RenderAtom
               item={item?.position90}
               defaultAtom="title"
               customClassName="text-base font-medium leading-4 text-gray-600"
              />
               <RenderAtom
               item={item?.position4}
               defaultAtom="text"
               customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
              />
              </div>
              <div className="flex justify-between w-full items-center ">
                  
              <RenderAtom
               item={item?.position91}
               defaultAtom="text"
               customClassName="text-base font-medium leading-4 text-gray-600"
              />
               <RenderAtom
               item={item?.position3}
               defaultAtom="currency"
               customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
              />
              </div>
              <hr className=" w-full mt-1" />
              <div className="flex justify-between w-full items-center">
              <RenderAtom
               item={item?.position93}
               defaultAtom="text"
               customClassName="text-base font-semibold uppercase leading-4 text-gray-700"
              />
                <RenderAtom
               item={item?.position92}
               defaultAtom="currency"
               customClassName="text-base md:text-base font-medium leading-5 text-gray-600 mt-3"
              />
              </div>
            </div>
            <div className="flex justify-between w-full items-center mt-10">
            <button className="bg-red-500 text-white uppercase font-normal w-full p-3 border border-red-500 hover:bg-white hover:text-red-500 rounded-full center  ">
                            худалдан авалт хийх
                          </button>
            </div>
            
            <div className=" mt-5 p-3 bg-yellow-100 rounded">
              <RenderAtom
               item={item?.position94}
               defaultAtom="text"
               customClassName="text-xs  text-gray-500"
              />
              <div className="flex items-center m-1 gap-1 "> 
                  < input
                  className="bg-yellow-100 border-gray-300"
                  type="checkbox"
              />
              <p className="text-sm text-blue-500">Тийм</p>
              </div>
             
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
