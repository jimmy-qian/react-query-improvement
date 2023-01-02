import * as React from 'react';
import { TableActions } from '@labela/components/table/TableActions/src';
import { TableTextCell } from '@labela/components/table/TableTextCell/src';
import { ColumnDef } from '@tanstack/react-table';

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.04 4.848a1.5 1.5 0 00-.192 2.112l4.2 5.04-4.2 5.04a1.5 1.5 0 102.304 1.92l5-6a1.5 1.5 0 000-1.92l-5-6a1.5 1.5 0 00-2.112-.192z"
    />
  </svg>
);

export const tableColumns = <T extends Record<any, any> = object>(): ColumnDef<T>[] => [
  {
    header: 'Full name',
    footer: (props) => props.column.id,
    cell: ({ row }) => (
      <TableTextCell label="Full name">
        {row.original?.first_name} {row.original?.last_name}
      </TableTextCell>
    ),
  },
  {
    header: 'E-mail',
    accessorKey: 'email',
    cell: ({ getValue }) => <TableTextCell label="E-mail">{getValue()}</TableTextCell>,
  },
  {
    header: 'Account status',
    accessorKey: 'account_status',
    cell: ({ getValue }) => <TableTextCell label="Account status">{getValue()}</TableTextCell>,
  },
  {
    header: 'Is active',
    accessorKey: 'is_active',
    cell: ({ getValue }) => (
      <TableTextCell label="Is active">{getValue() ? 'Yes' : 'No'}</TableTextCell>
    ),
  },
  {
    header: '',
    id: 'actions',
    cell: () => (
      <TableActions>
        <ArrowRightIcon />
      </TableActions>
    ),
  },
];
