import React from "react";
import styled from "styled-components";

export default function TakeHomeButton() {
  return <Button>Take me home</Button>;
}

const Button = styled.button`
  color: #fff;
  background: #2ea372;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 100%;
  font-weight: 700;
  letter-spacing: 0.1rem;
  padding: 0.8rem;
  border: none;
  cursor: pointer;
  margin: 1rem;
  &: hover {
    opacity: 0.7;
  }
`;
