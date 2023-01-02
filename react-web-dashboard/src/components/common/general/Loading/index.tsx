import * as React from 'react';

import LoadingSvg from 'vectors/loading.svg';

import { LoadingContainer } from './styled';

export const Loading: React.FC<LoadingProps> = ({ variant, size, position = 'static', as }) => {
  return (
    <LoadingContainer as={as || 'div'} {...{ variant, size, position }}>
      {as === 'tr' ? (
        <td>
          <LoadingSvg />
        </td>
      ) : (
        <LoadingSvg />
      )}
    </LoadingContainer>
  );
};

export type LoadingProps = {
  variant?: 'black' | 'white';
  size?: 'small' | 'big';
  position?: 'static' | 'absolute';
  as?: 'tr';
};
