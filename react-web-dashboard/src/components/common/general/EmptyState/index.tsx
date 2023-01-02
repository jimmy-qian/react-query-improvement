import * as React from 'react';

import SearchIcon from 'vectors/search.svg';
import { Text } from 'common/typography';

import { EmptyStateContainer } from './styled';

export const EmptyState: React.FC<EmptyStateProps> = ({ text, as }) => {
  return (
    <EmptyStateContainer as={as || 'div'}>
      {as === 'tr' ? (
        <td>
          <SearchIcon />
          <Text>{text}</Text>
        </td>
      ) : (
        <>
          <SearchIcon />
          <Text>{text}</Text>
        </>
      )}
    </EmptyStateContainer>
  );
};

type EmptyStateProps = {
  text: string;
  as?: 'tr';
};
