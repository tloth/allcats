import React, { useState, useEffect } from "react";
import styled from "styled-components";

import HomeIcon from "./HomeIcon";

export default function Navigation() {
  return (
    <Nav>
      <P>
        AllCats{" "}
        <span role="img" aria-label="cat">
          🐈
        </span>
      </P>
      <div>
        <A
          href="https://i.giphy.com/media/rLwO3RlhLLwTm/giphy.webp"
          target="blank"
          rel="noopener noreferrer"
        >
          Cat delivery
        </A>
        <A
          href="https://i.giphy.com/media/Zu6AATBpCeUzm/giphy.webp"
          target="blank"
          rel="noopener noreferrer"
        >
          Book a visit
        </A>
        <A
          href="https://i.giphy.com/media/BU6qoWKBTXZvi/giphy.webp"
          target="blank"
          rel="noopener noreferrer"
        >
          Donate
        </A>
        <a href="#">
          <HomeIcon />
        </a>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
`;

const A = styled.a`
  font-size: 1.4rem;
  font-weight: 700;
  text-decoration: none;
  color: #000;
  margin-right: 2rem;
  &: hover {
    color: #2ea372;
  }
`;
