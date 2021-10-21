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
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
} from "@components/common/Atom";

import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const Card31 = () => {
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
  //console.log("Card31 config", config);
  // console.log("Card31 datasrc", datasrc);
  //console.log("Card31 otherattr", otherattr);
  // console.log("Card31 positionConfig", positionConfig);

  const { column } = otherattr;

  //   "column": [
  //     {
  //         "name": "Хөрөнгийн нэр",
  //         "path": "assets"
  //     },
  //     {
  //         "name": "Төрөл",
  //         "path": "type"
  //     },
  //     {
  //         "name": "Он",
  //         "path": "since"
  //     },
  //     {
  //         "name": "Үнэ",
  //         "path": "price"
  //     }
  // ]

  return (
    <table className="table-fixed mt-10 w-full">
      <thead>
        <tr className="border-b border-gray-200">
          {column.map((item: any, index: number) => {
            return (
              <th key={index} className="pb-7">
                <AtomText
                  item={item.name}
                  customClassName="text-gray-500 text-base leading-4 font-semibold opacity-50"
                />
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {datasrc.map((item: any, index: number) => {
          return (
            <tr className="border-b border-gray-200" key={index}>
              <td className="min-w-max">
                <div className="flex items-center py-3">
                  <img
                    alt="laptop"
                    src={renderPositionType(item, "position2", positionConfig)}
                    className="object-cover object-center w-24 h-24 rounded"
                  />
                  <div className="flex flex-col pl-5">
                    <AtomTitle
                      item={renderPositionType(
                        item,
                        "position1",
                        positionConfig
                      )}
                      link=""
                      customStyle={{}}
                      customClassName="text-lg font-semibold leading-6 text-gray-800"
                      truncateRow={0}
                    />
                    <AtomText
                      item={renderPositionType(
                        item,
                        "position3",
                        positionConfig
                      )}
                      customClassName="text-sm font-medium leading-5 text-gray-500"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="flex flex-row">
                  <div className="w-4 h-4 bg-gradient-to-br from-red-300 to-purple-500 rounded-full" />
                  <AtomText
                    item={renderPositionType(
                      item,
                      "position91",
                      positionConfig
                    )}
                    customClassName="text-md font-medium pl-2 leading-5 text-gray-500"
                  />
                </div>
              </td>
              <td>
                <AtomText
                  item={renderPositionType(item, "position92", positionConfig)}
                  customClassName="text-md font-medium pl-2 leading-5 text-gray-500"
                />
              </td>
              <td>
                <AtomCurrency
                  item={renderPositionType(item, "position4", positionConfig)}
                  customClassName="text-md font-medium leading-5 text-gray-500"
                  type="mnt"
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Card31;
