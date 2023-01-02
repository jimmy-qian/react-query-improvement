import * as React from 'react';

import { Checkbox, CheckboxItemType } from 'common/form/Checkbox';
import { FormField, FormFieldProps } from 'common/form/FormField';

export const InputRadio = ({
  items,
  name,
  label,
  error,
  description,
  onChange,
  value,
  margin,
}: InputRadioProps) => {
  return (
    <FormField {...{ name, label, error, description, margin }}>
      {items?.map((item) => (
        <Checkbox
          isRadio
          key={item.value}
          label={item.label}
          onChange={() => onChange(item.value)}
          isActive={value.includes(item.value)}
        />
      ))}
    </FormField>
  );
};

export type InputRadioProps = FormFieldProps & {
  items?: CheckboxItemType[];
  onChange: (value: string) => void;
  value: string;
};
