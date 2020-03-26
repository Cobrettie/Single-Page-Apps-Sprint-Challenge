import React from 'react';
import { SingleCard, CardHeader, SingleCardImg, ImgContainer, HeaderNameContainer, HeaderName, CardInfoContainer, CardInfoP } from './CharacterStyles';

export default function CharacterCard({ character }) {
  const { id, name, image, status, species, type, gender, origin, location } = character;
  // console.log(character);
  return (
    <SingleCard>
      <CardHeader>
        <ImgContainer>
          <SingleCardImg src={image}></SingleCardImg>
        </ImgContainer>
        <HeaderNameContainer>
          <HeaderName>{name}</HeaderName>
        </HeaderNameContainer>
      </CardHeader>
      <CardInfoContainer>
        <CardInfoP>Status: <span>{status}</span></CardInfoP>
        <CardInfoP>Species: <span>{species}</span></CardInfoP>
        {type === '' ? <CardInfoP>Type: <span>No type available</span></CardInfoP> : <CardInfoP>Type: <span>{type}</span></CardInfoP>}
        <CardInfoP>Gender: <span>{gender}</span></CardInfoP>
        <CardInfoP>Origin: <span>{origin.name}</span></CardInfoP>
        <CardInfoP>Last Location: <span>{location.name}</span></CardInfoP>
      </CardInfoContainer>
    </SingleCard>
  );
}
