import * as React from 'react';
import { StylesConfig, GroupBase } from 'react-select';
import CreatableSelect, { AsyncCreatableProps } from 'react-select/async-creatable';

import { FormField, FormFieldProps } from 'common/form/FormField';

import customStyles from './customStyles';

export const SelectCreatable = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  additionalStyles,
  name,
  label,
  error,
  description,
  margin,
  value,
  ...otherProps
}: SelectCreatableProps<Option, IsMulti, Group>) => {
  const formFieldProps = { name, label, error, description, margin };
  const selectProps = { value, ...otherProps };
  const stylingProps = {
    styles: {
      ...customStyles<Option, IsMulti, Group>(),
      ...additionalStyles,
    },
  };

  return (
    <FormField {...formFieldProps}>
      <CreatableSelect
        name={name}
        formatCreateLabel={(value) => `Create "${value}"`}
        classNamePrefix="react-select"
        {...selectProps}
        {...stylingProps}
      />
    </FormField>
  );
};

type SelectCreatableProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = AsyncCreatableProps<Option, IsMulti, Group> &
  FormFieldProps & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
