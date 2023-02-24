import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  resize: none;
  margin-top: 10px;
  width: 100%;
`;

export const Textarea = ({ id, name, value, onChange, required }) => (
  <div>
    <StyledTextArea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);
