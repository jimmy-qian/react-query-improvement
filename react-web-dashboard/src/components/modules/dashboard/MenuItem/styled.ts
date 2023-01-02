import Link from 'next/link';
import styled, { css } from 'styled-components';

import { hexToRgba } from 'styles/utils';

const menuItemSubItemHeight = 48;
const menuItemSubItemMarginBottom = 12;

export const MenuItemContainer = styled(Link)<MenuItemProps>`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black.light};
  font-weight: 600;
  text-decoration: none;
  margin-top: 16px;
  padding: 0 16px;
  border-radius: 8px;
  -webkit-appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  overflow: hidden;
  font-size: 16px;

  &:nth-child(1) {
    margin-top: 0;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black.light};
    background-color: ${({ theme }) => hexToRgba(theme.colors.black.light, '0.18')};

    & svg {
      fill: ${({ theme }) => theme.colors.black.light};
    }
  }

  & svg {
    height: 24px;
    width: 24px;
    fill: ${({ theme }) => theme.colors.black.light};
    flex-shrink: 0;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.interactiveElement};

      & svg {
        fill: ${({ theme }) => theme.colors.white};
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};

        & svg {
          fill: ${({ theme }) => theme.colors.white};
        }
      }
    `}

  ${({ variant }) =>
    variant === 'subItem' &&
    css`
      height: ${menuItemSubItemHeight}px;
      margin-bottom: ${menuItemSubItemMarginBottom}px;
      width: auto;
      margin-top: 0;

      &:last-of-type {
        margin-bottom: 0;
      }
    `}
`;

export const MenuItemTitle = styled.span<MenuItemProps>`
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  text-overflow: ellipsis;
  text-align: left;
`;

type MenuItemProps = {
  $isActive?: boolean;
  isOpened?: boolean;
  onClick?: (isOpened: boolean) => void;
  variant?: 'subItem' | null;
  subItemsLength?: number;
};

export const MenuItemIcon = styled.div<MenuItemProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  margin-right: 16px;
  flex-shrink: 0;
`;

export const MenuItemLeft = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  min-width: 60px;
`;

export const MenuItemArrowIcon = styled.div<MenuItemProps>`
  transition: transform 300ms ease;
  line-height: 0;

  ${({ isOpened }) =>
    isOpened &&
    css`
      transform: rotateX(180deg);
    `};
`;

export const MenuItemDropdownContainer = styled.div<MenuItemProps>`
  display: flex;
  width: 100%;
  overflow: hidden;
  transition: max-height 300ms ease;
  max-height: 0;

  ${({ isOpened, subItemsLength = 0 }) =>
    isOpened &&
    css`
      max-height: ${subItemsLength * (menuItemSubItemHeight + menuItemSubItemMarginBottom)}px;
    `}
`;

export const MenuItemDropdownItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  border-left: 1px solid ${({ theme }) => theme.colors.gray};
  padding-left: 24px;
  margin-left: 24px;
  margin-top: 12px;
`;
