import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-bottom: 50px;

  // transition for the input element
  transition: border-bottom 0.3s ease-in-out;

  // styles for the input element when it receives focus
  &:focus {
    outline: none;
    border-bottom: 2px solid blue;
  }
  &:not(:focus) {
    background-color: #f5f5f5;
    
  }
`;

export const Input = ({
  id,
  name,
  value,
  onChange,
  required,
  type = "text",
}) => (
  <>
    <StyledInput
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
    />
  </>
);
