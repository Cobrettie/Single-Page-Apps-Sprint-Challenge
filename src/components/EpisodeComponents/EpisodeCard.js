import React from 'react';
import { SingleCard, HeaderNameContainer, HeaderNameH2, InfoContainerDiv } from './EpisodeStyles';
import { CardInfoP } from '../CharacterComponents/CharacterStyles';

export default function EpisodeCard({ props, episodes }) {
  const { name, air_date, episode } = episodes;
  // console.log(props)

  return (
    <SingleCard>
      <HeaderNameContainer>
        <HeaderNameH2>{name}</HeaderNameH2>
      </HeaderNameContainer>
      <InfoContainerDiv>
        <CardInfoP>Air Date: <span>{air_date}</span></CardInfoP>
        <CardInfoP>Episode: <span>{episode}</span></CardInfoP>
        {/* <CardInfoP> */}
          {/* Characters:  */}
          {/* <Link to={`/episode/${id}/characters`}>View Characters</Link> */}
        {/* </CardInfoP> */}
      </InfoContainerDiv>
    </SingleCard>
  )
}