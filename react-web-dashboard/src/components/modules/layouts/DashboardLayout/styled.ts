import styled, { css } from 'styled-components';

import { media } from 'styles/utils';

export const ChildrenWrapper = styled.div.attrs<ChildrenWrapperProps>(({ sidebarWidth }) => ({
  style: {
    marginLeft: sidebarWidth + 'px',
  },
}))<ChildrenWrapperProps>`
  padding: 16px;
  box-shadow: ${({ theme }) => theme.shadows.overlay};
  z-index: 1;
  min-height: ${({ headerHasTabs }) =>
    headerHasTabs ? 'calc(100% - 184px)' : 'calc(100% - 80px)'};

  ${({ isDragging }) =>
    !isDragging &&
    css`
      transition: margin 300ms ease;
    `}

  ${media.desktop`
    margin: 0 0 0 88px;
    padding: 24px;
    min-height: calc(100% - 96px);
  `}
`;

type ChildrenWrapperProps = {
  headerHasTabs?: boolean;
  sidebarWidth?: number | null;
  isDragging?: boolean;
};
