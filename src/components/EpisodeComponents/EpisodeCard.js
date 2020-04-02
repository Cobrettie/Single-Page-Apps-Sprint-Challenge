import React from 'react';
import { Route, Link } from 'react-router-dom';
import { SingleCard, HeaderNameContainer, HeaderNameH2, InfoContainerDiv } from './EpisodeStyles';
import { CardInfoP } from '../CharacterComponents/CharacterStyles';

import EpisodeCharactersList from './EpisodeCharactersList';

export default function EpisodeCard({ props, episodes }) {
  const { id, name, air_date, episode, characters } = episodes;
  // console.log(props)

  return (
    <SingleCard>
      <HeaderNameContainer>
        <HeaderNameH2>{name}</HeaderNameH2>
      </HeaderNameContainer>
      <InfoContainerDiv>
        <CardInfoP>Air Date: <span>{air_date}</span></CardInfoP>
        <CardInfoP>Episode: <span>{episode}</span></CardInfoP>
        <CardInfoP>
          Characters: 
          {/* <button onClick={() => props.history.push('/episodecharacters')}>View Characters</button> */}
          <Link to={`/episode/${id}/characters`}>View Characters</Link>
        </CardInfoP>
      </InfoContainerDiv>
    </SingleCard>
  )
}