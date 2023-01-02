import styled, { css } from 'styled-components';

export const TableRow = styled.div<TableRowProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 48px;
  border: 0;
  border-bottom: 1px solid #eeeeee;
  padding: 16px 16px 0;

  &:last-of-type {
    border-bottom: 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    border-bottom: 0;
    padding: 0;
  }

  ${({ isHeaderRow }) =>
    isHeaderRow &&
    css`
      display: none;

      @media (min-width: 768px) {
        display: flex;
      }
    `}

  ${({ isHeaderRow, isClickable }) =>
    !isHeaderRow &&
    isClickable &&
    css`
      @media (min-width: 992px) {
        transition: background-color 0.2s;

        &:hover {
          background-color: #f4f5f2;
        }
      }
    `}
`;

export type TableRowProps = {
  isClickable?: boolean;
  isHeaderRow?: boolean;
};
