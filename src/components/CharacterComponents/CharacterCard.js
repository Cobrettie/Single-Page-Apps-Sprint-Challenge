import React from 'react';
import { SingleCard, SingleCardImg, ImgContainer } from './CharacterStyles';

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, type, gender } = character;
  console.log(character);
  return (
    <SingleCard>
      <h2>{name}</h2>
      <ImgContainer>
        <SingleCardImg src={image}></SingleCardImg>
      </ImgContainer>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      {type === '' ? <p>Type: No type available</p> : <p>Type: {type}</p>}
      <p>Gender: {gender}</p>
    </SingleCard>
  );
}
