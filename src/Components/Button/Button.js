import React from "react";
import PropTypes from "prop-types";
import { ThemeButton } from "./Button.style";

export const Button = ({ children, ...props }) => {
  return (
    <ThemeButton
      type={props.type}
      variant={props.variant}
      size={props.size}
      id={props.id}
      onClick={props.onClick}
      disabled={props.disabled}
      {...props}
    >
      {children}
    </ThemeButton>
  );
};

Button.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
};
