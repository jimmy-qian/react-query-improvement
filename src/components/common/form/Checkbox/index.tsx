import * as React from 'react';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useToggleState } from '@react-stately/toggle';

import { Container, Circle, Check, CheckboxContainer } from './styled';

export const Checkbox = ({ isRadio, isActive, label, ...otherProps }: CheckboxProps) => {
  const state = useToggleState(otherProps);
  const ref = React.useRef(null);
  const { inputProps } = useCheckbox(otherProps, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <CheckboxContainer isFocusVisible={isFocusVisible} isSelected={isActive} isActive={isActive}>
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <Container aria-hidden="true" isRadio={isRadio} isActive={isActive}>
        {!isRadio && isActive && <Check />}
        {isRadio && isActive && <Circle />}
      </Container>
      {label}
    </CheckboxContainer>
  );
};

export type CheckboxItemType = {
  label: string;
  value: string;
};

export type CheckboxProps = {
  isRadio?: boolean;
  isActive?: boolean;
  label?: string;
  onChange: () => void;
};
