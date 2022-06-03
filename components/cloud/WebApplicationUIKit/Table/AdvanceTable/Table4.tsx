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

export default function Table4() {
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

  //console.log("Table4 config", config);
  //console.log("Table4 readyDatasrc", readyDatasrc);
  //console.log("Table4 widgetnemgooReady", widgetnemgooReady);
  //console.log("Table4 positionConfig", positionConfig);

  return (
    <>
      <div className="w-full">
        <div className="px-1 py-1 md:py-3">
          <div className="lg:flex items-center justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-5 text-gray-800">
              Зээлийн нөхцөл
            </p>
          </div>
        </div>
        <div className="bg-white overflow-x-auto">
          <table className="w-full whitespace-nowrap ">
            <thead>
              <tr className="h-10 w-full text-sm leading-none text-gray-500">
                <th className="font-semibold text-left pl-1 ">
                  Зээлийн хугацаа
                </th>
                <th className="font-semibold text-left pl-11">6 сар хүртэл</th>
                <th className="font-semibold text-left pl-10">7-18 сар</th>
                <th className="font-semibold text-left">
                  19 сар ба түүнээс дээш
                </th>
              </tr>
            </thead>
            {readyDatasrc.map((item: any, index: number) => {
              return (
                <tbody key={item?.id || index} className="w-full ">
                  <tr className=" text-sm leading-none text-gray-700">
                    <td className="pl-1">
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position90",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 font-semibold py-4 text-black"
                      />
                    </td>
                    <td className="pl-11">
                      <div className="flex items-center">
                        <AtomText
                          item={renderPositionType(
                            item,
                            "position91",
                            positionConfig
                          )}
                          customClassName="text-sm leading-5 font-semibold py-4 text-black"
                        />
                      </div>
                    </td>
                    <td>
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position92",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 font-semibold py-4 text-black mr-16 pl-10"
                      />
                    </td>
                    <td>
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position92",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 font-semibold py-4 text-black mr-16"
                      />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
      <hr />
    </>
  );
}
