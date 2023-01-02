import { flexRender } from '@tanstack/react-table';
import type { Table } from '@tanstack/table-core';

import { TableHeadCell, TableRow } from '..';

export const PrimeHeadCells = <RowData extends Record<string, any> = Record<string, any>>({
  table,
}: PrimeHeadCellsProps<RowData>) => {
  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} isHeaderRow>
          {headerGroup.headers.map((header) => {
            const align = header.column.columnDef.meta?.align || 'left';
            const flex = header.column.columnDef.meta?.flex || 1;
            const fixedWidth = header.column.columnDef.meta?.fixedWidth || undefined;
            const hideMobile = header.column.columnDef.meta?.hideMobile || false;

            return (
              <TableHeadCell
                key={header.id}
                isActionColumn={header.column.id === 'actions'}
                {...{ align, flex, fixedWidth, hideMobile }}
              >
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHeadCell>
            );
          })}
        </TableRow>
      ))}
    </>
  );
};

type PrimeHeadCellsProps<TData> = {
  table: Table<TData>;
};
