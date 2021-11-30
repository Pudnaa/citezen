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

const Checkouts2Weekly = () => {
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
  if (isEmpty(datasrc)) return null;
  // console.log("Checkouts2Weekly config", config);
  // console.log("Checkouts2Weekly datasrc", datasrc);
  // console.log("Checkouts2Weekly otherattr", otherattr);
  // console.log("Checkouts2Weekly positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="py-10 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
        <div className="flex gap-3">
        <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">1</p>
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
                       
                        <input
                          className="mt-2 bg-white border rounded border-gray-300 w-full p-1 placeholder-gray-600 text-base leading-4 text-gray-600"
                          type="text"
                          placeholder=""
                        />
                      </div>
                   
                    );
                  })}
               </div>
          </div>
          <div className=" mt-5 p-3 bg-yellow-100 rounded">
              <p>"Covid 19"-н нөхцөл байдлаас шалтгаалаад захиалгын татан авалт, хүргэлтэд их цаг хугацаа шаардаж байгааг эрхэм хэрэглэгч та ойлгоорой.</p>
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

export default Checkouts2Weekly;
