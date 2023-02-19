import React from "react";

export const Label = ({ labelFor, labelText, isRequired }) => (
  <label htmlFor={labelFor}>
    {labelText} {isRequired && <span>*</span>}
  </label>
);
