import { useState, useContext } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { renderPositionType } from "util/helper";
import { Tooltip } from "antd";
import Link from "next/link";
import { isEmpty, replace } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
  AtomLink,
} from "@components/common/Atom";
import { useCloud } from "hooks/use-cloud";

export default function MainMenu() {
  const {
    config,
    datasrc,
    otherattr,
    widgetnemgoo,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetAllaround,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(router.query?.layoutid);
  if (isEmpty(datasrc)) return null;

  // console.log("MainMenu config", config);
  // console.log("MainMenu datasrc", datasrc);
  // console.log("MainMenu widgetnemgoo", widgetAllaround);
  // console.log("MainMenu positionConfig", positionConfig);
  // console.log("MainMenu widgetnemgoo.link", widgetnemgoo.link);
  switch (widgetnemgoo.type) {
    case "list":
      return (
        <>
          <ul>
            {datasrc.map((item: any, index: number) => {
              const selected = selectedId === item.metaid;

              return (
                <li
                  key={index}
                  className={`focus:outline-none flex  hover:text-white focus:bg-citizen focus:text-green-400 hover:bg-citizen text-gray-600 rounded py-2 pl-1 w-full ${selected}`}
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
                    <a className="focus:text-white hover:text-white w-full ">
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
        <>
          <div className="flex items-center flex-col h-full bg-white rounded-l-none rounded-lg shadow-citizen">
            {datasrc.map((item: any, index: number) => {
              const selected = selectedId === item.metaid;
              return (
                <AtomLink
                  key={index}
                  item={item.metaid ? `/page/${item.metaid}` : "#"}
                >
                  <button
                    key={index}
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
        </>
      );
  }
}
