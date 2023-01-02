import * as React from 'react';
import { useForm, UseFormReturn, DeepPartial, FormProvider } from 'react-hook-form';

import { StyledFormContainer } from './styled';

export const FormContainer = <TFormValues extends Record<string, any> = Record<string, any>>({
  children,
  onSubmit,
  defaultValues,
  id,
}: FormContainerProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    mode: 'onChange',
    defaultValues,
  });

  return (
    <StyledFormContainer
      id={id}
      onSubmit={methods.handleSubmit((values) => onSubmit(values, methods))}
    >
      <FormProvider {...methods}>{children(methods)}</FormProvider>
    </StyledFormContainer>
  );
};

export type FormContainerProps<TFormValues extends object> = {
  id?: string;
  defaultValues?: DeepPartial<TFormValues>;
  onSubmit: (data: TFormValues, methods: UseFormReturn<TFormValues, object>) => any | Promise<any>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
};
