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

export default function ExpandedChat() {
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
  // console.log("ExpandedChat config", config);
  // console.log("ExpandedChat datasrc", datasrc);
  // console.log("ExpandedChat otherattr", otherattr);
  // console.log("ExpandedChat positionConfig", positionConfig);

  return (
    <div className="container mx-auto">
      <div className="lg:flex">
        <div className="w-full pl-16 mt-6 hidden lg:block">
          <div className="border h-screen flex flex-row justify-between">
            {/* CHAT */}
            <div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center py-2">
                    <div className="ml-4">
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-5 text-gray-800">
                        Сэтгэгдэл
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {datasrc.map((item: any, index: number) => {
                return (
                  <div key={index} className="p-1 flex">
                    <div className="w-10">
                      <img
                        src={renderPositionType(
                          item,
                          "position2",
                          positionConfig
                        )}
                        className="w-12 h-12 rounded-full"
                      />
                    </div>
                    <div className="w-full pr-36">
                      <AtomTitle
                        item={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                        link=""
                        customStyle={{}}
                        customClassName="text-base md:text-xl font-bold leading-tight text-brand"
                        truncateRow={2}
                      />
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position3",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 font-normal py-4 text-gray-800 mr-16 pl-10"
                      />
                      <AtomText
                        item={renderPositionType(
                          item,
                          "position5",
                          positionConfig
                        )}
                        customClassName="text-sm leading-5 font-normal py-4 text-gray-800 mr-16 pl-10"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            {/* CHAT */}
            <div className="h-16 border-t">
              <div className="flex h-full">
                <div className="w-16 h-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-mood-happy"
                    width={26}
                    height={26}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx={12} cy={12} r={9} />
                    <line x1={9} y1={9} x2="9.01" y2={9} />
                    <line x1={15} y1={9} x2="15.01" y2={9} />
                    <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
                  </svg>
                </div>
                <input
                  className="w-full focus:outline-none text-gray-700"
                  placeholder="Type Something here"
                />
                <div className="flex">
                  <div className="w-16 h-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-paperclip"
                      width={26}
                      height={26}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
