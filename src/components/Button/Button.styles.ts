// Button.styles.ts
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

type ButtonStyleProps = {
  $typeStyle: "primary" | "default" | "round" | "round-line" | "icon-text";
  $size?: "small" | "medium" | "large";
  $iconPosition?: "left";
  $isActive?: boolean;
  disabled?: boolean;
};

const sharedStyles = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-$size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 0 20px;
  height: 44px;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.$size === "small" &&
    css`
      height: 34px;
      font-$size: 14px;
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      height: 52px;
      font-$size: 17px;
      border-radius: 12px;
    `}

  ${(props) =>
    props.$typeStyle === "primary" &&
    css`
      background-color: #007bff;
      color: #ffffff;
    `}

  ${(props) =>
    props.$typeStyle === "default" &&
    css`
      border: 1px solid #333333;
      color: #111;
    `}

  ${(props) =>
    props.$typeStyle === "round" &&
    css`
      border-radius: 9999px;
    `}

  ${(props) =>
    props.$typeStyle === "round-line" &&
    css`
      border: 1px solid #007bff;
      color: #007bff;
      background-color: transparent;
      border-radius: 9999px;
    `}

  ${(props) =>
    props.$typeStyle === "icon-text" &&
    css`
      gap: 6px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
    `}

  ${(props) =>
    props.$isActive &&
    css`
      box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
    `}
`;

export const StyledButton = styled.button<ButtonStyleProps>`
  ${sharedStyles}
`;

export const StyledLink = styled(Link)<ButtonStyleProps>`
  ${sharedStyles}
`;

export const ButtonText = styled.span`
  font-size: 1em;
`;
