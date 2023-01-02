import { Label } from '@labela/components/form/Label/src';
import styled, { css } from 'styled-components';

import { FormFieldProps } from './';

export const FormFieldsWrapper = styled.div<FormFieldsWrapperProps>`
  position: relative;
  flex-basis: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;

  &:last-child {
    margin-bottom: 0;
  }

  ${Label} {
    flex-basis: 100%;
  }

  ${({ margin }) =>
    margin &&
    css`
      margin: ${margin};
    `};
`;

type FormFieldsWrapperProps = Pick<FormFieldProps, 'margin'>;

export const FormFieldDescription = styled.span<FormFieldDescriptionProps>`
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  font-family: sans-serif;
  display: inline-block;

  ${({ isError }) =>
    isError &&
    css`
      color: #dc3545;
    `}
`;

type FormFieldDescriptionProps = {
  isError?: boolean;
};

export const FormFieldDelete = styled.div<FormFieldDeleteProps>`
  position: absolute;
  z-index: 20;
  top: 0;
  right: 0;
  height: 35px;
  width: 40px;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: red;
    width: 24px;
    height: 24px;
  }
`;

type FormFieldDeleteProps = {
  hasLabel?: boolean;
};
