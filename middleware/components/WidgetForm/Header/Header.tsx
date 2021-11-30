import _ from "lodash";
import { useContext, useEffect, useState, FC } from "react";
import RenderField from "../RenderField";

type PropsType = {
  processConfig: any;
  header: any;
  listConfigParse: any;
  processParams: any;
};

const Header: FC<PropsType> = ({
  processConfig,
  header,
  listConfigParse,
  processParams,
}) => {
  return (
    <div
      className={`grid gap-4 grid-cols-${
        processConfig.result.columncount || 2
      }`}
    >
      {header.map((item: any, index: number) => {
        if (!item.tabname && item.datatype !== "group") {
          return (
            <RenderField
              key={index}
              field={item}
              attr={processParams.details}
              sectionConfig={listConfigParse}
            />
          );
        }
      })}
    </div>
  );
};

export default Header;
