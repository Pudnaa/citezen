import { useState, useContext } from "react";
import { useRouter } from "next/router";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  renderPositionType,
  parentidToChildren,
} from "util/helper";
import { Tooltip } from "antd";
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
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);
  const router = useRouter();
  const cloudContext = useCloud();
  const [selectedId, setSelectedId] = useState<any>(router.query?.layoutid);
  if (isEmpty(datasrc)) return null;

  // console.log("MainMenu config", config);
  // console.log("MainMenu datasrc", datasrc);
  // console.log("MainMenu otherattr", otherattr);
  // console.log("MainMenu positionConfig", positionConfig);
  // console.log("MainMenu otherattr.link", otherattr.link);

  return (
    <>
      {/* <Title /> */}
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
                      color={widgetDefault.color}
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

// icon: "far fa-home"
// id: "1"
// metaid: "16312403374741"
// parentid: ""
// title: "Үндсэн нүүр"

// {
//   "position0": {
//       "id": "16329911506561",
//       "sectionid": "16329911506551",
//       "positionname": "position0",
//       "fieldpath": "id",
//       "otherattr": ""
//   },
//   "position1": {
//       "id": "16329911506571",
//       "sectionid": "16329911506551",
//       "positionname": "position1",
//       "fieldpath": "title",
//       "otherattr": ""
//   },
//   "position49": {
//       "id": "16329911506581",
//       "sectionid": "16329911506551",
//       "positionname": "position49",
//       "fieldpath": "icon",
//       "otherattr": ""
//   },
//   "position20": {
//       "id": "16329911506591",
//       "sectionid": "16329911506551",
//       "positionname": "position20",
//       "fieldpath": "parentId",
//       "otherattr": ""
//   },
//   "position21": {
//       "id": "16329911506601",
//       "sectionid": "16329911506551",
//       "positionname": "position21",
//       "fieldpath": "metaId",
//       "otherattr": ""
//   }
// }
