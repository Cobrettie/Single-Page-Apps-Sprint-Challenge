import React from "react";
import styled from 'styled-components';

const SingleCard = styled.div`
  border: 1px solid #373737;
  width: 100%;
`;

export default function CharacterCard({ character }) {
  const { id, name, status, species, type, gender } = character;
  // console.log(character);
  return (
    <div>
      <SingleCard>
        <h2>Name: {name}</h2>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
        <p>Type: {type}</p>
        <p>Gender: {gender}</p>
      </SingleCard>
    </div>
  );
}
