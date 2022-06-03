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
import _ from "lodash";

export default function Card110_2() {
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

  // console.log("card110_2", readyDatasrc);

  const datascrgroup: any = _.groupBy(readyDatasrc, function (n) {
    return n[config.widgetnemgooReady?.groupPath];
  });
  var titles = new Array();
  readyDatasrc &&
    readyDatasrc.map((item: any, index: number) => {
      const title = renderPositionType(item, "position1", positionConfig);
      !titles?.includes(title) && titles.push(title);
    });
  //console.log("tities", titles);
  return (
    <div className="w-full py-1 px-1">
      {titles &&
        titles.map((item: any, index: number) => {
          return (
            <div key={item?.id || index} className="py-3 w-full">
              <div className="sm:flex w-full justify-between mb-5">
                <AtomTitle
                  item={item}
                  link=""
                  customStyle={{}}
                  customClassName="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-5 text-gray-700"
                  truncateRow={2}
                />
              </div>
              {Object.keys(datascrgroup).map((key: any) => {
                return datascrgroup[key].map((item1: any, index1: number) => {
                  return item ===
                    renderPositionType(item1, "position1", positionConfig) ? (
                    <div className="py-4">
                      <div className="flex items-center ">
                        <div className="h-4 w-4 bg-green-300 text-white dark:text-black rounded-full flex justify-center items-center font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-check"
                            width={14}
                            height={14}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                          </svg>
                        </div>
                        <AtomText
                          item={renderPositionType(
                            item1,
                            "position3",
                            positionConfig
                          )}
                          customClassName="text-sm leading-5 font-medium text-black pl-6 text-gray-600"
                        />
                        {/* <p className="text-sm md:text-base leading-none text-gray-600 dark:text-gray-300 pl-2">Subscribe button with outlined input </p> */}
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                });
              })}
            </div>
          );
        })}
    </div>
  );
}
