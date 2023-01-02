import * as React from 'react';
import Link from 'next/link';

import { StyledButton, StyledButtonLoader, ButtonIcon } from './styled';

const ButtonLoader: React.FC = () => (
  <StyledButtonLoader>
    <div />
    <div />
    <div />
  </StyledButtonLoader>
);

const ButtonContent: React.FC<ButtonProps> = ({ children, icon, isLoading }) => (
  <>
    {isLoading ? (
      <ButtonLoader />
    ) : (
      <>
        {icon && <ButtonIcon>{icon}</ButtonIcon>}
        <span>{children}</span>
      </>
    )}
  </>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      buttonType = 'button',
      icon,
      iconPosition = 'left',
      isLoading,
      isDisabled,
      onClick,
      href,
      size,
      ...otherProps
    },
    ref,
  ) => {
    const styledButtonProps = {
      isDisabled,
      iconOnly: !Boolean(children) && Boolean(icon),
      iconPosition,
      isLoading,
      size,
      ref,
    };

    const buttonContentProps = {
      children,
      icon,
      isLoading,
    };

    if (buttonType === 'link' && href && !Boolean(onClick)) {
      return (
        <Link href={href} passHref>
          <StyledButton {...styledButtonProps} {...otherProps}>
            <ButtonContent {...buttonContentProps} />
          </StyledButton>
        </Link>
      );
    }

    return (
      <StyledButton onClick={onClick} {...styledButtonProps} {...otherProps}>
        <ButtonContent {...buttonContentProps} />
      </StyledButton>
    );
  },
);

export type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: () => void;
  href?: string;
  iconOnly?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  buttonType?: 'button' | 'link';
};

export type ButtonIconType = {
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
};

export type ButtonVariantsType = {
  variant?: 'primary' | 'secondary';
};

export type ButtonSizeType = {
  size?: 'auto';
};

export type ButtonProps = ButtonType & ButtonSizeType & ButtonVariantsType & ButtonIconType;
