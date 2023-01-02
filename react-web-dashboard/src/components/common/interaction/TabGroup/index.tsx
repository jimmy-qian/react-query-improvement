import * as i from 'types';
import * as React from 'react';

import { useRouter } from 'hooks';

import { Tab } from '../Tab';
import { TabGroupContainer } from './styled';

export const TabGroup: React.FC<TabGroupProps> = ({ tabs }) => {
  const router = useRouter();

  return (
    <TabGroupContainer>
      {tabs.map((tab) => (
        <Tab href={tab.to} isActive={router.asPath === tab.to} key={tab.to}>
          {tab.label}
        </Tab>
      ))}
    </TabGroupContainer>
  );
};

export type TabGroupProps = {
  tabs: i.Tab[];
};
