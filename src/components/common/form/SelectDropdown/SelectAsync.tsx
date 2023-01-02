import * as React from 'react';
import { StylesConfig, GroupBase } from 'react-select';
import AsyncSelect, { AsyncProps } from 'react-select/async';

import { FormField, FormFieldProps } from 'common/form/FormField';

import customStyles from './customStyles';

export const SelectAsync = <
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
}: SelectAsyncProps<Option, IsMulti, Group>) => {
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
      <AsyncSelect name={name} classNamePrefix="react-select" {...selectProps} {...stylingProps} />
    </FormField>
  );
};

type SelectAsyncProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = AsyncProps<Option, IsMulti, Group> &
  FormFieldProps & {
    additionalStyles?: StylesConfig<Option, IsMulti, Group>;
  };
