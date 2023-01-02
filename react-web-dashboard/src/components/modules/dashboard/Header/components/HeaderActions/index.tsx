import * as i from 'types';
import * as React from 'react';

import { useOutsideClick } from 'hooks';

import {
  HeaderActionsContainer,
  HeaderActionsButton,
  HeaderActionsDropdown,
  HeaderActionsDropdownButton,
  DotsIcon,
} from './styled';

export const HeaderActions: React.FC<HeaderActionsProps> = ({ actions }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  return (
    <HeaderActionsContainer>
      <HeaderActionsButton
        onClick={() => setIsOpen((prev) => !prev)}
        icon={<DotsIcon />}
        variant="secondary"
      />
      {isOpen && (
        <HeaderActionsDropdown ref={dropdownRef}>
          {actions.map((action) => (
            <HeaderActionsDropdownButton
              onClick={() => {
                if (action.type !== 'link') {
                  action.onClick?.();
                }

                setIsOpen(false);
              }}
              key={action.label}
            >
              {action.label}
            </HeaderActionsDropdownButton>
          ))}
        </HeaderActionsDropdown>
      )}
    </HeaderActionsContainer>
  );
};

type HeaderActionsProps = {
  actions: i.HeaderAction[];
};
