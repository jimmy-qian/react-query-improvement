import * as RadixTabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsContainer = styled(RadixTabs.Root)`
  border: 1px solid #eeeeee;
`;

export const TabsMenu = styled(RadixTabs.List)`
  display: flex;
  border-bottom: 1px solid #eeeeee;
`;

export const TabsMenuItem = styled(RadixTabs.Trigger)`
  flex-basis: 50%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  font-size: 16px;
  color: #80bc00;
  border: 0;
  border-right: 1px solid #eeeeee;
  background-color: transparent;
  cursor: pointer;

  &:last-child {
    border-right: 0;
  }
`;

export const TabContent = styled(RadixTabs.Content)`
  padding: 16px;
  font-family: sans-serif;
  font-size: 16px;
  color: #6f6e77;
  background-color: #f9f9f9;

  &.active {
    color: #80bc00;
  }
`;
