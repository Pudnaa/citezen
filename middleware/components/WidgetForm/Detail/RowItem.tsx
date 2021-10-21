import { FC, useEffect, useState, useMemo } from "react";
import RenderField from "../RenderField";

type PropsType = {
  column: any;
  rowIndex?: any;
};

const RowsItem: FC<PropsType> = ({ column, rowIndex }) => {
  return (
    <>
      {column.map((item: any, index: number) => (
        <RenderField field={item} rowIndex={rowIndex} />
      ))}
    </>
  );
};

export default RowsItem;
