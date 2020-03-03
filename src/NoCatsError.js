import React from "react";
import styled from "styled-components";

const NoCatsError = () => {
  return (
    <Container>
      <p>
        Un<i>fur</i>tunately, there are no cats for you to see here at the
        moment...
      </p>
      <img src="https://http.cat/204" alt="error 204: no content aka no cats" />
    </Container>
  );
};

const Container = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

export default NoCatsError;
