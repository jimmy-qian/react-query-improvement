import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { sidebarSizes, useSidebarState } from 'store/sidebar';
import ArrowLeft from 'vectors/arrow-left.svg';
import ArrowRight from 'vectors/arrow-right.svg';
import { MainMenu, SubMenu } from 'modules/dashboard';

import {
  SidebarContainer,
  Logo,
  LogoSmall,
  SidebarToggle,
  SidebarLine,
  SidebarDragContainer,
} from './styled';

export const Sidebar: React.FC = () => {
  const { asPath } = useRouter();
  const {
    sidebarWidth,
    isDragging,
    isSidebarOpen,
    setSidebarWidth,
    setOpenedMenuItems,
    setIsDragging,
    setSidebarOpen,
  } = useSidebarState();

  const onToggleSidebar = () => {
    if (sidebarWidth && sidebarWidth >= sidebarSizes.small && sidebarWidth < sidebarSizes.large) {
      return setSidebarWidth(sidebarSizes.large);
    }

    setOpenedMenuItems([]);
    setSidebarWidth(sidebarSizes.small);
  };

  const onDragSidebar = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  React.useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', dragSidebar);
      document.addEventListener('mouseup', onStopDragSidebar);
      return;
    }

    document.removeEventListener('mouseup', onStopDragSidebar);
  }, [isDragging]);

  const onStopDragSidebar = () => {
    document.removeEventListener('mousemove', dragSidebar);
    setIsDragging(false);
    document.body.style.cursor = 'auto';
  };

  const dragSidebar = (e: MouseEvent) => {
    e.preventDefault();
    // Cursor is set to col-resize to make sure the cursor stays the same when dragging. This gives
    // the application a more stable look.
    document.body.style.cursor = 'col-resize';

    if (
      e.clientX >= sidebarSizes.small &&
      e.clientX <= 500 &&
      window.innerWidth > sidebarSizes.desktopBreakpoint
    ) {
      setSidebarWidth(e.clientX);
    }
  };

  React.useEffect(() => {
    if (window.innerWidth >= sidebarSizes.desktopBreakpoint) {
      const storageValue = localStorage.getItem('sidebarWidth');

      if (!sidebarWidth && storageValue) {
        setSidebarWidth(+storageValue);
      } else if (!sidebarWidth && !storageValue) {
        return window.innerWidth > sidebarSizes.desktopBreakpoint
          ? setSidebarWidth(sidebarSizes.large)
          : setSidebarWidth(sidebarSizes.small);
      } else if (sidebarWidth) {
        localStorage.setItem('sidebarWidth', sidebarWidth.toString());
      }

      if (sidebarWidth && sidebarWidth < 300) {
        setOpenedMenuItems([]);
      }
    }
  }, [sidebarWidth]);

  const windowResize = () => {
    if (window.innerWidth <= sidebarSizes.mobileBreakpoint) {
      setSidebarWidth(0);
    } else if (
      window.innerWidth > sidebarSizes.mobileBreakpoint &&
      window.innerWidth < sidebarSizes.desktopBreakpoint
    ) {
      setSidebarWidth(sidebarSizes.small);
      setSidebarOpen(false);
    } else if (window.innerWidth > sidebarSizes.desktopBreakpoint) {
      setSidebarWidth(sidebarSizes.large);
      setSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', windowResize);

    return () => {
      window.removeEventListener('resize', windowResize);
    };
  }, []);

  React.useEffect(() => {
    if (
      window.innerWidth < sidebarSizes.desktopBreakpoint &&
      window.innerWidth > sidebarSizes.mobileBreakpoint
    ) {
      setSidebarWidth(sidebarSizes.small);
      setOpenedMenuItems([]);
    }

    setSidebarOpen(false);
  }, [asPath]);

  return (
    <SidebarContainer
      isOpen={isSidebarOpen}
      sidebarWidth={sidebarWidth}
      isDragging={isDragging}
      mobileBreakpoint={sidebarSizes.mobileBreakpoint}
    >
      <SidebarToggle onClick={onToggleSidebar}>
        {sidebarWidth && sidebarWidth < sidebarSizes.large ? <ArrowRight /> : <ArrowLeft />}
      </SidebarToggle>
      <Link href="/">
        {sidebarWidth && sidebarWidth >= sidebarSizes.textBreakpoint ? (
          <Logo />
        ) : window.innerWidth > sidebarSizes.mobileBreakpoint ? (
          <LogoSmall />
        ) : null}
      </Link>
      <MainMenu />
      <SubMenu />
      <SidebarDragContainer onMouseDown={onDragSidebar}>
        <SidebarLine />
      </SidebarDragContainer>
    </SidebarContainer>
  );
};
