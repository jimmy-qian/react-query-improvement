import styled, { css, keyframes } from 'styled-components';

import { ButtonProps } from './';

export const buttonLoaderAnimation = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`;

export const StyledButtonLoader = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 6px;
    height: 6px;
    margin-right: 3px;
    background-color: #ffffff;
    border-radius: 100%;
    animation: ${buttonLoaderAnimation} 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }

    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }
`;

export const ButtonIcon = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 8px 0 0;
  display: flex;
  align-items: center;
`;

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  min-width: 200px;
  height: 48px;
  padding: 24px 16px;
  color: #ffffff;
  background-color: #80bc00;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  border: 0;

  svg {
    fill: #ffffff;
    width: 16px;
    height: 16px;
  }

  &:hover {
    color: #ffffff;
    background-color: #a3e31b;
  }

  &:focus {
    background-color: #628f01;
  }

  @media (min-width: 992px) {
    transition: background-color 0.2s, border-color 0.2s;

    + button {
      margin: 0 0 0 8px;
    }
  }

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: #ffffff;
      background-color: #0058bc;

      &:hover {
        color: #ffffff;
        background-color: #348ff7;
      }

      &:focus {
        background-color: #032e5e;
      }
    `}

  ${({ size }) =>
    size === 'auto' &&
    css`
      width: auto;
      min-width: auto;
    `}

  ${({ isLoading }) =>
    isLoading &&
    css`
      cursor: not-allowed;

      &:hover,
      &:focus {
        background-color: #80bc00;
      }
    `}

  ${({ isDisabled }) =>
    isDisabled &&
    css`
    color: #FFFFFF};
    background-color: #E6E6E6;
    cursor: not-allowed;

    &:focus {
      background-color: #E6E6E6;
    }

    @media (min-width: 992px) {
      transition: none;

      &:hover {
        background-color: #E6E6E6;
      }
    }
  `};

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      flex-direction: row-reverse;

      ${ButtonIcon} {
        margin: 0 0 0 8px;
      }
    `}

  ${({ iconOnly }) =>
    iconOnly &&
    css`
      width: 48px;

      ${ButtonIcon} {
        margin: 0;
      }
    `}
`;
