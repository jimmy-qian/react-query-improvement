import { TableCell } from '@labela/components/table/TableCell/src';
import { TableHeadCell } from '@labela/components/table/TableHeadCell/src';
import { TableRow } from '@labela/components/table/TableRow/src';
import styled from 'styled-components';

export const PaginationTableRow = styled(TableRow)<PaginationTableRowProps>`
  ${TableCell} {
    @media (min-width: 992px) {
      border-bottom: 1px solid #eeeeee;
    }
  }

  ${TableHeadCell},
  &:last-child ${TableCell} {
    border-bottom: 0;
  }
`;

type PaginationTableRowProps = {
  isClickable?: boolean;
};

export const PaginationTableBody = styled.div`
  position: relative;
  width: 100%;
  min-height: 48px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;
