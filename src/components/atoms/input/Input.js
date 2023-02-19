import React from "react";

export const Input = ({
  id,
  name,
  value,
  onChange,
  required,
  type = "text",
}) => (
  <div>
    <label htmlFor={id}>{name}</label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);
