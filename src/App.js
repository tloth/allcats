import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logo from "./Allcats_badge.svg";
import "./App.css";
import Navigation from "./Navigation";
import SingleCat from "./SingleCat";

function App() {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    fetch("https://5e5932cd7777050014463360.mockapi.io/cats")
      .then(result => result.json())
      .then(json => setCats(json))
      .catch(err => console.log({ err }));
  }, []);

  console.log({ cats });

  return (
    // <div className="App">
    <>
      <Navigation />
      <H1>Choose cats</H1>
      {cats ? (
        <CatList>
          {cats.map(cat => {
            if (cat.tags.includes("best")) {
              return (
                <SingleCat
                  name={cat.name}
                  description={cat.description}
                  image={cat.image}
                  best={true}
                  key={cat.id}
                />
              );
            } else {
              return (
                <SingleCat
                  name={cat.name}
                  description={cat.description}
                  image={cat.image}
                  key={cat.id}
                />
              );
            }
          })}
        </CatList>
      ) : null}
    </>
    // </div>
  );
}

const H1 = styled.h1`
  text-align: center;
`;

const CatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
`;

export default App;
