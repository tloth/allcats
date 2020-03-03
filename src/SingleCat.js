import React from "react";
import styled from "styled-components";

import TakeHomeButton from "./TakeHomeButton";

export default function SingleCat({ name, description, image }) {
  return (
    <Article>
      <Container>
        <Img src={image} alt={name}></Img>
        <h2>{name}</h2>
        <p>{description}</p>
      </Container>
      <TakeHomeButton />
    </Article>
  );
}

const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 260px;
  background: #fff;
  padding: 0.3rem;
  margin: 1rem auto;
  @media only screen and (min-width: 769px) {
    margin: 1rem auto;
  }
`;

const Container = styled.div`
  padding: 1rem;
`;

const Img = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;
