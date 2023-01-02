import styled, { css } from 'styled-components';

export const PrimeTableBody = styled.div<PrimeTableBodyProps>`
  position: relative;
  width: 100%;
  margin-bottom: 24px;
  min-height: 72px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  border-radius: 4px;
  overflow: hidden;

  ${({ hasPagination }) =>
    !hasPagination &&
    css`
      margin-bottom: 0;
    `};
`;

type PrimeTableBodyProps = {
  hasPagination?: boolean;
};
