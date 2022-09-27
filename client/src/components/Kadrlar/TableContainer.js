import { React } from "react";
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from "react-table";
import { GlobalFilter, DefaultFilterForColumn } from "./Filter";
import {getById} from '../../services/KadrService'
import {removeAll} from '../../services/KadrService'
import './TableContainer.css'

export default function Table({ columns, data, render }) {
  console.log(data);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    allColumns,
    getToggleHideAllColumnsProps,
    state,
    visibleColumns,
    prepareRow,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
      defaultColumn: { Filter: DefaultFilterForColumn },
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {pageIndex, pageSize} = state

  return (
    <>
      {
        rows.length===0 && <h1 className="text-2xl">KADRLAR MAVJUD EMAS</h1>
      } 
      { rows.length!==0 &&
        <>
        {/* Ustunlarni yashirish uchun
          <div className="settings">
            <div> 
              <label><input type="checkbox" {...getToggleHideAllColumnsProps()}/>All</label>
              {allColumns.map(column=>(
                <span key={column.id}>
                  <label htmlFor={column.Header}>
                    <input id={column.Header} type='checkbox' {...column.getToggleHiddenProps()} />
                    {column.Header}
                  </label>
                </span>
              ))}
            </div>  
          </div> 
        */}
          <table {...getTableProps()}>
            <thead>
              <tr>
                <th
                  colSpan={visibleColumns.length}
                  style={{
                    textAlign: "center",
                  }}
                >
                  <button onClick={()=>{removeAll(); render() }} style={{display:"flex", backgroundColor:'red'}}>REMOVE ALL</button>
                  {/* rendering global filter */}
                  <GlobalFilter
                    preGlobalFilteredRows={preGlobalFilteredRows}
                    globalFilter={state.globalFilter}
                    setGlobalFilter={setGlobalFilter}
                  />
                </th>
              </tr>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th className="text-center pl-0" {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {column.render("Header")}
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                      </span>
                      {/* rendering column filter */}
                      <div>{column.canFilter ? column.render("Filter") : null}</div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td className="text-center pr-2" onClick={()=>getById(row.values.id)} {...cell.getCellProps()}> {cell.render("Cell")}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination">
            <span>
              Page{' '}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{' '}
            </span>
            <span>
              | Goto to page: {' '}
              <input 
                type='number' defaultValue={pageIndex + 1}
                onChange={e=>{
                  const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                  gotoPage(pageNumber)
                }}
                
              />
            </span>
            <select
              value={pageSize}
              onChange={(e)=>setPageSize(Number(e.target.value))}
            >
              {
                [2,5,10,15,20,25,30,35,40,45,50].map(pageSize =>(
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))
              }
            </select>
            <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</button>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage} >Previous</button>
            <button onClick={()=>nextPage()} disabled={!canNextPage} >Next</button>
            <button onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage} >{'>>'}</button>
          </div>
        </>
      }
    </>
  );
}