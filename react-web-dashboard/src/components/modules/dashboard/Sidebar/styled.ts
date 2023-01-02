import styled, { css } from 'styled-components';

import { slideInAnimation } from 'styles/animations';
import { hexToRgba, media } from 'styles/utils';
import LogoSmallIcon from 'vectors/logo-small.svg';
import LogoIcon from 'vectors/logo.svg';

export const SidebarContainer = styled.div.attrs<SidebarContainerProps>(
  ({ sidebarWidth, mobileBreakpoint }) => ({
    style: {
      width: window.innerWidth >= mobileBreakpoint ? sidebarWidth : '100%',
    },
  }),
)<SidebarContainerProps>`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 40px 16px 24px 16px;
  background-color: ${({ theme }) => theme.colors.white.dark};
  z-index: 1;
  display: flex;
  flex-direction: column;
  display: none;

  ${({ isDragging }) =>
    !isDragging &&
    css`
      transition: width 300ms ease;
    `}

  ${({ isOpen }) =>
    isOpen &&
    css`
      display: flex;
      z-index: 3;
      animation: ${slideInAnimation} 300ms ease;
      box-shadow: ${({ theme }) => theme.shadows.overlay};
    `}

  ${media.desktop`
    right: auto;
    top: 0;
    display: flex;
  `}
`;

type SidebarContainerProps = {
  isOpen?: boolean;
  sidebarWidth?: number | null;
  isDragging?: boolean;
  mobileBreakpoint: number;
};

export const Logo = styled(LogoIcon)`
  display: block;
  max-width: 193px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const LogoSmall = styled(LogoSmallIcon)`
  display: block;
  width: 56px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const SidebarToggle = styled.button`
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  position: absolute;
  width: 36px;
  aspect-ratio: 1/1;
  display: none;
  justify-content: center;
  align-items: center;
  left: 100%;
  top: 80px;
  z-index: 5;
  transform: translate(-50%, 0);
  cursor: pointer;

  & > svg {
    width: 24px;
  }

  ${media.desktop`
    display: flex;
  `}
`;

export const SidebarLine = styled.div`
  background-color: ${({ theme }) => hexToRgba(theme.colors.gray, '0.4')};
  height: 100vh;
  width: 2px;
  position: absolute;
  right: 0;
  z-index: 4;
  cursor: col-resize;

  ${media.large`
    &:active {
      background-color: ${({ theme }) => theme.colors.green};
    }
  `}

  ${media.desktop`
    top: 0;
  `}
`;

export const SidebarDragContainer = styled.div`
  position: absolute;
  right: 0px;
  height: 100%;
  width: 20px;
  top: 0;
  cursor: col-resize;
  z-index: 4;
  display: none;

  ${media.desktop`
    display: block;
  `}

  ${media.large`
    &:active > div {
      background-color: ${({ theme }) => theme.colors.green};
    }
  `}
`;
