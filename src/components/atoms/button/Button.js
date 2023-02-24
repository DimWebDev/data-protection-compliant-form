import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-top: 50px;
  padding: 30px 30px;
  font-size: 22px;
  background-color: #008cba;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Button = ({ type, text }) => {
  return (
    <>
      <StyledButton type={type}>{text}</StyledButton>
    </>
  );
};
