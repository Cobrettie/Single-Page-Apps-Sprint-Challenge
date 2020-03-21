import React from "react";
import { SingleCard } from './CharacterStyles';

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
