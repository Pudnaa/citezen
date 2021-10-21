import React,{useMemo,useContext,FC} from 'react'
import { useTable, useSortBy,usePagination, useRowSelect,useGlobalFilter} from 'react-table'

type PropsType = {
    columns: any;
    data: any;
  };

const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
)

const GlobalFilter = ({ globalFilter , setGlobalFilter} : {globalFilter: any, setGlobalFilter: any})  => {
  return (
      <input
          value={globalFilter || ""}
          onChange={e => {
          setGlobalFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
          }}
          placeholder={`Search All ...`}
      />
      );
  };

const Table: FC<PropsType> = ({ columns,data }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
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
      state: { pageIndex, pageSize,selectedRowIds }
    } = useTable(
      {
        columns,
        data,
        initialState: { pageSize: 2 }
      },
      useGlobalFilter,
      useSortBy,
      usePagination,
      useRowSelect,
      hooks => {
        hooks.visibleColumns.push(columns => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div className="w-0.5">
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
        ])
      }
    )
  
    return (
      
      <>
        <div className="inline-block">
          <table className=" whitespace-nowrap table-fixed border-collapse border"  {...getTableProps()}>
            <thead className="dark:border-gray-200 border-b py-8 bg-indigo-50">
              {headerGroups.map(headerGroup => (
                <tr className="text-sm leading-none text-gray-500 h-12  " {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column:any ,i) => (
                    <th className="font-normal text-left pl-4 break-all border border-gray-200 "  {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {/* {JSON.stringify(column.style)} */}
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼' 
                          : ''}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="w-full" {...getTableBodyProps()}>
                {page.map((row:any) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}   className="text-sm leading-none text-gray-800  hover:bg-gray-100 border-b border-t border-gray-100">
                      
                      {row.cells.map((cell) => {
                        return <td  className="font-normal  text-left  pl-4 p-2  overflow-hidden border border-gray-200" style={{...cell.column.style}} {...cell.getCellProps()}>
                            {/* {JSON.stringify(cell.column.style)} */}
                          {cell.render('Cell')}
                        </td>
                      })}
                    </tr>
                  )
                })}
            </tbody>
          </table>

          <div className="pagination mx-auto  pt-8 flex justify-center sm:justify-end items-center" >
            {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left text-gray-800 dark:text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"    fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="15 6 9 12 15 18"></polyline>
              </svg>
            </button>{' '} */}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left text-gray-800 dark:text-gray-100" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"    fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <polyline points="15 6 9 12 15 18"></polyline>
              </svg>
            </button>{' '}
            <span>
              Хуудас{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>

            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <polyline points="9 6 15 12 9 18"></polyline>
              </svg>
            </button>{' '}
            <span>
              {' '}
              <input
                type="number"
                defaultValue={pageIndex + 2}
                onChange={e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(page)
                }}
                style={{ width: '100px' }}
              />
            </span>{' '}
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[10, 20, 30, 40, 50,100,500].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Харах {pageSize}
                </option>
              ))}
            </select>
          </div>
        </div>
      </>
    )
}

export default Table;