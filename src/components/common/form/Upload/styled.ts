import styled, { css } from 'styled-components';

export const DropzoneContainer = styled.div<DropzoneContainerProps>`
  color: #000000;
  width: 100%;
  height: 46px;
  padding: 0 8px;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  border: 1px dashed #cccccc;
  background-color: #fafafa;
  cursor: pointer;
  display: flex;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      border-color: #e6e6e6;
      color: #cccccc;
      background-color: #f2f2f2;
    `}

  ${({ error }) =>
    error &&
    css`
      color: #dc3545;
      border-color: #dc3545;
    `};
`;

type DropzoneContainerProps = {
  error?: boolean;
  disabled?: boolean;
};

export const DropzoneEmptyText = styled.div`
  display: flex;
  width: 100%;
`;

export const UploadIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlaceholderContainer = styled.div<PlaceholderContainerProps>`
  position: relative;
  display: flex;
  font-size: 14px;
  align-items: center;
  word-break: break-all;
  flex: 1;

  ${({ hasIcon }) =>
    hasIcon &&
    css`
      padding-left: 60px;
    `}

  ${({ iconPosition }) =>
    iconPosition === 'right' &&
    css`
      padding: 0 60px 0 8px;

      ${UploadIcon} {
        left: auto;
        right: 16px;
      }
    `}
`;

type PlaceholderContainerProps = {
  hasIcon: boolean;
  iconPosition?: 'left' | 'right';
};
