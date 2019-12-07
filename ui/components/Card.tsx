import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  max-width: 80%;
  height: 400px;

  padding: 1em;
  margin: 1em auto 3em auto;
  background-color: #fafafa;
  border-radius: 7px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  transition: all 150ms ease-out;

  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.2);
    transform: translateY(-0.5em);
  }
`;

export default Card;
