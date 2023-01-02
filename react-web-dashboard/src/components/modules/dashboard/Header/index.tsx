import * as i from 'types';
import * as React from 'react';

import { useSidebarState } from 'store/sidebar';
import { StatusLabel, Skeleton } from 'common/general';
import { TabGroup } from 'common/interaction';
import { Heading } from 'common/typography';

import { Hamburger } from './components/Hamburger';
import { HeaderActions } from './components/HeaderActions';
import { HeaderMainAction } from './components/HeaderMainAction';
import {
  HeaderButtonWrapper,
  HeaderTitleWrapper,
  HeaderContainer,
  HeaderTop,
  LogoWrapper,
  LogoMobile,
} from './styled';

export const Header: React.FC<HeaderProps> = ({
  headerMainAction,
  headerActions,
  headerTabs,
  title,
  statusLabel,
  isLoading,
}) => {
  const { isSidebarOpen, setSidebarOpen, isDragging, sidebarWidth } = useSidebarState();

  return (
    <HeaderContainer
      hasTabs={Boolean(headerTabs)}
      isSidebarOpen={isSidebarOpen}
      isDragging={isDragging}
      sidebarWidth={sidebarWidth}
    >
      <HeaderTop isSidebarOpen={isSidebarOpen}>
        <Hamburger onClick={() => setSidebarOpen(!isSidebarOpen)} isActive={isSidebarOpen} />
        {isSidebarOpen ? (
          <LogoWrapper href="/">
            <LogoMobile />
          </LogoWrapper>
        ) : (
          <HeaderTop isSidebarOpen={isSidebarOpen}>
            <HeaderTitleWrapper>
              <Heading as="h1" margin="0">
                {isLoading ? <Skeleton isLoading /> : title}
              </Heading>
              {statusLabel && (
                <StatusLabel variant={statusLabel.variant}>{statusLabel.label}</StatusLabel>
              )}
            </HeaderTitleWrapper>
            <HeaderButtonWrapper>
              {headerMainAction && <HeaderMainAction action={headerMainAction} />}
              {headerActions && <HeaderActions actions={headerActions} />}
            </HeaderButtonWrapper>
          </HeaderTop>
        )}
      </HeaderTop>
      {headerTabs && !isSidebarOpen && <TabGroup tabs={headerTabs} />}
    </HeaderContainer>
  );
};

type HeaderProps = {
  headerActions?: i.HeaderAction[];
  headerMainAction?: i.HeaderAction;
  headerTabs?: i.Tab[];
  statusLabel?: i.StatusLabel;
  title?: string;
  isLoading?: boolean;
};
