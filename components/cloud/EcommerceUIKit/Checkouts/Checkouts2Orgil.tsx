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

const Checkouts2Orgil = () => {
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
  // console.log("Checkouts2 config", config);
  // console.log("Checkouts2 datasrc", datasrc);
  // console.log("Checkouts2 otherattr", otherattr);
  // console.log("Checkouts2 positionConfig", positionConfig);
  const item = datasrc[0];
  return (
    <div className="py-10 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
        <div className="flex gap-3">
        <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">1</p>
        <AtomTitle
            item={renderPositionType(item, "position1", positionConfig)}
            customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
        />
        </div>
        <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-3 w-full  gap-3">
            {datasrc &&
                  datasrc.map((item: any, index: number) => {
                    return (
                        <div className="flex flex-col justify-start items-start w-full">
                        <AtomText
                          item={
                            renderPositionType(
                              item,
                              "position2",
                              positionConfig
                            )
                          }
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
              <p>Та Оргил Үндэсний сүлжээ дэлгүүрээс эрхлэн гаргадаг сэтгүүл, хямдрал зэрэг мэдээллийг цаг алдалгүй авахыг хүсч байна уу?</p>
              <div className="flex items-center m-1 gap-1 "> 
                  < input
                  className="bg-yellow-100 border-gray-300"
                  type="checkbox"
              />
              <p className="text-sm text-red-600">Тийм</p>
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

export default Checkouts2Orgil;
