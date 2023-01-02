import styled from 'styled-components';

export const Paragraph = styled.p<ParagraphProps>`
  font-weight: ${({ weight }) => weight || 500};
  font-size: ${({ size }) => size || 15}px;
  font-family: sans-serif;
  line-height: ${({ lineHeight }) => lineHeight || '140%'};
  color: ${({ color }) => color || 'black'};
  margin: ${({ margin }) => margin || '8px 0px'};
  text-align: ${({ align }) => align || 'left'};
`;

export type ParagraphProps = {
  align?: 'center' | 'left' | 'right';
  color?: 'black' | 'blue' | 'green' | 'red' | 'purple' | 'yellow' | 'white';
  lineHeight?: string;
  margin?: string;
  size?: 12 | 14 | 16 | 18;
  weight?: 300 | 400 | 500 | 600 | 700 | 800;
};
