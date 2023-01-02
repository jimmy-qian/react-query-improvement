import * as React from 'react';
import Link from 'next/link';

import { TabsMenu, TabsMenuItem, TabContent, TabsContainer } from './styled';

export const Tabs = ({ ariaLabel, defaultValue, tabs, type = 'asContent' }: TabsProps) => {
  return (
    <TabsContainer defaultValue={defaultValue} activationMode="manual">
      <TabsMenu aria-label={ariaLabel || 'Tab menu'} loop>
        {tabs.map((tab) => {
          return type === 'asLink' && tab.link ? (
            <Link href={tab.link} passHref>
              <TabsMenuItem as="button">{tab.title}</TabsMenuItem>
            </Link>
          ) : (
            <TabsMenuItem value={tab.id} key={`tabTitle_${tab.id}`}>
              {tab.title}
            </TabsMenuItem>
          );
        })}
      </TabsMenu>
      {type === 'asContent' &&
        tabs.map((tab) => {
          return (
            <TabContent value={tab.id} key={`tabContent_${tab.id}`}>
              {tab.text}
            </TabContent>
          );
        })}
    </TabsContainer>
  );
};

type Tab = {
  id: string;
  link?: string;
  text?: string;
  title: string;
};

export type TabsProps = {
  ariaLabel?: string;
  defaultValue?: string;
  tabs: Tab[];
  type?: 'asContent' | 'asLink';
};
