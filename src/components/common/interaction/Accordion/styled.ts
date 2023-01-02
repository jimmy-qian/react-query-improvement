import * as RadixAccordion from '@radix-ui/react-accordion';
import styled, { css, keyframes } from 'styled-components';

type AnimateProp = {
  animate?: boolean;
};

const open = keyframes`
  from {
    height: 0px;
  }
  to {
    height: calc(var(--radix-accordion-content-height) - 25px);
  }
`;

const close = keyframes`
  from {
    height: calc(var(--radix-accordion-content-height) - 25px);
  }
  to {
    height: 0px;
  }
`;

export const AccordionRoot = styled(RadixAccordion.Root)<AnimateProp>`
  width: 100%;
  border: 1px solid #eeeeee;
`;

export const AccordionChevron = styled.div<AnimateProp>`
  width: 24px;
  height: 24px;

  ${({ animate }) =>
    animate &&
    css`
      transition: transform 0.3s ease-in-out;
    `};
`;

export const AccordionHeader = styled(RadixAccordion.Header)`
  margin: 0;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;

  button {
    height: 45px;
    width: 100%;
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 16px;
    color: #80bc00;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  &[data-state='open'] ${AccordionChevron} {
    transform: rotate(180deg);
  }
`;

export const AccordionItem = styled(RadixAccordion.Item)`
  &:last-child ${AccordionHeader} {
    border-bottom: 0;
  }
`;

export const AccordionContent = styled(RadixAccordion.Content)<AnimateProp>`
  padding: 16px;
  overflow: hidden;
  font-family: sans-serif;
  font-size: 16px;
  color: #6f6e77;
  background-color: #f9f9f9;

  ${({ animate }) =>
    animate &&
    css`
      &[data-state='open'] {
        animation: ${open} 0.3s ease-out forwards;
      }

      &[data-state='closed'] {
        animation: ${close} 0.3s ease-out forwards;
      }
    `}
`;
