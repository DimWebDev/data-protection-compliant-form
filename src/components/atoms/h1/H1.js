import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: right;
  font-family: sans-serif;
  width: 80%;
  margin-left: 150px;
  font-size: 45px;
`;

export const H1 = () => {
  return (
    <StyledH1>
      Candidate Application Form - GDPR Compliant by design and by Default
    </StyledH1>
  );
};
