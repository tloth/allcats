import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HomeIcon from "./HomeIcon";

export default function Navigation() {
  return (
    <Nav>
      <a
        href="https://i.giphy.com/media/rLwO3RlhLLwTm/giphy.webp"
        target="blank"
        rel="noopener noreferrer"
      >
        Cat delivery
      </a>
      <a
        href="https://i.giphy.com/media/Zu6AATBpCeUzm/giphy.webp"
        target="blank"
        rel="noopener noreferrer"
      >
        Book a visit
      </a>
      <a
        href="https://i.giphy.com/media/BU6qoWKBTXZvi/giphy.webp"
        target="blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>
      <a href="#">
        <HomeIcon />
      </a>
    </Nav>
  );
}

const Nav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
`;
