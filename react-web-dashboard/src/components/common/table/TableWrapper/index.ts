import styled, { css } from 'styled-components';

export const TableWrapper = styled.div<TableWrapperProps>`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 100%;
  margin-bottom: 24px;
  border-spacing: 0;

  ${({ hasPagination }) =>
    !hasPagination &&
    css`
      margin-bottom: 0;
    `};
`;

type TableWrapperProps = {
  hasPagination?: boolean;
};
