import React from 'react';
import { Link, Route } from 'react-router-dom';
import CharacterPage from './CharacterPage';
import { SingleCard, SingleCardImg, ImgContainer } from './CharacterStyles';

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, type, gender } = character;
  // console.log(character);
  return (
    <SingleCard>
      <Link to={`/character/${id}`}><h2>{name}</h2></Link>
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
