import React, {
  useMemo,
  useContext,
  FC,
  useEffect,
  useRef,
  forwardRef,
} from "react";
import {
  useTable,
  useSortBy,
  usePagination,
  useRowSelect,
  useGlobalFilter,
  useAsyncDebounce,
  useFilters,
} from "react-table";
import _ from "lodash";
import styled from "styled-components";

type PropsType = {
  columns: any;
  data: any;
  tableOptions: any;
};

export type ICheckboxProps = {
  indeterminate?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const IndeterminateCheckbox = forwardRef<HTMLInputElement, ICheckboxProps>(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef<HTMLInputElement>(null);
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
      if (typeof resolvedRef === "object" && resolvedRef.current) {
        resolvedRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [resolvedRef, indeterminate]);
    return (
      <div>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </div>
    );
  },
);
type PropsTypeFilter = {
  column: any;
  children?: React.ReactNode;
};
const DefaultColumnFilter: FC<PropsTypeFilter> = ({ column }) => {
  const { filterValue, preFilteredRows, setFilter } = column;
  return (
    <input
      value={filterValue || ""}
      className="border w-full py-2 pl-4 "
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder="Хайх ..."
    />
  );
};

// const addRowNumberColumn = () => {
//   if (!_.find(columns, { id: "row_number" })) {
//     columns.unshift({
//       id: "row_number",
//       width: 50,
//       filterable: false,
//       disableSortBy: true,
//     });
//   }
// };

const Table: FC<PropsType> = ({ columns, data, tableOptions }) => {
  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    selectedFlatRows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { selectedRowIds, pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: {
        pageSize: tableOptions.meta_group_grid_options_mobile.pagesize,
      },
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    },
  );

  const pagelist: any = eval(
    tableOptions.meta_group_grid_options_mobile?.pagelist,
  );

  return (
    <>
      {/* <Styles> */}
      <div className="border ">
        <table className=" border" {...getTableProps()}>
          <thead className="dark:border-gray-200 border-b py-8 bg-indigo-50">
            {headerGroups.map((headerGroup: any, index: any) => (
              <tr
                key={index}
                className="text-sm leading-none text-gray-500 h-12  "
                {...headerGroup.getHeaderGroupProps()}
              >
                <th className="font-normal text-left px-4 break-all border  border-gray-200">
                  №{" "}
                </th>
                {headerGroup.headers.map((column: any, i: any) => (
                  <th
                    key={i}
                    className="font-normal text-left  break-all border  border-gray-200"
                    // style={{ width: "160px" }}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {}
                    <div
                      className={`${column.style ? `w-32` : `d`} `}
                      style={column.style}
                    >
                      <div className="grid grid-rows-2  relative">
                        <div className="self-center px-4">
                          {column.render("Header")}
                          <span className="absolute">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <i className="fa fa-sort-down text-sm pl-2"></i>
                              ) : (
                                <i className="fa fa-sort-up text-sm pl-2"></i>
                              )
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                        <div className=" w-full relative">
                          {column.canFilter ? column.render("Filter") : null}{" "}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="w-full" {...getTableBodyProps()}>
            {page.map((row: any, i) => {
              prepareRow(row);
              return (
                <tr
                  key={i}
                  {...row.getRowProps()}
                  className="text-sm leading-none text-gray-800  hover:bg-gray-100 border-b border-t border-gray-100"
                >
                  <td className="font-normal  text-left  pl-4 p-2  overflow-hidden border border-gray-200">
                    {i + 1}
                  </td>
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        className="font-normal  text-left  pl-4 p-2  overflow-hidden border border-gray-200"
                        style={{ ...cell.column.style }}
                        {...cell.getCellProps()}
                      >
                        {/* {JSON.stringify(cell.column)} */}
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="pagination bg-gray-200 py-2">
          <button
            className="pl-4"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {<i className="far fa-chevron-double-left text-sm pl-2"></i>}
          </button>{" "}
          <button
            className="hover:bg-gray-200"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {<i className="far fa-chevron-left text-sm pl-2"></i>}
          </button>{" "}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {<i className="far fa-chevron-right text-sm pl-2"></i>}
          </button>{" "}
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {<i className="far fa-chevron-double-right text-sm pl-2"></i>}
          </button>{" "}
          <span className="pl-3">
            Хуудас{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span>
            | Go to page:{" "}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              className="rounded py-1 w-16"
              style={{ textAlign: "center" }}
            />
          </span>{" "}
          <select
            value={pageSize}
            className="rounded px-8 py-1"
            style={{ textAlign: "center" }}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {pagelist.map((pageSize: any) => (
              <option className="text-center" key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* <pre>
        <code>
          {JSON.stringify(
            {
              selected: selectedFlatRows.map((d) => d.original),
            },
            null,
            2,
          )}
        </code>
      </pre> */}
    </>
  );
};

export default Table;
