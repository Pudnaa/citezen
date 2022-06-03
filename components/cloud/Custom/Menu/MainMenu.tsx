import { useState, useContext } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import { Tooltip } from "antd";
import Link from "next/link";
import { isEmpty, replace } from "lodash";
import { AtomIcon, AtomLink } from "@components/common/Atom";
import { useCloud } from "hooks/use-cloud";

export default function MainMenu() {
  const {
    config,
    readyDatasrc,
    widgetnemgooReady,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(router.query?.layoutid);

  switch (widgetnemgooReady.type) {
    case "list":
      return (
        <>
          <ul>
            {readyDatasrc.map((item: any, index: number) => {
              const selected = selectedId === item.metaid;

              return (
                <li
                  key={item?.id || index}
                  className={`focus:outline-none flex  hover:text-pink-400  focus:text-pink-400  text-gray-600 rounded py-2 pl-1 w-full ${selected}`}
                >
                  {/* <AtomIcon
										// item={item.icon}
										item={renderPositionType(
										item,
										"position49",
										positionConfig,
										)}
										// checked={selected}
										hoverSolid={true}
										customClassName='text-lg w-8'
									/>
									*/}
                  <Link href={item.metaid ? `/page/${item.metaid}` : "#"}>
                    <a className="focus:text-pink-400 hover:text-pink-400 w-full ">
                      <i
                        className={`w-6 ${renderPositionType(
                          item,
                          "position49",
                          positionConfig
                        )}`}
                        style={{ fontSize: 16 }}
                      ></i>
                      <span>
                        {" "}
                        {renderPositionType(item, "position1", positionConfig)}
                      </span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      );
    default:
      return (
        <div className="h-screen  fixed">
          <div className="flex items-center flex-col h-full px-4 bg-white rounded-l-none rounded-lg shadow-sm">
            {readyDatasrc.map((item: any, index: number) => {
              const selected = selectedId === item.metaid;
              return (
                <AtomLink
                  key={item?.id || index}
                  item={item.metaid ? `/page/${item.metaid}` : "#"}
                >
                  <button
                    key={item?.id || index}
                    className="cursor-pointer h-9 text-gray-600  focus:outline-none rounded flex items-center justify-center mb-4"
                    onClick={(item: any) => {
                      setSelectedId(index);
                    }}
                  >
                    <div className="flex items-center">
                      <Tooltip
                        placement="right"
                        title={renderPositionType(
                          item,
                          "position1",
                          positionConfig
                        )}
                      >
                        <AtomIcon
                          // item={item.icon}
                          item={renderPositionType(
                            item,
                            "position49",
                            positionConfig
                          )}
                          checked={selected}
                          color={widgetAllaround.color}
                          hoverSolid={true}
                          customClassName="text-lg"
                        />
                        {/* <AtomText
                                item={renderPositionType(
                                  item,
                                  "position1",
                                  positionConfig
                                )}
                              /> */}
                      </Tooltip>
                      {/* {item.title} */}
                    </div>
                  </button>
                </AtomLink>
              );
            })}
          </div>
        </div>
      );
  }
}
