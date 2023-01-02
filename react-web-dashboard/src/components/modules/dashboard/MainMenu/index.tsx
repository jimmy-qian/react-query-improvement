import * as React from 'react';

import { sidebarSizes, useSidebarState } from 'store/sidebar';
import BrowsersIcon from 'vectors/browsers-outline.svg';
import PenIcon from 'vectors/pen.svg';
import { MenuContainer, MenuItem } from 'modules/dashboard';

export const MainMenu: React.FC = () => {
  const { setSidebarWidth, openedMenuItems, setOpenedMenuItems } = useSidebarState();

  const handleSubitemOpen = (id: string) => {
    let newOpenedMenuItems: string[] = [];

    if (openedMenuItems.includes(id)) {
      newOpenedMenuItems = openedMenuItems.filter((item) => item !== id);
    } else {
      newOpenedMenuItems = [...openedMenuItems, id];
    }

    setOpenedMenuItems(newOpenedMenuItems);

    if (window.innerWidth > sidebarSizes.mobileBreakpoint) {
      setSidebarWidth(sidebarSizes.large);
    }
  };

  return (
    <MenuContainer>
      <MenuItem
        to="/dashboard"
        title="Dashboard"
        id="dashboard"
        icon={<BrowsersIcon />}
        baseUrl="/dashboard"
      />
      <MenuItem
        as="button"
        title="Manage Users"
        id="manage-users"
        icon={<PenIcon />}
        onOpen={handleSubitemOpen}
        subItems={[
          {
            to: '/dashboard/users',
            title: 'Users Overview',
          },
          {
            to: '/dashboard/users/create',
            title: 'Create User',
          },
        ]}
        baseUrl="/dashboard/users"
      />
    </MenuContainer>
  );
};
