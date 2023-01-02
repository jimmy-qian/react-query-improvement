import { Label } from '@labela/components/form/Label/src';
import styled from 'styled-components';

export const TableTextCellContainer = styled.div`
  display: flex;
  width: 100%;
  word-break: break-word;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 16px;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: initial;
  }
`;

export const TableTextCellLabel = styled(Label)`
  width: 104px;
  margin: 0 16px 0 0;
  flex-shrink: 0;
  font-weight: 600;

  @media (min-width: 768px) {
    display: none;
  }
`;
