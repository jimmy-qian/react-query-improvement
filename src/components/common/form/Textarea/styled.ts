import { InputFieldCss } from '@labela/components/form/Input/src/styled';
import styled from 'styled-components';

export const StyledTextarea = styled.input<TextareaProps>`
  ${InputFieldCss};
`;

type TextareaProps = {
  error?: boolean;
  as?: 'textarea';
};
