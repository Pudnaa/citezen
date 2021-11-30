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
  AtomImage,
} from "@components/common/Atom";

export default function ProductGrid1() {
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
  // console.log("ProductGrid1 config", config);
  // console.log("ProductGrid1 datasrc", datasrc);
  // console.log("ProductGrid1 otherattr", otherattr);
  // console.log("ProductGrid1 positionConfig", positionConfig);

  return (
    <>
      {/* <Title /> */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 pt-10">
        {datasrc.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex justify-between flex-col p-4 relative animate-fade-in-down w-full"
            >
              <div className="flex justify-center my-8">
                <AtomImage
                  item={renderPositionType(item, "position2", positionConfig)}
                  customClassName="h-full w-full rounded object-cover object-center"
                />
               
              </div>
              <div className="my-1">
                <AtomText
                  item={renderPositionType(item, "position92", positionConfig)}
                  customClassName="text-xs font-medium leading-5 text-gray-400 mt-5"
                />
                <AtomTitle
                  item={renderPositionType(item, "position1", positionConfig)}
                  link=""
                  customStyle={{}}
                  customClassName="text-base font-semibold leading-6 text-gray-900 text-center"
                  truncateRow={2}
                />
              </div>
              <div className="mt-2 flex justify-start w-full items-center">
                <AtomCurrency
                  item={renderPositionType(item, "position47", positionConfig)}
                  customClassName="text-xl font-semibold leading-normal text-green-500"
                  type="mnt"
                />
                {renderPositionType(item, "position4", positionConfig) !==
                  "0" && (
                  <AtomCurrency
                    item={renderPositionType(item, "position4", positionConfig)}
                    customClassName="text-xs  leading-normal text-gray-400 line-through ml-2"
                    type="mnt"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center w-full mt-2 pb-8">
        <button className="bg-white text-red-500 font-normal py-2 px-4 border border-red-500 rounded-full center">
          Бүгдийг харах
        </button>
        </div>
    </>
  );
}