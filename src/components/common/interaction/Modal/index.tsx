import * as React from 'react';
import * as RadixModal from '@radix-ui/react-dialog';

import { Button } from 'common/interaction/Button';
import { Heading } from 'common/typography/Heading';

import { ModalClose, ModalContent, ModalFooter, ModalOverlay, ModalWrapper } from './styled';

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.335 4.335a1.143 1.143 0 011.616 0l13.714 13.714a1.143 1.143 0 01-1.616 1.616L4.335 5.951a1.143 1.143 0 010-1.616z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.665 4.335c.447.446.447 1.17 0 1.616L5.951 19.665a1.143 1.143 0 01-1.616-1.616L18.049 4.335a1.143 1.143 0 011.616 0z"
    />
  </svg>
);

const ModalTrigger: React.FC<ModalTriggerProps> = ({ children }) => {
  return <RadixModal.Trigger asChild>{children}</RadixModal.Trigger>;
};

type ModalTriggerProps = {
  children: React.ReactNode;
};

const ModalRoot: React.FC<ModalRootProps> = ({ children, isOpen, openModal, closeModal }) => {
  return (
    <RadixModal.Root modal open={isOpen} onOpenChange={() => (isOpen ? closeModal() : openModal())}>
      {children}
    </RadixModal.Root>
  );
};

type ModalRootProps = {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
  openModal: () => void;
};

const ModalContainer: React.FC<ModalContainerProps> = ({
  children,
  actions,
  size = 'large',
  showClose = true,
  title,
}) => {
  return (
    <RadixModal.Portal>
      <ModalOverlay>
        <ModalWrapper
          size={size}
          onInteractOutside={(event) => {
            if (!showClose) event.preventDefault();
          }}
        >
          {showClose && (
            <ModalClose>
              <CloseIcon />
            </ModalClose>
          )}
          <ModalContent>
            {title && (
              <Heading as="h3" margin="0">
                {title}
              </Heading>
            )}
            {children}
          </ModalContent>
          {actions && actions.length > 0 && (
            <ModalFooter>
              {actions.map((action, index) => (
                <Button
                  key={`modalAction_${index}`}
                  onClick={action.onClick}
                  isLoading={action.loading}
                  disabled={action.loading}
                >
                  {action.label}
                </Button>
              ))}
            </ModalFooter>
          )}
        </ModalWrapper>
      </ModalOverlay>
    </RadixModal.Portal>
  );
};

type ModalAction = {
  onClick: () => void;
  label: string;
  loading?: boolean;
};

export type ModalContainerProps = {
  children: React.ReactNode;
  actions?: ModalAction[];
  showClose?: boolean;
  size?: 'small' | 'medium' | 'large';
  title?: string;
};

export const Modal = {
  Root: ModalRoot,
  Container: ModalContainer,
  Trigger: ModalTrigger,
  Footer: ModalFooter,
};
