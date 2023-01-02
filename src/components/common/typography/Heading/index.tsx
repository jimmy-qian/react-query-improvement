import styled from 'styled-components';

const headingSizes = {
  h1: {
    mobile: '32px',
    desktop: '40px',
  },
  h2: {
    mobile: '26px',
    desktop: '32px',
  },
  h3: {
    mobile: '22px',
    desktop: '26px',
  },
  h4: {
    mobile: '18px',
    desktop: '22px',
  },
  h5: {
    mobile: '16px',
    desktop: '18px',
  },
  h6: {
    mobile: '14px',
    desktop: '16px',
  },
};

export const Heading = styled.h1<HeadingProps>`
  font-weight: 600;
  font-family: serif;
  font-size: ${({ as }) => headingSizes[as || 'h1'].mobile};
  line-height: ${({ lineHeight }) => lineHeight || '140%'};
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '24px 0'};
  text-align: ${({ align }) => align || 'left'};

  @media (min-width: 992px) {
    font-size: ${({ as }) => headingSizes[as || 'h1'].desktop};
  }
`;

export type HeadingProps = {
  align?: 'center' | 'left' | 'right';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?: 'black' | 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'white';
  lineHeight?: string;
  margin?: string;
};
