import { useState, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  renderPositionType,
  parentidToChildren,
} from "util/helper";
import { isEmpty, replace } from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import TreeMain from "@components/cloud/Custom/Tree/TreeMain";
import { Tooltip } from "antd";

const Sidebar = () => {
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
  
  console.log("config", config);
  console.log("datasrc", datasrc);
  console.log("otherattr", otherattr);
  console.log("positionConfig", positionConfig);
  
  const readyDatasrc = parentidToChildren(
    datasrc,
    "itemcategoryid",
    "parentcategoryid"
    );
    console.log("readyDatasrc", readyDatasrc);
    
    const [visibleIndex, setVisibleIndex] = useState(-1);
    
    const children = readyDatasrc?.[visibleIndex]?.children || [];
    
    console.log("children", children);
    
  if (isEmpty(datasrc)) return null;

  return (
    <>
      {/* <Title /> */}
      {/* dsfdsfdsfsf */}
      <div className="flex flex-no-wrap">
        <div className="absolute h-full z-20">
          <div className="flex w-full">
            <div className="flex items-center justify-center flex-col w-16 h-full bg-white rounded-l-none rounded-lg shadow-citizen">
              <div aria-orientation="vertical" className="rounded">
                {readyDatasrc.map((item: any, index: number) => {
                  const selected = visibleIndex === index;
                  return (
                    <button
                      key={index}
                      className="cursor-pointer w-26 h-9 text-gray-600  focus:outline-none rounded flex items-center justify-center mb-4"
                      onClick={() => setVisibleIndex(index)}
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
                          {/* <AtomIcon
                            // item={item.icon}
                            item={renderPositionType(
                              item,
                              "position49",
                              positionConfig
                            )}
                            checked={selected}
                            color="sso"
                            hoverSolid={true}
                            customClassName="text-lg"
                          /> */}
                          <AtomText
                            item={renderPositionType(
                              item,
                              "position1",
                              positionConfig
                            )}
                          />
                        </Tooltip>
                        {/* {item.title} */}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {children.length > 0 && (
              <div className="flex justify-start flex-col transition duration-700 ease-in-out bg-transparent p-5 pt-1">
                <div className="font-semibold text-lg mb-5">
                  {readyDatasrc?.[visibleIndex]?.title}
                </div>
                <TreeMain
                  datasrc={children}
                  config={config}
                  otherattr={otherattr}
                  customClassName=""
                  selectedId={-1}
                  setSelectedId={() => null}
                  indent={5}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
