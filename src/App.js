import React, { useState, useEffect } from "react";
import styled from "styled-components";

import logo from "./Allcats_badge.svg";
import "./App.css";
import Navigation from "./Navigation";
import SingleCat from "./SingleCat";

function App() {
  const [cats, setCats] = useState(null);

  // useEffect(() => {
  //   fetch("https://5e5932cd7777050014463360.mockapi.io/cats")
  //     .then(result => result.json())
  //     .then(json => setCats(json))
  //     .catch(err => console.log({ err }));
  // }, []);

  useEffect(() => {
    setCats([
      {
        id: "1",
        name: "Mr Business",
        image: "https://placekitten.com/g/600/400",
        description:
          // "This is a good cathhhhhhhhhhhh hhhhhh  hhhhhhhhhhhh  hhhhhhhhhh hhhhhhh hhhhhhhhhh hhhhhhhhh hhhhhhhh hhhhhh hhhhhh hhhhh hhhhhh  hhhhhhhhhhh hhhhhhh hhhhhh  hhh hhdhbf djfbhds bfhdsb fhsdbf hsdbfhsdbf hdshfs udhfsu difhsd fjsdkhfsufhsudfsdiu fsdfbdviudbf vfvhue vheugheufnfeo feifeoub erufnefjenfreuib feriuberfberfberufbeurof efreofheuofbef efoerfer feirfbe feirfwofn ebofer",
          "This is a good cat",
        tags: []
      },
      {
        id: "2",
        name: "Cesar",
        image: "https://placekitten.com/g/600/400",
        description: "Another great cat",
        tags: ["best"]
      },
      {
        id: "3",
        name: "Kathie",
        image: "https://placekitten.com/g/600/400",
        description: "Master of chaos",
        tags: []
      },
      {
        id: "4",
        name: "Hana",
        image: "https://placekitten.com/g/600/400",
        description: "Con-CATenate",
        tags: []
      },
      {
        id: "5",
        name: "Kylo Ren",
        image: "https://placekitten.com/g/600/400",
        description: "Darkside pioneer",
        tags: []
      },
      {
        id: "6",
        name: "Mr Whiskers",
        image: "https://placekitten.com/g/600/400",
        description: "The greatest cat that has ever lived",
        tags: ["best"]
      },
      {
        id: "7",
        name: "Count Cat-ula",
        image: "https://placekitten.com/g/600/400",
        description: "Likes taking naps. Dislikes being talked to a baby voice",
        tags: []
      },
      {
        id: "8",
        name: "Chairman Meow",
        image: "https://placekitten.com/g/600/400",
        description:
          "Likes a quiet house. Dislikes when jazz musicians call each other cats",
        tags: []
      },
      {
        id: "9",
        name: "Cat-herine the Great",
        image: "https://placekitten.com/g/600/400",
        description: "Likes catnip. Dislikes birds",
        tags: ["best"]
      },
      {
        id: "10",
        name: "Mephistopheles",
        image: "https://placekitten.com/g/600/400",
        description:
          "Likes being social. Dislikes the growing wage gap between the rich and the poor which is slowly resulting in the decline of the middle class",
        tags: []
      },
      {
        id: "11",
        name: "Catrina",
        image: "https://placekitten.com/g/600/400",
        description:
          "Likes being playful and affectionate. Dislikes improve comedy",
        tags: []
      },
      {
        id: "12",
        name: "Cleo-catra",
        image: "https://placekitten.com/g/600/400",
        description:
          "Likes being playful and affectionate. Dislikes improve comedy",
        tags: []
      },
      {
        id: "13",
        name: "Tony",
        image: "https://placekitten.com/g/600/400",
        description:
          "Likes staring out the window. Dislikes the warlocks curse that transformed him into a cat",
        tags: []
      },
      {
        id: "14",
        name: "Jeremy Corbyn",
        image: "https://placekitten.com/g/600/400",
        description:
          "Enjoys sleeping in the sun. Dislikes 15th century feudal Japan",
        tags: []
      },
      {
        id: "15",
        name: "Cat-man and Robin",
        image: "https://placekitten.com/g/600/400",
        description: "Likes cuddling with humans. Dislikes badminton",
        tags: []
      },
      {
        id: "16",
        name: "Tiger Woods",
        image: "https://placekitten.com/g/600/400",
        description: "Enjoys long walks on the beach",
        tags: []
      },
      {
        id: "17",
        name: "Smelly Cat",
        image: "https://placekitten.com/g/600/400",
        description: "What are they feeding you?",
        tags: []
      },
      {
        id: "18",
        name: "Earlene Wisozk",
        image: "https://placekitten.com/g/600/400",
        description: "The greatest",
        tags: []
      },
      {
        id: "19",
        name: "Prince Phillip",
        image: "https://placekitten.com/g/600/400",
        description: "International cat super start",
        tags: []
      },
      {
        id: "20",
        name: "Cardi B",
        image: "https://placekitten.com/g/600/400",
        description: "North Carolina",
        tags: []
      }
    ]);
  }, []);

  console.log({ cats });

  return (
    // <div className="App">
    <>
      <Navigation />
      <h1>Choose cats</h1>
      {cats ? (
        <CatList>
          {cats.map(cat => {
            return (
              <SingleCat
                name={cat.name}
                description={cat.description}
                image={cat.image}
                key={cat.id}
              />
            );
          })}
        </CatList>
      ) : null}
    </>
    // </div>
  );
}

const CatList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0;
  max-width: 1200px;
  @media only screen and (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    margin: 4rem auto;
  }
`;

export default App;
