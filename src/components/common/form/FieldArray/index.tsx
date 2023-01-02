import * as React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import { Input } from 'common/form/Input';
import { Label } from 'common/form/Label';

import { FieldArraysRoot } from './styled';

export const FieldArray = ({ name, label }: FieldArrayProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <FieldArraysRoot>
      {label && <Label>{label}</Label>}
      {fields?.map((field, index) => {
        return (
          <Input
            key={`fieldArray_${field.id}_${index}`}
            margin="0 0 4px"
            error={errors?.[`${name}[${index}].title`]}
            {...(index !== 0 && {
              onDeleteInput: () => remove(index),
            })}
            {...register(`${name}[${index}].title`, { required: 'This field is required' })}
          />
        );
      })}
      <button type="button" onClick={() => append({ title: '' })}>
        New option
      </button>
    </FieldArraysRoot>
  );
};

export type FieldArrayProps = {
  name: string;
  label?: string;
};
