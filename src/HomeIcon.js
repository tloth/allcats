import React from "react";
import styled from "styled-components";

export default function HomeIcon() {
  return (
    <Svg
      width="44px"
      height="38px"
      viewBox="0 0 44 38"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>home</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Desktop-HD"
          transform="translate(-1363.000000, -10.000000)"
          fill="#2EA372"
        >
          <g id="home" transform="translate(1360.000000, 8.000000)">
            <g id="Group" transform="translate(3.500000, 2.625000)">
              <path
                d="M35,15.75 L35,36.75 L26.25,36.75 L26.25,22.75 L15.75,22.75 L15.75,36.75 L7,36.75 L7,15.75 L35,15.75 Z"
                id="Combined-Shape"
              ></path>
              <polygon
                id="Triangle"
                points="21.4375 3.82627957e-14 42.875 20.125 0 20.125"
              ></polygon>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  );
}

const Svg = styled.svg`
  &:hover {
    opacity: 0.7;
  }
`;
