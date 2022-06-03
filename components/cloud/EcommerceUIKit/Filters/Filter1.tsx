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
  AtomFade,
  AtomImage,
} from "@components/common/Atom";
const Filter1 = () => {
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
  const [showFilters, setShowfilters] = useState(true);
  const [check, setCheck] = useState({
    leather: false,
    cotton: false,
    fabric: false,
    crocodile: false,
    wool: false,
    large: false,
    medium: false,
    small: false,
    mini: false,
    luxesignatire: false,
    luxelondon: false,
  });

  const {
    leather,
    cotton,
    fabric,
    crocodile,
    wool,
    large,
    medium,
    small,
    mini,
    luxesignatire,
    luxelondon,
  } = check;

  // console.log("Filter1 config", config);
  // console.log("Filter1 readyDatasrc", readyDatasrc);
  // console.log("Filter1 widgetnemgooReady", widgetnemgooReady);
  // console.log("Filter1 positionConfig", positionConfig);

  const changeHandler = (e: any) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  const applyFilters = (e: any) => {
    setCheck({
      ...check,
      leather: false,
      cotton: false,
      fabric: false,
      crocodile: false,
      wool: false,
      large: false,
      medium: false,
      small: false,
      mini: false,
      luxesignatire: false,
      luxelondon: false,
    });
  };
  const colors = readyDatasrc[0];
  const colorsList = renderPositionType(colors, "position31", positionConfig);

  return (
    <div className="2xl:container 2xl:mx-auto bg-white z-1">
      <div
        id="filterSection"
        className="relative md:py-10 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full "
      >
        {/* Cross button Code  */}
        <div className=" cursor-pointer absolute right-0 top-0 md:py-10 lg:px-20 md:px-6 py-9 px-4">
          <svg
            className=" lg:w-6 lg:h-6 w-4 h-4"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 1L1 25"
              stroke="#1F2937"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1L25 25"
              stroke="#27272A"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Colors Section */}

        {readyDatasrc &&
          readyDatasrc.map((item: any, index: number) => {
            const list = renderPositionType(item, "position31", positionConfig);
            const t = renderPositionType(item, "position1", positionConfig);
            return t === "Өнгө" || t === "Colors" ? (
              <>
                <div>
                  <div className=" flex space-x-2">
                    <AtomImage
                      item={renderPositionType(
                        colors,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-6 h-6"
                      alt={renderPositionType(
                        colors,
                        "position1",
                        positionConfig
                      )}
                    />
                    <AtomTitle
                      item={renderPositionType(
                        colors,
                        "position1",
                        positionConfig
                      )}
                      customClassName="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 "
                    />
                  </div>
                  <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                    {colorsList &&
                      colorsList.map((item: any, index: number) => {
                        return (
                          <div
                            key={item?.id || index}
                            className=" flex space-x-2 md:justify-center md:items-center items-center justify-start "
                          >
                            <div
                              className={`w-4 h-4 rounded-full bg-${renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              ).toLowerCase()}-600 shadow`}
                            ></div>
                            <AtomText
                              item={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              customClassName="text-base leading-4 text-gray-600 font-normal"
                            />
                          </div>
                        );
                      })}
                  </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
              </>
            ) : (
              <>
                <div key={item?.id || index}>
                  <div className=" flex space-x-2">
                    <AtomImage
                      item={renderPositionType(
                        item,
                        "position2",
                        positionConfig
                      )}
                      customClassName="w-6 h-6"
                      alt={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                    />
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      customClassName="lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800"
                    />
                  </div>
                  <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
                    {list &&
                      list.map((item: any, index: number) => {
                        return (
                          <div
                            key={item?.id || index}
                            className=" flex space-x-2 md:justify-center md:items-center items-center justify-start"
                          >
                            <input
                              className="w-4 h-4 mr-2"
                              type="checkbox"
                              id={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              name={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                              value={renderPositionType(
                                item,
                                "position1",
                                positionConfig
                              )}
                            />
                            <div className=" inline-block">
                              <div className=" flex space-x-6 justify-center items-center">
                                <label
                                  className=" mr-2 text-sm leading-3 font-normal text-gray-600 select-none"
                                  htmlFor={renderPositionType(
                                    item,
                                    "position1",
                                    positionConfig
                                  )}
                                >
                                  {renderPositionType(
                                    item,
                                    "position1",
                                    positionConfig
                                  )}
                                </label>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
              </>
            );
          })}
        <div className="px-0 mt-10 w-full md:w-auto md:mt-0 md:absolute md:right-0 md:bottom-0 md:py-10 lg:px-20 md:px-6">
          <button className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800">
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter1;
