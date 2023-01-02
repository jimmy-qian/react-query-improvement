import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { Label } from 'common/form/Label';

import { FormFieldsWrapper, FormFieldDescription, FormFieldDelete } from './styled';

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.335 4.335a1.143 1.143 0 011.616 0l13.714 13.714a1.143 1.143 0 01-1.616 1.616L4.335 5.951a1.143 1.143 0 010-1.616z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.665 4.335c.447.446.447 1.17 0 1.616L5.951 19.665a1.143 1.143 0 01-1.616-1.616L18.049 4.335a1.143 1.143 0 011.616 0z"
    />
  </svg>
);

export const FormField: React.FC<FormFieldProps> = ({
  children,
  label,
  name,
  error,
  description,
  margin,
  onDeleteInput,
}) => {
  return (
    <FormFieldsWrapper margin={margin}>
      {label && <Label htmlFor={name}>{label}</Label>}
      {Boolean(onDeleteInput) && onDeleteInput !== null && (
        <FormFieldDelete hasLabel={Boolean(label)} onClick={onDeleteInput}>
          <CloseIcon />
        </FormFieldDelete>
      )}
      {children}
      {(error || description) && (
        <FormFieldDescription isError={Boolean(error)}>
          {error?.message || description || 'Dit veld is verplicht'}
        </FormFieldDescription>
      )}
    </FormFieldsWrapper>
  );
};

export type FormFieldProps = {
  name: string;
  children?: React.ReactNode;
  description?: string;
  error?: FieldError | any;
  label?: string;
  margin?: string;
  onDeleteInput?: (() => void) | null;
};
