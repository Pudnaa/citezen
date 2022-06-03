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
import RenderAtom from "@components/common/Atom/RenderAtom";
export default function Pagination() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
  } = useContext(WidgetWrapperContext);

  // console.log("Pagination config", config);
  // console.log("Pagination readyDatasrc", readyDatasrc);
  // console.log("Pagination widgetnemgooReady", widgetnemgooReady);
  // console.log("Pagination positionConfig", positionConfig);
  return (
    <>
      <div className="flex  justify-end ">
        <div className="  w-full flex items-center justify-end">
          <div className="flex items-center">
            <div className="w-20 h-10 border border-gray-400   rounded-full flex flex-row items-center justify-center mr-2 cursor-pointer hover:bg-yellow-400 ">
              <p className="text-sm font-normal text-gray-700 hover:text-white ">
                Өмнөх
              </p>
            </div>
            {readyDatasrc &&
              readyDatasrc.map((item: any, index: number) => {
                return (
                  <div className="border border-gray-400 w-10 h-10 bg-white  rounded-full flex items-center justify-center mr-2 cursor-pointer hover:bg-yellow-400 ">
                    <div className="text-sm font-medium  ">
                      <RenderAtom
                        item={item?.position1}
                        defaultAtom="text"
                        customClassName="text-gray-700 hover:text-white"
                      />
                    </div>
                  </div>
                );
              })}
            <div className="w-20 h-10 border border-gray-500  rounded-full flex flex-row items-center justify-center  cursor-pointer hover:bg-yellow-400 ">
              <p className="text-sm font-normal text-gray-700 hover:text-white ">
                Дараах
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
