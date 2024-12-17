import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  className,
  variant = "solid",
  onClick,
  disabled,
  color,
  size = "sm",
  fullwidth,
}) => {
  const baseStyle = "text-center m-1 px-2 py-1 rounded";

  const variantStyles = {
    solid: "bg-[#202020] text-white",
    text: "text-dark hover:bg-[#c0c0c0]",
    outline: "text-black bg-white border border-black",
  };

  const colorStyles = {
    red: {
      solid: "bg-[#f50538] text-white",
      outline: "border bg-white border-red-500 text-red-500",
      text: "text-[#f50538] hover:bg-[#c0c0c0]",
    },
    blue: {
      solid: "bg-[#3d4b91] text-white",
      outline: "border bg-white border-blue-500 text-blue-500",
      text: "text-[#3d4b91] hover:bg-[#c0c0c0]",
    },
    green: {
      solid: "bg-[#72b043] text-white",
      outline: "border bg-white border-green-500 text-green-500",
      text: "text-[#72b043] hover:bg-[#c0c0c0]",
    },
    yellow: {
      solid: "bg-[#f8cc1b] text-black",
      outline: "border bg-white border-yellow-400 text-yellow-400",
      text: "text-[#f8cc1b] hover:bg-[#c0c0c0]",
    },
  };

  const variantStyle = variantStyles[variant];
  const colorStyle = color ? colorStyles[color][variant] : "";
  const sizeStyle =
    size === "sm"
      ? `text-${size} px-2 py-1`
      : size === "md"
      ? `text-${size} px-3 py-2`
      : size === "lg"
      ? `text-${size} px-4 py-3`
      : "";
  const widthStyle = fullwidth ? "w-full" : "w-auto";
  const disabledStyle = disabled ? "opacity-50 cursor-not-allowed" : "";

  const btnStyle = `${baseStyle} ${variantStyle} ${colorStyle} ${sizeStyle} ${widthStyle} ${disabledStyle} ${className}`;

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
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(["red", "blue", "green", "yellow"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullwidth: PropTypes.bool,
};

export default Button;
