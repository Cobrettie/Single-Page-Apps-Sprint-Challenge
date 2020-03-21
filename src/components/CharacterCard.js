import React from "react";
import styled from 'styled-components';

const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 30%;
  margin: 20px;

`;

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, type, gender } = character;
  // console.log(character);
  return (
    <SingleCard>
      <h2>Name: {name}</h2>
      <img src={image}></img>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Type: {type}</p>
      <p>Gender: {gender}</p>
    </SingleCard>
  );
}
