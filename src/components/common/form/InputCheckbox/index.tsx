import * as React from 'react';

import { Checkbox } from 'common/form/Checkbox';
import { FormField, FormFieldProps } from 'common/form/FormField';

export const InputCheckbox = ({
  name,
  label,
  error,
  description,
  onChange,
  value,
  checkboxLabel,
  margin,
}: InputCheckboxProps) => {
  const handleOnChange = () => onChange(!value);

  return (
    <FormField {...{ label, name, error, description, margin }}>
      <Checkbox label={checkboxLabel} onChange={handleOnChange} isActive={value} />
    </FormField>
  );
};

export type InputCheckboxProps = FormFieldProps & {
  checkboxLabel?: string;
  onChange: (value: boolean) => void;
  value: boolean;
};
