import * as React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table';

import { Pagination } from 'common/interaction/Pagination';
import { TableCell } from 'common/table/TableCell';
import { TableHeadCell } from 'common/table/TableHeadCell';
import { TableWrapper } from 'common/table/TableWrapper';

import { PaginationTableRow, PaginationTableBody } from './styled';

export const PaginationTable = <RowData extends Record<any, any> = object>({
  columns,
  data,
  isLoading,
  onRowClick,
  onRowHover,
  pagination,
}: PaginationTableProps<RowData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
  });

  return (
    <>
      <TableWrapper as="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <PaginationTableRow key={headerGroup.id} as="tr" isHeaderRow>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHeadCell
                    key={header.id}
                    as="th"
                    isActionColumn={header.column.id === 'actions'}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHeadCell>
                );
              })}
            </PaginationTableRow>
          ))}
        </thead>
        <PaginationTableBody as="tbody">
          {isLoading && <div>Loading...</div>}
          {!data.length && !isLoading && <div>No results...</div>}
          {data.length && !isLoading && (
            <>
              {table.getRowModel().rows.map((row) => {
                return (
                  <PaginationTableRow
                    key={row.id}
                    as="tr"
                    {...{
                      ...(onRowClick && {
                        isClickable: true,
                        onClick: () => onRowClick(row.original!),
                      }),
                      ...(onRowHover && {
                        onMouseOver: () => onRowHover(row.original!),
                      }),
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          key={cell.id}
                          as="td"
                          isActionColumn={cell.column.id === 'actions'}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      );
                    })}
                  </PaginationTableRow>
                );
              })}
            </>
          )}
        </PaginationTableBody>
      </TableWrapper>
      {!isLoading && pagination && <Pagination pagination={pagination} />}
    </>
  );
};

export type PaginationTableProps<RowData extends Record<any, any>> = {
  columns: ColumnDef<RowData>[];
  data: RowData[];
  isLoading?: boolean;
  onRowClick?: (row: RowData) => void;
  onRowHover?: (row: RowData) => void;
  sortableColumns?: string[];
  pagination?: {
    limit: number;
    offset: number;
    total: number;
  };
};
