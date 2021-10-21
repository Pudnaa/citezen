import { FC, useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
  toBoolean,
} from "util/helper";
import _ from "lodash";
import {
  AtomTitle,
  AtomText,
  AtomNumber,
  AtomIcon,
} from "@components/common/Atom";
import MainImage from "@cloud/Custom/Image/MainImage";
import FieldItem from "@cloud/Custom/Item/FieldItem";

const TableMain = () => {
  const {
    config,
    datasrc: ddd,
    otherattr,
    positionConfig,
    metaConfig,
    gridJsonConfig,
    pathConfig,
    Title,
    widgetDefault,
  } = useContext(WidgetWrapperContext);

  const datasrc = ddd.slice(0, 5);

  // console.log("TableMain datasrc", datasrc);
  console.log("TableMain pathConfig", pathConfig);
  let readyColumn = _.orderBy(
    _.filter(pathConfig, (item) => {
      return (
        item?.isshow === "1" &&
        !item?.fieldpath.includes(".") &&
        item?.datatype !== "group"
      );
    }) || [],
    ["displayorder"]
  );
  // const tdKeys = _.keys(_.head(datasrc));

  // console.log("readyColumn", readyColumn);

  return (
    <div
      className={`w-full overflow-y-auto scrollbar scrollbar-thumb-${widgetDefault.color} scrollbar-track-gray-200 scrollbar-thin hover:scrollbar-thumb-${widgetDefault.color}-dark scrollbar-thumb-rounded-full`}
    >
      <table className="w-full whitespace-nowrap table-fixed border-collapse ">
        <thead>
          <tr className="w-full text-sm leading-none text-gray-500 h-10">
            {readyColumn.map((item: any, index: number) => {
              return (
                <th
                  key={index}
                  className="font-normal text-left pl-4 break-all w-48"
                >
                  {item.labelname}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="w-full">
          {datasrc.map((trItem: any, index: number) => {
            const tdRows = _.values(trItem);
            return (
              <tr
                key={index}
                className="h-16 text-sm leading-none text-gray-800  hover:bg-gray-100 border-b border-t border-gray-100"
              >
                {readyColumn.map((itemColumn: any, index2: number) => {
                  const fieldpath = itemColumn.fieldpath.toLowerCase();
                  return (
                    <td
                      key={index2}
                      className="font-normal text-left pl-4 break-all w-48 overflow-hidden border border-gray-200"
                    >
                      {/* <FieldItem
                        item={trItem?.[fieldpath]}
                        config={itemColumn}
                      /> */}
                      {trItem?.[fieldpath]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableMain;

/*
<tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
  <td className="pl-4 cursor-pointer">
    <div className="flex items-center">
      <div className="w-10 h-10">
        <img
          className="w-full h-full"
          src="https://cdn.tuk.dev/assets/templates/olympus/projects.png"
        />
      </div>
      <div className="pl-4">
        <p className="font-medium">UX Design &amp; Visual Strategy</p>
        <p className="text-xs leading-3 text-gray-600 pt-2">Herman Group</p>
      </div>
    </div>
  </td>
  <td className="pl-12">
    <p className="text-sm font-medium leading-none text-gray-800">72%</p>
    <div className="w-24 h-3 bg-gray-100 rounded-full mt-2">
      <div className="w-20 h-3 bg-green-progress rounded-full" />
    </div>
  </td>
  <td className="pl-12">
    <p className="font-medium">32/47</p>
    <p className="text-xs leading-3 text-gray-600 mt-2">5 tasks pending</p>
  </td>
  <td className="pl-20">
    <p className="font-medium">$13,000</p>
    <p className="text-xs leading-3 text-gray-600 mt-2">$4,200 left</p>
  </td>
  <td className="pl-20">
    <p className="font-medium">22.12.21</p>
    <p className="text-xs leading-3 text-gray-600 mt-2">34 days</p>
  </td>
  <td className="pl-16">
    <div className="flex items-center">
      <img
        className="shadow-md w-8 h-8 rounded-full"
        src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
      />
      <img
        className="shadow-md w-8 h-8 rounded-full -ml-2"
        src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
      />
      <img
        className="shadow-md w-8 h-8 rounded-full -ml-2"
        src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
      />
      <img
        className="shadow-md w-8 h-8 rounded-full -ml-2"
        src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
      />
    </div>
  </td>
  <td className="px-7 2xl:px-0"></td>
</tr>
*/
