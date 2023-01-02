import * as i from 'types';
import * as React from 'react';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  RowData,
  useReactTable,
} from '@tanstack/react-table';

import { Loading, EmptyState } from 'common/general';
import { Pagination } from 'common/interaction';

import { TableWrapper } from '..';
import { PrimeBodyRows } from './PrimeBodyRows';
import { PrimeHeadCells } from './PrimeHeadCells';
import { PrimeTableBody } from './styled';

declare module '@tanstack/table-core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    align?: 'left' | 'right';
    flex?: number;
    fixedWidth?: number;
    hideMobile?: boolean;
  }
}

export const PrimeTable = <RowData extends Record<any, any> = object>({
  columns,
  data,
  emptyState,
  isLoading,
  onRowClick,
  onRowHover,
  pagination,
}: PrimeTableProps<RowData>) => {
  const table = useReactTable<RowData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: Boolean(pagination) ? getPaginationRowModel() : undefined,
  });

  React.useEffect(() => {
    if (!Boolean(pagination)) return;
    table.setPageSize(20);
  }, [pagination]);

  return (
    <TableWrapper hasPagination={Boolean(pagination)}>
      {isLoading && <Loading position="static" />}

      {emptyState && !isLoading && !data.length && <EmptyState text={emptyState} />}

      {!isLoading && Boolean(data.length && data.length > 0) && (
        <>
          <PrimeHeadCells<RowData> table={table} />
          <PrimeTableBody hasPagination={Boolean(pagination)}>
            <PrimeBodyRows {...{ table, onRowClick, onRowHover }} />
          </PrimeTableBody>

          {!isLoading && pagination && <Pagination pagination={pagination} />}
        </>
      )}
    </TableWrapper>
  );
};

type PrimeTableProps<RowData extends Record<any, any>> = {
  columns: ColumnDef<RowData>[];
  data: RowData[];
  emptyState?: string;
  isLoading?: boolean;
  onRowClick?: (row: RowData) => void;
  onRowHover?: (row: RowData) => void;
  pagination?: i.Pagination;
};
