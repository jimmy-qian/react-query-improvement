import * as React from 'react';
import { FieldError } from 'react-hook-form';

import { FormField, FormFieldProps } from 'common/form/FormField';

import { StyledInput, InputWrapper, InputIcon } from './styled';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      autoFocus,
      disabled,
      name,
      label,
      icon,
      iconPosition = 'left',
      error,
      readOnly,
      description,
      margin,
      onDeleteInput,
      ...props
    },
    ref,
  ) => {
    const IconComponent = icon as React.ReactNode;

    return (
      <FormField {...{ name, label, error, description, margin, onDeleteInput }}>
        <InputWrapper iconPosition={iconPosition}>
          <StyledInput
            {...{
              ...{ autoFocus, disabled, name, readOnly },
              ...(ref && { ref }),
            }}
            id={name}
            error={Boolean(error)}
            hasIcon={Boolean(icon)}
            {...props}
          />
          {icon && <InputIcon readOnly={readOnly}>{IconComponent}</InputIcon>}
        </InputWrapper>
      </FormField>
    );
  },
);

export type InputProps = FormFieldProps & {
  autoFocus?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  error?: FieldError | any;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  placeholder?: string;
  readOnly?: boolean;
  type?: 'password' | 'text';
  value?: string;
};
