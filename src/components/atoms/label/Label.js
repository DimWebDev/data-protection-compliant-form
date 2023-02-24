import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 21px;
  margin-bottom: 5px;
`;

export const Label = ({ labelFor, labelText, isRequired }) => (
  <StyledLabel htmlFor={labelFor}>
    {labelText} {isRequired && <span>*</span>}
  </StyledLabel>
);
