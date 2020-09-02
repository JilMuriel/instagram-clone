import React from "react";

import "./form-input.styles.css";

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-group">
      <label>
        <div
          className={`form-input__label ${
            otherProps.value ? "input-label__active" : ""
          }`}
        >
          <span className="form-input-label__text">{label}</span>
        </div>
        <input
          aria-label={label}
          aria-required="true"
          autocapitalize="off"
          autocorrect="off"
          maxlength="75"
          className={`form-input `}
          onChange={handleChange}
          {...otherProps}
        />
      </label>
    </div>
  );
};
export default FormInput;
