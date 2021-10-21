import { FC } from "react";
import { decode } from "html-entities";
import {
  jsonParse,
  positionToPath,
  otherAttrToObj,
  renderPositionType,
} from "util/helper";
import { AtomTitle } from "@components/common/Atom";
import { values } from "lodash";

type PropsType = {
  config: any;
  datasrc: any;
  otherattr: any;
  data: [];
};

const C3Table: FC<PropsType> = ({ config, datasrc, otherattr }) => {
  const { metaConfig } = config;
  const { gridJsonConfig, pathConfig } = metaConfig;
  return (
    <div className={`w-full bg-white rounded-xl shadow-citizen p-4`}>
      <AtomTitle
        item={metaConfig.name}
        customStyle={gridJsonConfig?.title?.style}
        customClassName={gridJsonConfig?.title?.className}
        truncateRow={1}
      />

      <div className="overflow-y-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-10 w-full text-sm leading-none text-gray-800">
              {otherattr.column &&
                otherattr.column.map((item: any, index: any) => {
                  return (
                    <th key={index} className="text-sm leading-none text-gray-400">
                      {item.name}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody className="w-full">
            {datasrc &&
              datasrc.map((item: any, index: number) => (
                <TableContent
                  key={index}
                  item={item}
                  position={positionToPath(config.bpsectiondtl)}
                />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default C3Table;

type PropsTypeItem = {
  item: any;
  position: any;
};

const TableContent: FC<PropsTypeItem> = ({ item, position }) => {
  return (
    <tr className="h-20 text-sm leading-none text-gray-800 border-b border-t bg-white hover:bg-gray-100 border-gray-100">
      <td className="pl-4 cursor-pointer">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg border-2 border-gray-300 text-center pt-1">
            <span
              className={`${renderPositionType(
                item,
                "position90",
                position
              )} text-lg  text-sso group-hover:text-white justify-self-center`}
            ></span>
          </div>
          <div className="pl-2">
            <p className="font-medium">
              {renderPositionType(item, "position91", position)}
            </p>
          </div>
        </div>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">
          {renderPositionType(item, "position92", position)}
        </p>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">
          {renderPositionType(item, "position93", position)}
        </p>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">
          {renderPositionType(item, "position94", position)}
        </p>
      </td>
      <td className="">
        <p className="text-sm font-medium leading-none text-gray-800">
          {renderPositionType(item, "position95", position)}
        </p>
      </td>
    </tr>
  );
};
