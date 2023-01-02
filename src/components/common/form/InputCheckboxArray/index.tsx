import * as React from 'react';

import { Checkbox, CheckboxItemType } from 'common/form/Checkbox';
import { FormField, FormFieldProps } from 'common/form/FormField';

export const InputCheckboxArray = ({
  items,
  name,
  label,
  error,
  description,
  onChange,
  value,
  margin,
}: InputCheckboxArrayProps) => {
  const handleOnChange = (item: CheckboxItemType) => {
    if (value.indexOf(item.value) >= 0) {
      onChange(value.filter((val) => val !== item.value));
    } else {
      onChange([...value, item.value]);
    }
  };

  return (
    <FormField {...{ name, label, error, description, margin }}>
      {items?.map((item) => (
        <Checkbox
          key={item.value}
          label={item.label}
          onChange={() => handleOnChange(item)}
          isActive={value.includes(item.value)}
        />
      ))}
    </FormField>
  );
};

export type InputCheckboxArrayProps = FormFieldProps & {
  items?: CheckboxItemType[];
  onChange: (value: string[]) => void;
  value: string[];
};
