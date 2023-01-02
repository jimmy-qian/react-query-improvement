import Link from 'next/link';
import styled, { css } from 'styled-components';

import { slideInAnimation } from 'styles/animations';
import { media } from 'styles/utils';
import LogoIcon from 'vectors/logo.svg';
import { StatusLabel } from 'common/general';

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  padding: 0 16px 0 20px;
  height: ${({ hasTabs, isSidebarOpen }) => (hasTabs && !isSidebarOpen ? '128px' : '80px')};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  z-index: 2;
  box-shadow: ${({ theme, isSidebarOpen }) => (isSidebarOpen ? 'none' : theme.shadows.overlay)};
  position: static;
  margin-left: ${({ sidebarWidth }) => `${sidebarWidth}px`};

  ${({ isDragging }) =>
    !isDragging &&
    css`
      transition: margin 300ms ease;
    `}

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      width: 60%;
      animation: ${slideInAnimation} 300ms ease;
    `}

    ${media.desktop<HeaderContainerProps>`
      margin: 0 0 0 88px;
      padding: 0 24px;
      height: ${({ hasTabs }) => (hasTabs ? '128px' : '96px')};
    `}


    ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      background-color: ${({ theme }) => theme.colors.white.dark};
    `};
`;

type HeaderContainerProps = {
  hasTabs?: boolean;
  isSidebarOpen: boolean;
  isDragging?: boolean;
  sidebarWidth?: number | null;
};

export const HeaderTop = styled.div<HeaderContainerProps>`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  ${({ isSidebarOpen }) =>
    isSidebarOpen &&
    css`
      width: 100%;
    `}
`;

export const HeaderTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  align-items: flex-start;

  ${media.tablet`
    flex-direction: row;
    align-items: center;

    ${StatusLabel} {
      align-items: center;
      margin-left: 16px;
    }
  `}

  & > h1 {
    font-size: 16px;
    white-space: nowrap;

    ${media.desktop`
      font-size: 32px;
    `}
  }
`;

export const HeaderButtonWrapper = styled.div`
  display: flex;
  gap: 16px;

  ${media.tablet`
    gap: 24px;
  `}
`;

export const LogoWrapper = styled(Link)`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoMobile = styled(LogoIcon)`
  width: 161px;
  fill: ${({ theme }) => theme.colors.white};
  margin-right: auto;

  ${media.desktop`
    display: none;
  `}
`;
