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

const Checkouts2Weekly2 = () => {
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
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  if (isEmpty(datasrc)) return null;
  // console.log("Checkouts2Weekly2 config", config);
  // console.log("Checkouts2Weekly2 datasrc", datasrc);
  // console.log("Checkouts2Weekly2 otherattr", otherattr);
  // console.log("Checkouts2Weekly2 positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
        <div className="flex gap-3">
        <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">3</p>
         <RenderAtom
               item={item?.position1}
               defaultAtom="title"
               customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
              />
        </div>
        <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-3">
            {readyDatasrc &&
                  readyDatasrc.map((item: any, index: number) => {
                    return (
                        <div className="flex flex-col justify-start items-start w-full">
                           <RenderAtom
                            item={item?.position2}
                            defaultAtom="text"
                            customClassName="text-base leading-4 text-gray-600 tracking-tighter "
                           />
                      </div>
                    )
                  })}
               </div>
               <div className="flex justify-between mt-4 relative gap-5 ">
                      <button className="bg-white text-gray-700 flex items-center justify-center border border-red-400 rounded-md hover:border-blue-300 text-xs focus:outline-none">
                          <span className="p-3 ml-3">-Сонгох-</span>
                          <span className="py-3 rounded-r px-2" onClick={() => setshow2(!show2)}>
                              <svg xmlns="http://www.w3.org/2000/svg" width={50} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" />
                                  <polyline points="6 9 12 15 18 9" />
                              </svg>
                          </span>
                      </button>
                      {show2 && (
                        
                          <ul className="bg-white shadow roundedt mt-10 py-1 absolute right-0 left-0 top-0  dropdown-content">
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">-Сонгох-</li>
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">2021-11-16</li>
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">2021-11-17</li>
                              <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-300 hover:text-white px-3 font-normal">2021-11-18</li>
                          </ul>
                      )}
                       <button className="bg-white text-gray-700  font-normal py-2 px-4 border border-red-500 hover:bg-red-500 hover:text-white rounded-md center ">
                            Маргааш
                          </button>
                          <button className="bg-white text-gray-700  font-normal py-2 px-4 border border-red-500 hover:bg-red-500 hover:text-white rounded-md center">
                            Нөгөөдөр
                          </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 w-full  gap-3 ">
               {readyDatasrc &&
                  readyDatasrc.map((item: any, index: number) => {
                    return (
                      
                      <button className=" bg-gray-100 mt-5 py-4 px-8 rounded  mx-2 my-2 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 "> 
                       <RenderAtom
                            item={item?.position3}
                            defaultAtom="text"
                            customClassName="text-sm leading-4 text-gray-800  font-bold checkbox checked:border-none "
                           />
                           <RenderAtom
                            item={item?.position4}
                            defaultAtom="text"
                            customClassName="text-sm leading-4 text-gray-500 mt-2 "
                           />
                          </button>
                 
                    );
                  })}
                  </div>
          </div>
          <div className=" mt-5 p-3 bg-yellow-100 rounded">
              <p>"Covid 19"-н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт, хүргэлтэд их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та ойлгоорой.</p>
              <div className="flex items-center m-1 gap-1 mt-5 "> 
                  < input
                  className="bg-yellow-100 border-gray-300"
                  type="checkbox"
              />
              <p className="text-sm text-blue-500">Яаралтай хүргэлтээр (30мин - 2)</p>
              
              </div>
          </div>
        </div>
        
      </div>
      <style>
        {`
            .checkbox:checked + .check-icon {
                display: flex;
            }`}
      </style>
    </div>
  );
};

export default Checkouts2Weekly2;
