import React from "react";

export const Textarea = ({ id, name, value, onChange, required }) => (
  <div>
    <label htmlFor={id}>{name}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);


