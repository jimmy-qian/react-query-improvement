import { TableCell } from '@labela/components/table/TableCell/src';
import styled, { css } from 'styled-components';

export const TableHeadCell = styled(TableCell)<TableHeadCellProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: #222222;
  letter-spacing: 1.6px;
  text-transform: uppercase;

  ${({ isClickable }) =>
    isClickable &&
    css`
      cursor: pointer;
      user-select: none;

      @media (min-width: 992px) {
        transition: color 0.2s;

        &:hover {
          color: #eeeeee;
        }
      }
    `}
`;

type TableHeadCellProps = {
  isClickable?: boolean;
};
