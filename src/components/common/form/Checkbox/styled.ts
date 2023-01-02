import styled, { css } from 'styled-components';

export const CheckboxContainer = styled.label<CheckboxContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
  font-size: 14px;
  font-family: sans-serif;

  &:last-of-type {
    margin-bottom: 0;
  }

  ${({ isFocusVisible, isSelected, isActive }) =>
    (isFocusVisible || isSelected || isActive) &&
    css`
      border-color: #80bc00;
    `}
`;

type CheckboxContainerProps = {
  isActive?: boolean;
  isSelected?: boolean;
  isFocusVisible?: boolean;
};

export const Container = styled.div<ContainerProps>`
  height: 16px;
  width: 16px;
  margin-right: 8px;
  border: 2px solid #80bc00;
  flex-shrink: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ isRadio }) => css`
    border-radius: ${isRadio ? '100%' : '2px'};
  `}

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #80bc00;
    `}
`;

type ContainerProps = {
  isActive?: boolean;
  isRadio?: boolean;
};

export const Circle = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 100%;
  background-color: #fff;
`;

export const Check = styled.div`
  display: inline-block;
  transform: rotate(45deg);
  height: 10px;
  width: 5px;
  margin-top: -4px;
  border-bottom: 3px solid #fff;
  border-right: 3px solid #fff;
`;
