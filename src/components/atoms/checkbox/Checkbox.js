import React from "react";
import { Label } from "../label/Label";

export const Checkbox = ({
  id,
  name,
  isChecked,
  onChange,
  labelText,
  type,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onChange}
      />
      <Label htmlFor={id} labelText={labelText} />
      {type !== "consent" && (
        <>
          <a href="/">Terms and Conditions</a> and to the{" "}
          <a href="!"> Privacy Policy,</a>{" "}
        </>
      )}
    </div>
  );
};
