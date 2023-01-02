import create from 'zustand';
// Why use immer: https://itnext.io/why-concept-of-immutability-is-so-damn-important-for-a-beginner-front-end-developer-8da85b565c8e
import { immer } from 'zustand/middleware/immer';

export const sidebarSizes = {
  small: 88,
  large: 360,
  textBreakpoint: 220,
  mobileBreakpoint: 992,
  desktopBreakpoint: 1200,
};

type SidebarState = {
  sidebarWidth: number | null;
  setSidebarWidth: (width: number) => void;
  isSidebarOpen: boolean;
  setSidebarOpen: (openState: boolean) => void;
  openedMenuItems: string[];
  setOpenedMenuItems: (items: string[]) => void;
  isDragging: boolean;
  setIsDragging: (dragState: boolean) => void;
};

export const useSidebarState = create<SidebarState>()(
  immer((set) => ({
    sidebarWidth: null,
    setSidebarWidth: (width) => set(() => ({ sidebarWidth: width })),
    isSidebarOpen: false,
    setSidebarOpen: (openState) => set(() => ({ isSidebarOpen: openState })),
    openedMenuItems: [],
    setOpenedMenuItems: (items) => set(() => ({ openedMenuItems: items })),
    isDragging: false,
    setIsDragging: (dragState) => set(() => ({ isDragging: dragState })),
  })),
);
