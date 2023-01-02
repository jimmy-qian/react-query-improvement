import styled from 'styled-components';

import { media } from 'styles/utils';

export const MenuContainer = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  ${media.desktop`
    margin-top: 32px;
  `}
`;
