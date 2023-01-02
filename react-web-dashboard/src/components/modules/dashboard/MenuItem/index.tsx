import * as React from 'react';

import { useRouter } from 'hooks';
import { useSidebarState } from 'store/sidebar';
import ArrowDown from 'vectors/arrow-down.svg';

import {
  MenuItemArrowIcon,
  MenuItemContainer,
  MenuItemDropdownContainer,
  MenuItemDropdownItemsContainer,
  MenuItemIcon,
  MenuItemLeft,
  MenuItemTitle,
} from './styled';

export const MenuItem: React.FC<MenuItemProps> = ({
  as,
  onClick,
  icon,
  to,
  title,
  subItems,
  onOpen,
  id,
  baseUrl,
}) => {
  const { openedMenuItems } = useSidebarState();
  const router = useRouter();
  const IconComponent = icon as React.ReactNode;

  return (
    <>
      <MenuItemContainer
        // TS errors because of the "as" prop from the Link component
        {...(as ? { as: as as any } : {})}
        {...(to ? { href: to } : {})}
        onClick={subItems && onOpen ? () => onOpen(id) : onClick}
        $isActive={
          to === '/dashboard' || !to || to === baseUrl
            ? router.asPath === to
            : router.asPath.includes(to)
        }
      >
        <MenuItemLeft>
          {icon && <MenuItemIcon>{IconComponent}</MenuItemIcon>}
          <MenuItemTitle>{title}</MenuItemTitle>
        </MenuItemLeft>
        {subItems && (
          <MenuItemArrowIcon isOpened={openedMenuItems?.includes(id)}>
            <ArrowDown />
          </MenuItemArrowIcon>
        )}
      </MenuItemContainer>

      {subItems && (
        <MenuItemDropdownContainer
          isOpened={openedMenuItems?.includes(id)}
          subItemsLength={subItems.length}
        >
          <MenuItemDropdownItemsContainer>
            {subItems.map(({ to = '', title, icon }) => {
              const IconComponent = icon as React.ReactNode;

              return (
                <MenuItemContainer
                  href={to}
                  variant="subItem"
                  $isActive={
                    to === '/dashboard' || to === baseUrl
                      ? router.asPath === to
                      : router.asPath.includes(to)
                  }
                  key={to}
                >
                  <MenuItemLeft>
                    {icon && <MenuItemIcon>{IconComponent}</MenuItemIcon>}
                    <MenuItemTitle>{title}</MenuItemTitle>
                  </MenuItemLeft>
                </MenuItemContainer>
              );
            })}
          </MenuItemDropdownItemsContainer>
        </MenuItemDropdownContainer>
      )}
    </>
  );
};

type MenuItemProps = {
  title: string;
  id: string;
  baseUrl: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  onOpen?: (id: string) => void;
  subItems?: SubItem[];
} & (
  | {
      as?: never;
      to?: string;
    }
  | {
      as: string | React.ComponentType;
      to?: never;
    }
);

type SubItem = {
  title: string;
  to?: string;
  icon?: React.ReactNode;
};
