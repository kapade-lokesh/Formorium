import React from "react";
import clsx from "clsx";
import PropTypes, { func } from "prop-types";
import theme from "../../theme/theme";

const Input = ({
  type = "text",
  variant = "standard",
  className = "",
  placeholder = "",
  color = "default",
  label = "Label",
  size = "md",
  id = "floating_input",
  disabled = false,
  fullwidth = false,
  onChange,
}) => {
  const isComplexType = ["date", "color", "file"].includes(type);

  // Define input and label classes
  const inputClasses = clsx(
    theme.input.base,
    theme.input.variants[variant]?.input,
    theme.input.colors[color]?.input,
    theme.input.sizes[size]?.input,
    {
      [theme.button.fullwidth]: fullwidth,
      [theme.button.disabled]: disabled,
    },
    className
  );

  const labelClasses = clsx(
    theme.input.variants[variant]?.label,
    theme.input.colors[color]?.label,
    theme.input.sizes[size]?.label
  );

  return (
    <div className="relative z-0 w-full">
      <input
        type={type}
        id={id}
        className={inputClasses}
        placeholder={placeholder || " "}
        disabled={disabled}
        onChange={onChange}
      />
      {!isComplexType && (
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "outline"]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  color: PropTypes.oneOf([
    "default",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
  ]),
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  id: PropTypes.string,
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  className: "",
  variant: "standard",
  color: "default",
  type: "text",
  placeholder: "",
  lable: "Label",
  size: "md",
  disabled: false,
  fullwidth: false,
  onChange: () => {},
};
export default Input;
