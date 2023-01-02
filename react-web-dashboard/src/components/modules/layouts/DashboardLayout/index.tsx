import * as i from 'types';
import * as React from 'react';

import { useSidebarState } from 'store/sidebar';
import { Header, Sidebar } from 'modules/dashboard';

import { ChildrenWrapper } from './styled';

export const DashboardLayout: React.FC<Props> = ({
  children,
  headerActions,
  headerMainAction,
  headerTabs,
  statusLabel,
  title,
  isLoading,
}) => {
  const { sidebarWidth, isDragging } = useSidebarState();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Sidebar />
      <Header
        title={title}
        isLoading={isLoading}
        headerActions={headerActions}
        headerMainAction={headerMainAction}
        headerTabs={headerTabs}
        statusLabel={statusLabel}
      />
      <ChildrenWrapper
        headerHasTabs={Boolean(headerTabs)}
        isDragging={isDragging}
        sidebarWidth={sidebarWidth}
      >
        {children}
      </ChildrenWrapper>
    </>
  );
};

type Props = {
  children: React.ReactNode;
  headerActions?: i.HeaderAction[];
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
  isLoading?: boolean;
  statusLabel?: i.StatusLabel;
  title: string;
};
