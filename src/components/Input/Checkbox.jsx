import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
const Checkbox = ({
  label = "checkbox",
  color = "black",
  disabled = false,
}) => {
  return (
    <div>
      <div class="mt-10 flex items-center gap-2">
        <input
          type="checkbox"
          name=""
          className="w-5 h-5 accent-purple-500 rounded border-2 border-gray-300 focus:ring-purple-500"
          id=""
        />
        <label className="text-gray-600">{label}</label>
      </div>
    </div>
  );
};

Checkbox.PropTypes = {
  label: PropTypes.string,
  color: PropTypes.oneOf([
    "default",
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
  ]),
  disabled: PropTypes.bool,
};

Checkbox.defaultprops = {
  label: "checkbox",
  color: "black",
  disabled: false,
};
export default Checkbox;
