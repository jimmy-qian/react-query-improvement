import styled, { css } from 'styled-components';

export const TableCell = styled.div<TableCellProps>`
  display: flex;
  align-items: center;
  flex: 1;
  margin: 0;
  overflow: hidden;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;

  &:last-of-type:not(:first-of-type) {
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 8px 12px;
    margin: 0;
    min-height: 48px;

    &:first-of-type {
      padding-left: 24px;
    }

    &:last-of-type {
      padding-right: 24px;
    }
  }

  ${({ isActionColumn }) =>
    isActionColumn &&
    css`
      max-width: 60px;
      padding: 0;

      @media (min-width: 768px) {
        padding: 0;

        &:last-of-type {
          padding: 0;
        }
      }
    `}
`;

type TableCellProps = {
  isActionColumn?: boolean;
};
