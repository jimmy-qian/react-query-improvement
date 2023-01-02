import * as i from 'types';
import { ColumnDef } from '@tanstack/react-table';

import { translateAccountStatus, translateUserIsActive } from 'services';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { StatusLabel } from 'common/general';
import { TableActions, TableTextCell } from 'common/table';

export const tableColumns = (): ColumnDef<i.User>[] => [
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
    cell: ({ getValue }) => <TableTextCell label="E-mail">{getValue() as string}</TableTextCell>,
  },
  {
    header: 'Account status',
    accessorKey: 'account_status',
    cell: ({ getValue }) => (
      <TableTextCell label="Account status">
        {translateAccountStatus[getValue() as string]}
      </TableTextCell>
    ),
  },
  {
    header: 'Is active',
    accessorKey: 'is_active',
    cell: ({ getValue }) => {
      const status = translateUserIsActive(getValue() as boolean);

      return (
        <TableTextCell label="Is active">
          <StatusLabel variant={status?.variant}>{status?.label}</StatusLabel>
        </TableTextCell>
      );
    },
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
