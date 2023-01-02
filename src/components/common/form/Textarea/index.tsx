import * as React from 'react';

import { FormField } from 'common/form/FormField';
import { InputProps } from 'common/form/Input';

import { StyledTextarea } from './styled';

export const Textarea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  (
    { autoFocus, disabled, name, label, icon, error, readOnly, description, margin, ...props },
    ref,
  ) => {
    return (
      <FormField {...{ name, label, error, description, margin }}>
        <StyledTextarea
          as="textarea"
          {...{
            ...{ autoFocus, disabled, name, readOnly },
            ...(ref && { ref }),
          }}
          id={name}
          error={Boolean(error)}
          {...props}
        />
      </FormField>
    );
  },
);
