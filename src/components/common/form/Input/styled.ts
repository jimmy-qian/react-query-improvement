import styled, { css } from 'styled-components';

import { InputProps } from './';

export const InputFieldCss = css<StyledInputProps>`
  color: #000000;
  width: 100%;
  height: 46px;
  padding: 0 8px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px solid #cccccc;
  background-color: #fafafa;
  -webkit-appearance: none;
  line-height: normal;
  overflow: hidden;

  &::placeholder {
    color: #cccccc;
  }

  &:active,
  &:focus {
    caret-color: #80bc00;
    border-color: #80bc00;
    outline: none;
  }

  &[readonly],
  &[disabled] {
    border-color: #e6e6e6;
    color: #cccccc;
    background-color: #f2f2f2;
  }

  ${({ error }) =>
    error &&
    css`
      border-color: #dc3545;

      &:active,
      &:focus {
        caret-color: #dc3545;
        border-color: #dc3545;
        outline: none;
      }
    `};

  ${({ as }) =>
    as === 'textarea' &&
    css`
      max-width: 100%;
      min-height: 150px;
      padding: 8px;
      resize: vertical;
      overflow-y: scroll;
    `};

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 60px;
    `}
`;

export type StyledInputProps = Pick<InputProps, 'autoFocus'> & {
  error?: boolean;
  hasIcon?: boolean;
  as?: 'textarea';
};

export const StyledInput = styled.input`
  ${InputFieldCss};
`;

export const InputIcon = styled.div<IconWrapperProps>`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    max-width: 30px;
    max-height: 100%;
    fill: #000000;
  }

  ${({ readOnly }) =>
    readOnly &&
    css`
      opacity: 0.4;
    `};
`;

type IconWrapperProps = Pick<InputProps, 'readOnly'>;

export const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: flex;
  width: 100%;

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      ${StyledInput} {
        padding: 0 60px 0 8px;
      }

      ${InputIcon} {
        left: auto;
        right: 16px;
      }
    `}
`;

type InputWrapperProps = Pick<InputProps, 'iconPosition'>;
