import { flexRender } from '@tanstack/react-table';
import type { Table } from '@tanstack/table-core';

import { TableCell, TableRow } from '..';

export const PrimeBodyRows = <RowData extends Record<string, any> = Record<string, any>>({
  table,
  onRowClick,
  onRowHover,
}: PrimeBodyRowsProps<RowData>) => {
  return (
    <>
      {table.getRowModel().rows.map((row) => {
        return (
          <TableRow
            key={row.id}
            {...{
              ...(onRowClick && {
                isClickable: true,
                onClick: () => onRowClick(row.original),
              }),
              ...(onRowHover && {
                onMouseOver: () => onRowHover(row.original),
              }),
            }}
          >
            {row.getVisibleCells().map((cell) => {
              const align = cell.column.columnDef.meta?.align || 'left';
              const flex = cell.column.columnDef.meta?.flex || 1;
              const fixedWidth = cell.column.columnDef.meta?.fixedWidth || undefined;
              const hideMobile = cell.column.columnDef.meta?.hideMobile || false;

              return (
                <TableCell
                  key={cell.id}
                  isActionColumn={cell.column.id === 'actions'}
                  {...{ align, flex, fixedWidth, hideMobile }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </>
  );
};

type PrimeBodyRowsProps<RowData extends Record<any, any>> = {
  table: Table<RowData>;
  onRowClick?: (row: RowData) => void;
  onRowHover?: (row: RowData) => void;
};
