import * as React from 'react';
import Select, { StylesConfig, Props as SelectProps, GroupBase } from 'react-select';

import { FormField, FormFieldProps } from 'common/form/FormField';

import customStyles from './customStyles';

export const SelectSimple = <
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
  ...otherProps
}: SelectSimpleProps<Option, IsMulti, Group>) => {
  const formFieldProps = { name, label, error, description, margin };
  const selectProps = { ...otherProps };
  const stylingProps = {
    styles: {
      ...customStyles<Option, IsMulti, Group>(),
      ...additionalStyles,
    },
  };

  return (
    <FormField {...formFieldProps}>
      <Select name={name} classNamePrefix="react-select" {...selectProps} {...stylingProps} />
    </FormField>
  );
};

type SelectSimpleProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = SelectProps<Option, IsMulti, Group> &
  FormFieldProps & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
