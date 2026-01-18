import React from "react";
import { StyledButton, StyledLink, ButtonText } from "./Button.styles";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  tagName?: "button" | "link";
  href?: string;
  type?: "primary" | "default" | "round" | "round-line" | "icon-text";
  size?: "small" | "medium" | "large";
  buttonType?: "button" | "submit";
  icon?: React.ReactNode;
  iconPosition?: "left";
  ariaLabel?: string;
  disabled?: boolean;
  isActive?: boolean;
  onClick?: () => void;
}

export default function Button({
  className,
  children,
  tagName = "button",
  href,
  type = "default",
  size = "medium",
  buttonType = "button",
  icon,
  iconPosition,
  ariaLabel,
  disabled = false,
  isActive = false,
  onClick,
}: ButtonProps) {
  const styledProps = {
    $typeStyle: type,
    $size: size,
    $iconPosition: iconPosition,
    $isActive: isActive,
  };

  const buttonProps = {
    className,
    "aria-label": ariaLabel,
    disabled,
  };

  const handleClickEvt = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const contents = (
    <>
      {icon && iconPosition === "left" && icon}
      {children && <ButtonText>{children}</ButtonText>}
    </>
  );

  if (tagName === "link" && href) {
    return (
      <StyledLink {...styledProps} {...buttonProps} to={href}>
        {contents}
      </StyledLink>
    );
  } else {
    return (
      <StyledButton
        {...styledProps}
        {...buttonProps}
        type={buttonType}
        onClick={handleClickEvt}
        disabled={disabled}
      >
        {contents}
      </StyledButton>
    );
  }
}
