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

const Checkouts2Weekly3 = () => {
  const {
    config,
    readyDatasrc,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetnemgooReady,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);

  // console.log("Checkouts2Weekly3 config", config);
  // console.log("Checkouts2Weekly3 readyDatasrc", readyDatasrc);
  // console.log("Checkouts2Weekly3 widgetnemgooReady", widgetnemgooReady);
  // console.log("Checkouts2Weekly3 positionConfig", positionConfig);
  const item = readyDatasrc[0];
  return (
    <div className="py-0 px-4 md:px-6 2xl:px-0 2xl:mx-auto 2xl:container">
      <div className="flex flex-col justify-start items-start space-y-9">
        <div className="flex p-4 md:p-6 xl:p-10 bg-white w-full  flex-col justify-start items-start shadow-xl">
          <div className="flex gap-3">
            <p className="text-lg bg-red-500 text-white rounded-full h-7 w-7 flex items-center justify-center ">
              4
            </p>
            <RenderAtom
              item={item?.position1}
              defaultAtom="title"
              customClassName="text-lg md:text-xl font-normal  leading-normal text-gray-900 tracking-tighter"
            />
          </div>
          <hr className=" w-full mt-3" />
          <div className="w-full  flex flex-col justify-start items-start mt-12 space-y-6 md:space-y-9">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-3">
              {/* <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="w-auto"
                /> */}
              {readyDatasrc &&
                readyDatasrc.map((item: any, index: number) => {
                  return (
                    <button className="flex justify-start bg-gray-100  py-5 px-5 rounded  mx-2 my-2 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-red-500 ">
                      <RenderAtom
                        item={item?.position2}
                        defaultAtom="image"
                        customClassName="w-10 h-10 "
                      />
                      <div className="flex flex-col justify-start items-start ">
                        <RenderAtom
                          item={item?.position3}
                          defaultAtom="text"
                          customClassName="text-sm leading-4 text-gray-800 ml-5  font-bold checkbox checked:border-none "
                        />
                        <RenderAtom
                          item={item?.position4}
                          defaultAtom="text"
                          customClassName="text-xs leading-4 text-gray-500 mt-2 ml-5"
                        />
                      </div>
                    </button>
                  );
                })}
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

export default Checkouts2Weekly3;
