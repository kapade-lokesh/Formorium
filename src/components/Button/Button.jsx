import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import theme from "../../theme/theme";

const Button = ({
  children,
  className,
  variant = "solid",
  color = "black",
  size = "sm",
  fullwidth = false,
  disabled = false,
  onClick,
}) => {
  const btnStyle = clsx(
    theme.button.base,
    theme.button.variants[variant],
    theme.button.colors[color][variant],
    theme.button.sizes[size],
    {
      [theme.button.fullwidth]: fullwidth,
      [theme.button.disabled]: disabled,
    },
    className
  );

  return (
    <button className={btnStyle} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["solid", "text", "outline"]),
  color: PropTypes.oneOf(["red", "blue", "green", "yellow", "purple", "black"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  variant: "solid",
  color: "black",
  size: "sm",
  fullwidth: false,
  disabled: false,
  onClick: () => {},
};

export default Button;
