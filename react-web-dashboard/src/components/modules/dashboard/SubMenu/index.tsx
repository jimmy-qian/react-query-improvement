import * as React from 'react';
import { signOut } from 'next-auth/react';

import LogoutIcon from 'vectors/logout.svg';
import UserIcon from 'vectors/user.svg';
import { MenuItem } from 'modules/dashboard';

import { SubMenuContainer } from './styled';

export const SubMenu: React.FC = () => {
  return (
    <SubMenuContainer>
      <MenuItem
        id="my-account"
        to="/dashboard/my-account"
        title="My account"
        icon={<UserIcon />}
        baseUrl="/dashboard/my-account"
      />
      <MenuItem
        as="button"
        id="log-out"
        onClick={() => signOut()}
        title="Log out"
        icon={<LogoutIcon />}
        baseUrl=""
      />
    </SubMenuContainer>
  );
};
